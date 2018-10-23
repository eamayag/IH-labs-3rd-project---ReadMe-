(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,a){e.exports=a(60)},33:function(e,t,a){},35:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(27),r=a.n(i),s=(a(33),a(2)),c=a(6),o=a(8),m=a(7),u=a(9),h=(a(35),a(65)),d=a(64),p=a(16),g=a(62),E=a(61),f=a(12),b=a.n(f);a(15).config();var v=function e(){var t=this;Object(s.a)(this,e),this.signup=function(e,a){return t.service.post("/signup",{username:e,password:a}).then(function(e){return e.data})},this.login=function(e,a){return t.service.post("/login",{username:e,password:a}).then(function(e){return e.data})},this.loggedin=function(){return t.service.get("/loggedin").then(function(e){return e.data})},this.logout=function(){return t.service.get("/logout").then(function(e){return e.data})},this.service=b.a.create({baseURL:"".concat("https://readme-emergencyapp.herokuapp.com","/api/auth"),withCredentials:!0})},N=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).handleLogout=function(e){a.props.logout().then(function(){return a.setState({redirect:!0})})},a.state={loggedInUser:null,redirect:!1},a.service=new v,a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState(Object(p.a)({},this.state,{loggedInUser:e.userInSession}))}},{key:"render",value:function(){return this.state.redirect?l.a.createElement(g.a,{to:"/login"}):this.state.loggedInUser?l.a.createElement("div",{className:"navbardiv"},l.a.createElement("nav",{className:"nav-style"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{onClick:this.handleLogout},"Log out"))))):l.a.createElement("div",{className:"navbardiv"},l.a.createElement("div",null,l.a.createElement("a",{className:"forNavBar",href:"https://github.com/eamayag"},l.a.createElement("em",null,"sprnz"))),l.a.createElement("div",null,l.a.createElement("nav",{className:"nav-style"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(E.a,{to:"/signup"},"Sign up")),l.a.createElement("li",null,l.a.createElement(E.a,{to:"/login"},"Log in"))))))}}]),t}(n.Component),y=a(11),w=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=a.state.username,n=a.state.password;a.service.signup(t,n).then(function(e){a.setState({username:"",password:"",redirect:!0}),a.props.getUser(e.user)}).catch(function(e){return console.log(e)})},a.handleChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(y.a)({},n,l))},a.state={username:"",password:"",redirect:!1},a.service=new v,a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return this.state.redirect?l.a.createElement(g.a,{to:"/edit"}):l.a.createElement("div",{className:"loginDiv"},l.a.createElement("h3",null,"Create your account:"),l.a.createElement("form",{onSubmit:this.handleFormSubmit},l.a.createElement("fieldset",null,l.a.createElement("label",{className:"labellogin"},"Username:"),l.a.createElement("input",{type:"text",name:"username",value:this.state.username,onChange:function(t){return e.handleChange(t)}})),l.a.createElement("fieldset",null,l.a.createElement("label",{className:"labellogin"},"Password:"),l.a.createElement("input",{type:"password",name:"password",value:this.state.password,onChange:function(t){return e.handleChange(t)}})),l.a.createElement("input",{type:"submit",value:"Sign up"})))}}]),t}(n.Component),C=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=a.state.username,n=a.state.password;a.service.login(t,n).then(function(e){a.setState({username:t,password:n,redirect:!0,error:!1}),a.props.getUser(e)}).catch(function(e){a.setState({username:t,password:n,error:!0})})},a.handleChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(y.a)({},n,l))},a.state={username:"",password:"",redirect:!1},a.service=new v,a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return this.state.redirect?l.a.createElement(g.a,{to:"/profile"}):l.a.createElement("div",{className:"loginDiv"},l.a.createElement("h3",null,"Log in:"),l.a.createElement("form",{className:"logininput",onSubmit:this.handleFormSubmit},l.a.createElement("fieldset",{className:"logininput"},l.a.createElement("label",{className:"labellogin"},"Username:"),l.a.createElement("input",{className:"logininput",type:"text",name:"username",value:this.state.username,onChange:function(t){return e.handleChange(t)}})),l.a.createElement("fieldset",{className:"logininput"},l.a.createElement("label",{className:"labellogin"},"Password:"),l.a.createElement("input",{className:"logininput",type:"password",name:"password",value:this.state.password,onChange:function(t){return e.handleChange(t)}})),l.a.createElement("input",{className:"logininput",type:"submit",value:"Log in"})),l.a.createElement("p",null,this.state.error?"Invalid username or password":""))}}]),t}(n.Component);a(15).config();var O=function e(){var t=this;Object(s.a)(this,e),this.getProfile=function(){return t.service.get("/").then(function(e){return e.data}).catch(function(e){return console.log(e)})},this.updateProfile=function(e){return t.service.post("/",{data:e}).then(function(e){return e.data})},this.deleteProfile=function(){return t.service.delete("/:id").then(function(e){return e.data})},this.service=b.a.create({baseURL:"".concat("https://readme-emergencyapp.herokuapp.com","/api/profile"),withCredentials:!0})},j=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={},a.service=new O,a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.service.getProfile().then(function(t){e.setState({_id:t[0]._id,name:t[0].name,username:t[0].username,email:t[0].email,dateOfBirth:t[0].dateOfBirth,address:t[0].address,city:t[0].city,contactname:t[1].contactname,relationshipcontact:t[1].relationshipcontact,contactphone:t[1].contactphone,bloodGroup:t[2].bloodGroup,allergies:t[2].allergies,diagnosis:t[2].diagnosis,drug:t[3].drug,administration:t[3].administration,ambulance:t[3].ambulance,additionalInfo:t[3].additionalInfo})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return this.state?l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("div",{className:"instructions"},l.a.createElement("p",null,"This is your NFC tag information."),l.a.createElement("p",null,l.a.createElement(E.a,{to:"/edit"},"Any update? (Click here!)"))),l.a.createElement("div",{className:"allinfo"},l.a.createElement("div",{className:"card text-white bg-dark mb-3 mx-auto",style:{width:"30rem"}},l.a.createElement("h4",{className:"card-header profileinfo"},"Your personal info:"),l.a.createElement("ul",{className:"list-group list-group-flush"},l.a.createElement("li",{className:"list-group-item list-group-item-warning"},"Full name: ",this.state.name),l.a.createElement("li",{className:"list-group-item list-group-item-warning"},"email: ",this.state.email),l.a.createElement("li",{className:"list-group-item list-group-item-warning"},"Year of birth: ",this.state.dateOfBirth),l.a.createElement("li",{className:"list-group-item list-group-item-warning"},"Address: ",this.state.address),l.a.createElement("li",{className:"list-group-item list-group-item-warning"},"Address: ",this.state.city))),l.a.createElement("div",{className:"card text-white bg-dark mb-3 mx-auto",style:{width:"30rem"}},l.a.createElement("h4",{className:"card-header profileinfo"},"Your emergency contact:"),l.a.createElement("ul",{className:"list-group list-group-flush"},l.a.createElement("li",{className:"list-group-item list-group-item-warning"},"Name: ",this.state.contactname),l.a.createElement("li",{className:"list-group-item list-group-item-warning"},"is your... ",this.state.relationshipcontact),l.a.createElement("li",{className:"list-group-item list-group-item-warning"},"Phone: ",this.state.contactphone))),l.a.createElement("div",{className:"card text-white bg-dark mb-3 mx-auto",style:{width:"30rem"}},l.a.createElement("h4",{className:"card-header profileinfo"},"Your medical info:"),l.a.createElement("ul",{className:"list-group list-group-flush"},l.a.createElement("li",{className:"list-group-item list-group-item-warning"},"Blood group: ",this.state.bloodGroup),l.a.createElement("li",{className:"list-group-item list-group-item-warning"},"Allergies: ",this.state.allergies))),l.a.createElement("div",{className:"card text-white bg-dark mb-3 mx-auto",style:{width:"30rem"}},l.a.createElement("h4",{className:"card-header profileinfo"},"Your treatment info:"),l.a.createElement("ul",{className:"list-group list-group-flush"},l.a.createElement("li",{className:"list-group-item list-group-item-warning"},"Disease: ",this.state.diagnosis," "),l.a.createElement("li",{className:"list-group-item list-group-item-warning"},"I need this medication: ",this.state.drug),l.a.createElement("li",{className:"list-group-item list-group-item-warning"},"It must be administered in this way: ",this.state.administration),l.a.createElement("li",{className:"list-group-item list-group-item-warning"},"I need an ambulance: ",this.state.ambulance," "),l.a.createElement("li",{className:"list-group-item list-group-item-warning"},"Additional info: ",this.state.additionalInfo," "))))),l.a.createElement("p",{className:"instructions"},l.a.createElement(E.a,{to:"/publicprofile/"+this.state._id},"See how others will see your profile")),l.a.createElement("br",null)):"Loading..."}}]),t}(n.Component);a(15).config();var I=function e(){var t=this;Object(s.a)(this,e),this.getPublicProfile=function(e){return t.service.get(e).then(function(e){return e.data}).catch(function(e){return console.log(e)})},this.service=b.a.create({baseURL:"".concat("https://readme-emergencyapp.herokuapp.com","/api/publicprofile"),withCredentials:!0})},x=function(e){function t(e,a){var n;a.id;return Object(s.a)(this,t),(n=Object(o.a)(this,Object(m.a)(t).call(this,e))).service=new I,e.user?n.state={match:e.id.match.params.id,loggedInUser:e.user}:n.state={match:e.id.match.params.id},n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.service.getPublicProfile(this.state.match).then(function(t){e.setState({_id:t[0]._id,name:t[0].name,username:t[0].username,email:t[0].email,dateOfBirth:t[0].dateOfBirth,address:t[0].address,city:t[0].city,contactname:t[1].contactname,relationshipcontact:t[1].relationshipcontact,contactphone:t[1].contactphone,bloodGroup:t[2].bloodGroup,allergies:t[2].allergies,diagnosis:t[2].diagnosis,drug:t[3].drug,administration:t[3].administration,ambulance:t[3].ambulance,additionalInfo:t[3].additionalInfo})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e,t,a,n,i,r,s,c,o,m,u,h,d,p,g,f,b,v="";return this.state.loggedInUser&&(v=l.a.createElement("p",{className:"instructions"},l.a.createElement(E.a,{to:"/profile"},"Back"))),(this.state.email||this.state.dateOfBirth||this.state.address||this.state.city)&&(e=l.a.createElement("h4",null,"Personal info:")),this.state.email&&(t=l.a.createElement("p",{className:"joinp"},"email: ",this.state.email)),this.state.dateOfBirth&&(a=l.a.createElement("p",{className:"joinp"}," Year of birth: ",this.state.dateOfBirth)),this.state.address&&(n=l.a.createElement("p",{className:"joinp"},"Address: ",this.state.address,".  ")),this.state.city&&(i=l.a.createElement("p",{className:"joinp"}," ",this.state.city)),(this.state.contactname||this.state.relationshipcontact||this.state.contactphone)&&(r=l.a.createElement("h4",null,"EMERGENCY CONTACT:")),this.state.contactname&&(s=l.a.createElement("p",{className:"joinp"},"Name: ",this.state.contactname)),this.state.relationshipcontact&&(c=l.a.createElement("p",{className:"joinp"}," (His/her...: ",this.state.relationshipcontact,")")),this.state.contactphone&&(o=l.a.createElement("p",null,"Phone: ",this.state.contactphone)),(this.state.bloodGroup||this.state.diagnosis||this.state.drug||this.state.administration||this.state.ambulance||this.state.additionalInfo)&&(m=l.a.createElement("h4",null,"EMERGENCY INFO:")),this.state.bloodGroup&&(u=l.a.createElement("p",{className:"joinp"},"Blood group: ",this.state.bloodGroup)),this.state.allergies&&(h=l.a.createElement("p",{className:"joinp"}," Allergies: ",this.state.allergies)),this.state.diagnosis&&(d=l.a.createElement("p",null,"Disease: ",this.state.diagnosis)),this.state.drug&&(p=l.a.createElement("p",{className:"joinp"},this.state.username," needs this medication: ",this.state.drug)),this.state.administration&&(g=l.a.createElement("p",{className:"joinp"}," It must be administered in this way: ",this.state.administration)),this.state.ambulance&&(f=l.a.createElement("p",null,this.state.username," needs you to call an ambulance: ",this.state.ambulance)),this.state.additionalInfo&&(b=l.a.createElement("p",null,"Additional info: ",this.state.additionalInfo)),this.state?l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h2",{className:"publictitle"},"This is an emergency ",l.a.createElement("em",null,"ReadMe!")," profile"),l.a.createElement("h4",{className:"emergency"},"If you're reading this, ",this.state.name," probably needs your help!"),l.a.createElement("div",{className:"allinfo"},l.a.createElement("div",{className:"card text-white bg-dark mb-3 mx-auto",style:{width:"30rem"}},l.a.createElement("div",{className:"card-header"},e),l.a.createElement("ul",{className:"list-group list-group-flush"},l.a.createElement("li",{className:"list-group-item list-group-item-info"},t),l.a.createElement("li",{className:"list-group-item list-group-item-info"},a),l.a.createElement("li",{className:"list-group-item list-group-item-info"},n,i))),l.a.createElement("div",{className:"card mx-auto",style:{width:"30rem"}},l.a.createElement("div",{className:"card-header"},r),l.a.createElement("ul",{className:"list-group list-group-flush"},l.a.createElement("li",{className:"list-group-item list-group-item-info"},s),l.a.createElement("li",{className:"list-group-item list-group-item-info"},c),l.a.createElement("li",{className:"list-group-item list-group-item-info"},o))),l.a.createElement("div",{className:"card",style:{width:"30rem"}},l.a.createElement("div",{className:"card-header"},m),l.a.createElement("ul",{className:"list-group list-group-flush"},l.a.createElement("li",{className:"list-group-item list-group-item-info"},u),l.a.createElement("li",{className:"list-group-item list-group-item-info"},h),l.a.createElement("li",{className:"list-group-item list-group-item-info"},d),l.a.createElement("li",{className:"list-group-item list-group-item-info"},p),l.a.createElement("li",{className:"list-group-item list-group-item-info"},g),l.a.createElement("li",{className:"list-group-item list-group-item-info"},f),l.a.createElement("li",{className:"list-group-item list-group-item-info"},b))))),l.a.createElement("div",{className:"publictitle"},v)):l.a.createElement("h3",null,"Loading...")}}]),t}(n.Component);a(15).config();var S=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault(),a.profileService.updateProfile(a.state).then(function(e){a.setState({redirect:!0})})},a.handleChange=function(e,t){var n=e.target,l=n.name,i=n.value,r=Object(p.a)({},a.state);r[t][l]=i,a.setState(Object(y.a)({},t,r[t]))},a.state={redirect:!1,user:{},contact:{},condition:{},treatment:{}},a.connection=b.a.create({baseURL:"".concat("https://readme-emergencyapp.herokuapp.com","/api/profile"),withCredentials:!0}),a.profileService=new O,a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state;t.name,t.email,t.dateOfBirth,t.address,t.city,t.contactname,t.relationshipcontact,t.contactphone,t.bloodGroup,t.allergies,t.diagnosis,t.drug,t.administration,t.ambulance,t.additionalInfo;return this.state.redirect?l.a.createElement(g.a,{to:"/profile"}):l.a.createElement("div",{className:"edittitle"},l.a.createElement("h3",null,"Edit your ",l.a.createElement("em",null,"ReadMe!")," profile:"),l.a.createElement("h4",null,"This is your NFC tag information. Just fill what you want to show!"),l.a.createElement("form",{onSubmit:this.handleFormSubmit},l.a.createElement("div",{className:"editform"},l.a.createElement("h4",null,"Your personal info:"),l.a.createElement("label",null,"Name:"),l.a.createElement("input",{type:"text",name:"name",value:this.state.name,onChange:function(t){return e.handleChange(t,"user")}}),l.a.createElement("br",null),l.a.createElement("label",null,"email:"),l.a.createElement("input",{type:"email",name:"email",value:this.state.email,onChange:function(t){return e.handleChange(t,"user")}}),l.a.createElement("br",null),l.a.createElement("label",null,"Year of birth:"),l.a.createElement("input",{type:"number",name:"dateOfBirth",value:this.state.dateOfBirth,onChange:function(t){return e.handleChange(t,"user")}}),l.a.createElement("br",null),l.a.createElement("label",null,"Address:"),l.a.createElement("input",{type:"text",name:"address",value:this.state.address,onChange:function(t){return e.handleChange(t,"user")}}),l.a.createElement("br",null),l.a.createElement("label",null,"City:"),l.a.createElement("input",{type:"text",name:"city",value:this.state.city,onChange:function(t){return e.handleChange(t,"user")}}),l.a.createElement("br",null)),l.a.createElement("div",{className:"editform"},l.a.createElement("h4",null,"Your emergency contact:"),l.a.createElement("label",null,"Name of your emergency contact:"),l.a.createElement("input",{type:"text",name:"contactname",value:this.state.contactname,onChange:function(t){return e.handleChange(t,"contact")}}),l.a.createElement("br",null),l.a.createElement("label",null,"Relationship with your emergency contact:"),l.a.createElement("input",{type:"text",name:"relationshipcontact",placeholder:"(cousin? mother? brother?)",value:this.state.relationshipcontact,onChange:function(t){return e.handleChange(t,"contact")}}),l.a.createElement("br",null),l.a.createElement("label",null,"Phone of your emergency contact:"),l.a.createElement("input",{type:"text",name:"contactphone",value:this.state.contactphone,onChange:function(t){return e.handleChange(t,"contact")}}),l.a.createElement("br",null)),l.a.createElement("div",{className:"editform"},l.a.createElement("h4",null,"Your medical emergency info:"),l.a.createElement("label",null,"Blood group:"),l.a.createElement("input",{type:"text",name:"bloodGroup",placeholder:"0+, 0-, A+, A-, B+, B-, AB+, AB-",value:this.state.bloodGroup,onChange:function(t){return e.handleChange(t,"condition")}}),l.a.createElement("br",null),l.a.createElement("label",null,"Allergies:"),l.a.createElement("input",{type:"text",name:"allergies",value:this.state.allergies,onChange:function(t){return e.handleChange(t,"condition")}}),l.a.createElement("br",null),l.a.createElement("label",null,"Any important disease you want to inform about in your NFC card?"),l.a.createElement("input",{type:"text",name:"diagnosis",placeholder:"I have...",value:this.state.diagnosis,onChange:function(t){return e.handleChange(t,"condition")}}),l.a.createElement("br",null)),l.a.createElement("div",{className:"editform"},l.a.createElement("h4",null,"Your treatment in an emergency situation:"),l.a.createElement("label",null,"Medication you need to be administered inmediately:"),l.a.createElement("input",{type:"text",name:"drug",value:this.state.drug,onChange:function(t){return e.handleChange(t,"treatment")}}),l.a.createElement("br",null),l.a.createElement("label",null,"How should anyone give this medication to you?"),l.a.createElement("input",{type:"text",name:"administration",placeholder:'example: "pill under my tongue"',value:this.state.administration,onChange:function(t){return e.handleChange(t,"treatment")}}),l.a.createElement("br",null),l.a.createElement("label",null,"Will you need an ambulance, or going to a hospital, in addition to your medication?"),l.a.createElement("input",{type:"text",name:"ambulance",placeholder:'"Yes/No"',value:this.state.ambulance,onChange:function(t){return e.handleChange(t,"treatment")}}),l.a.createElement("br",null),l.a.createElement("label",null,"Any additional info you think anyone could need to help you:"),l.a.createElement("input",{type:"text",name:"additionalInfo",placeholder:'example: "I need to be sitted"',value:this.state.additionalInfo,onChange:function(t){return e.handleChange(t,"treatment")}}),l.a.createElement("br",null)),l.a.createElement("div",{className:"inputedit"},l.a.createElement("input",{type:"submit",value:"Submit"}),l.a.createElement("p",{className:"instructions"},l.a.createElement(E.a,{to:"/profile"},"Back")))))}}]),t}(n.Component);a(15).config();var U=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).getTheUser=function(e){a.setState({loggedInUser:e})},a.logout=function(){return a.service.logout().then(function(){a.setState({loggedInUser:null})})},a.state={loggedInUser:null},a.service=new v,a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"fetchUser",value:function(){var e=this;null===this.state.loggedInUser&&this.service.loggedin().then(function(t){e.setState({loggedInUser:t})}).catch(function(t){e.setState({loggedInUser:!1})})}},{key:"render",value:function(){var e=this;this.fetchUser();this.state.loggedInUser;var t=l.a.createElement("h1",{className:"title"},"Welcome to ReadMe!"),a=l.a.createElement("h2",{className:"info"},"...what if a tag could save your life?");return this.state.loggedInUser?l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement(N,{userInSession:this.state.loggedInUser,logout:this.logout})),l.a.createElement("div",{className:"body"},l.a.createElement(h.a,null,l.a.createElement(d.a,{exact:!0,path:"/profile",render:function(){return l.a.createElement(j,{user:e.state.loggedInUser})}}),l.a.createElement(d.a,{exact:!0,path:"/edit",render:function(){return l.a.createElement(S,{user:e.state.loggedInUser})}}),l.a.createElement(d.a,{exact:!0,path:"/publicprofile/:id",render:function(t){return l.a.createElement(x,{id:t,user:e.state.loggedInUser})}})))):l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement(N,{userInSession:this.state.loggedInUser,logout:this.logout})),l.a.createElement("div",{className:"body"},l.a.createElement("div",null,a),l.a.createElement("br",null),l.a.createElement("div",null,t),l.a.createElement(h.a,null,l.a.createElement(d.a,{exact:!0,path:"/publicprofile/:id",render:function(e){return l.a.createElement(x,{id:e})}}),l.a.createElement(d.a,{exact:!0,path:"/signup",render:function(){return l.a.createElement(w,{getUser:e.getTheUser})}}),l.a.createElement(d.a,{exact:!0,path:"/login",render:function(){return l.a.createElement(C,{getUser:e.getTheUser})}}))))}}]),t}(n.Component),k=a(63);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(k.a,null,l.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[28,2,1]]]);
//# sourceMappingURL=main.b16945b5.chunk.js.map