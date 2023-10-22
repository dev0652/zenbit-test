"use strict";(self.webpackChunkzenbit_test=self.webpackChunkzenbit_test||[]).push([[296],{6121:function(n,e,t){t.r(e),t.d(e,{default:function(){return cn}});var i,r,o,s,a,c=t(4165),l=t(5861),d=t(9439),h=t(168),u=t(7924),p=u.zo.article(i||(i=(0,h.Z)(["\n  position: relative;\n\n  width: 630px;\n  height: 400px;\n\n  border: none;\n  border-radius: ",";\n\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n\n  color: white;\n  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.15);\n  overflow: hidden;\n\n  transition: transform 300ms;\n\n  &:hover,\n  &:focus-visible {\n    box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.2), 0 4px 6px 0 rgba(0, 0, 0, 0.19);\n    cursor: pointer;\n    transform: scale(1.01);\n  }\n"])),(function(n){return n.theme.borderRadius.regular})),x=u.zo.img(r||(r=(0,h.Z)(["\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center;\n"]))),f=u.zo.div(o||(o=(0,h.Z)(["\n  position: absolute;\n  left: 0;\n  bottom: 0;\n\n  padding: 0 0 20px 14px;\n  width: 100%;\n"]))),g=u.zo.h3(s||(s=(0,h.Z)(["\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 170%;\n"]))),m=u.zo.ul(a||(a=(0,h.Z)(["\n  columns: 3;\n\n  font-family: Lato;\n  font-size: 18px;\n  font-weight: 700;\n  line-height: 122.222%;\n"]))),b=t(3329);function j(n){var e=n.item,t=e.propertyName,i=e.price,r=e.ticketPrice,o=e.yield,s=e.sold,a=e.daysLeft,c=e.imagePath,l=y(i),d=y(r),h=z(o),u=z(s);return(0,b.jsxs)(p,{children:[(0,b.jsx)(x,{src:c,alt:t}),(0,b.jsxs)(f,{children:[(0,b.jsx)(g,{children:t}),(0,b.jsxs)(m,{children:[(0,b.jsx)("li",{children:l}),(0,b.jsxs)("li",{children:["Ticket - ",d]}),(0,b.jsxs)("li",{children:["Yield ",h]}),(0,b.jsxs)("li",{children:["Days left ",a]}),(0,b.jsxs)("li",{children:["Sold ",u]})]})]})]})}var v,Z,w,y=function(n){return"".concat(n.toLocaleString("uk-UA")," Dhs")},k={style:"unit",unit:"percent"},z=function(n){return"".concat(n.toLocaleString("en-US",k))},P=u.ZP.ul(v||(v=(0,h.Z)(["\n  display: flex;\n  justify-content: center;\n\n  flex-wrap: wrap;\n  /* flex-basis: 250px; */\n  gap: 20px;\n"])));function S(n){var e=n.data;return(0,b.jsx)(P,{children:e.map((function(n){return(0,b.jsx)("li",{children:(0,b.jsx)(j,{item:n})},n.id)}))})}var L,D,F=u.ZP.h2(Z||(Z=(0,h.Z)(["\n  color: ",";\n  font-size: 28px;\n  font-weight: 700;\n  line-height: 121.429%;\n\n  margin-bottom: 20px;\n"])),(function(n){return n.theme.colors.accent})),T=u.ZP.section(w||(w=(0,h.Z)(["\n  margin: 50px 0;\n"]))),C=t(2791),E=t(9787),G=t(3430),H=u.ZP.div(L||(L=(0,h.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 1000;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  background-color: rgba(0, 0, 0, 0.6);\n"]))),N=u.ZP.div(D||(D=(0,h.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),R=t(7478);function U(){return(0,b.jsx)(H,{children:(0,b.jsx)(N,{children:(0,b.jsx)(G.g4,{height:"80",width:"80",radius:"9",color:R.r.colors.accent,ariaLabel:"three-dots-loading"})})})}var _,q,A,B=t(9129),O=u.ZP.div(_||(_=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  margin-top: 5vh;\n  width: 90vw;\n"]))),Y=u.ZP.p(q||(q=(0,h.Z)(["\n  font-size: 1.2rem;\n"]))),I=(0,u.ZP)(B.ps6)(A||(A=(0,h.Z)(["\n  height: 120px;\n  width: auto;\n  color: silver;\n  margin-bottom: 30px;\n"]))),J=function(){return(0,b.jsxs)(O,{children:[(0,b.jsx)(I,{}),(0,b.jsx)(Y,{children:"Sorry, there is nothing to display here"})]})};function K(n){n.data;var e=(0,C.useState)(null),t=(0,d.Z)(e,2),i=t[0],r=t[1],o=(0,C.useState)(!1),s=(0,d.Z)(o,2),a=s[0],h=s[1],u=(0,C.useState)(null),p=(0,d.Z)(u,2),x=p[0],f=p[1],g=(0,C.useCallback)((0,l.Z)((0,c.Z)().mark((function n(){var e,t,i;return(0,c.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r(null),h(!0),n.next=5,(0,E.fetchProperties)();case 5:e=n.sent,t=e.data,f(t),n.next=14;break;case 10:n.prev=10,n.t0=n.catch(0),i=n.t0.message,r(i);case 14:return n.prev=14,h(!1),n.finish(14);case 17:case"end":return n.stop()}}),n,null,[[0,10,14,17]])}))),[]);return(0,C.useEffect)((function(){return g()}),[g]),(0,b.jsxs)(b.Fragment,{children:[a&&(0,b.jsx)(U,{}),(0,b.jsxs)(T,{id:"openDeals",children:[(0,b.jsx)(F,{children:"Open Deals"}),i&&(0,b.jsx)("p",{children:i}),x?(0,b.jsx)(S,{data:x}):(0,b.jsx)(J,{}),(0,b.jsx)(S,{data:x})]})]})}var M,Q,V,W,X,$=t.p+"static/media/homebg.391674cdfc23ba0c9fd1.jpg",nn=t.p+"static/media/homebg@2x.f78eaaa2029844415c2e.jpg",en=u.zo.div(M||(M=(0,h.Z)(["\n  ","\n"])),(function(n){var e=n.theme;return(0,u.iv)(Q||(Q=(0,h.Z)(["\n      height: calc(100vh - ",");\n\n      display: flex;\n      flex-direction: column;\n      gap: 20px;\n      align-items: center;\n      justify-content: center;\n      padding-bottom: 20vh;\n\n      color: white;\n\n      background-color: ",";\n\n      background: linear-gradient(\n          0deg,\n          rgba(23 34 52 / 60%),\n          rgba(23 34 52 / 60%)\n        ),\n        url(",");\n\n      background-repeat: no-repeat;\n      background-size: cover;\n      background-position: center;\n\n      /* for retina displays */\n      @media only screen and (min-resolution: 192dpi),\n        only screen and (min-resolution: 2dppx) {\n        background: linear-gradient(\n            0deg,\n            rgba(23 34 52 / 60%),\n            rgba(23 34 52 / 60%)\n          ),\n          url(",");\n      }\n    "])),e.sizes.headerHeight,(function(n){return n.theme.colors.blackish}),$,nn)})),tn=u.zo.h1(V||(V=(0,h.Z)(["\n  font-size: 64px;\n  font-weight: 700;\n  line-height: 125%;\n  text-align: center;\n"]))),rn=u.zo.p(W||(W=(0,h.Z)(["\n  font-family: 'Lato', sans-serif;\n  font-size: 24px;\n  line-height: 133.333%;\n  letter-spacing: -0.48px;\n  text-align: center;\n"]))),on=u.zo.a(X||(X=(0,h.Z)(["\n  padding: 10px 24px;\n  border: 1px solid white;\n  border-radius: 8px;\n\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 170%;\n\n  color: white;\n  text-decoration: none;\n\n  &:hover,\n  &:focus-visible {\n    color: black;\n    background-color: white;\n  }\n\n  &:active {\n    color: darkSlateGray;\n\n    border-color: silver;\n    background-color: silver;\n  }\n"])));function sn(){return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(en,{children:[(0,b.jsx)(tn,{children:"The chemical negatively charged"}),(0,b.jsx)(rn,{children:"Numerous calculations predict, and experiments confirm, that the force field reflects the beam, while the mass defect is not formed. The chemical compound is negatively charged. Twhile the mass defect is"}),(0,b.jsx)(on,{href:"#openDeals",children:"Get Started"})]}),(0,b.jsx)(K,{})]})}var an=t(6907);function cn(){return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(an.ql,{children:[(0,b.jsx)("title",{children:"Home"}),(0,b.jsx)("meta",{name:"description",content:"Find best property investment deals at ZB Real Estate"})]}),(0,b.jsx)(sn,{})]})}}}]);
//# sourceMappingURL=296.4f574ef0.chunk.js.map