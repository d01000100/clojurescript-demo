// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('sploosh_kaboom.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
sploosh_kaboom.core.board_width = (5);
sploosh_kaboom.core.board_height = (5);
sploosh_kaboom.core.ships = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"large","large",-196820544),null,new cljs.core.Keyword(null,"medium","medium",-1864319384),null,new cljs.core.Keyword(null,"small","small",2133478704),null], null), null);
sploosh_kaboom.core.all_coords = (function (){var iter__4529__auto__ = (function sploosh_kaboom$core$iter__21878(s__21879){
return (new cljs.core.LazySeq(null,(function (){
var s__21879__$1 = s__21879;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__21879__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var i = cljs.core.first.call(null,xs__6277__auto__);
var iterys__4525__auto__ = ((function (s__21879__$1,i,xs__6277__auto__,temp__5720__auto__){
return (function sploosh_kaboom$core$iter__21878_$_iter__21880(s__21881){
return (new cljs.core.LazySeq(null,((function (s__21879__$1,i,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__21881__$1 = s__21881;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__21881__$1);
if(temp__5720__auto____$1){
var s__21881__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21881__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__21881__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__21883 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__21882 = (0);
while(true){
if((i__21882 < size__4528__auto__)){
var j = cljs.core._nth.call(null,c__4527__auto__,i__21882);
cljs.core.chunk_append.call(null,b__21883,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null));

var G__21884 = (i__21882 + (1));
i__21882 = G__21884;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21883),sploosh_kaboom$core$iter__21878_$_iter__21880.call(null,cljs.core.chunk_rest.call(null,s__21881__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21883),null);
}
} else {
var j = cljs.core.first.call(null,s__21881__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null),sploosh_kaboom$core$iter__21878_$_iter__21880.call(null,cljs.core.rest.call(null,s__21881__$2)));
}
} else {
return null;
}
break;
}
});})(s__21879__$1,i,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__21879__$1,i,xs__6277__auto__,temp__5720__auto__))
;
var fs__4526__auto__ = cljs.core.seq.call(null,iterys__4525__auto__.call(null,cljs.core.range.call(null,sploosh_kaboom.core.board_height)));
if(fs__4526__auto__){
return cljs.core.concat.call(null,fs__4526__auto__,sploosh_kaboom$core$iter__21878.call(null,cljs.core.rest.call(null,s__21879__$1)));
} else {
var G__21885 = cljs.core.rest.call(null,s__21879__$1);
s__21879__$1 = G__21885;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,cljs.core.range.call(null,sploosh_kaboom.core.board_width));
})();
sploosh_kaboom.core.length_by_type = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"small","small",2133478704),(2),new cljs.core.Keyword(null,"medium","medium",-1864319384),(3),new cljs.core.Keyword(null,"large","large",-196820544),(4)], null);
/**
 * Checks if ship that occupies `spaces` doesn't collide with any
 * of the other `ships` and fits in the board. 
 * [ships spaces]
 */
sploosh_kaboom.core.ship_fits_QMARK_ = (function sploosh_kaboom$core$ship_fits_QMARK_(ships,spaces){
return cljs.core.every_QMARK_.call(null,(function (p__21886){
var vec__21887 = p__21886;
var i = cljs.core.nth.call(null,vec__21887,(0),null);
var j = cljs.core.nth.call(null,vec__21887,(1),null);
var coords = vec__21887;
return ((((0) <= i)) && ((i < sploosh_kaboom.core.board_width)) && (((0) <= j)) && ((j < sploosh_kaboom.core.board_height)) && (cljs.core.not.call(null,cljs.core.get_in.call(null,ships,coords))));
}),spaces);
});
/**
 * Generates collections of coordinates where a ship of `type` would
 * be starting in `start` and placed with `orientation` (:horizontal or :vertical)
 */
sploosh_kaboom.core.generate_ship = (function sploosh_kaboom$core$generate_ship(start,orientation,type){
var length = sploosh_kaboom.core.length_by_type.call(null,type);
return cljs.core.take.call(null,length,(function (){var G__21890 = orientation;
var G__21890__$1 = (((G__21890 instanceof cljs.core.Keyword))?G__21890.fqn:null);
switch (G__21890__$1) {
case "horizontal":
return cljs.core.iterate.call(null,(function (p__21891){
var vec__21892 = p__21891;
var i = cljs.core.nth.call(null,vec__21892,(0),null);
var j = cljs.core.nth.call(null,vec__21892,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + (1)),j], null);
}),start);

break;
case "vertical":
return cljs.core.iterate.call(null,(function (p__21895){
var vec__21896 = p__21895;
var i = cljs.core.nth.call(null,vec__21896,(0),null);
var j = cljs.core.nth.call(null,vec__21896,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,(j + (1))], null);
}),start);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21890__$1)].join('')));

}
})());
});
/**
 * Adds a ship of `type` to the map `ships` in a random location
 * and orientation.
 * Keeps trying until it fits. If it doesn't fit it will loop.
 */
