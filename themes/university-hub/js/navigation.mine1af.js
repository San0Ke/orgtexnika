!function(){var e,n,t,a,s,i=document.getElementById("site-navigation");if(i&&void 0!==(e=i.getElementsByTagName("button")[0]))if(void 0===(n=i.getElementsByTagName("ul")[0]))e.style.display="none";else{for(n.setAttribute("aria-expanded","false"),-1===n.className.indexOf("nav-menu")&&(n.className+=" nav-menu"),e.onclick=function(){-1!==i.className.indexOf("toggled")?(i.className=i.className.replace(" toggled",""),e.setAttribute("aria-expanded","false"),n.setAttribute("aria-expanded","false")):(i.className+=" toggled",e.setAttribute("aria-expanded","true"),n.setAttribute("aria-expanded","true"))},a=0,s=(t=n.getElementsByTagName("a")).length;a<s;a++)t[a].addEventListener("focus",l,!0),t[a].addEventListener("blur",l,!0);var o,r,u=i.querySelectorAll(".menu-item-has-children > a, .page_item_has_children > a");if("ontouchstart"in window)for(o=function(e){var n,t=this.parentNode;if(t.classList.contains("focus"))t.classList.remove("focus");else{for(e.preventDefault(),n=0;n<t.parentNode.children.length;++n)t!==t.parentNode.children[n]&&t.parentNode.children[n].classList.remove("focus");t.classList.add("focus")}},r=0;r<u.length;++r)u[r].addEventListener("touchstart",o,!1)}function l(){for(var e=this;-1===e.className.indexOf("nav-menu");)"li"===e.tagName.toLowerCase()&&(-1!==e.className.indexOf("focus")?e.className=e.className.replace(" focus",""):e.className+=" focus"),e=e.parentElement}}(),function(){"use strict";jQuery(document).ready(function(a){var e,n,t,s,i,o,r;function u(e){var n=a("<button />",{class:"dropdown-toggle","aria-expanded":!1}).append(a("<span />",{class:"screen-reader-text",text:universityHubOptions.screenReaderText.expand}));e.find(".menu-item-has-children > a, .page_item_has_children > a").after(n),e.find(".current-menu-ancestor > button").addClass("toggled-on"),e.find(".current-menu-ancestor > .sub-menu").addClass("toggled-on"),e.find(".menu-item-has-children, .page_item_has_children").attr("aria-haspopup","true"),e.find(".dropdown-toggle").on("click",function(e){var n=a(this),t=n.find(".screen-reader-text");e.preventDefault(),n.toggleClass("toggled-on"),n.attr("aria-expanded","false"===n.attr("aria-expanded")?"true":"false"),t.text(t.text()===universityHubOptions.screenReaderText.expand?universityHubOptions.screenReaderText.collapse:universityHubOptions.screenReaderText.expand)})}function l(){910<=window.innerWidth?(a(document.body).on("touchstart.universityHub",function(e){a(e.target).closest(".main-navigation li").length||a(".main-navigation li").removeClass("focus")}),t.find(".menu-item-has-children > a, .page_item_has_children > a").on("touchstart.universityHub",function(e){var n=a(this).parent("li");n.hasClass("focus")||(e.preventDefault(),n.toggleClass("focus"),n.siblings(".focus").removeClass("focus"))})):t.find(".menu-item-has-children > a, .page_item_has_children > a").unbind("touchstart.universityHub")}function d(){910<=window.innerWidth?(a(document.body).on("touchstart.universityHub",function(e){a(e.target).closest(".top-navigation li").length||a(".top-navigation li").removeClass("focus")}),i.find(".menu-item-has-children > a, .page_item_has_children > a").on("touchstart.universityHub",function(e){var n=a(this).parent("li");n.hasClass("focus")||(e.preventDefault(),n.toggleClass("focus"),n.siblings(".focus").removeClass("focus"))})):i.find(".menu-item-has-children > a, .page_item_has_children > a").unbind("touchstart.universityHub")}jQuery(window).on("load.universityHub resize.universityHub",function(){window.innerWidth<1200&&jQuery("#main-navigation").on("focusout",function(){var e=jQuery(this);setTimeout(function(){e.find(":focus").length||jQuery("#main-navigation #menu-toggle").trigger("click")},0)})}),u(e=a("#main-nav")),n=e.find(".menu-toggle"),t=e.find("#site-navigation"),o=0,n.length&&(n.on("click.universityHub",function(){a(this).add(t).attr("aria-expanded","false"===a(this).add(t).attr("aria-expanded")?"true":"false")}),n.add(t).attr("aria-expanded","false"),n.on("click.universityHub",function(){var e=a(this).parents(".menu-wrapper"),e=(a(n).not(this).removeClass("selected"),a(".menu-wrapper").not(e).removeClass("is-open"),a(this).toggleClass("selected"),a(e).toggleClass("is-open"),a(e).hasClass("is-open"));e&&!jQuery("body").hasClass("menu-open")?(0===o&&(o=a("body").scrollTop()),a("body").addClass("menu-open")):e||(a("body").removeClass("menu-open"),a("body").scrollTop(o),o=0)}),a(document).on("click touchstart",function(){a("body").removeClass("menu-open"),a(n).removeClass("selected"),a(".menu-wrapper").removeClass("is-open")}),a("#main-nav").on("click touchstart",function(e){e.stopPropagation()})),t.length&&t.children().length&&("ontouchstart"in window&&(a(window).on("resize.universityHub",l),l()),t.find("a").on("focus.universityHub blur.universityHub",function(){a(this).parents(".menu-item, .page_item").toggleClass("focus")}),a(".main-navigation button.dropdown-toggle").on("click",function(){a(this).toggleClass("active"),a(this).parent().find(".children, .sub-menu").first().toggleClass("toggled-on")})),u(e=a("#top-nav")),s=e.find(".menu-toggle"),i=e.find("#site-top-navigation"),r=0,s.length&&(s.on("click.universityHub",function(){a(this).add(i).attr("aria-expanded","false"===a(this).add(i).attr("aria-expanded")?"true":"false")}),s.add(i).attr("aria-expanded","false"),s.on("click.universityHub",function(){var e=a(this).parents(".menu-wrapper"),e=(a(s).not(this).removeClass("selected"),a(".menu-wrapper").not(e).removeClass("is-open"),a(this).toggleClass("selected"),a(e).toggleClass("is-open"),a(e).hasClass("is-open"));e&&!jQuery("body").hasClass("menu-open")?(0===r&&(r=a("body").scrollTop()),a("body").addClass("menu-open")):e||(a("body").removeClass("menu-open"),a("body").scrollTop(r),r=0)}),a(document).on("click touchstart",function(){a("body").removeClass("menu-open"),a(s).removeClass("selected"),a(".menu-wrapper").removeClass("is-open")}),a("#top-nav").on("click touchstart",function(e){e.stopPropagation()})),i.length&&i.children().length&&("ontouchstart"in window&&(a(window).on("resize.universityHub",d),d()),i.find("a").on("focus.universityHub blur.universityHub",function(){a(this).parents(".menu-item, .page_item").toggleClass("focus")}),a(".top-navigation button.dropdown-toggle").on("click",function(){a(this).toggleClass("active"),a(this).parent().find(".children, .sub-menu").first().toggleClass("toggled-on")}))})}();