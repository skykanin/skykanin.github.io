goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__17622){
var map__17623 = p__17622;
var map__17623__$1 = cljs.core.__destructure_map(map__17623);
var runtime = map__17623__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17623__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_17710 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_17710)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__17624 = runtime;
var G__17625 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_17710);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__17624,G__17625) : shadow.remote.runtime.shared.process.call(null,G__17624,G__17625));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__17626,res){
var map__17627 = p__17626;
var map__17627__$1 = cljs.core.__destructure_map(map__17627);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17627__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17627__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__17628 = res;
var G__17628__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17628,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__17628);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17628__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__17628__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__17630 = arguments.length;
switch (G__17630) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__17631,msg,handlers,timeout_after_ms){
var map__17632 = p__17631;
var map__17632__$1 = cljs.core.__destructure_map(map__17632);
var runtime = map__17632__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17632__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___17712 = arguments.length;
var i__5770__auto___17713 = (0);
while(true){
if((i__5770__auto___17713 < len__5769__auto___17712)){
args__5775__auto__.push((arguments[i__5770__auto___17713]));

var G__17714 = (i__5770__auto___17713 + (1));
i__5770__auto___17713 = G__17714;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__17639,ev,args){
var map__17640 = p__17639;
var map__17640__$1 = cljs.core.__destructure_map(map__17640);
var runtime = map__17640__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17640__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__17641 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__17644 = null;
var count__17645 = (0);
var i__17646 = (0);
while(true){
if((i__17646 < count__17645)){
var ext = chunk__17644.cljs$core$IIndexed$_nth$arity$2(null,i__17646);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__17715 = seq__17641;
var G__17716 = chunk__17644;
var G__17717 = count__17645;
var G__17718 = (i__17646 + (1));
seq__17641 = G__17715;
chunk__17644 = G__17716;
count__17645 = G__17717;
i__17646 = G__17718;
continue;
} else {
var G__17719 = seq__17641;
var G__17720 = chunk__17644;
var G__17721 = count__17645;
var G__17722 = (i__17646 + (1));
seq__17641 = G__17719;
chunk__17644 = G__17720;
count__17645 = G__17721;
i__17646 = G__17722;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17641);
if(temp__5804__auto__){
var seq__17641__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17641__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17641__$1);
var G__17723 = cljs.core.chunk_rest(seq__17641__$1);
var G__17724 = c__5568__auto__;
var G__17725 = cljs.core.count(c__5568__auto__);
var G__17726 = (0);
seq__17641 = G__17723;
chunk__17644 = G__17724;
count__17645 = G__17725;
i__17646 = G__17726;
continue;
} else {
var ext = cljs.core.first(seq__17641__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__17727 = cljs.core.next(seq__17641__$1);
var G__17728 = null;
var G__17729 = (0);
var G__17730 = (0);
seq__17641 = G__17727;
chunk__17644 = G__17728;
count__17645 = G__17729;
i__17646 = G__17730;
continue;
} else {
var G__17731 = cljs.core.next(seq__17641__$1);
var G__17732 = null;
var G__17733 = (0);
var G__17734 = (0);
seq__17641 = G__17731;
chunk__17644 = G__17732;
count__17645 = G__17733;
i__17646 = G__17734;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq17636){
var G__17637 = cljs.core.first(seq17636);
var seq17636__$1 = cljs.core.next(seq17636);
var G__17638 = cljs.core.first(seq17636__$1);
var seq17636__$2 = cljs.core.next(seq17636__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17637,G__17638,seq17636__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__17655,p__17656){
var map__17657 = p__17655;
var map__17657__$1 = cljs.core.__destructure_map(map__17657);
var runtime = map__17657__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17657__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__17658 = p__17656;
var map__17658__$1 = cljs.core.__destructure_map(map__17658);
var msg = map__17658__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17658__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__17659 = cljs.core.deref(state_ref);
var map__17659__$1 = cljs.core.__destructure_map(map__17659);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17659__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17659__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__17663,msg){
var map__17664 = p__17663;
var map__17664__$1 = cljs.core.__destructure_map(map__17664);
var runtime = map__17664__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17664__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__17665,key,p__17666){
var map__17667 = p__17665;
var map__17667__$1 = cljs.core.__destructure_map(map__17667);
var state = map__17667__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17667__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__17668 = p__17666;
var map__17668__$1 = cljs.core.__destructure_map(map__17668);
var spec = map__17668__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17668__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__17669,key,spec){
var map__17670 = p__17669;
var map__17670__$1 = cljs.core.__destructure_map(map__17670);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17670__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__17671_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__17671_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__17672_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__17672_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__17673_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__17673_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__17674_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__17674_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__17675_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__17675_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__17680,key){
var map__17681 = p__17680;
var map__17681__$1 = cljs.core.__destructure_map(map__17681);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17681__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__17683,msg){
var map__17684 = p__17683;
var map__17684__$1 = cljs.core.__destructure_map(map__17684);
var runtime = map__17684__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17684__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__17690,p__17691){
var map__17692 = p__17690;
var map__17692__$1 = cljs.core.__destructure_map(map__17692);
var runtime = map__17692__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17692__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__17693 = p__17691;
var map__17693__$1 = cljs.core.__destructure_map(map__17693);
var msg = map__17693__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17693__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17693__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__17696 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__17698 = null;
var count__17699 = (0);
var i__17700 = (0);
while(true){
if((i__17700 < count__17699)){
var map__17708 = chunk__17698.cljs$core$IIndexed$_nth$arity$2(null,i__17700);
var map__17708__$1 = cljs.core.__destructure_map(map__17708);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17708__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__17794 = seq__17696;
var G__17795 = chunk__17698;
var G__17796 = count__17699;
var G__17797 = (i__17700 + (1));
seq__17696 = G__17794;
chunk__17698 = G__17795;
count__17699 = G__17796;
i__17700 = G__17797;
continue;
} else {
var G__17798 = seq__17696;
var G__17799 = chunk__17698;
var G__17800 = count__17699;
var G__17801 = (i__17700 + (1));
seq__17696 = G__17798;
chunk__17698 = G__17799;
count__17699 = G__17800;
i__17700 = G__17801;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17696);
if(temp__5804__auto__){
var seq__17696__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17696__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17696__$1);
var G__17802 = cljs.core.chunk_rest(seq__17696__$1);
var G__17803 = c__5568__auto__;
var G__17804 = cljs.core.count(c__5568__auto__);
var G__17805 = (0);
seq__17696 = G__17802;
chunk__17698 = G__17803;
count__17699 = G__17804;
i__17700 = G__17805;
continue;
} else {
var map__17709 = cljs.core.first(seq__17696__$1);
var map__17709__$1 = cljs.core.__destructure_map(map__17709);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17709__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__17810 = cljs.core.next(seq__17696__$1);
var G__17811 = null;
var G__17812 = (0);
var G__17813 = (0);
seq__17696 = G__17810;
chunk__17698 = G__17811;
count__17699 = G__17812;
i__17700 = G__17813;
continue;
} else {
var G__17814 = cljs.core.next(seq__17696__$1);
var G__17815 = null;
var G__17816 = (0);
var G__17817 = (0);
seq__17696 = G__17814;
chunk__17698 = G__17815;
count__17699 = G__17816;
i__17700 = G__17817;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