sploosh_kaboom.core.add_ship = (function sploosh_kaboom$core$add_ship(ships,type){
var start = cljs.core.rand_nth.call(null,sploosh_kaboom.core.all_coords);
var orientation = cljs.core.rand_nth.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vertical","vertical",718696748),new cljs.core.Keyword(null,"horizontal","horizontal",2062109475)], null));
var ship_spaces = sploosh_kaboom.core.generate_ship.call(null,start,orientation,type);
if(sploosh_kaboom.core.ship_fits_QMARK_.call(null,ships,ship_spaces)){
return cljs.core.reduce.call(null,(function (ships__$1,coord){
return cljs.core.assoc_in.call(null,ships__$1,coord,type);
}),ships,ship_spaces);
} else {
return sploosh_kaboom.core.add_ship.call(null,ships,type);
}
});
sploosh_kaboom.core.generate_board = (function sploosh_kaboom$core$generate_board(){
return cljs.core.reduce.call(null,sploosh_kaboom.core.add_ship,cljs.core.PersistentArrayMap.EMPTY,sploosh_kaboom.core.ships);
});
sploosh_kaboom.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reveal-ships?","reveal-ships?",-1649678970),false], null));
/**
 * Initializes the `app-state` to a new game.
 */
sploosh_kaboom.core.reset_game_BANG_ = (function sploosh_kaboom$core$reset_game_BANG_(){
return cljs.core.swap_BANG_.call(null,sploosh_kaboom.core.app_state,(function (p1__21900_SHARP_){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,p1__21900_SHARP_,new cljs.core.Keyword(null,"moves","moves",927465255),cljs.core.PersistentHashSet.EMPTY),new cljs.core.Keyword(null,"tries","tries",425666016),(0)),new cljs.core.Keyword(null,"ships","ships",-875113158),sploosh_kaboom.core.generate_board.call(null));
}));
});
sploosh_kaboom.core.reset_game_BANG_.call(null);
/**
 * Fires at coordinate (`i`,`j`). 
 * Adds the coordinate to `app-state` and increments the counter
 */
sploosh_kaboom.core.fire_BANG_ = (function sploosh_kaboom$core$fire_BANG_(i,j){
if(cljs.core.truth_(cljs.core.get_in.call(null,new cljs.core.Keyword(null,"moves","moves",927465255).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sploosh_kaboom.core.app_state)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))){
return null;
} else {
return cljs.core.swap_BANG_.call(null,sploosh_kaboom.core.app_state,(function (state){
return cljs.core.update.call(null,cljs.core.update.call(null,state,new cljs.core.Keyword(null,"moves","moves",927465255),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)),new cljs.core.Keyword(null,"tries","tries",425666016),cljs.core.inc);
}));
}
});
/**
 * Returns the types of ship that remain (as a set)
 */
sploosh_kaboom.core.ships_remaining = (function sploosh_kaboom$core$ships_remaining(){
var ships = new cljs.core.Keyword(null,"ships","ships",-875113158).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sploosh_kaboom.core.app_state));
var moves = new cljs.core.Keyword(null,"moves","moves",927465255).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sploosh_kaboom.core.app_state));
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.mapcat.call(null,cljs.core.vals,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (ships__$1,p__21901){
var vec__21902 = p__21901;
var i = cljs.core.nth.call(null,vec__21902,(0),null);
var j = cljs.core.nth.call(null,vec__21902,(1),null);
return cljs.core.update.call(null,ships__$1,i,cljs.core.dissoc,j);
}),ships,moves))));
});
/**
 * Renders a tile of the board.
 * Changes color and content according to:
 * - If there's a ship in that tile
 * - If the player has tried that tile
 */
