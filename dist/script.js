function windowResized(){var t,e=document.querySelectorAll("#navigation img"),n=document.querySelectorAll("#navigation p"),o=document.querySelectorAll(".nav-title"),i=document.getElementById("text-text"),s=document.getElementById("text-search"),d=document.getElementById("text"),c=window.innerHeight,a=window.innerWidth;e.forEach(function(e){e.classList.add("d-none")}),n.forEach(function(e){e.classList.add("d-none")}),1200<a?800<c?(n.forEach(function(e){e.classList.remove("d-none")}),e.forEach(function(e){e.classList.remove("d-none")})):600<c&&e.forEach(function(e){e.classList.remove("d-none")}):1200<c?(n.forEach(function(e){e.classList.remove("d-none")}),e.forEach(function(e){e.classList.remove("d-none")})):800<c&&e.forEach(function(e){e.classList.remove("d-none")}),a<768?(document.getElementById("navigation").classList.remove("fixed-bottom"),d&&(d.classList.remove("desktop"),d.style.height="")):(document.getElementById("navigation").classList.add("fixed-bottom"),d&&(d.classList.add("desktop"),d.style.height=c-document.getElementById("navigation").offsetHeight+"px")),a<576?o.forEach(function(e){e.style.height=""}):(t=0,o.forEach(function(e){e.style.height="";e=e.offsetHeight;t=t<e?e:t}),o.forEach(function(e){e.style.height=t+"px"})),i&&(i.style.height="",i.offsetHeight<s.offsetHeight)&&(i.style.height=s.offsetHeight+"px")}var doit;window.addEventListener("load",function(){windowResized()}),window.addEventListener("resize",function(){clearTimeout(doit),doit=setTimeout(windowResized,100)});
//# sourceMappingURL=script.js.map