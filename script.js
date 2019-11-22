let enterBtn=document.querySelector(".enter");enterBtn.addEventListener("click",loadScreen);let randomNumber=Math.floor(701*Math.random())+1e3;function loadScreen(){document.getElementById("myAudio").play(),document.querySelector(".intro-screen").style.opacity="0",document.querySelector(".intro-screen").style.visibility="hidden",setTimeout(init,randomNumber)}window.matchMedia("(max-width: 700px)").matches&&document.querySelector(".container").classList.remove("open");let container=document.querySelector(".container"),hamburger=document.querySelector(".hamburger");function toggleMenu(){container.classList.toggle("open")}hamburger.addEventListener("click",toggleMenu);let vh=.01*window.innerHeight;document.documentElement.style.setProperty("--vh",`${vh}px`),window.addEventListener("resize",()=>{let e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh",`${e}px`)});let previous=0,actualItem=0;function init(){document.querySelector(".scroll-indicator").style.opacity="1";let e=0*window.innerHeight+window.innerHeight/2;document.querySelector(".scroll-container-wrapper").scrollTo(0,e);let t=document.querySelector(".scroll-container-wrapper");window.scrollTo(0,t.scrollTop);let o=document.querySelectorAll(".timeline__item");function n(e){setTimeout(function(){document.getElementById("t_"+e).scrollIntoView({behavior:"smooth",block:"center",inline:"center"})},750),document.getElementById("t_"+previous).classList.remove("active"),document.getElementById("t_"+e).classList.add("active"),previous=e,actualItem=e}function r(){actualItem>2&&(document.getElementById("t_"+(actualItem-2)).scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),actualItem-=2)}function l(){actualItem<o.length-2&&(document.getElementById("t_"+(actualItem+2)).scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),actualItem+=2)}document.querySelector(".loading-screen").classList.add("loading-display-none"),document.querySelector(".scroll-container-wrapper").addEventListener("scroll",function(){document.querySelector(".scroll-indicator").style.opacity="0";var e=document.querySelector(".scroll-container-wrapper");window.scrollTo(0,e.scrollTop)}),fetch("shoe-data.json").then(e=>e.json()).then(e=>(function(e){let t=[];t=function(){let e=window.innerHeight,o=1;for(i=0;i<15;i++){let n=e*i,r=e*o,l={};l.first=n,l.last=r,t.push(l),o++}return t}(),function(e){document.querySelector(".main").style.backgroundColor=e.NikeAirMax[0].backgroundColor,document.querySelector(".shoe-name").innerHTML=e.NikeAirMax[0].name,document.querySelector(".shoe-year").innerHTML=e.NikeAirMax[0].year,document.querySelector(".shoe-description").innerHTML=e.NikeAirMax[0].about,document.querySelector(".shoe-colorway").innerHTML=`<b>Original colorway:</b> ${e.NikeAirMax[0].colorway}`;let t=document.querySelectorAll(".colorway-cirlce");for(document.querySelector(".shoe-name").style.color="black",j=0;j<3;j++)t[j].style.backgroundColor=e.NikeAirMax[0].colors[j]}(e);let o=0;document.querySelector(".scroll-container-wrapper").addEventListener("scroll",function(){let r=getScrollPosition();!function(e,t,r){for(i=0;i<15;i++)if(t>=e[i].first&&t<=e[i].last&&o!==i){o=i,console.log(o),n(o),document.querySelectorAll(".animate").forEach(e=>{e.style.transition="0s",e.style.opacity="0",setTimeout(function(){e.style.transition="0.4s",e.style.opacity="1"},200)}),document.querySelector(".shoe-name").textContent=r.NikeAirMax[i].name,document.querySelector(".shoe-year").innerHTML=r.NikeAirMax[i].year,document.querySelector(".shoe-description").innerHTML=r.NikeAirMax[i].about,document.querySelector(".shoe-colorway").innerHTML=`<b>Original colorway:</b> ${r.NikeAirMax[i].colorway}`,document.querySelector(".main").style.backgroundColor=r.NikeAirMax[i].backgroundColor;let e=document.querySelectorAll(".colorway-cirlce");for(document.querySelector(".shoe-name").style.color="black",j=0;j<3;j++)e[j].style.backgroundColor=r.NikeAirMax[i].colors[j];return}}(t,r,e)})})(e)),function(){let e=15*window.innerHeight,t={container:document.getElementById("container"),renderer:"svg",loop:!1,autoplay:!1,path:"data.json"},o=bodymovin.loadAnimation(t);window.addEventListener("scroll",function(){!function(e,t){scrollPosition=getScrollPosition();let o=t.totalFrames/100*(scrollPosition/(e/100));t.goToAndStop(o,!0)}(e,o)})}(),function(){for(i=0;i<15;i++){let e=document.createElement("div");e.classList.add("scroll_container"),document.querySelector(".scroll-container-wrapper").appendChild(e)}}(),document.querySelector(".arrow__up").addEventListener("click",r),document.querySelector(".arrow__down").addEventListener("click",l),document.querySelectorAll(".timeline__item__mask").forEach(e=>{e.addEventListener("click",e=>{let t=window.matchMedia("(max-width: 900px)");t.matches&&setTimeout(function(){toggleMenu()},300);let o=e.target.getAttribute("data-screen"),n=window.innerHeight*o+window.innerHeight/2;document.querySelector(".scroll-container-wrapper").scrollTo(0,n),console.log(n)})}),function(){for(i=1;i<o.length-1;i++){let e=o[i+1].firstElementChild.nextElementSibling.innerHTML,t=o[i].firstElementChild.nextElementSibling.innerHTML,n=e-t;o[i].style.margin=5*n+25+"% 0",console.log(30*n),console.log(e)}}(),n(0)}function getScrollPosition(){return void 0!==window.pageXOffset?window.pageYOffset:isCSS1Compat?document.documentElement.scrollTop:document.body.scrollTop}