goog.provide('quil.sketch');
quil.sketch._STAR_applet_STAR_ = null;
quil.sketch.current_applet = (function quil$sketch$current_applet(){
return quil.sketch._STAR_applet_STAR_;
});
quil.sketch.rendering_modes = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"java2d","java2d",166099237),(p5.prototype["JAVA2D"]),new cljs.core.Keyword(null,"p2d","p2d",-2106175755),(p5.prototype["P2D"]),new cljs.core.Keyword(null,"p3d","p3d",-850380194),(p5.prototype["P3D"]),new cljs.core.Keyword(null,"opengl","opengl",-614998103),(p5.prototype["OPENGL"])], null);
quil.sketch.resolve_renderer = (function quil$sketch$resolve_renderer(mode){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"p3d","p3d",-850380194),mode)){
return (p5.prototype["WEBGL"]);
} else {
return quil.util.resolve_constant_key(mode,quil.sketch.rendering_modes);
}
});
quil.sketch.set_size = (function quil$sketch$set_size(applet,width,height){
var temp__5804__auto__ = applet.quil_canvas;
if(cljs.core.truth_(temp__5804__auto__)){
var el = temp__5804__auto__;
var inner_canvas = el.querySelector("canvas");
inner_canvas.setAttribute("width",width);

inner_canvas.setAttribute("height",height);

(inner_canvas.style["width"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(width),"px"].join(''));

(inner_canvas.style["height"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(height),"px"].join(''));

(applet.width = window.parseInt(goog.style.getComputedStyle(inner_canvas,"width")));

return (applet.height = window.parseInt(goog.style.getComputedStyle(inner_canvas,"height")));
} else {
return null;
}
});
quil.sketch.size = (function quil$sketch$size(var_args){
var G__20782 = arguments.length;
switch (G__20782) {
case 2:
return quil.sketch.size.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quil.sketch.size.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(quil.sketch.size.cljs$core$IFn$_invoke$arity$2 = (function (width,height){
return quil.sketch.current_applet().createCanvas((width | (0)),(height | (0)));
}));

(quil.sketch.size.cljs$core$IFn$_invoke$arity$3 = (function (width,height,mode){
return quil.sketch.current_applet().createCanvas((width | (0)),(height | (0)),quil.sketch.resolve_renderer(mode));
}));

(quil.sketch.size.cljs$lang$maxFixedArity = 3);

quil.sketch.bind_handlers = (function quil$sketch$bind_handlers(prc,opts){
var seq__20783 = cljs.core.seq(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256),new cljs.core.Keyword(null,"mouseOut","mouseOut",-386669045),new cljs.core.Keyword(null,"mouseScrolled","mouseScrolled",31878252),new cljs.core.Keyword(null,"mouseDragged","mouseDragged",129975181),new cljs.core.Keyword(null,"setup","setup",1987730512),new cljs.core.Keyword(null,"keyReleased","keyReleased",541714964),new cljs.core.Keyword(null,"mouseClicked","mouseClicked",1764302965),new cljs.core.Keyword(null,"mouseReleased","mouseReleased",1116234838),new cljs.core.Keyword(null,"mousePressed","mousePressed",1776186454),new cljs.core.Keyword(null,"mouseMoved","mouseMoved",-1936954058),new cljs.core.Keyword(null,"mouseOver","mouseOver",-1334461930),new cljs.core.Keyword(null,"keyTyped","keyTyped",1437329399),new cljs.core.Keyword(null,"draw","draw",1358331674)],[new cljs.core.Keyword(null,"key-pressed","key-pressed",-757100364),new cljs.core.Keyword(null,"mouse-exited","mouse-exited",-483205244),new cljs.core.Keyword(null,"mouse-wheel","mouse-wheel",1811662439),new cljs.core.Keyword(null,"mouse-dragged","mouse-dragged",-1220073441),new cljs.core.Keyword(null,"setup","setup",1987730512),new cljs.core.Keyword(null,"key-released","key-released",215919828),new cljs.core.Keyword(null,"mouse-clicked","mouse-clicked",-199339421),new cljs.core.Keyword(null,"mouse-released","mouse-released",-664480061),new cljs.core.Keyword(null,"mouse-pressed","mouse-pressed",736955536),new cljs.core.Keyword(null,"mouse-moved","mouse-moved",-1918152310),new cljs.core.Keyword(null,"mouse-entered","mouse-entered",811350322),new cljs.core.Keyword(null,"key-typed","key-typed",-876037597),new cljs.core.Keyword(null,"draw","draw",1358331674)]));
var chunk__20784 = null;
var count__20785 = (0);
var i__20786 = (0);
while(true){
if((i__20786 < count__20785)){
var vec__20839 = chunk__20784.cljs$core$IIndexed$_nth$arity$2(null,i__20786);
var processing_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20839,(0),null);
var quil_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20839,(1),null);
var temp__5804__auto___20945 = (opts.cljs$core$IFn$_invoke$arity$1 ? opts.cljs$core$IFn$_invoke$arity$1(quil_name) : opts.call(null,quil_name));
if(cljs.core.truth_(temp__5804__auto___20945)){
var handler_20946 = temp__5804__auto___20945;
(prc[cljs.core.name(processing_name)] = ((function (seq__20783,chunk__20784,count__20785,i__20786,handler_20946,temp__5804__auto___20945,vec__20839,processing_name,quil_name){
return (function (){
var _STAR_applet_STAR__orig_val__20842 = quil.sketch._STAR_applet_STAR_;
var _STAR_applet_STAR__temp_val__20843 = prc;
(quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR__temp_val__20843);

try{return (handler_20946.cljs$core$IFn$_invoke$arity$0 ? handler_20946.cljs$core$IFn$_invoke$arity$0() : handler_20946.call(null));
}finally {(quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR__orig_val__20842);
}});})(seq__20783,chunk__20784,count__20785,i__20786,handler_20946,temp__5804__auto___20945,vec__20839,processing_name,quil_name))
);
} else {
}


var G__20948 = seq__20783;
var G__20949 = chunk__20784;
var G__20950 = count__20785;
var G__20951 = (i__20786 + (1));
seq__20783 = G__20948;
chunk__20784 = G__20949;
count__20785 = G__20950;
i__20786 = G__20951;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20783);
if(temp__5804__auto__){
var seq__20783__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20783__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20783__$1);
var G__20952 = cljs.core.chunk_rest(seq__20783__$1);
var G__20953 = c__5568__auto__;
var G__20954 = cljs.core.count(c__5568__auto__);
var G__20955 = (0);
seq__20783 = G__20952;
chunk__20784 = G__20953;
count__20785 = G__20954;
i__20786 = G__20955;
continue;
} else {
var vec__20844 = cljs.core.first(seq__20783__$1);
var processing_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20844,(0),null);
var quil_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20844,(1),null);
var temp__5804__auto___20956__$1 = (opts.cljs$core$IFn$_invoke$arity$1 ? opts.cljs$core$IFn$_invoke$arity$1(quil_name) : opts.call(null,quil_name));
if(cljs.core.truth_(temp__5804__auto___20956__$1)){
var handler_20957 = temp__5804__auto___20956__$1;
(prc[cljs.core.name(processing_name)] = ((function (seq__20783,chunk__20784,count__20785,i__20786,handler_20957,temp__5804__auto___20956__$1,vec__20844,processing_name,quil_name,seq__20783__$1,temp__5804__auto__){
return (function (){
var _STAR_applet_STAR__orig_val__20847 = quil.sketch._STAR_applet_STAR_;
var _STAR_applet_STAR__temp_val__20848 = prc;
(quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR__temp_val__20848);

try{return (handler_20957.cljs$core$IFn$_invoke$arity$0 ? handler_20957.cljs$core$IFn$_invoke$arity$0() : handler_20957.call(null));
}finally {(quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR__orig_val__20847);
}});})(seq__20783,chunk__20784,count__20785,i__20786,handler_20957,temp__5804__auto___20956__$1,vec__20844,processing_name,quil_name,seq__20783__$1,temp__5804__auto__))
);
} else {
}


