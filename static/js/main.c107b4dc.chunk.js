(this["webpackJsonptraversy-react-udemy-course"]=this["webpackJsonptraversy-react-udemy-course"]||[]).push([[0],{37:function(e,t,a){e.exports=a(66)},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(32),o=a.n(c),l=a(12),s=a(13),i=a(4),m=a(5),u=a(6),p=a(7),h=a(11),d=a.n(h),b=a(9),v=a.n(b),E=a(14),f=a(36),y=a(18),g=r.a.createContext(),C=function(e,t){switch(t.type){case"DELETE_CONTACT":return Object(y.a)({},e,{contacts:e.contacts.filter((function(e){return e.id!==t.payload}))});case"ADD_CONTACT":return Object(y.a)({},e,{contacts:[t.payload].concat(Object(f.a)(e.contacts))});case"UPDATE_CONTACT":return Object(y.a)({},e,{contacts:e.contacts.map((function(e){return e.id===t.payload.id?e=t.payload:e}))});default:return e}},N=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[],dispatch:function(t){e.setState((function(e){return C(e,t)}))}},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=Object(E.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("https://jsonplaceholder.typicode.com/users");case 2:t=e.sent,this.setState({contacts:t.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(g.Provider,{value:this.state},this.props.children)}}]),a}(n.Component),j=g.Consumer,O=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={showContactInfo:!1},e.onShowClick=function(t){e.setState({showContactInfo:!e.state.showContactInfo})},e.onDeleteClick=function(e,t){d.a.delete("https://jsonplaceholder.typicode.com/users/".concat(e),{data:e}).then((function(e){return t({type:"DELETE_CONTACT",payload:e.config.data})}))},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this,t=this.props.contact,a=t.id,n=t.name,c=t.email,o=t.phone,s=this.state.showContactInfo;return r.a.createElement(j,null,(function(t){var i=t.dispatch;return r.a.createElement("div",{className:"card card-body mb-3"},r.a.createElement("h4",null,n," ",r.a.createElement("i",{style:{cursor:"pointer"},onClick:e.onShowClick},"->"),r.a.createElement("i",{style:{cursor:"pointer",float:"right",color:"red"},onClick:function(){return e.onDeleteClick(a,i)}},"x"),r.a.createElement(l.b,{to:{pathname:"contact/edit/".concat(a),state:{id:a,name:n,email:c,phone:o}}},r.a.createElement("p",{style:{cursor:"pointer",float:"right",color:"black",marginRight:"1em",marginLeft:"1em"}},"Edit"))),s?r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},"Email: ",c),r.a.createElement("li",{className:"list-group-item"},"Phone: ",o)):null)}))}}]),a}(n.Component),k=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(j,null,(function(e){var t=e.contacts;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"display-4 mb-2"},r.a.createElement("span",{className:"text-danger"},"Contact")," List"),t.map((function(e){return r.a.createElement(O,{key:e.id,contact:e})})))}))}}]),a}(n.Component);function x(e){var t=e.branding;return r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0"},r.a.createElement("div",{className:"container"},r.a.createElement(l.b,{to:"/",className:"navbar-brand"},t),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{to:"/",className:"nav-link"},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{to:"/contact/add",className:"nav-link"},"Add")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{to:"/about",className:"nav-link"},"About"))))))}x.defaultProps={branding:"My App"};var S=x,w=a(16),A=a(35),T=a.n(A),D=function(e){var t=e.label,a=e.name,n=e.value,c=e.placeholder,o=e.type,l=e.onChange,s=e.error;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:a},t),r.a.createElement("input",{type:o,name:a,className:T()("form-control form-control-lg",{"is-invalid":s}),placeholder:c,value:n,onChange:l}),s&&r.a.createElement("div",{className:"invalid-feedback"},s))};D.defaultProps={type:"text"};var P=D,M=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",email:"",phone:"",errors:{}},e.onChange=function(t){e.setState(Object(w.a)({},t.target.name,t.target.value))},e.onSubmit=function(){var t=Object(E.a)(v.a.mark((function t(a,n){var r,c,o,l,s,i;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),r=e.state,c=r.name,o=r.email,l=r.phone,""!==c){t.next=5;break}return e.setState({errors:{name:"Name is required"}}),t.abrupt("return");case 5:if(""!==o){t.next=8;break}return e.setState({errors:{email:"Email is required"}}),t.abrupt("return");case 8:if(""!==l){t.next=11;break}return e.setState({errors:{phone:"Phone is required"}}),t.abrupt("return");case 11:return s={name:c,email:o,phone:l},t.next=14,d.a.post("https://jsonplaceholder.typicode.com/users",s);case 14:i=t.sent,a({type:"ADD_CONTACT",payload:i.data}),e.setState({name:"",email:"",phone:"",errors:{}}),e.props.history.push("/");case 18:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e}return Object(m.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,c=t.phone,o=t.errors;return r.a.createElement(j,null,(function(t){var l=t.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Add Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,l)},r.a.createElement(P,{label:"Name",name:"name",placeholder:"Enter Name...",value:a,onChange:e.onChange,error:o.name}),r.a.createElement(P,{label:"Email",name:"email",placeholder:"Enter Email...",value:n,onChange:e.onChange,error:o.email}),r.a.createElement(P,{label:"Phone",name:"phone",placeholder:"Enter Phone...",value:c,onChange:e.onChange,error:o.phone}),r.a.createElement("input",{type:"submit",value:"Add Contact",className:"btn btn-light btn-block"}))))}))}}]),a}(n.Component),q=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",email:"",phone:"",errors:{}},e.onChange=function(t){e.setState(Object(w.a)({},t.target.name,t.target.value))},e.onSubmit=function(){var t=Object(E.a)(v.a.mark((function t(a,n){var r,c,o,l,s,i,m;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),r=e.state,c=r.name,o=r.email,l=r.phone,""!==c){t.next=5;break}return e.setState({errors:{name:"Name is required"}}),t.abrupt("return");case 5:if(""!==o){t.next=8;break}return e.setState({errors:{email:"Email is required"}}),t.abrupt("return");case 8:if(""!==l){t.next=11;break}return e.setState({errors:{phone:"Phone is required"}}),t.abrupt("return");case 11:return s={name:c,email:o,phone:l},i=e.props.match.params.id,console.log(i),t.next=16,d.a.put("https://jsonplaceholder.typicode.com/users/".concat(i),s);case 16:m=t.sent,a({type:"UPDATE_CONTACT",payload:m.data}),e.setState({name:"",email:"",phone:"",errors:{}}),e.props.history.push("/");case 20:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=Object(E.a)(v.a.mark((function e(){var t,a,n,r,c,o,l,s,i,m;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.props.location.state){e.next=10;break}return e.next=3,this.props.location.state;case 3:t=e.sent,a=t.name,n=t.email,r=t.phone,this.setState({name:a,email:n,phone:r}),e.next=16;break;case 10:return c=this.props.match.params.id,e.next=13,d.a.get("https://jsonplaceholder.typicode.com/users/".concat(c));case 13:o=e.sent,l=o.data,s=l.name,i=l.email,m=l.phone,this.setState({name:s,email:i,phone:m});case 16:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,c=t.phone,o=t.errors;return r.a.createElement(j,null,(function(t){var l=t.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Edit Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,l)},r.a.createElement(P,{label:"Name",name:"name",placeholder:"Enter Name...",value:a,onChange:e.onChange,error:o.name}),r.a.createElement(P,{label:"Email",name:"email",placeholder:"Enter Email...",value:n,onChange:e.onChange,error:o.email}),r.a.createElement(P,{label:"Phone",name:"phone",placeholder:"Enter Phone...",value:c,onChange:e.onChange,error:o.phone}),r.a.createElement("input",{type:"submit",value:"Edit Contact",className:"btn btn-light btn-block"}))))}))}}]),a}(n.Component);var _=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},"About Contact Manager"),r.a.createElement("p",{className:"lead"},"Simple app to manage contacts"),r.a.createElement("p",{className:"text-secondary"},"Version 1.0.0"))},I=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={title:"",body:""},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/posts/1").then((function(e){return e.json()})).then((function(t){return e.setState({title:t.title,body:t.body})}))}},{key:"render",value:function(){var e=this.state,t=e.title,a=e.body;return r.a.createElement("div",null,r.a.createElement("h1",null,t),r.a.createElement("p",null,a))}}]),a}(n.Component);var L=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},r.a.createElement("span",{className:"text-danger"},"404")," Page Not Found"),r.a.createElement("p",{className:"lead"},"Sorry, that page does not exist"))};a(65);var F=function(){return r.a.createElement(N,null,r.a.createElement(l.a,{basename:"/traversy-react-udemy-course"},r.a.createElement("div",{className:"App"},r.a.createElement(S,{branding:"Contact Manager"}),r.a.createElement("div",{className:"container"},r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:k}),r.a.createElement(s.a,{exact:!0,path:"/contact/add",component:M}),r.a.createElement(s.a,{exact:!0,path:"/contact/edit/:id",component:q}),r.a.createElement(s.a,{exact:!0,path:"/about/",component:_}),r.a.createElement(s.a,{exact:!0,path:"/test",component:I}),r.a.createElement(s.a,{component:L}))))))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(F,null)),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.c107b4dc.chunk.js.map