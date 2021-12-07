(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[4],{11:function(e,t,n){"use strict";n.d(t,"d",(function(){return i})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return b})),n.d(t,"a",(function(){return j}));var r=n(16),c=n.n(r),a=n(23),u=n(1),o="https://connections-api.herokuapp.com",i=Object(u.c)("auth/register",function(){var e=Object(a.a)(c.a.mark((function e(t,n){var r,a,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,fetch("".concat(o,"/users/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 4:return a=e.sent,e.next=7,a.json();case 7:return u=e.sent,e.abrupt("return",u);case 11:e.prev=11,e.t0=e.catch(1),r({error:e.t0.message});case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,n){return e.apply(this,arguments)}}()),s=Object(u.c)("auth/login",function(){var e=Object(a.a)(c.a.mark((function e(t,n){var r,a,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,fetch("".concat(o,"/users/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 4:return a=e.sent,e.next=7,a.json();case 7:return u=e.sent,e.abrupt("return",u);case 11:e.prev=11,e.t0=e.catch(1),r({error:e.t0.message});case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,n){return e.apply(this,arguments)}}()),b=Object(u.c)("auth/logout",function(){var e=Object(a.a)(c.a.mark((function e(t,n){var r,a,u,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.rejectWithValue,a=n.getState,u=a(),i=u.auth.token){e.next=5;break}return e.abrupt("return");case 5:return e.prev=5,e.next=8,fetch("".concat(o,"/users/logout"),{method:"POST",headers:{Authorization:"Bearer ".concat(i)}});case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(5),r(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[5,10]])})));return function(t,n){return e.apply(this,arguments)}}()),j=Object(u.c)("auth/currentUser",function(){var e=Object(a.a)(c.a.mark((function e(t,n){var r,a,u,i,s,b;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.rejectWithValue,a=n.getState,u=a(),i=u.auth.token){e.next=5;break}return e.abrupt("return");case 5:return e.prev=5,e.next=8,fetch("".concat(o,"/users/current"),{headers:{Authorization:"Bearer ".concat(i)}});case 8:return s=e.sent,e.next=11,s.json();case 11:return b=e.sent,console.log(b),e.abrupt("return",b);case 16:e.prev=16,e.t0=e.catch(5),r(e.t0.message);case 19:case"end":return e.stop()}}),e,null,[[5,16]])})));return function(t,n){return e.apply(this,arguments)}}())},17:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"d",(function(){return c})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return u}));var r=function(e){return e.auth.isAuth},c=function(e){return e.auth.user.name},a=function(e){return e.auth.isFetchingCurrentUser},u=function(e){return e.auth.token}},24:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"d",(function(){return u})),n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return i}));var r=n(32),c=n(12),a=Object(r.a)({reducerPath:"phonebookApi",baseQuery:Object(c.d)({baseUrl:"https://619d65ca131c600017088eee.mockapi.io/api/v1"}),tagTypes:["Contact"],endpoints:function(e){return console.log("builder",e),{fetchPhonebook:e.query({query:function(){return"/contacts"},providesTags:["Contact"]}),addContact:e.mutation({query:function(e){return{url:"/contacts",method:"POST",body:e}},invalidatesTags:["Contact"]}),deleteContact:e.mutation({query:function(e){return{url:"/contacts/".concat(e),method:"DELETE"}},invalidatesTags:["Contact"]})}}}),u=a.useFetchPhonebookQuery,o=a.useDeleteContactMutation,i=a.useAddContactMutation},29:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(1),c=Object(r.b)("filter/set")},39:function(e,t,n){},41:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(19),u=n.n(a),o=(n(39),n(40),n(41),n(26)),i=n.n(o),s=n(2),b=n(3);function j(e){var t=e.isAuth,n=e.component;return console.log("privetrout",n),Object(b.jsx)(b.Fragment,{children:t?Object(b.jsx)(n,{}):Object(b.jsx)(s.a,{to:"/login"})})}var l=n(17),d=n(6);function h(e){var t=e.component,n=Object(d.e)(l.a);return console.log("public",t),Object(b.jsx)(b.Fragment,{children:n?Object(b.jsx)(s.a,{to:"/contacts"}):Object(b.jsx)(t,{})})}var O=n(11),f=n(34),p=Object(r.lazy)((function(){return n.e(1).then(n.bind(null,85))})),g=Object(r.lazy)((function(){return n.e(2).then(n.bind(null,81))})),x=Object(r.lazy)((function(){return n.e(3).then(n.bind(null,82))})),m=Object(r.lazy)((function(){return n.e(5).then(n.bind(null,83))})),y=Object(r.lazy)((function(){return n.e(0).then(n.bind(null,84))}));var v,k,w=function(){var e=Object(d.d)(),t=Object(d.e)(l.a),n=Object(d.e)(l.c),c=Object(d.e)(l.b);return Object(r.useEffect)((function(){n&&e(Object(O.a)())}),[e]),Object(b.jsxs)("div",{className:"app",children:[Object(b.jsxs)(r.Suspense,{fallback:Object(b.jsx)(i.a,{type:"ThreeDots",color:"blue",height:80,width:80}),children:[Object(b.jsx)(p,{isAuth:t}),c?Object(b.jsx)(i.a,{type:"ThreeDots",color:"blue",height:80,width:80}):Object(b.jsxs)(s.d,{children:[Object(b.jsx)(s.b,{path:"/",element:Object(b.jsx)(h,{isAuth:t,component:g})}),Object(b.jsx)(s.b,{path:"/login",element:Object(b.jsx)(h,{isAuth:t,component:x})}),Object(b.jsx)(s.b,{path:"/register",element:Object(b.jsx)(h,{isAuth:t,component:m})}),Object(b.jsx)(s.b,{path:"/contacts",element:Object(b.jsx)(j,{isAuth:t,component:y})})]})]}),Object(b.jsx)(f.a,{autoClose:2e3})]})},A=n(31),C=n(7),L=n(33),T=n(9),S=n(29),F=n(1),z=Object(F.d)("",Object(C.a)({},S.a,(function(e,t){return t.payload}))),P=Object(T.b)({filter:z}),U=(n(67),n(15)),E=n(28),q=n.n(E),D=n(24),J=n(5),V=Object(F.e)({name:"auth",initialState:{user:{name:null,email:null},token:null,isFetchingCurrentUser:!1,error:null,isLoading:!1,isAuth:!1},extraReducers:(v={},Object(C.a)(v,O.d.pending,(function(e,t){return Object(J.a)(Object(J.a)({},e),{},{isLoading:!0})})),Object(C.a)(v,O.d.fulfilled,(function(e,t){return Object(J.a)(Object(J.a)({},e),{},{user:t.payload.user,token:t.payload.token,isFetchingCurrentUser:!1,isAuth:!0,isLoading:!1})})),Object(C.a)(v,O.d.rejected,(function(e,t){return Object(J.a)(Object(J.a)({},e),{},{isLoading:!1,error:t.payload})})),Object(C.a)(v,O.b.pending,(function(e){return Object(J.a)(Object(J.a)({},e),{},{isLoading:!0})})),Object(C.a)(v,O.b.fulfilled,(function(e,t){return Object(J.a)(Object(J.a)({},e),{},{user:t.payload.user,token:t.payload.token,isAuth:!0,isLoading:!1})})),Object(C.a)(v,O.b.rejected,(function(e,t){return Object(J.a)(Object(J.a)({},e),{},{isLoading:!1,error:t.payload})})),Object(C.a)(v,O.c.pending,(function(e){return Object(J.a)(Object(J.a)({},e),{},{isLoading:!0})})),Object(C.a)(v,O.c.fulfilled,(function(e){return Object(J.a)(Object(J.a)({},e),{},{user:{name:null,email:null},token:null,isLoading:!1,isAuth:!1})})),Object(C.a)(v,O.c.rejected,(function(e,t){return Object(J.a)(Object(J.a)({},e),{},{isLoading:!1,error:t.payload})})),Object(C.a)(v,O.a.pending,(function(e){return Object(J.a)(Object(J.a)({},e),{},{isLoading:!0,isFetchingCurrentUser:!0})})),Object(C.a)(v,O.a.fulfilled,(function(e,t){return Object(J.a)(Object(J.a)({},e),{},{user:t.payload,isFetchingCurrentUser:!1,isLoading:!1,isAuth:!0})})),Object(C.a)(v,O.a.rejected,(function(e,t){return Object(J.a)(Object(J.a)({},e),{},{isLoading:!1,error:t.payload,isFetchingCurrentUser:!1,isAuth:!1})})),v)}).reducer,W={key:"phonebook",storage:q.a,whitelist:[],blacklist:["filter"]},B={key:"authToken",storage:q.a,whitelist:["token"]},M=Object(U.g)(B,V),N=[].concat(Object(L.a)(Object(F.f)({serializableCheck:{ignoredActions:[U.a,U.f,U.b,U.c,U.d,U.e]}})),[D.a.middleware]),Q=Object(F.a)({reducer:(k={contacts:Object(U.g)(W,P)},Object(C.a)(k,D.a.reducerPath,D.a.reducer),Object(C.a)(k,"auth",M),k),middleware:N}),I={store:Q,persistor:Object(U.h)(Q)},R=n(21);u.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(d.a,{store:I.store,children:Object(b.jsx)(A.a,{loading:"",persistor:I.persistor,children:Object(b.jsx)(R.a,{children:Object(b.jsx)(w,{})})})})}),document.getElementById("root"))}},[[72,6,7]]]);
//# sourceMappingURL=main.6c054a57.chunk.js.map