sploosh_kaboom.core.tile = (function sploosh_kaboom$core$tile(i,j){
var ship_QMARK_ = cljs.core.get_in.call(null,new cljs.core.Keyword(null,"ships","ships",-875113158).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sploosh_kaboom.core.app_state)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null));
var move_QMARK_ = cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"moves","moves",927465255).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sploosh_kaboom.core.app_state)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null));
var value = (cljs.core.truth_(new cljs.core.Keyword(null,"reveal-ships?","reveal-ships?",-1649678970).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sploosh_kaboom.core.app_state)))?(cljs.core.truth_(ship_QMARK_)?"X":"O"):(cljs.core.truth_((function (){var and__4115__auto__ = ship_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return move_QMARK_;
} else {
return and__4115__auto__;
}
})())?"X":((move_QMARK_)?"O":"?"
)));
var class$ = (cljs.core.truth_((function (){var and__4115__auto__ = ship_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return move_QMARK_;
} else {
return and__4115__auto__;
}
})())?new cljs.core.Keyword(null,"hit","hit",1909257382):((move_QMARK_)?new cljs.core.Keyword(null,"miss","miss",1465931270):new cljs.core.Keyword(null,"unexplored","unexplored",2027198107)
));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return sploosh_kaboom.core.fire_BANG_.call(null,i,j);
}),new cljs.core.Keyword(null,"class","class",-2030961996),class$], null),value], null);
});
sploosh_kaboom.core.board = (function sploosh_kaboom$core$board(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.board","table.board",178754716),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__4529__auto__ = (function sploosh_kaboom$core$board_$_iter__21905(s__21906){
return (new cljs.core.LazySeq(null,(function (){
var s__21906__$1 = s__21906;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__21906__$1);
if(temp__5720__auto__){
var s__21906__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21906__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__21906__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__21908 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__21907 = (0);
while(true){
if((i__21907 < size__4528__auto__)){
var i = cljs.core._nth.call(null,c__4527__auto__,i__21907);
cljs.core.chunk_append.call(null,b__21908,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4529__auto__ = ((function (i__21907,i,c__4527__auto__,size__4528__auto__,b__21908,s__21906__$2,temp__5720__auto__){
return (function sploosh_kaboom$core$board_$_iter__21905_$_iter__21909(s__21910){
return (new cljs.core.LazySeq(null,((function (i__21907,i,c__4527__auto__,size__4528__auto__,b__21908,s__21906__$2,temp__5720__auto__){
return (function (){
var s__21910__$1 = s__21910;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__21910__$1);
if(temp__5720__auto____$1){
var s__21910__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21910__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first.call(null,s__21910__$2);
var size__4528__auto____$1 = cljs.core.count.call(null,c__4527__auto____$1);
var b__21912 = cljs.core.chunk_buffer.call(null,size__4528__auto____$1);
if((function (){var i__21911 = (0);
while(true){
if((i__21911 < size__4528__auto____$1)){
var j = cljs.core._nth.call(null,c__4527__auto____$1,i__21911);
cljs.core.chunk_append.call(null,b__21912,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sploosh_kaboom.core.tile,i,j], null));

var G__21917 = (i__21911 + (1));
i__21911 = G__21917;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21912),sploosh_kaboom$core$board_$_iter__21905_$_iter__21909.call(null,cljs.core.chunk_rest.call(null,s__21910__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21912),null);
}
} else {
var j = cljs.core.first.call(null,s__21910__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sploosh_kaboom.core.tile,i,j], null),sploosh_kaboom$core$board_$_iter__21905_$_iter__21909.call(null,cljs.core.rest.call(null,s__21910__$2)));
}
} else {
return null;
}
break;
}
});})(i__21907,i,c__4527__auto__,size__4528__auto__,b__21908,s__21906__$2,temp__5720__auto__))
,null,null));
});})(i__21907,i,c__4527__auto__,size__4528__auto__,b__21908,s__21906__$2,temp__5720__auto__))
;
return iter__4529__auto__.call(null,cljs.core.range.call(null,sploosh_kaboom.core.board_height));
})()], null));

