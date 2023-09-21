goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___21014 = arguments.length;
var i__5770__auto___21015 = (0);
while(true){
if((i__5770__auto___21015 < len__5769__auto___21014)){
args__5775__auto__.push((arguments[i__5770__auto___21015]));

var G__21016 = (i__5770__auto___21015 + (1));
i__5770__auto___21015 = G__21016;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq20553){
var G__20554 = cljs.core.first(seq20553);
var seq20553__$1 = cljs.core.next(seq20553);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20554,seq20553__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__20570 = cljs.core.seq(sources);
var chunk__20571 = null;
var count__20572 = (0);
var i__20573 = (0);
while(true){
if((i__20573 < count__20572)){
var map__20580 = chunk__20571.cljs$core$IIndexed$_nth$arity$2(null,i__20573);
var map__20580__$1 = cljs.core.__destructure_map(map__20580);
var src = map__20580__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20580__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20580__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20580__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20580__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20581){var e_21017 = e20581;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21017);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21017.message)].join('')));
}

var G__21018 = seq__20570;
var G__21019 = chunk__20571;
var G__21020 = count__20572;
var G__21021 = (i__20573 + (1));
seq__20570 = G__21018;
chunk__20571 = G__21019;
count__20572 = G__21020;
i__20573 = G__21021;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20570);
if(temp__5804__auto__){
var seq__20570__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20570__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20570__$1);
var G__21022 = cljs.core.chunk_rest(seq__20570__$1);
var G__21023 = c__5568__auto__;
var G__21024 = cljs.core.count(c__5568__auto__);
var G__21025 = (0);
seq__20570 = G__21022;
chunk__20571 = G__21023;
count__20572 = G__21024;
i__20573 = G__21025;
continue;
} else {
var map__20582 = cljs.core.first(seq__20570__$1);
var map__20582__$1 = cljs.core.__destructure_map(map__20582);
var src = map__20582__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20582__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20582__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20582__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20582__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20585){var e_21026 = e20585;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21026);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21026.message)].join('')));
}

var G__21027 = cljs.core.next(seq__20570__$1);
var G__21028 = null;
var G__21029 = (0);
var G__21030 = (0);
seq__20570 = G__21027;
chunk__20571 = G__21028;
count__20572 = G__21029;
i__20573 = G__21030;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__20586 = cljs.core.seq(js_requires);
var chunk__20587 = null;
var count__20588 = (0);
var i__20589 = (0);
while(true){
if((i__20589 < count__20588)){
var js_ns = chunk__20587.cljs$core$IIndexed$_nth$arity$2(null,i__20589);
var require_str_21031 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21031);


var G__21032 = seq__20586;
var G__21033 = chunk__20587;
var G__21034 = count__20588;
var G__21035 = (i__20589 + (1));
seq__20586 = G__21032;
chunk__20587 = G__21033;
count__20588 = G__21034;
i__20589 = G__21035;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20586);
if(temp__5804__auto__){
var seq__20586__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20586__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20586__$1);
var G__21036 = cljs.core.chunk_rest(seq__20586__$1);
var G__21037 = c__5568__auto__;
var G__21038 = cljs.core.count(c__5568__auto__);
var G__21039 = (0);
seq__20586 = G__21036;
chunk__20587 = G__21037;
count__20588 = G__21038;
i__20589 = G__21039;
continue;
} else {
var js_ns = cljs.core.first(seq__20586__$1);
var require_str_21040 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21040);


