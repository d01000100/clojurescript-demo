// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.20";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e30583){if((e30583 instanceof Error)){
var e = e30583;
return "Error: Unable to stringify";
} else {
throw e30583;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__30586 = arguments.length;
switch (G__30586) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__30584_SHARP_){
if(typeof p1__30584_SHARP_ === 'string'){
return p1__30584_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__30584_SHARP_);
}
}),args)], null)], null));

return null;
}));

(figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
}));

(figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2);

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___30589 = arguments.length;
var i__4737__auto___30590 = (0);
while(true){
if((i__4737__auto___30590 < len__4736__auto___30589)){
args__4742__auto__.push((arguments[i__4737__auto___30590]));

var G__30591 = (i__4737__auto___30590 + (1));
i__4737__auto___30590 = G__30591;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
}));

(figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq30588){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30588));
}));

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___30593 = arguments.length;
var i__4737__auto___30594 = (0);
while(true){
if((i__4737__auto___30594 < len__4736__auto___30593)){
args__4742__auto__.push((arguments[i__4737__auto___30594]));

var G__30595 = (i__4737__auto___30594 + (1));
i__4737__auto___30594 = G__30595;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
}));

(figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq30592){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30592));
}));

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
(cljs.core._STAR_print_newline_STAR_ = false);

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__30596){
var map__30597 = p__30596;
var map__30597__$1 = (((((!((map__30597 == null))))?(((((map__30597.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30597.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30597):map__30597);
var message = cljs.core.get.call(null,map__30597__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__30597__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4126__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return false;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__26603__auto___30676 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26604__auto__ = (function (){var switch__26508__auto__ = (function (state_30648){
var state_val_30649 = (state_30648[(1)]);
if((state_val_30649 === (7))){
var inst_30644 = (state_30648[(2)]);
var state_30648__$1 = state_30648;
var statearr_30650_30677 = state_30648__$1;
(statearr_30650_30677[(2)] = inst_30644);

(statearr_30650_30677[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30649 === (1))){
var state_30648__$1 = state_30648;
var statearr_30651_30678 = state_30648__$1;
(statearr_30651_30678[(2)] = null);

(statearr_30651_30678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30649 === (4))){
var inst_30601 = (state_30648[(7)]);
var inst_30601__$1 = (state_30648[(2)]);
var state_30648__$1 = (function (){var statearr_30652 = state_30648;
(statearr_30652[(7)] = inst_30601__$1);

return statearr_30652;
})();
if(cljs.core.truth_(inst_30601__$1)){
var statearr_30653_30679 = state_30648__$1;
(statearr_30653_30679[(1)] = (5));

} else {
var statearr_30654_30680 = state_30648__$1;
(statearr_30654_30680[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30649 === (15))){
var inst_30608 = (state_30648[(8)]);
var inst_30623 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30608);
var inst_30624 = cljs.core.first.call(null,inst_30623);
var inst_30625 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_30624);
var inst_30626 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30625)].join('');
var inst_30627 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_30626);
var state_30648__$1 = state_30648;
var statearr_30655_30681 = state_30648__$1;
(statearr_30655_30681[(2)] = inst_30627);

(statearr_30655_30681[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30649 === (13))){
var inst_30632 = (state_30648[(2)]);
var state_30648__$1 = state_30648;
var statearr_30656_30682 = state_30648__$1;
(statearr_30656_30682[(2)] = inst_30632);

(statearr_30656_30682[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30649 === (6))){
var state_30648__$1 = state_30648;
var statearr_30657_30683 = state_30648__$1;
(statearr_30657_30683[(2)] = null);

(statearr_30657_30683[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30649 === (17))){
var inst_30630 = (state_30648[(2)]);
var state_30648__$1 = state_30648;
var statearr_30658_30684 = state_30648__$1;
(statearr_30658_30684[(2)] = inst_30630);

(statearr_30658_30684[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30649 === (3))){
var inst_30646 = (state_30648[(2)]);
var state_30648__$1 = state_30648;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30648__$1,inst_30646);
} else {
if((state_val_30649 === (12))){
var inst_30607 = (state_30648[(9)]);
var inst_30621 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_30607,opts);
var state_30648__$1 = state_30648;
if(inst_30621){
var statearr_30659_30685 = state_30648__$1;
(statearr_30659_30685[(1)] = (15));

} else {
var statearr_30660_30686 = state_30648__$1;
(statearr_30660_30686[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30649 === (2))){
var state_30648__$1 = state_30648;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30648__$1,(4),ch);
} else {
if((state_val_30649 === (11))){
var inst_30608 = (state_30648[(8)]);
var inst_30613 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30614 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_30608);
var inst_30615 = cljs.core.async.timeout.call(null,(1000));
var inst_30616 = [inst_30614,inst_30615];
var inst_30617 = (new cljs.core.PersistentVector(null,2,(5),inst_30613,inst_30616,null));
var state_30648__$1 = state_30648;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30648__$1,(14),inst_30617);
} else {
if((state_val_30649 === (9))){
var inst_30608 = (state_30648[(8)]);
var inst_30634 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_30635 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30608);
var inst_30636 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30635);
var inst_30637 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30636)].join('');
var inst_30638 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_30637);
var state_30648__$1 = (function (){var statearr_30661 = state_30648;
(statearr_30661[(10)] = inst_30634);

return statearr_30661;
})();
var statearr_30662_30687 = state_30648__$1;
(statearr_30662_30687[(2)] = inst_30638);

(statearr_30662_30687[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30649 === (5))){
var inst_30601 = (state_30648[(7)]);
var inst_30603 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_30604 = (new cljs.core.PersistentArrayMap(null,2,inst_30603,null));
var inst_30605 = (new cljs.core.PersistentHashSet(null,inst_30604,null));
var inst_30606 = figwheel.client.focus_msgs.call(null,inst_30605,inst_30601);
var inst_30607 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_30606);
var inst_30608 = cljs.core.first.call(null,inst_30606);
var inst_30609 = figwheel.client.autoload_QMARK_.call(null);
var state_30648__$1 = (function (){var statearr_30663 = state_30648;
(statearr_30663[(9)] = inst_30607);

(statearr_30663[(8)] = inst_30608);

return statearr_30663;
})();
if(cljs.core.truth_(inst_30609)){
var statearr_30664_30688 = state_30648__$1;
(statearr_30664_30688[(1)] = (8));

} else {
var statearr_30665_30689 = state_30648__$1;
(statearr_30665_30689[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30649 === (14))){
var inst_30619 = (state_30648[(2)]);
var state_30648__$1 = state_30648;
var statearr_30666_30690 = state_30648__$1;
(statearr_30666_30690[(2)] = inst_30619);

(statearr_30666_30690[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30649 === (16))){
var state_30648__$1 = state_30648;
var statearr_30667_30691 = state_30648__$1;
(statearr_30667_30691[(2)] = null);

(statearr_30667_30691[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30649 === (10))){
var inst_30640 = (state_30648[(2)]);
var state_30648__$1 = (function (){var statearr_30668 = state_30648;
(statearr_30668[(11)] = inst_30640);

return statearr_30668;
})();
var statearr_30669_30692 = state_30648__$1;
(statearr_30669_30692[(2)] = null);

(statearr_30669_30692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30649 === (8))){
var inst_30607 = (state_30648[(9)]);
var inst_30611 = figwheel.client.reload_file_state_QMARK_.call(null,inst_30607,opts);
var state_30648__$1 = state_30648;
if(cljs.core.truth_(inst_30611)){
var statearr_30670_30693 = state_30648__$1;
(statearr_30670_30693[(1)] = (11));

} else {
var statearr_30671_30694 = state_30648__$1;
(statearr_30671_30694[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__26509__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__26509__auto____0 = (function (){
var statearr_30672 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30672[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__26509__auto__);

(statearr_30672[(1)] = (1));

return statearr_30672;
});
var figwheel$client$file_reloader_plugin_$_state_machine__26509__auto____1 = (function (state_30648){
while(true){
var ret_value__26510__auto__ = (function (){try{while(true){
var result__26511__auto__ = switch__26508__auto__.call(null,state_30648);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26511__auto__;
}
break;
}
}catch (e30673){if((e30673 instanceof Object)){
var ex__26512__auto__ = e30673;
var statearr_30674_30695 = state_30648;
(statearr_30674_30695[(5)] = ex__26512__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30648);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30673;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30696 = state_30648;
state_30648 = G__30696;
continue;
} else {
return ret_value__26510__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__26509__auto__ = function(state_30648){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__26509__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__26509__auto____1.call(this,state_30648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__26509__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__26509__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__26509__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__26509__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__26509__auto__;
})()
})();
var state__26605__auto__ = (function (){var statearr_30675 = f__26604__auto__.call(null);
(statearr_30675[(6)] = c__26603__auto___30676);

return statearr_30675;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26605__auto__);
}));


return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__30697_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__30697_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.SAFARI){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(goog.userAgent.product.CHROME){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.FIREFOX){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(goog.userAgent.product.IE){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_30703 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__30699 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__30700 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__30701 = true;
var _STAR_print_fn_STAR__temp_val__30702 = (function (x){
return sb.append(x);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__30701);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__30702);

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__30700);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__30699);
}}catch (e30698){if((e30698 instanceof Error)){
var e = e30698;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_30703], null));
} else {
var e = e30698;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return (cljs.user = ({}));
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__30704){
var map__30705 = p__30704;
var map__30705__$1 = (((((!((map__30705 == null))))?(((((map__30705.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30705.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30705):map__30705);
var opts = map__30705__$1;
var build_id = cljs.core.get.call(null,map__30705__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return (function (p__30707){
var vec__30708 = p__30707;
var seq__30709 = cljs.core.seq.call(null,vec__30708);
var first__30710 = cljs.core.first.call(null,seq__30709);
var seq__30709__$1 = cljs.core.next.call(null,seq__30709);
var map__30711 = first__30710;
var map__30711__$1 = (((((!((map__30711 == null))))?(((((map__30711.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30711.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30711):map__30711);
var msg = map__30711__$1;
var msg_name = cljs.core.get.call(null,map__30711__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30709__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,(function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
}));
} else {
return null;
}
});
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__30713){
var vec__30714 = p__30713;
var seq__30715 = cljs.core.seq.call(null,vec__30714);
var first__30716 = cljs.core.first.call(null,seq__30715);
var seq__30715__$1 = cljs.core.next.call(null,seq__30715);
var map__30717 = first__30716;
var map__30717__$1 = (((((!((map__30717 == null))))?(((((map__30717.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30717.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30717):map__30717);
var msg = map__30717__$1;
var msg_name = cljs.core.get.call(null,map__30717__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30715__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__30719){
var map__30720 = p__30719;
var map__30720__$1 = (((((!((map__30720 == null))))?(((((map__30720.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30720.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30720):map__30720);
var on_compile_warning = cljs.core.get.call(null,map__30720__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__30720__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return (function (p__30722){
var vec__30723 = p__30722;
var seq__30724 = cljs.core.seq.call(null,vec__30723);
var first__30725 = cljs.core.first.call(null,seq__30724);
var seq__30724__$1 = cljs.core.next.call(null,seq__30724);
var map__30726 = first__30725;
var map__30726__$1 = (((((!((map__30726 == null))))?(((((map__30726.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30726.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30726):map__30726);
var msg = map__30726__$1;
var msg_name = cljs.core.get.call(null,map__30726__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30724__$1;
var pred__30728 = cljs.core._EQ_;
var expr__30729 = msg_name;
if(cljs.core.truth_(pred__30728.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__30729))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__30728.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30729))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__26603__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26604__auto__ = (function (){var switch__26508__auto__ = (function (state_30818){
var state_val_30819 = (state_30818[(1)]);
if((state_val_30819 === (7))){
var inst_30738 = (state_30818[(2)]);
var state_30818__$1 = state_30818;
if(cljs.core.truth_(inst_30738)){
var statearr_30820_30867 = state_30818__$1;
(statearr_30820_30867[(1)] = (8));

} else {
var statearr_30821_30868 = state_30818__$1;
(statearr_30821_30868[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30819 === (20))){
var inst_30812 = (state_30818[(2)]);
var state_30818__$1 = state_30818;
var statearr_30822_30869 = state_30818__$1;
(statearr_30822_30869[(2)] = inst_30812);

(statearr_30822_30869[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30819 === (27))){
var inst_30808 = (state_30818[(2)]);
var state_30818__$1 = state_30818;
var statearr_30823_30870 = state_30818__$1;
(statearr_30823_30870[(2)] = inst_30808);

(statearr_30823_30870[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30819 === (1))){
var inst_30731 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_30818__$1 = state_30818;
if(cljs.core.truth_(inst_30731)){
var statearr_30824_30871 = state_30818__$1;
(statearr_30824_30871[(1)] = (2));

} else {
var statearr_30825_30872 = state_30818__$1;
(statearr_30825_30872[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30819 === (24))){
var inst_30810 = (state_30818[(2)]);
var state_30818__$1 = state_30818;
var statearr_30826_30873 = state_30818__$1;
(statearr_30826_30873[(2)] = inst_30810);

(statearr_30826_30873[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30819 === (4))){
var inst_30816 = (state_30818[(2)]);
var state_30818__$1 = state_30818;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30818__$1,inst_30816);
} else {
if((state_val_30819 === (15))){
var inst_30814 = (state_30818[(2)]);
var state_30818__$1 = state_30818;
var statearr_30827_30874 = state_30818__$1;
(statearr_30827_30874[(2)] = inst_30814);

(statearr_30827_30874[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30819 === (21))){
var inst_30767 = (state_30818[(2)]);
var inst_30768 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30769 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30768);
var state_30818__$1 = (function (){var statearr_30828 = state_30818;
(statearr_30828[(7)] = inst_30767);

return statearr_30828;
})();
var statearr_30829_30875 = state_30818__$1;
(statearr_30829_30875[(2)] = inst_30769);

(statearr_30829_30875[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30819 === (31))){
var inst_30797 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_30818__$1 = state_30818;
if(inst_30797){
var statearr_30830_30876 = state_30818__$1;
(statearr_30830_30876[(1)] = (34));

} else {
var statearr_30831_30877 = state_30818__$1;
(statearr_30831_30877[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30819 === (32))){
var inst_30806 = (state_30818[(2)]);
var state_30818__$1 = state_30818;
var statearr_30832_30878 = state_30818__$1;
(statearr_30832_30878[(2)] = inst_30806);

(statearr_30832_30878[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30819 === (33))){
var inst_30793 = (state_30818[(2)]);
var inst_30794 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30795 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30794);
var state_30818__$1 = (function (){var statearr_30833 = state_30818;
(statearr_30833[(8)] = inst_30793);

return statearr_30833;
})();
var statearr_30834_30879 = state_30818__$1;
(statearr_30834_30879[(2)] = inst_30795);

(statearr_30834_30879[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30819 === (13))){
var inst_30752 = figwheel.client.heads_up.clear.call(null);
var state_30818__$1 = state_30818;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30818__$1,(16),inst_30752);
} else {
if((state_val_30819 === (22))){
var inst_30773 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30774 = figwheel.client.heads_up.append_warning_message.call(null,inst_30773);
var state_30818__$1 = state_30818;
var statearr_30835_30880 = state_30818__$1;
(statearr_30835_30880[(2)] = inst_30774);

(statearr_30835_30880[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30819 === (36))){
var inst_30804 = (state_30818[(2)]);
var state_30818__$1 = state_30818;
var statearr_30836_30881 = state_30818__$1;
(statearr_30836_30881[(2)] = inst_30804);

(statearr_30836_30881[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30819 === (29))){
var inst_30784 = (state_30818[(2)]);
var inst_30785 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30786 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30785);
var state_30818__$1 = (function (){var statearr_30837 = state_30818;
(statearr_30837[(9)] = inst_30784);

return statearr_30837;
})();
var statearr_30838_30882 = state_30818__$1;
(statearr_30838_30882[(2)] = inst_30786);

(statearr_30838_30882[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30819 === (6))){
var inst_30733 = (state_30818[(10)]);
var state_30818__$1 = state_30818;
var statearr_30839_30883 = state_30818__$1;
(statearr_30839_30883[(2)] = inst_30733);

(statearr_30839_30883[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30819 === (28))){
var inst_30780 = (state_30818[(2)]);
var inst_30781 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30782 = figwheel.client.heads_up.display_warning.call(null,inst_30781);
var state_30818__$1 = (function (){var statearr_30840 = state_30818;
(statearr_30840[(11)] = inst_30780);

return statearr_30840;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30818__$1,(29),inst_30782);
} else {
if((state_val_30819 === (25))){
var inst_30778 = figwheel.client.heads_up.clear.call(null);
var state_30818__$1 = state_30818;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30818__$1,(28),inst_30778);
} else {
if((state_val_30819 === (34))){
var inst_30799 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30818__$1 = state_30818;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30818__$1,(37),inst_30799);
} else {
if((state_val_30819 === (17))){
var inst_30758 = (state_30818[(2)]);
var inst_30759 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30760 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30759);
var state_30818__$1 = (function (){var statearr_30841 = state_30818;
(statearr_30841[(12)] = inst_30758);

return statearr_30841;
})();
var statearr_30842_30884 = state_30818__$1;
(statearr_30842_30884[(2)] = inst_30760);

(statearr_30842_30884[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30819 === (3))){
var inst_30750 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_30818__$1 = state_30818;
if(inst_30750){
var statearr_30843_30885 = state_30818__$1;
(statearr_30843_30885[(1)] = (13));

} else {
var statearr_30844_30886 = state_30818__$1;
(statearr_30844_30886[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30819 === (12))){
var inst_30746 = (state_30818[(2)]);
var state_30818__$1 = state_30818;
var statearr_30845_30887 = state_30818__$1;
(statearr_30845_30887[(2)] = inst_30746);

(statearr_30845_30887[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30819 === (2))){
var inst_30733 = (state_30818[(10)]);
var inst_30733__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_30818__$1 = (function (){var statearr_30846 = state_30818;
(statearr_30846[(10)] = inst_30733__$1);

return statearr_30846;
})();
if(cljs.core.truth_(inst_30733__$1)){
var statearr_30847_30888 = state_30818__$1;
(statearr_30847_30888[(1)] = (5));

} else {
var statearr_30848_30889 = state_30818__$1;
(statearr_30848_30889[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30819 === (23))){
var inst_30776 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_30818__$1 = state_30818;
if(inst_30776){
var statearr_30849_30890 = state_30818__$1;
(statearr_30849_30890[(1)] = (25));

} else {
var statearr_30850_30891 = state_30818__$1;
(statearr_30850_30891[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30819 === (35))){
var state_30818__$1 = state_30818;
var statearr_30851_30892 = state_30818__$1;
(statearr_30851_30892[(2)] = null);

(statearr_30851_30892[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30819 === (19))){
var inst_30771 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_30818__$1 = state_30818;
if(inst_30771){
var statearr_30852_30893 = state_30818__$1;
(statearr_30852_30893[(1)] = (22));

} else {
var statearr_30853_30894 = state_30818__$1;
(statearr_30853_30894[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30819 === (11))){
var inst_30742 = (state_30818[(2)]);
var state_30818__$1 = state_30818;
var statearr_30854_30895 = state_30818__$1;
(statearr_30854_30895[(2)] = inst_30742);

(statearr_30854_30895[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30819 === (9))){
var inst_30744 = figwheel.client.heads_up.clear.call(null);
var state_30818__$1 = state_30818;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30818__$1,(12),inst_30744);
} else {
if((state_val_30819 === (5))){
var inst_30735 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_30818__$1 = state_30818;
var statearr_30855_30896 = state_30818__$1;
(statearr_30855_30896[(2)] = inst_30735);

(statearr_30855_30896[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30819 === (14))){
var inst_30762 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_30818__$1 = state_30818;
if(inst_30762){
var statearr_30856_30897 = state_30818__$1;
(statearr_30856_30897[(1)] = (18));

} else {
var statearr_30857_30898 = state_30818__$1;
(statearr_30857_30898[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30819 === (26))){
var inst_30788 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_30818__$1 = state_30818;
if(inst_30788){
var statearr_30858_30899 = state_30818__$1;
(statearr_30858_30899[(1)] = (30));

} else {
var statearr_30859_30900 = state_30818__$1;
(statearr_30859_30900[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30819 === (16))){
var inst_30754 = (state_30818[(2)]);
var inst_30755 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30756 = figwheel.client.heads_up.display_exception.call(null,inst_30755);
var state_30818__$1 = (function (){var statearr_30860 = state_30818;
(statearr_30860[(13)] = inst_30754);

return statearr_30860;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30818__$1,(17),inst_30756);
} else {
if((state_val_30819 === (30))){
var inst_30790 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30791 = figwheel.client.heads_up.display_warning.call(null,inst_30790);
var state_30818__$1 = state_30818;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30818__$1,(33),inst_30791);
} else {
if((state_val_30819 === (10))){
var inst_30748 = (state_30818[(2)]);
var state_30818__$1 = state_30818;
var statearr_30861_30901 = state_30818__$1;
(statearr_30861_30901[(2)] = inst_30748);

(statearr_30861_30901[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30819 === (18))){
var inst_30764 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30765 = figwheel.client.heads_up.display_exception.call(null,inst_30764);
var state_30818__$1 = state_30818;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30818__$1,(21),inst_30765);
} else {
if((state_val_30819 === (37))){
var inst_30801 = (state_30818[(2)]);
var state_30818__$1 = state_30818;
var statearr_30862_30902 = state_30818__$1;
(statearr_30862_30902[(2)] = inst_30801);

(statearr_30862_30902[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30819 === (8))){
var inst_30740 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30818__$1 = state_30818;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30818__$1,(11),inst_30740);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26509__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26509__auto____0 = (function (){
var statearr_30863 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30863[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26509__auto__);

(statearr_30863[(1)] = (1));

return statearr_30863;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26509__auto____1 = (function (state_30818){
while(true){
var ret_value__26510__auto__ = (function (){try{while(true){
var result__26511__auto__ = switch__26508__auto__.call(null,state_30818);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26511__auto__;
}
break;
}
}catch (e30864){if((e30864 instanceof Object)){
var ex__26512__auto__ = e30864;
var statearr_30865_30903 = state_30818;
(statearr_30865_30903[(5)] = ex__26512__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30818);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30864;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30904 = state_30818;
state_30818 = G__30904;
continue;
} else {
return ret_value__26510__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26509__auto__ = function(state_30818){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26509__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26509__auto____1.call(this,state_30818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26509__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26509__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26509__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26509__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26509__auto__;
})()
})();
var state__26605__auto__ = (function (){var statearr_30866 = f__26604__auto__.call(null);
(statearr_30866[(6)] = c__26603__auto__);

return statearr_30866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26605__auto__);
}));

return c__26603__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__26603__auto___30933 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26604__auto__ = (function (){var switch__26508__auto__ = (function (state_30919){
var state_val_30920 = (state_30919[(1)]);
if((state_val_30920 === (1))){
var state_30919__$1 = state_30919;
var statearr_30921_30934 = state_30919__$1;
(statearr_30921_30934[(2)] = null);

(statearr_30921_30934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30920 === (2))){
var state_30919__$1 = state_30919;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30919__$1,(4),ch);
} else {
if((state_val_30920 === (3))){
var inst_30917 = (state_30919[(2)]);
var state_30919__$1 = state_30919;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30919__$1,inst_30917);
} else {
if((state_val_30920 === (4))){
var inst_30907 = (state_30919[(7)]);
var inst_30907__$1 = (state_30919[(2)]);
var state_30919__$1 = (function (){var statearr_30922 = state_30919;
(statearr_30922[(7)] = inst_30907__$1);

return statearr_30922;
})();
if(cljs.core.truth_(inst_30907__$1)){
var statearr_30923_30935 = state_30919__$1;
(statearr_30923_30935[(1)] = (5));

} else {
var statearr_30924_30936 = state_30919__$1;
(statearr_30924_30936[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30920 === (5))){
var inst_30907 = (state_30919[(7)]);
var inst_30909 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_30907);
var state_30919__$1 = state_30919;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30919__$1,(8),inst_30909);
} else {
if((state_val_30920 === (6))){
var state_30919__$1 = state_30919;
var statearr_30925_30937 = state_30919__$1;
(statearr_30925_30937[(2)] = null);

(statearr_30925_30937[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30920 === (7))){
var inst_30915 = (state_30919[(2)]);
var state_30919__$1 = state_30919;
var statearr_30926_30938 = state_30919__$1;
(statearr_30926_30938[(2)] = inst_30915);

(statearr_30926_30938[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30920 === (8))){
var inst_30911 = (state_30919[(2)]);
var state_30919__$1 = (function (){var statearr_30927 = state_30919;
(statearr_30927[(8)] = inst_30911);

return statearr_30927;
})();
var statearr_30928_30939 = state_30919__$1;
(statearr_30928_30939[(2)] = null);

(statearr_30928_30939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__26509__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__26509__auto____0 = (function (){
var statearr_30929 = [null,null,null,null,null,null,null,null,null];
(statearr_30929[(0)] = figwheel$client$heads_up_plugin_$_state_machine__26509__auto__);

(statearr_30929[(1)] = (1));

return statearr_30929;
});
var figwheel$client$heads_up_plugin_$_state_machine__26509__auto____1 = (function (state_30919){
while(true){
var ret_value__26510__auto__ = (function (){try{while(true){
var result__26511__auto__ = switch__26508__auto__.call(null,state_30919);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26511__auto__;
}
break;
}
}catch (e30930){if((e30930 instanceof Object)){
var ex__26512__auto__ = e30930;
var statearr_30931_30940 = state_30919;
(statearr_30931_30940[(5)] = ex__26512__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30919);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30930;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30941 = state_30919;
state_30919 = G__30941;
continue;
} else {
return ret_value__26510__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__26509__auto__ = function(state_30919){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__26509__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__26509__auto____1.call(this,state_30919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__26509__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__26509__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__26509__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__26509__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__26509__auto__;
})()
})();
var state__26605__auto__ = (function (){var statearr_30932 = f__26604__auto__.call(null);
(statearr_30932[(6)] = c__26603__auto___30933);

return statearr_30932;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26605__auto__);
}));


figwheel.client.heads_up.ensure_container.call(null);

return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__26603__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26604__auto__ = (function (){var switch__26508__auto__ = (function (state_30947){
var state_val_30948 = (state_30947[(1)]);
if((state_val_30948 === (1))){
var inst_30942 = cljs.core.async.timeout.call(null,(3000));
var state_30947__$1 = state_30947;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30947__$1,(2),inst_30942);
} else {
if((state_val_30948 === (2))){
var inst_30944 = (state_30947[(2)]);
var inst_30945 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_30947__$1 = (function (){var statearr_30949 = state_30947;
(statearr_30949[(7)] = inst_30944);

return statearr_30949;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30947__$1,inst_30945);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__26509__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__26509__auto____0 = (function (){
var statearr_30950 = [null,null,null,null,null,null,null,null];
(statearr_30950[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__26509__auto__);

(statearr_30950[(1)] = (1));

return statearr_30950;
});
var figwheel$client$enforce_project_plugin_$_state_machine__26509__auto____1 = (function (state_30947){
while(true){
var ret_value__26510__auto__ = (function (){try{while(true){
var result__26511__auto__ = switch__26508__auto__.call(null,state_30947);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26511__auto__;
}
break;
}
}catch (e30951){if((e30951 instanceof Object)){
var ex__26512__auto__ = e30951;
var statearr_30952_30954 = state_30947;
(statearr_30952_30954[(5)] = ex__26512__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30947);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30951;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30955 = state_30947;
state_30947 = G__30955;
continue;
} else {
return ret_value__26510__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__26509__auto__ = function(state_30947){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__26509__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__26509__auto____1.call(this,state_30947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__26509__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__26509__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__26509__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__26509__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__26509__auto__;
})()
})();
var state__26605__auto__ = (function (){var statearr_30953 = f__26604__auto__.call(null);
(statearr_30953[(6)] = c__26603__auto__);

return statearr_30953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26605__auto__);
}));

return c__26603__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5720__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5720__auto__)){
var figwheel_version = temp__5720__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__26603__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26604__auto__ = (function (){var switch__26508__auto__ = (function (state_30962){
var state_val_30963 = (state_30962[(1)]);
if((state_val_30963 === (1))){
var inst_30956 = cljs.core.async.timeout.call(null,(2000));
var state_30962__$1 = state_30962;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30962__$1,(2),inst_30956);
} else {
if((state_val_30963 === (2))){
var inst_30958 = (state_30962[(2)]);
var inst_30959 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_30960 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_30959);
var state_30962__$1 = (function (){var statearr_30964 = state_30962;
(statearr_30964[(7)] = inst_30958);

return statearr_30964;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30962__$1,inst_30960);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26509__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26509__auto____0 = (function (){
var statearr_30965 = [null,null,null,null,null,null,null,null];
(statearr_30965[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26509__auto__);

(statearr_30965[(1)] = (1));

return statearr_30965;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26509__auto____1 = (function (state_30962){
while(true){
var ret_value__26510__auto__ = (function (){try{while(true){
var result__26511__auto__ = switch__26508__auto__.call(null,state_30962);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26511__auto__;
}
break;
}
}catch (e30966){if((e30966 instanceof Object)){
var ex__26512__auto__ = e30966;
var statearr_30967_30969 = state_30962;
(statearr_30967_30969[(5)] = ex__26512__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30962);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30966;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30970 = state_30962;
state_30962 = G__30970;
continue;
} else {
return ret_value__26510__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26509__auto__ = function(state_30962){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26509__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26509__auto____1.call(this,state_30962);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26509__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26509__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26509__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26509__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26509__auto__;
})()
})();
var state__26605__auto__ = (function (){var statearr_30968 = f__26604__auto__.call(null);
(statearr_30968[(6)] = c__26603__auto__);

return statearr_30968;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26605__auto__);
}));

return c__26603__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__30971){
var map__30972 = p__30971;
var map__30972__$1 = (((((!((map__30972 == null))))?(((((map__30972.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30972.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30972):map__30972);
var file = cljs.core.get.call(null,map__30972__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__30972__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__30972__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__30974 = "";
var G__30974__$1 = (cljs.core.truth_(file)?[G__30974,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__30974);
var G__30974__$2 = (cljs.core.truth_(line)?[G__30974__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__30974__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = line;
if(cljs.core.truth_(and__4115__auto__)){
return column;
} else {
return and__4115__auto__;
}
})())){
return [G__30974__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__30974__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__30975){
var map__30976 = p__30975;
var map__30976__$1 = (((((!((map__30976 == null))))?(((((map__30976.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30976.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30976):map__30976);
var ed = map__30976__$1;
var exception_data = cljs.core.get.call(null,map__30976__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__30976__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_30979 = (function (){var G__30978 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30978)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__30978;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_30979);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__30980){
var map__30981 = p__30980;
var map__30981__$1 = (((((!((map__30981 == null))))?(((((map__30981.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30981.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30981):map__30981);
var w = map__30981__$1;
var message = cljs.core.get.call(null,map__30981__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4115__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4115__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__30983 = cljs.core.seq.call(null,plugins);
var chunk__30984 = null;
var count__30985 = (0);
var i__30986 = (0);
while(true){
if((i__30986 < count__30985)){
var vec__30993 = cljs.core._nth.call(null,chunk__30984,i__30986);
var k = cljs.core.nth.call(null,vec__30993,(0),null);
var plugin = cljs.core.nth.call(null,vec__30993,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30999 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30983,chunk__30984,count__30985,i__30986,pl_30999,vec__30993,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_30999.call(null,msg_hist);
});})(seq__30983,chunk__30984,count__30985,i__30986,pl_30999,vec__30993,k,plugin))
);
} else {
}


var G__31000 = seq__30983;
var G__31001 = chunk__30984;
var G__31002 = count__30985;
var G__31003 = (i__30986 + (1));
seq__30983 = G__31000;
chunk__30984 = G__31001;
count__30985 = G__31002;
i__30986 = G__31003;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__30983);
if(temp__5720__auto__){
var seq__30983__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30983__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__30983__$1);
var G__31004 = cljs.core.chunk_rest.call(null,seq__30983__$1);
var G__31005 = c__4556__auto__;
var G__31006 = cljs.core.count.call(null,c__4556__auto__);
var G__31007 = (0);
seq__30983 = G__31004;
chunk__30984 = G__31005;
count__30985 = G__31006;
i__30986 = G__31007;
continue;
} else {
var vec__30996 = cljs.core.first.call(null,seq__30983__$1);
var k = cljs.core.nth.call(null,vec__30996,(0),null);
var plugin = cljs.core.nth.call(null,vec__30996,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31008 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30983,chunk__30984,count__30985,i__30986,pl_31008,vec__30996,k,plugin,seq__30983__$1,temp__5720__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_31008.call(null,msg_hist);
});})(seq__30983,chunk__30984,count__30985,i__30986,pl_31008,vec__30996,k,plugin,seq__30983__$1,temp__5720__auto__))
);
} else {
}


var G__31009 = cljs.core.next.call(null,seq__30983__$1);
var G__31010 = null;
var G__31011 = (0);
var G__31012 = (0);
seq__30983 = G__31009;
chunk__30984 = G__31010;
count__30985 = G__31011;
i__30986 = G__31012;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__31014 = arguments.length;
switch (G__31014) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((((!((goog.dependencies_ == null)))) || ((((!((goog.debugLoader_ == null)))) && ((!((goog.debugLoader_.dependencies_ == null)))))))){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
(figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts));

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__31015_31020 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__31016_31021 = null;
var count__31017_31022 = (0);
var i__31018_31023 = (0);
while(true){
if((i__31018_31023 < count__31017_31022)){
var msg_31024 = cljs.core._nth.call(null,chunk__31016_31021,i__31018_31023);
figwheel.client.socket.handle_incoming_message.call(null,msg_31024);


var G__31025 = seq__31015_31020;
var G__31026 = chunk__31016_31021;
var G__31027 = count__31017_31022;
var G__31028 = (i__31018_31023 + (1));
seq__31015_31020 = G__31025;
chunk__31016_31021 = G__31026;
count__31017_31022 = G__31027;
i__31018_31023 = G__31028;
continue;
} else {
var temp__5720__auto___31029 = cljs.core.seq.call(null,seq__31015_31020);
if(temp__5720__auto___31029){
var seq__31015_31030__$1 = temp__5720__auto___31029;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31015_31030__$1)){
var c__4556__auto___31031 = cljs.core.chunk_first.call(null,seq__31015_31030__$1);
var G__31032 = cljs.core.chunk_rest.call(null,seq__31015_31030__$1);
var G__31033 = c__4556__auto___31031;
var G__31034 = cljs.core.count.call(null,c__4556__auto___31031);
var G__31035 = (0);
seq__31015_31020 = G__31032;
chunk__31016_31021 = G__31033;
count__31017_31022 = G__31034;
i__31018_31023 = G__31035;
continue;
} else {
var msg_31036 = cljs.core.first.call(null,seq__31015_31030__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_31036);


var G__31037 = cljs.core.next.call(null,seq__31015_31030__$1);
var G__31038 = null;
var G__31039 = (0);
var G__31040 = (0);
seq__31015_31020 = G__31037;
chunk__31016_31021 = G__31038;
count__31017_31022 = G__31039;
i__31018_31023 = G__31040;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
} else {
return null;
}
}));

(figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
}));

(figwheel.client.start.cljs$lang$maxFixedArity = 1);

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4742__auto__ = [];
var len__4736__auto___31045 = arguments.length;
var i__4737__auto___31046 = (0);
while(true){
if((i__4737__auto___31046 < len__4736__auto___31045)){
args__4742__auto__.push((arguments[i__4737__auto___31046]));

var G__31047 = (i__4737__auto___31046 + (1));
i__4737__auto___31046 = G__31047;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__31042){
var map__31043 = p__31042;
var map__31043__$1 = (((((!((map__31043 == null))))?(((((map__31043.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31043.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31043):map__31043);
var opts = map__31043__$1;
return figwheel.client.start.call(null,opts);
}));

(figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq31041){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31041));
}));

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e31048){if((e31048 instanceof Error)){
var e = e31048;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e31048;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
(goog.dependencies_ = true);
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),(function (p__31049){
var map__31050 = p__31049;
var map__31050__$1 = (((((!((map__31050 == null))))?(((((map__31050.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31050.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31050):map__31050);
var msg_name = cljs.core.get.call(null,map__31050__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return (location.href = location.href);
} else {
return null;
}
}));
});

//# sourceMappingURL=client.js.map?rel=1603913411052
