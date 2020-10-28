// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.debug_loader_QMARK_ = (function figwheel$client$file_reloading$debug_loader_QMARK_(){
return (!((goog.debugLoader_ == null)));
});
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4126__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4126__auto__){
return or__4126__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){

return goog.debugLoader_.getPathFromDeps_(ns);
}):(function (ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
}));
figwheel.client.file_reloading.provided_QMARK_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){
return goog.getObjectByName(ns);
}):(function (ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
}));
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(ns){
return ((cljs.core._EQ_.call(null,"goog",ns)) || (cljs.core._EQ_.call(null,"cljs.core",ns)) || (cljs.core._EQ_.call(null,"cljs.nodejs",ns)) || (goog.string.startsWith(ns,"clojure.")) || (goog.string.startsWith(ns,"goog.")));
});
figwheel.client.file_reloading.base_requires_for_ns_path = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (path){
var G__28620 = goog.object.get(goog.debugLoader_.dependencies_,path);
if((G__28620 == null)){
return null;
} else {
return goog.object.get(G__28620,"requires");
}
}):(function (path){
var G__28621 = goog.object.get(goog.dependencies_.requires,path);
if((G__28621 == null)){
return null;
} else {
return goog.object.getKeys(G__28621);
}
}));
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__28622_SHARP_){
return (!(figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__28622_SHARP_)));
}),figwheel.client.file_reloading.base_requires_for_ns_path.call(null,figwheel.client.file_reloading.name__GT_path.call(null,ns))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (_,___$1){
return null;
}):(function (path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
}));
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (){
return null;
}):(function (){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,(function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
}));
}));
figwheel.client.file_reloading.path__GT_name = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (path){
var G__28623 = goog.object.get(goog.debugLoader_.dependencies_,path);
var G__28623__$1 = (((G__28623 == null))?null:goog.object.get(G__28623,"provides"));
if((G__28623__$1 == null)){
return null;
} else {
return cljs.core.set.call(null,G__28623__$1);
}
}):(function (path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
}));
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),parent_ns);
});
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (){
return goog.object.forEach(goog.object.filter(goog.debugLoader_.dependencies_,(function (dep,path,_){
return cljs.core.not.call(null,cljs.core.some.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_,goog.object.get(dep,"provides")));
})),(function (dep,path,_){
var provides = goog.object.get(dep,"provides");
var requires = goog.object.get(dep,"requires");
var seq__28624 = cljs.core.seq.call(null,provides);
var chunk__28625 = null;
var count__28626 = (0);
var i__28627 = (0);
while(true){
if((i__28627 < count__28626)){
var prov = cljs.core._nth.call(null,chunk__28625,i__28627);
var seq__28636_28648 = cljs.core.seq.call(null,requires);
var chunk__28637_28649 = null;
var count__28638_28650 = (0);
var i__28639_28651 = (0);
while(true){
if((i__28639_28651 < count__28638_28650)){
var req_28652 = cljs.core._nth.call(null,chunk__28637_28649,i__28639_28651);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28652,prov);


var G__28653 = seq__28636_28648;
var G__28654 = chunk__28637_28649;
var G__28655 = count__28638_28650;
var G__28656 = (i__28639_28651 + (1));
seq__28636_28648 = G__28653;
chunk__28637_28649 = G__28654;
count__28638_28650 = G__28655;
i__28639_28651 = G__28656;
continue;
} else {
var temp__5720__auto___28657 = cljs.core.seq.call(null,seq__28636_28648);
if(temp__5720__auto___28657){
var seq__28636_28658__$1 = temp__5720__auto___28657;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28636_28658__$1)){
var c__4556__auto___28659 = cljs.core.chunk_first.call(null,seq__28636_28658__$1);
var G__28660 = cljs.core.chunk_rest.call(null,seq__28636_28658__$1);
var G__28661 = c__4556__auto___28659;
var G__28662 = cljs.core.count.call(null,c__4556__auto___28659);
var G__28663 = (0);
seq__28636_28648 = G__28660;
chunk__28637_28649 = G__28661;
count__28638_28650 = G__28662;
i__28639_28651 = G__28663;
continue;
} else {
var req_28664 = cljs.core.first.call(null,seq__28636_28658__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28664,prov);


var G__28665 = cljs.core.next.call(null,seq__28636_28658__$1);
var G__28666 = null;
var G__28667 = (0);
var G__28668 = (0);
seq__28636_28648 = G__28665;
chunk__28637_28649 = G__28666;
count__28638_28650 = G__28667;
i__28639_28651 = G__28668;
continue;
}
} else {
}
}
break;
}


var G__28669 = seq__28624;
var G__28670 = chunk__28625;
var G__28671 = count__28626;
var G__28672 = (i__28627 + (1));
seq__28624 = G__28669;
chunk__28625 = G__28670;
count__28626 = G__28671;
i__28627 = G__28672;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__28624);
if(temp__5720__auto__){
var seq__28624__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28624__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__28624__$1);
var G__28673 = cljs.core.chunk_rest.call(null,seq__28624__$1);
var G__28674 = c__4556__auto__;
var G__28675 = cljs.core.count.call(null,c__4556__auto__);
var G__28676 = (0);
seq__28624 = G__28673;
chunk__28625 = G__28674;
count__28626 = G__28675;
i__28627 = G__28676;
continue;
} else {
var prov = cljs.core.first.call(null,seq__28624__$1);
var seq__28640_28677 = cljs.core.seq.call(null,requires);
var chunk__28641_28678 = null;
var count__28642_28679 = (0);
var i__28643_28680 = (0);
while(true){
if((i__28643_28680 < count__28642_28679)){
var req_28681 = cljs.core._nth.call(null,chunk__28641_28678,i__28643_28680);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28681,prov);


var G__28682 = seq__28640_28677;
var G__28683 = chunk__28641_28678;
var G__28684 = count__28642_28679;
var G__28685 = (i__28643_28680 + (1));
seq__28640_28677 = G__28682;
chunk__28641_28678 = G__28683;
count__28642_28679 = G__28684;
i__28643_28680 = G__28685;
continue;
} else {
var temp__5720__auto___28686__$1 = cljs.core.seq.call(null,seq__28640_28677);
if(temp__5720__auto___28686__$1){
var seq__28640_28687__$1 = temp__5720__auto___28686__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28640_28687__$1)){
var c__4556__auto___28688 = cljs.core.chunk_first.call(null,seq__28640_28687__$1);
var G__28689 = cljs.core.chunk_rest.call(null,seq__28640_28687__$1);
var G__28690 = c__4556__auto___28688;
var G__28691 = cljs.core.count.call(null,c__4556__auto___28688);
var G__28692 = (0);
seq__28640_28677 = G__28689;
chunk__28641_28678 = G__28690;
count__28642_28679 = G__28691;
i__28643_28680 = G__28692;
continue;
} else {
var req_28693 = cljs.core.first.call(null,seq__28640_28687__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28693,prov);


var G__28694 = cljs.core.next.call(null,seq__28640_28687__$1);
var G__28695 = null;
var G__28696 = (0);
var G__28697 = (0);
seq__28640_28677 = G__28694;
chunk__28641_28678 = G__28695;
count__28642_28679 = G__28696;
i__28643_28680 = G__28697;
continue;
}
} else {
}
}
break;
}