var G__21041 = cljs.core.next(seq__20586__$1);
var G__21042 = null;
var G__21043 = (0);
var G__21044 = (0);
seq__20586 = G__21041;
chunk__20587 = G__21042;
count__20588 = G__21043;
i__20589 = G__21044;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__20591){
var map__20592 = p__20591;
var map__20592__$1 = cljs.core.__destructure_map(map__20592);
var msg = map__20592__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20592__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20592__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20593(s__20594){
return (new cljs.core.LazySeq(null,(function (){
var s__20594__$1 = s__20594;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__20594__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__20599 = cljs.core.first(xs__6360__auto__);
var map__20599__$1 = cljs.core.__destructure_map(map__20599);
var src = map__20599__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20599__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20599__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__20594__$1,map__20599,map__20599__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20592,map__20592__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20593_$_iter__20595(s__20596){
return (new cljs.core.LazySeq(null,((function (s__20594__$1,map__20599,map__20599__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20592,map__20592__$1,msg,info,reload_info){
return (function (){
var s__20596__$1 = s__20596;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__20596__$1);
if(temp__5804__auto____$1){
var s__20596__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20596__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__20596__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__20598 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__20597 = (0);
while(true){
if((i__20597 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__20597);
cljs.core.chunk_append(b__20598,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__21045 = (i__20597 + (1));
i__20597 = G__21045;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20598),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20593_$_iter__20595(cljs.core.chunk_rest(s__20596__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20598),null);
}
} else {
var warning = cljs.core.first(s__20596__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20593_$_iter__20595(cljs.core.rest(s__20596__$2)));
}
} else {
return null;
}
break;
}
});})(s__20594__$1,map__20599,map__20599__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20592,map__20592__$1,msg,info,reload_info))
,null,null));
});})(s__20594__$1,map__20599,map__20599__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20592,map__20592__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20593(cljs.core.rest(s__20594__$1)));
} else {
var G__21046 = cljs.core.rest(s__20594__$1);
s__20594__$1 = G__21046;
continue;
}
} else {
var G__21047 = cljs.core.rest(s__20594__$1);
s__20594__$1 = G__21047;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__20600_21048 = cljs.core.seq(warnings);
var chunk__20601_21049 = null;
var count__20602_21050 = (0);
var i__20603_21051 = (0);
while(true){
if((i__20603_21051 < count__20602_21050)){
var map__20606_21052 = chunk__20601_21049.cljs$core$IIndexed$_nth$arity$2(null,i__20603_21051);
var map__20606_21053__$1 = cljs.core.__destructure_map(map__20606_21052);
var w_21054 = map__20606_21053__$1;
var msg_21055__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20606_21053__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21056 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20606_21053__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21057 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20606_21053__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21058 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20606_21053__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21058)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21056),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21057),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21055__$1)].join(''));


var G__21059 = seq__20600_21048;
var G__21060 = chunk__20601_21049;
var G__21061 = count__20602_21050;
var G__21062 = (i__20603_21051 + (1));
seq__20600_21048 = G__21059;
chunk__20601_21049 = G__21060;
count__20602_21050 = G__21061;
i__20603_21051 = G__21062;
continue;
} else {
var temp__5804__auto___21063 = cljs.core.seq(seq__20600_21048);
if(temp__5804__auto___21063){
var seq__20600_21064__$1 = temp__5804__auto___21063;
if(cljs.core.chunked_seq_QMARK_(seq__20600_21064__$1)){
var c__5568__auto___21065 = cljs.core.chunk_first(seq__20600_21064__$1);
var G__21066 = cljs.core.chunk_rest(seq__20600_21064__$1);
var G__21067 = c__5568__auto___21065;
var G__21068 = cljs.core.count(c__5568__auto___21065);
var G__21069 = (0);
seq__20600_21048 = G__21066;
chunk__20601_21049 = G__21067;
count__20602_21050 = G__21068;
i__20603_21051 = G__21069;
continue;
} else {
var map__20607_21070 = cljs.core.first(seq__20600_21064__$1);
var map__20607_21071__$1 = cljs.core.__destructure_map(map__20607_21070);
var w_21072 = map__20607_21071__$1;
var msg_21073__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20607_21071__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21074 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20607_21071__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21075 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20607_21071__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21076 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20607_21071__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21076)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21074),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21075),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21073__$1)].join(''));


