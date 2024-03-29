goog.provide('quil.middlewares.navigation_2d');
quil.middlewares.navigation_2d.missing_navigation_key_error = ["state map is missing :navigation-2d key. ","Did you accidentally removed it from the state in ",":update or any other handler?"].join('');
/**
 * Asserts that state map contains :navigation-2d object.
 */
quil.middlewares.navigation_2d.assert_state_has_navigation = (function quil$middlewares$navigation_2d$assert_state_has_navigation(state){
if(cljs.core.truth_(new cljs.core.Keyword(null,"navigation-2d","navigation-2d",-1924168611).cljs$core$IFn$_invoke$arity$1(state))){
return null;
} else {
throw (new Error(quil.middlewares.navigation_2d.missing_navigation_key_error));
}
});
/**
 * Default position configuration: zoom is neutral and central point is
 *   width/2, height/2.
 */
quil.middlewares.navigation_2d.default_position = (function quil$middlewares$navigation_2d$default_position(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width() / 2.0),(quil.core.height() / 2.0)], null),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),(1)], null);
});
/**
 * Custom 'setup' function which creates initial position
 *   configuration and puts it to the state map.
 */
quil.middlewares.navigation_2d.setup_2d_nav = (function quil$middlewares$navigation_2d$setup_2d_nav(user_setup,user_settings){
var initial_state = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([quil.middlewares.navigation_2d.default_position(),cljs.core.select_keys(user_settings,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], null))], 0));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3((user_setup.cljs$core$IFn$_invoke$arity$0 ? user_setup.cljs$core$IFn$_invoke$arity$0() : user_setup.call(null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigation-2d","navigation-2d",-1924168611)], null),(function (p1__22086_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([initial_state,p1__22086_SHARP_], 0));
}));
});
/**
 * Changes center of the sketch depending on the last mouse move. Takes
 *   zoom into account as well.
 */
quil.middlewares.navigation_2d.mouse_dragged = (function quil$middlewares$navigation_2d$mouse_dragged(state,event){
quil.middlewares.navigation_2d.assert_state_has_navigation(state);

var dx = (new cljs.core.Keyword(null,"p-x","p-x",-1721211211).cljs$core$IFn$_invoke$arity$1(event) - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(event));
var dy = (new cljs.core.Keyword(null,"p-y","p-y",-530704830).cljs$core$IFn$_invoke$arity$1(event) - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(event));
var zoom = new cljs.core.Keyword(null,"zoom","zoom",-1827487038).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"navigation-2d","navigation-2d",-1924168611).cljs$core$IFn$_invoke$arity$1(state));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigation-2d","navigation-2d",-1924168611),new cljs.core.Keyword(null,"position","position",-2011731912),(0)], null),cljs.core._PLUS_,(dx / zoom)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigation-2d","navigation-2d",-1924168611),new cljs.core.Keyword(null,"position","position",-2011731912),(1)], null),cljs.core._PLUS_,(dy / zoom));
});
/**
 * Changes zoom settings based on scroll.
 */
quil.middlewares.navigation_2d.mouse_wheel = (function quil$middlewares$navigation_2d$mouse_wheel(state,event){
quil.middlewares.navigation_2d.assert_state_has_navigation(state);

return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigation-2d","navigation-2d",-1924168611),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], null),cljs.core._STAR_,((1) + (-0.1 * event)));
});
/**
 * Calls user draw function with necessary all transformations (position
 *   and zoom) applied.
 */
quil.middlewares.navigation_2d.draw = (function quil$middlewares$navigation_2d$draw(user_draw,state){
quil.middlewares.navigation_2d.assert_state_has_navigation(state);

quil.core.push_matrix();

var nav_2d_22091 = new cljs.core.Keyword(null,"navigation-2d","navigation-2d",-1924168611).cljs$core$IFn$_invoke$arity$1(state);
var zoom_22092 = new cljs.core.Keyword(null,"zoom","zoom",-1827487038).cljs$core$IFn$_invoke$arity$1(nav_2d_22091);
var pos_22093 = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(nav_2d_22091);
quil.core.scale.cljs$core$IFn$_invoke$arity$1(zoom_22092);

var tr__21992__auto___22094 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((quil.core.width() / (2)) / zoom_22092) - cljs.core.first(pos_22093)),(((quil.core.height() / (2)) / zoom_22092) - cljs.core.second(pos_22093))], null);
quil.core.push_matrix();

try{quil.core.translate.cljs$core$IFn$_invoke$arity$1(tr__21992__auto___22094);

(user_draw.cljs$core$IFn$_invoke$arity$1 ? user_draw.cljs$core$IFn$_invoke$arity$1(state) : user_draw.call(null,state));
}finally {quil.core.pop_matrix();
}
return quil.core.pop_matrix();
});
/**
 * Enables navigation over 2D sketch. Dragging mouse will move center of the
 *   skecth and mouse wheel controls zoom.
 */
quil.middlewares.navigation_2d.navigation_2d = (function quil$middlewares$navigation_2d$navigation_2d(options){
var user_settings = new cljs.core.Keyword(null,"navigation-2d","navigation-2d",-1924168611).cljs$core$IFn$_invoke$arity$1(options);
var user_draw = new cljs.core.Keyword(null,"draw","draw",1358331674).cljs$core$IFn$_invoke$arity$2(options,(function (state){
return null;
}));
var user_mouse_dragged = new cljs.core.Keyword(null,"mouse-dragged","mouse-dragged",-1220073441).cljs$core$IFn$_invoke$arity$2(options,(function (state,_){
return state;
}));
var user_mouse_wheel = new cljs.core.Keyword(null,"mouse-wheel","mouse-wheel",1811662439).cljs$core$IFn$_invoke$arity$2(options,(function (state,_){
return state;
}));
var setup = new cljs.core.Keyword(null,"setup","setup",1987730512).cljs$core$IFn$_invoke$arity$2(options,(function (){
return cljs.core.PersistentArrayMap.EMPTY;
}));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(options,new cljs.core.Keyword(null,"setup","setup",1987730512),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(quil.middlewares.navigation_2d.setup_2d_nav,setup,user_settings),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"draw","draw",1358331674),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(quil.middlewares.navigation_2d.draw,user_draw),new cljs.core.Keyword(null,"mouse-dragged","mouse-dragged",-1220073441),(function (state,event){
var G__22087 = quil.middlewares.navigation_2d.mouse_dragged(state,event);
var G__22088 = event;
return (user_mouse_dragged.cljs$core$IFn$_invoke$arity$2 ? user_mouse_dragged.cljs$core$IFn$_invoke$arity$2(G__22087,G__22088) : user_mouse_dragged.call(null,G__22087,G__22088));
}),new cljs.core.Keyword(null,"mouse-wheel","mouse-wheel",1811662439),(function (state,event){
var G__22089 = quil.middlewares.navigation_2d.mouse_wheel(state,event);
var G__22090 = event;
return (user_mouse_wheel.cljs$core$IFn$_invoke$arity$2 ? user_mouse_wheel.cljs$core$IFn$_invoke$arity$2(G__22089,G__22090) : user_mouse_wheel.call(null,G__22089,G__22090));
})], 0));
});

//# sourceMappingURL=quil.middlewares.navigation_2d.js.map
