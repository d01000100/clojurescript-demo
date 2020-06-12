(ns sploosh-kaboom.core
  (:require
   [reagent.core :as reagent :refer [atom]]
   [reagent.dom :as rd]))

;; Ships
;; {3 {2 :small}
;;     3 :small}
;;  1 {2 :medium}
;;  2 {1 :medium}
;;  3 {0 :medium}}
;;  
;; Shots
;; {0 {0 true
;;     1 true}
;;  3 {2 true}}

(def board-width 5)
(def board-height 5)
(def ships #{:large :medium :small})
(def all-coords (for [i (range board-width)
                      j (range board-height)]
                  [i j]))

(def length-by-type
  {:small 2
   :medium 3
   :large 4})

(defn ship-fits?
  "Checks if ship that occupies `spaces` doesn't collide with any
   of the other `ships` and fits in the board. 
   [ships spaces]"
  [ships spaces]
  (every? (fn [[i j :as coords]]
            (and (<= 0 i)
                 (< i board-width)
                 (<= 0 j)
                 (< j board-height)
                 (not (get-in ships coords))))
          spaces))

(defn generate-ship
  [start orientation type]
  (let [length (length-by-type type)]
    (take length
          (case orientation
            :horizontal
            (iterate (fn [[i j]] [(inc i) j]) start)
            :vertical
            (iterate (fn [[i j]] [i (inc j)]) start)))))

(defn add-ship
  [ships type]
  (let [start (rand-nth all-coords)
        orientation (rand-nth [:vertical :horizontal])
        ship-spaces (generate-ship start orientation type)]
    (if (ship-fits? ships ship-spaces)
      (reduce (fn [ships coord] (assoc-in ships coord type)) ships ship-spaces)
      (add-ship ships type))))

(defn generate-board []
  (reduce add-ship {} ships))

(def app-state
  (atom {:reveal-ships? false}))

(defn reset-game! []
  (swap! app-state
         #(-> %
              (assoc :moves #{})
              (assoc :tries 0)
              (assoc :ships (generate-board)))))

(reset-game!)

(defn fire! [i j]
  (when-not (get-in (:moves @app-state) [i j])
    (swap! app-state
           (fn [state]
             (-> state
                 (update :moves conj [i j])
                 (update :tries inc)
                ;;  (update-in [:ships i] dissoc j)
                 )))))

(defn ships-remaining []
  (let [ships (:ships @app-state)
        moves (:moves @app-state)]
    (->> (reduce (fn [ships [i j]] (update ships i dissoc j)) ships moves)
         vals
         (mapcat vals)
         (into #{}))))

(defn tile [i j]
  (let [ship? (get-in (:ships @app-state) [i j])
        move? (contains? (:moves @app-state) [i j])
        value (if (:reveal-ships? @app-state)
                (if ship? "X" "O")
                (cond
                  (and ship? move?) "X"
                  move? "O"
                  :else "?"))
        class (cond
                (and ship? move?) :hit
                move? :miss
                :else :unexplored)]
    [:td {:on-click #(fire! i j)
          :class class}
     value]))

(defn board []
  [:table.board
   [:tbody
    (for [i (range board-width)]
      [:tr
       (for [j (range board-height)]
         [tile i j])])]])

(defn show-ships
  []
  (let [types (ships-remaining)
        crossed {:style {:text-decoration :line-through}}]
    [:div.show-ships
     [:p "Ships remaining:"]
     [:table
      [:tr
       (repeat 4 [:td.unexplored "X"])]]
     [:span (when (not (contains? types :large)) crossed)
      "Large ship"]
     [:br]
     [:table
      [:tr
       (repeat 3 [:td.unexplored "X"])]]
     [:span (when (not (contains? types :medium)) crossed)
      "Medium ship"]
     [:br]
     [:table
      [:tr
       (repeat 2 [:td.unexplored "X"])]]
     [:span (when (not (contains? types :small)) crossed)
      "Small ship"]]))

(defn instructions
  []
  [:div
   [:table
    [:tr
     [:td {:style {:padding-right "5%"}}
      [:p "There are three ships of different sizes hidden in the board."
       [:br] "Click on a tile to shoot and reveal what it's in it."
       [:br] "X means you hit and O means you missed."]
      [:p "You have shot " [:strong (or (:tries @app-state) "0")] " times"]]
     [:td
      [show-ships]]]]])

(defn controls []
  [:div
   [:p [:button {:on-click reset-game!}
        "Reset Game"]
    [:input {:type :checkbox
             :id "reveal-ships"
             :value (:reveal-ships? @app-state)
             :on-change #(swap! app-state update :reveal-ships? not)}]
    [:label {:for "reveal-ships"} "Reveal ships"]]])

(defn page []
  [:center#page
   [:h1 "Battlefield Mockup"]
   [instructions]
   [controls]
   [board]])

(rd/render [page]
           (. js/document (getElementById "app")))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
  )
