(this.webpackJsonpreact01=this.webpackJsonpreact01||[]).push([[0],{31:function(e,t,n){e.exports=n(59)},36:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(29),c=n.n(r),l=n(18),i=n(7),s=n(8),u=n(10),d=n(9),p=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).getStyle=function(){return{backgroundColor:"#f4f4f4",padding:"10px",border:"1px #ccc dotted",textDecoration:e.props.todo.completed?"line-through":"none"}},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props.todo,t=e.id,n=e.title;return o.a.createElement("div",{style:this.getStyle()},o.a.createElement("p",null,o.a.createElement("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,t)})," "," ",n,o.a.createElement("button",{onClick:this.props.deleteItem.bind(this,t),style:m},"X")))}}]),n}(a.Component),m={background:"red",color:"#fff",borderRadius:"50%",padding:"5px 10px",border:"none",float:"right",cursor:"pointer"},h=p,f=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return this.props.todos.map((function(t){return o.a.createElement(h,{key:t.id,todo:t,markComplete:e.props.markComplete,deleteItem:e.props.deleteItem})}))}}]),n}(a.Component),b=(n(36),n(13)),y=n(1);var v=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"About"),o.a.createElement("p",null,"This is my first react app.You can add your work here and it's unforgattable untill you click delete button."))},g={background:"#333",color:"#fff",textAlign:"center",padding:"10px"};var E={color:"#fff",textDecoration:"none"},k=function(){return o.a.createElement("header",{style:g},o.a.createElement("h1",null,"TodoList"),o.a.createElement(b.b,{style:E,to:"/"},"Home")," | ",o.a.createElement(b.b,{style:E,to:"/about"}," About"))},j=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={title:""},e.onChange=function(t){e.setState({title:t.target.value})},e.submitReq=function(t){t.preventDefault(),e.props.addTodo(e.state.title),e.setState({title:""})},e}return Object(s.a)(n,[{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.submitReq,style:{display:"flex"}},o.a.createElement("input",{type:"text",placeholder:" Add your works here!",name:"title",style:{flex:"10",padding:"5px"},value:this.state.title,onChange:this.onChange}),o.a.createElement("input",{type:"submit",value:"submit",className:"btn",style:{flex:"1"}}))}}]),n}(a.Component),O=n(14),x=n.n(O),C=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={todos:[]},e.markComplete=function(t){e.setState({todos:e.state.todos.map((function(e){return e.id===t&&(e.completed=!e.completed),e}))})},e.deleteItem=function(t){x.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(t)).then((function(n){return e.setState({todos:Object(l.a)(e.state.todos.filter((function(e){return e.id!==t})))})}))},e.addTodo=function(t){x.a.post("https://jsonplaceholder.typicode.com/todos",{title:t,completed:!1}).then((function(t){return e.setState({todos:[].concat(Object(l.a)(e.state.todos),[t.data])})}))},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;x.a.get("https://jsonplaceholder.typicode.com/todos?_limit=5").then((function(t){return e.setState({todos:t.data})}))}},{key:"render",value:function(){var e=this;return o.a.createElement(b.a,null,o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"container"},o.a.createElement(k,null),o.a.createElement(y.a,{exact:!0,path:"/",render:function(t){return o.a.createElement(o.a.Fragment,null,o.a.createElement(j,{addTodo:e.addTodo}),o.a.createElement(f,{todos:e.state.todos,markComplete:e.markComplete,deleteItem:e.deleteItem}))}}),o.a.createElement(y.a,{path:"/about",component:v}))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.60d2d029.chunk.js.map