var G__20958 = cljs.core.next(seq__20783__$1);
var G__20959 = null;
var G__20960 = (0);
var G__20961 = (0);
seq__20783 = G__20958;
chunk__20784 = G__20959;
count__20785 = G__20960;
i__20786 = G__20961;
continue;
}
} else {
return null;
}
}
break;
}
});
quil.sketch.in_fullscreen_QMARK_ = (function quil$sketch$in_fullscreen_QMARK_(){
var or__5045__auto__ = document.fullscreenElement;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return document.mozFullScreenElement;
}
});
/**
 * Adds fullscreen support for provided Processing object.
 *   Fullscreen is enabled when user presses F11. We turn
 *   sketch <canvas> element to fullscreen storing old size
 *   in an atom. When user cancels fullscreen (F11 or Esc)
 *   we resize sketch to the old size.
 */
quil.sketch.add_fullscreen_support = (function quil$sketch$add_fullscreen_support(applet){
var old_size = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var adjust_canvas_size = (function (){
if(cljs.core.truth_(quil.sketch.in_fullscreen_QMARK_())){
cljs.core.reset_BANG_(old_size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [applet.width,applet.height], null));

return quil.sketch.set_size(applet,window.screen.width,window.screen.height);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(quil.sketch.set_size,applet,cljs.core.deref(old_size));
}
});
goog.events.listen(window,goog.events.EventType.KEYDOWN,(function (event){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event.key,"F11")) && (cljs.core.not(quil.sketch.in_fullscreen_QMARK_())))){
event.preventDefault();

var canvas = applet.quil_canvas;
if(cljs.core.truth_(canvas.requestFullscreen)){
return canvas.requestFullscreen();
} else {
if(cljs.core.truth_(canvas.mozRequestFullScreen)){
return canvas.mozRequestFullScreen();
} else {
return console.warn("Fullscreen mode is not supported in current browser.");

}
}
} else {
return null;
}
}));

