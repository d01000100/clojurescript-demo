(ns sploosh-kaboom.core
  (:require
   [reagent.core :as reagent :refer [atom]]
   [reagent.dom :as rd]))

(println "This text is printed from src/sploosh-kaboom/core.cljs. Go ahead and edit it and see reloading in action.")

;; define your app data so that it doesn't get over-written on reload

(defn generate-board
  [width height n-ships]
  (let [coords (for [i (range width)
                     j (range height)]
                 [i j])
        board (into [] (repeat width (into [] (repeat height nil))))
        ships-positions (into #{} (take n-ships (shuffle coords)))]
    {:ships (reduce (fn [board coord]
                      (assoc-in board coord (contains? ships-positions coord)))
                    board coords)
     :ships-pos ships-positions}))

(def app-state
  (atom {}))

(defn reset-game! []
  (swap! app-state
         #(-> %
              (dissoc :moves)
              (assoc :tries 0)
              (merge (generate-board 5 5 6)))))
  
(reset-game!)

(defn fire! [i j]
  (when-not (get-in (:moves @app-state) [i j])
    (swap! app-state
           (fn [state]
             (-> state
                 (assoc-in [:moves i j] 1)
                 (update :tries inc))))))

(defn ships-remaining []
  (let [ships (:ships @app-state)
        moves (:moves @app-state)
        board-width (count ships)
        board-height (count (first ships))
        coords (for [i (range board-width)
                     j (range board-height)]
                 [i j])]
    (->> coords
         (filter #(and (get-in ships %) (not (get-in moves %))))
         count)))

(defn tile [i j]
  (let [ship? (get-in (:ships @app-state) [i j])
        move? (get-in (:moves @app-state) [i j])
        value (cond
                  (and ship? move?) "X"
                  move? "O"
                  :else "?")
        color (cond
                (and ship? move?) :red
                move? :blue
                :else "#AAAAAA")]
    [:td {:on-click #(fire! i j)
          :style {:background-color color}}
     value]))

(defn board []
  (let [ships (:ships @app-state)
        board-width (count ships)
        board-height (count (first ships))]
    [:table#board
     [:tbody
      (for [i (range board-width)]
        [:tr
         (for [j (range board-height)]
           [tile i j])])]]))


(defn page []
  [:center#page
   [:h1 "Battlefield Mockup"]
    ;;  [:p (pr-str @app-state)]
   [:p "Each tile may contain a ship."
    [:br] " Click on it to shoot and reveal what it's inside."
    [:br] "X means you hit and O means you missed."]
   [:p (str "You have shot " (or (:tries @app-state) "0") " times")]
   [:p (str "There are " (ships-remaining) " ships remaining")]
   [:p [:button {:on-click reset-game!}
        "Reset Game"]]
   [board]])

(rd/render [page]
           (. js/document (getElementById "app")))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
  )