var G__28698 = cljs.core.next.call(null,seq__28624__$1);
var G__28699 = null;
var G__28700 = (0);
var G__28701 = (0);
seq__28624 = G__28698;
chunk__28625 = G__28699;
count__28626 = G__28700;
i__28627 = G__28701;
continue;
}
} else {
return null;
}
}
break;
}
}));
}):(function (){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,(function (deps,path,_){
var seq__28644 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,path));
var chunk__28645 = null;
var count__28646 = (0);
var i__28647 = (0);
while(true){
if((i__28647 < count__28646)){
var prov = cljs.core._nth.call(null,chunk__28645,i__28647);
goog.object.forEach(deps,((function (seq__28644,chunk__28645,count__28646,i__28647,prov,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__28644,chunk__28645,count__28646,i__28647,prov,requires))
);


var G__28702 = seq__28644;
var G__28703 = chunk__28645;
var G__28704 = count__28646;
var G__28705 = (i__28647 + (1));
seq__28644 = G__28702;
chunk__28645 = G__28703;
count__28646 = G__28704;
i__28647 = G__28705;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__28644);
if(temp__5720__auto__){
var seq__28644__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28644__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__28644__$1);
var G__28706 = cljs.core.chunk_rest.call(null,seq__28644__$1);
var G__28707 = c__4556__auto__;
var G__28708 = cljs.core.count.call(null,c__4556__auto__);
var G__28709 = (0);
seq__28644 = G__28706;
chunk__28645 = G__28707;
count__28646 = G__28708;
i__28647 = G__28709;
continue;
} else {
var prov = cljs.core.first.call(null,seq__28644__$1);
goog.object.forEach(deps,((function (seq__28644,chunk__28645,count__28646,i__28647,prov,seq__28644__$1,temp__5720__auto__,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__28644,chunk__28645,count__28646,i__28647,prov,seq__28644__$1,temp__5720__auto__,requires))
);


var G__28710 = cljs.core.next.call(null,seq__28644__$1);
var G__28711 = null;
var G__28712 = (0);
var G__28713 = (0);
seq__28644 = G__28710;
chunk__28645 = G__28711;
count__28646 = G__28712;
i__28647 = G__28713;
continue;
}
} else {
return null;
}
}
break;
}
}));
}));
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__28714){
var vec__28715 = p__28714;
var _ = cljs.core.nth.call(null,vec__28715,(0),null);
var v = cljs.core.nth.call(null,vec__28715,(1),null);
var and__4115__auto__ = v;
if(cljs.core.truth_(and__4115__auto__)){
return v.call(null,dep);
} else {
return and__4115__auto__;
}
}),cljs.core.filter.call(null,(function (p__28718){
var vec__28719 = p__28718;
var k = cljs.core.nth.call(null,vec__28719,(0),null);
var v = cljs.core.nth.call(null,vec__28719,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});
var topo_sort_STAR_ = (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__28731_28739 = cljs.core.seq.call(null,deps);
var chunk__28732_28740 = null;
var count__28733_28741 = (0);
var i__28734_28742 = (0);
while(true){
if((i__28734_28742 < count__28733_28741)){
var dep_28743 = cljs.core._nth.call(null,chunk__28732_28740,i__28734_28742);
if(cljs.core.truth_((function (){var and__4115__auto__ = dep_28743;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_28743));
} else {
return and__4115__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_28743,(depth + (1)),state);
} else {
}


var G__28744 = seq__28731_28739;
var G__28745 = chunk__28732_28740;
var G__28746 = count__28733_28741;
var G__28747 = (i__28734_28742 + (1));
seq__28731_28739 = G__28744;
chunk__28732_28740 = G__28745;
count__28733_28741 = G__28746;
i__28734_28742 = G__28747;
continue;
} else {
var temp__5720__auto___28748 = cljs.core.seq.call(null,seq__28731_28739);
if(temp__5720__auto___28748){
var seq__28731_28749__$1 = temp__5720__auto___28748;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28731_28749__$1)){
var c__4556__auto___28750 = cljs.core.chunk_first.call(null,seq__28731_28749__$1);
var G__28751 = cljs.core.chunk_rest.call(null,seq__28731_28749__$1);
var G__28752 = c__4556__auto___28750;
var G__28753 = cljs.core.count.call(null,c__4556__auto___28750);
var G__28754 = (0);
seq__28731_28739 = G__28751;
chunk__28732_28740 = G__28752;
count__28733_28741 = G__28753;
i__28734_28742 = G__28754;
continue;
} else {
var dep_28755 = cljs.core.first.call(null,seq__28731_28749__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = dep_28755;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_28755));
} else {
return and__4115__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_28755,(depth + (1)),state);
} else {
}


var G__28756 = cljs.core.next.call(null,seq__28731_28749__$1);
var G__28757 = null;
var G__28758 = (0);
var G__28759 = (0);
seq__28731_28739 = G__28756;
chunk__28732_28740 = G__28757;
count__28733_28741 = G__28758;
i__28734_28742 = G__28759;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;
var elim_dups_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__28735){
var vec__28736 = p__28735;
var seq__28737 = cljs.core.seq.call(null,vec__28736);
var first__28738 = cljs.core.first.call(null,seq__28737);
var seq__28737__$1 = cljs.core.next.call(null,seq__28737);
var x = first__28738;
var xs = seq__28737__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,(function (p1__28722_SHARP_){
return clojure.set.difference.call(null,p1__28722_SHARP_,x);
}),xs)));
}
});
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.debugLoader_.written_,path);

return goog.object.remove(goog.debugLoader_.written_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
}):(function (ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
}));
figwheel.client.file_reloading.resolve_ns = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?figwheel.client.file_reloading.name__GT_path:(function (p1__28760_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,p1__28760_SHARP_))].join('');
}));
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__28761 = cljs.core.seq.call(null,provides);
var chunk__28762 = null;
var count__28763 = (0);
var i__28764 = (0);
while(true){
if((i__28764 < count__28763)){
var prov = cljs.core._nth.call(null,chunk__28762,i__28764);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28773_28781 = cljs.core.seq.call(null,requires);
var chunk__28774_28782 = null;
var count__28775_28783 = (0);
var i__28776_28784 = (0);
while(true){
if((i__28776_28784 < count__28775_28783)){
var req_28785 = cljs.core._nth.call(null,chunk__28774_28782,i__28776_28784);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28785,prov);


var G__28786 = seq__28773_28781;
var G__28787 = chunk__28774_28782;
var G__28788 = count__28775_28783;
var G__28789 = (i__28776_28784 + (1));
seq__28773_28781 = G__28786;
chunk__28774_28782 = G__28787;
count__28775_28783 = G__28788;
i__28776_28784 = G__28789;
continue;
} else {
var temp__5720__auto___28790 = cljs.core.seq.call(null,seq__28773_28781);
if(temp__5720__auto___28790){
var seq__28773_28791__$1 = temp__5720__auto___28790;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28773_28791__$1)){
var c__4556__auto___28792 = cljs.core.chunk_first.call(null,seq__28773_28791__$1);
var G__28793 = cljs.core.chunk_rest.call(null,seq__28773_28791__$1);
var G__28794 = c__4556__auto___28792;
var G__28795 = cljs.core.count.call(null,c__4556__auto___28792);
var G__28796 = (0);
seq__28773_28781 = G__28793;
chunk__28774_28782 = G__28794;
count__28775_28783 = G__28795;
i__28776_28784 = G__28796;
continue;
} else {
var req_28797 = cljs.core.first.call(null,seq__28773_28791__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28797,prov);


var G__28798 = cljs.core.next.call(null,seq__28773_28791__$1);
var G__28799 = null;
var G__28800 = (0);
var G__28801 = (0);
seq__28773_28781 = G__28798;
chunk__28774_28782 = G__28799;
count__28775_28783 = G__28800;
i__28776_28784 = G__28801;
continue;
}
} else {
}
}
break;
}


