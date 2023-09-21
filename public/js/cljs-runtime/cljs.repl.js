goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__19335){
var map__19336 = p__19335;
var map__19336__$1 = cljs.core.__destructure_map(map__19336);
var m = map__19336__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19336__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19336__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19346_19649 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19347_19650 = null;
var count__19348_19651 = (0);
var i__19349_19652 = (0);
while(true){
if((i__19349_19652 < count__19348_19651)){
var f_19654 = chunk__19347_19650.cljs$core$IIndexed$_nth$arity$2(null,i__19349_19652);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19654], 0));


var G__19655 = seq__19346_19649;
var G__19656 = chunk__19347_19650;
var G__19657 = count__19348_19651;
var G__19658 = (i__19349_19652 + (1));
seq__19346_19649 = G__19655;
chunk__19347_19650 = G__19656;
count__19348_19651 = G__19657;
i__19349_19652 = G__19658;
continue;
} else {
var temp__5804__auto___19659 = cljs.core.seq(seq__19346_19649);
if(temp__5804__auto___19659){
var seq__19346_19660__$1 = temp__5804__auto___19659;
if(cljs.core.chunked_seq_QMARK_(seq__19346_19660__$1)){
var c__5568__auto___19661 = cljs.core.chunk_first(seq__19346_19660__$1);
var G__19662 = cljs.core.chunk_rest(seq__19346_19660__$1);
var G__19663 = c__5568__auto___19661;
var G__19664 = cljs.core.count(c__5568__auto___19661);
var G__19665 = (0);
seq__19346_19649 = G__19662;
chunk__19347_19650 = G__19663;
count__19348_19651 = G__19664;
i__19349_19652 = G__19665;
continue;
} else {
var f_19666 = cljs.core.first(seq__19346_19660__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19666], 0));


var G__19667 = cljs.core.next(seq__19346_19660__$1);
var G__19668 = null;
var G__19669 = (0);
var G__19670 = (0);
seq__19346_19649 = G__19667;
chunk__19347_19650 = G__19668;
count__19348_19651 = G__19669;
i__19349_19652 = G__19670;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19671 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_19671], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_19671)))?cljs.core.second(arglists_19671):arglists_19671)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19360_19672 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19361_19673 = null;
var count__19362_19674 = (0);
var i__19363_19675 = (0);
while(true){
if((i__19363_19675 < count__19362_19674)){
var vec__19378_19676 = chunk__19361_19673.cljs$core$IIndexed$_nth$arity$2(null,i__19363_19675);
var name_19677 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19378_19676,(0),null);
var map__19381_19678 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19378_19676,(1),null);
var map__19381_19679__$1 = cljs.core.__destructure_map(map__19381_19678);
var doc_19680 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19381_19679__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19681 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19381_19679__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19677], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19681], 0));

if(cljs.core.truth_(doc_19680)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19680], 0));
} else {
}


var G__19682 = seq__19360_19672;
var G__19683 = chunk__19361_19673;
var G__19684 = count__19362_19674;
var G__19685 = (i__19363_19675 + (1));
seq__19360_19672 = G__19682;
chunk__19361_19673 = G__19683;
count__19362_19674 = G__19684;
i__19363_19675 = G__19685;
continue;
} else {
var temp__5804__auto___19686 = cljs.core.seq(seq__19360_19672);
if(temp__5804__auto___19686){
var seq__19360_19687__$1 = temp__5804__auto___19686;
if(cljs.core.chunked_seq_QMARK_(seq__19360_19687__$1)){
var c__5568__auto___19688 = cljs.core.chunk_first(seq__19360_19687__$1);
var G__19689 = cljs.core.chunk_rest(seq__19360_19687__$1);
var G__19690 = c__5568__auto___19688;
var G__19691 = cljs.core.count(c__5568__auto___19688);
var G__19692 = (0);
seq__19360_19672 = G__19689;
chunk__19361_19673 = G__19690;
count__19362_19674 = G__19691;
i__19363_19675 = G__19692;
continue;
} else {
var vec__19399_19693 = cljs.core.first(seq__19360_19687__$1);
var name_19694 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19399_19693,(0),null);
var map__19402_19695 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19399_19693,(1),null);
var map__19402_19696__$1 = cljs.core.__destructure_map(map__19402_19695);
var doc_19697 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19402_19696__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19698 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19402_19696__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19694], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19698], 0));

if(cljs.core.truth_(doc_19697)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19697], 0));
} else {
}


var G__19702 = cljs.core.next(seq__19360_19687__$1);
var G__19703 = null;
var G__19704 = (0);
var G__19705 = (0);
seq__19360_19672 = G__19702;
chunk__19361_19673 = G__19703;
count__19362_19674 = G__19704;
i__19363_19675 = G__19705;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__19451 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__19453 = null;
var count__19454 = (0);
var i__19455 = (0);
while(true){
if((i__19455 < count__19454)){
var role = chunk__19453.cljs$core$IIndexed$_nth$arity$2(null,i__19455);
var temp__5804__auto___19706__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19706__$1)){
var spec_19707 = temp__5804__auto___19706__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19707)], 0));
} else {
}


