toggleAccordeon=e=>{var t=e.nextSibling;console.log(t),t.classList.toggle("w3-hide"),e.classList.toggle("w3-hide")};const get=document.getElementById.bind(document),query=document.querySelector.bind(document),queryAll=document.querySelectorAll.bind(document),selectElementsByRegex=(t,e=document)=>{e=e.querySelectorAll("*");const i=[];return e.forEach(e=>{e.id&&e.id.match(t)&&i.push(e)}),i},replaceLinebreaks=e=>{return e.replace(/(\\n\\r|\\n|\\r)+/g,"<br/>")},getQueryStringValue=e=>{console.log(`->getQueryStringValue(${e})`),e=e.replace(/[*+?^$.\[\]{}()|\\\/]/g,"\\$&");e=location.search.match(new RegExp("[?&]"+e+"=([^&]+)(&|$)"));return e&&decodeURIComponent(e[1].replace(/\+/g," "))};function windowResized(){var t,e=document.querySelectorAll("#navigation img"),i=document.querySelectorAll("#navigation p"),o=document.querySelectorAll(".nav-title"),n=document.getElementById("text-text"),a=document.getElementById("text-search"),l=document.getElementById("text"),s=window.innerHeight,d=window.innerWidth;e.forEach(function(e){e.classList.add("d-none")}),i.forEach(function(e){e.classList.add("d-none")}),1200<d?800<s?(i.forEach(function(e){e.classList.remove("d-none")}),e.forEach(function(e){e.classList.remove("d-none")})):600<s&&e.forEach(function(e){e.classList.remove("d-none")}):1200<s?(i.forEach(function(e){e.classList.remove("d-none")}),e.forEach(function(e){e.classList.remove("d-none")})):800<s&&e.forEach(function(e){e.classList.remove("d-none")}),d<768?(document.getElementById("navigation").classList.remove("fixed-bottom"),l&&(l.classList.remove("desktop"),l.style.height="")):(document.getElementById("navigation").classList.add("fixed-bottom"),l&&(l.classList.add("desktop"),l.style.height=s-document.getElementById("navigation").offsetHeight+"px")),d<576?o.forEach(function(e){e.style.height=""}):(t=0,o.forEach(function(e){e.style.height="";e=e.offsetHeight;t=t<e?e:t}),o.forEach(function(e){e.style.height=t+"px"})),n&&(n.style.height="",n.offsetHeight<a.offsetHeight)&&(n.style.height=a.offsetHeight+"px")}var doit;window.addEventListener("load",function(){windowResized()}),window.addEventListener("resize",function(){clearTimeout(doit),doit=setTimeout(windowResized,100)}),window.addEventListener("scroll",function(){const t={logo:document.getElementById("logo"),navigation:document.getElementById("navigation")};Object.keys(t).forEach(e=>{e=t[e];e&&(0<window.scrollY?e.classList.add("scrolled"):e.classList.remove("scrolled"))})}),console.log("resize loaded successfully");class Validator{constructor(e){this.formE=e,this.inputs=this.formE.querySelectorAll("input[validator], input[required]"),this.valid=!1,this.setup()}setup(){this.inputs.forEach(e=>{e.addEventListener("input",this.validate.bind(this))}),this.formE.addEventListener("submit",this.validate.bind(this))}validate(e){console.log("validate",e),this.valid=!0,this.inputs.forEach(e=>{this.validateInput(e)}),this.valid||(console.log("preventDefault"),e.preventDefault())}validateInput(e){var t=e.getAttribute("validator"),i=e.getAttribute("required");return console.log("validateInput",{validator:t,required:i}),!(""===i&&(console.log("validateRequired",e),!this.validateRequired(e))||"email"===t&&(console.log("validateEmail",e),!this.validateEmail(e)))}validateEmail(e){var t=e.value,t=/^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/.test(t);return this.setValidity(e,t),t}validateRequired(e){var t=0<e.value.length;return this.setValidity(e,t),t}setValidity(e,t){console.log("setValidity",e,t),t?e.classList.remove("wwii-invalid"):(e.classList.add("wwii-invalid"),this.valid=!1)}}
//# sourceMappingURL=script.js.map