var G__28802 = seq__28761;
var G__28803 = chunk__28762;
var G__28804 = count__28763;
var G__28805 = (i__28764 + (1));
seq__28761 = G__28802;
chunk__28762 = G__28803;
count__28763 = G__28804;
i__28764 = G__28805;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__28761);
if(temp__5720__auto__){
var seq__28761__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28761__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__28761__$1);
var G__28806 = cljs.core.chunk_rest.call(null,seq__28761__$1);
var G__28807 = c__4556__auto__;
var G__28808 = cljs.core.count.call(null,c__4556__auto__);
var G__28809 = (0);
seq__28761 = G__28806;
chunk__28762 = G__28807;
count__28763 = G__28808;
i__28764 = G__28809;
continue;
} else {
var prov = cljs.core.first.call(null,seq__28761__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28777_28810 = cljs.core.seq.call(null,requires);
var chunk__28778_28811 = null;
var count__28779_28812 = (0);
var i__28780_28813 = (0);
while(true){
if((i__28780_28813 < count__28779_28812)){
var req_28814 = cljs.core._nth.call(null,chunk__28778_28811,i__28780_28813);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28814,prov);


var G__28815 = seq__28777_28810;
var G__28816 = chunk__28778_28811;
var G__28817 = count__28779_28812;
var G__28818 = (i__28780_28813 + (1));
seq__28777_28810 = G__28815;
chunk__28778_28811 = G__28816;
count__28779_28812 = G__28817;
i__28780_28813 = G__28818;
continue;
} else {
var temp__5720__auto___28819__$1 = cljs.core.seq.call(null,seq__28777_28810);
if(temp__5720__auto___28819__$1){
var seq__28777_28820__$1 = temp__5720__auto___28819__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28777_28820__$1)){
var c__4556__auto___28821 = cljs.core.chunk_first.call(null,seq__28777_28820__$1);
var G__28822 = cljs.core.chunk_rest.call(null,seq__28777_28820__$1);
var G__28823 = c__4556__auto___28821;
var G__28824 = cljs.core.count.call(null,c__4556__auto___28821);
var G__28825 = (0);
seq__28777_28810 = G__28822;
chunk__28778_28811 = G__28823;
count__28779_28812 = G__28824;
i__28780_28813 = G__28825;
continue;
} else {
var req_28826 = cljs.core.first.call(null,seq__28777_28820__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28826,prov);


var G__28827 = cljs.core.next.call(null,seq__28777_28820__$1);
var G__28828 = null;
var G__28829 = (0);
var G__28830 = (0);
seq__28777_28810 = G__28827;
chunk__28778_28811 = G__28828;
count__28779_28812 = G__28829;
i__28780_28813 = G__28830;
continue;
}
} else {
}
}
break;
}


var G__28831 = cljs.core.next.call(null,seq__28761__$1);
var G__28832 = null;
var G__28833 = (0);
var G__28834 = (0);
seq__28761 = G__28831;
chunk__28762 = G__28832;
count__28763 = G__28833;
i__28764 = G__28834;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
(goog.require = figwheel.client.file_reloading.figwheel_require);

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__28835_28839 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__28836_28840 = null;
var count__28837_28841 = (0);
var i__28838_28842 = (0);
while(true){
if((i__28838_28842 < count__28837_28841)){
var ns_28843 = cljs.core._nth.call(null,chunk__28836_28840,i__28838_28842);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28843);


var G__28844 = seq__28835_28839;
var G__28845 = chunk__28836_28840;
var G__28846 = count__28837_28841;
var G__28847 = (i__28838_28842 + (1));
seq__28835_28839 = G__28844;
chunk__28836_28840 = G__28845;
count__28837_28841 = G__28846;
i__28838_28842 = G__28847;
continue;
} else {
var temp__5720__auto___28848 = cljs.core.seq.call(null,seq__28835_28839);
if(temp__5720__auto___28848){
var seq__28835_28849__$1 = temp__5720__auto___28848;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28835_28849__$1)){
var c__4556__auto___28850 = cljs.core.chunk_first.call(null,seq__28835_28849__$1);
var G__28851 = cljs.core.chunk_rest.call(null,seq__28835_28849__$1);
var G__28852 = c__4556__auto___28850;
var G__28853 = cljs.core.count.call(null,c__4556__auto___28850);
var G__28854 = (0);
seq__28835_28839 = G__28851;
chunk__28836_28840 = G__28852;
count__28837_28841 = G__28853;
i__28838_28842 = G__28854;
continue;
} else {
var ns_28855 = cljs.core.first.call(null,seq__28835_28849__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28855);


var G__28856 = cljs.core.next.call(null,seq__28835_28849__$1);
var G__28857 = null;
var G__28858 = (0);
var G__28859 = (0);
seq__28835_28839 = G__28856;
chunk__28836_28840 = G__28857;
count__28837_28841 = G__28858;
i__28838_28842 = G__28859;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
(goog.require_figwheel_backup_ = (function (){var or__4126__auto__ = goog.require__;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.require;
}
})());

(goog.isProvided_ = (function (name){
return false;
}));

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

(goog.addDependency_figwheel_backup_ = goog.addDependency);

(goog.addDependency = (function() { 
var G__28860__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__28860 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28861__i = 0, G__28861__a = new Array(arguments.length -  0);
while (G__28861__i < G__28861__a.length) {G__28861__a[G__28861__i] = arguments[G__28861__i + 0]; ++G__28861__i;}
  args = new cljs.core.IndexedSeq(G__28861__a,0,null);
} 
return G__28860__delegate.call(this,args);};
G__28860.cljs$lang$maxFixedArity = 0;
G__28860.cljs$lang$applyTo = (function (arglist__28862){
var args = cljs.core.seq(arglist__28862);
return G__28860__delegate(args);
});
G__28860.cljs$core$IFn$_invoke$arity$variadic = G__28860__delegate;
return G__28860;
})()
);

goog.constructNamespace_("cljs.user");

(goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload);

return (goog.require = figwheel.client.file_reloading.figwheel_require);
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__28863_SHARP_,p2__28864_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28863_SHARP_)),p2__28864_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__28865_SHARP_,p2__28866_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28865_SHARP_),p2__28866_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__28867 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__28867.addCallback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
}));

G__28867.addErrback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
}));