goog.events.listen(document,"fullscreenchange",adjust_canvas_size);

goog.events.listen(document,"mozfullscreenchange",adjust_canvas_size);

return goog.events.listen(document,"fullscreenerror",(function (p1__20849_SHARP_){
return console.error("Error while switching to/from fullscreen: ",p1__20849_SHARP_);
}));
});
quil.sketch.make_sketch = (function quil$sketch$make_sketch(options){
var opts = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(300)], null)], null),(function (p1__20850_SHARP_){
return (p1__20850_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__20850_SHARP_.cljs$core$IFn$_invoke$arity$1(options) : p1__20850_SHARP_.call(null,options));
})(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.comp,cljs.core.cons(quil.middlewares.deprecated_options.deprecated_options,new cljs.core.Keyword(null,"middleware","middleware",1462115504).cljs$core$IFn$_invoke$arity$2(options,cljs.core.PersistentVector.EMPTY))))], 0));
var sketch_size = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(opts);
var renderer = new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(opts);
var features = cljs.core.set(new cljs.core.Keyword(null,"features","features",-1146962336).cljs$core$IFn$_invoke$arity$1(opts));
var setup = (function (){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.sketch.size,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(sketch_size,(cljs.core.truth_(renderer)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [renderer], null):cljs.core.PersistentVector.EMPTY)));

