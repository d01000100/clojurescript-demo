// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__26663 = arguments.length;
switch (G__26663) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26664 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26664 = (function (f,blockable,meta26665){
this.f = f;
this.blockable = blockable;
this.meta26665 = meta26665;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26664.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26666,meta26665__$1){
var self__ = this;
var _26666__$1 = this;
return (new cljs.core.async.t_cljs$core$async26664(self__.f,self__.blockable,meta26665__$1));
}));

(cljs.core.async.t_cljs$core$async26664.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26666){
var self__ = this;
var _26666__$1 = this;
return self__.meta26665;
}));

(cljs.core.async.t_cljs$core$async26664.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26664.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async26664.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async26664.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async26664.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta26665","meta26665",-396144699,null)], null);
}));

(cljs.core.async.t_cljs$core$async26664.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26664.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26664");

(cljs.core.async.t_cljs$core$async26664.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async26664");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26664.
 */
cljs.core.async.__GT_t_cljs$core$async26664 = (function cljs$core$async$__GT_t_cljs$core$async26664(f__$1,blockable__$1,meta26665){
return (new cljs.core.async.t_cljs$core$async26664(f__$1,blockable__$1,meta26665));
});

}

return (new cljs.core.async.t_cljs$core$async26664(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__26670 = arguments.length;
switch (G__26670) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__26673 = arguments.length;
switch (G__26673) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__26676 = arguments.length;
switch (G__26676) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_26678 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_26678);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_26678);
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__26680 = arguments.length;
switch (G__26680) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,ret);
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___26682 = n;
var x_26683 = (0);
while(true){
if((x_26683 < n__4613__auto___26682)){
(a[x_26683] = x_26683);

var G__26684 = (x_26683 + (1));
x_26683 = G__26684;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26685 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26685 = (function (flag,meta26686){
this.flag = flag;
this.meta26686 = meta26686;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26685.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26687,meta26686__$1){
var self__ = this;
var _26687__$1 = this;
return (new cljs.core.async.t_cljs$core$async26685(self__.flag,meta26686__$1));
}));

(cljs.core.async.t_cljs$core$async26685.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26687){
var self__ = this;
var _26687__$1 = this;
return self__.meta26686;
}));

(cljs.core.async.t_cljs$core$async26685.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26685.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async26685.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async26685.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async26685.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta26686","meta26686",-899972688,null)], null);
}));

(cljs.core.async.t_cljs$core$async26685.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26685.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26685");

(cljs.core.async.t_cljs$core$async26685.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async26685");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26685.
 */
cljs.core.async.__GT_t_cljs$core$async26685 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async26685(flag__$1,meta26686){
return (new cljs.core.async.t_cljs$core$async26685(flag__$1,meta26686));
});

}

return (new cljs.core.async.t_cljs$core$async26685(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26688 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26688 = (function (flag,cb,meta26689){
this.flag = flag;
this.cb = cb;
this.meta26689 = meta26689;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26688.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26690,meta26689__$1){
var self__ = this;
var _26690__$1 = this;
return (new cljs.core.async.t_cljs$core$async26688(self__.flag,self__.cb,meta26689__$1));
}));

(cljs.core.async.t_cljs$core$async26688.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26690){
var self__ = this;
var _26690__$1 = this;
return self__.meta26689;
}));

(cljs.core.async.t_cljs$core$async26688.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26688.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async26688.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async26688.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async26688.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta26689","meta26689",1534234929,null)], null);
}));

(cljs.core.async.t_cljs$core$async26688.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26688.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26688");

(cljs.core.async.t_cljs$core$async26688.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async26688");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26688.
 */
cljs.core.async.__GT_t_cljs$core$async26688 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async26688(flag__$1,cb__$1,meta26689){
return (new cljs.core.async.t_cljs$core$async26688(flag__$1,cb__$1,meta26689));
});

}

