(this["webpackJsonpnavbar-dropdown-v1"]=this["webpackJsonpnavbar-dropdown-v1"]||[]).push([[0],{18:function(e,a,t){},42:function(e,a,t){},43:function(e,a,t){},46:function(e,a,t){e.exports=t.p+"static/media/login.9a76e74e.svg"},47:function(e,a,t){e.exports=t(67)},60:function(e,a,t){},62:function(e,a,t){},63:function(e,a,t){},64:function(e,a,t){},65:function(e,a,t){},67:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(13),c=t.n(r),s=t(39),m=(t(42),t(3)),i=["btn--primary","btn--outline","btn--test"],o=["btn--medium","btn--large"],u=function(e){var a=e.children,t=e.type,n=e.onClick,r=e.buttonStyle,c=e.buttonSize,s=i.includes(r)?r:i[0],u=o.includes(c)?c:o[0];return l.a.createElement(m.b,{to:"/sign-up",className:"btn-mobile"},l.a.createElement("button",{className:"btn ".concat(s," ").concat(u),onClick:n,type:t},a))},E=(t(60),t(45)),b=t(17),d=t(40);var p=function(){var e=Object(n.useState)(!1),a=Object(s.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(!0),i=Object(s.a)(c,2),o=i[0],p=i[1],f=function(){return r(!1)},v=function(){window.innerWidth<=960?p(!1):p(!0)};return Object(n.useEffect)((function(){v()}),[]),window.addEventListener("resize",v),l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{className:"navbar"},l.a.createElement("div",{className:"navbar-container"},l.a.createElement(m.b,{to:"/",className:"navbar-logo",onClick:f},"GreensKiosk",l.a.createElement(d.a,{className:"FaSpar"}),l.a.createElement(E.a,{className:"Dropdown",variant:"outline-success",title:"Categories"},l.a.createElement(b.a.Item,{href:"#/action-1"},"Vegetables"),l.a.createElement(b.a.Item,{href:"#/action-2"},"Fruits"),l.a.createElement(b.a.Item,{href:"#/action-3"},"Tuber"),l.a.createElement(b.a.Item,{href:"#/action-3"},"Cereals"))),l.a.createElement(m.b,{to:"/sign-up",href:"/home",className:"nav-links-mobile",onClick:f},"Sign Up"),o&&l.a.createElement(u,{href:"/home",buttonStyle:"btn-success",className:"btn btn-success"},"SIGN UP ",l.a.createElement(d.b,{className:"FaUser"})),l.a.createElement("div",{className:"menu-icon",onClick:function(){return r(!t)}},l.a.createElement("i",{className:t?"fas fa-times":"fas fa-bars"})),l.a.createElement("ul",{className:t?"nav-menu active":"nav-menu"},l.a.createElement("li",null),l.a.createElement("li",{className:"nav-item"},l.a.createElement(m.b,{to:"/",className:"nav-links",onClick:f},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(m.b,{to:"/services",className:"nav-links",onClick:f},"Services")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(m.b,{to:"/products",className:"nav-links",onClick:f},"Products")),l.a.createElement("li",null)))))};t(18),t(62);var f=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("li",{className:"cards__item"},l.a.createElement(m.b,{className:"cards__item__link",to:e.path},l.a.createElement("figure",{className:"cards__item__pic-wrap","data-category":e.label},l.a.createElement("img",{className:"cards__item__img",alt:"Travel Image",src:e.src})),l.a.createElement("div",{className:"cards__item__info"},l.a.createElement("h5",{className:"cards__item__text"},e.text)))))};var v=function(){return l.a.createElement("div",{className:"cards"},l.a.createElement("h1",null,"Categories of Products!"),l.a.createElement("div",{className:"cards__container"},l.a.createElement("div",{className:"cards__wrapper"},l.a.createElement("ul",{className:"cards__items"},l.a.createElement(f,{src:"images/img-9.jpg",text:"We have all types of vegetable",label:"View More",path:"/services"}),l.a.createElement(f,{src:"images/img-2.jpg",text:"We have all types of vegetable",label:"View More",path:"/services"})),l.a.createElement("ul",{className:"cards__items"},l.a.createElement(f,{src:"images/img-3.jpg",text:"We have all types of vegetable",label:"View More",path:"/services"}),l.a.createElement(f,{src:"images/img-4.jpg",text:"We have all types of vegetable",label:"View More",path:"/products"}),l.a.createElement(f,{src:"images/img-8.jpg",text:"We have all types of vegetables",label:" View More",path:"/sign-up"})))))};t(63);var g=function(){return l.a.createElement("div",{className:"hero-container"},l.a.createElement("video",{src:"/videos/video-1.mp4",autoPlay:!0,loop:!0,muted:!0}),l.a.createElement("h1",null,"Welcome to GreensKiosk"),l.a.createElement("p",null,"We sell variety of groceries products"),l.a.createElement("div",{className:"hero-btns"},l.a.createElement(u,{className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--large"},"View Products"),l.a.createElement(u,{className:"btns",buttonStyle:"btn--primary",buttonSize:"btn--large",onClick:console.log("hey")},"order now ",l.a.createElement("i",{className:"fab fa-first-order></i>"}))))};t(64);var h=function(){return l.a.createElement("div",{className:"footer-container"},l.a.createElement("section",{className:"footer-subscription"},l.a.createElement("p",{className:"footer-subscription-heading"},"Join the Adventure newsletter to receive our best vacation deals"),l.a.createElement("p",{className:"footer-subscription-text"},"You can unsubscribe at any time."),l.a.createElement("div",{className:"input-areas"},l.a.createElement("form",null,l.a.createElement("input",{className:"footer-input",name:"email",type:"email",placeholder:"Your Email"}),l.a.createElement(u,{buttonStyle:"btn--outline"},"Subscribe")))),l.a.createElement("div",{class:"footer-links"},l.a.createElement("div",{className:"footer-link-wrapper"},l.a.createElement("div",{class:"footer-link-items"},l.a.createElement("h2",null,"About Us"),l.a.createElement(m.b,{to:"/sign-up"},"How it works"),l.a.createElement(m.b,{to:"/"},"Testimonials"),l.a.createElement(m.b,{to:"/"},"Careers"),l.a.createElement(m.b,{to:"/"},"Investors"),l.a.createElement(m.b,{to:"/"},"Terms of Service")),l.a.createElement("div",{class:"footer-link-items"},l.a.createElement("h2",null,"Contact Us"),l.a.createElement(m.b,{to:"/"},"Contact"),l.a.createElement(m.b,{to:"/"},"Support"),l.a.createElement(m.b,{to:"/"},"Destinations"),l.a.createElement(m.b,{to:"/"},"Sponsorships"))),l.a.createElement("div",{className:"footer-link-wrapper"},l.a.createElement("div",{class:"footer-link-items"},l.a.createElement("h2",null,"Videos"),l.a.createElement(m.b,{to:"/"},"Submit Video"),l.a.createElement(m.b,{to:"/"},"Ambassadors"),l.a.createElement(m.b,{to:"/"},"Agency"),l.a.createElement(m.b,{to:"/"},"Influencer")),l.a.createElement("div",{class:"footer-link-items"},l.a.createElement("h2",null,"Social Media"),l.a.createElement(m.b,{to:"/"},"Instagram"),l.a.createElement(m.b,{to:"/"},"Facebook"),l.a.createElement(m.b,{to:"/"},"Youtube"),l.a.createElement(m.b,{to:"/"},"Twitter")))),l.a.createElement("section",{class:"social-media"},l.a.createElement("div",{class:"social-media-wrap"},l.a.createElement("div",{class:"footer-logo"},l.a.createElement(m.b,{to:"/",className:"social-logo"},"TRVL",l.a.createElement("i",{class:"fab fa-typo3"}))),l.a.createElement("small",{class:"website-rights"},"TRVL \xa9 2020"),l.a.createElement("div",{class:"social-icons"},l.a.createElement(m.b,{class:"social-icon-link facebook",to:"/",target:"_blank","aria-label":"Facebook"},l.a.createElement("i",{class:"fab fa-facebook-f"})),l.a.createElement(m.b,{class:"social-icon-link instagram",to:"/",target:"_blank","aria-label":"Instagram"},l.a.createElement("i",{class:"fab fa-instagram"})),l.a.createElement(m.b,{class:"social-icon-link youtube",to:"/",target:"_blank","aria-label":"Youtube"},l.a.createElement("i",{class:"fab fa-youtube"})),l.a.createElement(m.b,{class:"social-icon-link twitter",to:"/",target:"_blank","aria-label":"Twitter"},l.a.createElement("i",{class:"fab fa-twitter"})),l.a.createElement(m.b,{class:"social-icon-link twitter",to:"/",target:"_blank","aria-label":"LinkedIn"},l.a.createElement("i",{class:"fab fa-linkedin"}))))))},N=(t(65),t(12));var k=function(){return l.a.createElement(N.a,null,l.a.createElement(N.a.Item,null,l.a.createElement("img",{className:"d-block w-100",src:"images/im-1.jpg",alt:"First slide"}),l.a.createElement(N.a.Caption,null,l.a.createElement("h3",null,"Fruits"),l.a.createElement("p",null,"We seel fresh fruits in affordable prices."))),l.a.createElement(N.a.Item,null,l.a.createElement("img",{className:"d-block w-100",src:"images/im-2.jpg",alt:"Second slide"}),l.a.createElement(N.a.Caption,null,l.a.createElement("h3",null,"Greens"),l.a.createElement("p",null,"Do you have trouble finding fresh vegies, visit GreansKiosk for a better experience."))),l.a.createElement(N.a.Item,null,l.a.createElement("img",{className:"d-block w-100",src:"images/im-3.jpg",alt:"Third slide"}),l.a.createElement(N.a.Caption,null,l.a.createElement("h3",null,"Spices"),l.a.createElement("p",null,"Visit our store in finding the different taste you might need for your food."))))};var w=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(g,null),l.a.createElement(k,null),l.a.createElement(v,null),l.a.createElement(h,null))},y=t(5);function _(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("h1",null,"OUR SERVICES")),l.a.createElement(h,null))}var S=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("h1",null,"OUR PRODUCTS")),l.a.createElement(v,null),l.a.createElement(h,null))},C=t(29),j=t(30),I=t(33),F=t(32),x=(t(43),t(46)),O=t.n(x),V=function(e){Object(I.a)(t,e);var a=Object(F.a)(t);function t(e){return Object(C.a)(this,t),a.call(this,e)}return Object(j.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"base-container",ref:this.props.containerRef},l.a.createElement("div",{className:"header"},"Register"),l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"image"},l.a.createElement("img",{src:O.a})),l.a.createElement("div",{className:"form"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"username"},"Username"),l.a.createElement("input",{type:"text",name:"username",placeholder:"username"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"email"},"Email"),l.a.createElement("input",{type:"text",name:"email",placeholder:"email"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"password"},"Password"),l.a.createElement("input",{type:"text",name:"password",placeholder:"password"})))),l.a.createElement("div",{className:"footer"},l.a.createElement(m.b,{to:"/SignIn",className:"btn-mobile"},l.a.createElement("button",{type:"button",className:"btn"},"SignUp")),"or",l.a.createElement(m.b,{to:"/SignIn",className:"btn-mobile"},l.a.createElement("button",{type:"button",className:"btn"},"Sign In"))))}}]),t}(l.a.Component),U=function(e){Object(I.a)(t,e);var a=Object(F.a)(t);function t(e){return Object(C.a)(this,t),a.call(this,e)}return Object(j.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"base-container",ref:this.props.containerRef},l.a.createElement("div",{className:"header"},"Login"),l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"image"}),l.a.createElement("div",{className:"form"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"username"},"Username"),l.a.createElement("input",{type:"text",name:"username",placeholder:"username"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"password"},"Password"),l.a.createElement("input",{type:"password",name:"password",placeholder:"password"})))),l.a.createElement("div",{className:"footer"},l.a.createElement("button",{type:"button",className:"btn"},"Sign In")))}}]),t}(l.a.Component);var T=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(m.a,null,l.a.createElement(p,null),l.a.createElement(y.c,null,l.a.createElement(y.a,{path:"/",exact:!0,component:w}),l.a.createElement(y.a,{path:"/services",component:_}),l.a.createElement(y.a,{path:"/products",component:S}),l.a.createElement(y.a,{path:"/sign-up",component:V}))),l.a.createElement("div",{className:"container"},l.a.createElement(U,null)))};t(66);c.a.render(l.a.createElement(T,null),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.1f0ce902.chunk.js.map