var G__21077 = cljs.core.next(seq__20600_21064__$1);
var G__21078 = null;
var G__21079 = (0);
var G__21080 = (0);
seq__20600_21048 = G__21077;
chunk__20601_21049 = G__21078;
count__20602_21050 = G__21079;
i__20603_21051 = G__21080;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__20590_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__20590_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__20608){
var map__20609 = p__20608;
var map__20609__$1 = cljs.core.__destructure_map(map__20609);
var msg = map__20609__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20609__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20609__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__20610 = cljs.core.seq(updates);
var chunk__20612 = null;
var count__20613 = (0);
var i__20614 = (0);
while(true){
if((i__20614 < count__20613)){
var path = chunk__20612.cljs$core$IIndexed$_nth$arity$2(null,i__20614);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__20809_21081 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__20813_21082 = null;
var count__20814_21083 = (0);
var i__20815_21084 = (0);
while(true){
if((i__20815_21084 < count__20814_21083)){
var node_21085 = chunk__20813_21082.cljs$core$IIndexed$_nth$arity$2(null,i__20815_21084);
if(cljs.core.not(node_21085.shadow$old)){
var path_match_21086 = shadow.cljs.devtools.client.browser.match_paths(node_21085.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21086)){
var new_link_21087 = (function (){var G__20859 = node_21085.cloneNode(true);
G__20859.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21086),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__20859;
})();
(node_21085.shadow$old = true);

(new_link_21087.onload = ((function (seq__20809_21081,chunk__20813_21082,count__20814_21083,i__20815_21084,seq__20610,chunk__20612,count__20613,i__20614,new_link_21087,path_match_21086,node_21085,path,map__20609,map__20609__$1,msg,updates,reload_info){
return (function (e){
var seq__20860_21088 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__20862_21089 = null;
var count__20863_21090 = (0);
var i__20864_21091 = (0);
while(true){
if((i__20864_21091 < count__20863_21090)){
var map__20868_21092 = chunk__20862_21089.cljs$core$IIndexed$_nth$arity$2(null,i__20864_21091);
var map__20868_21093__$1 = cljs.core.__destructure_map(map__20868_21092);
var task_21094 = map__20868_21093__$1;
var fn_str_21095 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20868_21093__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21096 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20868_21093__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21097 = goog.getObjectByName(fn_str_21095,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21096)].join(''));

(fn_obj_21097.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21097.cljs$core$IFn$_invoke$arity$2(path,new_link_21087) : fn_obj_21097.call(null,path,new_link_21087));


var G__21098 = seq__20860_21088;
var G__21099 = chunk__20862_21089;
var G__21100 = count__20863_21090;
var G__21101 = (i__20864_21091 + (1));
seq__20860_21088 = G__21098;
chunk__20862_21089 = G__21099;
count__20863_21090 = G__21100;
i__20864_21091 = G__21101;
continue;
} else {
var temp__5804__auto___21102 = cljs.core.seq(seq__20860_21088);
if(temp__5804__auto___21102){
var seq__20860_21103__$1 = temp__5804__auto___21102;
if(cljs.core.chunked_seq_QMARK_(seq__20860_21103__$1)){
var c__5568__auto___21104 = cljs.core.chunk_first(seq__20860_21103__$1);
var G__21105 = cljs.core.chunk_rest(seq__20860_21103__$1);
var G__21106 = c__5568__auto___21104;
var G__21107 = cljs.core.count(c__5568__auto___21104);
var G__21108 = (0);
seq__20860_21088 = G__21105;
chunk__20862_21089 = G__21106;
count__20863_21090 = G__21107;
i__20864_21091 = G__21108;
continue;
} else {
var map__20869_21109 = cljs.core.first(seq__20860_21103__$1);
var map__20869_21110__$1 = cljs.core.__destructure_map(map__20869_21109);
var task_21111 = map__20869_21110__$1;
var fn_str_21112 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20869_21110__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21113 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20869_21110__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21114 = goog.getObjectByName(fn_str_21112,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21113)].join(''));

(fn_obj_21114.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21114.cljs$core$IFn$_invoke$arity$2(path,new_link_21087) : fn_obj_21114.call(null,path,new_link_21087));


var G__21115 = cljs.core.next(seq__20860_21103__$1);
var G__21116 = null;
var G__21117 = (0);
var G__21118 = (0);
seq__20860_21088 = G__21115;
chunk__20862_21089 = G__21116;
count__20863_21090 = G__21117;
i__20864_21091 = G__21118;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21085);
});})(seq__20809_21081,chunk__20813_21082,count__20814_21083,i__20815_21084,seq__20610,chunk__20612,count__20613,i__20614,new_link_21087,path_match_21086,node_21085,path,map__20609,map__20609__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21086], 0));

goog.dom.insertSiblingAfter(new_link_21087,node_21085);


var G__21119 = seq__20809_21081;
var G__21120 = chunk__20813_21082;
var G__21121 = count__20814_21083;
var G__21122 = (i__20815_21084 + (1));
seq__20809_21081 = G__21119;
chunk__20813_21082 = G__21120;
count__20814_21083 = G__21121;
i__20815_21084 = G__21122;
continue;
} else {
var G__21123 = seq__20809_21081;
var G__21124 = chunk__20813_21082;
var G__21125 = count__20814_21083;
var G__21126 = (i__20815_21084 + (1));
seq__20809_21081 = G__21123;
chunk__20813_21082 = G__21124;
count__20814_21083 = G__21125;
i__20815_21084 = G__21126;
continue;
}
} else {
var G__21128 = seq__20809_21081;
var G__21129 = chunk__20813_21082;
var G__21130 = count__20814_21083;
var G__21131 = (i__20815_21084 + (1));
seq__20809_21081 = G__21128;
chunk__20813_21082 = G__21129;
count__20814_21083 = G__21130;
i__20815_21084 = G__21131;
continue;
}
} else {
var temp__5804__auto___21132 = cljs.core.seq(seq__20809_21081);
if(temp__5804__auto___21132){
var seq__20809_21133__$1 = temp__5804__auto___21132;
if(cljs.core.chunked_seq_QMARK_(seq__20809_21133__$1)){
var c__5568__auto___21134 = cljs.core.chunk_first(seq__20809_21133__$1);
var G__21135 = cljs.core.chunk_rest(seq__20809_21133__$1);
var G__21136 = c__5568__auto___21134;
var G__21137 = cljs.core.count(c__5568__auto___21134);
var G__21138 = (0);
seq__20809_21081 = G__21135;
chunk__20813_21082 = G__21136;
count__20814_21083 = G__21137;
i__20815_21084 = G__21138;
continue;
} else {
var node_21140 = cljs.core.first(seq__20809_21133__$1);
if(cljs.core.not(node_21140.shadow$old)){
var path_match_21141 = shadow.cljs.devtools.client.browser.match_paths(node_21140.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21141)){
var new_link_21142 = (function (){var G__20871 = node_21140.cloneNode(true);
G__20871.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21141),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__20871;
})();
(node_21140.shadow$old = true);

(new_link_21142.onload = ((function (seq__20809_21081,chunk__20813_21082,count__20814_21083,i__20815_21084,seq__20610,chunk__20612,count__20613,i__20614,new_link_21142,path_match_21141,node_21140,seq__20809_21133__$1,temp__5804__auto___21132,path,map__20609,map__20609__$1,msg,updates,reload_info){
return (function (e){
var seq__20872_21143 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__20874_21144 = null;
var count__20875_21145 = (0);
var i__20876_21146 = (0);
while(true){
if((i__20876_21146 < count__20875_21145)){
var map__20880_21147 = chunk__20874_21144.cljs$core$IIndexed$_nth$arity$2(null,i__20876_21146);
var map__20880_21148__$1 = cljs.core.__destructure_map(map__20880_21147);
var task_21149 = map__20880_21148__$1;
var fn_str_21150 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20880_21148__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21151 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20880_21148__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21152 = goog.getObjectByName(fn_str_21150,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21151)].join(''));

(fn_obj_21152.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21152.cljs$core$IFn$_invoke$arity$2(path,new_link_21142) : fn_obj_21152.call(null,path,new_link_21142));


var G__21153 = seq__20872_21143;
var G__21154 = chunk__20874_21144;
var G__21155 = count__20875_21145;
var G__21156 = (i__20876_21146 + (1));
seq__20872_21143 = G__21153;
chunk__20874_21144 = G__21154;
count__20875_21145 = G__21155;
i__20876_21146 = G__21156;
continue;
} else {
var temp__5804__auto___21157__$1 = cljs.core.seq(seq__20872_21143);
if(temp__5804__auto___21157__$1){
var seq__20872_21158__$1 = temp__5804__auto___21157__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20872_21158__$1)){
var c__5568__auto___21159 = cljs.core.chunk_first(seq__20872_21158__$1);
var G__21160 = cljs.core.chunk_rest(seq__20872_21158__$1);
var G__21161 = c__5568__auto___21159;
var G__21162 = cljs.core.count(c__5568__auto___21159);
var G__21163 = (0);
seq__20872_21143 = G__21160;
chunk__20874_21144 = G__21161;
count__20875_21145 = G__21162;
i__20876_21146 = G__21163;
continue;
} else {
var map__20881_21164 = cljs.core.first(seq__20872_21158__$1);
var map__20881_21165__$1 = cljs.core.__destructure_map(map__20881_21164);
var task_21166 = map__20881_21165__$1;
var fn_str_21167 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20881_21165__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21168 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20881_21165__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21169 = goog.getObjectByName(fn_str_21167,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21168)].join(''));

(fn_obj_21169.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21169.cljs$core$IFn$_invoke$arity$2(path,new_link_21142) : fn_obj_21169.call(null,path,new_link_21142));


var G__21170 = cljs.core.next(seq__20872_21158__$1);
var G__21171 = null;
var G__21172 = (0);
var G__21173 = (0);
seq__20872_21143 = G__21170;
chunk__20874_21144 = G__21171;
count__20875_21145 = G__21172;
i__20876_21146 = G__21173;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21140);
});})(seq__20809_21081,chunk__20813_21082,count__20814_21083,i__20815_21084,seq__20610,chunk__20612,count__20613,i__20614,new_link_21142,path_match_21141,node_21140,seq__20809_21133__$1,temp__5804__auto___21132,path,map__20609,map__20609__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21141], 0));

goog.dom.insertSiblingAfter(new_link_21142,node_21140);


var G__21174 = cljs.core.next(seq__20809_21133__$1);
var G__21175 = null;
var G__21176 = (0);
var G__21177 = (0);
seq__20809_21081 = G__21174;
chunk__20813_21082 = G__21175;
count__20814_21083 = G__21176;
i__20815_21084 = G__21177;
continue;
} else {
var G__21178 = cljs.core.next(seq__20809_21133__$1);
var G__21179 = null;
var G__21180 = (0);
var G__21181 = (0);
seq__20809_21081 = G__21178;
chunk__20813_21082 = G__21179;
count__20814_21083 = G__21180;
i__20815_21084 = G__21181;
continue;
}
} else {
var G__21182 = cljs.core.next(seq__20809_21133__$1);
var G__21183 = null;
var G__21184 = (0);
var G__21185 = (0);
seq__20809_21081 = G__21182;
chunk__20813_21082 = G__21183;
count__20814_21083 = G__21184;
i__20815_21084 = G__21185;
continue;
}
}
} else {
}
}
break;
}


