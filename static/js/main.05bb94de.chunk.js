(this.webpackJsonptodo_=this.webpackJsonptodo_||[]).push([[0],{31:function(t,e,n){t.exports=n(51)},36:function(t,e,n){},51:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),r=n(14),c=n.n(r),u=(n(36),n(8)),i=n(9),l=n(12),d=n(11),s=n(10),h=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(t){var o;return Object(u.a)(this,n),(o=e.call(this,t)).renderTodo=function(){return o.props.todo_list.map((function(t){return a.a.createElement("h2",null,t)}))},o.state={todoList:[]},o}return Object(i.a)(n,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("h1",null,"Your Todosss"),this.renderTodo())}}]),n}(o.Component),m=Object(s.b)((function(t){return{todo_list:t.todo}}))(h),f=n(30),p=n(17),b=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(t){var o;return Object(u.a)(this,n),(o=e.call(this,t)).handleChange=function(t){o.setState({newTodo:t.target.value})},o.renderTodo=function(){return o.props.todo_list.map((function(t){return a.a.createElement("h2",null,t)}))},o.addTodo=function(){var t=[].concat(Object(f.a)(o.props.todo_list),[o.state.newTodo]);o.props.change_todo(t),o.setState({newTodo:""})},o.state={newTodo:""},o}return Object(i.a)(n,[{key:"render",value:function(){var t=this;return a.a.createElement("div",null,a.a.createElement(p.b,{to:"/home"},"Home"),a.a.createElement("input",{placeholder:"enter todo",value:this.state.newTodo,onChange:this.handleChange}),a.a.createElement("button",{autoFocus:!0,onClick:function(){return t.addTodo()}},"Add todo"),this.renderTodo())}}]),n}(o.Component),v=Object(s.b)((function(t){return{todo_list:t.todo}}),(function(t){return{change_todo:function(e){t(function(t){return{type:"CHANGE_TODO",payload:t}}(e))}}}))(b),O=n(2),g=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return a.a.createElement(p.a,null,a.a.createElement(O.c,null,a.a.createElement(O.a,{exact:!0,path:"/",component:v}),a.a.createElement(O.a,{path:"/home",component:m})))}}]),n}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var j=n(16),E=n(24),w={todo:[]},T=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CHANGE_TODO":return Object(E.a)(Object(E.a)({},t),{},{todo:e.payload});default:return t}},y=n(29),_=n.n(y),C=function(){try{var t=localStorage.getItem("state");if(null===t)return;return JSON.parse(t)}catch(e){return}}(),k=Object(j.b)(T,C);k.subscribe(_()((function(){!function(t){try{var e=JSON.stringify(t);localStorage.setItem("state",e)}catch(n){}}(k.getState())}),1e3)),c.a.render(a.a.createElement(s.a,{store:k},a.a.createElement(a.a.StrictMode,null,a.a.createElement(g,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.05bb94de.chunk.js.map