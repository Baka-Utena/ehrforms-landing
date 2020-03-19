(this["webpackJsonpehrforms-landing_react"]=this["webpackJsonpehrforms-landing_react"]||[]).push([[0],{10:function(e,t,a){e.exports=a(17)},15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),l=a(9),i=a.n(l),o=(a(15),a(1)),c=a(2),r=a(4),m=a(3),d=a(5),u=(a(16),a(6)),h=a(7),p=a.n(h),v=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(r.a)(this,Object(m.a)(t).call(this))).handleClickOnInput=a.handleClickOnInput.bind(Object(u.a)(a)),a.handleBlurOnInput=a.handleBlurOnInput.bind(Object(u.a)(a)),a.state={placeholder:""},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.setState({placeholder:this.props.placeholder})}},{key:"handleClickOnInput",value:function(e){this.setState({placeholder:""})}},{key:"handleBlurOnInput",value:function(e){this.setState({placeholder:this.props.placeholder})}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:p()("textfield",{"is-required":this.props.required})},s.a.createElement("input",{type:"text",className:"textfield__input",name:this.props.name,placeholder:this.state.placeholder,onChange:this.props.onChange,onClick:this.handleClickOnInput,onBlur:this.handleBlurOnInput}),s.a.createElement("div",{className:"textfield__error"},this.props.error)))}}]),t}(n.Component),_=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(r.a)(this,Object(m.a)(t).call(this,e))).state={fields:{name:"",email:"",phone:""},errors:{}},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e,t){console.log("11");var a=this.state.fields;a[e]=t.target.value,this.setState({fields:a})}},{key:"handleClickOnInput",value:function(e,t){t.target.placeholder;t.target.placeholder=""}},{key:"fieldValidation",value:function(e,t){var a=this.state.fields;a[e]=t.target.value;var n={};a[e]||(n[e]="Cannot be empty"),this.setState({errors:n,fields:a})}},{key:"handleValidation",value:function(){var e=this.state.fields,t={},a=!0;if(e.name?"undefined"!==typeof e.name&&(e.name.match(/^[a-zA-Z]+$/)||(a=!1,t.name="Only letters")):(a=!1,t.name="Cannot be empty",this.setState({errors:t})),e.email||(a=!1,t.email="Cannot be empty"),"undefined"!==typeof e.email){var n=e.email.lastIndexOf("@"),s=e.email.lastIndexOf(".");n<s&&n>0&&-1===e.email.indexOf("@@")&&s>2&&e.email.length-s>2||(a=!1,t.email="Email is not valid")}return this.setState({errors:t}),a}},{key:"contactSubmit",value:function(e){e.preventDefault(),this.handleValidation()?console.log("Form submitted"):console.log("Form has errors.")}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("form",{name:"contactform",className:p()("form",this.props.classes),onSubmit:this.contactSubmit.bind(this)},s.a.createElement("h3",{className:"form__header"},"Have a question about EHR Forms?"),s.a.createElement("div",{className:"form__caption"},"Ask it here and we will get back to you as soon as we can"),s.a.createElement("div",{className:"form__row"},s.a.createElement("div",{className:"form__col form__col-2"},s.a.createElement(v,{name:"name",placeholder:"Name",required:!0,onChange:this.handleChange.bind(this,"name"),onClick:this.handleClickOnInput.bind(this,"name"),value:this.state.fields.name,error:this.state.errors.name}))),s.a.createElement("div",{className:"form__row"},s.a.createElement("div",{className:"form__col form__col-2 is-nessesary"},s.a.createElement(v,{name:"email",placeholder:"E-mail",required:!0,onChange:this.handleChange.bind(this,"email"),error:this.state.errors.email})),s.a.createElement("div",{className:"form__col form__col-2"},s.a.createElement(v,{name:"phone",placeholder:"Phone",onChange:this.handleChange.bind(this,"phone")}))),s.a.createElement("div",{className:"form__row"},s.a.createElement("div",{className:"form__col"},s.a.createElement("textarea",{className:"textarea",placeholder:"Message"}))),s.a.createElement("div",{className:"form__row"},s.a.createElement("div",{className:"form__col form__col_flex"},s.a.createElement("button",{className:"btn btn_primary"},"Submit"),s.a.createElement("div",{className:"form__legend"},"* - Fields are required")))))}}]),t}(n.Component),f=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(a=Object(r.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).onClose=function(e){a.props.onClose&&a.props.onClose(e)},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return this.props.show?s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"modal",onClose:function(t){e.onClose(t)}},s.a.createElement("div",{className:"modal__background",onClick:this.onClose}),s.a.createElement("div",{className:"modal__wrapper"},s.a.createElement("div",{className:"modal__close",onClick:this.onClose},s.a.createElement("i",{className:"material-icons md-36"},"close")),s.a.createElement(_,{classes:"light"})))):null}}]),t}(n.Component),E=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(r.a)(this,Object(m.a)(t).call(this))).anchorTarget=null,a.handleClick=a.handleClick.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"handleClick",value:function(e){e.preventDefault(),window.scrollTo({top:this.props.itemPosition,left:0,behavior:"smooth",block:"start"})}},{key:"componentDidMount",value:function(){this.anchorTarget=document.getElementById(this.props.itemName)}},{key:"componentWillUnmount",value:function(){this.anchorTarget=null}},{key:"render",value:function(){return s.a.createElement("li",{className:p()("menu__item",this.props.active)},s.a.createElement("a",{href:"#"+this.props.itemName,onClick:this.handleClick,"aria-label":"Scroll to"+this.props.itemName},this.props.itemTitle))}}]),t}(n.Component);var b=function(e){var t=e.onClick,a=e.visible;return s.a.createElement("div",{className:p()("header__btn-wrap",{"is-visible":a})},s.a.createElement("button",{className:"btn btn_white header__btn",onClick:t},"Request a demo"))},N=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(r.a)(this,Object(m.a)(t).call(this,e))).handleResize=a.handleResize.bind(Object(u.a)(a)),a.handleScroll=a.handleScroll.bind(Object(u.a)(a)),a.menuToggle=a.menuToggle.bind(Object(u.a)(a)),a.sections={product:"Product",how:"How it works",features:"Features",contact:"Contact"},a.state={activeMenuItem:{top:null,product:null,how:null,features:null,contact:null},positions:{product:"",how:"",features:"",contact:""},windowWidth:"",menuVisible:!1},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"handleResize",value:function(){this.setState({windowWidth:window.innerWidth}),this.getAnchorPoints()}},{key:"getAnchorPoints",value:function(){var e=window.pageYOffset||document.documentElement.scrollTop,t=document.querySelector(".header").offsetHeight,a={};for(var n in this.state.positions)a[n]=this.state.positions[n];for(var s in a)a[s]=document.getElementById(s).getBoundingClientRect().top+e-t;this.setState({positions:a})}},{key:"handleScroll",value:function(){var e=window.scrollY,t=null;if(t=e>this.state.positions.contact-2?"contact":e>this.state.positions.features-2?"features":e>this.state.positions.how-2?"how":e>this.state.positions.product-2?"product":"top","active"!==this.state.activeMenuItem[t]){var a={top:"",product:"",how:"",features:"",contact:""};a[t]="active",this.setState({activeMenuItem:a})}}},{key:"handleClickOnLogo",value:function(e){e.preventDefault(),window.scrollTo({top:0,left:0,behavior:"smooth",block:"start"})}},{key:"menuToggle",value:function(){this.setState({menuVisible:!this.state.menuVisible})}},{key:"componentDidMount",value:function(){this.getAnchorPoints(),window.addEventListener("resize",this.handleResize),window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleResize),window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var e=[];for(var t in this.sections)e.push(s.a.createElement(E,{itemName:t,itemTitle:this.sections[t],itemPosition:this.state.positions[t],active:this.state.activeMenuItem[t]}));return console.log(this.state.activeMenuItem.top),s.a.createElement("div",{className:"header"},s.a.createElement("div",{className:"header__container"},s.a.createElement("div",{className:"logo",onClick:"active"!==this.state.activeMenuItem.top?this.handleClickOnLogo:null},"forms"),s.a.createElement("ul",{className:p()("menu",{"is-visible":this.state.menuVisible})},e),s.a.createElement(b,{onClick:this.props.closeModal,visible:null!==this.state.activeMenuItem.top&&"active"!==this.state.activeMenuItem.top}),s.a.createElement("i",{className:"material-icons header__hamb",onClick:this.menuToggle},"menu")))}}]),t}(n.Component),w=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(r.a)(this,Object(m.a)(t).call(this,e))).showModal=function(e){a.setState({show:!a.state.show})},a.state={show:!1,scrollFirstScreen:!1},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.scrollFirstScreenDetection=this.scrollFirstScreenDetection.bind(this))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollFirstScreenDetection=this.scrollFirstScreenDetection.bind(this))}},{key:"scrollFirstScreenDetection",value:function(){this.setState({scrollFirstScreen:window.pageYOffset>760})}},{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement(N,{closeModal:function(t){e.showModal()}}),s.a.createElement("div",{className:"section section1"},s.a.createElement("div",{className:"container section1__container"},s.a.createElement("h1",{className:"section1__header"},"Solution for building openEHR based applications fast"),s.a.createElement("div",{className:"section1__infogr"}),s.a.createElement("button",{className:"btn btn_white",onClick:function(t){e.showModal()}},"Request a demo"))),s.a.createElement("span",{id:"product"}),s.a.createElement("div",{className:"section section2"},s.a.createElement("div",{className:"container section2__container"},s.a.createElement("h2",{className:"section__header"},"We solve the following problems"),s.a.createElement("div",{className:"blocks"},s.a.createElement("div",{className:"blocks__item"},s.a.createElement("div",{className:"blocks__top"},"Developing forms based on openEHR is really time consuming because of template complicity \u2013 validation rules, bulky composition structure"),s.a.createElement("div",{className:"blocks__bottom"},"WYSIWYG form builder is based on openEHR",s.a.createElement("hr",null),"Visual elements are loosely coupled with openEHR model via bindings")),s.a.createElement("div",{className:"blocks__item"},s.a.createElement("div",{className:"blocks__top"},"Forms reflecting openEHR template structure are overloaded and it takes too much time to fill out to the clinician composition structure"),s.a.createElement("div",{className:"blocks__bottom"},"Compact forms with easy to operate structure",s.a.createElement("hr",null),"Decision support when user interacts with user interface",s.a.createElement("hr",null),"Various ways to speed up filling of same blocks or dependent fields")),s.a.createElement("div",{className:"blocks__item"},s.a.createElement("div",{className:"blocks__top"},"Low reusability of UI logic for similar archetypes in different forms and products"),s.a.createElement("div",{className:"blocks__bottom"},"Reusable widgets for archetypes available in different forms")),s.a.createElement("div",{className:"blocks__item"},s.a.createElement("div",{className:"blocks__top"},"Forms have to be built by frontend developers, with knowledge of openEHR specification in all its sophistication"),s.a.createElement("div",{className:"blocks__bottom"},"Forms built for multiple openEHR compositions from different templates",s.a.createElement("hr",null),"Various purposes visual components libraries from third party developers"))),s.a.createElement("div",{className:"example"}))),s.a.createElement("span",{id:"how"}),s.a.createElement("div",{className:"section section3"},s.a.createElement("div",{className:"container"},s.a.createElement("h2",{className:"section__header"},"How it works"),s.a.createElement("div",{className:"blocks-arrows"},s.a.createElement("div",{className:"blocks-arrows__item"},s.a.createElement("div",{className:"blocks-arrows__arrow"},"1"),"Start by creating a form using your openEHR template(s)"),s.a.createElement("div",{className:"blocks-arrows__item"},s.a.createElement("div",{className:"blocks-arrows__arrow"},"2"),"Customize it with any logic you need to meet UX requirements"),s.a.createElement("div",{className:"blocks-arrows__item"},s.a.createElement("div",{className:"blocks-arrows__arrow"},"3"),"Swiftly integrate form into your end user application"),s.a.createElement("div",{className:"blocks-arrows__item"},s.a.createElement("div",{className:"blocks-arrows__arrow"},"4"),"Save Compositions into your CDR")))),s.a.createElement("span",{id:"features"}),s.a.createElement("div",{className:"section section4"},s.a.createElement("div",{className:"container"},s.a.createElement("h2",{className:"section__header"},"Key features"),s.a.createElement("div",{className:"columns"},s.a.createElement("div",{className:"columns__item"},s.a.createElement("ul",{className:"list-markered"},s.a.createElement("li",{className:"list-markered__item"},"Simple form building process with maximum reusability and versatility in the process, that is possible without deep knowledge of openEHR specification"),s.a.createElement("li",{className:"list-markered__item"},"WYSIWYG UI building tool"),s.a.createElement("li",{className:"list-markered__item"},"Flexible components loosely coupled with EHR template"))),s.a.createElement("div",{className:"columns__item"},s.a.createElement("ul",{className:"list-markered"},s.a.createElement("li",{className:"list-markered__item"},"Rich component library with enough components to build most complicated forms"),s.a.createElement("li",{className:"list-markered__item"},"Most complicated components can be used - smart user assistan, 3D elements, charts")))))),s.a.createElement("div",{className:"section section5"},s.a.createElement("div",{className:"container section5__container"},s.a.createElement("div",{className:"columns-3"},s.a.createElement("div",{className:"columns-3__item"},s.a.createElement("div",{className:"columns-3__img columns-3__img_1"}),s.a.createElement("div",{className:"columns-3__header"},"10"),s.a.createElement("div",{className:"columns-3__text"},"applications developed and upgraded using EHR Forms")),s.a.createElement("div",{className:"columns-3__item"},s.a.createElement("div",{className:"columns-3__img columns-3__img_2"}),s.a.createElement("div",{className:"columns-3__header"},"200+"),s.a.createElement("div",{className:"columns-3__text"},"Forms created")),s.a.createElement("div",{className:"columns-3__item"},s.a.createElement("div",{className:"columns-3__img columns-3__img_3"}),s.a.createElement("div",{className:"columns-3__header"},"~30 000"),s.a.createElement("div",{className:"columns-3__text"},"clinicians and medical specialists are using these forms every day"))))),s.a.createElement("span",{id:"contact",name:"contact"}),s.a.createElement("div",{className:"footer"},s.a.createElement("div",{className:"container footer__container"},s.a.createElement("div",{className:"copyright"},s.a.createElement("span",null,"Copyright 2020"),s.a.createElement("div",{className:"logo-small"})),s.a.createElement(_,null))),s.a.createElement(f,{onClose:this.showModal,show:this.state.show}))}}]),t}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.432b1cea.chunk.js.map