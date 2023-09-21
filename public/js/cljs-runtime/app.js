goog.provide('app');
app.start = (function app$start(){
return console.log("start");
});
app._main = (function app$_main(){
console.log("init");

return app.start();
});
app.body = document.body;
app.w = app.body.clientWidth;
app.h = app.body.clientHeight;
app.palette = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"purple haze",new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(10),(10)], null),new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(32),(0),(40)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(82),(15),(125)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(99),(53),(126)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(102),(10),(150)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(132),(26),(200)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(165),(32),(250)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(196),(106),(251)], null)], null)], null);
/**
 * Creates a particle map.
 */
app.particle = (function app$particle(id){
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"vx","vx",-1685168462),(1),new cljs.core.Keyword(null,"vy","vy",-2018509997),(1),new cljs.core.Keyword(null,"size","size",1098693007),(3),new cljs.core.Keyword(null,"direction","direction",-633359395),(0),new cljs.core.Keyword(null,"x","x",2099068185),quil.core.random.cljs$core$IFn$_invoke$arity$1(app.w),new cljs.core.Keyword(null,"y","y",-1757859776),quil.core.random.cljs$core$IFn$_invoke$arity$1(app.h),new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.rand_nth(new cljs.core.Keyword(null,"colors","colors",1157174732).cljs$core$IFn$_invoke$arity$1(app.palette))], null);
});
/**
 * Returns the initial state to use for the update-render loop.
 */
app.sketch_setup = (function app$sketch_setup(){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.particle,cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(2000)));
});
/**
 * Calculates the next position based on the current, the speed and a max.
 */
app.position = (function app$position(current,delta,max){
return cljs.core.mod((current + delta),max);
});
/**
 * Noise zoom level.
 */
app.noise_zoom = 0.0078;
/**
 * Calculates the next direction based on the previous position and id of each particle.
 */
app.direction = (function app$direction(x,y,z){
return (((2) * Math.PI) * (quil.core.noise.cljs$core$IFn$_invoke$arity$2((x * app.noise_zoom),(y * app.noise_zoom)) + (0.2 * quil.core.noise.cljs$core$IFn$_invoke$arity$3((x * app.noise_zoom),(y * app.noise_zoom),(z * app.noise_zoom)))));
});
/**
 * Calculates the next velocity by averaging the current velocity and the added delta.
 */
app.velocity = (function app$velocity(current,delta){
return ((current + delta) / (2));
});
/**
 * Returns the next state to render. Receives the current state as a paramter.
 */
app.sketch_update = (function app$sketch_update(particles){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p,new cljs.core.Keyword(null,"x","x",2099068185),app.position(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"vx","vx",-1685168462).cljs$core$IFn$_invoke$arity$1(p),app.w),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776),app.position(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"vy","vy",-2018509997).cljs$core$IFn$_invoke$arity$1(p),app.h),new cljs.core.Keyword(null,"direction","direction",-633359395),app.direction(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p)),new cljs.core.Keyword(null,"vx","vx",-1685168462),app.velocity(new cljs.core.Keyword(null,"vx","vx",-1685168462).cljs$core$IFn$_invoke$arity$1(p),Math.cos(new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(p))),new cljs.core.Keyword(null,"vy","vy",-2018509997),app.velocity(new cljs.core.Keyword(null,"vy","vy",-2018509997).cljs$core$IFn$_invoke$arity$1(p),Math.sin(new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(p)))], 0));
}),particles);
});
/**
 * Draws the current state to the canvas. Called on each iteration after sketch-update.
 */
app.sketch_draw = (function app$sketch_draw(particles){
quil.core.no_stroke();

var seq__12395 = cljs.core.seq(particles);
var chunk__12396 = null;
var count__12397 = (0);
var i__12398 = (0);
while(true){
if((i__12398 < count__12397)){
var p = chunk__12396.cljs$core$IIndexed$_nth$arity$2(null,i__12398);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.core.fill,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(p),(3)));

quil.core.ellipse(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(p));


var G__12399 = seq__12395;
var G__12400 = chunk__12396;
var G__12401 = count__12397;
var G__12402 = (i__12398 + (1));
seq__12395 = G__12399;
chunk__12396 = G__12400;
count__12397 = G__12401;
i__12398 = G__12402;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12395);
if(temp__5804__auto__){
var seq__12395__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12395__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__12395__$1);
var G__12403 = cljs.core.chunk_rest(seq__12395__$1);
var G__12404 = c__5568__auto__;
var G__12405 = cljs.core.count(c__5568__auto__);
var G__12406 = (0);
seq__12395 = G__12403;
chunk__12396 = G__12404;
count__12397 = G__12405;
i__12398 = G__12406;
continue;
} else {
var p = cljs.core.first(seq__12395__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.core.fill,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(p),(3)));

quil.core.ellipse(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(p));


var G__12407 = cljs.core.next(seq__12395__$1);
var G__12408 = null;
var G__12409 = (0);
var G__12410 = (0);
seq__12395 = G__12407;
chunk__12396 = G__12408;
count__12397 = G__12409;
i__12398 = G__12410;
continue;
}
} else {
return null;
}
}
break;
}
});
app.create = (function app$create(canvas){
return quil.core.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"host","host",-1558485167),canvas,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.w,app.h], null),new cljs.core.Keyword(null,"draw","draw",1358331674),new cljs.core.Var(function(){return app.sketch_draw;},new cljs.core.Symbol("app","sketch-draw","app/sketch-draw",1130699018,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"sketch-draw","sketch-draw",1130795881,null),"app.cljs",18,1,82,82,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"particles","particles",-1852553981,null)], null)),"Draws the current state to the canvas. Called on each iteration after sketch-update.",(cljs.core.truth_(app.sketch_draw)?app.sketch_draw.cljs$lang$test:null)])),new cljs.core.Keyword(null,"setup","setup",1987730512),new cljs.core.Var(function(){return app.sketch_setup;},new cljs.core.Symbol("app","sketch-setup","app/sketch-setup",-1605116604,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"sketch-setup","sketch-setup",-1605195929,null),"app.cljs",19,1,43,43,cljs.core.list(cljs.core.PersistentVector.EMPTY),"Returns the initial state to use for the update-render loop.",(cljs.core.truth_(app.sketch_setup)?app.sketch_setup.cljs$lang$test:null)])),new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.Var(function(){return app.sketch_update;},new cljs.core.Symbol("app","sketch-update","app/sketch-update",877331454,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"sketch-update","sketch-update",877495773,null),"app.cljs",20,1,70,70,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"particles","particles",-1852553981,null)], null)),"Returns the next state to render. Receives the current state as a paramter.",(cljs.core.truth_(app.sketch_update)?app.sketch_update.cljs$lang$test:null)])),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"settings","settings",1556144875),(function (){
quil.core.random_seed((666));

return quil.core.noise_seed((666));
})], 0));
});
if((typeof app !== 'undefined') && (typeof app.sketch !== 'undefined')){
} else {
app.sketch = app.create("sketch");
}

//# sourceMappingURL=app.js.map
