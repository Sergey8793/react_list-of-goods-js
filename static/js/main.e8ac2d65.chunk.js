(this["webpackJsonpreact_list-of-goods-js"]=this["webpackJsonpreact_list-of-goods-js"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s=n(7),c=n.n(s),i=n(6),o=n(8),r=n(1),a=n(4),l=n.n(a),u=(n(13),n(14),n(0)),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],j="alphabetically",d="length";var h=function(){var t=Object(r.useState)(""),e=Object(i.a)(t,2),n=e[0],s=e[1],c=Object(r.useState)(!1),a=Object(i.a)(c,2),h=a[0],g=a[1],p=function(t,e){var n=e.sortField,s=e.isReversed,c=Object(o.a)(t);return n&&c.sort((function(t,e){switch(n){case j:return t.localeCompare(e);case d:return t.length-e.length;default:return 0}})),s&&c.reverse(),c}(b,{sortField:n,isReversed:h});return Object(u.jsxs)("div",{className:"section content",children:[Object(u.jsxs)("div",{className:"buttons",children:[Object(u.jsx)("button",{type:"button",className:l()("button is-info",{"is-light":n!==j}),onClick:function(){s(j)},children:"Sort alphabetically"}),Object(u.jsx)("button",{type:"button",className:l()("button is-success",{"is-light":n!==d}),onClick:function(){return s(d)},children:"Sort by length"}),Object(u.jsx)("button",{type:"button",className:l()("button is-warning",{"is-light":!h}),onClick:function(){g((function(t){return!t}))},children:"Reverse"}),(h||n)&&Object(u.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){g(!1),s("")},children:"Reset"})]}),Object(u.jsx)("ul",{children:p.map((function(t){return Object(u.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};c.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.e8ac2d65.chunk.js.map