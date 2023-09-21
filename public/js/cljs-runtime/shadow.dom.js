goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_16622 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_16622(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_16623 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_16623(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__15965 = coll;
var G__15966 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__15965,G__15966) : shadow.dom.lazy_native_coll_seq.call(null,G__15965,G__15966));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__15999 = arguments.length;
switch (G__15999) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__16014 = arguments.length;
switch (G__16014) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__16021 = arguments.length;
switch (G__16021) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__16033 = arguments.length;
switch (G__16033) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__16051 = arguments.length;
switch (G__16051) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__16059 = arguments.length;
switch (G__16059) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e16060){if((e16060 instanceof Object)){
var e = e16060;
return console.log("didnt support attachEvent",el,e);
} else {
throw e16060;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__16067 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__16068 = null;
var count__16069 = (0);
var i__16070 = (0);
while(true){
if((i__16070 < count__16069)){
var el = chunk__16068.cljs$core$IIndexed$_nth$arity$2(null,i__16070);
var handler_16630__$1 = ((function (seq__16067,chunk__16068,count__16069,i__16070,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__16067,chunk__16068,count__16069,i__16070,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_16630__$1);


var G__16631 = seq__16067;
var G__16632 = chunk__16068;
var G__16633 = count__16069;
var G__16634 = (i__16070 + (1));
seq__16067 = G__16631;
chunk__16068 = G__16632;
count__16069 = G__16633;
i__16070 = G__16634;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16067);
if(temp__5804__auto__){
var seq__16067__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16067__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__16067__$1);
var G__16635 = cljs.core.chunk_rest(seq__16067__$1);
var G__16636 = c__5568__auto__;
var G__16637 = cljs.core.count(c__5568__auto__);
var G__16638 = (0);
seq__16067 = G__16635;
chunk__16068 = G__16636;
count__16069 = G__16637;
i__16070 = G__16638;
continue;
} else {
var el = cljs.core.first(seq__16067__$1);
var handler_16639__$1 = ((function (seq__16067,chunk__16068,count__16069,i__16070,el,seq__16067__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__16067,chunk__16068,count__16069,i__16070,el,seq__16067__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_16639__$1);


var G__16640 = cljs.core.next(seq__16067__$1);
var G__16641 = null;
var G__16642 = (0);
var G__16643 = (0);
seq__16067 = G__16640;
chunk__16068 = G__16641;
count__16069 = G__16642;
i__16070 = G__16643;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__16092 = arguments.length;
switch (G__16092) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__16104 = cljs.core.seq(events);
var chunk__16105 = null;
var count__16106 = (0);
var i__16107 = (0);
while(true){
if((i__16107 < count__16106)){
var vec__16123 = chunk__16105.cljs$core$IIndexed$_nth$arity$2(null,i__16107);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16123,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16123,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__16645 = seq__16104;
var G__16646 = chunk__16105;
var G__16647 = count__16106;
var G__16648 = (i__16107 + (1));
seq__16104 = G__16645;
chunk__16105 = G__16646;
count__16106 = G__16647;
i__16107 = G__16648;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16104);
if(temp__5804__auto__){
var seq__16104__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16104__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__16104__$1);
var G__16649 = cljs.core.chunk_rest(seq__16104__$1);
var G__16650 = c__5568__auto__;
var G__16651 = cljs.core.count(c__5568__auto__);
var G__16652 = (0);
seq__16104 = G__16649;
chunk__16105 = G__16650;
count__16106 = G__16651;
i__16107 = G__16652;
continue;
} else {
var vec__16126 = cljs.core.first(seq__16104__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16126,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16126,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__16653 = cljs.core.next(seq__16104__$1);
var G__16654 = null;
var G__16655 = (0);
var G__16656 = (0);
seq__16104 = G__16653;
chunk__16105 = G__16654;
count__16106 = G__16655;
i__16107 = G__16656;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__16134 = cljs.core.seq(styles);
var chunk__16135 = null;
var count__16136 = (0);
var i__16137 = (0);
while(true){
if((i__16137 < count__16136)){
var vec__16154 = chunk__16135.cljs$core$IIndexed$_nth$arity$2(null,i__16137);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16154,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16154,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__16657 = seq__16134;
var G__16658 = chunk__16135;
var G__16659 = count__16136;
var G__16660 = (i__16137 + (1));
seq__16134 = G__16657;
chunk__16135 = G__16658;
count__16136 = G__16659;
i__16137 = G__16660;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16134);
if(temp__5804__auto__){
var seq__16134__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16134__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__16134__$1);
var G__16661 = cljs.core.chunk_rest(seq__16134__$1);
var G__16662 = c__5568__auto__;
var G__16663 = cljs.core.count(c__5568__auto__);
var G__16664 = (0);
seq__16134 = G__16661;
chunk__16135 = G__16662;
count__16136 = G__16663;
i__16137 = G__16664;
continue;
} else {
var vec__16163 = cljs.core.first(seq__16134__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16163,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16163,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__16665 = cljs.core.next(seq__16134__$1);
var G__16666 = null;
var G__16667 = (0);
var G__16668 = (0);
seq__16134 = G__16665;
chunk__16135 = G__16666;
count__16136 = G__16667;
i__16137 = G__16668;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__16176_16669 = key;
var G__16176_16670__$1 = (((G__16176_16669 instanceof cljs.core.Keyword))?G__16176_16669.fqn:null);
switch (G__16176_16670__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_16672 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_16672,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_16672,"aria-");
}
})())){
el.setAttribute(ks_16672,value);
} else {
(el[ks_16672] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__16196){
var map__16197 = p__16196;
var map__16197__$1 = cljs.core.__destructure_map(map__16197);
var props = map__16197__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16197__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__16198 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16198,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16198,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16198,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__16201 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__16201,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__16201;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__16203 = arguments.length;
switch (G__16203) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__16218){
var vec__16220 = p__16218;
var seq__16221 = cljs.core.seq(vec__16220);
var first__16222 = cljs.core.first(seq__16221);
var seq__16221__$1 = cljs.core.next(seq__16221);
var nn = first__16222;
var first__16222__$1 = cljs.core.first(seq__16221__$1);
var seq__16221__$2 = cljs.core.next(seq__16221__$1);
var np = first__16222__$1;
var nc = seq__16221__$2;
var node = vec__16220;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__16227 = nn;
var G__16228 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__16227,G__16228) : create_fn.call(null,G__16227,G__16228));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__16231 = nn;
var G__16232 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__16231,G__16232) : create_fn.call(null,G__16231,G__16232));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__16240 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16240,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16240,(1),null);
var seq__16246_16674 = cljs.core.seq(node_children);
var chunk__16247_16675 = null;
var count__16248_16676 = (0);
var i__16249_16677 = (0);
while(true){
if((i__16249_16677 < count__16248_16676)){
var child_struct_16678 = chunk__16247_16675.cljs$core$IIndexed$_nth$arity$2(null,i__16249_16677);
var children_16679 = shadow.dom.dom_node(child_struct_16678);
if(cljs.core.seq_QMARK_(children_16679)){
var seq__16279_16680 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_16679));
var chunk__16281_16681 = null;
var count__16282_16682 = (0);
var i__16283_16683 = (0);
while(true){
if((i__16283_16683 < count__16282_16682)){
var child_16684 = chunk__16281_16681.cljs$core$IIndexed$_nth$arity$2(null,i__16283_16683);
if(cljs.core.truth_(child_16684)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_16684);


var G__16685 = seq__16279_16680;
var G__16686 = chunk__16281_16681;
var G__16687 = count__16282_16682;
var G__16688 = (i__16283_16683 + (1));
seq__16279_16680 = G__16685;
chunk__16281_16681 = G__16686;
count__16282_16682 = G__16687;
i__16283_16683 = G__16688;
continue;
} else {
var G__16689 = seq__16279_16680;
var G__16690 = chunk__16281_16681;
var G__16691 = count__16282_16682;
var G__16692 = (i__16283_16683 + (1));
seq__16279_16680 = G__16689;
chunk__16281_16681 = G__16690;
count__16282_16682 = G__16691;
i__16283_16683 = G__16692;
continue;
}
} else {
var temp__5804__auto___16693 = cljs.core.seq(seq__16279_16680);
if(temp__5804__auto___16693){
var seq__16279_16694__$1 = temp__5804__auto___16693;
if(cljs.core.chunked_seq_QMARK_(seq__16279_16694__$1)){
var c__5568__auto___16695 = cljs.core.chunk_first(seq__16279_16694__$1);
var G__16696 = cljs.core.chunk_rest(seq__16279_16694__$1);
var G__16697 = c__5568__auto___16695;
var G__16698 = cljs.core.count(c__5568__auto___16695);
var G__16699 = (0);
seq__16279_16680 = G__16696;
chunk__16281_16681 = G__16697;
count__16282_16682 = G__16698;
i__16283_16683 = G__16699;
continue;
} else {
var child_16700 = cljs.core.first(seq__16279_16694__$1);
if(cljs.core.truth_(child_16700)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_16700);


var G__16701 = cljs.core.next(seq__16279_16694__$1);
var G__16702 = null;
var G__16703 = (0);
var G__16704 = (0);
seq__16279_16680 = G__16701;
chunk__16281_16681 = G__16702;
count__16282_16682 = G__16703;
i__16283_16683 = G__16704;
continue;
} else {
var G__16705 = cljs.core.next(seq__16279_16694__$1);
var G__16706 = null;
var G__16707 = (0);
var G__16708 = (0);
seq__16279_16680 = G__16705;
chunk__16281_16681 = G__16706;
count__16282_16682 = G__16707;
i__16283_16683 = G__16708;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_16679);
}


var G__16709 = seq__16246_16674;
var G__16710 = chunk__16247_16675;
var G__16711 = count__16248_16676;
var G__16712 = (i__16249_16677 + (1));
seq__16246_16674 = G__16709;
chunk__16247_16675 = G__16710;
count__16248_16676 = G__16711;
i__16249_16677 = G__16712;
continue;
} else {
var temp__5804__auto___16713 = cljs.core.seq(seq__16246_16674);
if(temp__5804__auto___16713){
var seq__16246_16714__$1 = temp__5804__auto___16713;
if(cljs.core.chunked_seq_QMARK_(seq__16246_16714__$1)){
var c__5568__auto___16715 = cljs.core.chunk_first(seq__16246_16714__$1);
var G__16716 = cljs.core.chunk_rest(seq__16246_16714__$1);
var G__16717 = c__5568__auto___16715;
var G__16718 = cljs.core.count(c__5568__auto___16715);
var G__16719 = (0);
seq__16246_16674 = G__16716;
chunk__16247_16675 = G__16717;
count__16248_16676 = G__16718;
i__16249_16677 = G__16719;
continue;
} else {
var child_struct_16720 = cljs.core.first(seq__16246_16714__$1);
var children_16721 = shadow.dom.dom_node(child_struct_16720);
if(cljs.core.seq_QMARK_(children_16721)){
var seq__16302_16722 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_16721));
var chunk__16304_16723 = null;
var count__16305_16724 = (0);
var i__16306_16725 = (0);
while(true){
if((i__16306_16725 < count__16305_16724)){
var child_16726 = chunk__16304_16723.cljs$core$IIndexed$_nth$arity$2(null,i__16306_16725);
if(cljs.core.truth_(child_16726)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_16726);


var G__16727 = seq__16302_16722;
var G__16728 = chunk__16304_16723;
var G__16729 = count__16305_16724;
var G__16730 = (i__16306_16725 + (1));
seq__16302_16722 = G__16727;
chunk__16304_16723 = G__16728;
count__16305_16724 = G__16729;
i__16306_16725 = G__16730;
continue;
} else {
var G__16731 = seq__16302_16722;
var G__16732 = chunk__16304_16723;
var G__16733 = count__16305_16724;
var G__16734 = (i__16306_16725 + (1));
seq__16302_16722 = G__16731;
chunk__16304_16723 = G__16732;
count__16305_16724 = G__16733;
i__16306_16725 = G__16734;
continue;
}
} else {
var temp__5804__auto___16735__$1 = cljs.core.seq(seq__16302_16722);
if(temp__5804__auto___16735__$1){
var seq__16302_16736__$1 = temp__5804__auto___16735__$1;
if(cljs.core.chunked_seq_QMARK_(seq__16302_16736__$1)){
var c__5568__auto___16737 = cljs.core.chunk_first(seq__16302_16736__$1);
var G__16738 = cljs.core.chunk_rest(seq__16302_16736__$1);
var G__16739 = c__5568__auto___16737;
var G__16740 = cljs.core.count(c__5568__auto___16737);
var G__16741 = (0);
seq__16302_16722 = G__16738;
chunk__16304_16723 = G__16739;
count__16305_16724 = G__16740;
i__16306_16725 = G__16741;
continue;
} else {
var child_16742 = cljs.core.first(seq__16302_16736__$1);
if(cljs.core.truth_(child_16742)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_16742);


var G__16743 = cljs.core.next(seq__16302_16736__$1);
var G__16744 = null;
var G__16745 = (0);
var G__16746 = (0);
seq__16302_16722 = G__16743;
chunk__16304_16723 = G__16744;
count__16305_16724 = G__16745;
i__16306_16725 = G__16746;
continue;
} else {
var G__16747 = cljs.core.next(seq__16302_16736__$1);
var G__16748 = null;
var G__16749 = (0);
var G__16750 = (0);
seq__16302_16722 = G__16747;
chunk__16304_16723 = G__16748;
count__16305_16724 = G__16749;
i__16306_16725 = G__16750;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_16721);
}


var G__16751 = cljs.core.next(seq__16246_16714__$1);
var G__16752 = null;
var G__16753 = (0);
var G__16754 = (0);
seq__16246_16674 = G__16751;
chunk__16247_16675 = G__16752;
count__16248_16676 = G__16753;
i__16249_16677 = G__16754;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__16341 = cljs.core.seq(node);
var chunk__16342 = null;
var count__16343 = (0);
var i__16344 = (0);
while(true){
if((i__16344 < count__16343)){
var n = chunk__16342.cljs$core$IIndexed$_nth$arity$2(null,i__16344);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__16755 = seq__16341;
var G__16756 = chunk__16342;
var G__16757 = count__16343;
var G__16758 = (i__16344 + (1));
seq__16341 = G__16755;
chunk__16342 = G__16756;
count__16343 = G__16757;
i__16344 = G__16758;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16341);
if(temp__5804__auto__){
var seq__16341__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16341__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__16341__$1);
var G__16759 = cljs.core.chunk_rest(seq__16341__$1);
var G__16760 = c__5568__auto__;
var G__16761 = cljs.core.count(c__5568__auto__);
var G__16762 = (0);
seq__16341 = G__16759;
chunk__16342 = G__16760;
count__16343 = G__16761;
i__16344 = G__16762;
continue;
} else {
var n = cljs.core.first(seq__16341__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__16763 = cljs.core.next(seq__16341__$1);
var G__16764 = null;
var G__16765 = (0);
var G__16766 = (0);
seq__16341 = G__16763;
chunk__16342 = G__16764;
count__16343 = G__16765;
i__16344 = G__16766;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__16357 = arguments.length;
switch (G__16357) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__16368 = arguments.length;
switch (G__16368) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__16379 = arguments.length;
switch (G__16379) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___16770 = arguments.length;
var i__5770__auto___16771 = (0);
while(true){
if((i__5770__auto___16771 < len__5769__auto___16770)){
args__5775__auto__.push((arguments[i__5770__auto___16771]));

var G__16772 = (i__5770__auto___16771 + (1));
i__5770__auto___16771 = G__16772;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__16397_16773 = cljs.core.seq(nodes);
var chunk__16398_16774 = null;
var count__16399_16775 = (0);
var i__16400_16776 = (0);
while(true){
if((i__16400_16776 < count__16399_16775)){
var node_16777 = chunk__16398_16774.cljs$core$IIndexed$_nth$arity$2(null,i__16400_16776);
fragment.appendChild(shadow.dom._to_dom(node_16777));


var G__16778 = seq__16397_16773;
var G__16779 = chunk__16398_16774;
var G__16780 = count__16399_16775;
var G__16781 = (i__16400_16776 + (1));
seq__16397_16773 = G__16778;
chunk__16398_16774 = G__16779;
count__16399_16775 = G__16780;
i__16400_16776 = G__16781;
continue;
} else {
var temp__5804__auto___16782 = cljs.core.seq(seq__16397_16773);
if(temp__5804__auto___16782){
var seq__16397_16783__$1 = temp__5804__auto___16782;
if(cljs.core.chunked_seq_QMARK_(seq__16397_16783__$1)){
var c__5568__auto___16784 = cljs.core.chunk_first(seq__16397_16783__$1);
var G__16785 = cljs.core.chunk_rest(seq__16397_16783__$1);
var G__16786 = c__5568__auto___16784;
var G__16787 = cljs.core.count(c__5568__auto___16784);
var G__16788 = (0);
seq__16397_16773 = G__16785;
chunk__16398_16774 = G__16786;
count__16399_16775 = G__16787;
i__16400_16776 = G__16788;
continue;
} else {
var node_16789 = cljs.core.first(seq__16397_16783__$1);
fragment.appendChild(shadow.dom._to_dom(node_16789));


var G__16790 = cljs.core.next(seq__16397_16783__$1);
var G__16791 = null;
var G__16792 = (0);
var G__16793 = (0);
seq__16397_16773 = G__16790;
chunk__16398_16774 = G__16791;
count__16399_16775 = G__16792;
i__16400_16776 = G__16793;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq16391){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16391));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__16417_16794 = cljs.core.seq(scripts);
var chunk__16418_16795 = null;
var count__16419_16796 = (0);
var i__16420_16797 = (0);
while(true){
if((i__16420_16797 < count__16419_16796)){
var vec__16440_16798 = chunk__16418_16795.cljs$core$IIndexed$_nth$arity$2(null,i__16420_16797);
var script_tag_16799 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16440_16798,(0),null);
var script_body_16800 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16440_16798,(1),null);
eval(script_body_16800);


var G__16801 = seq__16417_16794;
var G__16802 = chunk__16418_16795;
var G__16803 = count__16419_16796;
var G__16804 = (i__16420_16797 + (1));
seq__16417_16794 = G__16801;
chunk__16418_16795 = G__16802;
count__16419_16796 = G__16803;
i__16420_16797 = G__16804;
continue;
} else {
var temp__5804__auto___16805 = cljs.core.seq(seq__16417_16794);
if(temp__5804__auto___16805){
var seq__16417_16806__$1 = temp__5804__auto___16805;
if(cljs.core.chunked_seq_QMARK_(seq__16417_16806__$1)){
var c__5568__auto___16807 = cljs.core.chunk_first(seq__16417_16806__$1);
var G__16808 = cljs.core.chunk_rest(seq__16417_16806__$1);
var G__16809 = c__5568__auto___16807;
var G__16810 = cljs.core.count(c__5568__auto___16807);
var G__16811 = (0);
seq__16417_16794 = G__16808;
chunk__16418_16795 = G__16809;
count__16419_16796 = G__16810;
i__16420_16797 = G__16811;
continue;
} else {
var vec__16455_16812 = cljs.core.first(seq__16417_16806__$1);
var script_tag_16813 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16455_16812,(0),null);
var script_body_16814 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16455_16812,(1),null);
eval(script_body_16814);


var G__16815 = cljs.core.next(seq__16417_16806__$1);
var G__16816 = null;
var G__16817 = (0);
var G__16818 = (0);
seq__16417_16794 = G__16815;
chunk__16418_16795 = G__16816;
count__16419_16796 = G__16817;
i__16420_16797 = G__16818;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__16460){
var vec__16462 = p__16460;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16462,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16462,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__16482 = arguments.length;
switch (G__16482) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__16509 = cljs.core.seq(style_keys);
var chunk__16510 = null;
var count__16511 = (0);
var i__16512 = (0);
while(true){
if((i__16512 < count__16511)){
var it = chunk__16510.cljs$core$IIndexed$_nth$arity$2(null,i__16512);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__16822 = seq__16509;
var G__16823 = chunk__16510;
var G__16824 = count__16511;
var G__16825 = (i__16512 + (1));
seq__16509 = G__16822;
chunk__16510 = G__16823;
count__16511 = G__16824;
i__16512 = G__16825;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16509);
if(temp__5804__auto__){
var seq__16509__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16509__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__16509__$1);
var G__16826 = cljs.core.chunk_rest(seq__16509__$1);
var G__16827 = c__5568__auto__;
var G__16828 = cljs.core.count(c__5568__auto__);
var G__16829 = (0);
seq__16509 = G__16826;
chunk__16510 = G__16827;
count__16511 = G__16828;
i__16512 = G__16829;
continue;
} else {
var it = cljs.core.first(seq__16509__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__16830 = cljs.core.next(seq__16509__$1);
var G__16831 = null;
var G__16832 = (0);
var G__16833 = (0);
seq__16509 = G__16830;
chunk__16510 = G__16831;
count__16511 = G__16832;
i__16512 = G__16833;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k16514,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__16518 = k16514;
var G__16518__$1 = (((G__16518 instanceof cljs.core.Keyword))?G__16518.fqn:null);
switch (G__16518__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16514,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__16519){
var vec__16520 = p__16519;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16520,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16520,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16513){
var self__ = this;
var G__16513__$1 = this;
return (new cljs.core.RecordIter((0),G__16513__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16515,other16516){
var self__ = this;
var this16515__$1 = this;
return (((!((other16516 == null)))) && ((((this16515__$1.constructor === other16516.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16515__$1.x,other16516.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16515__$1.y,other16516.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16515__$1.__extmap,other16516.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k16514){
var self__ = this;
var this__5350__auto____$1 = this;
var G__16523 = k16514;
var G__16523__$1 = (((G__16523 instanceof cljs.core.Keyword))?G__16523.fqn:null);
switch (G__16523__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k16514);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__16513){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__16524 = cljs.core.keyword_identical_QMARK_;
var expr__16525 = k__5352__auto__;
if(cljs.core.truth_((pred__16524.cljs$core$IFn$_invoke$arity$2 ? pred__16524.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__16525) : pred__16524.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__16525)))){
return (new shadow.dom.Coordinate(G__16513,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__16524.cljs$core$IFn$_invoke$arity$2 ? pred__16524.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__16525) : pred__16524.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__16525)))){
return (new shadow.dom.Coordinate(self__.x,G__16513,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__16513),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__16513){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__16513,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__16517){
var extmap__5385__auto__ = (function (){var G__16527 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16517,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__16517)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__16527);
} else {
return G__16527;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__16517),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__16517),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k16529,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__16533 = k16529;
var G__16533__$1 = (((G__16533 instanceof cljs.core.Keyword))?G__16533.fqn:null);
switch (G__16533__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16529,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__16534){
var vec__16535 = p__16534;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16535,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16535,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16528){
var self__ = this;
var G__16528__$1 = this;
return (new cljs.core.RecordIter((0),G__16528__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16530,other16531){
var self__ = this;
var this16530__$1 = this;
return (((!((other16531 == null)))) && ((((this16530__$1.constructor === other16531.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16530__$1.w,other16531.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16530__$1.h,other16531.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16530__$1.__extmap,other16531.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k16529){
var self__ = this;
var this__5350__auto____$1 = this;
var G__16538 = k16529;
var G__16538__$1 = (((G__16538 instanceof cljs.core.Keyword))?G__16538.fqn:null);
switch (G__16538__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k16529);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__16528){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__16539 = cljs.core.keyword_identical_QMARK_;
var expr__16540 = k__5352__auto__;
if(cljs.core.truth_((pred__16539.cljs$core$IFn$_invoke$arity$2 ? pred__16539.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__16540) : pred__16539.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__16540)))){
return (new shadow.dom.Size(G__16528,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__16539.cljs$core$IFn$_invoke$arity$2 ? pred__16539.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__16540) : pred__16539.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__16540)))){
return (new shadow.dom.Size(self__.w,G__16528,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__16528),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__16528){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__16528,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__16532){
var extmap__5385__auto__ = (function (){var G__16542 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16532,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__16532)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__16542);
} else {
return G__16542;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__16532),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__16532),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__16838 = (i + (1));
var G__16839 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__16838;
ret = G__16839;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__16547){
var vec__16548 = p__16547;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16548,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16548,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__16552 = arguments.length;
switch (G__16552) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__16842 = ps;
var G__16843 = (i + (1));
el__$1 = G__16842;
i = G__16843;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__16553 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16553,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16553,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16553,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__16556_16844 = cljs.core.seq(props);
var chunk__16557_16845 = null;
var count__16558_16846 = (0);
var i__16559_16847 = (0);
while(true){
if((i__16559_16847 < count__16558_16846)){
var vec__16566_16848 = chunk__16557_16845.cljs$core$IIndexed$_nth$arity$2(null,i__16559_16847);
var k_16849 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16566_16848,(0),null);
var v_16850 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16566_16848,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_16849);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_16849),v_16850);


var G__16852 = seq__16556_16844;
var G__16853 = chunk__16557_16845;
var G__16854 = count__16558_16846;
var G__16855 = (i__16559_16847 + (1));
seq__16556_16844 = G__16852;
chunk__16557_16845 = G__16853;
count__16558_16846 = G__16854;
i__16559_16847 = G__16855;
continue;
} else {
var temp__5804__auto___16856 = cljs.core.seq(seq__16556_16844);
if(temp__5804__auto___16856){
var seq__16556_16857__$1 = temp__5804__auto___16856;
if(cljs.core.chunked_seq_QMARK_(seq__16556_16857__$1)){
var c__5568__auto___16858 = cljs.core.chunk_first(seq__16556_16857__$1);
var G__16859 = cljs.core.chunk_rest(seq__16556_16857__$1);
var G__16860 = c__5568__auto___16858;
var G__16861 = cljs.core.count(c__5568__auto___16858);
var G__16862 = (0);
seq__16556_16844 = G__16859;
chunk__16557_16845 = G__16860;
count__16558_16846 = G__16861;
i__16559_16847 = G__16862;
continue;
} else {
var vec__16569_16863 = cljs.core.first(seq__16556_16857__$1);
var k_16864 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16569_16863,(0),null);
var v_16865 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16569_16863,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_16864);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_16864),v_16865);


var G__16866 = cljs.core.next(seq__16556_16857__$1);
var G__16867 = null;
var G__16868 = (0);
var G__16869 = (0);
seq__16556_16844 = G__16866;
chunk__16557_16845 = G__16867;
count__16558_16846 = G__16868;
i__16559_16847 = G__16869;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__16573 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16573,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16573,(1),null);
var seq__16576_16870 = cljs.core.seq(node_children);
var chunk__16578_16871 = null;
var count__16579_16872 = (0);
var i__16580_16873 = (0);
while(true){
if((i__16580_16873 < count__16579_16872)){
var child_struct_16874 = chunk__16578_16871.cljs$core$IIndexed$_nth$arity$2(null,i__16580_16873);
if((!((child_struct_16874 == null)))){
if(typeof child_struct_16874 === 'string'){
var text_16875 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_16875),child_struct_16874].join(''));
} else {
var children_16876 = shadow.dom.svg_node(child_struct_16874);
if(cljs.core.seq_QMARK_(children_16876)){
var seq__16594_16877 = cljs.core.seq(children_16876);
var chunk__16596_16878 = null;
var count__16597_16879 = (0);
var i__16598_16880 = (0);
while(true){
if((i__16598_16880 < count__16597_16879)){
var child_16881 = chunk__16596_16878.cljs$core$IIndexed$_nth$arity$2(null,i__16598_16880);
if(cljs.core.truth_(child_16881)){
node.appendChild(child_16881);


var G__16882 = seq__16594_16877;
var G__16883 = chunk__16596_16878;
var G__16884 = count__16597_16879;
var G__16885 = (i__16598_16880 + (1));
seq__16594_16877 = G__16882;
chunk__16596_16878 = G__16883;
count__16597_16879 = G__16884;
i__16598_16880 = G__16885;
continue;
} else {
var G__16886 = seq__16594_16877;
var G__16887 = chunk__16596_16878;
var G__16888 = count__16597_16879;
var G__16889 = (i__16598_16880 + (1));
seq__16594_16877 = G__16886;
chunk__16596_16878 = G__16887;
count__16597_16879 = G__16888;
i__16598_16880 = G__16889;
continue;
}
} else {
var temp__5804__auto___16890 = cljs.core.seq(seq__16594_16877);
if(temp__5804__auto___16890){
var seq__16594_16891__$1 = temp__5804__auto___16890;
if(cljs.core.chunked_seq_QMARK_(seq__16594_16891__$1)){
var c__5568__auto___16892 = cljs.core.chunk_first(seq__16594_16891__$1);
var G__16893 = cljs.core.chunk_rest(seq__16594_16891__$1);
var G__16894 = c__5568__auto___16892;
var G__16895 = cljs.core.count(c__5568__auto___16892);
var G__16896 = (0);
seq__16594_16877 = G__16893;
chunk__16596_16878 = G__16894;
count__16597_16879 = G__16895;
i__16598_16880 = G__16896;
continue;
} else {
var child_16897 = cljs.core.first(seq__16594_16891__$1);
if(cljs.core.truth_(child_16897)){
node.appendChild(child_16897);


var G__16899 = cljs.core.next(seq__16594_16891__$1);
var G__16900 = null;
var G__16901 = (0);
var G__16902 = (0);
seq__16594_16877 = G__16899;
chunk__16596_16878 = G__16900;
count__16597_16879 = G__16901;
i__16598_16880 = G__16902;
continue;
} else {
var G__16903 = cljs.core.next(seq__16594_16891__$1);
var G__16904 = null;
var G__16905 = (0);
var G__16906 = (0);
seq__16594_16877 = G__16903;
chunk__16596_16878 = G__16904;
count__16597_16879 = G__16905;
i__16598_16880 = G__16906;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_16876);
}
}


var G__16907 = seq__16576_16870;
var G__16908 = chunk__16578_16871;
var G__16909 = count__16579_16872;
var G__16910 = (i__16580_16873 + (1));
seq__16576_16870 = G__16907;
chunk__16578_16871 = G__16908;
count__16579_16872 = G__16909;
i__16580_16873 = G__16910;
continue;
} else {
var G__16911 = seq__16576_16870;
var G__16912 = chunk__16578_16871;
var G__16913 = count__16579_16872;
var G__16914 = (i__16580_16873 + (1));
seq__16576_16870 = G__16911;
chunk__16578_16871 = G__16912;
count__16579_16872 = G__16913;
i__16580_16873 = G__16914;
continue;
}
} else {
var temp__5804__auto___16915 = cljs.core.seq(seq__16576_16870);
if(temp__5804__auto___16915){
var seq__16576_16916__$1 = temp__5804__auto___16915;
if(cljs.core.chunked_seq_QMARK_(seq__16576_16916__$1)){
var c__5568__auto___16917 = cljs.core.chunk_first(seq__16576_16916__$1);
var G__16918 = cljs.core.chunk_rest(seq__16576_16916__$1);
var G__16919 = c__5568__auto___16917;
var G__16920 = cljs.core.count(c__5568__auto___16917);
var G__16921 = (0);
seq__16576_16870 = G__16918;
chunk__16578_16871 = G__16919;
count__16579_16872 = G__16920;
i__16580_16873 = G__16921;
continue;
} else {
var child_struct_16922 = cljs.core.first(seq__16576_16916__$1);
if((!((child_struct_16922 == null)))){
if(typeof child_struct_16922 === 'string'){
var text_16923 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_16923),child_struct_16922].join(''));
} else {
var children_16924 = shadow.dom.svg_node(child_struct_16922);
if(cljs.core.seq_QMARK_(children_16924)){
var seq__16600_16925 = cljs.core.seq(children_16924);
var chunk__16602_16926 = null;
var count__16603_16927 = (0);
var i__16604_16928 = (0);
while(true){
if((i__16604_16928 < count__16603_16927)){
var child_16929 = chunk__16602_16926.cljs$core$IIndexed$_nth$arity$2(null,i__16604_16928);
if(cljs.core.truth_(child_16929)){
node.appendChild(child_16929);


var G__16930 = seq__16600_16925;
var G__16931 = chunk__16602_16926;
var G__16932 = count__16603_16927;
var G__16933 = (i__16604_16928 + (1));
seq__16600_16925 = G__16930;
chunk__16602_16926 = G__16931;
count__16603_16927 = G__16932;
i__16604_16928 = G__16933;
continue;
} else {
var G__16934 = seq__16600_16925;
var G__16935 = chunk__16602_16926;
var G__16936 = count__16603_16927;
var G__16937 = (i__16604_16928 + (1));
seq__16600_16925 = G__16934;
chunk__16602_16926 = G__16935;
count__16603_16927 = G__16936;
i__16604_16928 = G__16937;
continue;
}
} else {
var temp__5804__auto___16938__$1 = cljs.core.seq(seq__16600_16925);
if(temp__5804__auto___16938__$1){
var seq__16600_16939__$1 = temp__5804__auto___16938__$1;
if(cljs.core.chunked_seq_QMARK_(seq__16600_16939__$1)){
var c__5568__auto___16940 = cljs.core.chunk_first(seq__16600_16939__$1);
var G__16941 = cljs.core.chunk_rest(seq__16600_16939__$1);
var G__16942 = c__5568__auto___16940;
var G__16943 = cljs.core.count(c__5568__auto___16940);
var G__16944 = (0);
seq__16600_16925 = G__16941;
chunk__16602_16926 = G__16942;
count__16603_16927 = G__16943;
i__16604_16928 = G__16944;
continue;
} else {
var child_16945 = cljs.core.first(seq__16600_16939__$1);
if(cljs.core.truth_(child_16945)){
node.appendChild(child_16945);


var G__16946 = cljs.core.next(seq__16600_16939__$1);
var G__16947 = null;
var G__16948 = (0);
var G__16949 = (0);
seq__16600_16925 = G__16946;
chunk__16602_16926 = G__16947;
count__16603_16927 = G__16948;
i__16604_16928 = G__16949;
continue;
} else {
var G__16950 = cljs.core.next(seq__16600_16939__$1);
var G__16951 = null;
var G__16952 = (0);
var G__16953 = (0);
seq__16600_16925 = G__16950;
chunk__16602_16926 = G__16951;
count__16603_16927 = G__16952;
i__16604_16928 = G__16953;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_16924);
}
}


var G__16954 = cljs.core.next(seq__16576_16916__$1);
var G__16955 = null;
var G__16956 = (0);
var G__16957 = (0);
seq__16576_16870 = G__16954;
chunk__16578_16871 = G__16955;
count__16579_16872 = G__16956;
i__16580_16873 = G__16957;
continue;
} else {
var G__16958 = cljs.core.next(seq__16576_16916__$1);
var G__16959 = null;
var G__16960 = (0);
var G__16961 = (0);
seq__16576_16870 = G__16958;
chunk__16578_16871 = G__16959;
count__16579_16872 = G__16960;
i__16580_16873 = G__16961;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___16962 = arguments.length;
var i__5770__auto___16963 = (0);
while(true){
if((i__5770__auto___16963 < len__5769__auto___16962)){
args__5775__auto__.push((arguments[i__5770__auto___16963]));

var G__16964 = (i__5770__auto___16963 + (1));
i__5770__auto___16963 = G__16964;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq16606){
var G__16607 = cljs.core.first(seq16606);
var seq16606__$1 = cljs.core.next(seq16606);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16607,seq16606__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__16609 = arguments.length;
switch (G__16609) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__13759__auto___16966 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13760__auto__ = (function (){var switch__13658__auto__ = (function (state_16614){
var state_val_16615 = (state_16614[(1)]);
if((state_val_16615 === (1))){
var state_16614__$1 = state_16614;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16614__$1,(2),once_or_cleanup);
} else {
if((state_val_16615 === (2))){
var inst_16611 = (state_16614[(2)]);
var inst_16612 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_16614__$1 = (function (){var statearr_16616 = state_16614;
(statearr_16616[(7)] = inst_16611);

return statearr_16616;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16614__$1,inst_16612);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__13659__auto__ = null;
var shadow$dom$state_machine__13659__auto____0 = (function (){
var statearr_16617 = [null,null,null,null,null,null,null,null];
(statearr_16617[(0)] = shadow$dom$state_machine__13659__auto__);

(statearr_16617[(1)] = (1));

return statearr_16617;
});
var shadow$dom$state_machine__13659__auto____1 = (function (state_16614){
while(true){
var ret_value__13660__auto__ = (function (){try{while(true){
var result__13661__auto__ = switch__13658__auto__(state_16614);
if(cljs.core.keyword_identical_QMARK_(result__13661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13661__auto__;
}
break;
}
}catch (e16618){var ex__13662__auto__ = e16618;
var statearr_16619_16967 = state_16614;
(statearr_16619_16967[(2)] = ex__13662__auto__);


if(cljs.core.seq((state_16614[(4)]))){
var statearr_16620_16968 = state_16614;
(statearr_16620_16968[(1)] = cljs.core.first((state_16614[(4)])));

} else {
throw ex__13662__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16969 = state_16614;
state_16614 = G__16969;
continue;
} else {
return ret_value__13660__auto__;
}
break;
}
});
shadow$dom$state_machine__13659__auto__ = function(state_16614){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__13659__auto____0.call(this);
case 1:
return shadow$dom$state_machine__13659__auto____1.call(this,state_16614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__13659__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__13659__auto____0;
shadow$dom$state_machine__13659__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__13659__auto____1;
return shadow$dom$state_machine__13659__auto__;
})()
})();
var state__13761__auto__ = (function (){var statearr_16621 = f__13760__auto__();
(statearr_16621[(6)] = c__13759__auto___16966);

return statearr_16621;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13761__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
