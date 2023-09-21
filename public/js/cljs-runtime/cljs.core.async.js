goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13865 = (function (f,blockable,meta13866){
this.f = f;
this.blockable = blockable;
this.meta13866 = meta13866;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13865.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13867,meta13866__$1){
var self__ = this;
var _13867__$1 = this;
return (new cljs.core.async.t_cljs$core$async13865(self__.f,self__.blockable,meta13866__$1));
}));

(cljs.core.async.t_cljs$core$async13865.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13867){
var self__ = this;
var _13867__$1 = this;
return self__.meta13866;
}));

(cljs.core.async.t_cljs$core$async13865.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13865.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13865.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async13865.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async13865.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta13866","meta13866",-211046527,null)], null);
}));

(cljs.core.async.t_cljs$core$async13865.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13865.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13865");

(cljs.core.async.t_cljs$core$async13865.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async13865");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13865.
 */
cljs.core.async.__GT_t_cljs$core$async13865 = (function cljs$core$async$__GT_t_cljs$core$async13865(f,blockable,meta13866){
return (new cljs.core.async.t_cljs$core$async13865(f,blockable,meta13866));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__13861 = arguments.length;
switch (G__13861) {
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
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async13865(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
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
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__13920 = arguments.length;
switch (G__13920) {
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
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
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
var G__13938 = arguments.length;
switch (G__13938) {
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
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
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
var G__13954 = arguments.length;
switch (G__13954) {
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
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_15910 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_15910) : fn1.call(null,val_15910));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_15910) : fn1.call(null,val_15910));
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
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
var G__13966 = arguments.length;
switch (G__13966) {
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
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___15915 = n;
var x_15916 = (0);
while(true){
if((x_15916 < n__5636__auto___15915)){
(a[x_15916] = x_15916);

var G__15917 = (x_15916 + (1));
x_15916 = G__15917;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13969 = (function (flag,meta13970){
this.flag = flag;
this.meta13970 = meta13970;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13969.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13971,meta13970__$1){
var self__ = this;
var _13971__$1 = this;
return (new cljs.core.async.t_cljs$core$async13969(self__.flag,meta13970__$1));
}));

(cljs.core.async.t_cljs$core$async13969.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13971){
var self__ = this;
var _13971__$1 = this;
return self__.meta13970;
}));

(cljs.core.async.t_cljs$core$async13969.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13969.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async13969.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13969.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async13969.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta13970","meta13970",-1221695872,null)], null);
}));

(cljs.core.async.t_cljs$core$async13969.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13969.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13969");

(cljs.core.async.t_cljs$core$async13969.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async13969");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13969.
 */
cljs.core.async.__GT_t_cljs$core$async13969 = (function cljs$core$async$__GT_t_cljs$core$async13969(flag,meta13970){
return (new cljs.core.async.t_cljs$core$async13969(flag,meta13970));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async13969(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13974 = (function (flag,cb,meta13975){
this.flag = flag;
this.cb = cb;
this.meta13975 = meta13975;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13974.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13976,meta13975__$1){
var self__ = this;
var _13976__$1 = this;
return (new cljs.core.async.t_cljs$core$async13974(self__.flag,self__.cb,meta13975__$1));
}));

(cljs.core.async.t_cljs$core$async13974.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13976){
var self__ = this;
var _13976__$1 = this;
return self__.meta13975;
}));

(cljs.core.async.t_cljs$core$async13974.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13974.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async13974.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13974.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async13974.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta13975","meta13975",-1413576626,null)], null);
}));

(cljs.core.async.t_cljs$core$async13974.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13974.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13974");

(cljs.core.async.t_cljs$core$async13974.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async13974");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13974.
 */
cljs.core.async.__GT_t_cljs$core$async13974 = (function cljs$core$async$__GT_t_cljs$core$async13974(flag,cb,meta13975){
return (new cljs.core.async.t_cljs$core$async13974(flag,cb,meta13975));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async13974(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13981_SHARP_){
var G__13984 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13981_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__13984) : fret.call(null,G__13984));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13982_SHARP_){
var G__13986 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13982_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__13986) : fret.call(null,G__13986));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__15925 = (i + (1));
i = G__15925;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__5775__auto__ = [];
var len__5769__auto___15926 = arguments.length;
var i__5770__auto___15927 = (0);
while(true){
if((i__5770__auto___15927 < len__5769__auto___15926)){
args__5775__auto__.push((arguments[i__5770__auto___15927]));

var G__15928 = (i__5770__auto___15927 + (1));
i__5770__auto___15927 = G__15928;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__13992){
var map__13993 = p__13992;
var map__13993__$1 = cljs.core.__destructure_map(map__13993);
var opts = map__13993__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq13990){
var G__13991 = cljs.core.first(seq13990);
var seq13990__$1 = cljs.core.next(seq13990);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13991,seq13990__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
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
var G__14001 = arguments.length;
switch (G__14001) {
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
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__13759__auto___15930 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13760__auto__ = (function (){var switch__13658__auto__ = (function (state_14040){
var state_val_14041 = (state_14040[(1)]);
if((state_val_14041 === (7))){
var inst_14036 = (state_14040[(2)]);
var state_14040__$1 = state_14040;
var statearr_14042_15931 = state_14040__$1;
(statearr_14042_15931[(2)] = inst_14036);

(statearr_14042_15931[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14041 === (1))){
var state_14040__$1 = state_14040;
var statearr_14043_15932 = state_14040__$1;
(statearr_14043_15932[(2)] = null);

(statearr_14043_15932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14041 === (4))){
var inst_14016 = (state_14040[(7)]);
var inst_14016__$1 = (state_14040[(2)]);
var inst_14018 = (inst_14016__$1 == null);
var state_14040__$1 = (function (){var statearr_14044 = state_14040;
(statearr_14044[(7)] = inst_14016__$1);

return statearr_14044;
})();
if(cljs.core.truth_(inst_14018)){
var statearr_14046_15933 = state_14040__$1;
(statearr_14046_15933[(1)] = (5));

} else {
var statearr_14047_15934 = state_14040__$1;
(statearr_14047_15934[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14041 === (13))){
var state_14040__$1 = state_14040;
var statearr_14048_15935 = state_14040__$1;
(statearr_14048_15935[(2)] = null);

(statearr_14048_15935[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14041 === (6))){
var inst_14016 = (state_14040[(7)]);
var state_14040__$1 = state_14040;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14040__$1,(11),to,inst_14016);
} else {
if((state_val_14041 === (3))){
var inst_14038 = (state_14040[(2)]);
var state_14040__$1 = state_14040;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14040__$1,inst_14038);
} else {
if((state_val_14041 === (12))){
var state_14040__$1 = state_14040;
var statearr_14049_15936 = state_14040__$1;
(statearr_14049_15936[(2)] = null);

(statearr_14049_15936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14041 === (2))){
var state_14040__$1 = state_14040;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14040__$1,(4),from);
} else {
if((state_val_14041 === (11))){
var inst_14028 = (state_14040[(2)]);
var state_14040__$1 = state_14040;
if(cljs.core.truth_(inst_14028)){
var statearr_14050_15937 = state_14040__$1;
(statearr_14050_15937[(1)] = (12));

} else {
var statearr_14051_15938 = state_14040__$1;
(statearr_14051_15938[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14041 === (9))){
var state_14040__$1 = state_14040;
var statearr_14055_15939 = state_14040__$1;
(statearr_14055_15939[(2)] = null);

(statearr_14055_15939[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14041 === (5))){
var state_14040__$1 = state_14040;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14056_15940 = state_14040__$1;
(statearr_14056_15940[(1)] = (8));

} else {
var statearr_14057_15941 = state_14040__$1;
(statearr_14057_15941[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14041 === (14))){
var inst_14034 = (state_14040[(2)]);
var state_14040__$1 = state_14040;
var statearr_14058_15942 = state_14040__$1;
(statearr_14058_15942[(2)] = inst_14034);

(statearr_14058_15942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14041 === (10))){
var inst_14025 = (state_14040[(2)]);
var state_14040__$1 = state_14040;
var statearr_14059_15943 = state_14040__$1;
(statearr_14059_15943[(2)] = inst_14025);

(statearr_14059_15943[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14041 === (8))){
var inst_14021 = cljs.core.async.close_BANG_(to);
var state_14040__$1 = state_14040;
var statearr_14060_15944 = state_14040__$1;
(statearr_14060_15944[(2)] = inst_14021);

(statearr_14060_15944[(1)] = (10));


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
var cljs$core$async$state_machine__13659__auto__ = null;
var cljs$core$async$state_machine__13659__auto____0 = (function (){
var statearr_14063 = [null,null,null,null,null,null,null,null];
(statearr_14063[(0)] = cljs$core$async$state_machine__13659__auto__);

(statearr_14063[(1)] = (1));

return statearr_14063;
});
var cljs$core$async$state_machine__13659__auto____1 = (function (state_14040){
while(true){
var ret_value__13660__auto__ = (function (){try{while(true){
var result__13661__auto__ = switch__13658__auto__(state_14040);
if(cljs.core.keyword_identical_QMARK_(result__13661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13661__auto__;
}
break;
}
}catch (e14068){var ex__13662__auto__ = e14068;
var statearr_14069_15945 = state_14040;
(statearr_14069_15945[(2)] = ex__13662__auto__);


if(cljs.core.seq((state_14040[(4)]))){
var statearr_14072_15946 = state_14040;
(statearr_14072_15946[(1)] = cljs.core.first((state_14040[(4)])));

} else {
throw ex__13662__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15947 = state_14040;
state_14040 = G__15947;
continue;
} else {
return ret_value__13660__auto__;
}
break;
}
});
cljs$core$async$state_machine__13659__auto__ = function(state_14040){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13659__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13659__auto____1.call(this,state_14040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13659__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13659__auto____0;
cljs$core$async$state_machine__13659__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13659__auto____1;
return cljs$core$async$state_machine__13659__auto__;
})()
})();
var state__13761__auto__ = (function (){var statearr_14073 = f__13760__auto__();
(statearr_14073[(6)] = c__13759__auto___15930);

return statearr_14073;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13761__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__14079){
var vec__14080 = p__14079;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14080,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14080,(1),null);
var job = vec__14080;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__13759__auto___15948 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13760__auto__ = (function (){var switch__13658__auto__ = (function (state_14087){
var state_val_14088 = (state_14087[(1)]);
if((state_val_14088 === (1))){
var state_14087__$1 = state_14087;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14087__$1,(2),res,v);
} else {
if((state_val_14088 === (2))){
var inst_14084 = (state_14087[(2)]);
var inst_14085 = cljs.core.async.close_BANG_(res);
var state_14087__$1 = (function (){var statearr_14089 = state_14087;
(statearr_14089[(7)] = inst_14084);

return statearr_14089;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14087__$1,inst_14085);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13659__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13659__auto____0 = (function (){
var statearr_14090 = [null,null,null,null,null,null,null,null];
(statearr_14090[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13659__auto__);

(statearr_14090[(1)] = (1));

return statearr_14090;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13659__auto____1 = (function (state_14087){
while(true){
var ret_value__13660__auto__ = (function (){try{while(true){
var result__13661__auto__ = switch__13658__auto__(state_14087);
if(cljs.core.keyword_identical_QMARK_(result__13661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13661__auto__;
}
break;
}
}catch (e14091){var ex__13662__auto__ = e14091;
var statearr_14092_15949 = state_14087;
(statearr_14092_15949[(2)] = ex__13662__auto__);


if(cljs.core.seq((state_14087[(4)]))){
var statearr_14093_15950 = state_14087;
(statearr_14093_15950[(1)] = cljs.core.first((state_14087[(4)])));

} else {
throw ex__13662__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15951 = state_14087;
state_14087 = G__15951;
continue;
} else {
return ret_value__13660__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13659__auto__ = function(state_14087){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13659__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13659__auto____1.call(this,state_14087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13659__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13659__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13659__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13659__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13659__auto__;
})()
})();
var state__13761__auto__ = (function (){var statearr_14094 = f__13760__auto__();
(statearr_14094[(6)] = c__13759__auto___15948);

return statearr_14094;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13761__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__14095){
var vec__14096 = p__14095;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14096,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14096,(1),null);
var job = vec__14096;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___15952 = n;
var __15953 = (0);
while(true){
if((__15953 < n__5636__auto___15952)){
var G__14099_15954 = type;
var G__14099_15955__$1 = (((G__14099_15954 instanceof cljs.core.Keyword))?G__14099_15954.fqn:null);
switch (G__14099_15955__$1) {
case "compute":
var c__13759__auto___15957 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__15953,c__13759__auto___15957,G__14099_15954,G__14099_15955__$1,n__5636__auto___15952,jobs,results,process__$1,async){
return (function (){
var f__13760__auto__ = (function (){var switch__13658__auto__ = ((function (__15953,c__13759__auto___15957,G__14099_15954,G__14099_15955__$1,n__5636__auto___15952,jobs,results,process__$1,async){
return (function (state_14112){
var state_val_14113 = (state_14112[(1)]);
if((state_val_14113 === (1))){
var state_14112__$1 = state_14112;
var statearr_14117_15958 = state_14112__$1;
(statearr_14117_15958[(2)] = null);

(statearr_14117_15958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14113 === (2))){
var state_14112__$1 = state_14112;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14112__$1,(4),jobs);
} else {
if((state_val_14113 === (3))){
var inst_14110 = (state_14112[(2)]);
var state_14112__$1 = state_14112;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14112__$1,inst_14110);
} else {
if((state_val_14113 === (4))){
var inst_14102 = (state_14112[(2)]);
var inst_14103 = process__$1(inst_14102);
var state_14112__$1 = state_14112;
if(cljs.core.truth_(inst_14103)){
var statearr_14118_15959 = state_14112__$1;
(statearr_14118_15959[(1)] = (5));

} else {
var statearr_14119_15960 = state_14112__$1;
(statearr_14119_15960[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14113 === (5))){
var state_14112__$1 = state_14112;
var statearr_14120_15961 = state_14112__$1;
(statearr_14120_15961[(2)] = null);

(statearr_14120_15961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14113 === (6))){
var state_14112__$1 = state_14112;
var statearr_14121_15962 = state_14112__$1;
(statearr_14121_15962[(2)] = null);

(statearr_14121_15962[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14113 === (7))){
var inst_14108 = (state_14112[(2)]);
var state_14112__$1 = state_14112;
var statearr_14122_15963 = state_14112__$1;
(statearr_14122_15963[(2)] = inst_14108);

(statearr_14122_15963[(1)] = (3));


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
});})(__15953,c__13759__auto___15957,G__14099_15954,G__14099_15955__$1,n__5636__auto___15952,jobs,results,process__$1,async))
;
return ((function (__15953,switch__13658__auto__,c__13759__auto___15957,G__14099_15954,G__14099_15955__$1,n__5636__auto___15952,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13659__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13659__auto____0 = (function (){
var statearr_14123 = [null,null,null,null,null,null,null];
(statearr_14123[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13659__auto__);

(statearr_14123[(1)] = (1));

return statearr_14123;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13659__auto____1 = (function (state_14112){
while(true){
var ret_value__13660__auto__ = (function (){try{while(true){
var result__13661__auto__ = switch__13658__auto__(state_14112);
if(cljs.core.keyword_identical_QMARK_(result__13661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13661__auto__;
}
break;
}
}catch (e14124){var ex__13662__auto__ = e14124;
var statearr_14126_15964 = state_14112;
(statearr_14126_15964[(2)] = ex__13662__auto__);


if(cljs.core.seq((state_14112[(4)]))){
var statearr_14127_15967 = state_14112;
(statearr_14127_15967[(1)] = cljs.core.first((state_14112[(4)])));

} else {
throw ex__13662__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15968 = state_14112;
state_14112 = G__15968;
continue;
} else {
return ret_value__13660__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13659__auto__ = function(state_14112){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13659__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13659__auto____1.call(this,state_14112);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13659__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13659__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13659__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13659__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13659__auto__;
})()
;})(__15953,switch__13658__auto__,c__13759__auto___15957,G__14099_15954,G__14099_15955__$1,n__5636__auto___15952,jobs,results,process__$1,async))
})();
var state__13761__auto__ = (function (){var statearr_14128 = f__13760__auto__();
(statearr_14128[(6)] = c__13759__auto___15957);

return statearr_14128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13761__auto__);
});})(__15953,c__13759__auto___15957,G__14099_15954,G__14099_15955__$1,n__5636__auto___15952,jobs,results,process__$1,async))
);


break;
case "async":
var c__13759__auto___15969 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__15953,c__13759__auto___15969,G__14099_15954,G__14099_15955__$1,n__5636__auto___15952,jobs,results,process__$1,async){
return (function (){
var f__13760__auto__ = (function (){var switch__13658__auto__ = ((function (__15953,c__13759__auto___15969,G__14099_15954,G__14099_15955__$1,n__5636__auto___15952,jobs,results,process__$1,async){
return (function (state_14143){
var state_val_14144 = (state_14143[(1)]);
if((state_val_14144 === (1))){
var state_14143__$1 = state_14143;
var statearr_14146_15970 = state_14143__$1;
(statearr_14146_15970[(2)] = null);

(statearr_14146_15970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14144 === (2))){
var state_14143__$1 = state_14143;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14143__$1,(4),jobs);
} else {
if((state_val_14144 === (3))){
var inst_14141 = (state_14143[(2)]);
var state_14143__$1 = state_14143;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14143__$1,inst_14141);
} else {
if((state_val_14144 === (4))){
var inst_14133 = (state_14143[(2)]);
var inst_14134 = async(inst_14133);
var state_14143__$1 = state_14143;
if(cljs.core.truth_(inst_14134)){
var statearr_14147_15971 = state_14143__$1;
(statearr_14147_15971[(1)] = (5));

} else {
var statearr_14148_15972 = state_14143__$1;
(statearr_14148_15972[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14144 === (5))){
var state_14143__$1 = state_14143;
var statearr_14149_15973 = state_14143__$1;
(statearr_14149_15973[(2)] = null);

(statearr_14149_15973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14144 === (6))){
var state_14143__$1 = state_14143;
var statearr_14150_15974 = state_14143__$1;
(statearr_14150_15974[(2)] = null);

(statearr_14150_15974[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14144 === (7))){
var inst_14139 = (state_14143[(2)]);
var state_14143__$1 = state_14143;
var statearr_14151_15975 = state_14143__$1;
(statearr_14151_15975[(2)] = inst_14139);

(statearr_14151_15975[(1)] = (3));


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
});})(__15953,c__13759__auto___15969,G__14099_15954,G__14099_15955__$1,n__5636__auto___15952,jobs,results,process__$1,async))
;
return ((function (__15953,switch__13658__auto__,c__13759__auto___15969,G__14099_15954,G__14099_15955__$1,n__5636__auto___15952,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13659__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13659__auto____0 = (function (){
var statearr_14154 = [null,null,null,null,null,null,null];
(statearr_14154[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13659__auto__);

(statearr_14154[(1)] = (1));

return statearr_14154;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13659__auto____1 = (function (state_14143){
while(true){
var ret_value__13660__auto__ = (function (){try{while(true){
var result__13661__auto__ = switch__13658__auto__(state_14143);
if(cljs.core.keyword_identical_QMARK_(result__13661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13661__auto__;
}
break;
}
}catch (e14157){var ex__13662__auto__ = e14157;
var statearr_14159_15976 = state_14143;
(statearr_14159_15976[(2)] = ex__13662__auto__);


if(cljs.core.seq((state_14143[(4)]))){
var statearr_14161_15977 = state_14143;
(statearr_14161_15977[(1)] = cljs.core.first((state_14143[(4)])));

} else {
throw ex__13662__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15978 = state_14143;
state_14143 = G__15978;
continue;
} else {
return ret_value__13660__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13659__auto__ = function(state_14143){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13659__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13659__auto____1.call(this,state_14143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13659__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13659__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13659__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13659__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13659__auto__;
})()
;})(__15953,switch__13658__auto__,c__13759__auto___15969,G__14099_15954,G__14099_15955__$1,n__5636__auto___15952,jobs,results,process__$1,async))
})();
var state__13761__auto__ = (function (){var statearr_14163 = f__13760__auto__();
(statearr_14163[(6)] = c__13759__auto___15969);

return statearr_14163;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13761__auto__);
});})(__15953,c__13759__auto___15969,G__14099_15954,G__14099_15955__$1,n__5636__auto___15952,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14099_15955__$1)].join('')));

}

var G__15979 = (__15953 + (1));
__15953 = G__15979;
continue;
} else {
}
break;
}

var c__13759__auto___15980 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13760__auto__ = (function (){var switch__13658__auto__ = (function (state_14190){
var state_val_14191 = (state_14190[(1)]);
if((state_val_14191 === (7))){
var inst_14186 = (state_14190[(2)]);
var state_14190__$1 = state_14190;
var statearr_14192_15981 = state_14190__$1;
(statearr_14192_15981[(2)] = inst_14186);

(statearr_14192_15981[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14191 === (1))){
var state_14190__$1 = state_14190;
var statearr_14193_15982 = state_14190__$1;
(statearr_14193_15982[(2)] = null);

(statearr_14193_15982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14191 === (4))){
var inst_14170 = (state_14190[(7)]);
var inst_14170__$1 = (state_14190[(2)]);
var inst_14171 = (inst_14170__$1 == null);
var state_14190__$1 = (function (){var statearr_14194 = state_14190;
(statearr_14194[(7)] = inst_14170__$1);

return statearr_14194;
})();
if(cljs.core.truth_(inst_14171)){
var statearr_14195_15983 = state_14190__$1;
(statearr_14195_15983[(1)] = (5));

} else {
var statearr_14196_15984 = state_14190__$1;
(statearr_14196_15984[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14191 === (6))){
var inst_14170 = (state_14190[(7)]);
var inst_14175 = (state_14190[(8)]);
var inst_14175__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_14177 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14178 = [inst_14170,inst_14175__$1];
var inst_14179 = (new cljs.core.PersistentVector(null,2,(5),inst_14177,inst_14178,null));
var state_14190__$1 = (function (){var statearr_14203 = state_14190;
(statearr_14203[(8)] = inst_14175__$1);

return statearr_14203;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14190__$1,(8),jobs,inst_14179);
} else {
if((state_val_14191 === (3))){
var inst_14188 = (state_14190[(2)]);
var state_14190__$1 = state_14190;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14190__$1,inst_14188);
} else {
if((state_val_14191 === (2))){
var state_14190__$1 = state_14190;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14190__$1,(4),from);
} else {
if((state_val_14191 === (9))){
var inst_14183 = (state_14190[(2)]);
var state_14190__$1 = (function (){var statearr_14228 = state_14190;
(statearr_14228[(9)] = inst_14183);

return statearr_14228;
})();
var statearr_14229_15985 = state_14190__$1;
(statearr_14229_15985[(2)] = null);

(statearr_14229_15985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14191 === (5))){
var inst_14173 = cljs.core.async.close_BANG_(jobs);
var state_14190__$1 = state_14190;
var statearr_14238_15986 = state_14190__$1;
(statearr_14238_15986[(2)] = inst_14173);

(statearr_14238_15986[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14191 === (8))){
var inst_14175 = (state_14190[(8)]);
var inst_14181 = (state_14190[(2)]);
var state_14190__$1 = (function (){var statearr_14240 = state_14190;
(statearr_14240[(10)] = inst_14181);

return statearr_14240;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14190__$1,(9),results,inst_14175);
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
var cljs$core$async$pipeline_STAR__$_state_machine__13659__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13659__auto____0 = (function (){
var statearr_14247 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14247[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13659__auto__);

(statearr_14247[(1)] = (1));

return statearr_14247;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13659__auto____1 = (function (state_14190){
while(true){
var ret_value__13660__auto__ = (function (){try{while(true){
var result__13661__auto__ = switch__13658__auto__(state_14190);
if(cljs.core.keyword_identical_QMARK_(result__13661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13661__auto__;
}
break;
}
}catch (e14249){var ex__13662__auto__ = e14249;
var statearr_14250_15987 = state_14190;
(statearr_14250_15987[(2)] = ex__13662__auto__);


if(cljs.core.seq((state_14190[(4)]))){
var statearr_14251_15988 = state_14190;
(statearr_14251_15988[(1)] = cljs.core.first((state_14190[(4)])));

} else {
throw ex__13662__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15989 = state_14190;
state_14190 = G__15989;
continue;
} else {
return ret_value__13660__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13659__auto__ = function(state_14190){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13659__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13659__auto____1.call(this,state_14190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13659__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13659__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13659__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13659__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13659__auto__;
})()
})();
var state__13761__auto__ = (function (){var statearr_14256 = f__13760__auto__();
(statearr_14256[(6)] = c__13759__auto___15980);

return statearr_14256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13761__auto__);
}));


var c__13759__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13760__auto__ = (function (){var switch__13658__auto__ = (function (state_14307){
var state_val_14308 = (state_14307[(1)]);
if((state_val_14308 === (7))){
var inst_14302 = (state_14307[(2)]);
var state_14307__$1 = state_14307;
var statearr_14311_15991 = state_14307__$1;
(statearr_14311_15991[(2)] = inst_14302);

(statearr_14311_15991[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14308 === (20))){
var state_14307__$1 = state_14307;
var statearr_14312_15992 = state_14307__$1;
(statearr_14312_15992[(2)] = null);

(statearr_14312_15992[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14308 === (1))){
var state_14307__$1 = state_14307;
var statearr_14313_15993 = state_14307__$1;
(statearr_14313_15993[(2)] = null);

(statearr_14313_15993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14308 === (4))){
var inst_14259 = (state_14307[(7)]);
var inst_14259__$1 = (state_14307[(2)]);
var inst_14260 = (inst_14259__$1 == null);
var state_14307__$1 = (function (){var statearr_14314 = state_14307;
(statearr_14314[(7)] = inst_14259__$1);

return statearr_14314;
})();
if(cljs.core.truth_(inst_14260)){
var statearr_14315_15994 = state_14307__$1;
(statearr_14315_15994[(1)] = (5));

} else {
var statearr_14318_15995 = state_14307__$1;
(statearr_14318_15995[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14308 === (15))){
var inst_14283 = (state_14307[(8)]);
var state_14307__$1 = state_14307;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14307__$1,(18),to,inst_14283);
} else {
if((state_val_14308 === (21))){
var inst_14297 = (state_14307[(2)]);
var state_14307__$1 = state_14307;
var statearr_14322_15996 = state_14307__$1;
(statearr_14322_15996[(2)] = inst_14297);

(statearr_14322_15996[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14308 === (13))){
var inst_14299 = (state_14307[(2)]);
var state_14307__$1 = (function (){var statearr_14326 = state_14307;
(statearr_14326[(9)] = inst_14299);

return statearr_14326;
})();
var statearr_14332_15998 = state_14307__$1;
(statearr_14332_15998[(2)] = null);

(statearr_14332_15998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14308 === (6))){
var inst_14259 = (state_14307[(7)]);
var state_14307__$1 = state_14307;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14307__$1,(11),inst_14259);
} else {
if((state_val_14308 === (17))){
var inst_14292 = (state_14307[(2)]);
var state_14307__$1 = state_14307;
if(cljs.core.truth_(inst_14292)){
var statearr_14337_16000 = state_14307__$1;
(statearr_14337_16000[(1)] = (19));

} else {
var statearr_14339_16001 = state_14307__$1;
(statearr_14339_16001[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14308 === (3))){
var inst_14304 = (state_14307[(2)]);
var state_14307__$1 = state_14307;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14307__$1,inst_14304);
} else {
if((state_val_14308 === (12))){
var inst_14271 = (state_14307[(10)]);
var state_14307__$1 = state_14307;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14307__$1,(14),inst_14271);
} else {
if((state_val_14308 === (2))){
var state_14307__$1 = state_14307;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14307__$1,(4),results);
} else {
if((state_val_14308 === (19))){
var state_14307__$1 = state_14307;
var statearr_14350_16002 = state_14307__$1;
(statearr_14350_16002[(2)] = null);

(statearr_14350_16002[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14308 === (11))){
var inst_14271 = (state_14307[(2)]);
var state_14307__$1 = (function (){var statearr_14351 = state_14307;
(statearr_14351[(10)] = inst_14271);

return statearr_14351;
})();
var statearr_14352_16003 = state_14307__$1;
(statearr_14352_16003[(2)] = null);

(statearr_14352_16003[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14308 === (9))){
var state_14307__$1 = state_14307;
var statearr_14355_16004 = state_14307__$1;
(statearr_14355_16004[(2)] = null);

(statearr_14355_16004[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14308 === (5))){
var state_14307__$1 = state_14307;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14356_16005 = state_14307__$1;
(statearr_14356_16005[(1)] = (8));

} else {
var statearr_14357_16006 = state_14307__$1;
(statearr_14357_16006[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14308 === (14))){
var inst_14283 = (state_14307[(8)]);
var inst_14286 = (state_14307[(11)]);
var inst_14283__$1 = (state_14307[(2)]);
var inst_14285 = (inst_14283__$1 == null);
var inst_14286__$1 = cljs.core.not(inst_14285);
var state_14307__$1 = (function (){var statearr_14358 = state_14307;
(statearr_14358[(8)] = inst_14283__$1);

(statearr_14358[(11)] = inst_14286__$1);

return statearr_14358;
})();
if(inst_14286__$1){
var statearr_14359_16007 = state_14307__$1;
(statearr_14359_16007[(1)] = (15));

} else {
var statearr_14360_16008 = state_14307__$1;
(statearr_14360_16008[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14308 === (16))){
var inst_14286 = (state_14307[(11)]);
var state_14307__$1 = state_14307;
var statearr_14361_16009 = state_14307__$1;
(statearr_14361_16009[(2)] = inst_14286);

(statearr_14361_16009[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14308 === (10))){
var inst_14266 = (state_14307[(2)]);
var state_14307__$1 = state_14307;
var statearr_14362_16011 = state_14307__$1;
(statearr_14362_16011[(2)] = inst_14266);

(statearr_14362_16011[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14308 === (18))){
var inst_14289 = (state_14307[(2)]);
var state_14307__$1 = state_14307;
var statearr_14363_16012 = state_14307__$1;
(statearr_14363_16012[(2)] = inst_14289);

(statearr_14363_16012[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14308 === (8))){
var inst_14263 = cljs.core.async.close_BANG_(to);
var state_14307__$1 = state_14307;
var statearr_14364_16013 = state_14307__$1;
(statearr_14364_16013[(2)] = inst_14263);

(statearr_14364_16013[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__13659__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13659__auto____0 = (function (){
var statearr_14365 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14365[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13659__auto__);

(statearr_14365[(1)] = (1));

return statearr_14365;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13659__auto____1 = (function (state_14307){
while(true){
var ret_value__13660__auto__ = (function (){try{while(true){
var result__13661__auto__ = switch__13658__auto__(state_14307);
if(cljs.core.keyword_identical_QMARK_(result__13661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13661__auto__;
}
break;
}
}catch (e14367){var ex__13662__auto__ = e14367;
var statearr_14369_16015 = state_14307;
(statearr_14369_16015[(2)] = ex__13662__auto__);


if(cljs.core.seq((state_14307[(4)]))){
var statearr_14370_16016 = state_14307;
(statearr_14370_16016[(1)] = cljs.core.first((state_14307[(4)])));

} else {
throw ex__13662__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16017 = state_14307;
state_14307 = G__16017;
continue;
} else {
return ret_value__13660__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13659__auto__ = function(state_14307){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13659__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13659__auto____1.call(this,state_14307);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13659__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13659__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13659__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13659__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13659__auto__;
})()
})();
var state__13761__auto__ = (function (){var statearr_14376 = f__13760__auto__();
(statearr_14376[(6)] = c__13759__auto__);

return statearr_14376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13761__auto__);
}));

return c__13759__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__14383 = arguments.length;
switch (G__14383) {
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
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
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
var G__14390 = arguments.length;
switch (G__14390) {
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
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
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
var G__14405 = arguments.length;
switch (G__14405) {
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
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__13759__auto___16023 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13760__auto__ = (function (){var switch__13658__auto__ = (function (state_14442){
var state_val_14443 = (state_14442[(1)]);
if((state_val_14443 === (7))){
var inst_14437 = (state_14442[(2)]);
var state_14442__$1 = state_14442;
var statearr_14447_16024 = state_14442__$1;
(statearr_14447_16024[(2)] = inst_14437);

(statearr_14447_16024[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14443 === (1))){
var state_14442__$1 = state_14442;
var statearr_14448_16025 = state_14442__$1;
(statearr_14448_16025[(2)] = null);

(statearr_14448_16025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14443 === (4))){
var inst_14416 = (state_14442[(7)]);
var inst_14416__$1 = (state_14442[(2)]);
var inst_14417 = (inst_14416__$1 == null);
var state_14442__$1 = (function (){var statearr_14450 = state_14442;
(statearr_14450[(7)] = inst_14416__$1);

return statearr_14450;
})();
if(cljs.core.truth_(inst_14417)){
var statearr_14451_16026 = state_14442__$1;
(statearr_14451_16026[(1)] = (5));

} else {
var statearr_14452_16027 = state_14442__$1;
(statearr_14452_16027[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14443 === (13))){
var state_14442__$1 = state_14442;
var statearr_14453_16028 = state_14442__$1;
(statearr_14453_16028[(2)] = null);

(statearr_14453_16028[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14443 === (6))){
var inst_14416 = (state_14442[(7)]);
var inst_14424 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_14416) : p.call(null,inst_14416));
var state_14442__$1 = state_14442;
if(cljs.core.truth_(inst_14424)){
var statearr_14454_16029 = state_14442__$1;
(statearr_14454_16029[(1)] = (9));

} else {
var statearr_14455_16030 = state_14442__$1;
(statearr_14455_16030[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14443 === (3))){
var inst_14440 = (state_14442[(2)]);
var state_14442__$1 = state_14442;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14442__$1,inst_14440);
} else {
if((state_val_14443 === (12))){
var state_14442__$1 = state_14442;
var statearr_14468_16032 = state_14442__$1;
(statearr_14468_16032[(2)] = null);

(statearr_14468_16032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14443 === (2))){
var state_14442__$1 = state_14442;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14442__$1,(4),ch);
} else {
if((state_val_14443 === (11))){
var inst_14416 = (state_14442[(7)]);
var inst_14428 = (state_14442[(2)]);
var state_14442__$1 = state_14442;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14442__$1,(8),inst_14428,inst_14416);
} else {
if((state_val_14443 === (9))){
var state_14442__$1 = state_14442;
var statearr_14469_16034 = state_14442__$1;
(statearr_14469_16034[(2)] = tc);

(statearr_14469_16034[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14443 === (5))){
var inst_14421 = cljs.core.async.close_BANG_(tc);
var inst_14422 = cljs.core.async.close_BANG_(fc);
var state_14442__$1 = (function (){var statearr_14470 = state_14442;
(statearr_14470[(8)] = inst_14421);

return statearr_14470;
})();
var statearr_14471_16035 = state_14442__$1;
(statearr_14471_16035[(2)] = inst_14422);

(statearr_14471_16035[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14443 === (14))){
var inst_14435 = (state_14442[(2)]);
var state_14442__$1 = state_14442;
var statearr_14472_16036 = state_14442__$1;
(statearr_14472_16036[(2)] = inst_14435);

(statearr_14472_16036[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14443 === (10))){
var state_14442__$1 = state_14442;
var statearr_14473_16037 = state_14442__$1;
(statearr_14473_16037[(2)] = fc);

(statearr_14473_16037[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14443 === (8))){
var inst_14430 = (state_14442[(2)]);
var state_14442__$1 = state_14442;
if(cljs.core.truth_(inst_14430)){
var statearr_14475_16038 = state_14442__$1;
(statearr_14475_16038[(1)] = (12));

} else {
var statearr_14476_16039 = state_14442__$1;
(statearr_14476_16039[(1)] = (13));

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
var cljs$core$async$state_machine__13659__auto__ = null;
var cljs$core$async$state_machine__13659__auto____0 = (function (){
var statearr_14477 = [null,null,null,null,null,null,null,null,null];
(statearr_14477[(0)] = cljs$core$async$state_machine__13659__auto__);

(statearr_14477[(1)] = (1));

return statearr_14477;
});
var cljs$core$async$state_machine__13659__auto____1 = (function (state_14442){
while(true){
var ret_value__13660__auto__ = (function (){try{while(true){
var result__13661__auto__ = switch__13658__auto__(state_14442);
if(cljs.core.keyword_identical_QMARK_(result__13661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13661__auto__;
}
break;
}
}catch (e14478){var ex__13662__auto__ = e14478;
var statearr_14479_16040 = state_14442;
(statearr_14479_16040[(2)] = ex__13662__auto__);


if(cljs.core.seq((state_14442[(4)]))){
var statearr_14480_16041 = state_14442;
(statearr_14480_16041[(1)] = cljs.core.first((state_14442[(4)])));

} else {
throw ex__13662__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16042 = state_14442;
state_14442 = G__16042;
continue;
} else {
return ret_value__13660__auto__;
}
break;
}
});
cljs$core$async$state_machine__13659__auto__ = function(state_14442){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13659__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13659__auto____1.call(this,state_14442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13659__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13659__auto____0;
cljs$core$async$state_machine__13659__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13659__auto____1;
return cljs$core$async$state_machine__13659__auto__;
})()
})();
var state__13761__auto__ = (function (){var statearr_14483 = f__13760__auto__();
(statearr_14483[(6)] = c__13759__auto___16023);

return statearr_14483;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13761__auto__);
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
var c__13759__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13760__auto__ = (function (){var switch__13658__auto__ = (function (state_14522){
var state_val_14523 = (state_14522[(1)]);
if((state_val_14523 === (7))){
var inst_14516 = (state_14522[(2)]);
var state_14522__$1 = state_14522;
var statearr_14532_16043 = state_14522__$1;
(statearr_14532_16043[(2)] = inst_14516);

(statearr_14532_16043[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14523 === (1))){
var inst_14493 = init;
var inst_14494 = inst_14493;
var state_14522__$1 = (function (){var statearr_14534 = state_14522;
(statearr_14534[(7)] = inst_14494);

return statearr_14534;
})();
var statearr_14535_16044 = state_14522__$1;
(statearr_14535_16044[(2)] = null);

(statearr_14535_16044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14523 === (4))){
var inst_14497 = (state_14522[(8)]);
var inst_14497__$1 = (state_14522[(2)]);
var inst_14498 = (inst_14497__$1 == null);
var state_14522__$1 = (function (){var statearr_14537 = state_14522;
(statearr_14537[(8)] = inst_14497__$1);

return statearr_14537;
})();
if(cljs.core.truth_(inst_14498)){
var statearr_14538_16045 = state_14522__$1;
(statearr_14538_16045[(1)] = (5));

} else {
var statearr_14539_16046 = state_14522__$1;
(statearr_14539_16046[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14523 === (6))){
var inst_14506 = (state_14522[(9)]);
var inst_14494 = (state_14522[(7)]);
var inst_14497 = (state_14522[(8)]);
var inst_14506__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_14494,inst_14497) : f.call(null,inst_14494,inst_14497));
var inst_14508 = cljs.core.reduced_QMARK_(inst_14506__$1);
var state_14522__$1 = (function (){var statearr_14540 = state_14522;
(statearr_14540[(9)] = inst_14506__$1);

return statearr_14540;
})();
if(inst_14508){
var statearr_14541_16047 = state_14522__$1;
(statearr_14541_16047[(1)] = (8));

} else {
var statearr_14542_16048 = state_14522__$1;
(statearr_14542_16048[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14523 === (3))){
var inst_14518 = (state_14522[(2)]);
var state_14522__$1 = state_14522;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14522__$1,inst_14518);
} else {
if((state_val_14523 === (2))){
var state_14522__$1 = state_14522;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14522__$1,(4),ch);
} else {
if((state_val_14523 === (9))){
var inst_14506 = (state_14522[(9)]);
var inst_14494 = inst_14506;
var state_14522__$1 = (function (){var statearr_14543 = state_14522;
(statearr_14543[(7)] = inst_14494);

return statearr_14543;
})();
var statearr_14544_16050 = state_14522__$1;
(statearr_14544_16050[(2)] = null);

(statearr_14544_16050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14523 === (5))){
var inst_14494 = (state_14522[(7)]);
var state_14522__$1 = state_14522;
var statearr_14548_16052 = state_14522__$1;
(statearr_14548_16052[(2)] = inst_14494);

(statearr_14548_16052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14523 === (10))){
var inst_14514 = (state_14522[(2)]);
var state_14522__$1 = state_14522;
var statearr_14549_16053 = state_14522__$1;
(statearr_14549_16053[(2)] = inst_14514);

(statearr_14549_16053[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14523 === (8))){
var inst_14506 = (state_14522[(9)]);
var inst_14510 = cljs.core.deref(inst_14506);
var state_14522__$1 = state_14522;
var statearr_14550_16054 = state_14522__$1;
(statearr_14550_16054[(2)] = inst_14510);

(statearr_14550_16054[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__13659__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13659__auto____0 = (function (){
var statearr_14551 = [null,null,null,null,null,null,null,null,null,null];
(statearr_14551[(0)] = cljs$core$async$reduce_$_state_machine__13659__auto__);

(statearr_14551[(1)] = (1));

return statearr_14551;
});
var cljs$core$async$reduce_$_state_machine__13659__auto____1 = (function (state_14522){
while(true){
var ret_value__13660__auto__ = (function (){try{while(true){
var result__13661__auto__ = switch__13658__auto__(state_14522);
if(cljs.core.keyword_identical_QMARK_(result__13661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13661__auto__;
}
break;
}
}catch (e14552){var ex__13662__auto__ = e14552;
var statearr_14554_16055 = state_14522;
(statearr_14554_16055[(2)] = ex__13662__auto__);


if(cljs.core.seq((state_14522[(4)]))){
var statearr_14555_16056 = state_14522;
(statearr_14555_16056[(1)] = cljs.core.first((state_14522[(4)])));

} else {
throw ex__13662__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16057 = state_14522;
state_14522 = G__16057;
continue;
} else {
return ret_value__13660__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13659__auto__ = function(state_14522){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13659__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13659__auto____1.call(this,state_14522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13659__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13659__auto____0;
cljs$core$async$reduce_$_state_machine__13659__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13659__auto____1;
return cljs$core$async$reduce_$_state_machine__13659__auto__;
})()
})();
var state__13761__auto__ = (function (){var statearr_14557 = f__13760__auto__();
(statearr_14557[(6)] = c__13759__auto__);

return statearr_14557;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13761__auto__);
}));

return c__13759__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__13759__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13760__auto__ = (function (){var switch__13658__auto__ = (function (state_14565){
var state_val_14566 = (state_14565[(1)]);
if((state_val_14566 === (1))){
var inst_14560 = cljs.core.async.reduce(f__$1,init,ch);
var state_14565__$1 = state_14565;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14565__$1,(2),inst_14560);
} else {
if((state_val_14566 === (2))){
var inst_14562 = (state_14565[(2)]);
var inst_14563 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_14562) : f__$1.call(null,inst_14562));
var state_14565__$1 = state_14565;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14565__$1,inst_14563);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__13659__auto__ = null;
var cljs$core$async$transduce_$_state_machine__13659__auto____0 = (function (){
var statearr_14569 = [null,null,null,null,null,null,null];
(statearr_14569[(0)] = cljs$core$async$transduce_$_state_machine__13659__auto__);

(statearr_14569[(1)] = (1));

return statearr_14569;
});
var cljs$core$async$transduce_$_state_machine__13659__auto____1 = (function (state_14565){
while(true){
var ret_value__13660__auto__ = (function (){try{while(true){
var result__13661__auto__ = switch__13658__auto__(state_14565);
if(cljs.core.keyword_identical_QMARK_(result__13661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13661__auto__;
}
break;
}
}catch (e14570){var ex__13662__auto__ = e14570;
var statearr_14571_16061 = state_14565;
(statearr_14571_16061[(2)] = ex__13662__auto__);


if(cljs.core.seq((state_14565[(4)]))){
var statearr_14572_16062 = state_14565;
(statearr_14572_16062[(1)] = cljs.core.first((state_14565[(4)])));

} else {
throw ex__13662__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16063 = state_14565;
state_14565 = G__16063;
continue;
} else {
return ret_value__13660__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__13659__auto__ = function(state_14565){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__13659__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__13659__auto____1.call(this,state_14565);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__13659__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__13659__auto____0;
cljs$core$async$transduce_$_state_machine__13659__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__13659__auto____1;
return cljs$core$async$transduce_$_state_machine__13659__auto__;
})()
})();
var state__13761__auto__ = (function (){var statearr_14573 = f__13760__auto__();
(statearr_14573[(6)] = c__13759__auto__);

return statearr_14573;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13761__auto__);
}));

return c__13759__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__14575 = arguments.length;
switch (G__14575) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__13759__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13760__auto__ = (function (){var switch__13658__auto__ = (function (state_14602){
var state_val_14603 = (state_14602[(1)]);
if((state_val_14603 === (7))){
var inst_14584 = (state_14602[(2)]);
var state_14602__$1 = state_14602;
var statearr_14604_16065 = state_14602__$1;
(statearr_14604_16065[(2)] = inst_14584);

(statearr_14604_16065[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14603 === (1))){
var inst_14577 = cljs.core.seq(coll);
var inst_14578 = inst_14577;
var state_14602__$1 = (function (){var statearr_14605 = state_14602;
(statearr_14605[(7)] = inst_14578);

return statearr_14605;
})();
var statearr_14606_16066 = state_14602__$1;
(statearr_14606_16066[(2)] = null);

(statearr_14606_16066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14603 === (4))){
var inst_14578 = (state_14602[(7)]);
var inst_14582 = cljs.core.first(inst_14578);
var state_14602__$1 = state_14602;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14602__$1,(7),ch,inst_14582);
} else {
if((state_val_14603 === (13))){
var inst_14596 = (state_14602[(2)]);
var state_14602__$1 = state_14602;
var statearr_14607_16071 = state_14602__$1;
(statearr_14607_16071[(2)] = inst_14596);

(statearr_14607_16071[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14603 === (6))){
var inst_14587 = (state_14602[(2)]);
var state_14602__$1 = state_14602;
if(cljs.core.truth_(inst_14587)){
var statearr_14610_16072 = state_14602__$1;
(statearr_14610_16072[(1)] = (8));

} else {
var statearr_14611_16073 = state_14602__$1;
(statearr_14611_16073[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14603 === (3))){
var inst_14600 = (state_14602[(2)]);
var state_14602__$1 = state_14602;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14602__$1,inst_14600);
} else {
if((state_val_14603 === (12))){
var state_14602__$1 = state_14602;
var statearr_14612_16074 = state_14602__$1;
(statearr_14612_16074[(2)] = null);

(statearr_14612_16074[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14603 === (2))){
var inst_14578 = (state_14602[(7)]);
var state_14602__$1 = state_14602;
if(cljs.core.truth_(inst_14578)){
var statearr_14613_16075 = state_14602__$1;
(statearr_14613_16075[(1)] = (4));

} else {
var statearr_14614_16076 = state_14602__$1;
(statearr_14614_16076[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14603 === (11))){
var inst_14593 = cljs.core.async.close_BANG_(ch);
var state_14602__$1 = state_14602;
var statearr_14615_16077 = state_14602__$1;
(statearr_14615_16077[(2)] = inst_14593);

(statearr_14615_16077[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14603 === (9))){
var state_14602__$1 = state_14602;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14616_16078 = state_14602__$1;
(statearr_14616_16078[(1)] = (11));

} else {
var statearr_14617_16079 = state_14602__$1;
(statearr_14617_16079[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14603 === (5))){
var inst_14578 = (state_14602[(7)]);
var state_14602__$1 = state_14602;
var statearr_14620_16080 = state_14602__$1;
(statearr_14620_16080[(2)] = inst_14578);

(statearr_14620_16080[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14603 === (10))){
var inst_14598 = (state_14602[(2)]);
var state_14602__$1 = state_14602;
var statearr_14621_16081 = state_14602__$1;
(statearr_14621_16081[(2)] = inst_14598);

(statearr_14621_16081[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14603 === (8))){
var inst_14578 = (state_14602[(7)]);
var inst_14589 = cljs.core.next(inst_14578);
var inst_14578__$1 = inst_14589;
var state_14602__$1 = (function (){var statearr_14624 = state_14602;
(statearr_14624[(7)] = inst_14578__$1);

return statearr_14624;
})();
var statearr_14625_16082 = state_14602__$1;
(statearr_14625_16082[(2)] = null);

(statearr_14625_16082[(1)] = (2));


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
var cljs$core$async$state_machine__13659__auto__ = null;
var cljs$core$async$state_machine__13659__auto____0 = (function (){
var statearr_14626 = [null,null,null,null,null,null,null,null];
(statearr_14626[(0)] = cljs$core$async$state_machine__13659__auto__);

(statearr_14626[(1)] = (1));

return statearr_14626;
});
var cljs$core$async$state_machine__13659__auto____1 = (function (state_14602){
while(true){
var ret_value__13660__auto__ = (function (){try{while(true){
var result__13661__auto__ = switch__13658__auto__(state_14602);
if(cljs.core.keyword_identical_QMARK_(result__13661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13661__auto__;
}
break;
}
}catch (e14627){var ex__13662__auto__ = e14627;
var statearr_14628_16083 = state_14602;
(statearr_14628_16083[(2)] = ex__13662__auto__);


if(cljs.core.seq((state_14602[(4)]))){
var statearr_14629_16084 = state_14602;
(statearr_14629_16084[(1)] = cljs.core.first((state_14602[(4)])));

} else {
throw ex__13662__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16085 = state_14602;
state_14602 = G__16085;
continue;
} else {
return ret_value__13660__auto__;
}
break;
}
});
cljs$core$async$state_machine__13659__auto__ = function(state_14602){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13659__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13659__auto____1.call(this,state_14602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13659__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13659__auto____0;
cljs$core$async$state_machine__13659__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13659__auto____1;
return cljs$core$async$state_machine__13659__auto__;
})()
})();
var state__13761__auto__ = (function (){var statearr_14632 = f__13760__auto__();
(statearr_14632[(6)] = c__13759__auto__);

return statearr_14632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13761__auto__);
}));

return c__13759__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__14636 = arguments.length;
switch (G__14636) {
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
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_16087 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_16087(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_16088 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_16088(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_16089 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_16089(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_16091 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_16091(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14674 = (function (ch,cs,meta14675){
this.ch = ch;
this.cs = cs;
this.meta14675 = meta14675;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14674.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14676,meta14675__$1){
var self__ = this;
var _14676__$1 = this;
return (new cljs.core.async.t_cljs$core$async14674(self__.ch,self__.cs,meta14675__$1));
}));

(cljs.core.async.t_cljs$core$async14674.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14676){
var self__ = this;
var _14676__$1 = this;
return self__.meta14675;
}));

(cljs.core.async.t_cljs$core$async14674.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14674.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async14674.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14674.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async14674.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async14674.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async14674.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta14675","meta14675",1049189157,null)], null);
}));

(cljs.core.async.t_cljs$core$async14674.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14674.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14674");

(cljs.core.async.t_cljs$core$async14674.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async14674");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14674.
 */
cljs.core.async.__GT_t_cljs$core$async14674 = (function cljs$core$async$__GT_t_cljs$core$async14674(ch,cs,meta14675){
return (new cljs.core.async.t_cljs$core$async14674(ch,cs,meta14675));
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async14674(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__13759__auto___16093 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13760__auto__ = (function (){var switch__13658__auto__ = (function (state_14874){
var state_val_14878 = (state_14874[(1)]);
if((state_val_14878 === (7))){
var inst_14870 = (state_14874[(2)]);
var state_14874__$1 = state_14874;
var statearr_14885_16094 = state_14874__$1;
(statearr_14885_16094[(2)] = inst_14870);

(statearr_14885_16094[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14878 === (20))){
var inst_14739 = (state_14874[(7)]);
var inst_14763 = cljs.core.first(inst_14739);
var inst_14764 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14763,(0),null);
var inst_14765 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14763,(1),null);
var state_14874__$1 = (function (){var statearr_14886 = state_14874;
(statearr_14886[(8)] = inst_14764);

return statearr_14886;
})();
if(cljs.core.truth_(inst_14765)){
var statearr_14887_16095 = state_14874__$1;
(statearr_14887_16095[(1)] = (22));

} else {
var statearr_14888_16096 = state_14874__$1;
(statearr_14888_16096[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14878 === (27))){
var inst_14707 = (state_14874[(9)]);
var inst_14797 = (state_14874[(10)]);
var inst_14799 = (state_14874[(11)]);
var inst_14807 = (state_14874[(12)]);
var inst_14807__$1 = cljs.core._nth(inst_14797,inst_14799);
var inst_14808 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_14807__$1,inst_14707,done);
var state_14874__$1 = (function (){var statearr_14889 = state_14874;
(statearr_14889[(12)] = inst_14807__$1);

return statearr_14889;
})();
if(cljs.core.truth_(inst_14808)){
var statearr_14890_16097 = state_14874__$1;
(statearr_14890_16097[(1)] = (30));

} else {
var statearr_14891_16098 = state_14874__$1;
(statearr_14891_16098[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14878 === (1))){
var state_14874__$1 = state_14874;
var statearr_14892_16099 = state_14874__$1;
(statearr_14892_16099[(2)] = null);

(statearr_14892_16099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14878 === (24))){
var inst_14739 = (state_14874[(7)]);
var inst_14771 = (state_14874[(2)]);
var inst_14773 = cljs.core.next(inst_14739);
var inst_14716 = inst_14773;
var inst_14717 = null;
var inst_14718 = (0);
var inst_14719 = (0);
var state_14874__$1 = (function (){var statearr_14893 = state_14874;
(statearr_14893[(13)] = inst_14771);

(statearr_14893[(14)] = inst_14717);

(statearr_14893[(15)] = inst_14718);

(statearr_14893[(16)] = inst_14719);

(statearr_14893[(17)] = inst_14716);

return statearr_14893;
})();
var statearr_14894_16100 = state_14874__$1;
(statearr_14894_16100[(2)] = null);

(statearr_14894_16100[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14878 === (39))){
var state_14874__$1 = state_14874;
var statearr_14898_16101 = state_14874__$1;
(statearr_14898_16101[(2)] = null);

(statearr_14898_16101[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14878 === (4))){
var inst_14707 = (state_14874[(9)]);
var inst_14707__$1 = (state_14874[(2)]);
var inst_14708 = (inst_14707__$1 == null);
var state_14874__$1 = (function (){var statearr_14899 = state_14874;
(statearr_14899[(9)] = inst_14707__$1);

return statearr_14899;
})();
if(cljs.core.truth_(inst_14708)){
var statearr_14900_16102 = state_14874__$1;
(statearr_14900_16102[(1)] = (5));

} else {
var statearr_14901_16103 = state_14874__$1;
(statearr_14901_16103[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14878 === (15))){
var inst_14717 = (state_14874[(14)]);
var inst_14718 = (state_14874[(15)]);
var inst_14719 = (state_14874[(16)]);
var inst_14716 = (state_14874[(17)]);
var inst_14735 = (state_14874[(2)]);
var inst_14736 = (inst_14719 + (1));
var tmp14895 = inst_14717;
var tmp14896 = inst_14718;
var tmp14897 = inst_14716;
var inst_14716__$1 = tmp14897;
var inst_14717__$1 = tmp14895;
var inst_14718__$1 = tmp14896;
var inst_14719__$1 = inst_14736;
var state_14874__$1 = (function (){var statearr_14902 = state_14874;
(statearr_14902[(14)] = inst_14717__$1);

(statearr_14902[(15)] = inst_14718__$1);

(statearr_14902[(16)] = inst_14719__$1);

(statearr_14902[(18)] = inst_14735);

(statearr_14902[(17)] = inst_14716__$1);

return statearr_14902;
})();
var statearr_14903_16108 = state_14874__$1;
(statearr_14903_16108[(2)] = null);

(statearr_14903_16108[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14878 === (21))){
var inst_14777 = (state_14874[(2)]);
var state_14874__$1 = state_14874;
var statearr_14907_16112 = state_14874__$1;
(statearr_14907_16112[(2)] = inst_14777);

(statearr_14907_16112[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14878 === (31))){
var inst_14807 = (state_14874[(12)]);
var inst_14819 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_14807);
var state_14874__$1 = state_14874;
var statearr_14908_16113 = state_14874__$1;
(statearr_14908_16113[(2)] = inst_14819);

(statearr_14908_16113[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14878 === (32))){
var inst_14797 = (state_14874[(10)]);
var inst_14796 = (state_14874[(19)]);
var inst_14799 = (state_14874[(11)]);
var inst_14798 = (state_14874[(20)]);
var inst_14821 = (state_14874[(2)]);
var inst_14822 = (inst_14799 + (1));
var tmp14904 = inst_14797;
var tmp14905 = inst_14796;
var tmp14906 = inst_14798;
var inst_14796__$1 = tmp14905;
var inst_14797__$1 = tmp14904;
var inst_14798__$1 = tmp14906;
var inst_14799__$1 = inst_14822;
var state_14874__$1 = (function (){var statearr_14909 = state_14874;
(statearr_14909[(10)] = inst_14797__$1);

(statearr_14909[(19)] = inst_14796__$1);

(statearr_14909[(11)] = inst_14799__$1);

(statearr_14909[(21)] = inst_14821);

(statearr_14909[(20)] = inst_14798__$1);

return statearr_14909;
})();
var statearr_14910_16114 = state_14874__$1;
(statearr_14910_16114[(2)] = null);

(statearr_14910_16114[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14878 === (40))){
var inst_14837 = (state_14874[(22)]);
var inst_14841 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_14837);
var state_14874__$1 = state_14874;
var statearr_14911_16115 = state_14874__$1;
(statearr_14911_16115[(2)] = inst_14841);

(statearr_14911_16115[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14878 === (33))){
var inst_14825 = (state_14874[(23)]);
var inst_14830 = cljs.core.chunked_seq_QMARK_(inst_14825);
var state_14874__$1 = state_14874;
if(inst_14830){
var statearr_14912_16119 = state_14874__$1;
(statearr_14912_16119[(1)] = (36));

} else {
var statearr_14913_16120 = state_14874__$1;
(statearr_14913_16120[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14878 === (13))){
var inst_14729 = (state_14874[(24)]);
var inst_14732 = cljs.core.async.close_BANG_(inst_14729);
var state_14874__$1 = state_14874;
var statearr_14914_16121 = state_14874__$1;
(statearr_14914_16121[(2)] = inst_14732);

(statearr_14914_16121[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14878 === (22))){
var inst_14764 = (state_14874[(8)]);
var inst_14768 = cljs.core.async.close_BANG_(inst_14764);
var state_14874__$1 = state_14874;
var statearr_14915_16122 = state_14874__$1;
(statearr_14915_16122[(2)] = inst_14768);

(statearr_14915_16122[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14878 === (36))){
var inst_14825 = (state_14874[(23)]);
var inst_14832 = cljs.core.chunk_first(inst_14825);
var inst_14833 = cljs.core.chunk_rest(inst_14825);
var inst_14834 = cljs.core.count(inst_14832);
var inst_14796 = inst_14833;
var inst_14797 = inst_14832;
var inst_14798 = inst_14834;
var inst_14799 = (0);
var state_14874__$1 = (function (){var statearr_14916 = state_14874;
(statearr_14916[(10)] = inst_14797);

(statearr_14916[(19)] = inst_14796);

(statearr_14916[(11)] = inst_14799);

(statearr_14916[(20)] = inst_14798);

return statearr_14916;
})();
var statearr_14917_16129 = state_14874__$1;
(statearr_14917_16129[(2)] = null);

(statearr_14917_16129[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14878 === (41))){
var inst_14825 = (state_14874[(23)]);
var inst_14843 = (state_14874[(2)]);
var inst_14847 = cljs.core.next(inst_14825);
var inst_14796 = inst_14847;
var inst_14797 = null;
var inst_14798 = (0);
var inst_14799 = (0);
var state_14874__$1 = (function (){var statearr_14918 = state_14874;
(statearr_14918[(10)] = inst_14797);

(statearr_14918[(25)] = inst_14843);

(statearr_14918[(19)] = inst_14796);

(statearr_14918[(11)] = inst_14799);

(statearr_14918[(20)] = inst_14798);

return statearr_14918;
})();
var statearr_14919_16130 = state_14874__$1;
(statearr_14919_16130[(2)] = null);

(statearr_14919_16130[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14878 === (43))){
var state_14874__$1 = state_14874;
var statearr_14920_16131 = state_14874__$1;
(statearr_14920_16131[(2)] = null);

(statearr_14920_16131[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14878 === (29))){
var inst_14857 = (state_14874[(2)]);
var state_14874__$1 = state_14874;
var statearr_14921_16132 = state_14874__$1;
(statearr_14921_16132[(2)] = inst_14857);

(statearr_14921_16132[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14878 === (44))){
var inst_14867 = (state_14874[(2)]);
var state_14874__$1 = (function (){var statearr_14922 = state_14874;
(statearr_14922[(26)] = inst_14867);

return statearr_14922;
})();
var statearr_14923_16133 = state_14874__$1;
(statearr_14923_16133[(2)] = null);

(statearr_14923_16133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14878 === (6))){
var inst_14788 = (state_14874[(27)]);
var inst_14787 = cljs.core.deref(cs);
var inst_14788__$1 = cljs.core.keys(inst_14787);
var inst_14789 = cljs.core.count(inst_14788__$1);
var inst_14790 = cljs.core.reset_BANG_(dctr,inst_14789);
var inst_14795 = cljs.core.seq(inst_14788__$1);
var inst_14796 = inst_14795;
var inst_14797 = null;
var inst_14798 = (0);
var inst_14799 = (0);
var state_14874__$1 = (function (){var statearr_14924 = state_14874;
(statearr_14924[(10)] = inst_14797);

(statearr_14924[(19)] = inst_14796);

(statearr_14924[(11)] = inst_14799);

(statearr_14924[(28)] = inst_14790);

(statearr_14924[(20)] = inst_14798);

(statearr_14924[(27)] = inst_14788__$1);

return statearr_14924;
})();
var statearr_14925_16141 = state_14874__$1;
(statearr_14925_16141[(2)] = null);

(statearr_14925_16141[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14878 === (28))){
var inst_14825 = (state_14874[(23)]);
var inst_14796 = (state_14874[(19)]);
var inst_14825__$1 = cljs.core.seq(inst_14796);
var state_14874__$1 = (function (){var statearr_14929 = state_14874;
(statearr_14929[(23)] = inst_14825__$1);

return statearr_14929;
})();
if(inst_14825__$1){
var statearr_14931_16142 = state_14874__$1;
(statearr_14931_16142[(1)] = (33));

} else {
var statearr_14932_16143 = state_14874__$1;
(statearr_14932_16143[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14878 === (25))){
var inst_14799 = (state_14874[(11)]);
var inst_14798 = (state_14874[(20)]);
var inst_14803 = (inst_14799 < inst_14798);
var inst_14804 = inst_14803;
var state_14874__$1 = state_14874;
if(cljs.core.truth_(inst_14804)){
var statearr_14933_16144 = state_14874__$1;
(statearr_14933_16144[(1)] = (27));

} else {
var statearr_14934_16145 = state_14874__$1;
(statearr_14934_16145[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14878 === (34))){
var state_14874__$1 = state_14874;
var statearr_14935_16146 = state_14874__$1;
(statearr_14935_16146[(2)] = null);

(statearr_14935_16146[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14878 === (17))){
var state_14874__$1 = state_14874;
var statearr_14937_16147 = state_14874__$1;
(statearr_14937_16147[(2)] = null);

(statearr_14937_16147[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14878 === (3))){
var inst_14872 = (state_14874[(2)]);
var state_14874__$1 = state_14874;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14874__$1,inst_14872);
} else {
if((state_val_14878 === (12))){
var inst_14782 = (state_14874[(2)]);
var state_14874__$1 = state_14874;
var statearr_14940_16151 = state_14874__$1;
(statearr_14940_16151[(2)] = inst_14782);

(statearr_14940_16151[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14878 === (2))){
var state_14874__$1 = state_14874;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14874__$1,(4),ch);
} else {
if((state_val_14878 === (23))){
var state_14874__$1 = state_14874;
var statearr_14941_16152 = state_14874__$1;
(statearr_14941_16152[(2)] = null);

(statearr_14941_16152[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14878 === (35))){
var inst_14853 = (state_14874[(2)]);
var state_14874__$1 = state_14874;
var statearr_14944_16153 = state_14874__$1;
(statearr_14944_16153[(2)] = inst_14853);

(statearr_14944_16153[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14878 === (19))){
var inst_14739 = (state_14874[(7)]);
var inst_14755 = cljs.core.chunk_first(inst_14739);
var inst_14756 = cljs.core.chunk_rest(inst_14739);
var inst_14757 = cljs.core.count(inst_14755);
var inst_14716 = inst_14756;
var inst_14717 = inst_14755;
var inst_14718 = inst_14757;
var inst_14719 = (0);
var state_14874__$1 = (function (){var statearr_14946 = state_14874;
(statearr_14946[(14)] = inst_14717);

(statearr_14946[(15)] = inst_14718);

(statearr_14946[(16)] = inst_14719);

(statearr_14946[(17)] = inst_14716);

return statearr_14946;
})();
var statearr_14947_16157 = state_14874__$1;
(statearr_14947_16157[(2)] = null);

(statearr_14947_16157[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14878 === (11))){
var inst_14739 = (state_14874[(7)]);
var inst_14716 = (state_14874[(17)]);
var inst_14739__$1 = cljs.core.seq(inst_14716);
var state_14874__$1 = (function (){var statearr_14950 = state_14874;
(statearr_14950[(7)] = inst_14739__$1);

return statearr_14950;
})();
if(inst_14739__$1){
var statearr_14951_16158 = state_14874__$1;
(statearr_14951_16158[(1)] = (16));

} else {
var statearr_14952_16159 = state_14874__$1;
(statearr_14952_16159[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14878 === (9))){
var inst_14784 = (state_14874[(2)]);
var state_14874__$1 = state_14874;
var statearr_14953_16160 = state_14874__$1;
(statearr_14953_16160[(2)] = inst_14784);

(statearr_14953_16160[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14878 === (5))){
var inst_14714 = cljs.core.deref(cs);
var inst_14715 = cljs.core.seq(inst_14714);
var inst_14716 = inst_14715;
var inst_14717 = null;
var inst_14718 = (0);
var inst_14719 = (0);
var state_14874__$1 = (function (){var statearr_14954 = state_14874;
(statearr_14954[(14)] = inst_14717);

(statearr_14954[(15)] = inst_14718);

(statearr_14954[(16)] = inst_14719);

(statearr_14954[(17)] = inst_14716);

return statearr_14954;
})();
var statearr_14958_16161 = state_14874__$1;
(statearr_14958_16161[(2)] = null);

(statearr_14958_16161[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14878 === (14))){
var state_14874__$1 = state_14874;
var statearr_14959_16162 = state_14874__$1;
(statearr_14959_16162[(2)] = null);

(statearr_14959_16162[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14878 === (45))){
var inst_14864 = (state_14874[(2)]);
var state_14874__$1 = state_14874;
var statearr_14960_16166 = state_14874__$1;
(statearr_14960_16166[(2)] = inst_14864);

(statearr_14960_16166[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14878 === (26))){
var inst_14788 = (state_14874[(27)]);
var inst_14859 = (state_14874[(2)]);
var inst_14861 = cljs.core.seq(inst_14788);
var state_14874__$1 = (function (){var statearr_14961 = state_14874;
(statearr_14961[(29)] = inst_14859);

return statearr_14961;
})();
if(inst_14861){
var statearr_14962_16167 = state_14874__$1;
(statearr_14962_16167[(1)] = (42));

} else {
var statearr_14963_16168 = state_14874__$1;
(statearr_14963_16168[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14878 === (16))){
var inst_14739 = (state_14874[(7)]);
var inst_14749 = cljs.core.chunked_seq_QMARK_(inst_14739);
var state_14874__$1 = state_14874;
if(inst_14749){
var statearr_14966_16169 = state_14874__$1;
(statearr_14966_16169[(1)] = (19));

} else {
var statearr_14967_16170 = state_14874__$1;
(statearr_14967_16170[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14878 === (38))){
var inst_14850 = (state_14874[(2)]);
var state_14874__$1 = state_14874;
var statearr_14970_16171 = state_14874__$1;
(statearr_14970_16171[(2)] = inst_14850);

(statearr_14970_16171[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14878 === (30))){
var state_14874__$1 = state_14874;
var statearr_14972_16172 = state_14874__$1;
(statearr_14972_16172[(2)] = null);

(statearr_14972_16172[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14878 === (10))){
var inst_14717 = (state_14874[(14)]);
var inst_14719 = (state_14874[(16)]);
var inst_14728 = cljs.core._nth(inst_14717,inst_14719);
var inst_14729 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14728,(0),null);
var inst_14730 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14728,(1),null);
var state_14874__$1 = (function (){var statearr_14974 = state_14874;
(statearr_14974[(24)] = inst_14729);

return statearr_14974;
})();
if(cljs.core.truth_(inst_14730)){
var statearr_14975_16173 = state_14874__$1;
(statearr_14975_16173[(1)] = (13));

} else {
var statearr_14976_16174 = state_14874__$1;
(statearr_14976_16174[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14878 === (18))){
var inst_14780 = (state_14874[(2)]);
var state_14874__$1 = state_14874;
var statearr_14978_16175 = state_14874__$1;
(statearr_14978_16175[(2)] = inst_14780);

(statearr_14978_16175[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14878 === (42))){
var state_14874__$1 = state_14874;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14874__$1,(45),dchan);
} else {
if((state_val_14878 === (37))){
var inst_14707 = (state_14874[(9)]);
var inst_14825 = (state_14874[(23)]);
var inst_14837 = (state_14874[(22)]);
var inst_14837__$1 = cljs.core.first(inst_14825);
var inst_14838 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_14837__$1,inst_14707,done);
var state_14874__$1 = (function (){var statearr_14980 = state_14874;
(statearr_14980[(22)] = inst_14837__$1);

return statearr_14980;
})();
if(cljs.core.truth_(inst_14838)){
var statearr_14981_16177 = state_14874__$1;
(statearr_14981_16177[(1)] = (39));

} else {
var statearr_14984_16178 = state_14874__$1;
(statearr_14984_16178[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14878 === (8))){
var inst_14718 = (state_14874[(15)]);
var inst_14719 = (state_14874[(16)]);
var inst_14721 = (inst_14719 < inst_14718);
var inst_14722 = inst_14721;
var state_14874__$1 = state_14874;
if(cljs.core.truth_(inst_14722)){
var statearr_14986_16179 = state_14874__$1;
(statearr_14986_16179[(1)] = (10));

} else {
var statearr_14987_16180 = state_14874__$1;
(statearr_14987_16180[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__13659__auto__ = null;
var cljs$core$async$mult_$_state_machine__13659__auto____0 = (function (){
var statearr_15009 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15009[(0)] = cljs$core$async$mult_$_state_machine__13659__auto__);

(statearr_15009[(1)] = (1));

return statearr_15009;
});
var cljs$core$async$mult_$_state_machine__13659__auto____1 = (function (state_14874){
while(true){
var ret_value__13660__auto__ = (function (){try{while(true){
var result__13661__auto__ = switch__13658__auto__(state_14874);
if(cljs.core.keyword_identical_QMARK_(result__13661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13661__auto__;
}
break;
}
}catch (e15019){var ex__13662__auto__ = e15019;
var statearr_15025_16181 = state_14874;
(statearr_15025_16181[(2)] = ex__13662__auto__);


if(cljs.core.seq((state_14874[(4)]))){
var statearr_15032_16182 = state_14874;
(statearr_15032_16182[(1)] = cljs.core.first((state_14874[(4)])));

} else {
throw ex__13662__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16183 = state_14874;
state_14874 = G__16183;
continue;
} else {
return ret_value__13660__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13659__auto__ = function(state_14874){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13659__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13659__auto____1.call(this,state_14874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13659__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13659__auto____0;
cljs$core$async$mult_$_state_machine__13659__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13659__auto____1;
return cljs$core$async$mult_$_state_machine__13659__auto__;
})()
})();
var state__13761__auto__ = (function (){var statearr_15039 = f__13760__auto__();
(statearr_15039[(6)] = c__13759__auto___16093);

return statearr_15039;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13761__auto__);
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
var G__15045 = arguments.length;
switch (G__15045) {
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
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_16185 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_16185(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_16186 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_16186(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_16187 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_16187(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_16188 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_16188(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_16189 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_16189(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___16190 = arguments.length;
var i__5770__auto___16191 = (0);
while(true){
if((i__5770__auto___16191 < len__5769__auto___16190)){
args__5775__auto__.push((arguments[i__5770__auto___16191]));

var G__16192 = (i__5770__auto___16191 + (1));
i__5770__auto___16191 = G__16192;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__15075){
var map__15076 = p__15075;
var map__15076__$1 = cljs.core.__destructure_map(map__15076);
var opts = map__15076__$1;
var statearr_15077_16193 = state;
(statearr_15077_16193[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_15079_16194 = state;
(statearr_15079_16194[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_15081_16195 = state;
(statearr_15081_16195[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq15068){
var G__15069 = cljs.core.first(seq15068);
var seq15068__$1 = cljs.core.next(seq15068);
var G__15070 = cljs.core.first(seq15068__$1);
var seq15068__$2 = cljs.core.next(seq15068__$1);
var G__15071 = cljs.core.first(seq15068__$2);
var seq15068__$3 = cljs.core.next(seq15068__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15069,G__15070,G__15071,seq15068__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15087 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15088){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta15088 = meta15088;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15087.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15089,meta15088__$1){
var self__ = this;
var _15089__$1 = this;
return (new cljs.core.async.t_cljs$core$async15087(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta15088__$1));
}));

(cljs.core.async.t_cljs$core$async15087.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15089){
var self__ = this;
var _15089__$1 = this;
return self__.meta15088;
}));

(cljs.core.async.t_cljs$core$async15087.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15087.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async15087.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15087.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15087.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15087.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15087.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15087.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15087.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta15088","meta15088",-1034669387,null)], null);
}));

(cljs.core.async.t_cljs$core$async15087.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15087.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15087");

(cljs.core.async.t_cljs$core$async15087.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15087");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15087.
 */
cljs.core.async.__GT_t_cljs$core$async15087 = (function cljs$core$async$__GT_t_cljs$core$async15087(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15088){
return (new cljs.core.async.t_cljs$core$async15087(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15088));
});


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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async15087(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__13759__auto___16204 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13760__auto__ = (function (){var switch__13658__auto__ = (function (state_15157){
var state_val_15158 = (state_15157[(1)]);
if((state_val_15158 === (7))){
var inst_15117 = (state_15157[(2)]);
var state_15157__$1 = state_15157;
if(cljs.core.truth_(inst_15117)){
var statearr_15159_16205 = state_15157__$1;
(statearr_15159_16205[(1)] = (8));

} else {
var statearr_15160_16206 = state_15157__$1;
(statearr_15160_16206[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15158 === (20))){
var inst_15110 = (state_15157[(7)]);
var state_15157__$1 = state_15157;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15157__$1,(23),out,inst_15110);
} else {
if((state_val_15158 === (1))){
var inst_15093 = calc_state();
var inst_15094 = cljs.core.__destructure_map(inst_15093);
var inst_15095 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15094,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15096 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15094,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15097 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15094,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_15098 = inst_15093;
var state_15157__$1 = (function (){var statearr_15161 = state_15157;
(statearr_15161[(8)] = inst_15095);

(statearr_15161[(9)] = inst_15096);

(statearr_15161[(10)] = inst_15097);

(statearr_15161[(11)] = inst_15098);

return statearr_15161;
})();
var statearr_15162_16207 = state_15157__$1;
(statearr_15162_16207[(2)] = null);

(statearr_15162_16207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15158 === (24))){
var inst_15101 = (state_15157[(12)]);
var inst_15098 = inst_15101;
var state_15157__$1 = (function (){var statearr_15163 = state_15157;
(statearr_15163[(11)] = inst_15098);

return statearr_15163;
})();
var statearr_15164_16208 = state_15157__$1;
(statearr_15164_16208[(2)] = null);

(statearr_15164_16208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15158 === (4))){
var inst_15110 = (state_15157[(7)]);
var inst_15112 = (state_15157[(13)]);
var inst_15109 = (state_15157[(2)]);
var inst_15110__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15109,(0),null);
var inst_15111 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15109,(1),null);
var inst_15112__$1 = (inst_15110__$1 == null);
var state_15157__$1 = (function (){var statearr_15165 = state_15157;
(statearr_15165[(7)] = inst_15110__$1);

(statearr_15165[(14)] = inst_15111);

(statearr_15165[(13)] = inst_15112__$1);

return statearr_15165;
})();
if(cljs.core.truth_(inst_15112__$1)){
var statearr_15166_16209 = state_15157__$1;
(statearr_15166_16209[(1)] = (5));

} else {
var statearr_15167_16210 = state_15157__$1;
(statearr_15167_16210[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15158 === (15))){
var inst_15102 = (state_15157[(15)]);
var inst_15131 = (state_15157[(16)]);
var inst_15131__$1 = cljs.core.empty_QMARK_(inst_15102);
var state_15157__$1 = (function (){var statearr_15168 = state_15157;
(statearr_15168[(16)] = inst_15131__$1);

return statearr_15168;
})();
if(inst_15131__$1){
var statearr_15169_16211 = state_15157__$1;
(statearr_15169_16211[(1)] = (17));

} else {
var statearr_15170_16212 = state_15157__$1;
(statearr_15170_16212[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15158 === (21))){
var inst_15101 = (state_15157[(12)]);
var inst_15098 = inst_15101;
var state_15157__$1 = (function (){var statearr_15171 = state_15157;
(statearr_15171[(11)] = inst_15098);

return statearr_15171;
})();
var statearr_15172_16213 = state_15157__$1;
(statearr_15172_16213[(2)] = null);

(statearr_15172_16213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15158 === (13))){
var inst_15124 = (state_15157[(2)]);
var inst_15125 = calc_state();
var inst_15098 = inst_15125;
var state_15157__$1 = (function (){var statearr_15173 = state_15157;
(statearr_15173[(17)] = inst_15124);

(statearr_15173[(11)] = inst_15098);

return statearr_15173;
})();
var statearr_15174_16214 = state_15157__$1;
(statearr_15174_16214[(2)] = null);

(statearr_15174_16214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15158 === (22))){
var inst_15151 = (state_15157[(2)]);
var state_15157__$1 = state_15157;
var statearr_15175_16215 = state_15157__$1;
(statearr_15175_16215[(2)] = inst_15151);

(statearr_15175_16215[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15158 === (6))){
var inst_15111 = (state_15157[(14)]);
var inst_15115 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15111,change);
var state_15157__$1 = state_15157;
var statearr_15176_16216 = state_15157__$1;
(statearr_15176_16216[(2)] = inst_15115);

(statearr_15176_16216[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15158 === (25))){
var state_15157__$1 = state_15157;
var statearr_15177_16217 = state_15157__$1;
(statearr_15177_16217[(2)] = null);

(statearr_15177_16217[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15158 === (17))){
var inst_15103 = (state_15157[(18)]);
var inst_15111 = (state_15157[(14)]);
var inst_15133 = (inst_15103.cljs$core$IFn$_invoke$arity$1 ? inst_15103.cljs$core$IFn$_invoke$arity$1(inst_15111) : inst_15103.call(null,inst_15111));
var inst_15134 = cljs.core.not(inst_15133);
var state_15157__$1 = state_15157;
var statearr_15178_16219 = state_15157__$1;
(statearr_15178_16219[(2)] = inst_15134);

(statearr_15178_16219[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15158 === (3))){
var inst_15155 = (state_15157[(2)]);
var state_15157__$1 = state_15157;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15157__$1,inst_15155);
} else {
if((state_val_15158 === (12))){
var state_15157__$1 = state_15157;
var statearr_15179_16223 = state_15157__$1;
(statearr_15179_16223[(2)] = null);

(statearr_15179_16223[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15158 === (2))){
var inst_15101 = (state_15157[(12)]);
var inst_15098 = (state_15157[(11)]);
var inst_15101__$1 = cljs.core.__destructure_map(inst_15098);
var inst_15102 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15101__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15103 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15101__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15104 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15101__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_15157__$1 = (function (){var statearr_15181 = state_15157;
(statearr_15181[(15)] = inst_15102);

(statearr_15181[(18)] = inst_15103);

(statearr_15181[(12)] = inst_15101__$1);

return statearr_15181;
})();
return cljs.core.async.ioc_alts_BANG_(state_15157__$1,(4),inst_15104);
} else {
if((state_val_15158 === (23))){
var inst_15142 = (state_15157[(2)]);
var state_15157__$1 = state_15157;
if(cljs.core.truth_(inst_15142)){
var statearr_15182_16224 = state_15157__$1;
(statearr_15182_16224[(1)] = (24));

} else {
var statearr_15183_16225 = state_15157__$1;
(statearr_15183_16225[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15158 === (19))){
var inst_15137 = (state_15157[(2)]);
var state_15157__$1 = state_15157;
var statearr_15184_16226 = state_15157__$1;
(statearr_15184_16226[(2)] = inst_15137);

(statearr_15184_16226[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15158 === (11))){
var inst_15111 = (state_15157[(14)]);
var inst_15121 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_15111);
var state_15157__$1 = state_15157;
var statearr_15186_16229 = state_15157__$1;
(statearr_15186_16229[(2)] = inst_15121);

(statearr_15186_16229[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15158 === (9))){
var inst_15102 = (state_15157[(15)]);
var inst_15111 = (state_15157[(14)]);
var inst_15128 = (state_15157[(19)]);
var inst_15128__$1 = (inst_15102.cljs$core$IFn$_invoke$arity$1 ? inst_15102.cljs$core$IFn$_invoke$arity$1(inst_15111) : inst_15102.call(null,inst_15111));
var state_15157__$1 = (function (){var statearr_15187 = state_15157;
(statearr_15187[(19)] = inst_15128__$1);

return statearr_15187;
})();
if(cljs.core.truth_(inst_15128__$1)){
var statearr_15188_16230 = state_15157__$1;
(statearr_15188_16230[(1)] = (14));

} else {
var statearr_15189_16233 = state_15157__$1;
(statearr_15189_16233[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15158 === (5))){
var inst_15112 = (state_15157[(13)]);
var state_15157__$1 = state_15157;
var statearr_15190_16234 = state_15157__$1;
(statearr_15190_16234[(2)] = inst_15112);

(statearr_15190_16234[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15158 === (14))){
var inst_15128 = (state_15157[(19)]);
var state_15157__$1 = state_15157;
var statearr_15193_16235 = state_15157__$1;
(statearr_15193_16235[(2)] = inst_15128);

(statearr_15193_16235[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15158 === (26))){
var inst_15147 = (state_15157[(2)]);
var state_15157__$1 = state_15157;
var statearr_15198_16236 = state_15157__$1;
(statearr_15198_16236[(2)] = inst_15147);

(statearr_15198_16236[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15158 === (16))){
var inst_15139 = (state_15157[(2)]);
var state_15157__$1 = state_15157;
if(cljs.core.truth_(inst_15139)){
var statearr_15199_16237 = state_15157__$1;
(statearr_15199_16237[(1)] = (20));

} else {
var statearr_15200_16238 = state_15157__$1;
(statearr_15200_16238[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15158 === (10))){
var inst_15153 = (state_15157[(2)]);
var state_15157__$1 = state_15157;
var statearr_15203_16239 = state_15157__$1;
(statearr_15203_16239[(2)] = inst_15153);

(statearr_15203_16239[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15158 === (18))){
var inst_15131 = (state_15157[(16)]);
var state_15157__$1 = state_15157;
var statearr_15204_16243 = state_15157__$1;
(statearr_15204_16243[(2)] = inst_15131);

(statearr_15204_16243[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15158 === (8))){
var inst_15110 = (state_15157[(7)]);
var inst_15119 = (inst_15110 == null);
var state_15157__$1 = state_15157;
if(cljs.core.truth_(inst_15119)){
var statearr_15205_16244 = state_15157__$1;
(statearr_15205_16244[(1)] = (11));

} else {
var statearr_15206_16245 = state_15157__$1;
(statearr_15206_16245[(1)] = (12));

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
});
return (function() {
var cljs$core$async$mix_$_state_machine__13659__auto__ = null;
var cljs$core$async$mix_$_state_machine__13659__auto____0 = (function (){
var statearr_15216 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15216[(0)] = cljs$core$async$mix_$_state_machine__13659__auto__);

(statearr_15216[(1)] = (1));

return statearr_15216;
});
var cljs$core$async$mix_$_state_machine__13659__auto____1 = (function (state_15157){
while(true){
var ret_value__13660__auto__ = (function (){try{while(true){
var result__13661__auto__ = switch__13658__auto__(state_15157);
if(cljs.core.keyword_identical_QMARK_(result__13661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13661__auto__;
}
break;
}
}catch (e15222){var ex__13662__auto__ = e15222;
var statearr_15223_16250 = state_15157;
(statearr_15223_16250[(2)] = ex__13662__auto__);


if(cljs.core.seq((state_15157[(4)]))){
var statearr_15224_16257 = state_15157;
(statearr_15224_16257[(1)] = cljs.core.first((state_15157[(4)])));

} else {
throw ex__13662__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16258 = state_15157;
state_15157 = G__16258;
continue;
} else {
return ret_value__13660__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13659__auto__ = function(state_15157){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13659__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13659__auto____1.call(this,state_15157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13659__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13659__auto____0;
cljs$core$async$mix_$_state_machine__13659__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13659__auto____1;
return cljs$core$async$mix_$_state_machine__13659__auto__;
})()
})();
var state__13761__auto__ = (function (){var statearr_15225 = f__13760__auto__();
(statearr_15225[(6)] = c__13759__auto___16204);

return statearr_15225;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13761__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
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
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_16259 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_16259(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_16260 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_16260(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_16261 = (function() {
var G__16262 = null;
var G__16262__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__16262__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__16262 = function(p,v){
switch(arguments.length){
case 1:
return G__16262__1.call(this,p);
case 2:
return G__16262__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__16262.cljs$core$IFn$_invoke$arity$1 = G__16262__1;
G__16262.cljs$core$IFn$_invoke$arity$2 = G__16262__2;
return G__16262;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__15232 = arguments.length;
switch (G__15232) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_16261(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_16261(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15236 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta15237){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta15237 = meta15237;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15236.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15238,meta15237__$1){
var self__ = this;
var _15238__$1 = this;
return (new cljs.core.async.t_cljs$core$async15236(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta15237__$1));
}));

(cljs.core.async.t_cljs$core$async15236.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15238){
var self__ = this;
var _15238__$1 = this;
return self__.meta15237;
}));

(cljs.core.async.t_cljs$core$async15236.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15236.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15236.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15236.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async15236.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async15236.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async15236.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async15236.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta15237","meta15237",-225877325,null)], null);
}));

(cljs.core.async.t_cljs$core$async15236.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15236.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15236");

(cljs.core.async.t_cljs$core$async15236.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15236");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15236.
 */
cljs.core.async.__GT_t_cljs$core$async15236 = (function cljs$core$async$__GT_t_cljs$core$async15236(ch,topic_fn,buf_fn,mults,ensure_mult,meta15237){
return (new cljs.core.async.t_cljs$core$async15236(ch,topic_fn,buf_fn,mults,ensure_mult,meta15237));
});


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
var G__15235 = arguments.length;
switch (G__15235) {
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
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__15233_SHARP_){
if(cljs.core.truth_((p1__15233_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__15233_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__15233_SHARP_.call(null,topic)))){
return p1__15233_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__15233_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async15236(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__13759__auto___16271 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13760__auto__ = (function (){var switch__13658__auto__ = (function (state_15310){
var state_val_15311 = (state_15310[(1)]);
if((state_val_15311 === (7))){
var inst_15306 = (state_15310[(2)]);
var state_15310__$1 = state_15310;
var statearr_15312_16272 = state_15310__$1;
(statearr_15312_16272[(2)] = inst_15306);

(statearr_15312_16272[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15311 === (20))){
var state_15310__$1 = state_15310;
var statearr_15313_16273 = state_15310__$1;
(statearr_15313_16273[(2)] = null);

(statearr_15313_16273[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15311 === (1))){
var state_15310__$1 = state_15310;
var statearr_15314_16274 = state_15310__$1;
(statearr_15314_16274[(2)] = null);

(statearr_15314_16274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15311 === (24))){
var inst_15289 = (state_15310[(7)]);
var inst_15298 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_15289);
var state_15310__$1 = state_15310;
var statearr_15315_16275 = state_15310__$1;
(statearr_15315_16275[(2)] = inst_15298);

(statearr_15315_16275[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15311 === (4))){
var inst_15241 = (state_15310[(8)]);
var inst_15241__$1 = (state_15310[(2)]);
var inst_15242 = (inst_15241__$1 == null);
var state_15310__$1 = (function (){var statearr_15316 = state_15310;
(statearr_15316[(8)] = inst_15241__$1);

return statearr_15316;
})();
if(cljs.core.truth_(inst_15242)){
var statearr_15317_16276 = state_15310__$1;
(statearr_15317_16276[(1)] = (5));

} else {
var statearr_15318_16277 = state_15310__$1;
(statearr_15318_16277[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15311 === (15))){
var inst_15283 = (state_15310[(2)]);
var state_15310__$1 = state_15310;
var statearr_15319_16278 = state_15310__$1;
(statearr_15319_16278[(2)] = inst_15283);

(statearr_15319_16278[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15311 === (21))){
var inst_15303 = (state_15310[(2)]);
var state_15310__$1 = (function (){var statearr_15320 = state_15310;
(statearr_15320[(9)] = inst_15303);

return statearr_15320;
})();
var statearr_15321_16285 = state_15310__$1;
(statearr_15321_16285[(2)] = null);

(statearr_15321_16285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15311 === (13))){
var inst_15265 = (state_15310[(10)]);
var inst_15267 = cljs.core.chunked_seq_QMARK_(inst_15265);
var state_15310__$1 = state_15310;
if(inst_15267){
var statearr_15322_16286 = state_15310__$1;
(statearr_15322_16286[(1)] = (16));

} else {
var statearr_15323_16287 = state_15310__$1;
(statearr_15323_16287[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15311 === (22))){
var inst_15295 = (state_15310[(2)]);
var state_15310__$1 = state_15310;
if(cljs.core.truth_(inst_15295)){
var statearr_15324_16288 = state_15310__$1;
(statearr_15324_16288[(1)] = (23));

} else {
var statearr_15325_16289 = state_15310__$1;
(statearr_15325_16289[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15311 === (6))){
var inst_15289 = (state_15310[(7)]);
var inst_15291 = (state_15310[(11)]);
var inst_15241 = (state_15310[(8)]);
var inst_15289__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_15241) : topic_fn.call(null,inst_15241));
var inst_15290 = cljs.core.deref(mults);
var inst_15291__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15290,inst_15289__$1);
var state_15310__$1 = (function (){var statearr_15326 = state_15310;
(statearr_15326[(7)] = inst_15289__$1);

(statearr_15326[(11)] = inst_15291__$1);

return statearr_15326;
})();
if(cljs.core.truth_(inst_15291__$1)){
var statearr_15327_16290 = state_15310__$1;
(statearr_15327_16290[(1)] = (19));

} else {
var statearr_15328_16291 = state_15310__$1;
(statearr_15328_16291[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15311 === (25))){
var inst_15300 = (state_15310[(2)]);
var state_15310__$1 = state_15310;
var statearr_15329_16292 = state_15310__$1;
(statearr_15329_16292[(2)] = inst_15300);

(statearr_15329_16292[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15311 === (17))){
var inst_15265 = (state_15310[(10)]);
var inst_15274 = cljs.core.first(inst_15265);
var inst_15275 = cljs.core.async.muxch_STAR_(inst_15274);
var inst_15276 = cljs.core.async.close_BANG_(inst_15275);
var inst_15277 = cljs.core.next(inst_15265);
var inst_15251 = inst_15277;
var inst_15252 = null;
var inst_15253 = (0);
var inst_15254 = (0);
var state_15310__$1 = (function (){var statearr_15330 = state_15310;
(statearr_15330[(12)] = inst_15252);

(statearr_15330[(13)] = inst_15276);

(statearr_15330[(14)] = inst_15253);

(statearr_15330[(15)] = inst_15251);

(statearr_15330[(16)] = inst_15254);

return statearr_15330;
})();
var statearr_15331_16293 = state_15310__$1;
(statearr_15331_16293[(2)] = null);

(statearr_15331_16293[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15311 === (3))){
var inst_15308 = (state_15310[(2)]);
var state_15310__$1 = state_15310;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15310__$1,inst_15308);
} else {
if((state_val_15311 === (12))){
var inst_15285 = (state_15310[(2)]);
var state_15310__$1 = state_15310;
var statearr_15332_16294 = state_15310__$1;
(statearr_15332_16294[(2)] = inst_15285);

(statearr_15332_16294[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15311 === (2))){
var state_15310__$1 = state_15310;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15310__$1,(4),ch);
} else {
if((state_val_15311 === (23))){
var state_15310__$1 = state_15310;
var statearr_15333_16295 = state_15310__$1;
(statearr_15333_16295[(2)] = null);

(statearr_15333_16295[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15311 === (19))){
var inst_15291 = (state_15310[(11)]);
var inst_15241 = (state_15310[(8)]);
var inst_15293 = cljs.core.async.muxch_STAR_(inst_15291);
var state_15310__$1 = state_15310;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15310__$1,(22),inst_15293,inst_15241);
} else {
if((state_val_15311 === (11))){
var inst_15265 = (state_15310[(10)]);
var inst_15251 = (state_15310[(15)]);
var inst_15265__$1 = cljs.core.seq(inst_15251);
var state_15310__$1 = (function (){var statearr_15334 = state_15310;
(statearr_15334[(10)] = inst_15265__$1);

return statearr_15334;
})();
if(inst_15265__$1){
var statearr_15335_16296 = state_15310__$1;
(statearr_15335_16296[(1)] = (13));

} else {
var statearr_15336_16297 = state_15310__$1;
(statearr_15336_16297[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15311 === (9))){
var inst_15287 = (state_15310[(2)]);
var state_15310__$1 = state_15310;
var statearr_15337_16298 = state_15310__$1;
(statearr_15337_16298[(2)] = inst_15287);

(statearr_15337_16298[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15311 === (5))){
var inst_15248 = cljs.core.deref(mults);
var inst_15249 = cljs.core.vals(inst_15248);
var inst_15250 = cljs.core.seq(inst_15249);
var inst_15251 = inst_15250;
var inst_15252 = null;
var inst_15253 = (0);
var inst_15254 = (0);
var state_15310__$1 = (function (){var statearr_15338 = state_15310;
(statearr_15338[(12)] = inst_15252);

(statearr_15338[(14)] = inst_15253);

(statearr_15338[(15)] = inst_15251);

(statearr_15338[(16)] = inst_15254);

return statearr_15338;
})();
var statearr_15339_16299 = state_15310__$1;
(statearr_15339_16299[(2)] = null);

(statearr_15339_16299[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15311 === (14))){
var state_15310__$1 = state_15310;
var statearr_15343_16300 = state_15310__$1;
(statearr_15343_16300[(2)] = null);

(statearr_15343_16300[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15311 === (16))){
var inst_15265 = (state_15310[(10)]);
var inst_15269 = cljs.core.chunk_first(inst_15265);
var inst_15270 = cljs.core.chunk_rest(inst_15265);
var inst_15271 = cljs.core.count(inst_15269);
var inst_15251 = inst_15270;
var inst_15252 = inst_15269;
var inst_15253 = inst_15271;
var inst_15254 = (0);
var state_15310__$1 = (function (){var statearr_15344 = state_15310;
(statearr_15344[(12)] = inst_15252);

(statearr_15344[(14)] = inst_15253);

(statearr_15344[(15)] = inst_15251);

(statearr_15344[(16)] = inst_15254);

return statearr_15344;
})();
var statearr_15345_16301 = state_15310__$1;
(statearr_15345_16301[(2)] = null);

(statearr_15345_16301[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15311 === (10))){
var inst_15252 = (state_15310[(12)]);
var inst_15253 = (state_15310[(14)]);
var inst_15251 = (state_15310[(15)]);
var inst_15254 = (state_15310[(16)]);
var inst_15259 = cljs.core._nth(inst_15252,inst_15254);
var inst_15260 = cljs.core.async.muxch_STAR_(inst_15259);
var inst_15261 = cljs.core.async.close_BANG_(inst_15260);
var inst_15262 = (inst_15254 + (1));
var tmp15340 = inst_15252;
var tmp15341 = inst_15253;
var tmp15342 = inst_15251;
var inst_15251__$1 = tmp15342;
var inst_15252__$1 = tmp15340;
var inst_15253__$1 = tmp15341;
var inst_15254__$1 = inst_15262;
var state_15310__$1 = (function (){var statearr_15346 = state_15310;
(statearr_15346[(12)] = inst_15252__$1);

(statearr_15346[(14)] = inst_15253__$1);

(statearr_15346[(15)] = inst_15251__$1);

(statearr_15346[(17)] = inst_15261);

(statearr_15346[(16)] = inst_15254__$1);

return statearr_15346;
})();
var statearr_15347_16308 = state_15310__$1;
(statearr_15347_16308[(2)] = null);

(statearr_15347_16308[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15311 === (18))){
var inst_15280 = (state_15310[(2)]);
var state_15310__$1 = state_15310;
var statearr_15348_16309 = state_15310__$1;
(statearr_15348_16309[(2)] = inst_15280);

(statearr_15348_16309[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15311 === (8))){
var inst_15253 = (state_15310[(14)]);
var inst_15254 = (state_15310[(16)]);
var inst_15256 = (inst_15254 < inst_15253);
var inst_15257 = inst_15256;
var state_15310__$1 = state_15310;
if(cljs.core.truth_(inst_15257)){
var statearr_15349_16310 = state_15310__$1;
(statearr_15349_16310[(1)] = (10));

} else {
var statearr_15350_16311 = state_15310__$1;
(statearr_15350_16311[(1)] = (11));

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
var cljs$core$async$state_machine__13659__auto__ = null;
var cljs$core$async$state_machine__13659__auto____0 = (function (){
var statearr_15351 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15351[(0)] = cljs$core$async$state_machine__13659__auto__);

(statearr_15351[(1)] = (1));

return statearr_15351;
});
var cljs$core$async$state_machine__13659__auto____1 = (function (state_15310){
while(true){
var ret_value__13660__auto__ = (function (){try{while(true){
var result__13661__auto__ = switch__13658__auto__(state_15310);
if(cljs.core.keyword_identical_QMARK_(result__13661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13661__auto__;
}
break;
}
}catch (e15352){var ex__13662__auto__ = e15352;
var statearr_15353_16312 = state_15310;
(statearr_15353_16312[(2)] = ex__13662__auto__);


if(cljs.core.seq((state_15310[(4)]))){
var statearr_15354_16313 = state_15310;
(statearr_15354_16313[(1)] = cljs.core.first((state_15310[(4)])));

} else {
throw ex__13662__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16314 = state_15310;
state_15310 = G__16314;
continue;
} else {
return ret_value__13660__auto__;
}
break;
}
});
cljs$core$async$state_machine__13659__auto__ = function(state_15310){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13659__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13659__auto____1.call(this,state_15310);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13659__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13659__auto____0;
cljs$core$async$state_machine__13659__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13659__auto____1;
return cljs$core$async$state_machine__13659__auto__;
})()
})();
var state__13761__auto__ = (function (){var statearr_15355 = f__13760__auto__();
(statearr_15355[(6)] = c__13759__auto___16271);

return statearr_15355;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13761__auto__);
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
var G__15357 = arguments.length;
switch (G__15357) {
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
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__15359 = arguments.length;
switch (G__15359) {
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
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
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
var G__15361 = arguments.length;
switch (G__15361) {
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
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__13759__auto___16318 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13760__auto__ = (function (){var switch__13658__auto__ = (function (state_15404){
var state_val_15405 = (state_15404[(1)]);
if((state_val_15405 === (7))){
var state_15404__$1 = state_15404;
var statearr_15406_16319 = state_15404__$1;
(statearr_15406_16319[(2)] = null);

(statearr_15406_16319[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15405 === (1))){
var state_15404__$1 = state_15404;
var statearr_15407_16320 = state_15404__$1;
(statearr_15407_16320[(2)] = null);

(statearr_15407_16320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15405 === (4))){
var inst_15365 = (state_15404[(7)]);
var inst_15364 = (state_15404[(8)]);
var inst_15367 = (inst_15365 < inst_15364);
var state_15404__$1 = state_15404;
if(cljs.core.truth_(inst_15367)){
var statearr_15408_16321 = state_15404__$1;
(statearr_15408_16321[(1)] = (6));

} else {
var statearr_15409_16322 = state_15404__$1;
(statearr_15409_16322[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15405 === (15))){
var inst_15390 = (state_15404[(9)]);
var inst_15395 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_15390);
var state_15404__$1 = state_15404;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15404__$1,(17),out,inst_15395);
} else {
if((state_val_15405 === (13))){
var inst_15390 = (state_15404[(9)]);
var inst_15390__$1 = (state_15404[(2)]);
var inst_15391 = cljs.core.some(cljs.core.nil_QMARK_,inst_15390__$1);
var state_15404__$1 = (function (){var statearr_15410 = state_15404;
(statearr_15410[(9)] = inst_15390__$1);

return statearr_15410;
})();
if(cljs.core.truth_(inst_15391)){
var statearr_15411_16323 = state_15404__$1;
(statearr_15411_16323[(1)] = (14));

} else {
var statearr_15412_16324 = state_15404__$1;
(statearr_15412_16324[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15405 === (6))){
var state_15404__$1 = state_15404;
var statearr_15413_16325 = state_15404__$1;
(statearr_15413_16325[(2)] = null);

(statearr_15413_16325[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15405 === (17))){
var inst_15397 = (state_15404[(2)]);
var state_15404__$1 = (function (){var statearr_15415 = state_15404;
(statearr_15415[(10)] = inst_15397);

return statearr_15415;
})();
var statearr_15416_16326 = state_15404__$1;
(statearr_15416_16326[(2)] = null);

(statearr_15416_16326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15405 === (3))){
var inst_15402 = (state_15404[(2)]);
var state_15404__$1 = state_15404;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15404__$1,inst_15402);
} else {
if((state_val_15405 === (12))){
var _ = (function (){var statearr_15417 = state_15404;
(statearr_15417[(4)] = cljs.core.rest((state_15404[(4)])));

return statearr_15417;
})();
var state_15404__$1 = state_15404;
var ex15414 = (state_15404__$1[(2)]);
var statearr_15418_16327 = state_15404__$1;
(statearr_15418_16327[(5)] = ex15414);


if((ex15414 instanceof Object)){
var statearr_15419_16328 = state_15404__$1;
(statearr_15419_16328[(1)] = (11));

(statearr_15419_16328[(5)] = null);

} else {
throw ex15414;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15405 === (2))){
var inst_15363 = cljs.core.reset_BANG_(dctr,cnt);
var inst_15364 = cnt;
var inst_15365 = (0);
var state_15404__$1 = (function (){var statearr_15420 = state_15404;
(statearr_15420[(11)] = inst_15363);

(statearr_15420[(7)] = inst_15365);

(statearr_15420[(8)] = inst_15364);

return statearr_15420;
})();
var statearr_15421_16329 = state_15404__$1;
(statearr_15421_16329[(2)] = null);

(statearr_15421_16329[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15405 === (11))){
var inst_15369 = (state_15404[(2)]);
var inst_15370 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_15404__$1 = (function (){var statearr_15422 = state_15404;
(statearr_15422[(12)] = inst_15369);

return statearr_15422;
})();
var statearr_15423_16330 = state_15404__$1;
(statearr_15423_16330[(2)] = inst_15370);

(statearr_15423_16330[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15405 === (9))){
var inst_15365 = (state_15404[(7)]);
var _ = (function (){var statearr_15424 = state_15404;
(statearr_15424[(4)] = cljs.core.cons((12),(state_15404[(4)])));

return statearr_15424;
})();
var inst_15376 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_15365) : chs__$1.call(null,inst_15365));
var inst_15377 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_15365) : done.call(null,inst_15365));
var inst_15378 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_15376,inst_15377);
var ___$1 = (function (){var statearr_15425 = state_15404;
(statearr_15425[(4)] = cljs.core.rest((state_15404[(4)])));

return statearr_15425;
})();
var state_15404__$1 = state_15404;
var statearr_15426_16331 = state_15404__$1;
(statearr_15426_16331[(2)] = inst_15378);

(statearr_15426_16331[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15405 === (5))){
var inst_15388 = (state_15404[(2)]);
var state_15404__$1 = (function (){var statearr_15427 = state_15404;
(statearr_15427[(13)] = inst_15388);

return statearr_15427;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15404__$1,(13),dchan);
} else {
if((state_val_15405 === (14))){
var inst_15393 = cljs.core.async.close_BANG_(out);
var state_15404__$1 = state_15404;
var statearr_15428_16332 = state_15404__$1;
(statearr_15428_16332[(2)] = inst_15393);

(statearr_15428_16332[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15405 === (16))){
var inst_15400 = (state_15404[(2)]);
var state_15404__$1 = state_15404;
var statearr_15429_16333 = state_15404__$1;
(statearr_15429_16333[(2)] = inst_15400);

(statearr_15429_16333[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15405 === (10))){
var inst_15365 = (state_15404[(7)]);
var inst_15381 = (state_15404[(2)]);
var inst_15382 = (inst_15365 + (1));
var inst_15365__$1 = inst_15382;
var state_15404__$1 = (function (){var statearr_15430 = state_15404;
(statearr_15430[(14)] = inst_15381);

(statearr_15430[(7)] = inst_15365__$1);

return statearr_15430;
})();
var statearr_15431_16334 = state_15404__$1;
(statearr_15431_16334[(2)] = null);

(statearr_15431_16334[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15405 === (8))){
var inst_15386 = (state_15404[(2)]);
var state_15404__$1 = state_15404;
var statearr_15432_16335 = state_15404__$1;
(statearr_15432_16335[(2)] = inst_15386);

(statearr_15432_16335[(1)] = (5));


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
var cljs$core$async$state_machine__13659__auto__ = null;
var cljs$core$async$state_machine__13659__auto____0 = (function (){
var statearr_15433 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15433[(0)] = cljs$core$async$state_machine__13659__auto__);

(statearr_15433[(1)] = (1));

return statearr_15433;
});
var cljs$core$async$state_machine__13659__auto____1 = (function (state_15404){
while(true){
var ret_value__13660__auto__ = (function (){try{while(true){
var result__13661__auto__ = switch__13658__auto__(state_15404);
if(cljs.core.keyword_identical_QMARK_(result__13661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13661__auto__;
}
break;
}
}catch (e15434){var ex__13662__auto__ = e15434;
var statearr_15435_16336 = state_15404;
(statearr_15435_16336[(2)] = ex__13662__auto__);


if(cljs.core.seq((state_15404[(4)]))){
var statearr_15436_16338 = state_15404;
(statearr_15436_16338[(1)] = cljs.core.first((state_15404[(4)])));

} else {
throw ex__13662__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16339 = state_15404;
state_15404 = G__16339;
continue;
} else {
return ret_value__13660__auto__;
}
break;
}
});
cljs$core$async$state_machine__13659__auto__ = function(state_15404){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13659__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13659__auto____1.call(this,state_15404);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13659__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13659__auto____0;
cljs$core$async$state_machine__13659__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13659__auto____1;
return cljs$core$async$state_machine__13659__auto__;
})()
})();
var state__13761__auto__ = (function (){var statearr_15437 = f__13760__auto__();
(statearr_15437[(6)] = c__13759__auto___16318);

return statearr_15437;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13761__auto__);
}));

}

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
var G__15440 = arguments.length;
switch (G__15440) {
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
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13759__auto___16345 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13760__auto__ = (function (){var switch__13658__auto__ = (function (state_15472){
var state_val_15473 = (state_15472[(1)]);
if((state_val_15473 === (7))){
var inst_15451 = (state_15472[(7)]);
var inst_15452 = (state_15472[(8)]);
var inst_15451__$1 = (state_15472[(2)]);
var inst_15452__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15451__$1,(0),null);
var inst_15453 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15451__$1,(1),null);
var inst_15454 = (inst_15452__$1 == null);
var state_15472__$1 = (function (){var statearr_15474 = state_15472;
(statearr_15474[(9)] = inst_15453);

(statearr_15474[(7)] = inst_15451__$1);

(statearr_15474[(8)] = inst_15452__$1);

return statearr_15474;
})();
if(cljs.core.truth_(inst_15454)){
var statearr_15475_16346 = state_15472__$1;
(statearr_15475_16346[(1)] = (8));

} else {
var statearr_15476_16347 = state_15472__$1;
(statearr_15476_16347[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15473 === (1))){
var inst_15441 = cljs.core.vec(chs);
var inst_15442 = inst_15441;
var state_15472__$1 = (function (){var statearr_15477 = state_15472;
(statearr_15477[(10)] = inst_15442);

return statearr_15477;
})();
var statearr_15478_16348 = state_15472__$1;
(statearr_15478_16348[(2)] = null);

(statearr_15478_16348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15473 === (4))){
var inst_15442 = (state_15472[(10)]);
var state_15472__$1 = state_15472;
return cljs.core.async.ioc_alts_BANG_(state_15472__$1,(7),inst_15442);
} else {
if((state_val_15473 === (6))){
var inst_15468 = (state_15472[(2)]);
var state_15472__$1 = state_15472;
var statearr_15479_16349 = state_15472__$1;
(statearr_15479_16349[(2)] = inst_15468);

(statearr_15479_16349[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15473 === (3))){
var inst_15470 = (state_15472[(2)]);
var state_15472__$1 = state_15472;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15472__$1,inst_15470);
} else {
if((state_val_15473 === (2))){
var inst_15442 = (state_15472[(10)]);
var inst_15444 = cljs.core.count(inst_15442);
var inst_15445 = (inst_15444 > (0));
var state_15472__$1 = state_15472;
if(cljs.core.truth_(inst_15445)){
var statearr_15481_16350 = state_15472__$1;
(statearr_15481_16350[(1)] = (4));

} else {
var statearr_15482_16351 = state_15472__$1;
(statearr_15482_16351[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15473 === (11))){
var inst_15442 = (state_15472[(10)]);
var inst_15461 = (state_15472[(2)]);
var tmp15480 = inst_15442;
var inst_15442__$1 = tmp15480;
var state_15472__$1 = (function (){var statearr_15483 = state_15472;
(statearr_15483[(10)] = inst_15442__$1);

(statearr_15483[(11)] = inst_15461);

return statearr_15483;
})();
var statearr_15484_16352 = state_15472__$1;
(statearr_15484_16352[(2)] = null);

(statearr_15484_16352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15473 === (9))){
var inst_15452 = (state_15472[(8)]);
var state_15472__$1 = state_15472;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15472__$1,(11),out,inst_15452);
} else {
if((state_val_15473 === (5))){
var inst_15466 = cljs.core.async.close_BANG_(out);
var state_15472__$1 = state_15472;
var statearr_15485_16353 = state_15472__$1;
(statearr_15485_16353[(2)] = inst_15466);

(statearr_15485_16353[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15473 === (10))){
var inst_15464 = (state_15472[(2)]);
var state_15472__$1 = state_15472;
var statearr_15486_16354 = state_15472__$1;
(statearr_15486_16354[(2)] = inst_15464);

(statearr_15486_16354[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15473 === (8))){
var inst_15453 = (state_15472[(9)]);
var inst_15442 = (state_15472[(10)]);
var inst_15451 = (state_15472[(7)]);
var inst_15452 = (state_15472[(8)]);
var inst_15456 = (function (){var cs = inst_15442;
var vec__15447 = inst_15451;
var v = inst_15452;
var c = inst_15453;
return (function (p1__15438_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__15438_SHARP_);
});
})();
var inst_15457 = cljs.core.filterv(inst_15456,inst_15442);
var inst_15442__$1 = inst_15457;
var state_15472__$1 = (function (){var statearr_15487 = state_15472;
(statearr_15487[(10)] = inst_15442__$1);

return statearr_15487;
})();
var statearr_15488_16355 = state_15472__$1;
(statearr_15488_16355[(2)] = null);

(statearr_15488_16355[(1)] = (2));


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
var cljs$core$async$state_machine__13659__auto__ = null;
var cljs$core$async$state_machine__13659__auto____0 = (function (){
var statearr_15489 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15489[(0)] = cljs$core$async$state_machine__13659__auto__);

(statearr_15489[(1)] = (1));

return statearr_15489;
});
var cljs$core$async$state_machine__13659__auto____1 = (function (state_15472){
while(true){
var ret_value__13660__auto__ = (function (){try{while(true){
var result__13661__auto__ = switch__13658__auto__(state_15472);
if(cljs.core.keyword_identical_QMARK_(result__13661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13661__auto__;
}
break;
}
}catch (e15490){var ex__13662__auto__ = e15490;
var statearr_15491_16358 = state_15472;
(statearr_15491_16358[(2)] = ex__13662__auto__);


if(cljs.core.seq((state_15472[(4)]))){
var statearr_15492_16359 = state_15472;
(statearr_15492_16359[(1)] = cljs.core.first((state_15472[(4)])));

} else {
throw ex__13662__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16360 = state_15472;
state_15472 = G__16360;
continue;
} else {
return ret_value__13660__auto__;
}
break;
}
});
cljs$core$async$state_machine__13659__auto__ = function(state_15472){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13659__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13659__auto____1.call(this,state_15472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13659__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13659__auto____0;
cljs$core$async$state_machine__13659__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13659__auto____1;
return cljs$core$async$state_machine__13659__auto__;
})()
})();
var state__13761__auto__ = (function (){var statearr_15493 = f__13760__auto__();
(statearr_15493[(6)] = c__13759__auto___16345);

return statearr_15493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13761__auto__);
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
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__15495 = arguments.length;
switch (G__15495) {
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
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13759__auto___16362 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13760__auto__ = (function (){var switch__13658__auto__ = (function (state_15519){
var state_val_15520 = (state_15519[(1)]);
if((state_val_15520 === (7))){
var inst_15501 = (state_15519[(7)]);
var inst_15501__$1 = (state_15519[(2)]);
var inst_15502 = (inst_15501__$1 == null);
var inst_15503 = cljs.core.not(inst_15502);
var state_15519__$1 = (function (){var statearr_15521 = state_15519;
(statearr_15521[(7)] = inst_15501__$1);

return statearr_15521;
})();
if(inst_15503){
var statearr_15522_16363 = state_15519__$1;
(statearr_15522_16363[(1)] = (8));

} else {
var statearr_15523_16364 = state_15519__$1;
(statearr_15523_16364[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15520 === (1))){
var inst_15496 = (0);
var state_15519__$1 = (function (){var statearr_15524 = state_15519;
(statearr_15524[(8)] = inst_15496);

return statearr_15524;
})();
var statearr_15525_16365 = state_15519__$1;
(statearr_15525_16365[(2)] = null);

(statearr_15525_16365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15520 === (4))){
var state_15519__$1 = state_15519;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15519__$1,(7),ch);
} else {
if((state_val_15520 === (6))){
var inst_15514 = (state_15519[(2)]);
var state_15519__$1 = state_15519;
var statearr_15526_16367 = state_15519__$1;
(statearr_15526_16367[(2)] = inst_15514);

(statearr_15526_16367[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15520 === (3))){
var inst_15516 = (state_15519[(2)]);
var inst_15517 = cljs.core.async.close_BANG_(out);
var state_15519__$1 = (function (){var statearr_15527 = state_15519;
(statearr_15527[(9)] = inst_15516);

return statearr_15527;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15519__$1,inst_15517);
} else {
if((state_val_15520 === (2))){
var inst_15496 = (state_15519[(8)]);
var inst_15498 = (inst_15496 < n);
var state_15519__$1 = state_15519;
if(cljs.core.truth_(inst_15498)){
var statearr_15528_16369 = state_15519__$1;
(statearr_15528_16369[(1)] = (4));

} else {
var statearr_15529_16370 = state_15519__$1;
(statearr_15529_16370[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15520 === (11))){
var inst_15496 = (state_15519[(8)]);
var inst_15506 = (state_15519[(2)]);
var inst_15507 = (inst_15496 + (1));
var inst_15496__$1 = inst_15507;
var state_15519__$1 = (function (){var statearr_15530 = state_15519;
(statearr_15530[(10)] = inst_15506);

(statearr_15530[(8)] = inst_15496__$1);

return statearr_15530;
})();
var statearr_15531_16371 = state_15519__$1;
(statearr_15531_16371[(2)] = null);

(statearr_15531_16371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15520 === (9))){
var state_15519__$1 = state_15519;
var statearr_15532_16372 = state_15519__$1;
(statearr_15532_16372[(2)] = null);

(statearr_15532_16372[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15520 === (5))){
var state_15519__$1 = state_15519;
var statearr_15533_16373 = state_15519__$1;
(statearr_15533_16373[(2)] = null);

(statearr_15533_16373[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15520 === (10))){
var inst_15511 = (state_15519[(2)]);
var state_15519__$1 = state_15519;
var statearr_15534_16374 = state_15519__$1;
(statearr_15534_16374[(2)] = inst_15511);

(statearr_15534_16374[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15520 === (8))){
var inst_15501 = (state_15519[(7)]);
var state_15519__$1 = state_15519;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15519__$1,(11),out,inst_15501);
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
var cljs$core$async$state_machine__13659__auto__ = null;
var cljs$core$async$state_machine__13659__auto____0 = (function (){
var statearr_15535 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15535[(0)] = cljs$core$async$state_machine__13659__auto__);

(statearr_15535[(1)] = (1));

return statearr_15535;
});
var cljs$core$async$state_machine__13659__auto____1 = (function (state_15519){
while(true){
var ret_value__13660__auto__ = (function (){try{while(true){
var result__13661__auto__ = switch__13658__auto__(state_15519);
if(cljs.core.keyword_identical_QMARK_(result__13661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13661__auto__;
}
break;
}
}catch (e15536){var ex__13662__auto__ = e15536;
var statearr_15537_16375 = state_15519;
(statearr_15537_16375[(2)] = ex__13662__auto__);


if(cljs.core.seq((state_15519[(4)]))){
var statearr_15538_16376 = state_15519;
(statearr_15538_16376[(1)] = cljs.core.first((state_15519[(4)])));

} else {
throw ex__13662__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16377 = state_15519;
state_15519 = G__16377;
continue;
} else {
return ret_value__13660__auto__;
}
break;
}
});
cljs$core$async$state_machine__13659__auto__ = function(state_15519){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13659__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13659__auto____1.call(this,state_15519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13659__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13659__auto____0;
cljs$core$async$state_machine__13659__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13659__auto____1;
return cljs$core$async$state_machine__13659__auto__;
})()
})();
var state__13761__auto__ = (function (){var statearr_15539 = f__13760__auto__();
(statearr_15539[(6)] = c__13759__auto___16362);

return statearr_15539;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13761__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15544 = (function (f,ch,meta15542,_,fn1,meta15545){
this.f = f;
this.ch = ch;
this.meta15542 = meta15542;
this._ = _;
this.fn1 = fn1;
this.meta15545 = meta15545;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15544.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15546,meta15545__$1){
var self__ = this;
var _15546__$1 = this;
return (new cljs.core.async.t_cljs$core$async15544(self__.f,self__.ch,self__.meta15542,self__._,self__.fn1,meta15545__$1));
}));

(cljs.core.async.t_cljs$core$async15544.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15546){
var self__ = this;
var _15546__$1 = this;
return self__.meta15545;
}));

(cljs.core.async.t_cljs$core$async15544.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15544.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async15544.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15544.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__15540_SHARP_){
var G__15547 = (((p1__15540_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__15540_SHARP_) : self__.f.call(null,p1__15540_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__15547) : f1.call(null,G__15547));
});
}));

(cljs.core.async.t_cljs$core$async15544.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15542","meta15542",871939970,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async15541","cljs.core.async/t_cljs$core$async15541",-264336276,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta15545","meta15545",-1404042749,null)], null);
}));

(cljs.core.async.t_cljs$core$async15544.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15544.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15544");

(cljs.core.async.t_cljs$core$async15544.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15544");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15544.
 */
cljs.core.async.__GT_t_cljs$core$async15544 = (function cljs$core$async$__GT_t_cljs$core$async15544(f,ch,meta15542,_,fn1,meta15545){
return (new cljs.core.async.t_cljs$core$async15544(f,ch,meta15542,_,fn1,meta15545));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15541 = (function (f,ch,meta15542){
this.f = f;
this.ch = ch;
this.meta15542 = meta15542;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15541.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15543,meta15542__$1){
var self__ = this;
var _15543__$1 = this;
return (new cljs.core.async.t_cljs$core$async15541(self__.f,self__.ch,meta15542__$1));
}));

(cljs.core.async.t_cljs$core$async15541.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15543){
var self__ = this;
var _15543__$1 = this;
return self__.meta15542;
}));

(cljs.core.async.t_cljs$core$async15541.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15541.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async15541.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async15541.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15541.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async15544(self__.f,self__.ch,self__.meta15542,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__15548 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__15548) : self__.f.call(null,G__15548));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async15541.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15541.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async15541.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15542","meta15542",871939970,null)], null);
}));

(cljs.core.async.t_cljs$core$async15541.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15541.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15541");

(cljs.core.async.t_cljs$core$async15541.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15541");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15541.
 */
cljs.core.async.__GT_t_cljs$core$async15541 = (function cljs$core$async$__GT_t_cljs$core$async15541(f,ch,meta15542){
return (new cljs.core.async.t_cljs$core$async15541(f,ch,meta15542));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async15541(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15549 = (function (f,ch,meta15550){
this.f = f;
this.ch = ch;
this.meta15550 = meta15550;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15549.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15551,meta15550__$1){
var self__ = this;
var _15551__$1 = this;
return (new cljs.core.async.t_cljs$core$async15549(self__.f,self__.ch,meta15550__$1));
}));

(cljs.core.async.t_cljs$core$async15549.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15551){
var self__ = this;
var _15551__$1 = this;
return self__.meta15550;
}));

(cljs.core.async.t_cljs$core$async15549.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15549.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async15549.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15549.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async15549.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15549.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async15549.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15550","meta15550",-475556961,null)], null);
}));

(cljs.core.async.t_cljs$core$async15549.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15549.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15549");

(cljs.core.async.t_cljs$core$async15549.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15549");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15549.
 */
cljs.core.async.__GT_t_cljs$core$async15549 = (function cljs$core$async$__GT_t_cljs$core$async15549(f,ch,meta15550){
return (new cljs.core.async.t_cljs$core$async15549(f,ch,meta15550));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async15549(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15552 = (function (p,ch,meta15553){
this.p = p;
this.ch = ch;
this.meta15553 = meta15553;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15552.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15554,meta15553__$1){
var self__ = this;
var _15554__$1 = this;
return (new cljs.core.async.t_cljs$core$async15552(self__.p,self__.ch,meta15553__$1));
}));

(cljs.core.async.t_cljs$core$async15552.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15554){
var self__ = this;
var _15554__$1 = this;
return self__.meta15553;
}));

(cljs.core.async.t_cljs$core$async15552.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15552.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async15552.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async15552.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15552.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async15552.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15552.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async15552.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15553","meta15553",-1411819091,null)], null);
}));

(cljs.core.async.t_cljs$core$async15552.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15552.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15552");

(cljs.core.async.t_cljs$core$async15552.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15552");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15552.
 */
cljs.core.async.__GT_t_cljs$core$async15552 = (function cljs$core$async$__GT_t_cljs$core$async15552(p,ch,meta15553){
return (new cljs.core.async.t_cljs$core$async15552(p,ch,meta15553));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async15552(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__15556 = arguments.length;
switch (G__15556) {
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
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13759__auto___16381 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13760__auto__ = (function (){var switch__13658__auto__ = (function (state_15577){
var state_val_15578 = (state_15577[(1)]);
if((state_val_15578 === (7))){
var inst_15573 = (state_15577[(2)]);
var state_15577__$1 = state_15577;
var statearr_15579_16382 = state_15577__$1;
(statearr_15579_16382[(2)] = inst_15573);

(statearr_15579_16382[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15578 === (1))){
var state_15577__$1 = state_15577;
var statearr_15580_16383 = state_15577__$1;
(statearr_15580_16383[(2)] = null);

(statearr_15580_16383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15578 === (4))){
var inst_15559 = (state_15577[(7)]);
var inst_15559__$1 = (state_15577[(2)]);
var inst_15560 = (inst_15559__$1 == null);
var state_15577__$1 = (function (){var statearr_15581 = state_15577;
(statearr_15581[(7)] = inst_15559__$1);

return statearr_15581;
})();
if(cljs.core.truth_(inst_15560)){
var statearr_15582_16384 = state_15577__$1;
(statearr_15582_16384[(1)] = (5));

} else {
var statearr_15583_16385 = state_15577__$1;
(statearr_15583_16385[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15578 === (6))){
var inst_15559 = (state_15577[(7)]);
var inst_15564 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15559) : p.call(null,inst_15559));
var state_15577__$1 = state_15577;
if(cljs.core.truth_(inst_15564)){
var statearr_15584_16386 = state_15577__$1;
(statearr_15584_16386[(1)] = (8));

} else {
var statearr_15585_16387 = state_15577__$1;
(statearr_15585_16387[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15578 === (3))){
var inst_15575 = (state_15577[(2)]);
var state_15577__$1 = state_15577;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15577__$1,inst_15575);
} else {
if((state_val_15578 === (2))){
var state_15577__$1 = state_15577;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15577__$1,(4),ch);
} else {
if((state_val_15578 === (11))){
var inst_15567 = (state_15577[(2)]);
var state_15577__$1 = state_15577;
var statearr_15586_16388 = state_15577__$1;
(statearr_15586_16388[(2)] = inst_15567);

(statearr_15586_16388[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15578 === (9))){
var state_15577__$1 = state_15577;
var statearr_15587_16389 = state_15577__$1;
(statearr_15587_16389[(2)] = null);

(statearr_15587_16389[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15578 === (5))){
var inst_15562 = cljs.core.async.close_BANG_(out);
var state_15577__$1 = state_15577;
var statearr_15588_16390 = state_15577__$1;
(statearr_15588_16390[(2)] = inst_15562);

(statearr_15588_16390[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15578 === (10))){
var inst_15570 = (state_15577[(2)]);
var state_15577__$1 = (function (){var statearr_15589 = state_15577;
(statearr_15589[(8)] = inst_15570);

return statearr_15589;
})();
var statearr_15590_16392 = state_15577__$1;
(statearr_15590_16392[(2)] = null);

(statearr_15590_16392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15578 === (8))){
var inst_15559 = (state_15577[(7)]);
var state_15577__$1 = state_15577;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15577__$1,(11),out,inst_15559);
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
var cljs$core$async$state_machine__13659__auto__ = null;
var cljs$core$async$state_machine__13659__auto____0 = (function (){
var statearr_15591 = [null,null,null,null,null,null,null,null,null];
(statearr_15591[(0)] = cljs$core$async$state_machine__13659__auto__);

(statearr_15591[(1)] = (1));

return statearr_15591;
});
var cljs$core$async$state_machine__13659__auto____1 = (function (state_15577){
while(true){
var ret_value__13660__auto__ = (function (){try{while(true){
var result__13661__auto__ = switch__13658__auto__(state_15577);
if(cljs.core.keyword_identical_QMARK_(result__13661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13661__auto__;
}
break;
}
}catch (e15592){var ex__13662__auto__ = e15592;
var statearr_15593_16393 = state_15577;
(statearr_15593_16393[(2)] = ex__13662__auto__);


if(cljs.core.seq((state_15577[(4)]))){
var statearr_15594_16394 = state_15577;
(statearr_15594_16394[(1)] = cljs.core.first((state_15577[(4)])));

} else {
throw ex__13662__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16395 = state_15577;
state_15577 = G__16395;
continue;
} else {
return ret_value__13660__auto__;
}
break;
}
});
cljs$core$async$state_machine__13659__auto__ = function(state_15577){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13659__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13659__auto____1.call(this,state_15577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13659__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13659__auto____0;
cljs$core$async$state_machine__13659__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13659__auto____1;
return cljs$core$async$state_machine__13659__auto__;
})()
})();
var state__13761__auto__ = (function (){var statearr_15595 = f__13760__auto__();
(statearr_15595[(6)] = c__13759__auto___16381);

return statearr_15595;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13761__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__15597 = arguments.length;
switch (G__15597) {
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
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__13759__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13760__auto__ = (function (){var switch__13658__auto__ = (function (state_15659){
var state_val_15660 = (state_15659[(1)]);
if((state_val_15660 === (7))){
var inst_15655 = (state_15659[(2)]);
var state_15659__$1 = state_15659;
var statearr_15661_16401 = state_15659__$1;
(statearr_15661_16401[(2)] = inst_15655);

(statearr_15661_16401[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15660 === (20))){
var inst_15625 = (state_15659[(7)]);
var inst_15636 = (state_15659[(2)]);
var inst_15637 = cljs.core.next(inst_15625);
var inst_15611 = inst_15637;
var inst_15612 = null;
var inst_15613 = (0);
var inst_15614 = (0);
var state_15659__$1 = (function (){var statearr_15662 = state_15659;
(statearr_15662[(8)] = inst_15613);

(statearr_15662[(9)] = inst_15612);

(statearr_15662[(10)] = inst_15614);

(statearr_15662[(11)] = inst_15636);

(statearr_15662[(12)] = inst_15611);

return statearr_15662;
})();
var statearr_15663_16402 = state_15659__$1;
(statearr_15663_16402[(2)] = null);

(statearr_15663_16402[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15660 === (1))){
var state_15659__$1 = state_15659;
var statearr_15664_16403 = state_15659__$1;
(statearr_15664_16403[(2)] = null);

(statearr_15664_16403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15660 === (4))){
var inst_15600 = (state_15659[(13)]);
var inst_15600__$1 = (state_15659[(2)]);
var inst_15601 = (inst_15600__$1 == null);
var state_15659__$1 = (function (){var statearr_15665 = state_15659;
(statearr_15665[(13)] = inst_15600__$1);

return statearr_15665;
})();
if(cljs.core.truth_(inst_15601)){
var statearr_15666_16404 = state_15659__$1;
(statearr_15666_16404[(1)] = (5));

} else {
var statearr_15667_16405 = state_15659__$1;
(statearr_15667_16405[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15660 === (15))){
var state_15659__$1 = state_15659;
var statearr_15671_16406 = state_15659__$1;
(statearr_15671_16406[(2)] = null);

(statearr_15671_16406[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15660 === (21))){
var state_15659__$1 = state_15659;
var statearr_15672_16407 = state_15659__$1;
(statearr_15672_16407[(2)] = null);

(statearr_15672_16407[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15660 === (13))){
var inst_15613 = (state_15659[(8)]);
var inst_15612 = (state_15659[(9)]);
var inst_15614 = (state_15659[(10)]);
var inst_15611 = (state_15659[(12)]);
var inst_15621 = (state_15659[(2)]);
var inst_15622 = (inst_15614 + (1));
var tmp15668 = inst_15613;
var tmp15669 = inst_15612;
var tmp15670 = inst_15611;
var inst_15611__$1 = tmp15670;
var inst_15612__$1 = tmp15669;
var inst_15613__$1 = tmp15668;
var inst_15614__$1 = inst_15622;
var state_15659__$1 = (function (){var statearr_15673 = state_15659;
(statearr_15673[(14)] = inst_15621);

(statearr_15673[(8)] = inst_15613__$1);

(statearr_15673[(9)] = inst_15612__$1);

(statearr_15673[(10)] = inst_15614__$1);

(statearr_15673[(12)] = inst_15611__$1);

return statearr_15673;
})();
var statearr_15674_16408 = state_15659__$1;
(statearr_15674_16408[(2)] = null);

(statearr_15674_16408[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15660 === (22))){
var state_15659__$1 = state_15659;
var statearr_15675_16409 = state_15659__$1;
(statearr_15675_16409[(2)] = null);

(statearr_15675_16409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15660 === (6))){
var inst_15600 = (state_15659[(13)]);
var inst_15609 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_15600) : f.call(null,inst_15600));
var inst_15610 = cljs.core.seq(inst_15609);
var inst_15611 = inst_15610;
var inst_15612 = null;
var inst_15613 = (0);
var inst_15614 = (0);
var state_15659__$1 = (function (){var statearr_15676 = state_15659;
(statearr_15676[(8)] = inst_15613);

(statearr_15676[(9)] = inst_15612);

(statearr_15676[(10)] = inst_15614);

(statearr_15676[(12)] = inst_15611);

return statearr_15676;
})();
var statearr_15677_16410 = state_15659__$1;
(statearr_15677_16410[(2)] = null);

(statearr_15677_16410[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15660 === (17))){
var inst_15625 = (state_15659[(7)]);
var inst_15629 = cljs.core.chunk_first(inst_15625);
var inst_15630 = cljs.core.chunk_rest(inst_15625);
var inst_15631 = cljs.core.count(inst_15629);
var inst_15611 = inst_15630;
var inst_15612 = inst_15629;
var inst_15613 = inst_15631;
var inst_15614 = (0);
var state_15659__$1 = (function (){var statearr_15678 = state_15659;
(statearr_15678[(8)] = inst_15613);

(statearr_15678[(9)] = inst_15612);

(statearr_15678[(10)] = inst_15614);

(statearr_15678[(12)] = inst_15611);

return statearr_15678;
})();
var statearr_15679_16411 = state_15659__$1;
(statearr_15679_16411[(2)] = null);

(statearr_15679_16411[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15660 === (3))){
var inst_15657 = (state_15659[(2)]);
var state_15659__$1 = state_15659;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15659__$1,inst_15657);
} else {
if((state_val_15660 === (12))){
var inst_15645 = (state_15659[(2)]);
var state_15659__$1 = state_15659;
var statearr_15680_16412 = state_15659__$1;
(statearr_15680_16412[(2)] = inst_15645);

(statearr_15680_16412[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15660 === (2))){
var state_15659__$1 = state_15659;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15659__$1,(4),in$);
} else {
if((state_val_15660 === (23))){
var inst_15653 = (state_15659[(2)]);
var state_15659__$1 = state_15659;
var statearr_15681_16413 = state_15659__$1;
(statearr_15681_16413[(2)] = inst_15653);

(statearr_15681_16413[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15660 === (19))){
var inst_15640 = (state_15659[(2)]);
var state_15659__$1 = state_15659;
var statearr_15682_16414 = state_15659__$1;
(statearr_15682_16414[(2)] = inst_15640);

(statearr_15682_16414[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15660 === (11))){
var inst_15625 = (state_15659[(7)]);
var inst_15611 = (state_15659[(12)]);
var inst_15625__$1 = cljs.core.seq(inst_15611);
var state_15659__$1 = (function (){var statearr_15683 = state_15659;
(statearr_15683[(7)] = inst_15625__$1);

return statearr_15683;
})();
if(inst_15625__$1){
var statearr_15684_16415 = state_15659__$1;
(statearr_15684_16415[(1)] = (14));

} else {
var statearr_15685_16416 = state_15659__$1;
(statearr_15685_16416[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15660 === (9))){
var inst_15647 = (state_15659[(2)]);
var inst_15648 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_15659__$1 = (function (){var statearr_15686 = state_15659;
(statearr_15686[(15)] = inst_15647);

return statearr_15686;
})();
if(cljs.core.truth_(inst_15648)){
var statearr_15687_16421 = state_15659__$1;
(statearr_15687_16421[(1)] = (21));

} else {
var statearr_15688_16422 = state_15659__$1;
(statearr_15688_16422[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15660 === (5))){
var inst_15603 = cljs.core.async.close_BANG_(out);
var state_15659__$1 = state_15659;
var statearr_15689_16423 = state_15659__$1;
(statearr_15689_16423[(2)] = inst_15603);

(statearr_15689_16423[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15660 === (14))){
var inst_15625 = (state_15659[(7)]);
var inst_15627 = cljs.core.chunked_seq_QMARK_(inst_15625);
var state_15659__$1 = state_15659;
if(inst_15627){
var statearr_15690_16424 = state_15659__$1;
(statearr_15690_16424[(1)] = (17));

} else {
var statearr_15691_16425 = state_15659__$1;
(statearr_15691_16425[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15660 === (16))){
var inst_15643 = (state_15659[(2)]);
var state_15659__$1 = state_15659;
var statearr_15692_16426 = state_15659__$1;
(statearr_15692_16426[(2)] = inst_15643);

(statearr_15692_16426[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15660 === (10))){
var inst_15612 = (state_15659[(9)]);
var inst_15614 = (state_15659[(10)]);
var inst_15619 = cljs.core._nth(inst_15612,inst_15614);
var state_15659__$1 = state_15659;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15659__$1,(13),out,inst_15619);
} else {
if((state_val_15660 === (18))){
var inst_15625 = (state_15659[(7)]);
var inst_15634 = cljs.core.first(inst_15625);
var state_15659__$1 = state_15659;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15659__$1,(20),out,inst_15634);
} else {
if((state_val_15660 === (8))){
var inst_15613 = (state_15659[(8)]);
var inst_15614 = (state_15659[(10)]);
var inst_15616 = (inst_15614 < inst_15613);
var inst_15617 = inst_15616;
var state_15659__$1 = state_15659;
if(cljs.core.truth_(inst_15617)){
var statearr_15693_16427 = state_15659__$1;
(statearr_15693_16427[(1)] = (10));

} else {
var statearr_15694_16428 = state_15659__$1;
(statearr_15694_16428[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__13659__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13659__auto____0 = (function (){
var statearr_15695 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15695[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13659__auto__);

(statearr_15695[(1)] = (1));

return statearr_15695;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13659__auto____1 = (function (state_15659){
while(true){
var ret_value__13660__auto__ = (function (){try{while(true){
var result__13661__auto__ = switch__13658__auto__(state_15659);
if(cljs.core.keyword_identical_QMARK_(result__13661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13661__auto__;
}
break;
}
}catch (e15696){var ex__13662__auto__ = e15696;
var statearr_15697_16432 = state_15659;
(statearr_15697_16432[(2)] = ex__13662__auto__);


if(cljs.core.seq((state_15659[(4)]))){
var statearr_15698_16433 = state_15659;
(statearr_15698_16433[(1)] = cljs.core.first((state_15659[(4)])));

} else {
throw ex__13662__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16434 = state_15659;
state_15659 = G__16434;
continue;
} else {
return ret_value__13660__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13659__auto__ = function(state_15659){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13659__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13659__auto____1.call(this,state_15659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13659__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13659__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13659__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13659__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13659__auto__;
})()
})();
var state__13761__auto__ = (function (){var statearr_15699 = f__13760__auto__();
(statearr_15699[(6)] = c__13759__auto__);

return statearr_15699;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13761__auto__);
}));

return c__13759__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__15701 = arguments.length;
switch (G__15701) {
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
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__15703 = arguments.length;
switch (G__15703) {
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
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__15705 = arguments.length;
switch (G__15705) {
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
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13759__auto___16444 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13760__auto__ = (function (){var switch__13658__auto__ = (function (state_15729){
var state_val_15730 = (state_15729[(1)]);
if((state_val_15730 === (7))){
var inst_15724 = (state_15729[(2)]);
var state_15729__$1 = state_15729;
var statearr_15731_16445 = state_15729__$1;
(statearr_15731_16445[(2)] = inst_15724);

(statearr_15731_16445[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15730 === (1))){
var inst_15706 = null;
var state_15729__$1 = (function (){var statearr_15732 = state_15729;
(statearr_15732[(7)] = inst_15706);

return statearr_15732;
})();
var statearr_15733_16446 = state_15729__$1;
(statearr_15733_16446[(2)] = null);

(statearr_15733_16446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15730 === (4))){
var inst_15709 = (state_15729[(8)]);
var inst_15709__$1 = (state_15729[(2)]);
var inst_15710 = (inst_15709__$1 == null);
var inst_15711 = cljs.core.not(inst_15710);
var state_15729__$1 = (function (){var statearr_15734 = state_15729;
(statearr_15734[(8)] = inst_15709__$1);

return statearr_15734;
})();
if(inst_15711){
var statearr_15735_16447 = state_15729__$1;
(statearr_15735_16447[(1)] = (5));

} else {
var statearr_15736_16448 = state_15729__$1;
(statearr_15736_16448[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15730 === (6))){
var state_15729__$1 = state_15729;
var statearr_15737_16449 = state_15729__$1;
(statearr_15737_16449[(2)] = null);

(statearr_15737_16449[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15730 === (3))){
var inst_15726 = (state_15729[(2)]);
var inst_15727 = cljs.core.async.close_BANG_(out);
var state_15729__$1 = (function (){var statearr_15738 = state_15729;
(statearr_15738[(9)] = inst_15726);

return statearr_15738;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15729__$1,inst_15727);
} else {
if((state_val_15730 === (2))){
var state_15729__$1 = state_15729;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15729__$1,(4),ch);
} else {
if((state_val_15730 === (11))){
var inst_15709 = (state_15729[(8)]);
var inst_15718 = (state_15729[(2)]);
var inst_15706 = inst_15709;
var state_15729__$1 = (function (){var statearr_15739 = state_15729;
(statearr_15739[(7)] = inst_15706);

(statearr_15739[(10)] = inst_15718);

return statearr_15739;
})();
var statearr_15740_16450 = state_15729__$1;
(statearr_15740_16450[(2)] = null);

(statearr_15740_16450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15730 === (9))){
var inst_15709 = (state_15729[(8)]);
var state_15729__$1 = state_15729;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15729__$1,(11),out,inst_15709);
} else {
if((state_val_15730 === (5))){
var inst_15706 = (state_15729[(7)]);
var inst_15709 = (state_15729[(8)]);
var inst_15713 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15709,inst_15706);
var state_15729__$1 = state_15729;
if(inst_15713){
var statearr_15742_16451 = state_15729__$1;
(statearr_15742_16451[(1)] = (8));

} else {
var statearr_15743_16452 = state_15729__$1;
(statearr_15743_16452[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15730 === (10))){
var inst_15721 = (state_15729[(2)]);
var state_15729__$1 = state_15729;
var statearr_15744_16453 = state_15729__$1;
(statearr_15744_16453[(2)] = inst_15721);

(statearr_15744_16453[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15730 === (8))){
var inst_15706 = (state_15729[(7)]);
var tmp15741 = inst_15706;
var inst_15706__$1 = tmp15741;
var state_15729__$1 = (function (){var statearr_15745 = state_15729;
(statearr_15745[(7)] = inst_15706__$1);

return statearr_15745;
})();
var statearr_15746_16454 = state_15729__$1;
(statearr_15746_16454[(2)] = null);

(statearr_15746_16454[(1)] = (2));


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
var cljs$core$async$state_machine__13659__auto__ = null;
var cljs$core$async$state_machine__13659__auto____0 = (function (){
var statearr_15747 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15747[(0)] = cljs$core$async$state_machine__13659__auto__);

(statearr_15747[(1)] = (1));

return statearr_15747;
});
var cljs$core$async$state_machine__13659__auto____1 = (function (state_15729){
while(true){
var ret_value__13660__auto__ = (function (){try{while(true){
var result__13661__auto__ = switch__13658__auto__(state_15729);
if(cljs.core.keyword_identical_QMARK_(result__13661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13661__auto__;
}
break;
}
}catch (e15748){var ex__13662__auto__ = e15748;
var statearr_15749_16458 = state_15729;
(statearr_15749_16458[(2)] = ex__13662__auto__);


if(cljs.core.seq((state_15729[(4)]))){
var statearr_15750_16459 = state_15729;
(statearr_15750_16459[(1)] = cljs.core.first((state_15729[(4)])));

} else {
throw ex__13662__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16461 = state_15729;
state_15729 = G__16461;
continue;
} else {
return ret_value__13660__auto__;
}
break;
}
});
cljs$core$async$state_machine__13659__auto__ = function(state_15729){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13659__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13659__auto____1.call(this,state_15729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13659__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13659__auto____0;
cljs$core$async$state_machine__13659__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13659__auto____1;
return cljs$core$async$state_machine__13659__auto__;
})()
})();
var state__13761__auto__ = (function (){var statearr_15751 = f__13760__auto__();
(statearr_15751[(6)] = c__13759__auto___16444);

return statearr_15751;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13761__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__15753 = arguments.length;
switch (G__15753) {
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
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13759__auto___16466 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13760__auto__ = (function (){var switch__13658__auto__ = (function (state_15791){
var state_val_15792 = (state_15791[(1)]);
if((state_val_15792 === (7))){
var inst_15787 = (state_15791[(2)]);
var state_15791__$1 = state_15791;
var statearr_15793_16467 = state_15791__$1;
(statearr_15793_16467[(2)] = inst_15787);

(statearr_15793_16467[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15792 === (1))){
var inst_15754 = (new Array(n));
var inst_15755 = inst_15754;
var inst_15756 = (0);
var state_15791__$1 = (function (){var statearr_15794 = state_15791;
(statearr_15794[(7)] = inst_15756);

(statearr_15794[(8)] = inst_15755);

return statearr_15794;
})();
var statearr_15795_16468 = state_15791__$1;
(statearr_15795_16468[(2)] = null);

(statearr_15795_16468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15792 === (4))){
var inst_15759 = (state_15791[(9)]);
var inst_15759__$1 = (state_15791[(2)]);
var inst_15760 = (inst_15759__$1 == null);
var inst_15761 = cljs.core.not(inst_15760);
var state_15791__$1 = (function (){var statearr_15796 = state_15791;
(statearr_15796[(9)] = inst_15759__$1);

return statearr_15796;
})();
if(inst_15761){
var statearr_15797_16469 = state_15791__$1;
(statearr_15797_16469[(1)] = (5));

} else {
var statearr_15798_16470 = state_15791__$1;
(statearr_15798_16470[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15792 === (15))){
var inst_15781 = (state_15791[(2)]);
var state_15791__$1 = state_15791;
var statearr_15799_16471 = state_15791__$1;
(statearr_15799_16471[(2)] = inst_15781);

(statearr_15799_16471[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15792 === (13))){
var state_15791__$1 = state_15791;
var statearr_15800_16472 = state_15791__$1;
(statearr_15800_16472[(2)] = null);

(statearr_15800_16472[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15792 === (6))){
var inst_15756 = (state_15791[(7)]);
var inst_15777 = (inst_15756 > (0));
var state_15791__$1 = state_15791;
if(cljs.core.truth_(inst_15777)){
var statearr_15801_16473 = state_15791__$1;
(statearr_15801_16473[(1)] = (12));

} else {
var statearr_15802_16474 = state_15791__$1;
(statearr_15802_16474[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15792 === (3))){
var inst_15789 = (state_15791[(2)]);
var state_15791__$1 = state_15791;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15791__$1,inst_15789);
} else {
if((state_val_15792 === (12))){
var inst_15755 = (state_15791[(8)]);
var inst_15779 = cljs.core.vec(inst_15755);
var state_15791__$1 = state_15791;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15791__$1,(15),out,inst_15779);
} else {
if((state_val_15792 === (2))){
var state_15791__$1 = state_15791;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15791__$1,(4),ch);
} else {
if((state_val_15792 === (11))){
var inst_15771 = (state_15791[(2)]);
var inst_15772 = (new Array(n));
var inst_15755 = inst_15772;
var inst_15756 = (0);
var state_15791__$1 = (function (){var statearr_15803 = state_15791;
(statearr_15803[(10)] = inst_15771);

(statearr_15803[(7)] = inst_15756);

(statearr_15803[(8)] = inst_15755);

return statearr_15803;
})();
var statearr_15804_16475 = state_15791__$1;
(statearr_15804_16475[(2)] = null);

(statearr_15804_16475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15792 === (9))){
var inst_15755 = (state_15791[(8)]);
var inst_15769 = cljs.core.vec(inst_15755);
var state_15791__$1 = state_15791;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15791__$1,(11),out,inst_15769);
} else {
if((state_val_15792 === (5))){
var inst_15759 = (state_15791[(9)]);
var inst_15756 = (state_15791[(7)]);
var inst_15755 = (state_15791[(8)]);
var inst_15764 = (state_15791[(11)]);
var inst_15763 = (inst_15755[inst_15756] = inst_15759);
var inst_15764__$1 = (inst_15756 + (1));
var inst_15765 = (inst_15764__$1 < n);
var state_15791__$1 = (function (){var statearr_15805 = state_15791;
(statearr_15805[(12)] = inst_15763);

(statearr_15805[(11)] = inst_15764__$1);

return statearr_15805;
})();
if(cljs.core.truth_(inst_15765)){
var statearr_15806_16476 = state_15791__$1;
(statearr_15806_16476[(1)] = (8));

} else {
var statearr_15807_16477 = state_15791__$1;
(statearr_15807_16477[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15792 === (14))){
var inst_15784 = (state_15791[(2)]);
var inst_15785 = cljs.core.async.close_BANG_(out);
var state_15791__$1 = (function (){var statearr_15809 = state_15791;
(statearr_15809[(13)] = inst_15784);

return statearr_15809;
})();
var statearr_15810_16478 = state_15791__$1;
(statearr_15810_16478[(2)] = inst_15785);

(statearr_15810_16478[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15792 === (10))){
var inst_15775 = (state_15791[(2)]);
var state_15791__$1 = state_15791;
var statearr_15811_16479 = state_15791__$1;
(statearr_15811_16479[(2)] = inst_15775);

(statearr_15811_16479[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15792 === (8))){
var inst_15755 = (state_15791[(8)]);
var inst_15764 = (state_15791[(11)]);
var tmp15808 = inst_15755;
var inst_15755__$1 = tmp15808;
var inst_15756 = inst_15764;
var state_15791__$1 = (function (){var statearr_15812 = state_15791;
(statearr_15812[(7)] = inst_15756);

(statearr_15812[(8)] = inst_15755__$1);

return statearr_15812;
})();
var statearr_15813_16481 = state_15791__$1;
(statearr_15813_16481[(2)] = null);

(statearr_15813_16481[(1)] = (2));


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
var cljs$core$async$state_machine__13659__auto__ = null;
var cljs$core$async$state_machine__13659__auto____0 = (function (){
var statearr_15814 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15814[(0)] = cljs$core$async$state_machine__13659__auto__);

(statearr_15814[(1)] = (1));

return statearr_15814;
});
var cljs$core$async$state_machine__13659__auto____1 = (function (state_15791){
while(true){
var ret_value__13660__auto__ = (function (){try{while(true){
var result__13661__auto__ = switch__13658__auto__(state_15791);
if(cljs.core.keyword_identical_QMARK_(result__13661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13661__auto__;
}
break;
}
}catch (e15815){var ex__13662__auto__ = e15815;
var statearr_15816_16483 = state_15791;
(statearr_15816_16483[(2)] = ex__13662__auto__);


if(cljs.core.seq((state_15791[(4)]))){
var statearr_15817_16484 = state_15791;
(statearr_15817_16484[(1)] = cljs.core.first((state_15791[(4)])));

} else {
throw ex__13662__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16485 = state_15791;
state_15791 = G__16485;
continue;
} else {
return ret_value__13660__auto__;
}
break;
}
});
cljs$core$async$state_machine__13659__auto__ = function(state_15791){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13659__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13659__auto____1.call(this,state_15791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13659__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13659__auto____0;
cljs$core$async$state_machine__13659__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13659__auto____1;
return cljs$core$async$state_machine__13659__auto__;
})()
})();
var state__13761__auto__ = (function (){var statearr_15818 = f__13760__auto__();
(statearr_15818[(6)] = c__13759__auto___16466);

return statearr_15818;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13761__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__15820 = arguments.length;
switch (G__15820) {
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
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13759__auto___16487 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13760__auto__ = (function (){var switch__13658__auto__ = (function (state_15865){
var state_val_15866 = (state_15865[(1)]);
if((state_val_15866 === (7))){
var inst_15861 = (state_15865[(2)]);
var state_15865__$1 = state_15865;
var statearr_15867_16488 = state_15865__$1;
(statearr_15867_16488[(2)] = inst_15861);

(statearr_15867_16488[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15866 === (1))){
var inst_15821 = [];
var inst_15822 = inst_15821;
var inst_15823 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_15865__$1 = (function (){var statearr_15868 = state_15865;
(statearr_15868[(7)] = inst_15823);

(statearr_15868[(8)] = inst_15822);

return statearr_15868;
})();
var statearr_15869_16489 = state_15865__$1;
(statearr_15869_16489[(2)] = null);

(statearr_15869_16489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15866 === (4))){
var inst_15826 = (state_15865[(9)]);
var inst_15826__$1 = (state_15865[(2)]);
var inst_15827 = (inst_15826__$1 == null);
var inst_15828 = cljs.core.not(inst_15827);
var state_15865__$1 = (function (){var statearr_15870 = state_15865;
(statearr_15870[(9)] = inst_15826__$1);

return statearr_15870;
})();
if(inst_15828){
var statearr_15871_16490 = state_15865__$1;
(statearr_15871_16490[(1)] = (5));

} else {
var statearr_15872_16491 = state_15865__$1;
(statearr_15872_16491[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15866 === (15))){
var inst_15822 = (state_15865[(8)]);
var inst_15853 = cljs.core.vec(inst_15822);
var state_15865__$1 = state_15865;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15865__$1,(18),out,inst_15853);
} else {
if((state_val_15866 === (13))){
var inst_15848 = (state_15865[(2)]);
var state_15865__$1 = state_15865;
var statearr_15873_16492 = state_15865__$1;
(statearr_15873_16492[(2)] = inst_15848);

(statearr_15873_16492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15866 === (6))){
var inst_15822 = (state_15865[(8)]);
var inst_15850 = inst_15822.length;
var inst_15851 = (inst_15850 > (0));
var state_15865__$1 = state_15865;
if(cljs.core.truth_(inst_15851)){
var statearr_15874_16493 = state_15865__$1;
(statearr_15874_16493[(1)] = (15));

} else {
var statearr_15875_16494 = state_15865__$1;
(statearr_15875_16494[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15866 === (17))){
var inst_15858 = (state_15865[(2)]);
var inst_15859 = cljs.core.async.close_BANG_(out);
var state_15865__$1 = (function (){var statearr_15876 = state_15865;
(statearr_15876[(10)] = inst_15858);

return statearr_15876;
})();
var statearr_15877_16495 = state_15865__$1;
(statearr_15877_16495[(2)] = inst_15859);

(statearr_15877_16495[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15866 === (3))){
var inst_15863 = (state_15865[(2)]);
var state_15865__$1 = state_15865;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15865__$1,inst_15863);
} else {
if((state_val_15866 === (12))){
var inst_15822 = (state_15865[(8)]);
var inst_15841 = cljs.core.vec(inst_15822);
var state_15865__$1 = state_15865;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15865__$1,(14),out,inst_15841);
} else {
if((state_val_15866 === (2))){
var state_15865__$1 = state_15865;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15865__$1,(4),ch);
} else {
if((state_val_15866 === (11))){
var inst_15830 = (state_15865[(11)]);
var inst_15826 = (state_15865[(9)]);
var inst_15822 = (state_15865[(8)]);
var inst_15838 = inst_15822.push(inst_15826);
var tmp15878 = inst_15822;
var inst_15822__$1 = tmp15878;
var inst_15823 = inst_15830;
var state_15865__$1 = (function (){var statearr_15879 = state_15865;
(statearr_15879[(12)] = inst_15838);

(statearr_15879[(7)] = inst_15823);

(statearr_15879[(8)] = inst_15822__$1);

return statearr_15879;
})();
var statearr_15880_16496 = state_15865__$1;
(statearr_15880_16496[(2)] = null);

(statearr_15880_16496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15866 === (9))){
var inst_15823 = (state_15865[(7)]);
var inst_15834 = cljs.core.keyword_identical_QMARK_(inst_15823,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_15865__$1 = state_15865;
var statearr_15881_16497 = state_15865__$1;
(statearr_15881_16497[(2)] = inst_15834);

(statearr_15881_16497[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15866 === (5))){
var inst_15831 = (state_15865[(13)]);
var inst_15830 = (state_15865[(11)]);
var inst_15826 = (state_15865[(9)]);
var inst_15823 = (state_15865[(7)]);
var inst_15830__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_15826) : f.call(null,inst_15826));
var inst_15831__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15830__$1,inst_15823);
var state_15865__$1 = (function (){var statearr_15882 = state_15865;
(statearr_15882[(13)] = inst_15831__$1);

(statearr_15882[(11)] = inst_15830__$1);

return statearr_15882;
})();
if(inst_15831__$1){
var statearr_15883_16498 = state_15865__$1;
(statearr_15883_16498[(1)] = (8));

} else {
var statearr_15884_16499 = state_15865__$1;
(statearr_15884_16499[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15866 === (14))){
var inst_15830 = (state_15865[(11)]);
var inst_15826 = (state_15865[(9)]);
var inst_15843 = (state_15865[(2)]);
var inst_15844 = [];
var inst_15845 = inst_15844.push(inst_15826);
var inst_15822 = inst_15844;
var inst_15823 = inst_15830;
var state_15865__$1 = (function (){var statearr_15885 = state_15865;
(statearr_15885[(14)] = inst_15845);

(statearr_15885[(7)] = inst_15823);

(statearr_15885[(15)] = inst_15843);

(statearr_15885[(8)] = inst_15822);

return statearr_15885;
})();
var statearr_15886_16500 = state_15865__$1;
(statearr_15886_16500[(2)] = null);

(statearr_15886_16500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15866 === (16))){
var state_15865__$1 = state_15865;
var statearr_15887_16501 = state_15865__$1;
(statearr_15887_16501[(2)] = null);

(statearr_15887_16501[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15866 === (10))){
var inst_15836 = (state_15865[(2)]);
var state_15865__$1 = state_15865;
if(cljs.core.truth_(inst_15836)){
var statearr_15888_16502 = state_15865__$1;
(statearr_15888_16502[(1)] = (11));

} else {
var statearr_15889_16503 = state_15865__$1;
(statearr_15889_16503[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15866 === (18))){
var inst_15855 = (state_15865[(2)]);
var state_15865__$1 = state_15865;
var statearr_15890_16504 = state_15865__$1;
(statearr_15890_16504[(2)] = inst_15855);

(statearr_15890_16504[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15866 === (8))){
var inst_15831 = (state_15865[(13)]);
var state_15865__$1 = state_15865;
var statearr_15891_16505 = state_15865__$1;
(statearr_15891_16505[(2)] = inst_15831);

(statearr_15891_16505[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__13659__auto__ = null;
var cljs$core$async$state_machine__13659__auto____0 = (function (){
var statearr_15892 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15892[(0)] = cljs$core$async$state_machine__13659__auto__);

(statearr_15892[(1)] = (1));

return statearr_15892;
});
var cljs$core$async$state_machine__13659__auto____1 = (function (state_15865){
while(true){
var ret_value__13660__auto__ = (function (){try{while(true){
var result__13661__auto__ = switch__13658__auto__(state_15865);
if(cljs.core.keyword_identical_QMARK_(result__13661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13661__auto__;
}
break;
}
}catch (e15893){var ex__13662__auto__ = e15893;
var statearr_15894_16506 = state_15865;
(statearr_15894_16506[(2)] = ex__13662__auto__);


if(cljs.core.seq((state_15865[(4)]))){
var statearr_15895_16507 = state_15865;
(statearr_15895_16507[(1)] = cljs.core.first((state_15865[(4)])));

} else {
throw ex__13662__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16508 = state_15865;
state_15865 = G__16508;
continue;
} else {
return ret_value__13660__auto__;
}
break;
}
});
cljs$core$async$state_machine__13659__auto__ = function(state_15865){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13659__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13659__auto____1.call(this,state_15865);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13659__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13659__auto____0;
cljs$core$async$state_machine__13659__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13659__auto____1;
return cljs$core$async$state_machine__13659__auto__;
})()
})();
var state__13761__auto__ = (function (){var statearr_15896 = f__13760__auto__();
(statearr_15896[(6)] = c__13759__auto___16487);

return statearr_15896;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13761__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