var G__21186 = seq__20610;
var G__21187 = chunk__20612;
var G__21188 = count__20613;
var G__21189 = (i__20614 + (1));
seq__20610 = G__21186;
chunk__20612 = G__21187;
count__20613 = G__21188;
i__20614 = G__21189;
continue;
} else {
var G__21190 = seq__20610;
var G__21191 = chunk__20612;
var G__21192 = count__20613;
var G__21193 = (i__20614 + (1));
seq__20610 = G__21190;
chunk__20612 = G__21191;
count__20613 = G__21192;
i__20614 = G__21193;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20610);
if(temp__5804__auto__){
var seq__20610__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20610__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20610__$1);
var G__21194 = cljs.core.chunk_rest(seq__20610__$1);
var G__21195 = c__5568__auto__;
var G__21196 = cljs.core.count(c__5568__auto__);
var G__21197 = (0);
seq__20610 = G__21194;
chunk__20612 = G__21195;
count__20613 = G__21196;
i__20614 = G__21197;
continue;
} else {
var path = cljs.core.first(seq__20610__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__20887_21198 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__20891_21199 = null;
var count__20892_21200 = (0);
var i__20893_21201 = (0);
while(true){
if((i__20893_21201 < count__20892_21200)){
var node_21202 = chunk__20891_21199.cljs$core$IIndexed$_nth$arity$2(null,i__20893_21201);
if(cljs.core.not(node_21202.shadow$old)){
var path_match_21203 = shadow.cljs.devtools.client.browser.match_paths(node_21202.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21203)){
var new_link_21204 = (function (){var G__20922 = node_21202.cloneNode(true);
G__20922.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21203),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__20922;
})();
(node_21202.shadow$old = true);

(new_link_21204.onload = ((function (seq__20887_21198,chunk__20891_21199,count__20892_21200,i__20893_21201,seq__20610,chunk__20612,count__20613,i__20614,new_link_21204,path_match_21203,node_21202,path,seq__20610__$1,temp__5804__auto__,map__20609,map__20609__$1,msg,updates,reload_info){
return (function (e){
var seq__20923_21205 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__20925_21206 = null;
var count__20926_21207 = (0);
var i__20927_21208 = (0);
while(true){
if((i__20927_21208 < count__20926_21207)){
var map__20931_21209 = chunk__20925_21206.cljs$core$IIndexed$_nth$arity$2(null,i__20927_21208);
var map__20931_21210__$1 = cljs.core.__destructure_map(map__20931_21209);
var task_21211 = map__20931_21210__$1;
var fn_str_21212 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20931_21210__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21213 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20931_21210__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21214 = goog.getObjectByName(fn_str_21212,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21213)].join(''));

(fn_obj_21214.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21214.cljs$core$IFn$_invoke$arity$2(path,new_link_21204) : fn_obj_21214.call(null,path,new_link_21204));


var G__21215 = seq__20923_21205;
var G__21216 = chunk__20925_21206;
var G__21217 = count__20926_21207;
var G__21218 = (i__20927_21208 + (1));
seq__20923_21205 = G__21215;
chunk__20925_21206 = G__21216;
count__20926_21207 = G__21217;
i__20927_21208 = G__21218;
continue;
} else {
var temp__5804__auto___21219__$1 = cljs.core.seq(seq__20923_21205);
if(temp__5804__auto___21219__$1){
var seq__20923_21220__$1 = temp__5804__auto___21219__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20923_21220__$1)){
var c__5568__auto___21221 = cljs.core.chunk_first(seq__20923_21220__$1);
var G__21222 = cljs.core.chunk_rest(seq__20923_21220__$1);
var G__21223 = c__5568__auto___21221;
var G__21224 = cljs.core.count(c__5568__auto___21221);
var G__21225 = (0);
seq__20923_21205 = G__21222;
chunk__20925_21206 = G__21223;
count__20926_21207 = G__21224;
i__20927_21208 = G__21225;
continue;
} else {
var map__20933_21226 = cljs.core.first(seq__20923_21220__$1);
var map__20933_21227__$1 = cljs.core.__destructure_map(map__20933_21226);
var task_21228 = map__20933_21227__$1;
var fn_str_21229 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20933_21227__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21230 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20933_21227__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21231 = goog.getObjectByName(fn_str_21229,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21230)].join(''));

(fn_obj_21231.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21231.cljs$core$IFn$_invoke$arity$2(path,new_link_21204) : fn_obj_21231.call(null,path,new_link_21204));


var G__21232 = cljs.core.next(seq__20923_21220__$1);
var G__21233 = null;
var G__21234 = (0);
var G__21235 = (0);
seq__20923_21205 = G__21232;
chunk__20925_21206 = G__21233;
count__20926_21207 = G__21234;
i__20927_21208 = G__21235;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21202);
});})(seq__20887_21198,chunk__20891_21199,count__20892_21200,i__20893_21201,seq__20610,chunk__20612,count__20613,i__20614,new_link_21204,path_match_21203,node_21202,path,seq__20610__$1,temp__5804__auto__,map__20609,map__20609__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21203], 0));

goog.dom.insertSiblingAfter(new_link_21204,node_21202);


var G__21236 = seq__20887_21198;
var G__21237 = chunk__20891_21199;
var G__21238 = count__20892_21200;
var G__21239 = (i__20893_21201 + (1));
seq__20887_21198 = G__21236;
chunk__20891_21199 = G__21237;
count__20892_21200 = G__21238;
i__20893_21201 = G__21239;
continue;
} else {
var G__21240 = seq__20887_21198;
var G__21241 = chunk__20891_21199;
var G__21242 = count__20892_21200;
var G__21243 = (i__20893_21201 + (1));
seq__20887_21198 = G__21240;
chunk__20891_21199 = G__21241;
count__20892_21200 = G__21242;
i__20893_21201 = G__21243;
continue;
}
} else {
var G__21244 = seq__20887_21198;
var G__21245 = chunk__20891_21199;
var G__21246 = count__20892_21200;
var G__21247 = (i__20893_21201 + (1));
seq__20887_21198 = G__21244;
chunk__20891_21199 = G__21245;
count__20892_21200 = G__21246;
i__20893_21201 = G__21247;
continue;
}
} else {
var temp__5804__auto___21248__$1 = cljs.core.seq(seq__20887_21198);
if(temp__5804__auto___21248__$1){
var seq__20887_21249__$1 = temp__5804__auto___21248__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20887_21249__$1)){
var c__5568__auto___21250 = cljs.core.chunk_first(seq__20887_21249__$1);
var G__21251 = cljs.core.chunk_rest(seq__20887_21249__$1);
var G__21252 = c__5568__auto___21250;
var G__21253 = cljs.core.count(c__5568__auto___21250);
var G__21254 = (0);
seq__20887_21198 = G__21251;
chunk__20891_21199 = G__21252;
count__20892_21200 = G__21253;
i__20893_21201 = G__21254;
continue;
} else {
var node_21255 = cljs.core.first(seq__20887_21249__$1);
if(cljs.core.not(node_21255.shadow$old)){
var path_match_21256 = shadow.cljs.devtools.client.browser.match_paths(node_21255.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21256)){
var new_link_21257 = (function (){var G__20934 = node_21255.cloneNode(true);
G__20934.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21256),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__20934;
})();
(node_21255.shadow$old = true);

(new_link_21257.onload = ((function (seq__20887_21198,chunk__20891_21199,count__20892_21200,i__20893_21201,seq__20610,chunk__20612,count__20613,i__20614,new_link_21257,path_match_21256,node_21255,seq__20887_21249__$1,temp__5804__auto___21248__$1,path,seq__20610__$1,temp__5804__auto__,map__20609,map__20609__$1,msg,updates,reload_info){
return (function (e){
var seq__20935_21258 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__20937_21259 = null;
var count__20938_21260 = (0);
var i__20939_21261 = (0);
while(true){
if((i__20939_21261 < count__20938_21260)){
var map__20947_21262 = chunk__20937_21259.cljs$core$IIndexed$_nth$arity$2(null,i__20939_21261);
var map__20947_21263__$1 = cljs.core.__destructure_map(map__20947_21262);
var task_21264 = map__20947_21263__$1;
var fn_str_21265 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20947_21263__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21266 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20947_21263__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21267 = goog.getObjectByName(fn_str_21265,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21266)].join(''));

(fn_obj_21267.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21267.cljs$core$IFn$_invoke$arity$2(path,new_link_21257) : fn_obj_21267.call(null,path,new_link_21257));


var G__21268 = seq__20935_21258;
var G__21269 = chunk__20937_21259;
var G__21270 = count__20938_21260;
var G__21271 = (i__20939_21261 + (1));
seq__20935_21258 = G__21268;
chunk__20937_21259 = G__21269;
count__20938_21260 = G__21270;
i__20939_21261 = G__21271;
continue;
} else {
var temp__5804__auto___21272__$2 = cljs.core.seq(seq__20935_21258);
if(temp__5804__auto___21272__$2){
var seq__20935_21273__$1 = temp__5804__auto___21272__$2;
if(cljs.core.chunked_seq_QMARK_(seq__20935_21273__$1)){
var c__5568__auto___21274 = cljs.core.chunk_first(seq__20935_21273__$1);
var G__21275 = cljs.core.chunk_rest(seq__20935_21273__$1);
var G__21276 = c__5568__auto___21274;
var G__21277 = cljs.core.count(c__5568__auto___21274);
var G__21278 = (0);
seq__20935_21258 = G__21275;
chunk__20937_21259 = G__21276;
count__20938_21260 = G__21277;
i__20939_21261 = G__21278;
continue;
} else {
var map__20962_21279 = cljs.core.first(seq__20935_21273__$1);
var map__20962_21280__$1 = cljs.core.__destructure_map(map__20962_21279);
var task_21281 = map__20962_21280__$1;
var fn_str_21282 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20962_21280__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21283 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20962_21280__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21284 = goog.getObjectByName(fn_str_21282,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21283)].join(''));

(fn_obj_21284.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21284.cljs$core$IFn$_invoke$arity$2(path,new_link_21257) : fn_obj_21284.call(null,path,new_link_21257));


var G__21285 = cljs.core.next(seq__20935_21273__$1);
var G__21286 = null;
var G__21287 = (0);
var G__21288 = (0);
seq__20935_21258 = G__21285;
chunk__20937_21259 = G__21286;
count__20938_21260 = G__21287;
i__20939_21261 = G__21288;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21255);
});})(seq__20887_21198,chunk__20891_21199,count__20892_21200,i__20893_21201,seq__20610,chunk__20612,count__20613,i__20614,new_link_21257,path_match_21256,node_21255,seq__20887_21249__$1,temp__5804__auto___21248__$1,path,seq__20610__$1,temp__5804__auto__,map__20609,map__20609__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21256], 0));

