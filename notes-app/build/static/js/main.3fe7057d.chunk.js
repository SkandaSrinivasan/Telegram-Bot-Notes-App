(this["webpackJsonpnotes-app"]=this["webpackJsonpnotes-app"]||[]).push([[0],{23:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(17),r=n.n(c),i=n(18),a=(n(23),n(0)),o=n(7),l=n.n(o),s="/api/notes",d={getAll:function(){return l.a.get(s).then((function(e){return console.log(e.data),e.data})).catch((function(e){return console.log("connection failed ",e)}))},create:function(e){return l.a.post(s,e)},del:function(e){l.a.delete("".concat(s,"/").concat(e)).then((function(e){return e}))}},u=n(46),j=n(47),f=n(48),h=n(49),b=n(50),g=n(5);var O=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1];Object(a.useEffect)((function(){d.getAll().then((function(e){c(e)})).catch((function(e){console.error("err in fetching: ",e)}))}),[]);var r=function(e){console.log("delete is starting"),d.del(e.target.id);var t=n.filter((function(t){return t.id!==e.target.id}));c(t)};return Object(g.jsx)("div",{class:"outer",children:Object(g.jsx)(u.a,{fluid:!0,children:Object(g.jsx)(j.a,{children:n.map((function(e,t){return Object(g.jsx)(f.a,{children:Object(g.jsx)(h.a,{text:"light",border:"warning",bg:"dark",style:{width:"18rem"},children:Object(g.jsxs)(h.a.Body,{children:[Object(g.jsxs)(h.a.Title,{children:["#",t+1]}),Object(g.jsx)(h.a.Text,{children:Object(g.jsx)("a",{href:e.content,rel:"noreferrer",target:"_blank",children:e.content})}),Object(g.jsx)(b.a,{variant:"danger",id:e.id,onClick:r,children:"Delete"})]})},e.id)},e.id)}))})})})};n(43);r.a.render(Object(g.jsx)(O,{}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.3fe7057d.chunk.js.map