if(cljs.core.truth_(new cljs.core.Keyword(null,"settings","settings",1556144875).cljs$core$IFn$_invoke$arity$1(opts))){
var fexpr__20851_20963 = new cljs.core.Keyword(null,"settings","settings",1556144875).cljs$core$IFn$_invoke$arity$1(opts);
(fexpr__20851_20963.cljs$core$IFn$_invoke$arity$0 ? fexpr__20851_20963.cljs$core$IFn$_invoke$arity$0() : fexpr__20851_20963.call(null));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"setup","setup",1987730512).cljs$core$IFn$_invoke$arity$1(opts))){
var fexpr__20852 = new cljs.core.Keyword(null,"setup","setup",1987730512).cljs$core$IFn$_invoke$arity$1(opts);
return (fexpr__20852.cljs$core$IFn$_invoke$arity$0 ? fexpr__20852.cljs$core$IFn$_invoke$arity$0() : fexpr__20852.call(null));
} else {
return null;
}
});
var mouse_wheel = (cljs.core.truth_(new cljs.core.Keyword(null,"mouse-wheel","mouse-wheel",1811662439).cljs$core$IFn$_invoke$arity$1(opts))?(function (){
var G__20854 = ((-1) * quil.sketch._STAR_applet_STAR_.mouseScroll);
var fexpr__20853 = new cljs.core.Keyword(null,"mouse-wheel","mouse-wheel",1811662439).cljs$core$IFn$_invoke$arity$1(opts);
return (fexpr__20853.cljs$core$IFn$_invoke$arity$1 ? fexpr__20853.cljs$core$IFn$_invoke$arity$1(G__20854) : fexpr__20853.call(null,G__20854));
}):null);
var opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,new cljs.core.Keyword(null,"setup","setup",1987730512),setup,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"mouse-wheel","mouse-wheel",1811662439),mouse_wheel], 0));
var sketch = (function (prc){
quil.sketch.bind_handlers(prc,opts__$1);

(prc.quil = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null));

return (prc.quil_internal_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(quil.util.initial_internal_state));
});
return sketch;
});
quil.sketch.destroy_previous_sketch = (function quil$sketch$destroy_previous_sketch(host_elem){
var temp__5804__auto__ = host_elem.processing_obj;
if(cljs.core.truth_(temp__5804__auto__)){
var proc_obj = temp__5804__auto__;
return proc_obj.remove();
} else {
return null;
}
});
quil.sketch.sketch = (function quil$sketch$sketch(var_args){
var args__5775__auto__ = [];
var len__5769__auto___20964 = arguments.length;
var i__5770__auto___20965 = (0);
while(true){
if((i__5770__auto___20965 < len__5769__auto___20964)){
args__5775__auto__.push((arguments[i__5770__auto___20965]));

var G__20971 = (i__5770__auto___20965 + (1));
i__5770__auto___20965 = G__20971;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic = (function (opts){
var opts_map = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts);
var host_elem = new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(opts_map);
var renderer = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(opts_map);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"p2d","p2d",-2106175755);
}
})();
var host_elem__$1 = ((typeof host_elem === 'string')?document.getElementById(host_elem):host_elem);
if(cljs.core.truth_(host_elem__$1)){
if(cljs.core.truth_(host_elem__$1.processing_context)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(renderer,host_elem__$1.processing_context)){
} else {
console.warn("WARNING: Using different context on one canvas!");
}
} else {
(host_elem__$1.processing_context = renderer);
}

quil.sketch.destroy_previous_sketch(host_elem__$1);

var proc_obj = (new p5(quil.sketch.make_sketch(opts_map),host_elem__$1));
(host_elem__$1.processing_obj = proc_obj);

(proc_obj.quil_canvas = host_elem__$1);

quil.sketch.add_fullscreen_support(proc_obj);

return proc_obj;
} else {
return console.error((cljs.core.truth_(new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(opts_map))?["ERROR: Cannot find host element: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(opts_map))].join(''):"ERROR: Cannot create sketch. :host is not specified or element not found."));
}
}));

(quil.sketch.sketch.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(quil.sketch.sketch.cljs$lang$applyTo = (function (seq20870){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20870));
}));