return (new cljs.core.async.t_cljs$core$async26688(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count.call(null,ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26691_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26691_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26692_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26692_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__26693 = (i + (1));
i = G__26693;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__4115__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___26699 = arguments.length;
var i__4737__auto___26700 = (0);
while(true){
if((i__4737__auto___26700 < len__4736__auto___26699)){
args__4742__auto__.push((arguments[i__4737__auto___26700]));

var G__26701 = (i__4737__auto___26700 + (1));
i__4737__auto___26700 = G__26701;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__26696){
var map__26697 = p__26696;
var map__26697__$1 = (((((!((map__26697 == null))))?(((((map__26697.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26697.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26697):map__26697);
var opts = map__26697__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq26694){
var G__26695 = cljs.core.first.call(null,seq26694);
var seq26694__$1 = cljs.core.next.call(null,seq26694);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26695,seq26694__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__26703 = arguments.length;
switch (G__26703) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__26603__auto___26749 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26604__auto__ = (function (){var switch__26508__auto__ = (function (state_26727){
var state_val_26728 = (state_26727[(1)]);
if((state_val_26728 === (7))){
var inst_26723 = (state_26727[(2)]);
var state_26727__$1 = state_26727;
var statearr_26729_26750 = state_26727__$1;
(statearr_26729_26750[(2)] = inst_26723);

(statearr_26729_26750[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26728 === (1))){
var state_26727__$1 = state_26727;
var statearr_26730_26751 = state_26727__$1;
(statearr_26730_26751[(2)] = null);

(statearr_26730_26751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26728 === (4))){
var inst_26706 = (state_26727[(7)]);
var inst_26706__$1 = (state_26727[(2)]);
var inst_26707 = (inst_26706__$1 == null);
var state_26727__$1 = (function (){var statearr_26731 = state_26727;
(statearr_26731[(7)] = inst_26706__$1);

return statearr_26731;
})();
if(cljs.core.truth_(inst_26707)){
var statearr_26732_26752 = state_26727__$1;
(statearr_26732_26752[(1)] = (5));

} else {
var statearr_26733_26753 = state_26727__$1;
(statearr_26733_26753[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26728 === (13))){
var state_26727__$1 = state_26727;
var statearr_26734_26754 = state_26727__$1;
(statearr_26734_26754[(2)] = null);

(statearr_26734_26754[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26728 === (6))){
var inst_26706 = (state_26727[(7)]);
var state_26727__$1 = state_26727;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26727__$1,(11),to,inst_26706);
} else {
if((state_val_26728 === (3))){
var inst_26725 = (state_26727[(2)]);
var state_26727__$1 = state_26727;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26727__$1,inst_26725);
} else {
if((state_val_26728 === (12))){
var state_26727__$1 = state_26727;
var statearr_26735_26755 = state_26727__$1;
(statearr_26735_26755[(2)] = null);

(statearr_26735_26755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26728 === (2))){
var state_26727__$1 = state_26727;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26727__$1,(4),from);
} else {
if((state_val_26728 === (11))){
var inst_26716 = (state_26727[(2)]);
var state_26727__$1 = state_26727;
if(cljs.core.truth_(inst_26716)){
var statearr_26736_26756 = state_26727__$1;
(statearr_26736_26756[(1)] = (12));

} else {
var statearr_26737_26757 = state_26727__$1;
(statearr_26737_26757[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26728 === (9))){
var state_26727__$1 = state_26727;
var statearr_26738_26758 = state_26727__$1;
(statearr_26738_26758[(2)] = null);

(statearr_26738_26758[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26728 === (5))){
var state_26727__$1 = state_26727;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26739_26759 = state_26727__$1;
(statearr_26739_26759[(1)] = (8));

} else {
var statearr_26740_26760 = state_26727__$1;
(statearr_26740_26760[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26728 === (14))){
var inst_26721 = (state_26727[(2)]);
var state_26727__$1 = state_26727;
var statearr_26741_26761 = state_26727__$1;
(statearr_26741_26761[(2)] = inst_26721);

(statearr_26741_26761[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26728 === (10))){
var inst_26713 = (state_26727[(2)]);
var state_26727__$1 = state_26727;
var statearr_26742_26762 = state_26727__$1;
(statearr_26742_26762[(2)] = inst_26713);

(statearr_26742_26762[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26728 === (8))){
var inst_26710 = cljs.core.async.close_BANG_.call(null,to);
var state_26727__$1 = state_26727;
var statearr_26743_26763 = state_26727__$1;
(statearr_26743_26763[(2)] = inst_26710);

(statearr_26743_26763[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__26509__auto__ = null;
var cljs$core$async$state_machine__26509__auto____0 = (function (){
var statearr_26744 = [null,null,null,null,null,null,null,null];
(statearr_26744[(0)] = cljs$core$async$state_machine__26509__auto__);

(statearr_26744[(1)] = (1));

return statearr_26744;
});
var cljs$core$async$state_machine__26509__auto____1 = (function (state_26727){
while(true){
var ret_value__26510__auto__ = (function (){try{while(true){
var result__26511__auto__ = switch__26508__auto__.call(null,state_26727);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26511__auto__;
}
break;
}
}catch (e26745){if((e26745 instanceof Object)){
var ex__26512__auto__ = e26745;
var statearr_26746_26764 = state_26727;
(statearr_26746_26764[(5)] = ex__26512__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26727);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26745;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26765 = state_26727;
state_26727 = G__26765;
continue;
} else {
return ret_value__26510__auto__;
}
break;
}
});
cljs$core$async$state_machine__26509__auto__ = function(state_26727){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26509__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26509__auto____1.call(this,state_26727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26509__auto____0;
cljs$core$async$state_machine__26509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26509__auto____1;
return cljs$core$async$state_machine__26509__auto__;
})()
})();
var state__26605__auto__ = (function (){var statearr_26747 = f__26604__auto__.call(null);
(statearr_26747[(6)] = c__26603__auto___26749);

return statearr_26747;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26605__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = (function (p__26766){
var vec__26767 = p__26766;
var v = cljs.core.nth.call(null,vec__26767,(0),null);
var p = cljs.core.nth.call(null,vec__26767,(1),null);
var job = vec__26767;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__26603__auto___26938 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26604__auto__ = (function (){var switch__26508__auto__ = (function (state_26774){
var state_val_26775 = (state_26774[(1)]);
if((state_val_26775 === (1))){
var state_26774__$1 = state_26774;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26774__$1,(2),res,v);
} else {
if((state_val_26775 === (2))){
var inst_26771 = (state_26774[(2)]);
var inst_26772 = cljs.core.async.close_BANG_.call(null,res);
var state_26774__$1 = (function (){var statearr_26776 = state_26774;
(statearr_26776[(7)] = inst_26771);

return statearr_26776;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26774__$1,inst_26772);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26509__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26509__auto____0 = (function (){
var statearr_26777 = [null,null,null,null,null,null,null,null];
(statearr_26777[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26509__auto__);

(statearr_26777[(1)] = (1));

return statearr_26777;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26509__auto____1 = (function (state_26774){
while(true){
var ret_value__26510__auto__ = (function (){try{while(true){
var result__26511__auto__ = switch__26508__auto__.call(null,state_26774);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26511__auto__;
}
break;
}
}catch (e26778){if((e26778 instanceof Object)){
var ex__26512__auto__ = e26778;
var statearr_26779_26939 = state_26774;
(statearr_26779_26939[(5)] = ex__26512__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26774);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26778;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26940 = state_26774;
state_26774 = G__26940;
continue;
} else {
return ret_value__26510__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26509__auto__ = function(state_26774){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26509__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26509__auto____1.call(this,state_26774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26509__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26509__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26509__auto__;
})()
})();
var state__26605__auto__ = (function (){var statearr_26780 = f__26604__auto__.call(null);
(statearr_26780[(6)] = c__26603__auto___26938);

return statearr_26780;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26605__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__26781){
var vec__26782 = p__26781;
var v = cljs.core.nth.call(null,vec__26782,(0),null);
var p = cljs.core.nth.call(null,vec__26782,(1),null);
var job = vec__26782;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var n__4613__auto___26941 = n;
var __26942 = (0);
while(true){
if((__26942 < n__4613__auto___26941)){
var G__26785_26943 = type;
var G__26785_26944__$1 = (((G__26785_26943 instanceof cljs.core.Keyword))?G__26785_26943.fqn:null);
switch (G__26785_26944__$1) {
case "compute":
var c__26603__auto___26946 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26942,c__26603__auto___26946,G__26785_26943,G__26785_26944__$1,n__4613__auto___26941,jobs,results,process,async){
return (function (){
var f__26604__auto__ = (function (){var switch__26508__auto__ = ((function (__26942,c__26603__auto___26946,G__26785_26943,G__26785_26944__$1,n__4613__auto___26941,jobs,results,process,async){
return (function (state_26798){
var state_val_26799 = (state_26798[(1)]);
if((state_val_26799 === (1))){
var state_26798__$1 = state_26798;
var statearr_26800_26947 = state_26798__$1;
(statearr_26800_26947[(2)] = null);

(statearr_26800_26947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26799 === (2))){
var state_26798__$1 = state_26798;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26798__$1,(4),jobs);
} else {
if((state_val_26799 === (3))){
var inst_26796 = (state_26798[(2)]);
var state_26798__$1 = state_26798;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26798__$1,inst_26796);
} else {
if((state_val_26799 === (4))){
var inst_26788 = (state_26798[(2)]);
var inst_26789 = process.call(null,inst_26788);
var state_26798__$1 = state_26798;
if(cljs.core.truth_(inst_26789)){
var statearr_26801_26948 = state_26798__$1;
(statearr_26801_26948[(1)] = (5));

} else {
var statearr_26802_26949 = state_26798__$1;
(statearr_26802_26949[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26799 === (5))){
var state_26798__$1 = state_26798;
var statearr_26803_26950 = state_26798__$1;
(statearr_26803_26950[(2)] = null);

(statearr_26803_26950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26799 === (6))){
var state_26798__$1 = state_26798;
var statearr_26804_26951 = state_26798__$1;
(statearr_26804_26951[(2)] = null);

(statearr_26804_26951[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26799 === (7))){
var inst_26794 = (state_26798[(2)]);
var state_26798__$1 = state_26798;
var statearr_26805_26952 = state_26798__$1;
(statearr_26805_26952[(2)] = inst_26794);

(statearr_26805_26952[(1)] = (3));


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
});})(__26942,c__26603__auto___26946,G__26785_26943,G__26785_26944__$1,n__4613__auto___26941,jobs,results,process,async))
;
return ((function (__26942,switch__26508__auto__,c__26603__auto___26946,G__26785_26943,G__26785_26944__$1,n__4613__auto___26941,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26509__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26509__auto____0 = (function (){
var statearr_26806 = [null,null,null,null,null,null,null];
(statearr_26806[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26509__auto__);

(statearr_26806[(1)] = (1));

return statearr_26806;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26509__auto____1 = (function (state_26798){
while(true){
var ret_value__26510__auto__ = (function (){try{while(true){
var result__26511__auto__ = switch__26508__auto__.call(null,state_26798);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26511__auto__;
}
break;
}
}catch (e26807){if((e26807 instanceof Object)){
var ex__26512__auto__ = e26807;
var statearr_26808_26953 = state_26798;
(statearr_26808_26953[(5)] = ex__26512__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26798);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26807;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26954 = state_26798;
state_26798 = G__26954;
continue;
} else {
return ret_value__26510__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26509__auto__ = function(state_26798){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26509__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26509__auto____1.call(this,state_26798);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26509__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26509__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26509__auto__;
})()
;})(__26942,switch__26508__auto__,c__26603__auto___26946,G__26785_26943,G__26785_26944__$1,n__4613__auto___26941,jobs,results,process,async))
})();
var state__26605__auto__ = (function (){var statearr_26809 = f__26604__auto__.call(null);
(statearr_26809[(6)] = c__26603__auto___26946);

return statearr_26809;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26605__auto__);
});})(__26942,c__26603__auto___26946,G__26785_26943,G__26785_26944__$1,n__4613__auto___26941,jobs,results,process,async))
);


break;
case "async":
var c__26603__auto___26955 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26942,c__26603__auto___26955,G__26785_26943,G__26785_26944__$1,n__4613__auto___26941,jobs,results,process,async){
return (function (){
var f__26604__auto__ = (function (){var switch__26508__auto__ = ((function (__26942,c__26603__auto___26955,G__26785_26943,G__26785_26944__$1,n__4613__auto___26941,jobs,results,process,async){
return (function (state_26822){
var state_val_26823 = (state_26822[(1)]);
if((state_val_26823 === (1))){
var state_26822__$1 = state_26822;
var statearr_26824_26956 = state_26822__$1;
(statearr_26824_26956[(2)] = null);

(statearr_26824_26956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26823 === (2))){
var state_26822__$1 = state_26822;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26822__$1,(4),jobs);
} else {
if((state_val_26823 === (3))){
var inst_26820 = (state_26822[(2)]);
var state_26822__$1 = state_26822;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26822__$1,inst_26820);
} else {
if((state_val_26823 === (4))){
var inst_26812 = (state_26822[(2)]);
var inst_26813 = async.call(null,inst_26812);
var state_26822__$1 = state_26822;
if(cljs.core.truth_(inst_26813)){
var statearr_26825_26957 = state_26822__$1;
(statearr_26825_26957[(1)] = (5));

} else {
var statearr_26826_26958 = state_26822__$1;
(statearr_26826_26958[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26823 === (5))){
var state_26822__$1 = state_26822;
var statearr_26827_26959 = state_26822__$1;
(statearr_26827_26959[(2)] = null);

(statearr_26827_26959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26823 === (6))){
var state_26822__$1 = state_26822;
var statearr_26828_26960 = state_26822__$1;
(statearr_26828_26960[(2)] = null);

(statearr_26828_26960[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26823 === (7))){
var inst_26818 = (state_26822[(2)]);
var state_26822__$1 = state_26822;
var statearr_26829_26961 = state_26822__$1;
(statearr_26829_26961[(2)] = inst_26818);

(statearr_26829_26961[(1)] = (3));


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
});})(__26942,c__26603__auto___26955,G__26785_26943,G__26785_26944__$1,n__4613__auto___26941,jobs,results,process,async))
;
return ((function (__26942,switch__26508__auto__,c__26603__auto___26955,G__26785_26943,G__26785_26944__$1,n__4613__auto___26941,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26509__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26509__auto____0 = (function (){
var statearr_26830 = [null,null,null,null,null,null,null];
(statearr_26830[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26509__auto__);

(statearr_26830[(1)] = (1));

return statearr_26830;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26509__auto____1 = (function (state_26822){
while(true){
var ret_value__26510__auto__ = (function (){try{while(true){
var result__26511__auto__ = switch__26508__auto__.call(null,state_26822);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26511__auto__;
}
break;
}
}catch (e26831){if((e26831 instanceof Object)){
var ex__26512__auto__ = e26831;
var statearr_26832_26962 = state_26822;
(statearr_26832_26962[(5)] = ex__26512__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26822);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26831;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26963 = state_26822;
state_26822 = G__26963;
continue;
} else {
return ret_value__26510__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26509__auto__ = function(state_26822){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26509__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26509__auto____1.call(this,state_26822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26509__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26509__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26509__auto__;
})()
;})(__26942,switch__26508__auto__,c__26603__auto___26955,G__26785_26943,G__26785_26944__$1,n__4613__auto___26941,jobs,results,process,async))
})();
var state__26605__auto__ = (function (){var statearr_26833 = f__26604__auto__.call(null);
(statearr_26833[(6)] = c__26603__auto___26955);

return statearr_26833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26605__auto__);
});})(__26942,c__26603__auto___26955,G__26785_26943,G__26785_26944__$1,n__4613__auto___26941,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26785_26944__$1)].join('')));

}

var G__26964 = (__26942 + (1));
__26942 = G__26964;
continue;
} else {
}
break;
}

var c__26603__auto___26965 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26604__auto__ = (function (){var switch__26508__auto__ = (function (state_26855){
var state_val_26856 = (state_26855[(1)]);
if((state_val_26856 === (7))){
var inst_26851 = (state_26855[(2)]);
var state_26855__$1 = state_26855;
var statearr_26857_26966 = state_26855__$1;
(statearr_26857_26966[(2)] = inst_26851);

(statearr_26857_26966[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26856 === (1))){
var state_26855__$1 = state_26855;
var statearr_26858_26967 = state_26855__$1;
(statearr_26858_26967[(2)] = null);

(statearr_26858_26967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26856 === (4))){
var inst_26836 = (state_26855[(7)]);
var inst_26836__$1 = (state_26855[(2)]);
var inst_26837 = (inst_26836__$1 == null);
var state_26855__$1 = (function (){var statearr_26859 = state_26855;
(statearr_26859[(7)] = inst_26836__$1);

return statearr_26859;
})();
if(cljs.core.truth_(inst_26837)){
var statearr_26860_26968 = state_26855__$1;
(statearr_26860_26968[(1)] = (5));

} else {
var statearr_26861_26969 = state_26855__$1;
(statearr_26861_26969[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26856 === (6))){
var inst_26836 = (state_26855[(7)]);
var inst_26841 = (state_26855[(8)]);
var inst_26841__$1 = cljs.core.async.chan.call(null,(1));
var inst_26842 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26843 = [inst_26836,inst_26841__$1];
var inst_26844 = (new cljs.core.PersistentVector(null,2,(5),inst_26842,inst_26843,null));
var state_26855__$1 = (function (){var statearr_26862 = state_26855;
(statearr_26862[(8)] = inst_26841__$1);

return statearr_26862;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26855__$1,(8),jobs,inst_26844);
} else {
if((state_val_26856 === (3))){
var inst_26853 = (state_26855[(2)]);
var state_26855__$1 = state_26855;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26855__$1,inst_26853);
} else {
if((state_val_26856 === (2))){
var state_26855__$1 = state_26855;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26855__$1,(4),from);
} else {
if((state_val_26856 === (9))){
var inst_26848 = (state_26855[(2)]);
var state_26855__$1 = (function (){var statearr_26863 = state_26855;
(statearr_26863[(9)] = inst_26848);

return statearr_26863;
})();
var statearr_26864_26970 = state_26855__$1;
(statearr_26864_26970[(2)] = null);

(statearr_26864_26970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26856 === (5))){
var inst_26839 = cljs.core.async.close_BANG_.call(null,jobs);
var state_26855__$1 = state_26855;
var statearr_26865_26971 = state_26855__$1;
(statearr_26865_26971[(2)] = inst_26839);

(statearr_26865_26971[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26856 === (8))){
var inst_26841 = (state_26855[(8)]);
var inst_26846 = (state_26855[(2)]);
var state_26855__$1 = (function (){var statearr_26866 = state_26855;
(statearr_26866[(10)] = inst_26846);

return statearr_26866;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26855__$1,(9),results,inst_26841);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26509__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26509__auto____0 = (function (){
var statearr_26867 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26867[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26509__auto__);

(statearr_26867[(1)] = (1));

return statearr_26867;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26509__auto____1 = (function (state_26855){
while(true){
var ret_value__26510__auto__ = (function (){try{while(true){
var result__26511__auto__ = switch__26508__auto__.call(null,state_26855);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26511__auto__;
}
break;
}
}catch (e26868){if((e26868 instanceof Object)){
var ex__26512__auto__ = e26868;
var statearr_26869_26972 = state_26855;
(statearr_26869_26972[(5)] = ex__26512__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26855);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26868;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26973 = state_26855;
state_26855 = G__26973;
continue;
} else {
return ret_value__26510__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26509__auto__ = function(state_26855){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26509__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26509__auto____1.call(this,state_26855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26509__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26509__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26509__auto__;
})()
})();
var state__26605__auto__ = (function (){var statearr_26870 = f__26604__auto__.call(null);
(statearr_26870[(6)] = c__26603__auto___26965);

return statearr_26870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26605__auto__);
}));


var c__26603__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26604__auto__ = (function (){var switch__26508__auto__ = (function (state_26908){
var state_val_26909 = (state_26908[(1)]);
if((state_val_26909 === (7))){
var inst_26904 = (state_26908[(2)]);
var state_26908__$1 = state_26908;
var statearr_26910_26974 = state_26908__$1;
(statearr_26910_26974[(2)] = inst_26904);

(statearr_26910_26974[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26909 === (20))){
var state_26908__$1 = state_26908;
var statearr_26911_26975 = state_26908__$1;
(statearr_26911_26975[(2)] = null);

(statearr_26911_26975[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26909 === (1))){
var state_26908__$1 = state_26908;
var statearr_26912_26976 = state_26908__$1;
(statearr_26912_26976[(2)] = null);

(statearr_26912_26976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26909 === (4))){
var inst_26873 = (state_26908[(7)]);
var inst_26873__$1 = (state_26908[(2)]);
var inst_26874 = (inst_26873__$1 == null);
var state_26908__$1 = (function (){var statearr_26913 = state_26908;
(statearr_26913[(7)] = inst_26873__$1);

return statearr_26913;
})();
if(cljs.core.truth_(inst_26874)){
var statearr_26914_26977 = state_26908__$1;
(statearr_26914_26977[(1)] = (5));

} else {
var statearr_26915_26978 = state_26908__$1;
(statearr_26915_26978[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26909 === (15))){
var inst_26886 = (state_26908[(8)]);
var state_26908__$1 = state_26908;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26908__$1,(18),to,inst_26886);
} else {
if((state_val_26909 === (21))){
var inst_26899 = (state_26908[(2)]);
var state_26908__$1 = state_26908;
var statearr_26916_26979 = state_26908__$1;
(statearr_26916_26979[(2)] = inst_26899);

(statearr_26916_26979[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26909 === (13))){
var inst_26901 = (state_26908[(2)]);
var state_26908__$1 = (function (){var statearr_26917 = state_26908;
(statearr_26917[(9)] = inst_26901);

return statearr_26917;
})();
var statearr_26918_26980 = state_26908__$1;
(statearr_26918_26980[(2)] = null);

(statearr_26918_26980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26909 === (6))){
var inst_26873 = (state_26908[(7)]);
var state_26908__$1 = state_26908;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26908__$1,(11),inst_26873);
} else {
if((state_val_26909 === (17))){
var inst_26894 = (state_26908[(2)]);
var state_26908__$1 = state_26908;
if(cljs.core.truth_(inst_26894)){
var statearr_26919_26981 = state_26908__$1;
(statearr_26919_26981[(1)] = (19));

} else {
var statearr_26920_26982 = state_26908__$1;
(statearr_26920_26982[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26909 === (3))){
var inst_26906 = (state_26908[(2)]);
var state_26908__$1 = state_26908;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26908__$1,inst_26906);
} else {
if((state_val_26909 === (12))){
var inst_26883 = (state_26908[(10)]);
var state_26908__$1 = state_26908;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26908__$1,(14),inst_26883);
} else {
if((state_val_26909 === (2))){
var state_26908__$1 = state_26908;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26908__$1,(4),results);
} else {
if((state_val_26909 === (19))){
var state_26908__$1 = state_26908;
var statearr_26921_26983 = state_26908__$1;
(statearr_26921_26983[(2)] = null);

(statearr_26921_26983[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26909 === (11))){
var inst_26883 = (state_26908[(2)]);
var state_26908__$1 = (function (){var statearr_26922 = state_26908;
(statearr_26922[(10)] = inst_26883);

return statearr_26922;
})();
var statearr_26923_26984 = state_26908__$1;
(statearr_26923_26984[(2)] = null);

(statearr_26923_26984[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26909 === (9))){
var state_26908__$1 = state_26908;
var statearr_26924_26985 = state_26908__$1;
(statearr_26924_26985[(2)] = null);

(statearr_26924_26985[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26909 === (5))){
var state_26908__$1 = state_26908;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26925_26986 = state_26908__$1;
(statearr_26925_26986[(1)] = (8));

} else {
var statearr_26926_26987 = state_26908__$1;
(statearr_26926_26987[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26909 === (14))){
var inst_26886 = (state_26908[(8)]);
var inst_26886__$1 = (state_26908[(2)]);
var inst_26887 = (inst_26886__$1 == null);
var inst_26888 = cljs.core.not.call(null,inst_26887);
var state_26908__$1 = (function (){var statearr_26927 = state_26908;
(statearr_26927[(8)] = inst_26886__$1);

return statearr_26927;
})();
if(inst_26888){
var statearr_26928_26988 = state_26908__$1;
(statearr_26928_26988[(1)] = (15));

} else {
var statearr_26929_26989 = state_26908__$1;
(statearr_26929_26989[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26909 === (16))){
var state_26908__$1 = state_26908;
var statearr_26930_26990 = state_26908__$1;
(statearr_26930_26990[(2)] = false);

(statearr_26930_26990[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26909 === (10))){
var inst_26880 = (state_26908[(2)]);
var state_26908__$1 = state_26908;
var statearr_26931_26991 = state_26908__$1;
(statearr_26931_26991[(2)] = inst_26880);

(statearr_26931_26991[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26909 === (18))){
var inst_26891 = (state_26908[(2)]);
var state_26908__$1 = state_26908;
var statearr_26932_26992 = state_26908__$1;
(statearr_26932_26992[(2)] = inst_26891);

(statearr_26932_26992[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26909 === (8))){
var inst_26877 = cljs.core.async.close_BANG_.call(null,to);
var state_26908__$1 = state_26908;
var statearr_26933_26993 = state_26908__$1;
(statearr_26933_26993[(2)] = inst_26877);

(statearr_26933_26993[(1)] = (10));


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
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26509__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26509__auto____0 = (function (){
var statearr_26934 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26934[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26509__auto__);

(statearr_26934[(1)] = (1));

return statearr_26934;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26509__auto____1 = (function (state_26908){
while(true){
var ret_value__26510__auto__ = (function (){try{while(true){
var result__26511__auto__ = switch__26508__auto__.call(null,state_26908);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26511__auto__;
}
break;
}
}catch (e26935){if((e26935 instanceof Object)){
var ex__26512__auto__ = e26935;
var statearr_26936_26994 = state_26908;
(statearr_26936_26994[(5)] = ex__26512__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26908);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26935;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26995 = state_26908;
state_26908 = G__26995;
continue;
} else {
return ret_value__26510__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26509__auto__ = function(state_26908){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26509__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26509__auto____1.call(this,state_26908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26509__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26509__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26509__auto__;
})()
})();
var state__26605__auto__ = (function (){var statearr_26937 = f__26604__auto__.call(null);
(statearr_26937[(6)] = c__26603__auto__);

return statearr_26937;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26605__auto__);
}));

return c__26603__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__26997 = arguments.length;
switch (G__26997) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__27000 = arguments.length;
switch (G__27000) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__27003 = arguments.length;
switch (G__27003) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__26603__auto___27052 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26604__auto__ = (function (){var switch__26508__auto__ = (function (state_27029){
var state_val_27030 = (state_27029[(1)]);
if((state_val_27030 === (7))){
var inst_27025 = (state_27029[(2)]);
var state_27029__$1 = state_27029;
var statearr_27031_27053 = state_27029__$1;
(statearr_27031_27053[(2)] = inst_27025);

(statearr_27031_27053[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27030 === (1))){
var state_27029__$1 = state_27029;
var statearr_27032_27054 = state_27029__$1;
(statearr_27032_27054[(2)] = null);

(statearr_27032_27054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27030 === (4))){
var inst_27006 = (state_27029[(7)]);
var inst_27006__$1 = (state_27029[(2)]);
var inst_27007 = (inst_27006__$1 == null);
var state_27029__$1 = (function (){var statearr_27033 = state_27029;
(statearr_27033[(7)] = inst_27006__$1);

return statearr_27033;
})();
if(cljs.core.truth_(inst_27007)){
var statearr_27034_27055 = state_27029__$1;
(statearr_27034_27055[(1)] = (5));

} else {
var statearr_27035_27056 = state_27029__$1;
(statearr_27035_27056[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27030 === (13))){
var state_27029__$1 = state_27029;
var statearr_27036_27057 = state_27029__$1;
(statearr_27036_27057[(2)] = null);

(statearr_27036_27057[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27030 === (6))){
var inst_27006 = (state_27029[(7)]);
var inst_27012 = p.call(null,inst_27006);
var state_27029__$1 = state_27029;
if(cljs.core.truth_(inst_27012)){
var statearr_27037_27058 = state_27029__$1;
(statearr_27037_27058[(1)] = (9));

} else {
var statearr_27038_27059 = state_27029__$1;
(statearr_27038_27059[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27030 === (3))){
var inst_27027 = (state_27029[(2)]);
var state_27029__$1 = state_27029;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27029__$1,inst_27027);
} else {
if((state_val_27030 === (12))){
var state_27029__$1 = state_27029;
var statearr_27039_27060 = state_27029__$1;
(statearr_27039_27060[(2)] = null);

(statearr_27039_27060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27030 === (2))){
var state_27029__$1 = state_27029;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27029__$1,(4),ch);
} else {
if((state_val_27030 === (11))){
var inst_27006 = (state_27029[(7)]);
var inst_27016 = (state_27029[(2)]);
var state_27029__$1 = state_27029;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27029__$1,(8),inst_27016,inst_27006);
} else {
if((state_val_27030 === (9))){
var state_27029__$1 = state_27029;
var statearr_27040_27061 = state_27029__$1;
(statearr_27040_27061[(2)] = tc);

(statearr_27040_27061[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27030 === (5))){
var inst_27009 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27010 = cljs.core.async.close_BANG_.call(null,fc);
var state_27029__$1 = (function (){var statearr_27041 = state_27029;
(statearr_27041[(8)] = inst_27009);

return statearr_27041;
})();
var statearr_27042_27062 = state_27029__$1;
(statearr_27042_27062[(2)] = inst_27010);

(statearr_27042_27062[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27030 === (14))){
var inst_27023 = (state_27029[(2)]);
var state_27029__$1 = state_27029;
var statearr_27043_27063 = state_27029__$1;
(statearr_27043_27063[(2)] = inst_27023);

(statearr_27043_27063[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27030 === (10))){
var state_27029__$1 = state_27029;
var statearr_27044_27064 = state_27029__$1;
(statearr_27044_27064[(2)] = fc);

(statearr_27044_27064[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27030 === (8))){
var inst_27018 = (state_27029[(2)]);
var state_27029__$1 = state_27029;
if(cljs.core.truth_(inst_27018)){
var statearr_27045_27065 = state_27029__$1;
(statearr_27045_27065[(1)] = (12));

} else {
var statearr_27046_27066 = state_27029__$1;
(statearr_27046_27066[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__26509__auto__ = null;
var cljs$core$async$state_machine__26509__auto____0 = (function (){
var statearr_27047 = [null,null,null,null,null,null,null,null,null];
(statearr_27047[(0)] = cljs$core$async$state_machine__26509__auto__);

(statearr_27047[(1)] = (1));

return statearr_27047;
});
var cljs$core$async$state_machine__26509__auto____1 = (function (state_27029){
while(true){
var ret_value__26510__auto__ = (function (){try{while(true){
var result__26511__auto__ = switch__26508__auto__.call(null,state_27029);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26511__auto__;
}
break;
}
}catch (e27048){if((e27048 instanceof Object)){
var ex__26512__auto__ = e27048;
var statearr_27049_27067 = state_27029;
(statearr_27049_27067[(5)] = ex__26512__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27029);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27048;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27068 = state_27029;
state_27029 = G__27068;
continue;
} else {
return ret_value__26510__auto__;
}
break;
}
});
cljs$core$async$state_machine__26509__auto__ = function(state_27029){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26509__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26509__auto____1.call(this,state_27029);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26509__auto____0;
cljs$core$async$state_machine__26509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26509__auto____1;
return cljs$core$async$state_machine__26509__auto__;
})()
})();
var state__26605__auto__ = (function (){var statearr_27050 = f__26604__auto__.call(null);
(statearr_27050[(6)] = c__26603__auto___27052);

return statearr_27050;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26605__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__26603__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26604__auto__ = (function (){var switch__26508__auto__ = (function (state_27089){
var state_val_27090 = (state_27089[(1)]);
if((state_val_27090 === (7))){
var inst_27085 = (state_27089[(2)]);
var state_27089__$1 = state_27089;
var statearr_27091_27109 = state_27089__$1;
(statearr_27091_27109[(2)] = inst_27085);

(statearr_27091_27109[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27090 === (1))){
var inst_27069 = init;
var state_27089__$1 = (function (){var statearr_27092 = state_27089;
(statearr_27092[(7)] = inst_27069);

return statearr_27092;
})();
var statearr_27093_27110 = state_27089__$1;
(statearr_27093_27110[(2)] = null);

(statearr_27093_27110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27090 === (4))){
var inst_27072 = (state_27089[(8)]);
var inst_27072__$1 = (state_27089[(2)]);
var inst_27073 = (inst_27072__$1 == null);
var state_27089__$1 = (function (){var statearr_27094 = state_27089;
(statearr_27094[(8)] = inst_27072__$1);

return statearr_27094;
})();
if(cljs.core.truth_(inst_27073)){
var statearr_27095_27111 = state_27089__$1;
(statearr_27095_27111[(1)] = (5));

} else {
var statearr_27096_27112 = state_27089__$1;
(statearr_27096_27112[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27090 === (6))){
var inst_27076 = (state_27089[(9)]);
var inst_27069 = (state_27089[(7)]);
var inst_27072 = (state_27089[(8)]);
var inst_27076__$1 = f.call(null,inst_27069,inst_27072);
var inst_27077 = cljs.core.reduced_QMARK_.call(null,inst_27076__$1);
var state_27089__$1 = (function (){var statearr_27097 = state_27089;
(statearr_27097[(9)] = inst_27076__$1);

return statearr_27097;
})();
if(inst_27077){
var statearr_27098_27113 = state_27089__$1;
(statearr_27098_27113[(1)] = (8));

} else {
var statearr_27099_27114 = state_27089__$1;
(statearr_27099_27114[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27090 === (3))){
var inst_27087 = (state_27089[(2)]);
var state_27089__$1 = state_27089;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27089__$1,inst_27087);
} else {
if((state_val_27090 === (2))){
var state_27089__$1 = state_27089;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27089__$1,(4),ch);
} else {
if((state_val_27090 === (9))){
var inst_27076 = (state_27089[(9)]);
var inst_27069 = inst_27076;
var state_27089__$1 = (function (){var statearr_27100 = state_27089;
(statearr_27100[(7)] = inst_27069);

return statearr_27100;
})();
var statearr_27101_27115 = state_27089__$1;
(statearr_27101_27115[(2)] = null);

(statearr_27101_27115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27090 === (5))){
var inst_27069 = (state_27089[(7)]);
var state_27089__$1 = state_27089;
var statearr_27102_27116 = state_27089__$1;
(statearr_27102_27116[(2)] = inst_27069);

(statearr_27102_27116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27090 === (10))){
var inst_27083 = (state_27089[(2)]);
var state_27089__$1 = state_27089;
var statearr_27103_27117 = state_27089__$1;
(statearr_27103_27117[(2)] = inst_27083);

(statearr_27103_27117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27090 === (8))){
var inst_27076 = (state_27089[(9)]);
var inst_27079 = cljs.core.deref.call(null,inst_27076);
var state_27089__$1 = state_27089;
var statearr_27104_27118 = state_27089__$1;
(statearr_27104_27118[(2)] = inst_27079);

(statearr_27104_27118[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__26509__auto__ = null;
var cljs$core$async$reduce_$_state_machine__26509__auto____0 = (function (){
var statearr_27105 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27105[(0)] = cljs$core$async$reduce_$_state_machine__26509__auto__);

(statearr_27105[(1)] = (1));

return statearr_27105;
});
var cljs$core$async$reduce_$_state_machine__26509__auto____1 = (function (state_27089){
while(true){
var ret_value__26510__auto__ = (function (){try{while(true){
var result__26511__auto__ = switch__26508__auto__.call(null,state_27089);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26511__auto__;
}
break;
}
}catch (e27106){if((e27106 instanceof Object)){
var ex__26512__auto__ = e27106;
var statearr_27107_27119 = state_27089;
(statearr_27107_27119[(5)] = ex__26512__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27089);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27106;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27120 = state_27089;
state_27089 = G__27120;
continue;
} else {
return ret_value__26510__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__26509__auto__ = function(state_27089){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__26509__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__26509__auto____1.call(this,state_27089);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__26509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__26509__auto____0;
cljs$core$async$reduce_$_state_machine__26509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__26509__auto____1;
return cljs$core$async$reduce_$_state_machine__26509__auto__;
})()
})();
var state__26605__auto__ = (function (){var statearr_27108 = f__26604__auto__.call(null);
(statearr_27108[(6)] = c__26603__auto__);

return statearr_27108;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26605__auto__);
}));

return c__26603__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__26603__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26604__auto__ = (function (){var switch__26508__auto__ = (function (state_27126){
var state_val_27127 = (state_27126[(1)]);
if((state_val_27127 === (1))){
var inst_27121 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_27126__$1 = state_27126;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27126__$1,(2),inst_27121);
} else {
if((state_val_27127 === (2))){
var inst_27123 = (state_27126[(2)]);
var inst_27124 = f__$1.call(null,inst_27123);
var state_27126__$1 = state_27126;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27126__$1,inst_27124);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__26509__auto__ = null;
var cljs$core$async$transduce_$_state_machine__26509__auto____0 = (function (){
var statearr_27128 = [null,null,null,null,null,null,null];
(statearr_27128[(0)] = cljs$core$async$transduce_$_state_machine__26509__auto__);

(statearr_27128[(1)] = (1));

return statearr_27128;
});
var cljs$core$async$transduce_$_state_machine__26509__auto____1 = (function (state_27126){
while(true){
var ret_value__26510__auto__ = (function (){try{while(true){
var result__26511__auto__ = switch__26508__auto__.call(null,state_27126);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26511__auto__;
}
break;
}
}catch (e27129){if((e27129 instanceof Object)){
var ex__26512__auto__ = e27129;
var statearr_27130_27132 = state_27126;
(statearr_27130_27132[(5)] = ex__26512__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27126);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27129;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27133 = state_27126;
state_27126 = G__27133;
continue;
} else {
return ret_value__26510__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__26509__auto__ = function(state_27126){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__26509__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__26509__auto____1.call(this,state_27126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__26509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__26509__auto____0;
cljs$core$async$transduce_$_state_machine__26509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__26509__auto____1;
return cljs$core$async$transduce_$_state_machine__26509__auto__;
})()
})();
var state__26605__auto__ = (function (){var statearr_27131 = f__26604__auto__.call(null);
(statearr_27131[(6)] = c__26603__auto__);

return statearr_27131;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26605__auto__);
}));

return c__26603__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__27135 = arguments.length;
switch (G__27135) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__26603__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26604__auto__ = (function (){var switch__26508__auto__ = (function (state_27160){
var state_val_27161 = (state_27160[(1)]);
if((state_val_27161 === (7))){
var inst_27142 = (state_27160[(2)]);
var state_27160__$1 = state_27160;
var statearr_27162_27183 = state_27160__$1;
(statearr_27162_27183[(2)] = inst_27142);

(statearr_27162_27183[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27161 === (1))){
var inst_27136 = cljs.core.seq.call(null,coll);
var inst_27137 = inst_27136;
var state_27160__$1 = (function (){var statearr_27163 = state_27160;
(statearr_27163[(7)] = inst_27137);

return statearr_27163;
})();
var statearr_27164_27184 = state_27160__$1;
(statearr_27164_27184[(2)] = null);

(statearr_27164_27184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27161 === (4))){
var inst_27137 = (state_27160[(7)]);
var inst_27140 = cljs.core.first.call(null,inst_27137);
var state_27160__$1 = state_27160;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27160__$1,(7),ch,inst_27140);
} else {
if((state_val_27161 === (13))){
var inst_27154 = (state_27160[(2)]);
var state_27160__$1 = state_27160;
var statearr_27165_27185 = state_27160__$1;
(statearr_27165_27185[(2)] = inst_27154);

(statearr_27165_27185[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27161 === (6))){
var inst_27145 = (state_27160[(2)]);
var state_27160__$1 = state_27160;
if(cljs.core.truth_(inst_27145)){
var statearr_27166_27186 = state_27160__$1;
(statearr_27166_27186[(1)] = (8));

} else {
var statearr_27167_27187 = state_27160__$1;
(statearr_27167_27187[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27161 === (3))){
var inst_27158 = (state_27160[(2)]);
var state_27160__$1 = state_27160;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27160__$1,inst_27158);
} else {
if((state_val_27161 === (12))){
var state_27160__$1 = state_27160;
var statearr_27168_27188 = state_27160__$1;
(statearr_27168_27188[(2)] = null);

(statearr_27168_27188[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27161 === (2))){
var inst_27137 = (state_27160[(7)]);
var state_27160__$1 = state_27160;
if(cljs.core.truth_(inst_27137)){
var statearr_27169_27189 = state_27160__$1;
(statearr_27169_27189[(1)] = (4));

} else {
var statearr_27170_27190 = state_27160__$1;
(statearr_27170_27190[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27161 === (11))){
var inst_27151 = cljs.core.async.close_BANG_.call(null,ch);
var state_27160__$1 = state_27160;
var statearr_27171_27191 = state_27160__$1;
(statearr_27171_27191[(2)] = inst_27151);

(statearr_27171_27191[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27161 === (9))){
var state_27160__$1 = state_27160;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27172_27192 = state_27160__$1;
(statearr_27172_27192[(1)] = (11));

} else {
var statearr_27173_27193 = state_27160__$1;
(statearr_27173_27193[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27161 === (5))){
var inst_27137 = (state_27160[(7)]);
var state_27160__$1 = state_27160;
var statearr_27174_27194 = state_27160__$1;
(statearr_27174_27194[(2)] = inst_27137);

(statearr_27174_27194[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27161 === (10))){
var inst_27156 = (state_27160[(2)]);
var state_27160__$1 = state_27160;
var statearr_27175_27195 = state_27160__$1;
(statearr_27175_27195[(2)] = inst_27156);

(statearr_27175_27195[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27161 === (8))){
var inst_27137 = (state_27160[(7)]);
var inst_27147 = cljs.core.next.call(null,inst_27137);
var inst_27137__$1 = inst_27147;
var state_27160__$1 = (function (){var statearr_27176 = state_27160;
(statearr_27176[(7)] = inst_27137__$1);

return statearr_27176;
})();
var statearr_27177_27196 = state_27160__$1;
(statearr_27177_27196[(2)] = null);

(statearr_27177_27196[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__26509__auto__ = null;
var cljs$core$async$state_machine__26509__auto____0 = (function (){
var statearr_27178 = [null,null,null,null,null,null,null,null];
(statearr_27178[(0)] = cljs$core$async$state_machine__26509__auto__);

(statearr_27178[(1)] = (1));

return statearr_27178;
});
var cljs$core$async$state_machine__26509__auto____1 = (function (state_27160){
while(true){
var ret_value__26510__auto__ = (function (){try{while(true){
var result__26511__auto__ = switch__26508__auto__.call(null,state_27160);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26511__auto__;
}
break;
}
}catch (e27179){if((e27179 instanceof Object)){
var ex__26512__auto__ = e27179;
var statearr_27180_27197 = state_27160;
(statearr_27180_27197[(5)] = ex__26512__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27160);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27179;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27198 = state_27160;
state_27160 = G__27198;
continue;
} else {
return ret_value__26510__auto__;
}
break;
}
});
cljs$core$async$state_machine__26509__auto__ = function(state_27160){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26509__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26509__auto____1.call(this,state_27160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26509__auto____0;
cljs$core$async$state_machine__26509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26509__auto____1;
return cljs$core$async$state_machine__26509__auto__;
})()
})();
var state__26605__auto__ = (function (){var statearr_27181 = f__26604__auto__.call(null);
(statearr_27181[(6)] = c__26603__auto__);

return statearr_27181;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26605__auto__);
}));

return c__26603__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_27199 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,_);
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_27199.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_27200 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_27200.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_27201 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_27201.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_27202 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m);
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_27202.call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27203 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27203 = (function (ch,cs,meta27204){
this.ch = ch;
this.cs = cs;
this.meta27204 = meta27204;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27203.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27205,meta27204__$1){
var self__ = this;
var _27205__$1 = this;
return (new cljs.core.async.t_cljs$core$async27203(self__.ch,self__.cs,meta27204__$1));
}));

(cljs.core.async.t_cljs$core$async27203.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27205){
var self__ = this;
var _27205__$1 = this;
return self__.meta27204;
}));

(cljs.core.async.t_cljs$core$async27203.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27203.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async27203.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27203.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async27203.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async27203.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async27203.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta27204","meta27204",-1563281429,null)], null);
}));

(cljs.core.async.t_cljs$core$async27203.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27203.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27203");

(cljs.core.async.t_cljs$core$async27203.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async27203");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27203.
 */
cljs.core.async.__GT_t_cljs$core$async27203 = (function cljs$core$async$mult_$___GT_t_cljs$core$async27203(ch__$1,cs__$1,meta27204){
return (new cljs.core.async.t_cljs$core$async27203(ch__$1,cs__$1,meta27204));
});

}

return (new cljs.core.async.t_cljs$core$async27203(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});
var c__26603__auto___27425 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26604__auto__ = (function (){var switch__26508__auto__ = (function (state_27340){
var state_val_27341 = (state_27340[(1)]);
if((state_val_27341 === (7))){
var inst_27336 = (state_27340[(2)]);
var state_27340__$1 = state_27340;
var statearr_27342_27426 = state_27340__$1;
(statearr_27342_27426[(2)] = inst_27336);

(statearr_27342_27426[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27341 === (20))){
var inst_27239 = (state_27340[(7)]);
var inst_27251 = cljs.core.first.call(null,inst_27239);
var inst_27252 = cljs.core.nth.call(null,inst_27251,(0),null);
var inst_27253 = cljs.core.nth.call(null,inst_27251,(1),null);
var state_27340__$1 = (function (){var statearr_27343 = state_27340;
(statearr_27343[(8)] = inst_27252);

return statearr_27343;
})();
if(cljs.core.truth_(inst_27253)){
var statearr_27344_27427 = state_27340__$1;
(statearr_27344_27427[(1)] = (22));

} else {
var statearr_27345_27428 = state_27340__$1;
(statearr_27345_27428[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27341 === (27))){
var inst_27283 = (state_27340[(9)]);
var inst_27288 = (state_27340[(10)]);
var inst_27281 = (state_27340[(11)]);
var inst_27208 = (state_27340[(12)]);
var inst_27288__$1 = cljs.core._nth.call(null,inst_27281,inst_27283);
var inst_27289 = cljs.core.async.put_BANG_.call(null,inst_27288__$1,inst_27208,done);
var state_27340__$1 = (function (){var statearr_27346 = state_27340;
(statearr_27346[(10)] = inst_27288__$1);

return statearr_27346;
})();
if(cljs.core.truth_(inst_27289)){
var statearr_27347_27429 = state_27340__$1;
(statearr_27347_27429[(1)] = (30));

} else {
var statearr_27348_27430 = state_27340__$1;
(statearr_27348_27430[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27341 === (1))){
var state_27340__$1 = state_27340;
var statearr_27349_27431 = state_27340__$1;
(statearr_27349_27431[(2)] = null);

(statearr_27349_27431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27341 === (24))){
var inst_27239 = (state_27340[(7)]);
var inst_27258 = (state_27340[(2)]);
var inst_27259 = cljs.core.next.call(null,inst_27239);
var inst_27217 = inst_27259;
var inst_27218 = null;
var inst_27219 = (0);
var inst_27220 = (0);
var state_27340__$1 = (function (){var statearr_27350 = state_27340;
(statearr_27350[(13)] = inst_27217);

(statearr_27350[(14)] = inst_27218);

(statearr_27350[(15)] = inst_27220);

(statearr_27350[(16)] = inst_27258);

(statearr_27350[(17)] = inst_27219);

return statearr_27350;
})();
var statearr_27351_27432 = state_27340__$1;
(statearr_27351_27432[(2)] = null);

(statearr_27351_27432[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27341 === (39))){
var state_27340__$1 = state_27340;
var statearr_27355_27433 = state_27340__$1;
(statearr_27355_27433[(2)] = null);

(statearr_27355_27433[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27341 === (4))){
var inst_27208 = (state_27340[(12)]);
var inst_27208__$1 = (state_27340[(2)]);
var inst_27209 = (inst_27208__$1 == null);
var state_27340__$1 = (function (){var statearr_27356 = state_27340;
(statearr_27356[(12)] = inst_27208__$1);

return statearr_27356;
})();
if(cljs.core.truth_(inst_27209)){
var statearr_27357_27434 = state_27340__$1;
(statearr_27357_27434[(1)] = (5));

} else {
var statearr_27358_27435 = state_27340__$1;
(statearr_27358_27435[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27341 === (15))){
var inst_27217 = (state_27340[(13)]);
var inst_27218 = (state_27340[(14)]);
var inst_27220 = (state_27340[(15)]);
var inst_27219 = (state_27340[(17)]);
var inst_27235 = (state_27340[(2)]);
var inst_27236 = (inst_27220 + (1));
var tmp27352 = inst_27217;
var tmp27353 = inst_27218;
var tmp27354 = inst_27219;
var inst_27217__$1 = tmp27352;
var inst_27218__$1 = tmp27353;
var inst_27219__$1 = tmp27354;
var inst_27220__$1 = inst_27236;
var state_27340__$1 = (function (){var statearr_27359 = state_27340;
(statearr_27359[(13)] = inst_27217__$1);

(statearr_27359[(14)] = inst_27218__$1);

(statearr_27359[(15)] = inst_27220__$1);

(statearr_27359[(18)] = inst_27235);

(statearr_27359[(17)] = inst_27219__$1);

return statearr_27359;
})();
var statearr_27360_27436 = state_27340__$1;
(statearr_27360_27436[(2)] = null);

(statearr_27360_27436[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27341 === (21))){
var inst_27262 = (state_27340[(2)]);
var state_27340__$1 = state_27340;
var statearr_27364_27437 = state_27340__$1;
(statearr_27364_27437[(2)] = inst_27262);

(statearr_27364_27437[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27341 === (31))){
var inst_27288 = (state_27340[(10)]);
var inst_27292 = done.call(null,null);
var inst_27293 = cljs.core.async.untap_STAR_.call(null,m,inst_27288);
var state_27340__$1 = (function (){var statearr_27365 = state_27340;
(statearr_27365[(19)] = inst_27292);

return statearr_27365;
})();
var statearr_27366_27438 = state_27340__$1;
(statearr_27366_27438[(2)] = inst_27293);

(statearr_27366_27438[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27341 === (32))){
var inst_27283 = (state_27340[(9)]);
var inst_27282 = (state_27340[(20)]);
var inst_27281 = (state_27340[(11)]);
var inst_27280 = (state_27340[(21)]);
var inst_27295 = (state_27340[(2)]);
var inst_27296 = (inst_27283 + (1));
var tmp27361 = inst_27282;
var tmp27362 = inst_27281;
var tmp27363 = inst_27280;
var inst_27280__$1 = tmp27363;
var inst_27281__$1 = tmp27362;
var inst_27282__$1 = tmp27361;
var inst_27283__$1 = inst_27296;
var state_27340__$1 = (function (){var statearr_27367 = state_27340;
(statearr_27367[(9)] = inst_27283__$1);

(statearr_27367[(22)] = inst_27295);

(statearr_27367[(20)] = inst_27282__$1);

(statearr_27367[(11)] = inst_27281__$1);

(statearr_27367[(21)] = inst_27280__$1);

return statearr_27367;
})();
var statearr_27368_27439 = state_27340__$1;
(statearr_27368_27439[(2)] = null);

(statearr_27368_27439[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27341 === (40))){
var inst_27308 = (state_27340[(23)]);
var inst_27312 = done.call(null,null);
var inst_27313 = cljs.core.async.untap_STAR_.call(null,m,inst_27308);
var state_27340__$1 = (function (){var statearr_27369 = state_27340;
(statearr_27369[(24)] = inst_27312);

return statearr_27369;
})();
var statearr_27370_27440 = state_27340__$1;
(statearr_27370_27440[(2)] = inst_27313);

(statearr_27370_27440[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27341 === (33))){
var inst_27299 = (state_27340[(25)]);
var inst_27301 = cljs.core.chunked_seq_QMARK_.call(null,inst_27299);
var state_27340__$1 = state_27340;
if(inst_27301){
var statearr_27371_27441 = state_27340__$1;
(statearr_27371_27441[(1)] = (36));

} else {
var statearr_27372_27442 = state_27340__$1;
(statearr_27372_27442[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27341 === (13))){
var inst_27229 = (state_27340[(26)]);
var inst_27232 = cljs.core.async.close_BANG_.call(null,inst_27229);
var state_27340__$1 = state_27340;
var statearr_27373_27443 = state_27340__$1;
(statearr_27373_27443[(2)] = inst_27232);

(statearr_27373_27443[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27341 === (22))){
var inst_27252 = (state_27340[(8)]);
var inst_27255 = cljs.core.async.close_BANG_.call(null,inst_27252);
var state_27340__$1 = state_27340;
var statearr_27374_27444 = state_27340__$1;
(statearr_27374_27444[(2)] = inst_27255);

(statearr_27374_27444[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27341 === (36))){
var inst_27299 = (state_27340[(25)]);
var inst_27303 = cljs.core.chunk_first.call(null,inst_27299);
var inst_27304 = cljs.core.chunk_rest.call(null,inst_27299);
var inst_27305 = cljs.core.count.call(null,inst_27303);
var inst_27280 = inst_27304;
var inst_27281 = inst_27303;
var inst_27282 = inst_27305;
var inst_27283 = (0);
var state_27340__$1 = (function (){var statearr_27375 = state_27340;
(statearr_27375[(9)] = inst_27283);

(statearr_27375[(20)] = inst_27282);

(statearr_27375[(11)] = inst_27281);

(statearr_27375[(21)] = inst_27280);

return statearr_27375;
})();
var statearr_27376_27445 = state_27340__$1;
(statearr_27376_27445[(2)] = null);

(statearr_27376_27445[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27341 === (41))){
var inst_27299 = (state_27340[(25)]);
var inst_27315 = (state_27340[(2)]);
var inst_27316 = cljs.core.next.call(null,inst_27299);
var inst_27280 = inst_27316;
var inst_27281 = null;
var inst_27282 = (0);
var inst_27283 = (0);
var state_27340__$1 = (function (){var statearr_27377 = state_27340;
(statearr_27377[(9)] = inst_27283);

(statearr_27377[(20)] = inst_27282);

(statearr_27377[(27)] = inst_27315);

(statearr_27377[(11)] = inst_27281);

(statearr_27377[(21)] = inst_27280);

return statearr_27377;
})();
var statearr_27378_27446 = state_27340__$1;
(statearr_27378_27446[(2)] = null);

(statearr_27378_27446[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27341 === (43))){
var state_27340__$1 = state_27340;
var statearr_27379_27447 = state_27340__$1;
(statearr_27379_27447[(2)] = null);

(statearr_27379_27447[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27341 === (29))){
var inst_27324 = (state_27340[(2)]);
var state_27340__$1 = state_27340;
var statearr_27380_27448 = state_27340__$1;
(statearr_27380_27448[(2)] = inst_27324);

(statearr_27380_27448[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27341 === (44))){
var inst_27333 = (state_27340[(2)]);
var state_27340__$1 = (function (){var statearr_27381 = state_27340;
(statearr_27381[(28)] = inst_27333);

return statearr_27381;
})();
var statearr_27382_27449 = state_27340__$1;
(statearr_27382_27449[(2)] = null);

(statearr_27382_27449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27341 === (6))){
var inst_27272 = (state_27340[(29)]);
var inst_27271 = cljs.core.deref.call(null,cs);
var inst_27272__$1 = cljs.core.keys.call(null,inst_27271);
var inst_27273 = cljs.core.count.call(null,inst_27272__$1);
var inst_27274 = cljs.core.reset_BANG_.call(null,dctr,inst_27273);
var inst_27279 = cljs.core.seq.call(null,inst_27272__$1);
var inst_27280 = inst_27279;
var inst_27281 = null;
var inst_27282 = (0);
var inst_27283 = (0);
var state_27340__$1 = (function (){var statearr_27383 = state_27340;
(statearr_27383[(9)] = inst_27283);

(statearr_27383[(29)] = inst_27272__$1);

(statearr_27383[(30)] = inst_27274);

(statearr_27383[(20)] = inst_27282);

(statearr_27383[(11)] = inst_27281);

(statearr_27383[(21)] = inst_27280);

return statearr_27383;
})();
var statearr_27384_27450 = state_27340__$1;
(statearr_27384_27450[(2)] = null);

(statearr_27384_27450[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27341 === (28))){
var inst_27299 = (state_27340[(25)]);
var inst_27280 = (state_27340[(21)]);
var inst_27299__$1 = cljs.core.seq.call(null,inst_27280);
var state_27340__$1 = (function (){var statearr_27385 = state_27340;
(statearr_27385[(25)] = inst_27299__$1);

return statearr_27385;
})();
if(inst_27299__$1){
var statearr_27386_27451 = state_27340__$1;
(statearr_27386_27451[(1)] = (33));

} else {
var statearr_27387_27452 = state_27340__$1;
(statearr_27387_27452[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27341 === (25))){
var inst_27283 = (state_27340[(9)]);
var inst_27282 = (state_27340[(20)]);
var inst_27285 = (inst_27283 < inst_27282);
var inst_27286 = inst_27285;
var state_27340__$1 = state_27340;
if(cljs.core.truth_(inst_27286)){
var statearr_27388_27453 = state_27340__$1;
(statearr_27388_27453[(1)] = (27));

} else {
var statearr_27389_27454 = state_27340__$1;
(statearr_27389_27454[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27341 === (34))){
var state_27340__$1 = state_27340;
var statearr_27390_27455 = state_27340__$1;
(statearr_27390_27455[(2)] = null);

(statearr_27390_27455[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27341 === (17))){
var state_27340__$1 = state_27340;
var statearr_27391_27456 = state_27340__$1;
(statearr_27391_27456[(2)] = null);

(statearr_27391_27456[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27341 === (3))){
var inst_27338 = (state_27340[(2)]);
var state_27340__$1 = state_27340;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27340__$1,inst_27338);
} else {
if((state_val_27341 === (12))){
var inst_27267 = (state_27340[(2)]);
var state_27340__$1 = state_27340;
var statearr_27392_27457 = state_27340__$1;
(statearr_27392_27457[(2)] = inst_27267);

(statearr_27392_27457[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27341 === (2))){
var state_27340__$1 = state_27340;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27340__$1,(4),ch);
} else {
if((state_val_27341 === (23))){
var state_27340__$1 = state_27340;
var statearr_27393_27458 = state_27340__$1;
(statearr_27393_27458[(2)] = null);

(statearr_27393_27458[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27341 === (35))){
var inst_27322 = (state_27340[(2)]);
var state_27340__$1 = state_27340;
var statearr_27394_27459 = state_27340__$1;
(statearr_27394_27459[(2)] = inst_27322);

(statearr_27394_27459[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27341 === (19))){
var inst_27239 = (state_27340[(7)]);
var inst_27243 = cljs.core.chunk_first.call(null,inst_27239);
var inst_27244 = cljs.core.chunk_rest.call(null,inst_27239);
var inst_27245 = cljs.core.count.call(null,inst_27243);
var inst_27217 = inst_27244;
var inst_27218 = inst_27243;
var inst_27219 = inst_27245;
var inst_27220 = (0);
var state_27340__$1 = (function (){var statearr_27395 = state_27340;
(statearr_27395[(13)] = inst_27217);

(statearr_27395[(14)] = inst_27218);

(statearr_27395[(15)] = inst_27220);

(statearr_27395[(17)] = inst_27219);

return statearr_27395;
})();
var statearr_27396_27460 = state_27340__$1;
(statearr_27396_27460[(2)] = null);

(statearr_27396_27460[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27341 === (11))){
var inst_27217 = (state_27340[(13)]);
var inst_27239 = (state_27340[(7)]);
var inst_27239__$1 = cljs.core.seq.call(null,inst_27217);
var state_27340__$1 = (function (){var statearr_27397 = state_27340;
(statearr_27397[(7)] = inst_27239__$1);

return statearr_27397;
})();
if(inst_27239__$1){
var statearr_27398_27461 = state_27340__$1;
(statearr_27398_27461[(1)] = (16));

} else {
var statearr_27399_27462 = state_27340__$1;
(statearr_27399_27462[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27341 === (9))){
var inst_27269 = (state_27340[(2)]);
var state_27340__$1 = state_27340;
var statearr_27400_27463 = state_27340__$1;
(statearr_27400_27463[(2)] = inst_27269);

(statearr_27400_27463[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27341 === (5))){
var inst_27215 = cljs.core.deref.call(null,cs);
var inst_27216 = cljs.core.seq.call(null,inst_27215);
var inst_27217 = inst_27216;
var inst_27218 = null;
var inst_27219 = (0);
var inst_27220 = (0);
var state_27340__$1 = (function (){var statearr_27401 = state_27340;
(statearr_27401[(13)] = inst_27217);

(statearr_27401[(14)] = inst_27218);

(statearr_27401[(15)] = inst_27220);

(statearr_27401[(17)] = inst_27219);

return statearr_27401;
})();
var statearr_27402_27464 = state_27340__$1;
(statearr_27402_27464[(2)] = null);

(statearr_27402_27464[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27341 === (14))){
var state_27340__$1 = state_27340;
var statearr_27403_27465 = state_27340__$1;
(statearr_27403_27465[(2)] = null);

(statearr_27403_27465[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27341 === (45))){
var inst_27330 = (state_27340[(2)]);
var state_27340__$1 = state_27340;
var statearr_27404_27466 = state_27340__$1;
(statearr_27404_27466[(2)] = inst_27330);

(statearr_27404_27466[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27341 === (26))){
var inst_27272 = (state_27340[(29)]);
var inst_27326 = (state_27340[(2)]);
var inst_27327 = cljs.core.seq.call(null,inst_27272);
var state_27340__$1 = (function (){var statearr_27405 = state_27340;
(statearr_27405[(31)] = inst_27326);

return statearr_27405;
})();
if(inst_27327){
var statearr_27406_27467 = state_27340__$1;
(statearr_27406_27467[(1)] = (42));

} else {
var statearr_27407_27468 = state_27340__$1;
(statearr_27407_27468[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27341 === (16))){
var inst_27239 = (state_27340[(7)]);
var inst_27241 = cljs.core.chunked_seq_QMARK_.call(null,inst_27239);
var state_27340__$1 = state_27340;
if(inst_27241){
var statearr_27408_27469 = state_27340__$1;
(statearr_27408_27469[(1)] = (19));

} else {
var statearr_27409_27470 = state_27340__$1;
(statearr_27409_27470[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27341 === (38))){
var inst_27319 = (state_27340[(2)]);
var state_27340__$1 = state_27340;
var statearr_27410_27471 = state_27340__$1;
(statearr_27410_27471[(2)] = inst_27319);

(statearr_27410_27471[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27341 === (30))){
var state_27340__$1 = state_27340;
var statearr_27411_27472 = state_27340__$1;
(statearr_27411_27472[(2)] = null);

(statearr_27411_27472[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27341 === (10))){
var inst_27218 = (state_27340[(14)]);
var inst_27220 = (state_27340[(15)]);
var inst_27228 = cljs.core._nth.call(null,inst_27218,inst_27220);
var inst_27229 = cljs.core.nth.call(null,inst_27228,(0),null);
var inst_27230 = cljs.core.nth.call(null,inst_27228,(1),null);
var state_27340__$1 = (function (){var statearr_27412 = state_27340;
(statearr_27412[(26)] = inst_27229);

return statearr_27412;
})();
if(cljs.core.truth_(inst_27230)){
var statearr_27413_27473 = state_27340__$1;
(statearr_27413_27473[(1)] = (13));

} else {
var statearr_27414_27474 = state_27340__$1;
(statearr_27414_27474[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27341 === (18))){
var inst_27265 = (state_27340[(2)]);
var state_27340__$1 = state_27340;
var statearr_27415_27475 = state_27340__$1;
(statearr_27415_27475[(2)] = inst_27265);

(statearr_27415_27475[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27341 === (42))){
var state_27340__$1 = state_27340;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27340__$1,(45),dchan);
} else {
if((state_val_27341 === (37))){
var inst_27308 = (state_27340[(23)]);
var inst_27299 = (state_27340[(25)]);
var inst_27208 = (state_27340[(12)]);
var inst_27308__$1 = cljs.core.first.call(null,inst_27299);
var inst_27309 = cljs.core.async.put_BANG_.call(null,inst_27308__$1,inst_27208,done);
var state_27340__$1 = (function (){var statearr_27416 = state_27340;
(statearr_27416[(23)] = inst_27308__$1);

return statearr_27416;
})();
if(cljs.core.truth_(inst_27309)){
var statearr_27417_27476 = state_27340__$1;
(statearr_27417_27476[(1)] = (39));

} else {
var statearr_27418_27477 = state_27340__$1;
(statearr_27418_27477[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27341 === (8))){
var inst_27220 = (state_27340[(15)]);
var inst_27219 = (state_27340[(17)]);
var inst_27222 = (inst_27220 < inst_27219);
var inst_27223 = inst_27222;
var state_27340__$1 = state_27340;
if(cljs.core.truth_(inst_27223)){
var statearr_27419_27478 = state_27340__$1;
(statearr_27419_27478[(1)] = (10));

} else {
var statearr_27420_27479 = state_27340__$1;
(statearr_27420_27479[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__26509__auto__ = null;
var cljs$core$async$mult_$_state_machine__26509__auto____0 = (function (){
var statearr_27421 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27421[(0)] = cljs$core$async$mult_$_state_machine__26509__auto__);

(statearr_27421[(1)] = (1));

return statearr_27421;
});
var cljs$core$async$mult_$_state_machine__26509__auto____1 = (function (state_27340){
while(true){
var ret_value__26510__auto__ = (function (){try{while(true){
var result__26511__auto__ = switch__26508__auto__.call(null,state_27340);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26511__auto__;
}
break;
}
}catch (e27422){if((e27422 instanceof Object)){
var ex__26512__auto__ = e27422;
var statearr_27423_27480 = state_27340;
(statearr_27423_27480[(5)] = ex__26512__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27340);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27422;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27481 = state_27340;
state_27340 = G__27481;
continue;
} else {
return ret_value__26510__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__26509__auto__ = function(state_27340){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__26509__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__26509__auto____1.call(this,state_27340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__26509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__26509__auto____0;
cljs$core$async$mult_$_state_machine__26509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__26509__auto____1;
return cljs$core$async$mult_$_state_machine__26509__auto__;
})()
})();
var state__26605__auto__ = (function (){var statearr_27424 = f__26604__auto__.call(null);
(statearr_27424[(6)] = c__26603__auto___27425);

return statearr_27424;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26605__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__27483 = arguments.length;
switch (G__27483) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_27485 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_27485.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_27486 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_27486.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_27487 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m);
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_27487.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_27488 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,state_map);
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_27488.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_27489 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,mode);
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_27489.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27500 = arguments.length;
var i__4737__auto___27501 = (0);
while(true){
if((i__4737__auto___27501 < len__4736__auto___27500)){
args__4742__auto__.push((arguments[i__4737__auto___27501]));

var G__27502 = (i__4737__auto___27501 + (1));
i__4737__auto___27501 = G__27502;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__27494){
var map__27495 = p__27494;
var map__27495__$1 = (((((!((map__27495 == null))))?(((((map__27495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27495.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27495):map__27495);
var opts = map__27495__$1;
var statearr_27497_27503 = state;
(statearr_27497_27503[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_27498_27504 = state;
(statearr_27498_27504[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_27499_27505 = state;
(statearr_27499_27505[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq27490){
var G__27491 = cljs.core.first.call(null,seq27490);
var seq27490__$1 = cljs.core.next.call(null,seq27490);
var G__27492 = cljs.core.first.call(null,seq27490__$1);
var seq27490__$2 = cljs.core.next.call(null,seq27490__$1);
var G__27493 = cljs.core.first.call(null,seq27490__$2);
var seq27490__$3 = cljs.core.next.call(null,seq27490__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27491,G__27492,G__27493,seq27490__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv.call(null,(function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27506 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27506 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta27507){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta27507 = meta27507;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27506.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27508,meta27507__$1){
var self__ = this;
var _27508__$1 = this;
return (new cljs.core.async.t_cljs$core$async27506(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta27507__$1));
}));

(cljs.core.async.t_cljs$core$async27506.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27508){
var self__ = this;
var _27508__$1 = this;
return self__.meta27507;
}));

(cljs.core.async.t_cljs$core$async27506.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27506.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async27506.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27506.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async27506.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async27506.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async27506.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async27506.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async27506.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta27507","meta27507",1993532231,null)], null);
}));

(cljs.core.async.t_cljs$core$async27506.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27506.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27506");

(cljs.core.async.t_cljs$core$async27506.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async27506");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27506.
 */
cljs.core.async.__GT_t_cljs$core$async27506 = (function cljs$core$async$mix_$___GT_t_cljs$core$async27506(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27507){
return (new cljs.core.async.t_cljs$core$async27506(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27507));
});

}

return (new cljs.core.async.t_cljs$core$async27506(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26603__auto___27670 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26604__auto__ = (function (){var switch__26508__auto__ = (function (state_27610){
var state_val_27611 = (state_27610[(1)]);
if((state_val_27611 === (7))){
var inst_27525 = (state_27610[(2)]);
var state_27610__$1 = state_27610;
var statearr_27612_27671 = state_27610__$1;
(statearr_27612_27671[(2)] = inst_27525);

(statearr_27612_27671[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27611 === (20))){
var inst_27537 = (state_27610[(7)]);
var state_27610__$1 = state_27610;
var statearr_27613_27672 = state_27610__$1;
(statearr_27613_27672[(2)] = inst_27537);

(statearr_27613_27672[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27611 === (27))){
var state_27610__$1 = state_27610;
var statearr_27614_27673 = state_27610__$1;
(statearr_27614_27673[(2)] = null);

(statearr_27614_27673[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27611 === (1))){
var inst_27512 = (state_27610[(8)]);
var inst_27512__$1 = calc_state.call(null);
var inst_27514 = (inst_27512__$1 == null);
var inst_27515 = cljs.core.not.call(null,inst_27514);
var state_27610__$1 = (function (){var statearr_27615 = state_27610;
(statearr_27615[(8)] = inst_27512__$1);

return statearr_27615;
})();
if(inst_27515){
var statearr_27616_27674 = state_27610__$1;
(statearr_27616_27674[(1)] = (2));

} else {
var statearr_27617_27675 = state_27610__$1;
(statearr_27617_27675[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27611 === (24))){
var inst_27570 = (state_27610[(9)]);
var inst_27584 = (state_27610[(10)]);
var inst_27561 = (state_27610[(11)]);
var inst_27584__$1 = inst_27561.call(null,inst_27570);
var state_27610__$1 = (function (){var statearr_27618 = state_27610;
(statearr_27618[(10)] = inst_27584__$1);

return statearr_27618;
})();
if(cljs.core.truth_(inst_27584__$1)){
var statearr_27619_27676 = state_27610__$1;
(statearr_27619_27676[(1)] = (29));

} else {
var statearr_27620_27677 = state_27610__$1;
(statearr_27620_27677[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27611 === (4))){
var inst_27528 = (state_27610[(2)]);
var state_27610__$1 = state_27610;
if(cljs.core.truth_(inst_27528)){
var statearr_27621_27678 = state_27610__$1;
(statearr_27621_27678[(1)] = (8));

} else {
var statearr_27622_27679 = state_27610__$1;
(statearr_27622_27679[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27611 === (15))){
var inst_27555 = (state_27610[(2)]);
var state_27610__$1 = state_27610;
if(cljs.core.truth_(inst_27555)){
var statearr_27623_27680 = state_27610__$1;
(statearr_27623_27680[(1)] = (19));

} else {
var statearr_27624_27681 = state_27610__$1;
(statearr_27624_27681[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27611 === (21))){
var inst_27560 = (state_27610[(12)]);
var inst_27560__$1 = (state_27610[(2)]);
var inst_27561 = cljs.core.get.call(null,inst_27560__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27562 = cljs.core.get.call(null,inst_27560__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27563 = cljs.core.get.call(null,inst_27560__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_27610__$1 = (function (){var statearr_27625 = state_27610;
(statearr_27625[(12)] = inst_27560__$1);

(statearr_27625[(11)] = inst_27561);

(statearr_27625[(13)] = inst_27562);

return statearr_27625;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27610__$1,(22),inst_27563);
} else {
if((state_val_27611 === (31))){
var inst_27592 = (state_27610[(2)]);
var state_27610__$1 = state_27610;
if(cljs.core.truth_(inst_27592)){
var statearr_27626_27682 = state_27610__$1;
(statearr_27626_27682[(1)] = (32));

} else {
var statearr_27627_27683 = state_27610__$1;
(statearr_27627_27683[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27611 === (32))){
var inst_27569 = (state_27610[(14)]);
var state_27610__$1 = state_27610;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27610__$1,(35),out,inst_27569);
} else {
if((state_val_27611 === (33))){
var inst_27560 = (state_27610[(12)]);
var inst_27537 = inst_27560;
var state_27610__$1 = (function (){var statearr_27628 = state_27610;
(statearr_27628[(7)] = inst_27537);

return statearr_27628;
})();
var statearr_27629_27684 = state_27610__$1;
(statearr_27629_27684[(2)] = null);

(statearr_27629_27684[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27611 === (13))){
var inst_27537 = (state_27610[(7)]);
var inst_27544 = inst_27537.cljs$lang$protocol_mask$partition0$;
var inst_27545 = (inst_27544 & (64));
var inst_27546 = inst_27537.cljs$core$ISeq$;
var inst_27547 = (cljs.core.PROTOCOL_SENTINEL === inst_27546);
var inst_27548 = ((inst_27545) || (inst_27547));
var state_27610__$1 = state_27610;
if(cljs.core.truth_(inst_27548)){
var statearr_27630_27685 = state_27610__$1;
(statearr_27630_27685[(1)] = (16));

} else {
var statearr_27631_27686 = state_27610__$1;
(statearr_27631_27686[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27611 === (22))){
var inst_27570 = (state_27610[(9)]);
var inst_27569 = (state_27610[(14)]);
var inst_27568 = (state_27610[(2)]);
var inst_27569__$1 = cljs.core.nth.call(null,inst_27568,(0),null);
var inst_27570__$1 = cljs.core.nth.call(null,inst_27568,(1),null);
var inst_27571 = (inst_27569__$1 == null);
var inst_27572 = cljs.core._EQ_.call(null,inst_27570__$1,change);
var inst_27573 = ((inst_27571) || (inst_27572));
var state_27610__$1 = (function (){var statearr_27632 = state_27610;
(statearr_27632[(9)] = inst_27570__$1);

(statearr_27632[(14)] = inst_27569__$1);

return statearr_27632;
})();
if(cljs.core.truth_(inst_27573)){
var statearr_27633_27687 = state_27610__$1;
(statearr_27633_27687[(1)] = (23));

} else {
var statearr_27634_27688 = state_27610__$1;
(statearr_27634_27688[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27611 === (36))){
var inst_27560 = (state_27610[(12)]);
var inst_27537 = inst_27560;
var state_27610__$1 = (function (){var statearr_27635 = state_27610;
(statearr_27635[(7)] = inst_27537);

return statearr_27635;
})();
var statearr_27636_27689 = state_27610__$1;
(statearr_27636_27689[(2)] = null);

(statearr_27636_27689[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27611 === (29))){
var inst_27584 = (state_27610[(10)]);
var state_27610__$1 = state_27610;
var statearr_27637_27690 = state_27610__$1;
(statearr_27637_27690[(2)] = inst_27584);

(statearr_27637_27690[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27611 === (6))){
var state_27610__$1 = state_27610;
var statearr_27638_27691 = state_27610__$1;
(statearr_27638_27691[(2)] = false);

(statearr_27638_27691[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27611 === (28))){
var inst_27580 = (state_27610[(2)]);
var inst_27581 = calc_state.call(null);
var inst_27537 = inst_27581;
var state_27610__$1 = (function (){var statearr_27639 = state_27610;
(statearr_27639[(7)] = inst_27537);

(statearr_27639[(15)] = inst_27580);

return statearr_27639;
})();
var statearr_27640_27692 = state_27610__$1;
(statearr_27640_27692[(2)] = null);

(statearr_27640_27692[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27611 === (25))){
var inst_27606 = (state_27610[(2)]);
var state_27610__$1 = state_27610;
var statearr_27641_27693 = state_27610__$1;
(statearr_27641_27693[(2)] = inst_27606);

(statearr_27641_27693[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27611 === (34))){
var inst_27604 = (state_27610[(2)]);
var state_27610__$1 = state_27610;
var statearr_27642_27694 = state_27610__$1;
(statearr_27642_27694[(2)] = inst_27604);

(statearr_27642_27694[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27611 === (17))){
var state_27610__$1 = state_27610;
var statearr_27643_27695 = state_27610__$1;
(statearr_27643_27695[(2)] = false);

(statearr_27643_27695[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27611 === (3))){
var state_27610__$1 = state_27610;
var statearr_27644_27696 = state_27610__$1;
(statearr_27644_27696[(2)] = false);

(statearr_27644_27696[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27611 === (12))){
var inst_27608 = (state_27610[(2)]);
var state_27610__$1 = state_27610;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27610__$1,inst_27608);
} else {
if((state_val_27611 === (2))){
var inst_27512 = (state_27610[(8)]);
var inst_27517 = inst_27512.cljs$lang$protocol_mask$partition0$;
var inst_27518 = (inst_27517 & (64));
var inst_27519 = inst_27512.cljs$core$ISeq$;
var inst_27520 = (cljs.core.PROTOCOL_SENTINEL === inst_27519);
var inst_27521 = ((inst_27518) || (inst_27520));
var state_27610__$1 = state_27610;
if(cljs.core.truth_(inst_27521)){
var statearr_27645_27697 = state_27610__$1;
(statearr_27645_27697[(1)] = (5));

} else {
var statearr_27646_27698 = state_27610__$1;
(statearr_27646_27698[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27611 === (23))){
var inst_27569 = (state_27610[(14)]);
var inst_27575 = (inst_27569 == null);
var state_27610__$1 = state_27610;
if(cljs.core.truth_(inst_27575)){
var statearr_27647_27699 = state_27610__$1;
(statearr_27647_27699[(1)] = (26));

} else {
var statearr_27648_27700 = state_27610__$1;
(statearr_27648_27700[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27611 === (35))){
var inst_27595 = (state_27610[(2)]);
var state_27610__$1 = state_27610;
if(cljs.core.truth_(inst_27595)){
var statearr_27649_27701 = state_27610__$1;
(statearr_27649_27701[(1)] = (36));

} else {
var statearr_27650_27702 = state_27610__$1;
(statearr_27650_27702[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27611 === (19))){
var inst_27537 = (state_27610[(7)]);
var inst_27557 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27537);
var state_27610__$1 = state_27610;
var statearr_27651_27703 = state_27610__$1;
(statearr_27651_27703[(2)] = inst_27557);

(statearr_27651_27703[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27611 === (11))){
var inst_27537 = (state_27610[(7)]);
var inst_27541 = (inst_27537 == null);
var inst_27542 = cljs.core.not.call(null,inst_27541);
var state_27610__$1 = state_27610;
if(inst_27542){
var statearr_27652_27704 = state_27610__$1;
(statearr_27652_27704[(1)] = (13));

} else {
var statearr_27653_27705 = state_27610__$1;
(statearr_27653_27705[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27611 === (9))){
var inst_27512 = (state_27610[(8)]);
var state_27610__$1 = state_27610;
var statearr_27654_27706 = state_27610__$1;
(statearr_27654_27706[(2)] = inst_27512);

(statearr_27654_27706[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27611 === (5))){
var state_27610__$1 = state_27610;
var statearr_27655_27707 = state_27610__$1;
(statearr_27655_27707[(2)] = true);

(statearr_27655_27707[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27611 === (14))){
var state_27610__$1 = state_27610;
var statearr_27656_27708 = state_27610__$1;
(statearr_27656_27708[(2)] = false);

(statearr_27656_27708[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27611 === (26))){
var inst_27570 = (state_27610[(9)]);
var inst_27577 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27570);
var state_27610__$1 = state_27610;
var statearr_27657_27709 = state_27610__$1;
(statearr_27657_27709[(2)] = inst_27577);

(statearr_27657_27709[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27611 === (16))){
var state_27610__$1 = state_27610;
var statearr_27658_27710 = state_27610__$1;
(statearr_27658_27710[(2)] = true);

(statearr_27658_27710[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27611 === (38))){
var inst_27600 = (state_27610[(2)]);
var state_27610__$1 = state_27610;
var statearr_27659_27711 = state_27610__$1;
(statearr_27659_27711[(2)] = inst_27600);

(statearr_27659_27711[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27611 === (30))){
var inst_27570 = (state_27610[(9)]);
var inst_27561 = (state_27610[(11)]);
var inst_27562 = (state_27610[(13)]);
var inst_27587 = cljs.core.empty_QMARK_.call(null,inst_27561);
var inst_27588 = inst_27562.call(null,inst_27570);
var inst_27589 = cljs.core.not.call(null,inst_27588);
var inst_27590 = ((inst_27587) && (inst_27589));
var state_27610__$1 = state_27610;
var statearr_27660_27712 = state_27610__$1;
(statearr_27660_27712[(2)] = inst_27590);

(statearr_27660_27712[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27611 === (10))){
var inst_27512 = (state_27610[(8)]);
var inst_27533 = (state_27610[(2)]);
var inst_27534 = cljs.core.get.call(null,inst_27533,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27535 = cljs.core.get.call(null,inst_27533,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27536 = cljs.core.get.call(null,inst_27533,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27537 = inst_27512;
var state_27610__$1 = (function (){var statearr_27661 = state_27610;
(statearr_27661[(7)] = inst_27537);

(statearr_27661[(16)] = inst_27535);

(statearr_27661[(17)] = inst_27534);

(statearr_27661[(18)] = inst_27536);

return statearr_27661;
})();
var statearr_27662_27713 = state_27610__$1;
(statearr_27662_27713[(2)] = null);

(statearr_27662_27713[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27611 === (18))){
var inst_27552 = (state_27610[(2)]);
var state_27610__$1 = state_27610;
var statearr_27663_27714 = state_27610__$1;
(statearr_27663_27714[(2)] = inst_27552);

(statearr_27663_27714[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27611 === (37))){
var state_27610__$1 = state_27610;
var statearr_27664_27715 = state_27610__$1;
(statearr_27664_27715[(2)] = null);

(statearr_27664_27715[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27611 === (8))){
var inst_27512 = (state_27610[(8)]);
var inst_27530 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27512);
var state_27610__$1 = state_27610;
var statearr_27665_27716 = state_27610__$1;
(statearr_27665_27716[(2)] = inst_27530);

(statearr_27665_27716[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__26509__auto__ = null;
var cljs$core$async$mix_$_state_machine__26509__auto____0 = (function (){
var statearr_27666 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27666[(0)] = cljs$core$async$mix_$_state_machine__26509__auto__);

(statearr_27666[(1)] = (1));

return statearr_27666;
});
var cljs$core$async$mix_$_state_machine__26509__auto____1 = (function (state_27610){
while(true){
var ret_value__26510__auto__ = (function (){try{while(true){
var result__26511__auto__ = switch__26508__auto__.call(null,state_27610);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26511__auto__;
}
break;
}
}catch (e27667){if((e27667 instanceof Object)){
var ex__26512__auto__ = e27667;
var statearr_27668_27717 = state_27610;
(statearr_27668_27717[(5)] = ex__26512__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27610);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27667;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27718 = state_27610;
state_27610 = G__27718;
continue;
} else {
return ret_value__26510__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__26509__auto__ = function(state_27610){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__26509__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__26509__auto____1.call(this,state_27610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__26509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__26509__auto____0;
cljs$core$async$mix_$_state_machine__26509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__26509__auto____1;
return cljs$core$async$mix_$_state_machine__26509__auto__;
})()
})();
var state__26605__auto__ = (function (){var statearr_27669 = f__26604__auto__.call(null);
(statearr_27669[(6)] = c__26603__auto___27670);

return statearr_27669;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26605__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_27721 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_27721.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_27722 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v,ch);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_27722.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_27723 = (function() {
var G__27724 = null;
var G__27724__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
var G__27724__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
G__27724 = function(p,v){
switch(arguments.length){
case 1:
return G__27724__1.call(this,p);
case 2:
return G__27724__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27724.cljs$core$IFn$_invoke$arity$1 = G__27724__1;
G__27724.cljs$core$IFn$_invoke$arity$2 = G__27724__2;
return G__27724;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__27720 = arguments.length;
switch (G__27720) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_27723.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_27723.call(null,p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__27728 = arguments.length;
switch (G__27728) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__27726_SHARP_){
if(cljs.core.truth_(p1__27726_SHARP_.call(null,topic))){
return p1__27726_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__27726_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27729 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27729 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta27730){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta27730 = meta27730;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27729.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27731,meta27730__$1){
var self__ = this;
var _27731__$1 = this;
return (new cljs.core.async.t_cljs$core$async27729(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta27730__$1));
}));

(cljs.core.async.t_cljs$core$async27729.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27731){
var self__ = this;
var _27731__$1 = this;
return self__.meta27730;
}));

(cljs.core.async.t_cljs$core$async27729.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27729.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async27729.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27729.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async27729.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async27729.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async27729.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async27729.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta27730","meta27730",-234953090,null)], null);
}));

(cljs.core.async.t_cljs$core$async27729.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27729.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27729");

(cljs.core.async.t_cljs$core$async27729.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async27729");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27729.
 */
cljs.core.async.__GT_t_cljs$core$async27729 = (function cljs$core$async$__GT_t_cljs$core$async27729(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27730){
return (new cljs.core.async.t_cljs$core$async27729(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27730));
});

}

return (new cljs.core.async.t_cljs$core$async27729(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26603__auto___27849 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26604__auto__ = (function (){var switch__26508__auto__ = (function (state_27803){
var state_val_27804 = (state_27803[(1)]);
if((state_val_27804 === (7))){
var inst_27799 = (state_27803[(2)]);
var state_27803__$1 = state_27803;
var statearr_27805_27850 = state_27803__$1;
(statearr_27805_27850[(2)] = inst_27799);

(statearr_27805_27850[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27804 === (20))){
var state_27803__$1 = state_27803;
var statearr_27806_27851 = state_27803__$1;
(statearr_27806_27851[(2)] = null);

(statearr_27806_27851[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27804 === (1))){
var state_27803__$1 = state_27803;
var statearr_27807_27852 = state_27803__$1;
(statearr_27807_27852[(2)] = null);

(statearr_27807_27852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27804 === (24))){
var inst_27782 = (state_27803[(7)]);
var inst_27791 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_27782);
var state_27803__$1 = state_27803;
var statearr_27808_27853 = state_27803__$1;
(statearr_27808_27853[(2)] = inst_27791);

(statearr_27808_27853[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27804 === (4))){
var inst_27734 = (state_27803[(8)]);
var inst_27734__$1 = (state_27803[(2)]);
var inst_27735 = (inst_27734__$1 == null);
var state_27803__$1 = (function (){var statearr_27809 = state_27803;
(statearr_27809[(8)] = inst_27734__$1);

return statearr_27809;
})();
if(cljs.core.truth_(inst_27735)){
var statearr_27810_27854 = state_27803__$1;
(statearr_27810_27854[(1)] = (5));

} else {
var statearr_27811_27855 = state_27803__$1;
(statearr_27811_27855[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27804 === (15))){
var inst_27776 = (state_27803[(2)]);
var state_27803__$1 = state_27803;
var statearr_27812_27856 = state_27803__$1;
(statearr_27812_27856[(2)] = inst_27776);

(statearr_27812_27856[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27804 === (21))){
var inst_27796 = (state_27803[(2)]);
var state_27803__$1 = (function (){var statearr_27813 = state_27803;
(statearr_27813[(9)] = inst_27796);

return statearr_27813;
})();
var statearr_27814_27857 = state_27803__$1;
(statearr_27814_27857[(2)] = null);

(statearr_27814_27857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27804 === (13))){
var inst_27758 = (state_27803[(10)]);
var inst_27760 = cljs.core.chunked_seq_QMARK_.call(null,inst_27758);
var state_27803__$1 = state_27803;
if(inst_27760){
var statearr_27815_27858 = state_27803__$1;
(statearr_27815_27858[(1)] = (16));

} else {
var statearr_27816_27859 = state_27803__$1;
(statearr_27816_27859[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27804 === (22))){
var inst_27788 = (state_27803[(2)]);
var state_27803__$1 = state_27803;
if(cljs.core.truth_(inst_27788)){
var statearr_27817_27860 = state_27803__$1;
(statearr_27817_27860[(1)] = (23));

} else {
var statearr_27818_27861 = state_27803__$1;
(statearr_27818_27861[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27804 === (6))){
var inst_27734 = (state_27803[(8)]);
var inst_27784 = (state_27803[(11)]);
var inst_27782 = (state_27803[(7)]);
var inst_27782__$1 = topic_fn.call(null,inst_27734);
var inst_27783 = cljs.core.deref.call(null,mults);
var inst_27784__$1 = cljs.core.get.call(null,inst_27783,inst_27782__$1);
var state_27803__$1 = (function (){var statearr_27819 = state_27803;
(statearr_27819[(11)] = inst_27784__$1);

(statearr_27819[(7)] = inst_27782__$1);

return statearr_27819;
})();
if(cljs.core.truth_(inst_27784__$1)){
var statearr_27820_27862 = state_27803__$1;
(statearr_27820_27862[(1)] = (19));

} else {
var statearr_27821_27863 = state_27803__$1;
(statearr_27821_27863[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27804 === (25))){
var inst_27793 = (state_27803[(2)]);
var state_27803__$1 = state_27803;
var statearr_27822_27864 = state_27803__$1;
(statearr_27822_27864[(2)] = inst_27793);

(statearr_27822_27864[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27804 === (17))){
var inst_27758 = (state_27803[(10)]);
var inst_27767 = cljs.core.first.call(null,inst_27758);
var inst_27768 = cljs.core.async.muxch_STAR_.call(null,inst_27767);
var inst_27769 = cljs.core.async.close_BANG_.call(null,inst_27768);
var inst_27770 = cljs.core.next.call(null,inst_27758);
var inst_27744 = inst_27770;
var inst_27745 = null;
var inst_27746 = (0);
var inst_27747 = (0);
var state_27803__$1 = (function (){var statearr_27823 = state_27803;
(statearr_27823[(12)] = inst_27769);

(statearr_27823[(13)] = inst_27746);

(statearr_27823[(14)] = inst_27744);

(statearr_27823[(15)] = inst_27745);

(statearr_27823[(16)] = inst_27747);

return statearr_27823;
})();
var statearr_27824_27865 = state_27803__$1;
(statearr_27824_27865[(2)] = null);

(statearr_27824_27865[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27804 === (3))){
var inst_27801 = (state_27803[(2)]);
var state_27803__$1 = state_27803;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27803__$1,inst_27801);
} else {
if((state_val_27804 === (12))){
var inst_27778 = (state_27803[(2)]);
var state_27803__$1 = state_27803;
var statearr_27825_27866 = state_27803__$1;
(statearr_27825_27866[(2)] = inst_27778);

(statearr_27825_27866[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27804 === (2))){
var state_27803__$1 = state_27803;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27803__$1,(4),ch);
} else {
if((state_val_27804 === (23))){
var state_27803__$1 = state_27803;
var statearr_27826_27867 = state_27803__$1;
(statearr_27826_27867[(2)] = null);

(statearr_27826_27867[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27804 === (19))){
var inst_27734 = (state_27803[(8)]);
var inst_27784 = (state_27803[(11)]);
var inst_27786 = cljs.core.async.muxch_STAR_.call(null,inst_27784);
var state_27803__$1 = state_27803;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27803__$1,(22),inst_27786,inst_27734);
} else {
if((state_val_27804 === (11))){
var inst_27744 = (state_27803[(14)]);
var inst_27758 = (state_27803[(10)]);
var inst_27758__$1 = cljs.core.seq.call(null,inst_27744);
var state_27803__$1 = (function (){var statearr_27827 = state_27803;
(statearr_27827[(10)] = inst_27758__$1);

return statearr_27827;
})();
if(inst_27758__$1){
var statearr_27828_27868 = state_27803__$1;
(statearr_27828_27868[(1)] = (13));

} else {
var statearr_27829_27869 = state_27803__$1;
(statearr_27829_27869[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27804 === (9))){
var inst_27780 = (state_27803[(2)]);
var state_27803__$1 = state_27803;
var statearr_27830_27870 = state_27803__$1;
(statearr_27830_27870[(2)] = inst_27780);

(statearr_27830_27870[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27804 === (5))){
var inst_27741 = cljs.core.deref.call(null,mults);
var inst_27742 = cljs.core.vals.call(null,inst_27741);
var inst_27743 = cljs.core.seq.call(null,inst_27742);
var inst_27744 = inst_27743;
var inst_27745 = null;
var inst_27746 = (0);
var inst_27747 = (0);
var state_27803__$1 = (function (){var statearr_27831 = state_27803;
(statearr_27831[(13)] = inst_27746);

(statearr_27831[(14)] = inst_27744);

(statearr_27831[(15)] = inst_27745);

(statearr_27831[(16)] = inst_27747);

return statearr_27831;
})();
var statearr_27832_27871 = state_27803__$1;
(statearr_27832_27871[(2)] = null);

(statearr_27832_27871[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27804 === (14))){
var state_27803__$1 = state_27803;
var statearr_27836_27872 = state_27803__$1;
(statearr_27836_27872[(2)] = null);

(statearr_27836_27872[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27804 === (16))){
var inst_27758 = (state_27803[(10)]);
var inst_27762 = cljs.core.chunk_first.call(null,inst_27758);
var inst_27763 = cljs.core.chunk_rest.call(null,inst_27758);
var inst_27764 = cljs.core.count.call(null,inst_27762);
var inst_27744 = inst_27763;
var inst_27745 = inst_27762;
var inst_27746 = inst_27764;
var inst_27747 = (0);
var state_27803__$1 = (function (){var statearr_27837 = state_27803;
(statearr_27837[(13)] = inst_27746);

(statearr_27837[(14)] = inst_27744);

(statearr_27837[(15)] = inst_27745);

(statearr_27837[(16)] = inst_27747);

return statearr_27837;
})();
var statearr_27838_27873 = state_27803__$1;
(statearr_27838_27873[(2)] = null);

(statearr_27838_27873[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27804 === (10))){
var inst_27746 = (state_27803[(13)]);
var inst_27744 = (state_27803[(14)]);
var inst_27745 = (state_27803[(15)]);
var inst_27747 = (state_27803[(16)]);
var inst_27752 = cljs.core._nth.call(null,inst_27745,inst_27747);
var inst_27753 = cljs.core.async.muxch_STAR_.call(null,inst_27752);
var inst_27754 = cljs.core.async.close_BANG_.call(null,inst_27753);
var inst_27755 = (inst_27747 + (1));
var tmp27833 = inst_27746;
var tmp27834 = inst_27744;
var tmp27835 = inst_27745;
var inst_27744__$1 = tmp27834;
var inst_27745__$1 = tmp27835;
var inst_27746__$1 = tmp27833;
var inst_27747__$1 = inst_27755;
var state_27803__$1 = (function (){var statearr_27839 = state_27803;
(statearr_27839[(13)] = inst_27746__$1);

(statearr_27839[(14)] = inst_27744__$1);

(statearr_27839[(15)] = inst_27745__$1);

(statearr_27839[(16)] = inst_27747__$1);

(statearr_27839[(17)] = inst_27754);

return statearr_27839;
})();
var statearr_27840_27874 = state_27803__$1;
(statearr_27840_27874[(2)] = null);

(statearr_27840_27874[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27804 === (18))){
var inst_27773 = (state_27803[(2)]);
var state_27803__$1 = state_27803;
var statearr_27841_27875 = state_27803__$1;
(statearr_27841_27875[(2)] = inst_27773);

(statearr_27841_27875[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27804 === (8))){
var inst_27746 = (state_27803[(13)]);
var inst_27747 = (state_27803[(16)]);
var inst_27749 = (inst_27747 < inst_27746);
var inst_27750 = inst_27749;
var state_27803__$1 = state_27803;
if(cljs.core.truth_(inst_27750)){
var statearr_27842_27876 = state_27803__$1;
(statearr_27842_27876[(1)] = (10));

} else {
var statearr_27843_27877 = state_27803__$1;
(statearr_27843_27877[(1)] = (11));

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
var cljs$core$async$state_machine__26509__auto__ = null;
var cljs$core$async$state_machine__26509__auto____0 = (function (){
var statearr_27844 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27844[(0)] = cljs$core$async$state_machine__26509__auto__);

(statearr_27844[(1)] = (1));

return statearr_27844;
});
var cljs$core$async$state_machine__26509__auto____1 = (function (state_27803){
while(true){
var ret_value__26510__auto__ = (function (){try{while(true){
var result__26511__auto__ = switch__26508__auto__.call(null,state_27803);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26511__auto__;
}
break;
}
}catch (e27845){if((e27845 instanceof Object)){
var ex__26512__auto__ = e27845;
var statearr_27846_27878 = state_27803;
(statearr_27846_27878[(5)] = ex__26512__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27803);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27845;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27879 = state_27803;
state_27803 = G__27879;
continue;
} else {
return ret_value__26510__auto__;
}
break;
}
});
cljs$core$async$state_machine__26509__auto__ = function(state_27803){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26509__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26509__auto____1.call(this,state_27803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26509__auto____0;
cljs$core$async$state_machine__26509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26509__auto____1;
return cljs$core$async$state_machine__26509__auto__;
})()
})();
var state__26605__auto__ = (function (){var statearr_27847 = f__26604__auto__.call(null);
(statearr_27847[(6)] = c__26603__auto___27849);

return statearr_27847;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26605__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__27881 = arguments.length;
switch (G__27881) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__27884 = arguments.length;
switch (G__27884) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__27887 = arguments.length;
switch (G__27887) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,(function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.call(null,cnt));
var c__26603__auto___27954 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26604__auto__ = (function (){var switch__26508__auto__ = (function (state_27926){
var state_val_27927 = (state_27926[(1)]);
if((state_val_27927 === (7))){
var state_27926__$1 = state_27926;
var statearr_27928_27955 = state_27926__$1;
(statearr_27928_27955[(2)] = null);

(statearr_27928_27955[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27927 === (1))){
var state_27926__$1 = state_27926;
var statearr_27929_27956 = state_27926__$1;
(statearr_27929_27956[(2)] = null);

(statearr_27929_27956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27927 === (4))){
var inst_27890 = (state_27926[(7)]);
var inst_27892 = (inst_27890 < cnt);
var state_27926__$1 = state_27926;
if(cljs.core.truth_(inst_27892)){
var statearr_27930_27957 = state_27926__$1;
(statearr_27930_27957[(1)] = (6));

} else {
var statearr_27931_27958 = state_27926__$1;
(statearr_27931_27958[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27927 === (15))){
var inst_27922 = (state_27926[(2)]);
var state_27926__$1 = state_27926;
var statearr_27932_27959 = state_27926__$1;
(statearr_27932_27959[(2)] = inst_27922);

(statearr_27932_27959[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27927 === (13))){
var inst_27915 = cljs.core.async.close_BANG_.call(null,out);
var state_27926__$1 = state_27926;
var statearr_27933_27960 = state_27926__$1;
(statearr_27933_27960[(2)] = inst_27915);

(statearr_27933_27960[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27927 === (6))){
var state_27926__$1 = state_27926;
var statearr_27934_27961 = state_27926__$1;
(statearr_27934_27961[(2)] = null);

(statearr_27934_27961[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27927 === (3))){
var inst_27924 = (state_27926[(2)]);
var state_27926__$1 = state_27926;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27926__$1,inst_27924);
} else {
if((state_val_27927 === (12))){
var inst_27912 = (state_27926[(8)]);
var inst_27912__$1 = (state_27926[(2)]);
var inst_27913 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27912__$1);
var state_27926__$1 = (function (){var statearr_27935 = state_27926;
(statearr_27935[(8)] = inst_27912__$1);

return statearr_27935;
})();
if(cljs.core.truth_(inst_27913)){
var statearr_27936_27962 = state_27926__$1;
(statearr_27936_27962[(1)] = (13));

} else {
var statearr_27937_27963 = state_27926__$1;
(statearr_27937_27963[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27927 === (2))){
var inst_27889 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_27890 = (0);
var state_27926__$1 = (function (){var statearr_27938 = state_27926;
(statearr_27938[(9)] = inst_27889);

(statearr_27938[(7)] = inst_27890);

return statearr_27938;
})();
var statearr_27939_27964 = state_27926__$1;
(statearr_27939_27964[(2)] = null);

(statearr_27939_27964[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27927 === (11))){
var inst_27890 = (state_27926[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27926,(10),Object,null,(9));
var inst_27899 = chs__$1.call(null,inst_27890);
var inst_27900 = done.call(null,inst_27890);
var inst_27901 = cljs.core.async.take_BANG_.call(null,inst_27899,inst_27900);
var state_27926__$1 = state_27926;
var statearr_27940_27965 = state_27926__$1;
(statearr_27940_27965[(2)] = inst_27901);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27926__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27927 === (9))){
var inst_27890 = (state_27926[(7)]);
var inst_27903 = (state_27926[(2)]);
var inst_27904 = (inst_27890 + (1));
var inst_27890__$1 = inst_27904;
var state_27926__$1 = (function (){var statearr_27941 = state_27926;
(statearr_27941[(10)] = inst_27903);

(statearr_27941[(7)] = inst_27890__$1);

return statearr_27941;
})();
var statearr_27942_27966 = state_27926__$1;
(statearr_27942_27966[(2)] = null);

(statearr_27942_27966[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27927 === (5))){
var inst_27910 = (state_27926[(2)]);
var state_27926__$1 = (function (){var statearr_27943 = state_27926;
(statearr_27943[(11)] = inst_27910);

return statearr_27943;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27926__$1,(12),dchan);
} else {
if((state_val_27927 === (14))){
var inst_27912 = (state_27926[(8)]);
var inst_27917 = cljs.core.apply.call(null,f,inst_27912);
var state_27926__$1 = state_27926;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27926__$1,(16),out,inst_27917);
} else {
if((state_val_27927 === (16))){
var inst_27919 = (state_27926[(2)]);
var state_27926__$1 = (function (){var statearr_27944 = state_27926;
(statearr_27944[(12)] = inst_27919);

return statearr_27944;
})();
var statearr_27945_27967 = state_27926__$1;
(statearr_27945_27967[(2)] = null);

(statearr_27945_27967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27927 === (10))){
var inst_27894 = (state_27926[(2)]);
var inst_27895 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_27926__$1 = (function (){var statearr_27946 = state_27926;
(statearr_27946[(13)] = inst_27894);

return statearr_27946;
})();
var statearr_27947_27968 = state_27926__$1;
(statearr_27947_27968[(2)] = inst_27895);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27926__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27927 === (8))){
var inst_27908 = (state_27926[(2)]);
var state_27926__$1 = state_27926;
var statearr_27948_27969 = state_27926__$1;
(statearr_27948_27969[(2)] = inst_27908);

(statearr_27948_27969[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__26509__auto__ = null;
var cljs$core$async$state_machine__26509__auto____0 = (function (){
var statearr_27949 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27949[(0)] = cljs$core$async$state_machine__26509__auto__);

(statearr_27949[(1)] = (1));

return statearr_27949;
});
var cljs$core$async$state_machine__26509__auto____1 = (function (state_27926){
while(true){
var ret_value__26510__auto__ = (function (){try{while(true){
var result__26511__auto__ = switch__26508__auto__.call(null,state_27926);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26511__auto__;
}
break;
}
}catch (e27950){if((e27950 instanceof Object)){
var ex__26512__auto__ = e27950;
var statearr_27951_27970 = state_27926;
(statearr_27951_27970[(5)] = ex__26512__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27926);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27950;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27971 = state_27926;
state_27926 = G__27971;
continue;
} else {
return ret_value__26510__auto__;
}
break;
}
});
cljs$core$async$state_machine__26509__auto__ = function(state_27926){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26509__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26509__auto____1.call(this,state_27926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26509__auto____0;
cljs$core$async$state_machine__26509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26509__auto____1;
return cljs$core$async$state_machine__26509__auto__;
})()
})();
var state__26605__auto__ = (function (){var statearr_27952 = f__26604__auto__.call(null);
(statearr_27952[(6)] = c__26603__auto___27954);

return statearr_27952;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26605__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__27974 = arguments.length;
switch (G__27974) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26603__auto___28028 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26604__auto__ = (function (){var switch__26508__auto__ = (function (state_28006){
var state_val_28007 = (state_28006[(1)]);
if((state_val_28007 === (7))){
var inst_27986 = (state_28006[(7)]);
var inst_27985 = (state_28006[(8)]);
var inst_27985__$1 = (state_28006[(2)]);
var inst_27986__$1 = cljs.core.nth.call(null,inst_27985__$1,(0),null);
var inst_27987 = cljs.core.nth.call(null,inst_27985__$1,(1),null);
var inst_27988 = (inst_27986__$1 == null);
var state_28006__$1 = (function (){var statearr_28008 = state_28006;
(statearr_28008[(9)] = inst_27987);

(statearr_28008[(7)] = inst_27986__$1);

(statearr_28008[(8)] = inst_27985__$1);

return statearr_28008;
})();
if(cljs.core.truth_(inst_27988)){
var statearr_28009_28029 = state_28006__$1;
(statearr_28009_28029[(1)] = (8));

} else {
var statearr_28010_28030 = state_28006__$1;
(statearr_28010_28030[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28007 === (1))){
var inst_27975 = cljs.core.vec.call(null,chs);
var inst_27976 = inst_27975;
var state_28006__$1 = (function (){var statearr_28011 = state_28006;
(statearr_28011[(10)] = inst_27976);

return statearr_28011;
})();
var statearr_28012_28031 = state_28006__$1;
(statearr_28012_28031[(2)] = null);

(statearr_28012_28031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28007 === (4))){
var inst_27976 = (state_28006[(10)]);
var state_28006__$1 = state_28006;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28006__$1,(7),inst_27976);
} else {
if((state_val_28007 === (6))){
var inst_28002 = (state_28006[(2)]);
var state_28006__$1 = state_28006;
var statearr_28013_28032 = state_28006__$1;
(statearr_28013_28032[(2)] = inst_28002);

(statearr_28013_28032[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28007 === (3))){
var inst_28004 = (state_28006[(2)]);
var state_28006__$1 = state_28006;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28006__$1,inst_28004);
} else {
if((state_val_28007 === (2))){
var inst_27976 = (state_28006[(10)]);
var inst_27978 = cljs.core.count.call(null,inst_27976);
var inst_27979 = (inst_27978 > (0));
var state_28006__$1 = state_28006;
if(cljs.core.truth_(inst_27979)){
var statearr_28015_28033 = state_28006__$1;
(statearr_28015_28033[(1)] = (4));

} else {
var statearr_28016_28034 = state_28006__$1;
(statearr_28016_28034[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28007 === (11))){
var inst_27976 = (state_28006[(10)]);
var inst_27995 = (state_28006[(2)]);
var tmp28014 = inst_27976;
var inst_27976__$1 = tmp28014;
var state_28006__$1 = (function (){var statearr_28017 = state_28006;
(statearr_28017[(11)] = inst_27995);

(statearr_28017[(10)] = inst_27976__$1);

return statearr_28017;
})();
var statearr_28018_28035 = state_28006__$1;
(statearr_28018_28035[(2)] = null);

(statearr_28018_28035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28007 === (9))){
var inst_27986 = (state_28006[(7)]);
var state_28006__$1 = state_28006;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28006__$1,(11),out,inst_27986);
} else {
if((state_val_28007 === (5))){
var inst_28000 = cljs.core.async.close_BANG_.call(null,out);
var state_28006__$1 = state_28006;
var statearr_28019_28036 = state_28006__$1;
(statearr_28019_28036[(2)] = inst_28000);

(statearr_28019_28036[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28007 === (10))){
var inst_27998 = (state_28006[(2)]);
var state_28006__$1 = state_28006;
var statearr_28020_28037 = state_28006__$1;
(statearr_28020_28037[(2)] = inst_27998);

(statearr_28020_28037[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28007 === (8))){
var inst_27987 = (state_28006[(9)]);
var inst_27976 = (state_28006[(10)]);
var inst_27986 = (state_28006[(7)]);
var inst_27985 = (state_28006[(8)]);
var inst_27990 = (function (){var cs = inst_27976;
var vec__27981 = inst_27985;
var v = inst_27986;
var c = inst_27987;
return (function (p1__27972_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__27972_SHARP_);
});
})();
var inst_27991 = cljs.core.filterv.call(null,inst_27990,inst_27976);
var inst_27976__$1 = inst_27991;
var state_28006__$1 = (function (){var statearr_28021 = state_28006;
(statearr_28021[(10)] = inst_27976__$1);

return statearr_28021;
})();
var statearr_28022_28038 = state_28006__$1;
(statearr_28022_28038[(2)] = null);

(statearr_28022_28038[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__26509__auto__ = null;
var cljs$core$async$state_machine__26509__auto____0 = (function (){
var statearr_28023 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28023[(0)] = cljs$core$async$state_machine__26509__auto__);

(statearr_28023[(1)] = (1));

return statearr_28023;
});
var cljs$core$async$state_machine__26509__auto____1 = (function (state_28006){
while(true){
var ret_value__26510__auto__ = (function (){try{while(true){
var result__26511__auto__ = switch__26508__auto__.call(null,state_28006);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26511__auto__;
}
break;
}
}catch (e28024){if((e28024 instanceof Object)){
var ex__26512__auto__ = e28024;
var statearr_28025_28039 = state_28006;
(statearr_28025_28039[(5)] = ex__26512__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28006);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28024;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28040 = state_28006;
state_28006 = G__28040;
continue;
} else {
return ret_value__26510__auto__;
}
break;
}
});
cljs$core$async$state_machine__26509__auto__ = function(state_28006){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26509__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26509__auto____1.call(this,state_28006);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26509__auto____0;
cljs$core$async$state_machine__26509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26509__auto____1;
return cljs$core$async$state_machine__26509__auto__;
})()
})();
var state__26605__auto__ = (function (){var statearr_28026 = f__26604__auto__.call(null);
(statearr_28026[(6)] = c__26603__auto___28028);

return statearr_28026;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26605__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__28042 = arguments.length;
switch (G__28042) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26603__auto___28087 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26604__auto__ = (function (){var switch__26508__auto__ = (function (state_28066){
var state_val_28067 = (state_28066[(1)]);
if((state_val_28067 === (7))){
var inst_28048 = (state_28066[(7)]);
var inst_28048__$1 = (state_28066[(2)]);
var inst_28049 = (inst_28048__$1 == null);
var inst_28050 = cljs.core.not.call(null,inst_28049);
var state_28066__$1 = (function (){var statearr_28068 = state_28066;
(statearr_28068[(7)] = inst_28048__$1);

return statearr_28068;
})();
if(inst_28050){
var statearr_28069_28088 = state_28066__$1;
(statearr_28069_28088[(1)] = (8));

} else {
var statearr_28070_28089 = state_28066__$1;
(statearr_28070_28089[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28067 === (1))){
var inst_28043 = (0);
var state_28066__$1 = (function (){var statearr_28071 = state_28066;
(statearr_28071[(8)] = inst_28043);

return statearr_28071;
})();
var statearr_28072_28090 = state_28066__$1;
(statearr_28072_28090[(2)] = null);

(statearr_28072_28090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28067 === (4))){
var state_28066__$1 = state_28066;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28066__$1,(7),ch);
} else {
if((state_val_28067 === (6))){
var inst_28061 = (state_28066[(2)]);
var state_28066__$1 = state_28066;
var statearr_28073_28091 = state_28066__$1;
(statearr_28073_28091[(2)] = inst_28061);

(statearr_28073_28091[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28067 === (3))){
var inst_28063 = (state_28066[(2)]);
var inst_28064 = cljs.core.async.close_BANG_.call(null,out);
var state_28066__$1 = (function (){var statearr_28074 = state_28066;
(statearr_28074[(9)] = inst_28063);

return statearr_28074;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28066__$1,inst_28064);
} else {
if((state_val_28067 === (2))){
var inst_28043 = (state_28066[(8)]);
var inst_28045 = (inst_28043 < n);
var state_28066__$1 = state_28066;
if(cljs.core.truth_(inst_28045)){
var statearr_28075_28092 = state_28066__$1;
(statearr_28075_28092[(1)] = (4));

} else {
var statearr_28076_28093 = state_28066__$1;
(statearr_28076_28093[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28067 === (11))){
var inst_28043 = (state_28066[(8)]);
var inst_28053 = (state_28066[(2)]);
var inst_28054 = (inst_28043 + (1));
var inst_28043__$1 = inst_28054;
var state_28066__$1 = (function (){var statearr_28077 = state_28066;
(statearr_28077[(10)] = inst_28053);

(statearr_28077[(8)] = inst_28043__$1);

return statearr_28077;
})();
var statearr_28078_28094 = state_28066__$1;
(statearr_28078_28094[(2)] = null);

(statearr_28078_28094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28067 === (9))){
var state_28066__$1 = state_28066;
var statearr_28079_28095 = state_28066__$1;
(statearr_28079_28095[(2)] = null);

(statearr_28079_28095[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28067 === (5))){
var state_28066__$1 = state_28066;
var statearr_28080_28096 = state_28066__$1;
(statearr_28080_28096[(2)] = null);

(statearr_28080_28096[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28067 === (10))){
var inst_28058 = (state_28066[(2)]);
var state_28066__$1 = state_28066;
var statearr_28081_28097 = state_28066__$1;
(statearr_28081_28097[(2)] = inst_28058);

(statearr_28081_28097[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28067 === (8))){
var inst_28048 = (state_28066[(7)]);
var state_28066__$1 = state_28066;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28066__$1,(11),out,inst_28048);
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
});
return (function() {
var cljs$core$async$state_machine__26509__auto__ = null;
var cljs$core$async$state_machine__26509__auto____0 = (function (){
var statearr_28082 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28082[(0)] = cljs$core$async$state_machine__26509__auto__);

(statearr_28082[(1)] = (1));

return statearr_28082;
});
var cljs$core$async$state_machine__26509__auto____1 = (function (state_28066){
while(true){
var ret_value__26510__auto__ = (function (){try{while(true){
var result__26511__auto__ = switch__26508__auto__.call(null,state_28066);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26511__auto__;
}
break;
}
}catch (e28083){if((e28083 instanceof Object)){
var ex__26512__auto__ = e28083;
var statearr_28084_28098 = state_28066;
(statearr_28084_28098[(5)] = ex__26512__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28066);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28083;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28099 = state_28066;
state_28066 = G__28099;
continue;
} else {
return ret_value__26510__auto__;
}
break;
}
});
cljs$core$async$state_machine__26509__auto__ = function(state_28066){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26509__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26509__auto____1.call(this,state_28066);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26509__auto____0;
cljs$core$async$state_machine__26509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26509__auto____1;
return cljs$core$async$state_machine__26509__auto__;
})()
})();
var state__26605__auto__ = (function (){var statearr_28085 = f__26604__auto__.call(null);
(statearr_28085[(6)] = c__26603__auto___28087);

return statearr_28085;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26605__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28101 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28101 = (function (f,ch,meta28102){
this.f = f;
this.ch = ch;
this.meta28102 = meta28102;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28101.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28103,meta28102__$1){
var self__ = this;
var _28103__$1 = this;
return (new cljs.core.async.t_cljs$core$async28101(self__.f,self__.ch,meta28102__$1));
}));

(cljs.core.async.t_cljs$core$async28101.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28103){
var self__ = this;
var _28103__$1 = this;
return self__.meta28102;
}));

(cljs.core.async.t_cljs$core$async28101.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28101.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async28101.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async28101.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28101.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28104 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28104 = (function (f,ch,meta28102,_,fn1,meta28105){
this.f = f;
this.ch = ch;
this.meta28102 = meta28102;
this._ = _;
this.fn1 = fn1;
this.meta28105 = meta28105;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28104.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28106,meta28105__$1){
var self__ = this;
var _28106__$1 = this;
return (new cljs.core.async.t_cljs$core$async28104(self__.f,self__.ch,self__.meta28102,self__._,self__.fn1,meta28105__$1));
}));

(cljs.core.async.t_cljs$core$async28104.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28106){
var self__ = this;
var _28106__$1 = this;
return self__.meta28105;
}));

(cljs.core.async.t_cljs$core$async28104.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28104.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async28104.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28104.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__28100_SHARP_){
return f1.call(null,(((p1__28100_SHARP_ == null))?null:self__.f.call(null,p1__28100_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async28104.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28102","meta28102",-1129122251,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async28101","cljs.core.async/t_cljs$core$async28101",-186939995,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta28105","meta28105",-1599464398,null)], null);
}));

(cljs.core.async.t_cljs$core$async28104.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28104.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28104");

(cljs.core.async.t_cljs$core$async28104.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async28104");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28104.
 */
cljs.core.async.__GT_t_cljs$core$async28104 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28104(f__$1,ch__$1,meta28102__$1,___$2,fn1__$1,meta28105){
return (new cljs.core.async.t_cljs$core$async28104(f__$1,ch__$1,meta28102__$1,___$2,fn1__$1,meta28105));
});

}

return (new cljs.core.async.t_cljs$core$async28104(self__.f,self__.ch,self__.meta28102,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async28101.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28101.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async28101.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28102","meta28102",-1129122251,null)], null);
}));

(cljs.core.async.t_cljs$core$async28101.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28101.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28101");

(cljs.core.async.t_cljs$core$async28101.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async28101");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28101.
 */
cljs.core.async.__GT_t_cljs$core$async28101 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28101(f__$1,ch__$1,meta28102){
return (new cljs.core.async.t_cljs$core$async28101(f__$1,ch__$1,meta28102));
});

}

return (new cljs.core.async.t_cljs$core$async28101(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28107 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28107 = (function (f,ch,meta28108){
this.f = f;
this.ch = ch;
this.meta28108 = meta28108;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28107.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28109,meta28108__$1){
var self__ = this;
var _28109__$1 = this;
return (new cljs.core.async.t_cljs$core$async28107(self__.f,self__.ch,meta28108__$1));
}));

(cljs.core.async.t_cljs$core$async28107.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28109){
var self__ = this;
var _28109__$1 = this;
return self__.meta28108;
}));

(cljs.core.async.t_cljs$core$async28107.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28107.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async28107.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28107.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async28107.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28107.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async28107.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28108","meta28108",-1211297665,null)], null);
}));

(cljs.core.async.t_cljs$core$async28107.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28107.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28107");

(cljs.core.async.t_cljs$core$async28107.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async28107");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28107.
 */
cljs.core.async.__GT_t_cljs$core$async28107 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async28107(f__$1,ch__$1,meta28108){
return (new cljs.core.async.t_cljs$core$async28107(f__$1,ch__$1,meta28108));
});

}

return (new cljs.core.async.t_cljs$core$async28107(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28110 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28110 = (function (p,ch,meta28111){
this.p = p;
this.ch = ch;
this.meta28111 = meta28111;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28110.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28112,meta28111__$1){
var self__ = this;
var _28112__$1 = this;
return (new cljs.core.async.t_cljs$core$async28110(self__.p,self__.ch,meta28111__$1));
}));

(cljs.core.async.t_cljs$core$async28110.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28112){
var self__ = this;
var _28112__$1 = this;
return self__.meta28111;
}));

(cljs.core.async.t_cljs$core$async28110.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28110.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async28110.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async28110.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28110.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async28110.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28110.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async28110.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28111","meta28111",167970270,null)], null);
}));

(cljs.core.async.t_cljs$core$async28110.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28110.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28110");

(cljs.core.async.t_cljs$core$async28110.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async28110");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28110.
 */
cljs.core.async.__GT_t_cljs$core$async28110 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async28110(p__$1,ch__$1,meta28111){
return (new cljs.core.async.t_cljs$core$async28110(p__$1,ch__$1,meta28111));
});

}

return (new cljs.core.async.t_cljs$core$async28110(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__28114 = arguments.length;
switch (G__28114) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26603__auto___28154 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26604__auto__ = (function (){var switch__26508__auto__ = (function (state_28135){
var state_val_28136 = (state_28135[(1)]);
if((state_val_28136 === (7))){
var inst_28131 = (state_28135[(2)]);
var state_28135__$1 = state_28135;
var statearr_28137_28155 = state_28135__$1;
(statearr_28137_28155[(2)] = inst_28131);

(statearr_28137_28155[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28136 === (1))){
var state_28135__$1 = state_28135;
var statearr_28138_28156 = state_28135__$1;
(statearr_28138_28156[(2)] = null);

(statearr_28138_28156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28136 === (4))){
var inst_28117 = (state_28135[(7)]);
var inst_28117__$1 = (state_28135[(2)]);
var inst_28118 = (inst_28117__$1 == null);
var state_28135__$1 = (function (){var statearr_28139 = state_28135;
(statearr_28139[(7)] = inst_28117__$1);

return statearr_28139;
})();
if(cljs.core.truth_(inst_28118)){
var statearr_28140_28157 = state_28135__$1;
(statearr_28140_28157[(1)] = (5));

} else {
var statearr_28141_28158 = state_28135__$1;
(statearr_28141_28158[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28136 === (6))){
var inst_28117 = (state_28135[(7)]);
var inst_28122 = p.call(null,inst_28117);
var state_28135__$1 = state_28135;
if(cljs.core.truth_(inst_28122)){
var statearr_28142_28159 = state_28135__$1;
(statearr_28142_28159[(1)] = (8));

} else {
var statearr_28143_28160 = state_28135__$1;
(statearr_28143_28160[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28136 === (3))){
var inst_28133 = (state_28135[(2)]);
var state_28135__$1 = state_28135;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28135__$1,inst_28133);
} else {
if((state_val_28136 === (2))){
var state_28135__$1 = state_28135;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28135__$1,(4),ch);
} else {
if((state_val_28136 === (11))){
var inst_28125 = (state_28135[(2)]);
var state_28135__$1 = state_28135;
var statearr_28144_28161 = state_28135__$1;
(statearr_28144_28161[(2)] = inst_28125);

(statearr_28144_28161[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28136 === (9))){
var state_28135__$1 = state_28135;
var statearr_28145_28162 = state_28135__$1;
(statearr_28145_28162[(2)] = null);

(statearr_28145_28162[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28136 === (5))){
var inst_28120 = cljs.core.async.close_BANG_.call(null,out);
var state_28135__$1 = state_28135;
var statearr_28146_28163 = state_28135__$1;
(statearr_28146_28163[(2)] = inst_28120);

(statearr_28146_28163[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28136 === (10))){
var inst_28128 = (state_28135[(2)]);
var state_28135__$1 = (function (){var statearr_28147 = state_28135;
(statearr_28147[(8)] = inst_28128);

return statearr_28147;
})();
var statearr_28148_28164 = state_28135__$1;
(statearr_28148_28164[(2)] = null);

(statearr_28148_28164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28136 === (8))){
var inst_28117 = (state_28135[(7)]);
var state_28135__$1 = state_28135;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28135__$1,(11),out,inst_28117);
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
});
return (function() {
var cljs$core$async$state_machine__26509__auto__ = null;
var cljs$core$async$state_machine__26509__auto____0 = (function (){
var statearr_28149 = [null,null,null,null,null,null,null,null,null];
(statearr_28149[(0)] = cljs$core$async$state_machine__26509__auto__);

(statearr_28149[(1)] = (1));

return statearr_28149;
});
var cljs$core$async$state_machine__26509__auto____1 = (function (state_28135){
while(true){
var ret_value__26510__auto__ = (function (){try{while(true){
var result__26511__auto__ = switch__26508__auto__.call(null,state_28135);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26511__auto__;
}
break;
}
}catch (e28150){if((e28150 instanceof Object)){
var ex__26512__auto__ = e28150;
var statearr_28151_28165 = state_28135;
(statearr_28151_28165[(5)] = ex__26512__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28135);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28150;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28166 = state_28135;
state_28135 = G__28166;
continue;
} else {
return ret_value__26510__auto__;
}
break;
}
});
cljs$core$async$state_machine__26509__auto__ = function(state_28135){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26509__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26509__auto____1.call(this,state_28135);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26509__auto____0;
cljs$core$async$state_machine__26509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26509__auto____1;
return cljs$core$async$state_machine__26509__auto__;
})()
})();
var state__26605__auto__ = (function (){var statearr_28152 = f__26604__auto__.call(null);
(statearr_28152[(6)] = c__26603__auto___28154);

return statearr_28152;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26605__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__28168 = arguments.length;
switch (G__28168) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__26603__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26604__auto__ = (function (){var switch__26508__auto__ = (function (state_28231){
var state_val_28232 = (state_28231[(1)]);
if((state_val_28232 === (7))){
var inst_28227 = (state_28231[(2)]);
var state_28231__$1 = state_28231;
var statearr_28233_28271 = state_28231__$1;
(statearr_28233_28271[(2)] = inst_28227);

(statearr_28233_28271[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28232 === (20))){
var inst_28197 = (state_28231[(7)]);
var inst_28208 = (state_28231[(2)]);
var inst_28209 = cljs.core.next.call(null,inst_28197);
var inst_28183 = inst_28209;
var inst_28184 = null;
var inst_28185 = (0);
var inst_28186 = (0);
var state_28231__$1 = (function (){var statearr_28234 = state_28231;
(statearr_28234[(8)] = inst_28185);

(statearr_28234[(9)] = inst_28186);

(statearr_28234[(10)] = inst_28183);

(statearr_28234[(11)] = inst_28184);

(statearr_28234[(12)] = inst_28208);

return statearr_28234;
})();
var statearr_28235_28272 = state_28231__$1;
(statearr_28235_28272[(2)] = null);

(statearr_28235_28272[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28232 === (1))){
var state_28231__$1 = state_28231;
var statearr_28236_28273 = state_28231__$1;
(statearr_28236_28273[(2)] = null);

(statearr_28236_28273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28232 === (4))){
var inst_28172 = (state_28231[(13)]);
var inst_28172__$1 = (state_28231[(2)]);
var inst_28173 = (inst_28172__$1 == null);
var state_28231__$1 = (function (){var statearr_28237 = state_28231;
(statearr_28237[(13)] = inst_28172__$1);

return statearr_28237;
})();
if(cljs.core.truth_(inst_28173)){
var statearr_28238_28274 = state_28231__$1;
(statearr_28238_28274[(1)] = (5));

} else {
var statearr_28239_28275 = state_28231__$1;
(statearr_28239_28275[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28232 === (15))){
var state_28231__$1 = state_28231;
var statearr_28243_28276 = state_28231__$1;
(statearr_28243_28276[(2)] = null);

(statearr_28243_28276[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28232 === (21))){
var state_28231__$1 = state_28231;
var statearr_28244_28277 = state_28231__$1;
(statearr_28244_28277[(2)] = null);

(statearr_28244_28277[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28232 === (13))){
var inst_28185 = (state_28231[(8)]);
var inst_28186 = (state_28231[(9)]);
var inst_28183 = (state_28231[(10)]);
var inst_28184 = (state_28231[(11)]);
var inst_28193 = (state_28231[(2)]);
var inst_28194 = (inst_28186 + (1));
var tmp28240 = inst_28185;
var tmp28241 = inst_28183;
var tmp28242 = inst_28184;
var inst_28183__$1 = tmp28241;
var inst_28184__$1 = tmp28242;
var inst_28185__$1 = tmp28240;
var inst_28186__$1 = inst_28194;
var state_28231__$1 = (function (){var statearr_28245 = state_28231;
(statearr_28245[(8)] = inst_28185__$1);

(statearr_28245[(14)] = inst_28193);

(statearr_28245[(9)] = inst_28186__$1);

(statearr_28245[(10)] = inst_28183__$1);

(statearr_28245[(11)] = inst_28184__$1);

return statearr_28245;
})();
var statearr_28246_28278 = state_28231__$1;
(statearr_28246_28278[(2)] = null);

(statearr_28246_28278[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28232 === (22))){
var state_28231__$1 = state_28231;
var statearr_28247_28279 = state_28231__$1;
(statearr_28247_28279[(2)] = null);

(statearr_28247_28279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28232 === (6))){
var inst_28172 = (state_28231[(13)]);
var inst_28181 = f.call(null,inst_28172);
var inst_28182 = cljs.core.seq.call(null,inst_28181);
var inst_28183 = inst_28182;
var inst_28184 = null;
var inst_28185 = (0);
var inst_28186 = (0);
var state_28231__$1 = (function (){var statearr_28248 = state_28231;
(statearr_28248[(8)] = inst_28185);

(statearr_28248[(9)] = inst_28186);

(statearr_28248[(10)] = inst_28183);

(statearr_28248[(11)] = inst_28184);

return statearr_28248;
})();
var statearr_28249_28280 = state_28231__$1;
(statearr_28249_28280[(2)] = null);

(statearr_28249_28280[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28232 === (17))){
var inst_28197 = (state_28231[(7)]);
var inst_28201 = cljs.core.chunk_first.call(null,inst_28197);
var inst_28202 = cljs.core.chunk_rest.call(null,inst_28197);
var inst_28203 = cljs.core.count.call(null,inst_28201);
var inst_28183 = inst_28202;
var inst_28184 = inst_28201;
var inst_28185 = inst_28203;
var inst_28186 = (0);
var state_28231__$1 = (function (){var statearr_28250 = state_28231;
(statearr_28250[(8)] = inst_28185);

(statearr_28250[(9)] = inst_28186);

(statearr_28250[(10)] = inst_28183);

(statearr_28250[(11)] = inst_28184);

return statearr_28250;
})();
var statearr_28251_28281 = state_28231__$1;
(statearr_28251_28281[(2)] = null);

(statearr_28251_28281[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28232 === (3))){
var inst_28229 = (state_28231[(2)]);
var state_28231__$1 = state_28231;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28231__$1,inst_28229);
} else {
if((state_val_28232 === (12))){
var inst_28217 = (state_28231[(2)]);
var state_28231__$1 = state_28231;
var statearr_28252_28282 = state_28231__$1;
(statearr_28252_28282[(2)] = inst_28217);

(statearr_28252_28282[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28232 === (2))){
var state_28231__$1 = state_28231;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28231__$1,(4),in$);
} else {
if((state_val_28232 === (23))){
var inst_28225 = (state_28231[(2)]);
var state_28231__$1 = state_28231;
var statearr_28253_28283 = state_28231__$1;
(statearr_28253_28283[(2)] = inst_28225);

(statearr_28253_28283[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28232 === (19))){
var inst_28212 = (state_28231[(2)]);
var state_28231__$1 = state_28231;
var statearr_28254_28284 = state_28231__$1;
(statearr_28254_28284[(2)] = inst_28212);

(statearr_28254_28284[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28232 === (11))){
var inst_28183 = (state_28231[(10)]);
var inst_28197 = (state_28231[(7)]);
var inst_28197__$1 = cljs.core.seq.call(null,inst_28183);
var state_28231__$1 = (function (){var statearr_28255 = state_28231;
(statearr_28255[(7)] = inst_28197__$1);

return statearr_28255;
})();
if(inst_28197__$1){
var statearr_28256_28285 = state_28231__$1;
(statearr_28256_28285[(1)] = (14));

} else {
var statearr_28257_28286 = state_28231__$1;
(statearr_28257_28286[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28232 === (9))){
var inst_28219 = (state_28231[(2)]);
var inst_28220 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_28231__$1 = (function (){var statearr_28258 = state_28231;
(statearr_28258[(15)] = inst_28219);

return statearr_28258;
})();
if(cljs.core.truth_(inst_28220)){
var statearr_28259_28287 = state_28231__$1;
(statearr_28259_28287[(1)] = (21));

} else {
var statearr_28260_28288 = state_28231__$1;
(statearr_28260_28288[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28232 === (5))){
var inst_28175 = cljs.core.async.close_BANG_.call(null,out);
var state_28231__$1 = state_28231;
var statearr_28261_28289 = state_28231__$1;
(statearr_28261_28289[(2)] = inst_28175);

(statearr_28261_28289[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28232 === (14))){
var inst_28197 = (state_28231[(7)]);
var inst_28199 = cljs.core.chunked_seq_QMARK_.call(null,inst_28197);
var state_28231__$1 = state_28231;
if(inst_28199){
var statearr_28262_28290 = state_28231__$1;
(statearr_28262_28290[(1)] = (17));

} else {
var statearr_28263_28291 = state_28231__$1;
(statearr_28263_28291[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28232 === (16))){
var inst_28215 = (state_28231[(2)]);
var state_28231__$1 = state_28231;
var statearr_28264_28292 = state_28231__$1;
(statearr_28264_28292[(2)] = inst_28215);

(statearr_28264_28292[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28232 === (10))){
var inst_28186 = (state_28231[(9)]);
var inst_28184 = (state_28231[(11)]);
var inst_28191 = cljs.core._nth.call(null,inst_28184,inst_28186);
var state_28231__$1 = state_28231;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28231__$1,(13),out,inst_28191);
} else {
if((state_val_28232 === (18))){
var inst_28197 = (state_28231[(7)]);
var inst_28206 = cljs.core.first.call(null,inst_28197);
var state_28231__$1 = state_28231;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28231__$1,(20),out,inst_28206);
} else {
if((state_val_28232 === (8))){
var inst_28185 = (state_28231[(8)]);
var inst_28186 = (state_28231[(9)]);
var inst_28188 = (inst_28186 < inst_28185);
var inst_28189 = inst_28188;
var state_28231__$1 = state_28231;
if(cljs.core.truth_(inst_28189)){
var statearr_28265_28293 = state_28231__$1;
(statearr_28265_28293[(1)] = (10));

} else {
var statearr_28266_28294 = state_28231__$1;
(statearr_28266_28294[(1)] = (11));

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
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__26509__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__26509__auto____0 = (function (){
var statearr_28267 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28267[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__26509__auto__);

(statearr_28267[(1)] = (1));

return statearr_28267;
});
var cljs$core$async$mapcat_STAR__$_state_machine__26509__auto____1 = (function (state_28231){
while(true){
var ret_value__26510__auto__ = (function (){try{while(true){
var result__26511__auto__ = switch__26508__auto__.call(null,state_28231);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26511__auto__;
}
break;
}
}catch (e28268){if((e28268 instanceof Object)){
var ex__26512__auto__ = e28268;
var statearr_28269_28295 = state_28231;
(statearr_28269_28295[(5)] = ex__26512__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28231);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28268;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28296 = state_28231;
state_28231 = G__28296;
continue;
} else {
return ret_value__26510__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__26509__auto__ = function(state_28231){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__26509__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__26509__auto____1.call(this,state_28231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__26509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__26509__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__26509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__26509__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__26509__auto__;
})()
})();
var state__26605__auto__ = (function (){var statearr_28270 = f__26604__auto__.call(null);
(statearr_28270[(6)] = c__26603__auto__);

return statearr_28270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26605__auto__);
}));

return c__26603__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__28298 = arguments.length;
switch (G__28298) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__28301 = arguments.length;
switch (G__28301) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__28304 = arguments.length;
switch (G__28304) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26603__auto___28351 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26604__auto__ = (function (){var switch__26508__auto__ = (function (state_28328){
var state_val_28329 = (state_28328[(1)]);
if((state_val_28329 === (7))){
var inst_28323 = (state_28328[(2)]);
var state_28328__$1 = state_28328;
var statearr_28330_28352 = state_28328__$1;
(statearr_28330_28352[(2)] = inst_28323);

(statearr_28330_28352[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28329 === (1))){
var inst_28305 = null;
var state_28328__$1 = (function (){var statearr_28331 = state_28328;
(statearr_28331[(7)] = inst_28305);

return statearr_28331;
})();
var statearr_28332_28353 = state_28328__$1;
(statearr_28332_28353[(2)] = null);

(statearr_28332_28353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28329 === (4))){
var inst_28308 = (state_28328[(8)]);
var inst_28308__$1 = (state_28328[(2)]);
var inst_28309 = (inst_28308__$1 == null);
var inst_28310 = cljs.core.not.call(null,inst_28309);
var state_28328__$1 = (function (){var statearr_28333 = state_28328;
(statearr_28333[(8)] = inst_28308__$1);

return statearr_28333;
})();
if(inst_28310){
var statearr_28334_28354 = state_28328__$1;
(statearr_28334_28354[(1)] = (5));

} else {
var statearr_28335_28355 = state_28328__$1;
(statearr_28335_28355[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28329 === (6))){
var state_28328__$1 = state_28328;
var statearr_28336_28356 = state_28328__$1;
(statearr_28336_28356[(2)] = null);

(statearr_28336_28356[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28329 === (3))){
var inst_28325 = (state_28328[(2)]);
var inst_28326 = cljs.core.async.close_BANG_.call(null,out);
var state_28328__$1 = (function (){var statearr_28337 = state_28328;
(statearr_28337[(9)] = inst_28325);

return statearr_28337;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28328__$1,inst_28326);
} else {
if((state_val_28329 === (2))){
var state_28328__$1 = state_28328;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28328__$1,(4),ch);
} else {
if((state_val_28329 === (11))){
var inst_28308 = (state_28328[(8)]);
var inst_28317 = (state_28328[(2)]);
var inst_28305 = inst_28308;
var state_28328__$1 = (function (){var statearr_28338 = state_28328;
(statearr_28338[(10)] = inst_28317);

(statearr_28338[(7)] = inst_28305);

return statearr_28338;
})();
var statearr_28339_28357 = state_28328__$1;
(statearr_28339_28357[(2)] = null);

(statearr_28339_28357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28329 === (9))){
var inst_28308 = (state_28328[(8)]);
var state_28328__$1 = state_28328;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28328__$1,(11),out,inst_28308);
} else {
if((state_val_28329 === (5))){
var inst_28305 = (state_28328[(7)]);
var inst_28308 = (state_28328[(8)]);
var inst_28312 = cljs.core._EQ_.call(null,inst_28308,inst_28305);
var state_28328__$1 = state_28328;
if(inst_28312){
var statearr_28341_28358 = state_28328__$1;
(statearr_28341_28358[(1)] = (8));

} else {
var statearr_28342_28359 = state_28328__$1;
(statearr_28342_28359[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28329 === (10))){
var inst_28320 = (state_28328[(2)]);
var state_28328__$1 = state_28328;
var statearr_28343_28360 = state_28328__$1;
(statearr_28343_28360[(2)] = inst_28320);

(statearr_28343_28360[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28329 === (8))){
var inst_28305 = (state_28328[(7)]);
var tmp28340 = inst_28305;
var inst_28305__$1 = tmp28340;
var state_28328__$1 = (function (){var statearr_28344 = state_28328;
(statearr_28344[(7)] = inst_28305__$1);

return statearr_28344;
})();
var statearr_28345_28361 = state_28328__$1;
(statearr_28345_28361[(2)] = null);

(statearr_28345_28361[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__26509__auto__ = null;
var cljs$core$async$state_machine__26509__auto____0 = (function (){
var statearr_28346 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28346[(0)] = cljs$core$async$state_machine__26509__auto__);

(statearr_28346[(1)] = (1));

return statearr_28346;
});
var cljs$core$async$state_machine__26509__auto____1 = (function (state_28328){
while(true){
var ret_value__26510__auto__ = (function (){try{while(true){
var result__26511__auto__ = switch__26508__auto__.call(null,state_28328);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26511__auto__;
}
break;
}
}catch (e28347){if((e28347 instanceof Object)){
var ex__26512__auto__ = e28347;
var statearr_28348_28362 = state_28328;
(statearr_28348_28362[(5)] = ex__26512__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28328);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28347;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28363 = state_28328;
state_28328 = G__28363;
continue;
} else {
return ret_value__26510__auto__;
}
break;
}
});
cljs$core$async$state_machine__26509__auto__ = function(state_28328){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26509__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26509__auto____1.call(this,state_28328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26509__auto____0;
cljs$core$async$state_machine__26509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26509__auto____1;
return cljs$core$async$state_machine__26509__auto__;
})()
})();
var state__26605__auto__ = (function (){var statearr_28349 = f__26604__auto__.call(null);
(statearr_28349[(6)] = c__26603__auto___28351);

return statearr_28349;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26605__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__28365 = arguments.length;
switch (G__28365) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26603__auto___28431 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26604__auto__ = (function (){var switch__26508__auto__ = (function (state_28403){
var state_val_28404 = (state_28403[(1)]);
if((state_val_28404 === (7))){
var inst_28399 = (state_28403[(2)]);
var state_28403__$1 = state_28403;
var statearr_28405_28432 = state_28403__$1;
(statearr_28405_28432[(2)] = inst_28399);

(statearr_28405_28432[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28404 === (1))){
var inst_28366 = (new Array(n));
var inst_28367 = inst_28366;
var inst_28368 = (0);
var state_28403__$1 = (function (){var statearr_28406 = state_28403;
(statearr_28406[(7)] = inst_28367);

(statearr_28406[(8)] = inst_28368);

return statearr_28406;
})();
var statearr_28407_28433 = state_28403__$1;
(statearr_28407_28433[(2)] = null);

(statearr_28407_28433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28404 === (4))){
var inst_28371 = (state_28403[(9)]);
var inst_28371__$1 = (state_28403[(2)]);
var inst_28372 = (inst_28371__$1 == null);
var inst_28373 = cljs.core.not.call(null,inst_28372);
var state_28403__$1 = (function (){var statearr_28408 = state_28403;
(statearr_28408[(9)] = inst_28371__$1);

return statearr_28408;
})();
if(inst_28373){
var statearr_28409_28434 = state_28403__$1;
(statearr_28409_28434[(1)] = (5));

} else {
var statearr_28410_28435 = state_28403__$1;
(statearr_28410_28435[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28404 === (15))){
var inst_28393 = (state_28403[(2)]);
var state_28403__$1 = state_28403;
var statearr_28411_28436 = state_28403__$1;
(statearr_28411_28436[(2)] = inst_28393);

(statearr_28411_28436[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28404 === (13))){
var state_28403__$1 = state_28403;
var statearr_28412_28437 = state_28403__$1;
(statearr_28412_28437[(2)] = null);

(statearr_28412_28437[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28404 === (6))){
var inst_28368 = (state_28403[(8)]);
var inst_28389 = (inst_28368 > (0));
var state_28403__$1 = state_28403;
if(cljs.core.truth_(inst_28389)){
var statearr_28413_28438 = state_28403__$1;
(statearr_28413_28438[(1)] = (12));

} else {
var statearr_28414_28439 = state_28403__$1;
(statearr_28414_28439[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28404 === (3))){
var inst_28401 = (state_28403[(2)]);
var state_28403__$1 = state_28403;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28403__$1,inst_28401);
} else {
if((state_val_28404 === (12))){
var inst_28367 = (state_28403[(7)]);
var inst_28391 = cljs.core.vec.call(null,inst_28367);
var state_28403__$1 = state_28403;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28403__$1,(15),out,inst_28391);
} else {
if((state_val_28404 === (2))){
var state_28403__$1 = state_28403;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28403__$1,(4),ch);
} else {
if((state_val_28404 === (11))){
var inst_28383 = (state_28403[(2)]);
var inst_28384 = (new Array(n));
var inst_28367 = inst_28384;
var inst_28368 = (0);
var state_28403__$1 = (function (){var statearr_28415 = state_28403;
(statearr_28415[(7)] = inst_28367);

(statearr_28415[(10)] = inst_28383);

(statearr_28415[(8)] = inst_28368);

return statearr_28415;
})();
var statearr_28416_28440 = state_28403__$1;
(statearr_28416_28440[(2)] = null);

(statearr_28416_28440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28404 === (9))){
var inst_28367 = (state_28403[(7)]);
var inst_28381 = cljs.core.vec.call(null,inst_28367);
var state_28403__$1 = state_28403;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28403__$1,(11),out,inst_28381);
} else {
if((state_val_28404 === (5))){
var inst_28367 = (state_28403[(7)]);
var inst_28371 = (state_28403[(9)]);
var inst_28376 = (state_28403[(11)]);
var inst_28368 = (state_28403[(8)]);
var inst_28375 = (inst_28367[inst_28368] = inst_28371);
var inst_28376__$1 = (inst_28368 + (1));
var inst_28377 = (inst_28376__$1 < n);
var state_28403__$1 = (function (){var statearr_28417 = state_28403;
(statearr_28417[(12)] = inst_28375);

(statearr_28417[(11)] = inst_28376__$1);

return statearr_28417;
})();
if(cljs.core.truth_(inst_28377)){
var statearr_28418_28441 = state_28403__$1;
(statearr_28418_28441[(1)] = (8));

} else {
var statearr_28419_28442 = state_28403__$1;
(statearr_28419_28442[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28404 === (14))){
var inst_28396 = (state_28403[(2)]);
var inst_28397 = cljs.core.async.close_BANG_.call(null,out);
var state_28403__$1 = (function (){var statearr_28421 = state_28403;
(statearr_28421[(13)] = inst_28396);

return statearr_28421;
})();
var statearr_28422_28443 = state_28403__$1;
(statearr_28422_28443[(2)] = inst_28397);

(statearr_28422_28443[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28404 === (10))){
var inst_28387 = (state_28403[(2)]);
var state_28403__$1 = state_28403;
var statearr_28423_28444 = state_28403__$1;
(statearr_28423_28444[(2)] = inst_28387);

(statearr_28423_28444[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28404 === (8))){
var inst_28367 = (state_28403[(7)]);
var inst_28376 = (state_28403[(11)]);
var tmp28420 = inst_28367;
var inst_28367__$1 = tmp28420;
var inst_28368 = inst_28376;
var state_28403__$1 = (function (){var statearr_28424 = state_28403;
(statearr_28424[(7)] = inst_28367__$1);

(statearr_28424[(8)] = inst_28368);

return statearr_28424;
})();
var statearr_28425_28445 = state_28403__$1;
(statearr_28425_28445[(2)] = null);

(statearr_28425_28445[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__26509__auto__ = null;
var cljs$core$async$state_machine__26509__auto____0 = (function (){
var statearr_28426 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28426[(0)] = cljs$core$async$state_machine__26509__auto__);

(statearr_28426[(1)] = (1));

return statearr_28426;
});
var cljs$core$async$state_machine__26509__auto____1 = (function (state_28403){
while(true){
var ret_value__26510__auto__ = (function (){try{while(true){
var result__26511__auto__ = switch__26508__auto__.call(null,state_28403);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26511__auto__;
}
break;
}
}catch (e28427){if((e28427 instanceof Object)){
var ex__26512__auto__ = e28427;
var statearr_28428_28446 = state_28403;
(statearr_28428_28446[(5)] = ex__26512__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28403);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28427;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28447 = state_28403;
state_28403 = G__28447;
continue;
} else {
return ret_value__26510__auto__;
}
break;
}
});
cljs$core$async$state_machine__26509__auto__ = function(state_28403){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26509__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26509__auto____1.call(this,state_28403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26509__auto____0;
cljs$core$async$state_machine__26509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26509__auto____1;
return cljs$core$async$state_machine__26509__auto__;
})()
})();
var state__26605__auto__ = (function (){var statearr_28429 = f__26604__auto__.call(null);
(statearr_28429[(6)] = c__26603__auto___28431);

return statearr_28429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26605__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__28449 = arguments.length;
switch (G__28449) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26603__auto___28519 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26604__auto__ = (function (){var switch__26508__auto__ = (function (state_28491){
var state_val_28492 = (state_28491[(1)]);
if((state_val_28492 === (7))){
var inst_28487 = (state_28491[(2)]);
var state_28491__$1 = state_28491;
var statearr_28493_28520 = state_28491__$1;
(statearr_28493_28520[(2)] = inst_28487);

(statearr_28493_28520[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28492 === (1))){
var inst_28450 = [];
var inst_28451 = inst_28450;
var inst_28452 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28491__$1 = (function (){var statearr_28494 = state_28491;
(statearr_28494[(7)] = inst_28452);

(statearr_28494[(8)] = inst_28451);

return statearr_28494;
})();
var statearr_28495_28521 = state_28491__$1;
(statearr_28495_28521[(2)] = null);

(statearr_28495_28521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28492 === (4))){
var inst_28455 = (state_28491[(9)]);
var inst_28455__$1 = (state_28491[(2)]);
var inst_28456 = (inst_28455__$1 == null);
var inst_28457 = cljs.core.not.call(null,inst_28456);
var state_28491__$1 = (function (){var statearr_28496 = state_28491;
(statearr_28496[(9)] = inst_28455__$1);

return statearr_28496;
})();
if(inst_28457){
var statearr_28497_28522 = state_28491__$1;
(statearr_28497_28522[(1)] = (5));

} else {
var statearr_28498_28523 = state_28491__$1;
(statearr_28498_28523[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28492 === (15))){
var inst_28481 = (state_28491[(2)]);
var state_28491__$1 = state_28491;
var statearr_28499_28524 = state_28491__$1;
(statearr_28499_28524[(2)] = inst_28481);

(statearr_28499_28524[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28492 === (13))){
var state_28491__$1 = state_28491;
var statearr_28500_28525 = state_28491__$1;
(statearr_28500_28525[(2)] = null);

(statearr_28500_28525[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28492 === (6))){
var inst_28451 = (state_28491[(8)]);
var inst_28476 = inst_28451.length;
var inst_28477 = (inst_28476 > (0));
var state_28491__$1 = state_28491;
if(cljs.core.truth_(inst_28477)){
var statearr_28501_28526 = state_28491__$1;
(statearr_28501_28526[(1)] = (12));

} else {
var statearr_28502_28527 = state_28491__$1;
(statearr_28502_28527[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28492 === (3))){
var inst_28489 = (state_28491[(2)]);
var state_28491__$1 = state_28491;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28491__$1,inst_28489);
} else {
if((state_val_28492 === (12))){
var inst_28451 = (state_28491[(8)]);
var inst_28479 = cljs.core.vec.call(null,inst_28451);
var state_28491__$1 = state_28491;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28491__$1,(15),out,inst_28479);
} else {
if((state_val_28492 === (2))){
var state_28491__$1 = state_28491;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28491__$1,(4),ch);
} else {
if((state_val_28492 === (11))){
var inst_28455 = (state_28491[(9)]);
var inst_28459 = (state_28491[(10)]);
var inst_28469 = (state_28491[(2)]);
var inst_28470 = [];
var inst_28471 = inst_28470.push(inst_28455);
var inst_28451 = inst_28470;
var inst_28452 = inst_28459;
var state_28491__$1 = (function (){var statearr_28503 = state_28491;
(statearr_28503[(11)] = inst_28471);

(statearr_28503[(7)] = inst_28452);

(statearr_28503[(8)] = inst_28451);

(statearr_28503[(12)] = inst_28469);

return statearr_28503;
})();
var statearr_28504_28528 = state_28491__$1;
(statearr_28504_28528[(2)] = null);

(statearr_28504_28528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28492 === (9))){
var inst_28451 = (state_28491[(8)]);
var inst_28467 = cljs.core.vec.call(null,inst_28451);
var state_28491__$1 = state_28491;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28491__$1,(11),out,inst_28467);
} else {
if((state_val_28492 === (5))){
var inst_28455 = (state_28491[(9)]);
var inst_28459 = (state_28491[(10)]);
var inst_28452 = (state_28491[(7)]);
var inst_28459__$1 = f.call(null,inst_28455);
var inst_28460 = cljs.core._EQ_.call(null,inst_28459__$1,inst_28452);
var inst_28461 = cljs.core.keyword_identical_QMARK_.call(null,inst_28452,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28462 = ((inst_28460) || (inst_28461));
var state_28491__$1 = (function (){var statearr_28505 = state_28491;
(statearr_28505[(10)] = inst_28459__$1);

return statearr_28505;
})();
if(cljs.core.truth_(inst_28462)){
var statearr_28506_28529 = state_28491__$1;
(statearr_28506_28529[(1)] = (8));

} else {
var statearr_28507_28530 = state_28491__$1;
(statearr_28507_28530[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28492 === (14))){
var inst_28484 = (state_28491[(2)]);
var inst_28485 = cljs.core.async.close_BANG_.call(null,out);
var state_28491__$1 = (function (){var statearr_28509 = state_28491;
(statearr_28509[(13)] = inst_28484);

return statearr_28509;
})();
var statearr_28510_28531 = state_28491__$1;
(statearr_28510_28531[(2)] = inst_28485);

(statearr_28510_28531[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28492 === (10))){
var inst_28474 = (state_28491[(2)]);
var state_28491__$1 = state_28491;
var statearr_28511_28532 = state_28491__$1;
(statearr_28511_28532[(2)] = inst_28474);

(statearr_28511_28532[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28492 === (8))){
var inst_28455 = (state_28491[(9)]);
var inst_28459 = (state_28491[(10)]);
var inst_28451 = (state_28491[(8)]);
var inst_28464 = inst_28451.push(inst_28455);
var tmp28508 = inst_28451;
var inst_28451__$1 = tmp28508;
var inst_28452 = inst_28459;
var state_28491__$1 = (function (){var statearr_28512 = state_28491;
(statearr_28512[(14)] = inst_28464);

(statearr_28512[(7)] = inst_28452);

(statearr_28512[(8)] = inst_28451__$1);

return statearr_28512;
})();
var statearr_28513_28533 = state_28491__$1;
(statearr_28513_28533[(2)] = null);

(statearr_28513_28533[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__26509__auto__ = null;
var cljs$core$async$state_machine__26509__auto____0 = (function (){
var statearr_28514 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28514[(0)] = cljs$core$async$state_machine__26509__auto__);

(statearr_28514[(1)] = (1));

return statearr_28514;
});
var cljs$core$async$state_machine__26509__auto____1 = (function (state_28491){
while(true){
var ret_value__26510__auto__ = (function (){try{while(true){
var result__26511__auto__ = switch__26508__auto__.call(null,state_28491);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26511__auto__;
}
break;
}
}catch (e28515){if((e28515 instanceof Object)){
var ex__26512__auto__ = e28515;
var statearr_28516_28534 = state_28491;
(statearr_28516_28534[(5)] = ex__26512__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28491);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28515;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28535 = state_28491;
state_28491 = G__28535;
continue;
} else {
return ret_value__26510__auto__;
}
break;
}
});
cljs$core$async$state_machine__26509__auto__ = function(state_28491){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26509__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26509__auto____1.call(this,state_28491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26509__auto____0;
cljs$core$async$state_machine__26509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26509__auto____1;
return cljs$core$async$state_machine__26509__auto__;
})()
})();
var state__26605__auto__ = (function (){var statearr_28517 = f__26604__auto__.call(null);
(statearr_28517[(6)] = c__26603__auto___28519);

return statearr_28517;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26605__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map?rel=1603913408647
