(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,a){e.exports=a.p+"static/media/logo.fce7ce8f.svg"},22:function(e,t,a){e.exports=a(39)},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(5),o=a.n(c),s=a(3),i=a(1),l=a(19),u=a(11),m=a(14),p=a.n(m),f=a(20),v="FETCH_MOVIES_BEGIN",d="FETCH_MOVIES_SUCCESS",E="FETCH_MOVIES_FAILURE",h=function(){return{type:v}},b=function(e){return{type:d,payload:{movies:e}}};function g(e){if(!e.ok)throw Error(e.statusText);return e}function O(e){return function(){var t=Object(f.a)(p.a.mark(function t(a){var r,n,c;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a(h()),!e){t.next=7;break}return t.next=4,fetch("https://api.themoviedb.org/3/search/movie?api_key=5874acfd11651a28c55771624f7021f4&query=".concat(e));case 4:r=t.sent,t.next=10;break;case 7:return t.next=9,fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=5874acfd11651a28c55771624f7021f4&page=1");case 9:r=t.sent;case 10:return n=g(r),t.next=13,n.json();case 13:return c=t.sent,a(b(c.results)),t.abrupt("return",c.results);case 16:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}var w={items:[],loading:!1,error:null};var y=Object(i.c)({movies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(u.a)({},e,{loading:!0,error:null});case d:return Object(u.a)({},e,{items:t.payload.movies,loading:!1});case E:return Object(u.a)({},e,{loading:!1,error:t.payload.error,items:t.payload.movies});default:return e}}}),N=(a(35),a(6)),j=a(7),k=a(9),S=a(8),_=a(10),x=a(21),C=a.n(x),I=(a(36),Object(s.b)(null,function(e){return{sendSearchQuery:function(t){return e(O(t))}}})(function(e){return n.a.createElement("div",{className:"header"},n.a.createElement("div",{className:"header-logo-wrapper"},n.a.createElement("img",{src:C.a,className:"header-logo",alt:"logo"}),n.a.createElement("span",{className:"header-text"},"Movies App")),n.a.createElement("div",{className:"search-wrapper"},n.a.createElement("form",{className:"search-form",onSubmit:function(e){return e.preventDefault()}},n.a.createElement("input",{className:"search-input",placeholder:"Seach films...",onFocus:function(e){return e.target.placeholder=""},onBlur:function(e){return e.target.placeholder="Seach films..."},onChange:function(t){return e.sendSearchQuery(t.target.value)}}),n.a.createElement("button",{type:"submit",className:"search-button"},n.a.createElement("i",{className:"fa fa-search"})))))})),M=(a(37),function(e){return n.a.createElement("li",{className:"movie-wrapper"},n.a.createElement("img",{className:"movie-poster",src:"https://image.tmdb.org/t/p/w200/".concat(e.poster),alt:e.title}),n.a.createElement("div",{className:"movie-info"},n.a.createElement("div",null,n.a.createElement("span",{className:"movie-title"}," ",e.title," "),n.a.createElement("span",{className:"movie-rank"}," ",n.a.createElement("span",null,"IMDb")," ",n.a.createElement("i",{class:"fas fa-star"})," ",n.a.createElement("span",{className:"movie-rank-number"},e.rank)," ")),n.a.createElement("span",{className:"movie-overview"}," ",e.overview," ")))}),F=(a(38),function(e){function t(){return Object(N.a)(this,t),Object(k.a)(this,Object(S.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(j.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(O())}},{key:"render",value:function(){var e=this.props,t=e.error,a=e.loading,r=e.items;if(t)return n.a.createElement("div",{className:"main-wrapper"},n.a.createElement("div",null,"Error! ",t.message),";");if(a)return n.a.createElement("div",{className:"main-wrapper"},n.a.createElement("div",{className:"loading"},"Loading..."));var c=r.map(function(e){return n.a.createElement(M,{key:e.id,title:e.title,overview:e.overview,poster:e.poster_path,rank:e.vote_average})});return n.a.createElement("div",{className:"main-wrapper"},n.a.createElement("ul",{className:"movies-list"},c))}}]),t}(r.Component)),T=Object(s.b)(function(e){return{items:e.movies.items,loading:e.movies.loading,error:e.movies.error}})(F),B=function(e){function t(){return Object(N.a)(this,t),Object(k.a)(this,Object(S.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(I,null),n.a.createElement(T,null))}}]),t}(r.Component),D=Object(i.e)(y,Object(i.d)(Object(i.a)(l.a)));o.a.render(n.a.createElement(s.a,{store:D},n.a.createElement(B,null)),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.a64a07cf.chunk.js.map