quil.sketch.sketch_init_list = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.List.EMPTY);
quil.sketch.empty_body_QMARK_ = (function quil$sketch$empty_body_QMARK_(){
var child = document.body.childNodes;
return (child.length <= (1));
});
quil.sketch.add_canvas = (function quil$sketch$add_canvas(canvas_id){
var canvas = document.createElement("canvas");
canvas.setAttribute("id",canvas_id);

return document.body.appendChild(canvas);
});
quil.sketch.init_sketches = (function quil$sketch$init_sketches(){
var add_elem_QMARK__20974 = quil.sketch.empty_body_QMARK_();
var seq__20882_20975 = cljs.core.seq(cljs.core.deref(quil.sketch.sketch_init_list));
var chunk__20883_20976 = null;
var count__20884_20977 = (0);
var i__20885_20978 = (0);
while(true){
if((i__20885_20978 < count__20884_20977)){
var sk_20979 = chunk__20883_20976.cljs$core$IIndexed$_nth$arity$2(null,i__20885_20978);
if(add_elem_QMARK__20974){
quil.sketch.add_canvas(new cljs.core.Keyword(null,"host-id","host-id",742376279).cljs$core$IFn$_invoke$arity$1(sk_20979));
} else {
}

var fexpr__20899_20980 = new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(sk_20979);
(fexpr__20899_20980.cljs$core$IFn$_invoke$arity$0 ? fexpr__20899_20980.cljs$core$IFn$_invoke$arity$0() : fexpr__20899_20980.call(null));


var G__20981 = seq__20882_20975;
var G__20982 = chunk__20883_20976;
var G__20983 = count__20884_20977;
var G__20984 = (i__20885_20978 + (1));
seq__20882_20975 = G__20981;
chunk__20883_20976 = G__20982;
count__20884_20977 = G__20983;
i__20885_20978 = G__20984;
continue;
} else {
var temp__5804__auto___20986 = cljs.core.seq(seq__20882_20975);
if(temp__5804__auto___20986){
var seq__20882_20987__$1 = temp__5804__auto___20986;
if(cljs.core.chunked_seq_QMARK_(seq__20882_20987__$1)){
var c__5568__auto___20989 = cljs.core.chunk_first(seq__20882_20987__$1);
var G__20990 = cljs.core.chunk_rest(seq__20882_20987__$1);
var G__20991 = c__5568__auto___20989;
var G__20992 = cljs.core.count(c__5568__auto___20989);
var G__20993 = (0);
seq__20882_20975 = G__20990;
chunk__20883_20976 = G__20991;
count__20884_20977 = G__20992;
i__20885_20978 = G__20993;
continue;
} else {
var sk_20994 = cljs.core.first(seq__20882_20987__$1);
if(add_elem_QMARK__20974){
quil.sketch.add_canvas(new cljs.core.Keyword(null,"host-id","host-id",742376279).cljs$core$IFn$_invoke$arity$1(sk_20994));
} else {
}

var fexpr__20907_20995 = new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(sk_20994);
(fexpr__20907_20995.cljs$core$IFn$_invoke$arity$0 ? fexpr__20907_20995.cljs$core$IFn$_invoke$arity$0() : fexpr__20907_20995.call(null));


var G__20996 = cljs.core.next(seq__20882_20987__$1);
var G__20997 = null;
var G__20998 = (0);
var G__20999 = (0);
seq__20882_20975 = G__20996;
chunk__20883_20976 = G__20997;
count__20884_20977 = G__20998;
i__20885_20978 = G__20999;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(quil.sketch.sketch_init_list,cljs.core.PersistentVector.EMPTY);
});
quil.sketch.add_sketch_to_init_list = (function quil$sketch$add_sketch_to_init_list(sk){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(quil.sketch.sketch_init_list,cljs.core.conj,sk);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(document.readyState,"complete")){
return quil.sketch.init_sketches();
} else {
return null;
}
});
goog.events.listenOnce(window,goog.events.EventType.LOAD,quil.sketch.init_sketches);

//# sourceMappingURL=quil.sketch.js.map