var G__21918 = (i__21907 + (1));
i__21907 = G__21918;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21908),sploosh_kaboom$core$board_$_iter__21905.call(null,cljs.core.chunk_rest.call(null,s__21906__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21908),null);
}
} else {
var i = cljs.core.first.call(null,s__21906__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4529__auto__ = ((function (i,s__21906__$2,temp__5720__auto__){
return (function sploosh_kaboom$core$board_$_iter__21905_$_iter__21913(s__21914){
return (new cljs.core.LazySeq(null,(function (){
var s__21914__$1 = s__21914;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__21914__$1);
if(temp__5720__auto____$1){
var s__21914__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21914__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__21914__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__21916 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__21915 = (0);
while(true){
if((i__21915 < size__4528__auto__)){
var j = cljs.core._nth.call(null,c__4527__auto__,i__21915);
cljs.core.chunk_append.call(null,b__21916,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sploosh_kaboom.core.tile,i,j], null));

var G__21919 = (i__21915 + (1));
i__21915 = G__21919;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21916),sploosh_kaboom$core$board_$_iter__21905_$_iter__21913.call(null,cljs.core.chunk_rest.call(null,s__21914__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21916),null);
}
} else {
var j = cljs.core.first.call(null,s__21914__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sploosh_kaboom.core.tile,i,j], null),sploosh_kaboom$core$board_$_iter__21905_$_iter__21913.call(null,cljs.core.rest.call(null,s__21914__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(i,s__21906__$2,temp__5720__auto__))
;
return iter__4529__auto__.call(null,cljs.core.range.call(null,sploosh_kaboom.core.board_height));
})()], null),sploosh_kaboom$core$board_$_iter__21905.call(null,cljs.core.rest.call(null,s__21906__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,cljs.core.range.call(null,sploosh_kaboom.core.board_width));
})()], null)], null);
});
/**
 * Component that shows the player the types of ships
 * and which ones remain on the map.
 */
sploosh_kaboom.core.show_ships = (function sploosh_kaboom$core$show_ships(){
var types = sploosh_kaboom.core.ships_remaining.call(null);
var crossed = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),new cljs.core.Keyword(null,"line-through","line-through",-250988971)], null)], null);
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.show-ships","div.show-ships",-133460159),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Ships remaining:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),cljs.core.repeat.call(null,(4),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.unexplored","td.unexplored",1857544359),"X"], null))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(((!(cljs.core.contains_QMARK_.call(null,types,new cljs.core.Keyword(null,"large","large",-196820544)))))?crossed:null),"Large ship"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),cljs.core.repeat.call(null,(3),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.unexplored","td.unexplored",1857544359),"X"], null))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(((!(cljs.core.contains_QMARK_.call(null,types,new cljs.core.Keyword(null,"medium","medium",-1864319384)))))?crossed:null),"Medium ship"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),cljs.core.repeat.call(null,(2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.unexplored","td.unexplored",1857544359),"X"], null))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(((!(cljs.core.contains_QMARK_.call(null,types,new cljs.core.Keyword(null,"small","small",2133478704)))))?crossed:null),"Small ship"], null)], null);
});
sploosh_kaboom.core.instructions = (function sploosh_kaboom$core$instructions(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"5%"], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"There are three ships of different sizes hidden in the board.",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"Click on a tile to shoot and reveal what it's in it.",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"X means you hit and O means you missed."], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"You have shot ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"tries","tries",425666016).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sploosh_kaboom.core.app_state));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "0";
}
})()], null)," times"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sploosh_kaboom.core.show_ships], null)], null)], null)], null)], null);
});
sploosh_kaboom.core.controls = (function sploosh_kaboom$core$controls(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),sploosh_kaboom.core.reset_game_BANG_], null),"Reset Game"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),new cljs.core.Keyword(null,"id","id",-1388402092),"reveal-ships",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"reveal-ships?","reveal-ships?",-1649678970).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sploosh_kaboom.core.app_state)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return cljs.core.swap_BANG_.call(null,sploosh_kaboom.core.app_state,cljs.core.update,new cljs.core.Keyword(null,"reveal-ships?","reveal-ships?",-1649678970),cljs.core.not);
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"reveal-ships"], null),"Reveal ships"], null)], null)], null);
});
sploosh_kaboom.core.page = (function sploosh_kaboom$core$page(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center#page","center#page",832509312),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Battlefield Mockup"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sploosh_kaboom.core.instructions], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sploosh_kaboom.core.controls], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sploosh_kaboom.core.board], null)], null);
});
reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sploosh_kaboom.core.page], null),document.getElementById("app"));
sploosh_kaboom.core.on_js_reload = (function sploosh_kaboom$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1603913402489
