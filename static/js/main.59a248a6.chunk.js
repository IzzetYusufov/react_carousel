(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var i=n(9),a=n.n(i),r=n(2),s=n(3),c=n(5),o=n(4),l=n(1),m=(n(14),n(6)),u=n(8),h=(n(15),n(0)),j=function(e){Object(c.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(r.a)(this,n);for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={move:0},e.handleRightSlide=function(){var t=e.props,n=t.itemWidth,i=t.images,a=t.step,r=t.frameSize,s=t.infinite,c=e.state.move,o=n*i.length-r*n,l=n*a;return s&&c===o?e.setState({move:0}):c+l<o?e.setState({move:c+l}):e.setState({move:o})},e.handleLefttSlide=function(){var t=e.props,n=t.itemWidth,i=t.step,a=t.images,r=t.infinite,s=t.frameSize,c=e.state.move,o=n*i,l=n*a.length-s*n;return r&&0===c?e.setState({move:l}):c-o>0?e.setState({move:c-o}):e.setState({move:0})},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props,t=e.images,n=e.itemWidth,i=e.frameSize,a=e.animationDuration,r=this.state.move;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{"data-cy":"title",children:"Carousel with ".concat(i," images")}),Object(h.jsxs)("div",{className:"Carousel",style:{width:"".concat(i*n,"px")},children:[Object(h.jsx)("ul",{className:"Carousel__list",style:{transition:"".concat(a,"ms")},children:t.map((function(e,t){return Object(h.jsx)("li",{className:"Carousel__item",style:{transform:"translateX(".concat(-r,"px)"),transition:"".concat(a,"ms")},children:Object(h.jsx)("img",{src:e,width:n,alt:"".concat(t+1)})},e)}))}),Object(h.jsxs)("div",{className:"Carousel__buttons",children:[Object(h.jsx)("button",{type:"button",onClick:this.handleRightSlide,"data-cy":"next",children:"Next"}),Object(h.jsx)("button",{type:"button",onClick:this.handleLefttSlide,children:"Prev"})]})]})]})}}]),n}(l.PureComponent),d=function(e){Object(c.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(r.a)(this,n);for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],step:3,frameSize:3,itemWidth:130,animationDuration:1e3,infinite:!1},e.handleChnges=function(t){var n=t.currentTarget,i=n.name,a=n.value,r=n.checked,s="infinite"===i?r:a;return e.setState((function(e){return Object(u.a)(Object(u.a)({},e),{},Object(m.a)({},i,+s))}))},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.images,i=t.itemWidth,a=t.frameSize,r=t.step,s=t.animationDuration,c=t.infinite;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(j,{images:n,step:r,frameSize:a,itemWidth:i,animationDuration:s,infinite:c}),Object(h.jsx)("form",{className:"form",id:"formId",children:Object(h.jsxs)("div",{className:"form__container",children:[Object(h.jsxs)("label",{htmlFor:"itemId",children:[Object(h.jsx)("strong",{children:"Item width: "}),Object(h.jsx)("input",{type:"number",name:"itemWidth",defaultValue:"130",id:"itemId",step:"10",onChange:function(t){return e.handleChnges(t)},className:"form__input"})]}),Object(h.jsxs)("label",{htmlFor:"frameId",children:[Object(h.jsx)("strong",{children:"Frame size "}),Object(h.jsx)("input",{type:"number",name:"frameSize",defaultValue:"3",min:"1",max:n.length,onChange:function(t){return e.handleChnges(t)},id:"frameId",className:"form__input"})]}),Object(h.jsxs)("label",{htmlFor:"stepId",children:[Object(h.jsx)("strong",{children:"Step: "}),Object(h.jsx)("input",{type:"number",name:"step",defaultValue:"3",min:"1",onChange:function(t){return e.handleChnges(t)},id:"stepId",className:"form__input"})]}),Object(h.jsxs)("label",{children:[Object(h.jsx)("strong",{children:"Animation duration: "}),Object(h.jsx)("input",{type:"number",name:"AnimationDuration",defaultValue:"1000",min:1e3,step:500,onChange:function(t){return e.handleChnges(t)},className:"form__input"})]}),Object(h.jsxs)("div",{className:"form__radio-input",children:[Object(h.jsx)("strong",{children:"Infinite: "}),Object(h.jsxs)("label",{children:["True",Object(h.jsx)("input",{type:"checkbox",value:"true",name:"infinite",onChange:function(t){return e.handleChnges(t)}})]})]})]})})]})}}]),n}(l.Component),b=function(e){Object(c.a)(n,e);var t=Object(o.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(d,{})})}}]),n}(l.Component),p=b;a.a.render(Object(h.jsx)(p,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.59a248a6.chunk.js.map