goog.dom.insertSiblingAfter(new_link_21257,node_21255);


var G__21289 = cljs.core.next(seq__20887_21249__$1);
var G__21290 = null;
var G__21291 = (0);
var G__21292 = (0);
seq__20887_21198 = G__21289;
chunk__20891_21199 = G__21290;
count__20892_21200 = G__21291;
i__20893_21201 = G__21292;
continue;
} else {
var G__21293 = cljs.core.next(seq__20887_21249__$1);
var G__21294 = null;
var G__21295 = (0);
var G__21296 = (0);
seq__20887_21198 = G__21293;
chunk__20891_21199 = G__21294;
count__20892_21200 = G__21295;
i__20893_21201 = G__21296;
continue;
}
} else {
var G__21297 = cljs.core.next(seq__20887_21249__$1);
var G__21298 = null;
var G__21299 = (0);
var G__21300 = (0);
seq__20887_21198 = G__21297;
chunk__20891_21199 = G__21298;
count__20892_21200 = G__21299;
i__20893_21201 = G__21300;
continue;
}
}
} else {
}
}
break;
}


var G__21301 = cljs.core.next(seq__20610__$1);
var G__21302 = null;
var G__21303 = (0);
var G__21304 = (0);
seq__20610 = G__21301;
chunk__20612 = G__21302;
count__20613 = G__21303;
i__20614 = G__21304;
continue;
} else {
var G__21305 = cljs.core.next(seq__20610__$1);
var G__21306 = null;
var G__21307 = (0);
var G__21308 = (0);
seq__20610 = G__21305;
chunk__20612 = G__21306;
count__20613 = G__21307;
i__20614 = G__21308;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__20967){
var map__20968 = p__20967;
var map__20968__$1 = cljs.core.__destructure_map(map__20968);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20968__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__20969,done,error){
var map__20970 = p__20969;
var map__20970__$1 = cljs.core.__destructure_map(map__20970);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20970__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__20972,done,error){
var map__20973 = p__20972;
var map__20973__$1 = cljs.core.__destructure_map(map__20973);
var msg = map__20973__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20973__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20973__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20973__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__20985){
var map__20988 = p__20985;
var map__20988__$1 = cljs.core.__destructure_map(map__20988);
var src = map__20988__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20988__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__21000 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__21000) : done.call(null,G__21000));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__21001){
var map__21002 = p__21001;
var map__21002__$1 = cljs.core.__destructure_map(map__21002);
var msg__$1 = map__21002__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21002__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e21003){var ex = e21003;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__21004){
var map__21005 = p__21004;
var map__21005__$1 = cljs.core.__destructure_map(map__21005);
var env = map__21005__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21005__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__21008){
var map__21009 = p__21008;
var map__21009__$1 = cljs.core.__destructure_map(map__21009);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21009__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21009__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__21012){
var map__21013 = p__21012;
var map__21013__$1 = cljs.core.__destructure_map(map__21013);
var svc = map__21013__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21013__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