var G__19708 = seq__19451;
var G__19709 = chunk__19453;
var G__19710 = count__19454;
var G__19711 = (i__19455 + (1));
seq__19451 = G__19708;
chunk__19453 = G__19709;
count__19454 = G__19710;
i__19455 = G__19711;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__19451);
if(temp__5804__auto____$1){
var seq__19451__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__19451__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19451__$1);
var G__19712 = cljs.core.chunk_rest(seq__19451__$1);
var G__19713 = c__5568__auto__;
var G__19714 = cljs.core.count(c__5568__auto__);
var G__19715 = (0);
seq__19451 = G__19712;
chunk__19453 = G__19713;
count__19454 = G__19714;
i__19455 = G__19715;
continue;
} else {
var role = cljs.core.first(seq__19451__$1);
var temp__5804__auto___19716__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19716__$2)){
var spec_19717 = temp__5804__auto___19716__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19717)], 0));
} else {
}


var G__19718 = cljs.core.next(seq__19451__$1);
var G__19719 = null;
var G__19720 = (0);
var G__19721 = (0);
seq__19451 = G__19718;
chunk__19453 = G__19719;
count__19454 = G__19720;
i__19455 = G__19721;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__19723 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__19724 = cljs.core.ex_cause(t);
via = G__19723;
t = G__19724;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__19528 = datafied_throwable;
var map__19528__$1 = cljs.core.__destructure_map(map__19528);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19528__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19528__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19528__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__19529 = cljs.core.last(via);
var map__19529__$1 = cljs.core.__destructure_map(map__19529);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19529__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19529__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19529__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__19530 = data;
var map__19530__$1 = cljs.core.__destructure_map(map__19530);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19530__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19530__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19530__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__19531 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__19531__$1 = cljs.core.__destructure_map(map__19531);
var top_data = map__19531__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19531__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__19532 = phase;
var G__19532__$1 = (((G__19532 instanceof cljs.core.Keyword))?G__19532.fqn:null);
switch (G__19532__$1) {
case "read-source":
var map__19533 = data;
var map__19533__$1 = cljs.core.__destructure_map(map__19533);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19533__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19533__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__19540 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__19540__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19540,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19540);
var G__19540__$2 = (cljs.core.truth_((function (){var fexpr__19541 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19541.cljs$core$IFn$_invoke$arity$1 ? fexpr__19541.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19541.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19540__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19540__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19540__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19540__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__19546 = top_data;
var G__19546__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19546,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19546);
var G__19546__$2 = (cljs.core.truth_((function (){var fexpr__19547 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19547.cljs$core$IFn$_invoke$arity$1 ? fexpr__19547.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19547.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19546__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19546__$1);
var G__19546__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19546__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19546__$2);
var G__19546__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19546__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19546__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19546__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19546__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__19552 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19552,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19552,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19552,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19552,(3),null);
var G__19555 = top_data;
var G__19555__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19555,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__19555);
var G__19555__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19555__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__19555__$1);
var G__19555__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19555__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__19555__$2);
var G__19555__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19555__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19555__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19555__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19555__$4;
}

break;
case "execution":
var vec__19561 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19561,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19561,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19561,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19561,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__19526_SHARP_){
var or__5045__auto__ = (p1__19526_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__19564 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19564.cljs$core$IFn$_invoke$arity$1 ? fexpr__19564.cljs$core$IFn$_invoke$arity$1(p1__19526_SHARP_) : fexpr__19564.call(null,p1__19526_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__19567 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__19567__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19567,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__19567);
var G__19567__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19567__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19567__$1);
var G__19567__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19567__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__19567__$2);
var G__19567__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19567__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__19567__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19567__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19567__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19532__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__19580){
var map__19581 = p__19580;
var map__19581__$1 = cljs.core.__destructure_map(map__19581);
var triage_data = map__19581__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19581__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19581__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19581__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19581__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19581__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19581__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19581__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19581__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__19587 = phase;
var G__19587__$1 = (((G__19587 instanceof cljs.core.Keyword))?G__19587.fqn:null);
switch (G__19587__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__19589 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__19590 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19591 = loc;
var G__19592 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19595_19739 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19596_19740 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19597_19741 = true;
var _STAR_print_fn_STAR__temp_val__19598_19742 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19597_19741);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19598_19742);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19572_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19572_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19596_19740);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19595_19739);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19589,G__19590,G__19591,G__19592) : format.call(null,G__19589,G__19590,G__19591,G__19592));

break;
case "macroexpansion":
var G__19603 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__19604 = cause_type;
var G__19605 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19606 = loc;
var G__19607 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19603,G__19604,G__19605,G__19606,G__19607) : format.call(null,G__19603,G__19604,G__19605,G__19606,G__19607));

break;
case "compile-syntax-check":
var G__19609 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__19610 = cause_type;
var G__19611 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19612 = loc;
var G__19613 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19609,G__19610,G__19611,G__19612,G__19613) : format.call(null,G__19609,G__19610,G__19611,G__19612,G__19613));

break;
case "compilation":
var G__19614 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__19615 = cause_type;
var G__19616 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19617 = loc;
var G__19618 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19614,G__19615,G__19616,G__19617,G__19618) : format.call(null,G__19614,G__19615,G__19616,G__19617,G__19618));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__19619 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__19620 = symbol;
var G__19621 = loc;
var G__19622 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19623_19749 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19624_19750 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19625_19751 = true;
var _STAR_print_fn_STAR__temp_val__19626_19752 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19625_19751);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19626_19752);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19575_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19575_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19624_19750);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19623_19749);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19619,G__19620,G__19621,G__19622) : format.call(null,G__19619,G__19620,G__19621,G__19622));
} else {
var G__19635 = "Execution error%s at %s(%s).\n%s\n";
var G__19636 = cause_type;
var G__19637 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19638 = loc;
var G__19639 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19635,G__19636,G__19637,G__19638,G__19639) : format.call(null,G__19635,G__19636,G__19637,G__19638,G__19639));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19587__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