return G__28867;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e28868){if((e28868 instanceof Error)){
var e = e28868;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28868;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,(function (v,k,o){
return goog.string.endsWith(k,util_pattern);
}));
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e28869){if((e28869 instanceof Error)){
var e = e28869;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28869;

}
}})());
});
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__28870 = cljs.core._EQ_;
var expr__28871 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__28870.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__28871))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__28870.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__28871))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__28870.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__28871))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return (function (a,b){
throw "Reload not defined for this platform";
});
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__28873,callback){
var map__28874 = p__28873;
var map__28874__$1 = (((((!((map__28874 == null))))?(((((map__28874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28874.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28874):map__28874);
var file_msg = map__28874__$1;
var request_url = cljs.core.get.call(null,map__28874__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4126__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,(function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
}));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),(function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
}));

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__26603__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26604__auto__ = (function (){var switch__26508__auto__ = (function (state_28912){
var state_val_28913 = (state_28912[(1)]);
if((state_val_28913 === (7))){
var inst_28908 = (state_28912[(2)]);
var state_28912__$1 = state_28912;
var statearr_28914_28940 = state_28912__$1;
(statearr_28914_28940[(2)] = inst_28908);

(statearr_28914_28940[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28913 === (1))){
var state_28912__$1 = state_28912;
var statearr_28915_28941 = state_28912__$1;
(statearr_28915_28941[(2)] = null);

(statearr_28915_28941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28913 === (4))){
var inst_28878 = (state_28912[(7)]);
var inst_28878__$1 = (state_28912[(2)]);
var state_28912__$1 = (function (){var statearr_28916 = state_28912;
(statearr_28916[(7)] = inst_28878__$1);

return statearr_28916;
})();
if(cljs.core.truth_(inst_28878__$1)){
var statearr_28917_28942 = state_28912__$1;
(statearr_28917_28942[(1)] = (5));

} else {
var statearr_28918_28943 = state_28912__$1;
(statearr_28918_28943[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28913 === (15))){
var inst_28891 = (state_28912[(8)]);
var inst_28893 = (state_28912[(9)]);
var inst_28895 = inst_28893.call(null,inst_28891);
var state_28912__$1 = state_28912;
var statearr_28919_28944 = state_28912__$1;
(statearr_28919_28944[(2)] = inst_28895);

(statearr_28919_28944[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28913 === (13))){
var inst_28902 = (state_28912[(2)]);
var state_28912__$1 = state_28912;
var statearr_28920_28945 = state_28912__$1;
(statearr_28920_28945[(2)] = inst_28902);

(statearr_28920_28945[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28913 === (6))){
var state_28912__$1 = state_28912;
var statearr_28921_28946 = state_28912__$1;
(statearr_28921_28946[(2)] = null);

(statearr_28921_28946[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28913 === (17))){
var inst_28899 = (state_28912[(2)]);
var state_28912__$1 = state_28912;
var statearr_28922_28947 = state_28912__$1;
(statearr_28922_28947[(2)] = inst_28899);

(statearr_28922_28947[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28913 === (3))){
var inst_28910 = (state_28912[(2)]);
var state_28912__$1 = state_28912;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28912__$1,inst_28910);
} else {
if((state_val_28913 === (12))){
var state_28912__$1 = state_28912;
var statearr_28923_28948 = state_28912__$1;
(statearr_28923_28948[(2)] = null);

(statearr_28923_28948[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28913 === (2))){
var state_28912__$1 = state_28912;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28912__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_28913 === (11))){
var inst_28883 = (state_28912[(10)]);
var inst_28889 = figwheel.client.file_reloading.blocking_load.call(null,inst_28883);
var state_28912__$1 = state_28912;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28912__$1,(14),inst_28889);
} else {
if((state_val_28913 === (9))){
var inst_28883 = (state_28912[(10)]);
var state_28912__$1 = state_28912;
if(cljs.core.truth_(inst_28883)){
var statearr_28924_28949 = state_28912__$1;
(statearr_28924_28949[(1)] = (11));

} else {
var statearr_28925_28950 = state_28912__$1;
(statearr_28925_28950[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28913 === (5))){
var inst_28884 = (state_28912[(11)]);
var inst_28878 = (state_28912[(7)]);
var inst_28883 = cljs.core.nth.call(null,inst_28878,(0),null);
var inst_28884__$1 = cljs.core.nth.call(null,inst_28878,(1),null);
var state_28912__$1 = (function (){var statearr_28926 = state_28912;
(statearr_28926[(10)] = inst_28883);

(statearr_28926[(11)] = inst_28884__$1);

return statearr_28926;
})();
if(cljs.core.truth_(inst_28884__$1)){
var statearr_28927_28951 = state_28912__$1;
(statearr_28927_28951[(1)] = (8));

} else {
var statearr_28928_28952 = state_28912__$1;
(statearr_28928_28952[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28913 === (14))){
var inst_28883 = (state_28912[(10)]);
var inst_28893 = (state_28912[(9)]);
var inst_28891 = (state_28912[(2)]);
var inst_28892 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_28893__$1 = cljs.core.get.call(null,inst_28892,inst_28883);
var state_28912__$1 = (function (){var statearr_28929 = state_28912;
(statearr_28929[(8)] = inst_28891);

(statearr_28929[(9)] = inst_28893__$1);

return statearr_28929;
})();
if(cljs.core.truth_(inst_28893__$1)){
var statearr_28930_28953 = state_28912__$1;
(statearr_28930_28953[(1)] = (15));

} else {
var statearr_28931_28954 = state_28912__$1;
(statearr_28931_28954[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28913 === (16))){
var inst_28891 = (state_28912[(8)]);
var inst_28897 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_28891);
var state_28912__$1 = state_28912;
var statearr_28932_28955 = state_28912__$1;
(statearr_28932_28955[(2)] = inst_28897);

(statearr_28932_28955[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28913 === (10))){
var inst_28904 = (state_28912[(2)]);
var state_28912__$1 = (function (){var statearr_28933 = state_28912;
(statearr_28933[(12)] = inst_28904);

return statearr_28933;
})();
var statearr_28934_28956 = state_28912__$1;
(statearr_28934_28956[(2)] = null);

(statearr_28934_28956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28913 === (8))){
var inst_28884 = (state_28912[(11)]);
var inst_28886 = eval(inst_28884);
var state_28912__$1 = state_28912;
var statearr_28935_28957 = state_28912__$1;
(statearr_28935_28957[(2)] = inst_28886);

(statearr_28935_28957[(1)] = (10));


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
var figwheel$client$file_reloading$state_machine__26509__auto__ = null;
var figwheel$client$file_reloading$state_machine__26509__auto____0 = (function (){
var statearr_28936 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28936[(0)] = figwheel$client$file_reloading$state_machine__26509__auto__);

(statearr_28936[(1)] = (1));

return statearr_28936;
});
var figwheel$client$file_reloading$state_machine__26509__auto____1 = (function (state_28912){
while(true){
var ret_value__26510__auto__ = (function (){try{while(true){
var result__26511__auto__ = switch__26508__auto__.call(null,state_28912);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26511__auto__;
}
break;
}
}catch (e28937){if((e28937 instanceof Object)){
var ex__26512__auto__ = e28937;
var statearr_28938_28958 = state_28912;
(statearr_28938_28958[(5)] = ex__26512__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28912);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28937;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28959 = state_28912;
state_28912 = G__28959;
continue;
} else {
return ret_value__26510__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__26509__auto__ = function(state_28912){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__26509__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__26509__auto____1.call(this,state_28912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__26509__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__26509__auto____0;
figwheel$client$file_reloading$state_machine__26509__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__26509__auto____1;
return figwheel$client$file_reloading$state_machine__26509__auto__;
})()
})();
var state__26605__auto__ = (function (){var statearr_28939 = f__26604__auto__.call(null);
(statearr_28939[(6)] = c__26603__auto__);

return statearr_28939;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26605__auto__);
}));

return c__26603__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__28961 = arguments.length;
switch (G__28961) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
}));

(figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
}));

(figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2);

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__28963,callback){
var map__28964 = p__28963;
var map__28964__$1 = (((((!((map__28964 == null))))?(((((map__28964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28964.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28964):map__28964);
var file_msg = map__28964__$1;
var namespace = cljs.core.get.call(null,map__28964__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,(function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
}));

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__28966){
var map__28967 = p__28966;
var map__28967__$1 = (((((!((map__28967 == null))))?(((((map__28967.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28967.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28967):map__28967);
var file_msg = map__28967__$1;
var namespace = cljs.core.get.call(null,map__28967__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__28969){
var map__28970 = p__28969;
var map__28970__$1 = (((((!((map__28970 == null))))?(((((map__28970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28970.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28970):map__28970);
var file_msg = map__28970__$1;
var namespace = cljs.core.get.call(null,map__28970__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if(cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg))){
var or__4126__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return false;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__28972,callback){
var map__28973 = p__28972;
var map__28973__$1 = (((((!((map__28973 == null))))?(((((map__28973.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28973.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28973):map__28973);
var file_msg = map__28973__$1;
var request_url = cljs.core.get.call(null,map__28973__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__28973__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,(function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
}));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__26603__auto___29023 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26604__auto__ = (function (){var switch__26508__auto__ = (function (state_29008){
var state_val_29009 = (state_29008[(1)]);
if((state_val_29009 === (1))){
var inst_28982 = cljs.core.seq.call(null,files);
var inst_28983 = cljs.core.first.call(null,inst_28982);
var inst_28984 = cljs.core.next.call(null,inst_28982);
var inst_28985 = files;
var state_29008__$1 = (function (){var statearr_29010 = state_29008;
(statearr_29010[(7)] = inst_28983);

(statearr_29010[(8)] = inst_28984);

(statearr_29010[(9)] = inst_28985);

return statearr_29010;
})();
var statearr_29011_29024 = state_29008__$1;
(statearr_29011_29024[(2)] = null);

(statearr_29011_29024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29009 === (2))){
var inst_28991 = (state_29008[(10)]);
var inst_28985 = (state_29008[(9)]);
var inst_28990 = cljs.core.seq.call(null,inst_28985);
var inst_28991__$1 = cljs.core.first.call(null,inst_28990);
var inst_28992 = cljs.core.next.call(null,inst_28990);
var inst_28993 = (inst_28991__$1 == null);
var inst_28994 = cljs.core.not.call(null,inst_28993);
var state_29008__$1 = (function (){var statearr_29012 = state_29008;
(statearr_29012[(10)] = inst_28991__$1);

(statearr_29012[(11)] = inst_28992);

return statearr_29012;
})();
if(inst_28994){
var statearr_29013_29025 = state_29008__$1;
(statearr_29013_29025[(1)] = (4));

} else {
var statearr_29014_29026 = state_29008__$1;
(statearr_29014_29026[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29009 === (3))){
var inst_29006 = (state_29008[(2)]);
var state_29008__$1 = state_29008;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29008__$1,inst_29006);
} else {
if((state_val_29009 === (4))){
var inst_28991 = (state_29008[(10)]);
var inst_28996 = figwheel.client.file_reloading.reload_js_file.call(null,inst_28991);
var state_29008__$1 = state_29008;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29008__$1,(7),inst_28996);
} else {
if((state_val_29009 === (5))){
var inst_29002 = cljs.core.async.close_BANG_.call(null,out);
var state_29008__$1 = state_29008;
var statearr_29015_29027 = state_29008__$1;
(statearr_29015_29027[(2)] = inst_29002);

(statearr_29015_29027[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29009 === (6))){
var inst_29004 = (state_29008[(2)]);
var state_29008__$1 = state_29008;
var statearr_29016_29028 = state_29008__$1;
(statearr_29016_29028[(2)] = inst_29004);

(statearr_29016_29028[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29009 === (7))){
var inst_28992 = (state_29008[(11)]);
var inst_28998 = (state_29008[(2)]);
var inst_28999 = cljs.core.async.put_BANG_.call(null,out,inst_28998);
var inst_28985 = inst_28992;
var state_29008__$1 = (function (){var statearr_29017 = state_29008;
(statearr_29017[(12)] = inst_28999);

(statearr_29017[(9)] = inst_28985);

return statearr_29017;
})();
var statearr_29018_29029 = state_29008__$1;
(statearr_29018_29029[(2)] = null);

(statearr_29018_29029[(1)] = (2));


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
});
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26509__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26509__auto____0 = (function (){
var statearr_29019 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29019[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26509__auto__);

(statearr_29019[(1)] = (1));

return statearr_29019;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26509__auto____1 = (function (state_29008){
while(true){
var ret_value__26510__auto__ = (function (){try{while(true){
var result__26511__auto__ = switch__26508__auto__.call(null,state_29008);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26511__auto__;
}
break;
}
}catch (e29020){if((e29020 instanceof Object)){
var ex__26512__auto__ = e29020;
var statearr_29021_29030 = state_29008;
(statearr_29021_29030[(5)] = ex__26512__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29008);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29020;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29031 = state_29008;
state_29008 = G__29031;
continue;
} else {
return ret_value__26510__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26509__auto__ = function(state_29008){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26509__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26509__auto____1.call(this,state_29008);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26509__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26509__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26509__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26509__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26509__auto__;
})()
})();
var state__26605__auto__ = (function (){var statearr_29022 = f__26604__auto__.call(null);
(statearr_29022[(6)] = c__26603__auto___29023);

return statearr_29022;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26605__auto__);
}));


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__29032,opts){
var map__29033 = p__29032;
var map__29033__$1 = (((((!((map__29033 == null))))?(((((map__29033.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29033.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29033):map__29033);
var eval_body = cljs.core.get.call(null,map__29033__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__29033__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4115__auto__ = eval_body;
if(cljs.core.truth_(and__4115__auto__)){
return typeof eval_body === 'string';
} else {
return and__4115__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e29035){var e = e29035;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,(function (n){
var temp__5718__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__29036_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29036_SHARP_),n);
}),files));
if(cljs.core.truth_(temp__5718__auto__)){
var file_msg = temp__5718__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
}),deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__29037){
var vec__29038 = p__29037;
var k = cljs.core.nth.call(null,vec__29038,(0),null);
var v = cljs.core.nth.call(null,vec__29038,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__29041){
var vec__29042 = p__29041;
var k = cljs.core.nth.call(null,vec__29042,(0),null);
var v = cljs.core.nth.call(null,vec__29042,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__29048,p__29049){
var map__29050 = p__29048;
var map__29050__$1 = (((((!((map__29050 == null))))?(((((map__29050.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29050.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29050):map__29050);
var opts = map__29050__$1;
var before_jsload = cljs.core.get.call(null,map__29050__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__29050__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__29050__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__29051 = p__29049;
var map__29051__$1 = (((((!((map__29051 == null))))?(((((map__29051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29051.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29051):map__29051);
var msg = map__29051__$1;
var files = cljs.core.get.call(null,map__29051__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__29051__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__29051__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__26603__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__26604__auto__ = (function (){var switch__26508__auto__ = (function (state_29205){
var state_val_29206 = (state_29205[(1)]);
if((state_val_29206 === (7))){
var inst_29067 = (state_29205[(7)]);
var inst_29065 = (state_29205[(8)]);
var inst_29068 = (state_29205[(9)]);
var inst_29066 = (state_29205[(10)]);
var inst_29073 = cljs.core._nth.call(null,inst_29066,inst_29068);
var inst_29074 = figwheel.client.file_reloading.eval_body.call(null,inst_29073,opts);
var inst_29075 = (inst_29068 + (1));
var tmp29207 = inst_29067;
var tmp29208 = inst_29065;
var tmp29209 = inst_29066;
var inst_29065__$1 = tmp29208;
var inst_29066__$1 = tmp29209;
var inst_29067__$1 = tmp29207;
var inst_29068__$1 = inst_29075;
var state_29205__$1 = (function (){var statearr_29210 = state_29205;
(statearr_29210[(7)] = inst_29067__$1);

(statearr_29210[(8)] = inst_29065__$1);

(statearr_29210[(9)] = inst_29068__$1);

(statearr_29210[(11)] = inst_29074);

(statearr_29210[(10)] = inst_29066__$1);

return statearr_29210;
})();
var statearr_29211_29294 = state_29205__$1;
(statearr_29211_29294[(2)] = null);

(statearr_29211_29294[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29206 === (20))){
var inst_29108 = (state_29205[(12)]);
var inst_29116 = figwheel.client.file_reloading.sort_files.call(null,inst_29108);
var state_29205__$1 = state_29205;
var statearr_29212_29295 = state_29205__$1;
(statearr_29212_29295[(2)] = inst_29116);

(statearr_29212_29295[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29206 === (27))){
var state_29205__$1 = state_29205;
var statearr_29213_29296 = state_29205__$1;
(statearr_29213_29296[(2)] = null);

(statearr_29213_29296[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29206 === (1))){
var inst_29057 = (state_29205[(13)]);
var inst_29054 = before_jsload.call(null,files);
var inst_29055 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_29056 = (function (){return (function (p1__29045_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29045_SHARP_);
});
})();
var inst_29057__$1 = cljs.core.filter.call(null,inst_29056,files);
var inst_29058 = cljs.core.not_empty.call(null,inst_29057__$1);
var state_29205__$1 = (function (){var statearr_29214 = state_29205;
(statearr_29214[(13)] = inst_29057__$1);

(statearr_29214[(14)] = inst_29055);

(statearr_29214[(15)] = inst_29054);

return statearr_29214;
})();
if(cljs.core.truth_(inst_29058)){
var statearr_29215_29297 = state_29205__$1;
(statearr_29215_29297[(1)] = (2));

} else {
var statearr_29216_29298 = state_29205__$1;
(statearr_29216_29298[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29206 === (24))){
var state_29205__$1 = state_29205;
var statearr_29217_29299 = state_29205__$1;
(statearr_29217_29299[(2)] = null);

(statearr_29217_29299[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29206 === (39))){
var inst_29158 = (state_29205[(16)]);
var state_29205__$1 = state_29205;
var statearr_29218_29300 = state_29205__$1;
(statearr_29218_29300[(2)] = inst_29158);

(statearr_29218_29300[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29206 === (46))){
var inst_29200 = (state_29205[(2)]);
var state_29205__$1 = state_29205;
var statearr_29219_29301 = state_29205__$1;
(statearr_29219_29301[(2)] = inst_29200);

(statearr_29219_29301[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29206 === (4))){
var inst_29102 = (state_29205[(2)]);
var inst_29103 = cljs.core.List.EMPTY;
var inst_29104 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_29103);
var inst_29105 = (function (){return (function (p1__29046_SHARP_){
var and__4115__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29046_SHARP_);
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29046_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__29046_SHARP_))));
} else {
return and__4115__auto__;
}
});
})();
var inst_29106 = cljs.core.filter.call(null,inst_29105,files);
var inst_29107 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_29108 = cljs.core.concat.call(null,inst_29106,inst_29107);
var state_29205__$1 = (function (){var statearr_29220 = state_29205;
(statearr_29220[(12)] = inst_29108);

(statearr_29220[(17)] = inst_29104);

(statearr_29220[(18)] = inst_29102);

return statearr_29220;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_29221_29302 = state_29205__$1;
(statearr_29221_29302[(1)] = (16));

} else {
var statearr_29222_29303 = state_29205__$1;
(statearr_29222_29303[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29206 === (15))){
var inst_29092 = (state_29205[(2)]);
var state_29205__$1 = state_29205;
var statearr_29223_29304 = state_29205__$1;
(statearr_29223_29304[(2)] = inst_29092);

(statearr_29223_29304[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29206 === (21))){
var inst_29118 = (state_29205[(19)]);
var inst_29118__$1 = (state_29205[(2)]);
var inst_29119 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_29118__$1);
var state_29205__$1 = (function (){var statearr_29224 = state_29205;
(statearr_29224[(19)] = inst_29118__$1);

return statearr_29224;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29205__$1,(22),inst_29119);
} else {
if((state_val_29206 === (31))){
var inst_29203 = (state_29205[(2)]);
var state_29205__$1 = state_29205;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29205__$1,inst_29203);
} else {
if((state_val_29206 === (32))){
var inst_29158 = (state_29205[(16)]);
var inst_29163 = inst_29158.cljs$lang$protocol_mask$partition0$;
var inst_29164 = (inst_29163 & (64));
var inst_29165 = inst_29158.cljs$core$ISeq$;
var inst_29166 = (cljs.core.PROTOCOL_SENTINEL === inst_29165);
var inst_29167 = ((inst_29164) || (inst_29166));
var state_29205__$1 = state_29205;
if(cljs.core.truth_(inst_29167)){
var statearr_29225_29305 = state_29205__$1;
(statearr_29225_29305[(1)] = (35));

} else {
var statearr_29226_29306 = state_29205__$1;
(statearr_29226_29306[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29206 === (40))){
var inst_29180 = (state_29205[(20)]);
var inst_29179 = (state_29205[(2)]);
var inst_29180__$1 = cljs.core.get.call(null,inst_29179,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_29181 = cljs.core.get.call(null,inst_29179,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_29182 = cljs.core.not_empty.call(null,inst_29180__$1);
var state_29205__$1 = (function (){var statearr_29227 = state_29205;
(statearr_29227[(21)] = inst_29181);

(statearr_29227[(20)] = inst_29180__$1);

return statearr_29227;
})();
if(cljs.core.truth_(inst_29182)){
var statearr_29228_29307 = state_29205__$1;
(statearr_29228_29307[(1)] = (41));

} else {
var statearr_29229_29308 = state_29205__$1;
(statearr_29229_29308[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29206 === (33))){
var state_29205__$1 = state_29205;
var statearr_29230_29309 = state_29205__$1;
(statearr_29230_29309[(2)] = false);

(statearr_29230_29309[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29206 === (13))){
var inst_29078 = (state_29205[(22)]);
var inst_29082 = cljs.core.chunk_first.call(null,inst_29078);
var inst_29083 = cljs.core.chunk_rest.call(null,inst_29078);
var inst_29084 = cljs.core.count.call(null,inst_29082);
var inst_29065 = inst_29083;
var inst_29066 = inst_29082;
var inst_29067 = inst_29084;
var inst_29068 = (0);
var state_29205__$1 = (function (){var statearr_29231 = state_29205;
(statearr_29231[(7)] = inst_29067);

(statearr_29231[(8)] = inst_29065);

(statearr_29231[(9)] = inst_29068);

(statearr_29231[(10)] = inst_29066);

return statearr_29231;
})();
var statearr_29232_29310 = state_29205__$1;
(statearr_29232_29310[(2)] = null);

(statearr_29232_29310[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29206 === (22))){
var inst_29121 = (state_29205[(23)]);
var inst_29118 = (state_29205[(19)]);
var inst_29126 = (state_29205[(24)]);
var inst_29122 = (state_29205[(25)]);
var inst_29121__$1 = (state_29205[(2)]);
var inst_29122__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29121__$1);
var inst_29123 = (function (){var all_files = inst_29118;
var res_SINGLEQUOTE_ = inst_29121__$1;
var res = inst_29122__$1;
return (function (p1__29047_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__29047_SHARP_));
});
})();
var inst_29124 = cljs.core.filter.call(null,inst_29123,inst_29121__$1);
var inst_29125 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_29126__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29125);
var inst_29127 = cljs.core.not_empty.call(null,inst_29126__$1);
var state_29205__$1 = (function (){var statearr_29233 = state_29205;
(statearr_29233[(23)] = inst_29121__$1);

(statearr_29233[(24)] = inst_29126__$1);

(statearr_29233[(25)] = inst_29122__$1);

(statearr_29233[(26)] = inst_29124);

return statearr_29233;
})();
if(cljs.core.truth_(inst_29127)){
var statearr_29234_29311 = state_29205__$1;
(statearr_29234_29311[(1)] = (23));

} else {
var statearr_29235_29312 = state_29205__$1;
(statearr_29235_29312[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29206 === (36))){
var state_29205__$1 = state_29205;
var statearr_29236_29313 = state_29205__$1;
(statearr_29236_29313[(2)] = false);

(statearr_29236_29313[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29206 === (41))){
var inst_29180 = (state_29205[(20)]);
var inst_29184 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_29185 = cljs.core.map.call(null,inst_29184,inst_29180);
var inst_29186 = cljs.core.pr_str.call(null,inst_29185);
var inst_29187 = ["figwheel-no-load meta-data: ",inst_29186].join('');
var inst_29188 = figwheel.client.utils.log.call(null,inst_29187);
var state_29205__$1 = state_29205;
var statearr_29237_29314 = state_29205__$1;
(statearr_29237_29314[(2)] = inst_29188);

(statearr_29237_29314[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29206 === (43))){
var inst_29181 = (state_29205[(21)]);
var inst_29191 = (state_29205[(2)]);
var inst_29192 = cljs.core.not_empty.call(null,inst_29181);
var state_29205__$1 = (function (){var statearr_29238 = state_29205;
(statearr_29238[(27)] = inst_29191);

return statearr_29238;
})();
if(cljs.core.truth_(inst_29192)){
var statearr_29239_29315 = state_29205__$1;
(statearr_29239_29315[(1)] = (44));

} else {
var statearr_29240_29316 = state_29205__$1;
(statearr_29240_29316[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29206 === (29))){
var inst_29158 = (state_29205[(16)]);
var inst_29121 = (state_29205[(23)]);
var inst_29118 = (state_29205[(19)]);
var inst_29126 = (state_29205[(24)]);
var inst_29122 = (state_29205[(25)]);
var inst_29124 = (state_29205[(26)]);
var inst_29154 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_29157 = (function (){var all_files = inst_29118;
var res_SINGLEQUOTE_ = inst_29121;
var res = inst_29122;
var files_not_loaded = inst_29124;
var dependencies_that_loaded = inst_29126;
return (function (p__29156){
var map__29241 = p__29156;
var map__29241__$1 = (((((!((map__29241 == null))))?(((((map__29241.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29241.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29241):map__29241);
var namespace = cljs.core.get.call(null,map__29241__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
})();
var inst_29158__$1 = cljs.core.group_by.call(null,inst_29157,inst_29124);
var inst_29160 = (inst_29158__$1 == null);
var inst_29161 = cljs.core.not.call(null,inst_29160);
var state_29205__$1 = (function (){var statearr_29243 = state_29205;
(statearr_29243[(16)] = inst_29158__$1);

(statearr_29243[(28)] = inst_29154);

return statearr_29243;
})();
if(inst_29161){
var statearr_29244_29317 = state_29205__$1;
(statearr_29244_29317[(1)] = (32));

} else {
var statearr_29245_29318 = state_29205__$1;
(statearr_29245_29318[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29206 === (44))){
var inst_29181 = (state_29205[(21)]);
var inst_29194 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29181);
var inst_29195 = cljs.core.pr_str.call(null,inst_29194);
var inst_29196 = ["not required: ",inst_29195].join('');
var inst_29197 = figwheel.client.utils.log.call(null,inst_29196);
var state_29205__$1 = state_29205;
var statearr_29246_29319 = state_29205__$1;
(statearr_29246_29319[(2)] = inst_29197);

(statearr_29246_29319[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29206 === (6))){
var inst_29099 = (state_29205[(2)]);
var state_29205__$1 = state_29205;
var statearr_29247_29320 = state_29205__$1;
(statearr_29247_29320[(2)] = inst_29099);

(statearr_29247_29320[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29206 === (28))){
var inst_29124 = (state_29205[(26)]);
var inst_29151 = (state_29205[(2)]);
var inst_29152 = cljs.core.not_empty.call(null,inst_29124);
var state_29205__$1 = (function (){var statearr_29248 = state_29205;
(statearr_29248[(29)] = inst_29151);

return statearr_29248;
})();
if(cljs.core.truth_(inst_29152)){
var statearr_29249_29321 = state_29205__$1;
(statearr_29249_29321[(1)] = (29));

} else {
var statearr_29250_29322 = state_29205__$1;
(statearr_29250_29322[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29206 === (25))){
var inst_29122 = (state_29205[(25)]);
var inst_29138 = (state_29205[(2)]);
var inst_29139 = cljs.core.not_empty.call(null,inst_29122);
var state_29205__$1 = (function (){var statearr_29251 = state_29205;
(statearr_29251[(30)] = inst_29138);

return statearr_29251;
})();
if(cljs.core.truth_(inst_29139)){
var statearr_29252_29323 = state_29205__$1;
(statearr_29252_29323[(1)] = (26));

} else {
var statearr_29253_29324 = state_29205__$1;
(statearr_29253_29324[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29206 === (34))){
var inst_29174 = (state_29205[(2)]);
var state_29205__$1 = state_29205;
if(cljs.core.truth_(inst_29174)){
var statearr_29254_29325 = state_29205__$1;
(statearr_29254_29325[(1)] = (38));

} else {
var statearr_29255_29326 = state_29205__$1;
(statearr_29255_29326[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29206 === (17))){
var state_29205__$1 = state_29205;
var statearr_29256_29327 = state_29205__$1;
(statearr_29256_29327[(2)] = recompile_dependents);

(statearr_29256_29327[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29206 === (3))){
var state_29205__$1 = state_29205;
var statearr_29257_29328 = state_29205__$1;
(statearr_29257_29328[(2)] = null);

(statearr_29257_29328[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29206 === (12))){
var inst_29095 = (state_29205[(2)]);
var state_29205__$1 = state_29205;
var statearr_29258_29329 = state_29205__$1;
(statearr_29258_29329[(2)] = inst_29095);

(statearr_29258_29329[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29206 === (2))){
var inst_29057 = (state_29205[(13)]);
var inst_29064 = cljs.core.seq.call(null,inst_29057);
var inst_29065 = inst_29064;
var inst_29066 = null;
var inst_29067 = (0);
var inst_29068 = (0);
var state_29205__$1 = (function (){var statearr_29259 = state_29205;
(statearr_29259[(7)] = inst_29067);

(statearr_29259[(8)] = inst_29065);

(statearr_29259[(9)] = inst_29068);

(statearr_29259[(10)] = inst_29066);

return statearr_29259;
})();
var statearr_29260_29330 = state_29205__$1;
(statearr_29260_29330[(2)] = null);

(statearr_29260_29330[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29206 === (23))){
var inst_29121 = (state_29205[(23)]);
var inst_29118 = (state_29205[(19)]);
var inst_29126 = (state_29205[(24)]);
var inst_29122 = (state_29205[(25)]);
var inst_29124 = (state_29205[(26)]);
var inst_29129 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_29131 = (function (){var all_files = inst_29118;
var res_SINGLEQUOTE_ = inst_29121;
var res = inst_29122;
var files_not_loaded = inst_29124;
var dependencies_that_loaded = inst_29126;
return (function (p__29130){
var map__29261 = p__29130;
var map__29261__$1 = (((((!((map__29261 == null))))?(((((map__29261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29261.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29261):map__29261);
var request_url = cljs.core.get.call(null,map__29261__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
})();
var inst_29132 = cljs.core.reverse.call(null,inst_29126);
var inst_29133 = cljs.core.map.call(null,inst_29131,inst_29132);
var inst_29134 = cljs.core.pr_str.call(null,inst_29133);
var inst_29135 = figwheel.client.utils.log.call(null,inst_29134);
var state_29205__$1 = (function (){var statearr_29263 = state_29205;
(statearr_29263[(31)] = inst_29129);

return statearr_29263;
})();
var statearr_29264_29331 = state_29205__$1;
(statearr_29264_29331[(2)] = inst_29135);

(statearr_29264_29331[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29206 === (35))){
var state_29205__$1 = state_29205;
var statearr_29265_29332 = state_29205__$1;
(statearr_29265_29332[(2)] = true);

(statearr_29265_29332[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29206 === (19))){
var inst_29108 = (state_29205[(12)]);
var inst_29114 = figwheel.client.file_reloading.expand_files.call(null,inst_29108);
var state_29205__$1 = state_29205;
var statearr_29266_29333 = state_29205__$1;
(statearr_29266_29333[(2)] = inst_29114);

(statearr_29266_29333[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29206 === (11))){
var state_29205__$1 = state_29205;
var statearr_29267_29334 = state_29205__$1;
(statearr_29267_29334[(2)] = null);

(statearr_29267_29334[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29206 === (9))){
var inst_29097 = (state_29205[(2)]);
var state_29205__$1 = state_29205;
var statearr_29268_29335 = state_29205__$1;
(statearr_29268_29335[(2)] = inst_29097);

(statearr_29268_29335[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29206 === (5))){
var inst_29067 = (state_29205[(7)]);
var inst_29068 = (state_29205[(9)]);
var inst_29070 = (inst_29068 < inst_29067);
var inst_29071 = inst_29070;
var state_29205__$1 = state_29205;
if(cljs.core.truth_(inst_29071)){
var statearr_29269_29336 = state_29205__$1;
(statearr_29269_29336[(1)] = (7));

} else {
var statearr_29270_29337 = state_29205__$1;
(statearr_29270_29337[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29206 === (14))){
var inst_29078 = (state_29205[(22)]);
var inst_29087 = cljs.core.first.call(null,inst_29078);
var inst_29088 = figwheel.client.file_reloading.eval_body.call(null,inst_29087,opts);
var inst_29089 = cljs.core.next.call(null,inst_29078);
var inst_29065 = inst_29089;
var inst_29066 = null;
var inst_29067 = (0);
var inst_29068 = (0);
var state_29205__$1 = (function (){var statearr_29271 = state_29205;
(statearr_29271[(7)] = inst_29067);

(statearr_29271[(8)] = inst_29065);

(statearr_29271[(9)] = inst_29068);

(statearr_29271[(10)] = inst_29066);

(statearr_29271[(32)] = inst_29088);

return statearr_29271;
})();
var statearr_29272_29338 = state_29205__$1;
(statearr_29272_29338[(2)] = null);

(statearr_29272_29338[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29206 === (45))){
var state_29205__$1 = state_29205;
var statearr_29273_29339 = state_29205__$1;
(statearr_29273_29339[(2)] = null);

(statearr_29273_29339[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29206 === (26))){
var inst_29121 = (state_29205[(23)]);
var inst_29118 = (state_29205[(19)]);
var inst_29126 = (state_29205[(24)]);
var inst_29122 = (state_29205[(25)]);
var inst_29124 = (state_29205[(26)]);
var inst_29141 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_29143 = (function (){var all_files = inst_29118;
var res_SINGLEQUOTE_ = inst_29121;
var res = inst_29122;
var files_not_loaded = inst_29124;
var dependencies_that_loaded = inst_29126;
return (function (p__29142){
var map__29274 = p__29142;
var map__29274__$1 = (((((!((map__29274 == null))))?(((((map__29274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29274.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29274):map__29274);
var namespace = cljs.core.get.call(null,map__29274__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__29274__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
})();
var inst_29144 = cljs.core.map.call(null,inst_29143,inst_29122);
var inst_29145 = cljs.core.pr_str.call(null,inst_29144);
var inst_29146 = figwheel.client.utils.log.call(null,inst_29145);
var inst_29147 = (function (){var all_files = inst_29118;
var res_SINGLEQUOTE_ = inst_29121;
var res = inst_29122;
var files_not_loaded = inst_29124;
var dependencies_that_loaded = inst_29126;
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
})();
var inst_29148 = setTimeout(inst_29147,(10));
var state_29205__$1 = (function (){var statearr_29276 = state_29205;
(statearr_29276[(33)] = inst_29141);

(statearr_29276[(34)] = inst_29146);

return statearr_29276;
})();
var statearr_29277_29340 = state_29205__$1;
(statearr_29277_29340[(2)] = inst_29148);

(statearr_29277_29340[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29206 === (16))){
var state_29205__$1 = state_29205;
var statearr_29278_29341 = state_29205__$1;
(statearr_29278_29341[(2)] = reload_dependents);

(statearr_29278_29341[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29206 === (38))){
var inst_29158 = (state_29205[(16)]);
var inst_29176 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29158);
var state_29205__$1 = state_29205;
var statearr_29279_29342 = state_29205__$1;
(statearr_29279_29342[(2)] = inst_29176);

(statearr_29279_29342[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29206 === (30))){
var state_29205__$1 = state_29205;
var statearr_29280_29343 = state_29205__$1;
(statearr_29280_29343[(2)] = null);

(statearr_29280_29343[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29206 === (10))){
var inst_29078 = (state_29205[(22)]);
var inst_29080 = cljs.core.chunked_seq_QMARK_.call(null,inst_29078);
var state_29205__$1 = state_29205;
if(inst_29080){
var statearr_29281_29344 = state_29205__$1;
(statearr_29281_29344[(1)] = (13));

} else {
var statearr_29282_29345 = state_29205__$1;
(statearr_29282_29345[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29206 === (18))){
var inst_29112 = (state_29205[(2)]);
var state_29205__$1 = state_29205;
if(cljs.core.truth_(inst_29112)){
var statearr_29283_29346 = state_29205__$1;
(statearr_29283_29346[(1)] = (19));

} else {
var statearr_29284_29347 = state_29205__$1;
(statearr_29284_29347[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29206 === (42))){
var state_29205__$1 = state_29205;
var statearr_29285_29348 = state_29205__$1;
(statearr_29285_29348[(2)] = null);

(statearr_29285_29348[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29206 === (37))){
var inst_29171 = (state_29205[(2)]);
var state_29205__$1 = state_29205;
var statearr_29286_29349 = state_29205__$1;
(statearr_29286_29349[(2)] = inst_29171);

(statearr_29286_29349[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29206 === (8))){
var inst_29065 = (state_29205[(8)]);
var inst_29078 = (state_29205[(22)]);
var inst_29078__$1 = cljs.core.seq.call(null,inst_29065);
var state_29205__$1 = (function (){var statearr_29287 = state_29205;
(statearr_29287[(22)] = inst_29078__$1);

return statearr_29287;
})();
if(inst_29078__$1){
var statearr_29288_29350 = state_29205__$1;
(statearr_29288_29350[(1)] = (10));

} else {
var statearr_29289_29351 = state_29205__$1;
(statearr_29289_29351[(1)] = (11));

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
}
});
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26509__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26509__auto____0 = (function (){
var statearr_29290 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29290[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__26509__auto__);

(statearr_29290[(1)] = (1));

return statearr_29290;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26509__auto____1 = (function (state_29205){
while(true){
var ret_value__26510__auto__ = (function (){try{while(true){
var result__26511__auto__ = switch__26508__auto__.call(null,state_29205);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26511__auto__;
}
break;
}
}catch (e29291){if((e29291 instanceof Object)){
var ex__26512__auto__ = e29291;
var statearr_29292_29352 = state_29205;
(statearr_29292_29352[(5)] = ex__26512__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29205);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29291;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29353 = state_29205;
state_29205 = G__29353;
continue;
} else {
return ret_value__26510__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__26509__auto__ = function(state_29205){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26509__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26509__auto____1.call(this,state_29205);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__26509__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26509__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__26509__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26509__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26509__auto__;
})()
})();
var state__26605__auto__ = (function (){var statearr_29293 = f__26604__auto__.call(null);
(statearr_29293[(6)] = c__26603__auto__);

return statearr_29293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26605__auto__);
}));

return c__26603__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__29356,link){
var map__29357 = p__29356;
var map__29357__$1 = (((((!((map__29357 == null))))?(((((map__29357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29357.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29357):map__29357);
var file = cljs.core.get.call(null,map__29357__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5720__auto__ = link.href;
if(cljs.core.truth_(temp__5720__auto__)){
var link_href = temp__5720__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,(function (p1__29354_SHARP_,p2__29355_SHARP_){
if(cljs.core._EQ_.call(null,p1__29354_SHARP_,p2__29355_SHARP_)){
return p1__29354_SHARP_;
} else {
return false;
}
}),cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = ((match).length);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),((figwheel.client.file_reloading.truncate_url.call(null,link_href)).length)], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5720__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__29360){
var map__29361 = p__29360;
var map__29361__$1 = (((((!((map__29361 == null))))?(((((map__29361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29361.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29361):map__29361);
var match_length = cljs.core.get.call(null,map__29361__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__29361__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__29359_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__29359_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5720__auto__)){
var res = temp__5720__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
(clone.rel = "stylesheet");

(clone.media = link.media);

(clone.disabled = link.disabled);

(clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url));

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
(link.rel = "stylesheet");

(link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url));

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__29363_SHARP_,p2__29364_SHARP_){
return cljs.core.assoc.call(null,p1__29363_SHARP_,cljs.core.get.call(null,p2__29364_SHARP_,key),p2__29364_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout((function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
}),(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5718__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5718__auto__)){
var link = temp__5718__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),(function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
}));
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_29365 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_29365);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_29365);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__29366,p__29367){
var map__29368 = p__29366;
var map__29368__$1 = (((((!((map__29368 == null))))?(((((map__29368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29368.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29368):map__29368);
var on_cssload = cljs.core.get.call(null,map__29368__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__29369 = p__29367;
var map__29369__$1 = (((((!((map__29369 == null))))?(((((map__29369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29369.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29369):map__29369);
var files_msg = map__29369__$1;
var files = cljs.core.get.call(null,map__29369__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5720__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5720__auto__)){
var f_datas = temp__5720__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1603913409243
