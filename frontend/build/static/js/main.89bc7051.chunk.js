(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{102:function(e,t,a){},103:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(18),s=a.n(n),r=a(9),i=a(14),l=a(30),o=a(61),d=a(62),j="ADMIN_LOGIN_REQUEST",b="ADMIN_LOGIN_SUCCESS",u="ADMIN_LOGIN_FAIL",h="ADMIN_USERLIST_REQUEST",m="ADMIN_USERLIST_SUCCESS",O="ADMIN_USERLIST_FAIL",p="ADMIN_DELETEUSER_REQUEST",x="ADMIN_DELETEUSER_SUCCESS",g="ADMIN_DELETEUSER_FAIL",f="ADMIN_USERDETAILS_REQUEST",v="ADMIN_USERDETAILS_SUCCESS",N="ADMIN_USERDETAILS_FAIL",y="ADMIN_UPDATEUSER_REQUEST",S="ADMIN_UPDATEUSER_SUCCESS",E="ADMIN_UPDATEUSER_FAIL",w="ADMIN_UPDATEUSER_RESET",I="ADMIN_CREATEUSER_REQUEST",C="ADMIN_CREATEUSER_SUCCESS",_="ADMIN_CREATEUSER_FAIL",k="ADMIN_CREATEUSER_RESET",A="ADMIN_PRODUCTLIST_REQUEST",U="ADMIN_PRODUCTLIST_SUCCESS",L="ADMIN_PRODUCTLIST_FAIL",D=Object(l.combineReducers)({adminLogin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return{loading:!0};case b:return{loading:!1,adminInfo:t.payload};case u:return{loading:!1,error:t.payload};default:return e}},adminUserList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return{loading:!0};case m:return{loading:!1,userList:t.payload};case O:return{loading:!1,error:t.payload};default:return e}},adminUserDelete:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return{loading:!0};case x:return{loading:!1,success:!0};case g:return{loading:!1,error:t.payload};default:return e}},adminUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{user:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return{loading:!0};case v:return{loading:!1,user:t.payload};case N:return{loading:!1,error:t.payload};default:return e}},createNewUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return{loading:!0};case C:return{loading:!1,success:!0,createdUser:t.payload};case _:return{loading:!1,error:t.payload};case k:return{};default:return e}},updateAdminUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{user:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return{loading:!0};case S:return{loading:!1,success:!0};case E:return{loading:!1,error:t.payload};case w:return{user:{}};default:return e}},productList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return{loading:!0};case U:return{loading:!1,listproducts:t.payload};case L:return{loading:!1,error:t.payload};default:return e}}}),R={adminLogin:{adminInfo:localStorage.getItem("adminInfo")?JSON.parse(localStorage.getItem("adminInfo")):null}},T=[d.a],M=Object(l.createStore)(D,R,Object(o.composeWithDevTools)(l.applyMiddleware.apply(void 0,T))),P=a(11),F=a(1),B=function(){var e=Object(r.c)((function(e){return e.adminLogin})).adminInfo;return Object(F.jsx)(F.Fragment,{children:Object(F.jsxs)("header",{id:"header",className:"full-header header-size-md","data-mobile-sticky":"true",children:[Object(F.jsx)("div",{id:"header-wrap",children:Object(F.jsx)("div",{className:"container",children:Object(F.jsxs)("div",{className:"header-row",children:[Object(F.jsx)("div",{id:"logo",children:Object(F.jsx)(i.b,{to:"/",className:"standard-logo",children:Object(F.jsx)("img",{src:"Idora_Logo.png",alt:"Idora Logo"})})}),Object(F.jsx)("nav",{className:"primary-menu",children:e?Object(F.jsxs)("ul",{className:"menu-container",children:[Object(F.jsx)("li",{className:"menu-item",children:Object(F.jsx)(i.b,{className:"menu-link",to:"/admindashboard_productManage",children:Object(F.jsx)("div",{children:"Product Management"})})}),Object(F.jsx)("li",{className:"menu-item",children:Object(F.jsx)(i.b,{className:"menu-link",to:"/admindashboard_userManage",children:Object(F.jsx)("div",{children:"User Management"})})})]}):Object(F.jsx)("ul",{className:"menu-container",children:Object(F.jsx)("li",{className:"menu-item",children:Object(F.jsx)(i.b,{className:"menu-link",to:"/",children:Object(F.jsx)("div",{children:"Admin Login"})})})})})]})})}),Object(F.jsx)("div",{className:"header-wrap-clone"})]})})},z=function(){return Object(F.jsx)(F.Fragment,{children:Object(F.jsx)("footer",{id:"footer",className:"dark",children:Object(F.jsx)("div",{id:"copyrights",children:Object(F.jsx)("div",{className:"container",children:Object(F.jsxs)("div",{className:"row col-mb-30",children:[Object(F.jsxs)("div",{className:"col-md-6 text-center text-md-left",children:["Copyrights \xa9 2021 All Rights Reserved by VAYUZ Technologies",Object(F.jsx)("br",{}),Object(F.jsxs)("div",{className:"copyright-links",children:[Object(F.jsx)("a",{href:"#",children:"Terms of Use"})," /"," ",Object(F.jsx)("a",{href:"#",children:"Privacy Policy"})]})]}),Object(F.jsxs)("div",{className:"col-md-6 text-center text-md-right",children:[Object(F.jsxs)("div",{className:"d-flex justify-content-center justify-content-md-end",children:[Object(F.jsxs)("a",{href:"#",className:"social-icon si-small si-borderless si-facebook",children:[Object(F.jsx)("i",{className:"icon-facebook"}),Object(F.jsx)("i",{className:"icon-facebook"})]}),Object(F.jsxs)("a",{href:"#",className:"social-icon si-small si-borderless si-twitter",children:[Object(F.jsx)("i",{className:"icon-twitter"}),Object(F.jsx)("i",{className:"icon-twitter"})]}),Object(F.jsxs)("a",{href:"#",className:"social-icon si-small si-borderless si-gplus",children:[Object(F.jsx)("i",{className:"icon-gplus"}),Object(F.jsx)("i",{className:"icon-gplus"})]}),Object(F.jsxs)("a",{href:"#",className:"social-icon si-small si-borderless si-pinterest",children:[Object(F.jsx)("i",{className:"icon-pinterest"}),Object(F.jsx)("i",{className:"icon-pinterest"})]}),Object(F.jsxs)("a",{href:"#",className:"social-icon si-small si-borderless si-vimeo",children:[Object(F.jsx)("i",{className:"icon-vimeo"}),Object(F.jsx)("i",{className:"icon-vimeo"})]}),Object(F.jsxs)("a",{href:"#",className:"social-icon si-small si-borderless si-github",children:[Object(F.jsx)("i",{className:"icon-github"}),Object(F.jsx)("i",{className:"icon-github"})]}),Object(F.jsxs)("a",{href:"#",className:"social-icon si-small si-borderless si-yahoo",children:[Object(F.jsx)("i",{className:"icon-yahoo"}),Object(F.jsx)("i",{className:"icon-yahoo"})]}),Object(F.jsxs)("a",{href:"#",className:"social-icon si-small si-borderless si-linkedin",children:[Object(F.jsx)("i",{className:"icon-linkedin"}),Object(F.jsx)("i",{className:"icon-linkedin"})]})]}),Object(F.jsx)("div",{className:"clear"}),Object(F.jsx)("i",{className:"icon-envelope2"})," hello@vayuz.com"," ",Object(F.jsx)("span",{className:"middot",children:"\xb7"})," ",Object(F.jsx)("i",{className:"icon-headphones"})," +1-11-5555-5555"," ",Object(F.jsx)("span",{className:"middot",children:"\xb7"})," ",Object(F.jsx)("i",{className:"icon-skype2"})," VayuzOnSkype"]})]})})})})})},G=a(13),Q=a(17),q=a.n(Q),J=a(27),V=a(28),H=a.n(V),W=function(){return function(){var e=Object(J.a)(q.a.mark((function e(t,a){var c,n,s,r,i;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:h}),c=a(),n=c.adminLogin.adminInfo,s={headers:{Authorization:"Bearer ".concat(n.token)}},e.next=6,H.a.get("http://localhost:8000/api/v1/adduser/show",s);case 6:r=e.sent,i=r.data.users,t({type:m,payload:i}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),t({type:O,payload:e.t0.response.data});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,a){return e.apply(this,arguments)}}()},Y=a(63),Z=a(64),K=a(131),X=a(132),$=a(128);function ee(e){return Object(F.jsx)(X.a,Object(Z.a)({elevation:6,variant:"filled"},e))}var te=Object($.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}})),ae=function(e){var t=e.message,a=te(),n=Object(c.useState)(!0),s=Object(G.a)(n,2),r=s[0],i=s[1],l=function(e,t){"clickaway"!==t&&i(!1)};return Object(F.jsx)("div",{className:a.root,children:Object(F.jsx)(K.a,{open:r,autoHideDuration:6e3,onClose:l,children:Object(F.jsx)(ee,{onClose:l,severity:"error",children:t})})})},ce=function(e){var t=e.history,a=Object(c.useState)(""),n=Object(G.a)(a,2),s=n[0],i=n[1],l=Object(c.useState)(""),o=Object(G.a)(l,2),d=o[0],h=o[1],m=Object(c.useState)(!1),O=Object(G.a)(m,2),p=O[0],x=O[1],g=Object(c.useState)(""),f=Object(G.a)(g,2),v=f[0],N=f[1],y=Object(c.useState)(""),S=Object(G.a)(y,2),E=S[0],w=S[1],I=Object(r.b)(),C=Object(r.c)((function(e){return e.adminLogin})),_=C.loading,k=C.error,A=C.adminInfo;Object(c.useEffect)((function(){A&&t.push("/admindashboard/userManage")}),[t,A]);return Object(F.jsxs)(F.Fragment,{children:[k&&Object(F.jsx)(ae,{message:k.message}),Object(F.jsx)("div",{id:"wrapper",className:"clearfix",children:Object(F.jsx)("section",{id:"content",children:Object(F.jsx)("div",{className:"content-wrap py-0",children:Object(F.jsxs)("div",{className:"section m-0 py-6",children:[Object(F.jsx)("div",{className:"curve-bg"}),Object(F.jsx)("div",{className:"container d-flex justify-content-center align-items-center",children:Object(F.jsx)("div",{className:"cs-signin-form",children:Object(F.jsxs)("div",{className:"cs-signin-form-inner",children:[Object(F.jsxs)("div",{className:"text-center",children:[Object(F.jsx)("h3",{className:"h1 font-weight-bolder mb-3",children:"Sign In"}),Object(F.jsx)("p",{className:"text-smaller text-muted mb-4",style:{lineHeight:"1.5"},children:"Sign-in to Idora Photobook"})]}),Object(F.jsxs)("form",{id:"login-form",name:"login-form",className:"mb-0 row",onSubmit:function(e){e.preventDefault(),function(){var e="",t="";return s||(e="a valid email is required"),d||(t="a valid Password is required"),!e||!t||(N(e),w(t),!1)}()&&(i(""),x(!1)),I(function(e,t){return function(){var a=Object(J.a)(q.a.mark((function a(c){var n,s,r;return q.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,c({type:j}),n={headers:{"Content-Type":"application/json"}},a.next=5,H.a.post("http://localhost:8000/api/v1/admin/signin",{email:e,password:t},n);case 5:s=a.sent,r=s.data,c({type:b,payload:r}),localStorage.setItem("adminInfo",JSON.stringify(r)),a.next=14;break;case 11:a.prev=11,a.t0=a.catch(0),c({type:u,payload:a.t0.response.data});case 14:case"end":return a.stop()}}),a,null,[[0,11]])})));return function(e){return a.apply(this,arguments)}}()}(s,d))},children:[Object(F.jsxs)("div",{className:"col-12 form-group",children:[Object(F.jsx)("label",{className:"nott ls0 font-weight-normal mb-1",htmlFor:"login-form-username",children:"Email:"}),Object(F.jsx)("input",{type:"email",name:"email",id:"login-form-username",className:"form-control font-weight-semibold",placeholder:"Email",onChange:function(e){return i(e.target.value)},value:s}),Object(F.jsx)("p",{className:"form-req",children:v})]}),Object(F.jsx)("div",{className:"clear"}),Object(F.jsxs)("div",{className:"col-12 form-group",children:[Object(F.jsx)("label",{className:"nott ls0 font-weight-normal mb-1",htmlFor:"login-form-password",children:"Password:"}),Object(F.jsxs)("div",{className:"input-group",children:[Object(F.jsx)("input",{id:"login-form-password",type:p?"text":"password",className:"form-control font-weight-semibold border-right-0",placeholder:"Password",onChange:function(e){return h(e.target.value)}}),Object(F.jsx)("div",{className:"input-group-append",children:Object(F.jsx)("button",{onClick:function(){return x(!p)},className:"btn",type:"button",children:Object(F.jsx)("i",{className:p?"far fa-eye-slash text-smaller":"icon-line-eye text-smaller"})})})]}),Object(F.jsx)("p",{className:"form-req",children:E})]}),Object(F.jsxs)("div",{className:"col-12 d-flex justify-content-between",children:[Object(F.jsxs)("div",{className:"form-check form-check-inline",children:[Object(F.jsx)("input",{className:"form-check-input",type:"checkbox",id:"inlineCheckbox2",value:"option2"}),Object(F.jsx)("label",{className:"form-check-label nott ls0 mb-0 font-weight-semibold",htmlFor:"inlineCheckbox2",children:"Remember me"})]}),Object(F.jsx)("a",{href:"#",className:"text-smaller font-weight-medium",children:Object(F.jsx)("u",{children:"Forgot Password?"})})]}),Object(F.jsx)("div",{className:"col-12 mt-4",children:Object(F.jsx)("button",{className:"button button-large btn-block bg-alt py-2 rounded-sm font-weight-medium nott ls0 m-0",id:"login-form-submit",name:"login-form-submit",value:"login",disabled:_,type:"submit",children:_?Object(F.jsx)(Y.a,{animation:"border",variant:"light"}):Object(F.jsx)("p",{style:{margin:"0px"},children:"Sign in"})})})]})]})})})]})})})}),Object(F.jsx)("div",{id:"gotoTop",className:"icon-angle-up"})]})},ne=a(42),se=function(){return Object(F.jsx)(Y.a,{animation:"border",role:"status",style:{width:"100px",height:"100px",margin:"150px auto",display:"block"},children:Object(F.jsx)("span",{className:"sr-only",children:"Loading..."})})},re=function(e){var t=e.history,a=Object(r.b)(),n=Object(r.c)((function(e){return e.adminUserList})),s=n.loading,l=n.error,o=n.userList,d=Object(r.c)((function(e){return e.adminLogin})).adminInfo,j=Object(r.c)((function(e){return e.adminUserDelete})).success;Object(c.useEffect)((function(){d?a(W()):t.push("/")}),[t,d,a,j]);var b=function(e){window.confirm("Are you sure?")&&(a(function(e){return function(){var t=Object(J.a)(q.a.mark((function t(a,c){var n,s,r;return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:p}),n=c(),s=n.adminLogin.adminInfo,r={headers:{Authorization:"Bearer ".concat(s.token)}},t.next=6,H.a.delete("http://localhost:8000/api/v1/adduser/delete/".concat(e),r);case 6:a({type:x}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),a({type:g,payload:t.t0.response.data});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e,a){return t.apply(this,arguments)}}()}(e)),a(W()))};return Object(F.jsx)(F.Fragment,{children:Object(F.jsxs)("div",{id:"wrapper",className:"clearfix",children:[Object(F.jsx)("section",{id:"page-title",children:Object(F.jsx)("div",{className:"container clearfix",children:Object(F.jsx)("h1",{children:"User Listing"})})}),s?Object(F.jsx)(se,{}):l?Object(F.jsx)(ae,{message:l.message}):Object(F.jsx)("section",{id:"content",children:Object(F.jsx)("div",{className:"content-wrap",children:Object(F.jsxs)("div",{className:"container clearfix",children:[Object(F.jsx)(i.b,{to:"/admindashboard_adduser",children:Object(F.jsxs)(ne.a,{variant:"outline-dark",size:"lg",style:{marginBottom:"30px"},children:[Object(F.jsx)("i",{className:"fas fa-plus-circle"})," ADD USER"]})}),Object(F.jsx)("div",{className:"table-responsive",children:Object(F.jsxs)("table",{id:"datatable1",className:"table table-striped table-bordered",cellSpacing:"0",width:"100%",children:[Object(F.jsx)("thead",{children:Object(F.jsxs)("tr",{children:[Object(F.jsx)("th",{children:"S No."}),Object(F.jsx)("th",{children:"Name"}),Object(F.jsx)("th",{children:"Email ID"}),Object(F.jsx)("th",{children:"Contact"}),Object(F.jsx)("th",{children:"Created on"}),Object(F.jsx)("th",{children:"Action"}),Object(F.jsx)("th",{children:"Status"})]})}),Object(F.jsx)("tbody",{children:o&&o.map((function(e,t){return Object(F.jsxs)("tr",{children:[Object(F.jsxs)("td",{children:[t+1,"."]}),Object(F.jsx)("td",{children:e.name}),Object(F.jsx)("td",{children:e.email}),Object(F.jsx)("td",{children:e.contact}),Object(F.jsx)("td",{children:e.createdAt.substring(0,10)}),Object(F.jsx)("td",{children:Object(F.jsxs)("ul",{className:"list-inline m-0",children:[Object(F.jsx)(i.b,{to:"/admindashboard_edituser",className:"list-inline-item",onClick:function(){return t=e._id,console.log(t),void localStorage.setItem("editId",t);var t},children:Object(F.jsx)("button",{className:"btn btn-success btn-sm rounded-0",type:"button","data-toggle":"tooltip","data-placement":"top",title:"Edit",children:Object(F.jsx)("i",{className:"icon-line-edit"})})}),Object(F.jsx)("li",{className:"list-inline-item",children:Object(F.jsx)("button",{className:"btn btn-danger btn-sm rounded-0",type:"button","data-toggle":"tooltip","data-placement":"top",title:"Delete",onClick:function(){return b(e._id)},children:Object(F.jsx)("i",{className:"icon-trash"})})})]})}),Object(F.jsx)("td",{children:Object(F.jsxs)("div",{className:"switch",children:[Object(F.jsx)("input",{id:t,className:"switch-toggle switch-toggle-round",type:"checkbox",defaultChecked:e.status}),Object(F.jsx)("label",{htmlFor:t})]})})]},e._id)}))})]})})]})})})]})})},ie=a(129),le=a(130),oe=a(134),de=a(135),je=function(e){var t=e.history,a=localStorage.getItem("editId"),n=Object(c.useState)(""),s=Object(G.a)(n,2),l=s[0],o=s[1],d=Object(c.useState)(""),j=Object(G.a)(d,2),b=j[0],u=j[1],h=Object(c.useState)(""),m=Object(G.a)(h,2),O=m[0],p=m[1],x=Object(c.useState)(""),g=Object(G.a)(x,2),I=g[0],C=g[1],_=Object(c.useState)(""),k=Object(G.a)(_,2),A=k[0],U=k[1],L=Object(r.b)(),D=Object(r.c)((function(e){return e.adminUser})),R=D.loading,T=(D.error,D.user),M=Object(r.c)((function(e){return e.updateAdminUser})),P=M.loading,B=M.error,z=M.success;Object(c.useEffect)((function(){var e;z?(L({type:w}),t.push("/admindashboard_userManage")):T&&(T.name&&T._id===a?(o(T.name),u(T.email),p(T.contact),C(T.password),U(T.status)):L((e=a,function(){var t=Object(J.a)(q.a.mark((function t(a,c){var n,s,r,i,l;return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:f}),n=c(),s=n.adminLogin.adminInfo,r={headers:{Authorization:"Bearer ".concat(s.token)}},t.next=6,H.a.get("http://localhost:8000/api/v1/adduser/show/".concat(e),r);case 6:i=t.sent,l=i.data,a({type:v,payload:l}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),a({type:N,payload:t.t0.response.data});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,a){return t.apply(this,arguments)}}())))}),[T,L,a,z,t]);return Object(F.jsxs)(F.Fragment,{children:[B&&Object(F.jsx)(ae,{message:B.message}),Object(F.jsx)("section",{id:"page-title",children:Object(F.jsx)("div",{className:"container clearfix",children:Object(F.jsx)("h1",{children:"Edit User"})})}),Object(F.jsx)("section",{children:R?Object(F.jsx)(se,{}):Object(F.jsx)(ie.a,{className:"my-5",children:Object(F.jsxs)(le.a,{onSubmit:function(e){e.preventDefault(),L(function(e){return function(){var t=Object(J.a)(q.a.mark((function t(a,c){var n,s,r,i,l;return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:y}),n=c(),s=n.adminLogin.adminInfo,r={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(s.token)}},t.next=6,H.a.put("http://localhost:8000/api/v1/adduser/edit/".concat(e._id),e,r);case 6:i=t.sent,l=i.data,a({type:S}),a({type:v,payload:l}),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),a({type:E,payload:t.t0.response.data});case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e,a){return t.apply(this,arguments)}}()}({_id:a,name:l,email:b,contact:O,password:I,status:A}))},children:[Object(F.jsxs)(le.a.Group,{controlId:"formBasicEmail",children:[Object(F.jsx)(le.a.Label,{children:"Name"}),Object(F.jsx)(le.a.Control,{type:"text",placeholder:"Name",value:l,onChange:function(e){return o(e.target.value)}})]}),Object(F.jsxs)(le.a.Group,{controlId:"formBasicPassword",children:[Object(F.jsx)(le.a.Label,{children:"Email address"}),Object(F.jsx)(le.a.Control,{type:"email",placeholder:"Email",value:b,onChange:function(e){return u(e.target.value)}})]}),Object(F.jsxs)(le.a.Group,{controlId:"formBasicContact",children:[Object(F.jsx)(le.a.Label,{children:"Contact"}),Object(F.jsx)(le.a.Control,{type:"text",placeholder:"Contact",value:O,onChange:function(e){return p(e.target.value)}})]}),Object(F.jsxs)(le.a.Group,{controlId:"formBasicCreated",children:[Object(F.jsx)(le.a.Label,{children:"Password"}),Object(F.jsx)(le.a.Control,{type:"text",placeholder:"Password",value:I,onChange:function(e){return C(e.target.value)}})]}),Object(F.jsx)(le.a.Group,{children:Object(F.jsx)(de.a,{control:Object(F.jsx)(oe.a,{checked:A,onChange:function(e){return U(e.target.checked)},name:"checked",color:"primary"}),label:"Status"})}),P?Object(F.jsxs)(ne.a,{variant:"success",disabled:!0,children:[Object(F.jsx)(Y.a,{animation:"border",variant:"light",size:"sm",style:{marginRight:"5px"}}),"Updating..."]}):Object(F.jsx)(ne.a,{variant:"success",type:"submit",children:"Update"}),Object(F.jsx)(i.b,{to:"/admindashboard_userManage",children:Object(F.jsx)(ne.a,{variant:"danger",type:"submit",className:"mx-2",children:"Cancel"})})]})})})]})},be=function(e){var t=e.history,a=Object(c.useState)(""),n=Object(G.a)(a,2),s=n[0],l=n[1],o=Object(c.useState)(""),d=Object(G.a)(o,2),j=d[0],b=d[1],u=Object(c.useState)(""),h=Object(G.a)(u,2),m=h[0],O=h[1],p=Object(c.useState)(""),x=Object(G.a)(p,2),g=x[0],f=x[1],v=Object(r.b)(),N=Object(r.c)((function(e){return e.createNewUser})),y=N.loading,S=N.error,E=N.success,w=Object(r.c)((function(e){return e.adminLogin})).adminInfo;Object(c.useEffect)((function(){v({type:k}),w||t.push("/"),E&&t.push("/admindashboard_userManage")}),[v,t,w,E]);return Object(F.jsxs)(F.Fragment,{children:[S&&Object(F.jsx)(ae,{message:S.message}),Object(F.jsx)("section",{id:"page-title",children:Object(F.jsx)("div",{className:"container clearfix",children:Object(F.jsx)("h1",{children:"Add User"})})}),Object(F.jsxs)("section",{children:[Object(F.jsx)(i.b,{to:"/admindashboard_userManage",children:Object(F.jsx)(ne.a,{style:{margin:"30px 0px 0px 50px"},variant:"light",children:"Go Back"})}),Object(F.jsx)(ie.a,{className:"my-5 px-10",children:Object(F.jsxs)(le.a,{onSubmit:function(e){e.preventDefault(),v(function(e){return function(){var t=Object(J.a)(q.a.mark((function t(a,c){var n,s,r,i,l;return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:I}),n=c(),s=n.adminLogin.adminInfo,r={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(s.token)}},t.next=6,H.a.post("http://localhost:8000/api/v1/adduser/create",e,r);case 6:i=t.sent,l=i.data,console.log(l),a({type:C,payload:l}),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),a({type:_,payload:t.t0.response.data});case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e,a){return t.apply(this,arguments)}}()}({name:s,email:j,contact:m,password:g}))},children:[Object(F.jsxs)(le.a.Group,{controlId:"formBasicPassword",children:[Object(F.jsx)(le.a.Label,{children:"Name"}),Object(F.jsx)(le.a.Control,{type:"text",placeholder:"Name",value:s,onChange:function(e){return l(e.target.value)}})]}),Object(F.jsxs)(le.a.Group,{controlId:"formBasicEmail",children:[Object(F.jsx)(le.a.Label,{children:"Email address"}),Object(F.jsx)(le.a.Control,{type:"email",placeholder:"Enter email",value:j,onChange:function(e){return b(e.target.value)}})]}),Object(F.jsxs)(le.a.Group,{controlId:"formBasicContact",children:[Object(F.jsx)(le.a.Label,{children:"Password"}),Object(F.jsx)(le.a.Control,{type:"text",placeholder:"Password",value:g,onChange:function(e){return f(e.target.value)}})]}),Object(F.jsxs)(le.a.Group,{controlId:"formBasicContact",children:[Object(F.jsx)(le.a.Label,{children:"Contact"}),Object(F.jsx)(le.a.Control,{type:"text",placeholder:"Contact",value:m,onChange:function(e){return O(e.target.value)}})]}),y?Object(F.jsxs)(ne.a,{variant:"dark",disabled:!0,children:[Object(F.jsx)(Y.a,{animation:"border",variant:"light",size:"sm",style:{marginRight:"5px"}}),"Creating..."]}):Object(F.jsx)(ne.a,{variant:"dark",type:"submit",children:"Create"})]})})]})]})},ue=function(e){var t=e.history,a=Object(r.b)(),n=Object(r.c)((function(e){return e.productList})),s=n.loading,l=n.error,o=n.listproducts,d=Object(r.c)((function(e){return e.adminLogin})).adminInfo;Object(c.useEffect)((function(){d?a(function(){var e=Object(J.a)(q.a.mark((function e(t,a){var c,n,s,r,i;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:A}),c=a(),n=c.adminLogin.adminInfo,s={headers:{Authorization:"Bearer ".concat(n.token)}},e.next=6,H.a.get("http://localhost:8000/api/v1/addProduct/showProducts",s);case 6:r=e.sent,i=r.data,t({type:U,payload:i}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),t({type:L,payload:e.t0.response.data});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,a){return e.apply(this,arguments)}}()):t.push("/")}),[t,d,a]);return Object(F.jsx)(F.Fragment,{children:Object(F.jsxs)("div",{id:"wrapper",className:"clearfix",children:[Object(F.jsx)("section",{id:"page-title",children:Object(F.jsx)("div",{className:"container clearfix",children:Object(F.jsx)("h1",{children:"Product Listing"})})}),s?Object(F.jsx)(se,{}):l?Object(F.jsx)(ae,{message:l.message}):Object(F.jsx)("section",{id:"content",children:Object(F.jsx)("div",{className:"content-wrap",children:Object(F.jsxs)("div",{className:"container clearfix",children:[Object(F.jsx)(i.b,{to:"/admindashboard_addproduct",children:Object(F.jsxs)(ne.a,{variant:"outline-dark",size:"lg",style:{marginBottom:"30px"},children:[Object(F.jsx)("i",{className:"fas fa-plus-circle"})," ADD PRODUCT "]})}),Object(F.jsx)("div",{className:"table-responsive",children:Object(F.jsxs)("table",{id:"datatable1",className:"table table-striped table-bordered",cellSpacing:"0",width:"100%",children:[Object(F.jsx)("thead",{children:Object(F.jsxs)("tr",{children:[Object(F.jsx)("th",{children:"S No."}),Object(F.jsx)("th",{children:"Name"}),Object(F.jsx)("th",{children:"Description"}),Object(F.jsx)("th",{children:"Price"}),Object(F.jsx)("th",{children:"Category"}),Object(F.jsx)("th",{children:"Quantity"}),Object(F.jsx)("th",{children:"Created on"}),Object(F.jsx)("th",{children:"Action"}),Object(F.jsx)("th",{children:"Status"})]})}),Object(F.jsx)("tbody",{children:o&&o.map((function(e,t){return Object(F.jsxs)("tr",{children:[Object(F.jsxs)("td",{children:[t+1,"."]}),Object(F.jsx)("td",{children:e.name}),Object(F.jsx)("td",{children:e.description}),Object(F.jsx)("td",{children:e.price}),Object(F.jsx)("td",{children:e.category}),Object(F.jsx)("td",{children:e.quantity}),Object(F.jsx)("td",{children:e.createdAt.substring(0,10)}),Object(F.jsx)("td",{children:Object(F.jsxs)("ul",{className:"list-inline m-0",children:[Object(F.jsx)("li",{className:"list-inline-item",children:Object(F.jsx)("button",{className:"btn btn-primary btn-sm rounded-0",type:"button","data-toggle":"tooltip","data-placement":"top",title:"View",children:Object(F.jsx)("i",{className:"icon-eye"})})}),Object(F.jsx)(i.b,{to:"/admindashboard_edituser",className:"list-inline-item",onClick:function(){return t=e._id,console.log(t),void localStorage.setItem("editId",t);var t},children:Object(F.jsx)("button",{className:"btn btn-success btn-sm rounded-0",type:"button","data-toggle":"tooltip","data-placement":"top",title:"Edit",children:Object(F.jsx)("i",{className:"icon-line-edit"})})}),Object(F.jsx)("li",{className:"list-inline-item",children:Object(F.jsx)("button",{className:"btn btn-danger btn-sm rounded-0",type:"button","data-toggle":"tooltip","data-placement":"top",title:"Delete",children:Object(F.jsx)("i",{className:"icon-trash"})})})]})}),Object(F.jsx)("td",{children:Object(F.jsxs)("div",{className:"switch",children:[Object(F.jsx)("input",{id:t,className:"switch-toggle switch-toggle-round",type:"checkbox",defaultChecked:e.status}),Object(F.jsx)("label",{htmlFor:t})]})})]},e._id)}))})]})})]})})})]})})},he=function(){return Object(F.jsx)("div",{children:Object(F.jsx)("h1",{children:"Admin Product Add Page...."})})},me=function(){return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(B,{}),Object(F.jsx)(P.a,{path:"/",exact:!0,component:ce}),Object(F.jsx)(P.a,{path:"/admindashboard_productManage",component:ue}),Object(F.jsx)(P.a,{path:"/admindashboard_addproduct",component:he}),Object(F.jsx)(P.a,{path:"/admindashboard/userManage",component:re}),Object(F.jsx)(P.a,{path:"/admindashboard_adduser",component:be}),Object(F.jsx)(P.a,{path:"/admindashboard_edituser",component:je}),Object(F.jsx)(z,{})]})};a(102);s.a.render(Object(F.jsx)(r.a,{store:M,children:Object(F.jsx)(i.a,{children:Object(F.jsx)(me,{})})}),document.getElementById("root"))}},[[103,1,2]]]);
//# sourceMappingURL=main.89bc7051.chunk.js.map