!function(){"use strict";function getNextImageFromUrlAnchor(){var url=window.location.href,idx=url.indexOf("#"),hash=idx!==-1?url.substring(idx+1):"";return hash}function getNextImageInGallery(){var hash=getNextImageFromUrlAnchor(),nextImage=document.getElementById(hash);return nextImage||(nextImage=document.querySelectorAll(".photo")[0]),nextImage}function getCurrentImageElementAndRemoveClass(){var currentImage=document.querySelectorAll(".photo.current")[0];return currentImage||(currentImage=document.querySelectorAll(".photo")[0]),currentImage.className=currentImage.className.replace(new RegExp("(^|\\b)"+"current".split(" ").join("|")+"(\\b|$)","gi")," "),currentImage}function setCurrentImage(){console.debug("setCurrentImage"),getCurrentImageElementAndRemoveClass();var nextImageEl=getNextImageInGallery();nextImageEl.className+=" current"}function nextImage(previousParam){event.preventDefault();var previous=previousParam===!0&&previousParam;console.debug("previous",previous);var currentImage=document.querySelectorAll(".photo.current")[0];currentImage.classList.remove("current");var nextImageEl;nextImageEl=previous?currentImage.previousElementSibling:currentImage.nextElementSibling,nextImageEl||(nextImageEl=document.querySelectorAll(".photo")[0]);var nextImageId=nextImageEl.id;return window.location.hash=nextImageId,nextImageEl.className+=" current",!1}function handleArrowKeys(event){var keyCode=event.keyCode,left=37,up=38,right=39,down=40;keyCode===right||keyCode===up?nextImage(!1):keyCode!==left&&keyCode!==down||nextImage(!0)}function loadImages(){var photoBlocks=document.querySelectorAll(".photo-block");photoBlocks.forEach(function(photoBlock){function onloadSmall(){mini.classList.add("loaded")}function onloadLarge(){mini.classList.remove("loaded"),imgLarge.classList.add("loaded")}var mini=photoBlock.querySelector(".photo-mini"),imgSmall=new Image;imgSmall.src=mini.src,imgSmall.onload=onloadSmall;var imgLarge=new Image;imgLarge.src=photoBlock.dataset.large,imgLarge.classList.add("photo-large"),photoBlock.appendChild(imgLarge),imgLarge.onload=onloadLarge})}function initResume(){function randomBetween(min,max){var number=Math.floor(Math.random()*(max-min+1)+min);return 0!==number?number:.5}for(var select=function(s){return document.querySelector(s)},tl=new TimelineMax,i=0;i<20;i++){var t=TweenMax.to(select(".bubble"+i),randomBetween(1,1.5),{x:randomBetween(12,15)*randomBetween(-1,1),y:randomBetween(12,15)*randomBetween(-1,1),repeat:-1,repeatDelay:randomBetween(.2,.5),yoyo:!0,ease:Elastic.easeOut.config(1,.5)});tl.add(t,(i+1)/.6)}tl.seek(50)}function init(){var galleryElement=document.getElementById("gallery");galleryElement&&(setCurrentImage(),loadImages(),galleryElement.addEventListener("click",nextImage),window.addEventListener("keydown",handleArrowKeys,!1)),initResume()}window.onload=init}(),function(){"use strict";function lazyloadRemainingImages(){[].forEach.call(document.querySelectorAll("img[data-src]"),function(img){var newSrc=img.getAttribute("data-src");img.setAttribute("src",newSrc),img.onload=function(){img.removeAttribute("data-src")}})}function lazyloadUpsize(){var mq=window.matchMedia("(min-width: 800px)");mq.matches&&[].forEach.call(document.querySelectorAll("img[data-big]"),function(img){img.setAttribute("src",img.getAttribute("data-big"))})}document.addEventListener("DOMContentLoaded",lazyloadRemainingImages),window.addEventListener("load",lazyloadUpsize)}(),function(w){"use strict";var loadCSS=function(href,before,media){function ready(cb){return doc.body?cb():void setTimeout(function(){ready(cb)})}function loadCB(){ss.addEventListener&&ss.removeEventListener("load",loadCB),ss.media=media||"all"}var ref,doc=w.document,ss=doc.createElement("link");if(before)ref=before;else{var refs=(doc.body||doc.getElementsByTagName("head")[0]).childNodes;ref=refs[refs.length-1]}var sheets=doc.styleSheets;ss.rel="stylesheet",ss.href=href,ss.media="only x",ready(function(){ref.parentNode.insertBefore(ss,before?ref:ref.nextSibling)});var onloadcssdefined=function(cb){for(var resolvedHref=ss.href,i=sheets.length;i--;)if(sheets[i].href===resolvedHref)return cb();setTimeout(function(){onloadcssdefined(cb)})};return ss.addEventListener&&ss.addEventListener("load",loadCB),ss.onloadcssdefined=onloadcssdefined,onloadcssdefined(loadCB),ss};"undefined"!=typeof exports?exports.loadCSS=loadCSS:w.loadCSS=loadCSS}("undefined"!=typeof global?global:this),function(w){if(w.loadCSS){var rp=loadCSS.relpreload={};if(rp.support=function(){try{return w.document.createElement("link").relList.supports("preload")}catch(e){return!1}},rp.poly=function(){for(var links=w.document.getElementsByTagName("link"),i=0;i<links.length;i++){var link=links[i];"preload"===link.rel&&"style"===link.getAttribute("as")&&(w.loadCSS(link.href,link,link.getAttribute("media")),link.rel=null)}},!rp.support()){rp.poly();var run=w.setInterval(rp.poly,300);w.addEventListener&&w.addEventListener("load",function(){rp.poly(),w.clearInterval(run)}),w.attachEvent&&w.attachEvent("onload",function(){w.clearInterval(run)})}}}(this);