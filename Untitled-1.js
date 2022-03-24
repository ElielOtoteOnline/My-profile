<!DOCTYPE html>
<html xmlns="https://www.w3.org/1999/xhtml" lang="en-US">
<head profile="https://gmpg.org/xfn/11"><meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /><script type="3c362d92d019cfdf947d8c29-text/javascript">if(navigator.userAgent.match(/MSIE|Internet Explorer/i)||navigator.userAgent.match(/Trident\/7\..*?rv:11/i)){var href=document.location.href;if(!href.match(/[?&]nowprocket/)){if(href.indexOf("?")==-1){if(href.indexOf("#")==-1){document.location.href=href+"?nowprocket=1"}else{document.location.href=href.replace("#","?nowprocket=1#")}}else{if(href.indexOf("#")==-1){document.location.href=href+"&nowprocket=1"}else{document.location.href=href.replace("#","&nowprocket=1#")}}}}</script><script type="3c362d92d019cfdf947d8c29-text/javascript">class RocketLazyLoadScripts{constructor(){this.triggerEvents=["keydown","mousedown","mousemove","touchmove","touchstart","touchend","wheel"],this.userEventHandler=this._triggerListener.bind(this),this.touchStartHandler=this._onTouchStart.bind(this),this.touchMoveHandler=this._onTouchMove.bind(this),this.touchEndHandler=this._onTouchEnd.bind(this),this.clickHandler=this._onClick.bind(this),this.interceptedClicks=[],window.addEventListener("pageshow",(e=>{this.persisted=e.persisted})),window.addEventListener("DOMContentLoaded",(()=>{this._preconnect3rdParties()})),this.delayedScripts={normal:[],async:[],defer:[]},this.allJQueries=[]}_addUserInteractionListener(e){document.hidden?e._triggerListener():(this.triggerEvents.forEach((t=>window.addEventListener(t,e.userEventHandler,{passive:!0}))),window.addEventListener("touchstart",e.touchStartHandler,{passive:!0}),window.addEventListener("mousedown",e.touchStartHandler),document.addEventListener("visibilitychange",e.userEventHandler))}_removeUserInteractionListener(){this.triggerEvents.forEach((e=>window.removeEventListener(e,this.userEventHandler,{passive:!0}))),document.removeEventListener("visibilitychange",this.userEventHandler)}_onTouchStart(e){"HTML"!==e.target.tagName&&(window.addEventListener("touchend",this.touchEndHandler),window.addEventListener("mouseup",this.touchEndHandler),window.addEventListener("touchmove",this.touchMoveHandler,{passive:!0}),window.addEventListener("mousemove",this.touchMoveHandler),e.target.addEventListener("click",this.clickHandler),this._renameDOMAttribute(e.target,"onclick","rocket-onclick"))}_onTouchMove(e){window.removeEventListener("touchend",this.touchEndHandler),window.removeEventListener("mouseup",this.touchEndHandler),window.removeEventListener("touchmove",this.touchMoveHandler,{passive:!0}),window.removeEventListener("mousemove",this.touchMoveHandler),e.target.removeEventListener("click",this.clickHandler),this._renameDOMAttribute(e.target,"rocket-onclick","onclick")}_onTouchEnd(e){window.removeEventListener("touchend",this.touchEndHandler),window.removeEventListener("mouseup",this.touchEndHandler),window.removeEventListener("touchmove",this.touchMoveHandler,{passive:!0}),window.removeEventListener("mousemove",this.touchMoveHandler)}_onClick(e){e.target.removeEventListener("click",this.clickHandler),this._renameDOMAttribute(e.target,"rocket-onclick","onclick"),this.interceptedClicks.push(e),e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation()}_replayClicks(){window.removeEventListener("touchstart",this.touchStartHandler,{passive:!0}),window.removeEventListener("mousedown",this.touchStartHandler),this.interceptedClicks.forEach((e=>{e.target.dispatchEvent(new MouseEvent("click",{view:e.view,bubbles:!0,cancelable:!0}))}))}_renameDOMAttribute(e,t,n){e.hasAttribute&&e.hasAttribute(t)&&(event.target.setAttribute(n,event.target.getAttribute(t)),event.target.removeAttribute(t))}_triggerListener(){this._removeUserInteractionListener(this),"loading"===document.readyState?document.addEventListener("DOMContentLoaded",this._loadEverythingNow.bind(this)):this._loadEverythingNow()}_preconnect3rdParties(){let e=[];document.querySelectorAll("script[type=rocketlazyloadscript]").forEach((t=>{if(t.hasAttribute("src")){const n=new URL(t.src).origin;n!==location.origin&&e.push({src:n,crossOrigin:t.crossOrigin||"module"===t.getAttribute("data-rocket-type")})}})),e=[...new Map(e.map((e=>[JSON.stringify(e),e]))).values()],this._batchInjectResourceHints(e,"preconnect")}async _loadEverythingNow(){this.lastBreath=Date.now(),this._delayEventListeners(),this._delayJQueryReady(this),this._handleDocumentWrite(),this._registerAllDelayedScripts(),this._preloadAllScripts(),await this._loadScriptsFromList(this.delayedScripts.normal),await this._loadScriptsFromList(this.delayedScripts.defer),await this._loadScriptsFromList(this.delayedScripts.async);try{await this._triggerDOMContentLoaded(),await this._triggerWindowLoad()}catch(e){}window.dispatchEvent(new Event("rocket-allScriptsLoaded")),this._replayClicks()}_registerAllDelayedScripts(){document.querySelectorAll("script[type=rocketlazyloadscript]").forEach((e=>{e.hasAttribute("src")?e.hasAttribute("async")&&!1!==e.async?this.delayedScripts.async.push(e):e.hasAttribute("defer")&&!1!==e.defer||"module"===e.getAttribute("data-rocket-type")?this.delayedScripts.defer.push(e):this.delayedScripts.normal.push(e):this.delayedScripts.normal.push(e)}))}async _transformScript(e){return await this._littleBreath(),new Promise((t=>{const n=document.createElement("script");[...e.attributes].forEach((e=>{let t=e.nodeName;"type"!==t&&("data-rocket-type"===t&&(t="type"),n.setAttribute(t,e.nodeValue))})),e.hasAttribute("src")?(n.addEventListener("load",t),n.addEventListener("error",t)):(n.text=e.text,t());try{e.parentNode.replaceChild(n,e)}catch(e){t()}}))}async _loadScriptsFromList(e){const t=e.shift();return t?(await this._transformScript(t),this._loadScriptsFromList(e)):Promise.resolve()}_preloadAllScripts(){this._batchInjectResourceHints([...this.delayedScripts.normal,...this.delayedScripts.defer,...this.delayedScripts.async],"preload")}_batchInjectResourceHints(e,t){var n=document.createDocumentFragment();e.forEach((e=>{if(e.src){const i=document.createElement("link");i.href=e.src,i.rel=t,"preconnect"!==t&&(i.as="script"),e.getAttribute&&"module"===e.getAttribute("data-rocket-type")&&(i.crossOrigin=!0),e.crossOrigin&&(i.crossOrigin=e.crossOrigin),n.appendChild(i)}})),document.head.appendChild(n)}_delayEventListeners(){let e={};function t(t,n){!function(t){function n(n){return e[t].eventsToRewrite.indexOf(n)>=0?"rocket-"+n:n}e[t]||(e[t]={originalFunctions:{add:t.addEventListener,remove:t.removeEventListener},eventsToRewrite:[]},t.addEventListener=function(){arguments[0]=n(arguments[0]),e[t].originalFunctions.add.apply(t,arguments)},t.removeEventListener=function(){arguments[0]=n(arguments[0]),e[t].originalFunctions.remove.apply(t,arguments)})}(t),e[t].eventsToRewrite.push(n)}function n(e,t){let n=e[t];Object.defineProperty(e,t,{get:()=>n||function(){},set(i){e["rocket"+t]=n=i}})}t(document,"DOMContentLoaded"),t(window,"DOMContentLoaded"),t(window,"load"),t(window,"pageshow"),t(document,"readystatechange"),n(document,"onreadystatechange"),n(window,"onload"),n(window,"onpageshow")}_delayJQueryReady(e){let t=window.jQuery;Object.defineProperty(window,"jQuery",{get:()=>t,set(n){if(n&&n.fn&&!e.allJQueries.includes(n)){n.fn.ready=n.fn.init.prototype.ready=function(t){e.domReadyFired?t.bind(document)(n):document.addEventListener("rocket-DOMContentLoaded",(()=>t.bind(document)(n)))};const t=n.fn.on;n.fn.on=n.fn.init.prototype.on=function(){if(this[0]===window){function e(e){return e.split(" ").map((e=>"load"===e||0===e.indexOf("load.")?"rocket-jquery-load":e)).join(" ")}"string"==typeof arguments[0]||arguments[0]instanceof String?arguments[0]=e(arguments[0]):"object"==typeof arguments[0]&&Object.keys(arguments[0]).forEach((t=>{delete Object.assign(arguments[0],{[e(t)]:arguments[0][t]})[t]}))}return t.apply(this,arguments),this},e.allJQueries.push(n)}t=n}})}async _triggerDOMContentLoaded(){this.domReadyFired=!0,await this._littleBreath(),document.dispatchEvent(new Event("rocket-DOMContentLoaded")),await this._littleBreath(),window.dispatchEvent(new Event("rocket-DOMContentLoaded")),await this._littleBreath(),document.dispatchEvent(new Event("rocket-readystatechange")),await this._littleBreath(),document.rocketonreadystatechange&&document.rocketonreadystatechange()}async _triggerWindowLoad(){await this._littleBreath(),window.dispatchEvent(new Event("rocket-load")),await this._littleBreath(),window.rocketonload&&window.rocketonload(),await this._littleBreath(),this.allJQueries.forEach((e=>e(window).trigger("rocket-jquery-load"))),await this._littleBreath();const e=new Event("rocket-pageshow");e.persisted=this.persisted,window.dispatchEvent(e),await this._littleBreath(),window.rocketonpageshow&&window.rocketonpageshow({persisted:this.persisted})}_handleDocumentWrite(){const e=new Map;document.write=document.writeln=function(t){const n=document.currentScript,i=document.createRange(),r=n.parentElement;let o=e.get(n);void 0===o&&(o=n.nextSibling,e.set(n,o));const s=document.createDocumentFragment();i.setStart(s,0),s.appendChild(i.createContextualFragment(t)),r.insertBefore(s,o)}}async _littleBreath(){Date.now()-this.lastBreath>45&&(await this._requestAnimFrame(),this.lastBreath=Date.now())}async _requestAnimFrame(){return document.hidden?new Promise((e=>setTimeout(e))):new Promise((e=>requestAnimationFrame(e)))}static run(){const e=new RocketLazyLoadScripts;e._addUserInteractionListener(e)}}RocketLazyLoadScripts.run();</script>
<meta name=viewport content="width=device-width, initial-scale=1">

<title>  Top Programming Languages and Their Uses - KDnuggets</title><link rel="stylesheet" href="https://www.kdnuggets.com/wp-content/cache/min/1/e3b30486c2f8274acebb6a0cc5feb8a0.css" media="all" data-minify="1" />
<link rel="shortcut icon" href="/wp-content/themes/kdn17/images/favicon.ico" />


<link rel="alternate" type="application/rss+xml" title="KDnuggets: AI, Analytics, Data Science, Machine Learning Feed" href="/feed/" />
<meta name="description" content="The landscape of programming languages is rich and expanding, which can make it tricky to focus on just one or another for your career. We highlight some of the most popular languages that are modern, widely used, and come with loads of packages or libraries that will help you be&hellip;" />
<meta name="robots" content="index, follow" />
<meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
<meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
<link rel="canonical" href="https://www.kdnuggets.com/2021/05/top-programming-languages.html" />
<meta property="og:url" content="https://www.kdnuggets.com/top-programming-languages-and-their-uses.html/" />
<meta property="og:site_name" content="KDnuggets" />
<meta property="og:locale" content="en_US" />
<meta property="og:type" content="article" />
<meta property="article:author" content="https://www.facebook.com/kdnuggets" />
<meta property="article:publisher" content="https://www.facebook.com/kdnuggets" />
<meta property="article:section" content="KDnuggets Originals" />
<meta property="article:tag" content="kdn-rewards" />
<meta property="article:tag" content="Programming" />
<meta property="og:title" content="Top Programming Languages and Their Uses - KDnuggets" />
<meta property="og:description" content="The landscape of programming languages is rich and expanding, which can make it tricky to focus on just one or another for your career. We highlight some of the most popular languages that are modern, widely used, and come with loads of packages or libraries that will help you be&hellip;" />
<meta property="og:image" content="https://www.kdnuggets.com/wp-content/uploads/Costa_top-programming-languages.jpg" />
<meta property="og:image:secure_url" content="https://www.kdnuggets.com/wp-content/uploads/Costa_top-programming-languages.jpg" />
<meta property="og:image:width" content="700" />
<meta property="og:image:height" content="466" />
<meta name="twitter:card" content="summary" />
<meta name="twitter:site" content="@kdnuggets" />
<meta name="twitter:creator" content="@kdnuggets" />
<meta name="twitter:title" content="Top Programming Languages and Their Uses - KDnuggets" />
<meta name="twitter:description" content="The landscape of programming languages is rich and expanding, which can make it tricky to focus on just one or another for your career. We highlight some of the most popular languages that are modern, widely used, and come with loads of packages or libraries that will help you be&hellip;" />
<meta name="twitter:image" content="https://www.kdnuggets.com/wp-content/uploads/Costa_top-programming-languages.jpg" />
<link rel="alternate" type="application/rss+xml" title="KDnuggets &raquo; Feed" href="https://www.kdnuggets.com/feed" />
<link rel="alternate" type="application/rss+xml" title="KDnuggets &raquo; Comments Feed" href="https://www.kdnuggets.com/comments/feed" />
<link rel="alternate" type="application/rss+xml" title="KDnuggets &raquo; Top Programming Languages and Their Uses Comments Feed" href="https://www.kdnuggets.com/2021/05/top-programming-languages.html/feed" />

<script src="//www.googletagmanager.com/gtag/js?id=UA-361129-1" data-cfasync="false" data-wpfc-render="false" type="text/javascript" async></script>
<script data-cfasync="false" data-wpfc-render="false" type="text/javascript">
				var mi_version = '8.4.0';
				var mi_track_user = true;
				var mi_no_track_reason = '';
				
								var disableStrs = [
															'ga-disable-UA-361129-1',
									];

				/* Function to detect opted out users */
				function __gtagTrackerIsOptedOut() {
					for ( var index = 0; index < disableStrs.length; index++ ) {
						if ( document.cookie.indexOf( disableStrs[ index ] + '=true' ) > -1 ) {
							return true;
						}
					}

					return false;
				}

				/* Disable tracking if the opt-out cookie exists. */
				if ( __gtagTrackerIsOptedOut() ) {
					for ( var index = 0; index < disableStrs.length; index++ ) {
						window[ disableStrs[ index ] ] = true;
					}
				}

				/* Opt-out function */
				function __gtagTrackerOptout() {
					for ( var index = 0; index < disableStrs.length; index++ ) {
						document.cookie = disableStrs[ index ] + '=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/';
						window[ disableStrs[ index ] ] = true;
					}
				}

				if ( 'undefined' === typeof gaOptout ) {
					function gaOptout() {
						__gtagTrackerOptout();
					}
				}
								window.dataLayer = window.dataLayer || [];

				window.MonsterInsightsDualTracker = {
					helpers: {},
					trackers: {},
				};
				if ( mi_track_user ) {
					function __gtagDataLayer() {
						dataLayer.push( arguments );
					}

					function __gtagTracker( type, name, parameters ) {
						if (!parameters) {
							parameters = {};
						}

						if (parameters.send_to) {
							__gtagDataLayer.apply( null, arguments );
							return;
						}

						if ( type === 'event' ) {
							
															parameters.send_to = monsterinsights_frontend.ua;
								__gtagDataLayer( type, name, parameters );
													} else {
							__gtagDataLayer.apply( null, arguments );
						}
					}
					__gtagTracker( 'js', new Date() );
					__gtagTracker( 'set', {
						'developer_id.dZGIzZG' : true,
											} );
															__gtagTracker( 'config', 'UA-361129-1', {"forceSSL":"true","link_attribution":"true","dimension1":"kdn-rewards,Programming","dimension2":"kdnuggets-originals","dimension3":"Claire D. Costa","dimension4":"post"} );
										window.gtag = __gtagTracker;											(function () {
							/* https://developers.google.com/analytics/devguides/collection/analyticsjs/ */
							/* ga and __gaTracker compatibility shim. */
							var noopfn = function () {
								return null;
							};
							var newtracker = function () {
								return new Tracker();
							};
							var Tracker = function () {
								return null;
							};
							var p = Tracker.prototype;
							p.get = noopfn;
							p.set = noopfn;
							p.send = function (){
								var args = Array.prototype.slice.call(arguments);
								args.unshift( 'send' );
								__gaTracker.apply(null, args);
							};
							var __gaTracker = function () {
								var len = arguments.length;
								if ( len === 0 ) {
									return;
								}
								var f = arguments[len - 1];
								if ( typeof f !== 'object' || f === null || typeof f.hitCallback !== 'function' ) {
									if ( 'send' === arguments[0] ) {
										var hitConverted, hitObject = false, action;
										if ( 'event' === arguments[1] ) {
											if ( 'undefined' !== typeof arguments[3] ) {
												hitObject = {
													'eventAction': arguments[3],
													'eventCategory': arguments[2],
													'eventLabel': arguments[4],
													'value': arguments[5] ? arguments[5] : 1,
												}
											}
										}
										if ( 'pageview' === arguments[1] ) {
											if ( 'undefined' !== typeof arguments[2] ) {
												hitObject = {
													'eventAction': 'page_view',
													'page_path' : arguments[2],
												}
											}
										}
										if ( typeof arguments[2] === 'object' ) {
											hitObject = arguments[2];
										}
										if ( typeof arguments[5] === 'object' ) {
											Object.assign( hitObject, arguments[5] );
										}
										if ( 'undefined' !== typeof arguments[1].hitType ) {
											hitObject = arguments[1];
											if ( 'pageview' === hitObject.hitType ) {
												hitObject.eventAction = 'page_view';
											}
										}
										if ( hitObject ) {
											action = 'timing' === arguments[1].hitType ? 'timing_complete' : hitObject.eventAction;
											hitConverted = mapArgs( hitObject );
											__gtagTracker( 'event', action, hitConverted );
										}
									}
									return;
								}

								function mapArgs( args ) {
									var arg, hit = {};
									var gaMap = {
										'eventCategory': 'event_category',
										'eventAction': 'event_action',
										'eventLabel': 'event_label',
										'eventValue': 'event_value',
										'nonInteraction': 'non_interaction',
										'timingCategory': 'event_category',
										'timingVar': 'name',
										'timingValue': 'value',
										'timingLabel': 'event_label',
										'page' : 'page_path',
										'location' : 'page_location',
										'title' : 'page_title',
									};
									for ( arg in args ) {
																				if ( ! ( ! args.hasOwnProperty(arg) || ! gaMap.hasOwnProperty(arg) ) ) {
											hit[gaMap[arg]] = args[arg];
										} else {
											hit[arg] = args[arg];
										}
									}
									return hit;
								}

								try {
									f.hitCallback();
								} catch ( ex ) {
								}
							};
							__gaTracker.create = newtracker;
							__gaTracker.getByName = newtracker;
							__gaTracker.getAll = function () {
								return [];
							};
							__gaTracker.remove = noopfn;
							__gaTracker.loaded = true;
							window['__gaTracker'] = __gaTracker;
						})();
									} else {
										console.log( "" );
					( function () {
							function __gtagTracker() {
								return null;
							}
							window['__gtagTracker'] = __gtagTracker;
							window['gtag'] = __gtagTracker;
					} )();
									}
			</script>

<script id="kdnug-ready" type="3c362d92d019cfdf947d8c29-text/javascript">
			window.advanced_ads_ready=function(e,a){a=a||"complete";var d=function(e){return"interactive"===a?"loading"!==e:"complete"===e};d(document.readyState)?e():document.addEventListener("readystatechange",(function(a){d(a.target.readyState)&&e()}),{once:"interactive"===a})},window.advanced_ads_ready_queue=window.advanced_ads_ready_queue||[];		</script>

<style id='global-styles-inline-css' type='text/css'>
body{--wp--preset--color--black: #000000;--wp--preset--color--cyan-bluish-gray: #abb8c3;--wp--preset--color--white: #ffffff;--wp--preset--color--pale-pink: #f78da7;--wp--preset--color--vivid-red: #cf2e2e;--wp--preset--color--luminous-vivid-orange: #ff6900;--wp--preset--color--luminous-vivid-amber: #fcb900;--wp--preset--color--light-green-cyan: #7bdcb5;--wp--preset--color--vivid-green-cyan: #00d084;--wp--preset--color--pale-cyan-blue: #8ed1fc;--wp--preset--color--vivid-cyan-blue: #0693e3;--wp--preset--color--vivid-purple: #9b51e0;--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%);--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%);--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%);--wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%);--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%);--wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%);--wp--preset--gradient--blush-light-purple: linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%);--wp--preset--gradient--blush-bordeaux: linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%);--wp--preset--gradient--luminous-dusk: linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%);--wp--preset--gradient--pale-ocean: linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%);--wp--preset--gradient--electric-grass: linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%);--wp--preset--gradient--midnight: linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%);--wp--preset--duotone--dark-grayscale: url('#wp-duotone-dark-grayscale');--wp--preset--duotone--grayscale: url('#wp-duotone-grayscale');--wp--preset--duotone--purple-yellow: url('#wp-duotone-purple-yellow');--wp--preset--duotone--blue-red: url('#wp-duotone-blue-red');--wp--preset--duotone--midnight: url('#wp-duotone-midnight');--wp--preset--duotone--magenta-yellow: url('#wp-duotone-magenta-yellow');--wp--preset--duotone--purple-green: url('#wp-duotone-purple-green');--wp--preset--duotone--blue-orange: url('#wp-duotone-blue-orange');--wp--preset--font-size--small: 13px;--wp--preset--font-size--medium: 20px;--wp--preset--font-size--large: 36px;--wp--preset--font-size--x-large: 42px;}.has-black-color{color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-color{color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-color{color: var(--wp--preset--color--white) !important;}.has-pale-pink-color{color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-color{color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-color{color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-color{color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-color{color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-color{color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-color{color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-color{color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-color{color: var(--wp--preset--color--vivid-purple) !important;}.has-black-background-color{background-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-background-color{background-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-background-color{background-color: var(--wp--preset--color--white) !important;}.has-pale-pink-background-color{background-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-background-color{background-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-background-color{background-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-background-color{background-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-background-color{background-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-background-color{background-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-background-color{background-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-background-color{background-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-background-color{background-color: var(--wp--preset--color--vivid-purple) !important;}.has-black-border-color{border-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-border-color{border-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-border-color{border-color: var(--wp--preset--color--white) !important;}.has-pale-pink-border-color{border-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-border-color{border-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-border-color{border-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-border-color{border-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-border-color{border-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-border-color{border-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-border-color{border-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-border-color{border-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-border-color{border-color: var(--wp--preset--color--vivid-purple) !important;}.has-vivid-cyan-blue-to-vivid-purple-gradient-background{background: var(--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple) !important;}.has-light-green-cyan-to-vivid-green-cyan-gradient-background{background: var(--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan) !important;}.has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange) !important;}.has-luminous-vivid-orange-to-vivid-red-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-orange-to-vivid-red) !important;}.has-very-light-gray-to-cyan-bluish-gray-gradient-background{background: var(--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray) !important;}.has-cool-to-warm-spectrum-gradient-background{background: var(--wp--preset--gradient--cool-to-warm-spectrum) !important;}.has-blush-light-purple-gradient-background{background: var(--wp--preset--gradient--blush-light-purple) !important;}.has-blush-bordeaux-gradient-background{background: var(--wp--preset--gradient--blush-bordeaux) !important;}.has-luminous-dusk-gradient-background{background: var(--wp--preset--gradient--luminous-dusk) !important;}.has-pale-ocean-gradient-background{background: var(--wp--preset--gradient--pale-ocean) !important;}.has-electric-grass-gradient-background{background: var(--wp--preset--gradient--electric-grass) !important;}.has-midnight-gradient-background{background: var(--wp--preset--gradient--midnight) !important;}.has-small-font-size{font-size: var(--wp--preset--font-size--small) !important;}.has-medium-font-size{font-size: var(--wp--preset--font-size--medium) !important;}.has-large-font-size{font-size: var(--wp--preset--font-size--large) !important;}.has-x-large-font-size{font-size: var(--wp--preset--font-size--x-large) !important;}
</style>
<script type="3c362d92d019cfdf947d8c29-text/javascript" id='monsterinsights-frontend-script-js-extra'>
/* <![CDATA[ */
var monsterinsights_frontend = {"js_events_tracking":"true","download_extensions":"doc,pdf,ppt,zip,xls,docx,pptx,xlsx","inbound_paths":"[{\"path\":\"\\\/go\\\/\",\"label\":\"affiliate\"},{\"path\":\"\\\/recommend\\\/\",\"label\":\"affiliate\"}]","home_url":"https:\/\/www.kdnuggets.com","hash_tracking":"false","ua":"UA-361129-1","v4_id":""};
/* ]]> */
</script>
<script type="rocketlazyloadscript" data-rocket-type='text/javascript' src='https://www.kdnuggets.com/wp-content/plugins/google-analytics-premium/assets/js/frontend-gtag.min.js?ver=8.4.0' id='monsterinsights-frontend-script-js' defer></script>
<script type="3c362d92d019cfdf947d8c29-text/javascript" src='https://www.kdnuggets.com/wp-includes/js/jquery/jquery.min.js?ver=3.6.0' id='jquery-core-js'></script>
<script type="3c362d92d019cfdf947d8c29-text/javascript" src='https://www.kdnuggets.com/wp-includes/js/jquery/jquery-migrate.min.js?ver=3.3.2' id='jquery-migrate-js'></script>
<script type="3c362d92d019cfdf947d8c29-text/javascript" id='advanced-ads-advanced-js-js-extra'>
/* <![CDATA[ */
var advads_options = {"blog_id":"1","privacy":{"enabled":false,"state":"not_needed"}};
/* ]]> */
</script>
<script type="3c362d92d019cfdf947d8c29-text/javascript" src="https://www.kdnuggets.com/wp-content/plugins/advanced-ads/public/assets/js/advanced.min.js?ver=1.31.1" id='advanced-ads-advanced-js-js'></script>
<script type="3c362d92d019cfdf947d8c29-text/javascript" id='advanced_ads_pro/visitor_conditions-js-extra'>
/* <![CDATA[ */
var advanced_ads_pro_visitor_conditions = {"referrer_cookie_name":"advanced_ads_pro_visitor_referrer","referrer_exdays":"365","page_impr_cookie_name":"advanced_ads_page_impressions","page_impr_exdays":"3650"};
/* ]]> */
</script>
<script data-minify="1" type="3c362d92d019cfdf947d8c29-text/javascript" src='https://www.kdnuggets.com/wp-content/cache/min/1/wp-content/uploads/947/173/594/242/8/945.js?ver=1646344922' id='advanced_ads_pro/visitor_conditions-js'></script>
<script type="3c362d92d019cfdf947d8c29-text/javascript" id='icwp-wpsf-shield-notbot-js-extra'>
/* <![CDATA[ */
var shield_vars_notbotjs = {"ajax":{"not_bot":{"action":"icwp-wpsf","exec":"not_bot","exec_nonce":"3d98112548","mod_slug":"icwp-wpsf-ips","ajaxurl":"https:\/\/www.kdnuggets.com\/wp-admin\/admin-ajax.php"}},"flags":{"run":true}};
/* ]]> */
</script>
<script type="rocketlazyloadscript" data-minify="1" data-rocket-type='text/javascript' src='https://www.kdnuggets.com/wp-content/cache/min/1/wp-content/plugins/wp-simple-firewall/resources/js/shield/notbot.js?ver=1646344923' id='icwp-wpsf-shield-notbot-js' defer></script>
<link rel="https://api.w.org/" href="https://www.kdnuggets.com/wp-json/" /><link rel="alternate" type="application/json" href="https://www.kdnuggets.com/wp-json/wp/v2/posts/127794" /><link rel="EditURI" type="application/rsd+xml" title="RSD" href="https://www.kdnuggets.com/xmlrpc.php?rsd" />
<link rel="wlwmanifest" type="application/wlwmanifest+xml" href="https://www.kdnuggets.com/wp-includes/wlwmanifest.xml" />
<meta name="generator" content="WordPress 5.9.1" />
<link rel='shortlink' href='https://www.kdnuggets.com/?p=127794' />
<script type="3c362d92d019cfdf947d8c29-text/javascript">
		var advadsCfpQueue = [];
		var advadsCfpAd = function( adID ){
			if ( 'undefined' == typeof advadsProCfp ) { advadsCfpQueue.push( adID ) } else { advadsProCfp.addElement( adID ) }
		};
		</script>
<script type="3c362d92d019cfdf947d8c29-text/javascript">
			if ( typeof advadsGATracking === 'undefined' ) {
				window.advadsGATracking = {
					delayedAds: {},
					deferedAds: {}
				};
			}
		</script>
<style type="text/css" id="wp-custom-css">
			div.latn, table.latn, table.thb {
    border-width: 0px;
    border-color: #ffffff;
}
#content {
    border: 0px solid #ccc;
}		</style>
<noscript><style id="rocket-lazyload-nojs-css">.rll-youtube-player, [data-lazy-src]{display:none !important;}</style></noscript>
</head>
<script type="rocketlazyloadscript">
$ = jQuery
setTimeout(function() {
    $('.widgettitle').wrapInner('<span></span>');
}, 1000);
</script>
<body class="post-template-default single single-post postid-127794 single-format-standard aa-prefix-kdnug-">
<div class="main_wrapper">
<div id="wrapper">
<div class="site-header" id="header">
<div class="site-header__logo">
<div class="logo">
<a href="/" aria-label="KDnuggets home">
<img src="https://www.kdnuggets.com/wp-content/themes/kdn17/images/logo.svg" alt="KDnuggets logo" width="174" height="52">
</a>
</div>
</div>
<div class="site-header__mobile" id="pull">
<img class="menu" src="https://www.kdnuggets.com/wp-content/themes/kdn17/images/menu.svg" width="28" height="28">
<img class="search-icon" src="https://www.kdnuggets.com/wp-content/themes/kdn17/images/search.svg" width="28" height="28">
</div>
<div class="site-header__menu" id="pull-menu">
<div class="navigation"><ul id="menu-header" class="menu"><li id="menu-item-138099" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-138099"><a href="/news/index.html">Blog</a>
<ul class="sub-menu">
<li id="menu-item-138100" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-138100"><a href="/news/index.html">View All</a></li>
<li id="menu-item-138102" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-138102"><a href="/news/top-stories.html">Top Posts</a></li>
<li id="menu-item-138104" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-138104"><a href="https://www.kdnuggets.com/news/submissions.html">Submissions Guidelines</a></li>
</ul>
</li>
<li id="menu-item-138105" class="sub-menu--2-col menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-138105"><a href="https://www.kdnuggets.com/topic">Topics</a>
<ul class="sub-menu">
<li id="menu-item-138109" class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-138109"><a href="https://www.kdnuggets.com/tag/artificial-intelligence">Artificial Intelligence</a></li>
<li id="menu-item-138106" class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-138106"><a href="https://www.kdnuggets.com/tag/career-advice">Career Advice</a></li>
<li id="menu-item-138113" class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-138113"><a href="https://www.kdnuggets.com/tag/computer-vision">Computer Vision</a></li>
<li id="menu-item-138107" class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-138107"><a href="https://www.kdnuggets.com/tag/data-science">Data Science</a></li>
<li id="menu-item-138108" class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-138108"><a href="https://www.kdnuggets.com/tag/machine-learning">Machine Learning</a></li>
<li id="menu-item-138112" class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-138112"><a href="https://www.kdnuggets.com/tag/natural-language-processing">NLP</a></li>
<li id="menu-item-138114" class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-138114"><a href="https://www.kdnuggets.com/tag/news">News</a></li>
<li id="menu-item-138111" class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-138111"><a href="https://www.kdnuggets.com/tag/programming">Programming</a></li>
<li id="menu-item-138110" class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-138110"><a href="https://www.kdnuggets.com/tag/python">Python</a></li>
<li id="menu-item-138115" class="menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-138115"><a href="https://www.kdnuggets.com/tag/sql">SQL</a></li>
</ul>
</li>
<li id="menu-item-138117" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-138117"><a href="https://www.kdnuggets.com/datasets/index.html">Datasets</a></li>
<li id="menu-item-138118" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-138118"><a href="https://www.kdnuggets.com/courses/index.html">Courses</a>
<ul class="sub-menu">
<li id="menu-item-138119" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-138119"><a href="https://www.kdnuggets.com/education/online.html">Online</a></li>
<li id="menu-item-138120" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-138120"><a href="/education/analytics-data-mining-certificates.html">Certificates</a></li>
<li id="menu-item-138121" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-138121"><a href="/webcasts/index.html">Webinars</a></li>
</ul>
</li>
<li id="menu-item-138122" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-138122"><a href="#">Resources</a>
<ul class="sub-menu">
<li id="menu-item-138123" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-138123"><a href="/meetings/index.html">Events</a></li>
<li id="menu-item-138124" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-138124"><a href="/jobs/index.html">Jobs</a></li>
<li id="menu-item-138125" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-138125"><a href="/software/index.html">Software</a></li>
</ul>
</li>
</ul></div> </div>
<ul class="site-header__social">
<li class="site-header__social-item">
<a href="https://www.facebook.com/kdnuggets" target="_blank" onclick="if (!window.__cfRLUnblockHandlers) return false; ga('send','pageview','/x/top/fb');" data-cf-modified-3c362d92d019cfdf947d8c29-="">
<img width="20" height="19.88" src="https://www.kdnuggets.com/wp-content/themes/kdn17/images/facebook.svg" alt="Facebook">
</a>
</li>
<li class="site-header__social-item">
<a href="https://twitter.com/kdnuggets" target="_blank" onclick="if (!window.__cfRLUnblockHandlers) return false; ga('send','pageview','/x/top/twt');" data-cf-modified-3c362d92d019cfdf947d8c29-="">
<img width="20" height="16.24" src="https://www.kdnuggets.com/wp-content/themes/kdn17/images/twitter.svg" alt="Twitter">
</a>
</li>
<li class="site-header__social-item">
<a href="https://www.linkedin.com/groups/54257/" target="_blank" onclick="if (!window.__cfRLUnblockHandlers) return false; ga('send','pageview','/x/top/in');" data-cf-modified-3c362d92d019cfdf947d8c29-="">
<img width="20" height="20" src="https://www.kdnuggets.com/wp-content/themes/kdn17/images/linkedin.svg" alt="LinkedIn">
</a>
</li>
</ul>
<a class="site-header__btn btn" href="#boxzilla-138215" onClick="if (!window.__cfRLUnblockHandlers) return false; event.preventDefault();" target="_blank" onclick="if (!window.__cfRLUnblockHandlers) return false; ga('send','pageview','/x/top/sub');" data-cf-modified-3c362d92d019cfdf947d8c29-="">Join Newsletter</a>
<div class="site-header__search">
<div class="search">
<form method="get" id="searchform" action="/">
<input value="" name="s" id="s" placeholder="Search KDnuggets…" type="text">
<button>
<img width="74.29" height="74.29" src="https://www.kdnuggets.com/wp-content/themes/kdn17/images/search.svg" alt="Search">
</button>
</form>
</div>
</div>
</div> 
<div id="spacer">
&nbsp;
</div>
<div id="content_wrapper">
<div id="ad_wrapper">
<script type="rocketlazyloadscript" data-rocket-type="text/javascript">
            jQuery(function() {
                var menu = $('.site-header__menu'),
                    menuImage = $('#header img.menu'),
                    search = $('img.search-icon'),
                    searchBar = $('.site-header__search'),
                    searchOpen = false,
                    menuOpen = false;

                search.on('click', function(e) {
                    e.preventDefault();

                    if (menuOpen) {
                        menu.fadeOut(250);
                        menuOpen = false;
                    }

                    searchBar.fadeToggle(250);
                    searchOpen = true;
                });  

                $(menuImage).on('click', function(e) {
                    e.preventDefault();

                    if (searchOpen) {
                        searchBar.fadeOut(250);
                        searchOpen = false;
                    }

                    menu.fadeToggle(250);
                    menuOpen = true;
                });

                $('.site-header__menu .menu-item-has-children').on('click', function(e) {
                    if ($(window).width() > 1000) {
                        return;
                    }

                    e.preventDefault();
                    $(this).find('.sub-menu').slideToggle(250);
                })

                $('.site-header__menu .menu-item-has-children a').on('click', function(e) {
                    if ($(window).width() > 1000) {
                        return;
                    }

                    e.stopPropagation();
                })

                $(window).on('resize', function() {
                    if ($(window).width() > 1000) {
                        menu.css('display', '');
                        search.css('display', '');
                    }
                });
            });
    <!--	kpath = '/'; kda_top(); kda_sid_init(); kda_sid_n=1;-->
        </script>
<div class="kdnug-a3af61c1e1129e0f856a5189c5abbc8b kdnug-leaderboard-ros" id="kdnug-a3af61c1e1129e0f856a5189c5abbc8b"></div> </div>
<div id="content" class="single">
<div id="post-header" class="post-header-has-award">
<img class="post-header-award" src="https://www.kdnuggets.com/wp-content/themes/kdn17/images/top-blog.svg" alt="KDnuggets Top Blog Winner" width="120" height="118">
<h1 id="title">Top Programming Languages and Their Uses</h1>
<p class="excerpt">
The landscape of programming languages is rich and expanding, which can make it tricky to focus on just one or another for your career. We highlight some of the most popular languages that are modern, widely used, and come with loads of packages or libraries that will help you be more productive and efficient in your work.
</p>
<div class='author-link'>By <strong><a href="https://www.kdnuggets.com/author/claire-costa" title="Posts by Claire D. Costa" rel="author">Claire D. Costa</a></strong>, Writer and Strategist at Digitalogy LLC on January 19, 2022 in <a href="https://www.kdnuggets.com/tag/programming">Programming</a></div>

<!-- -->
<div class="addthis_native_toolbox"></div></div>
<hr class="grey-line"><br>
<div id="post-" class="post-127794 post type-post status-publish format-standard has-post-thumbnail hentry category-kdnuggets-originals tag-kdn-rewards tag-programming" class="post">
<p><img class="aligncenter size-full wp-image-127803" src="https://www.kdnuggets.com/wp-content/uploads/Costa_top-programming-languages.jpg" alt="" width="1000%" srcset="https://www.kdnuggets.com/wp-content/uploads/Costa_top-programming-languages.jpg 700w, https://www.kdnuggets.com/wp-content/uploads/Costa_top-programming-languages-300x200.jpg 300w" sizes="(max-width: 700px) 100vw, 700px" /></p>
<p>&nbsp;</p>
<blockquote><p><font size="+1">"The only way to learn a new programming language is by writing programs in it."</font></p>
<p>&mdash;Dennis Ritchie</p></blockquote>
<p>&nbsp;</p>
<p>The world has been evolving at an astonishing rate, and a solid part of the credit for that advancement goes to the application developers. In case you haven’t noticed, application development has become all the rage in recent years.</p>
<p>Everyone is trying to get in on the application development scene as it offers some of the highest-payingṣ career paths, such as web development, data science, artificial intelligence, and more.</p>
<p>But before you start on a career path and create your first application, you need to first pick a programming language. And boy, there are a lot of <a href="https://en.wikipedia.org/wiki/List_of_programming_languages" target="_blank" rel="noopener">programming languages, more than 700 actually,</a> to choose from.</p><div class="kdnug-077fa7d86b48b98f06a070472f1ba773 kdnug-ros-mobile-in-content" id="kdnug-077fa7d86b48b98f06a070472f1ba773"></div>
<p><strong>Seems like a crazy high number, right? </strong></p>
<p>Don’t worry. We’ve compiled this list to make this choice as smooth as possible for you by going over some popular programming languages and their common uses.</p>
<p>If you’re planning to pick up a programming language in 2021, we’d suggest picking up something that is more<strong> modern, widely used, and has loads of packages or libraries.</strong></p>
<p>In this section, we’ll go over some of the widely used programming languages that tick all the boxes that we mentioned above and share their uses as well.</p>
<p>&nbsp;</p>
<h2>1. Python — Artificial Intelligence &amp; Machine Learning</h2>
<p><img loading="lazy" class="aligncenter size-full wp-image-127805" src="https://www.kdnuggets.com/wp-content/uploads/Costa_Python_top-programming-languages.jpg" alt="" width="271" height="262" /></p>
<p style="text-align: center;"><em>Source: <a href="https://www.python.org/" target="_blank" rel="noopener">Python Official Website</a></em></p>
<ul>
<li><strong>Level:</strong> Beginner</li>
<li><strong>Popular Frameworks:</strong> Django, Flask</li>
<li><strong>Platform:</strong> Web, Desktop</li>
<li><strong>Popularity: </strong><a href="https://pypl.github.io/PYPL.html" target="_blank" rel="noopener">#1</a> on PYPL Popularity Index of March 2021, <a href="https://www.tiobe.com/tiobe-index/" target="_blank" rel="noopener">#3</a> on Tiobe Index for March 2021, Loved by <a href="https://insights.stackoverflow.com/survey/2020#technology-most-loved-dreaded-and-wanted-languages-loved" target="_blank" rel="noopener">66.7%</a> of StackExchange developers in 2020, and wanted by 30%, the most of any language.</li>
</ul>
<p><strong>Developed by Guido van Rossum in the 1990s</strong>, the multi-purpose high-level <a href="https://datawider.com/python-programming-language-is-considered-better-than-other-languages/" target="_blank" rel="noopener">Python</a> has grown extremely fast over the years to become one of the most popular programming languages today.</p>
<p>And the number one reason for Python’s popularity is<strong> its beginner-friendliness</strong>, which allows anyone, even individuals with no programming background, to pick up Python and start creating simple programs.</p>
<p>But that’s not all. It also offers an exceptionally <a href="https://towardsdatascience.com/best-python-libraries-for-every-python-developer-77daab4fa40e" target="_blank" rel="noopener">vast collection of packages and libraries</a> that can play a key role in reducing the ETA for your projects, along with a strong community of like-minded developers that is eager to help.</p>
<p><strong>What this language is used for — </strong></p>
<p>Although Python can be used to build pretty much anything, it really shines when it comes to working on technologies like Artificial Intelligence, <a href="https://towardsdatascience.com/a-tour-of-machine-learning-algorithms-466b8bf75c0a" target="_blank" rel="noopener">Machine Learning</a>, Data Analytics. Python also proves to be useful for web development, creating enterprise applications, and <a href="https://towardsdatascience.com/top-10-python-gui-frameworks-for-developers-adca32fbe6fc?source=your_stories_page-------------------------------------" target="_blank" rel="noopener">GUIs for applications</a>.</p>
<p><strong>Python is used in many application domains. Here’s a sampling — </strong></p>
<p><a href="https://www.python.org/about/apps/" target="_blank" rel="noopener">https://www.python.org/about/apps/</a></p>
<p><strong> </strong><strong>Additional Resources:</strong></p>
<ul>
<li><a href="https://www.youtube.com/watch?v=rfscVS0vtbw">Learn Python</a> — <em>freecodecamp</em></li>
<li><a href="https://www.youtube.com/watch?v=_uQrJ0TkZlc&amp;t=6s">Python Tutorial — Python for Beginners</a> — Programming With Mosh</li>
<li><a href="https://www.learnpython.org/">Python Tutorial </a>— Learnpython.org</li>
</ul>
<p>&nbsp;</p>
<h2>2. JavaScript — Rich Interactive Web Development</h2>
<p><img loading="lazy" class="aligncenter size-full wp-image-127806" src="https://www.kdnuggets.com/wp-content/uploads/Costa_JavaScript_top-programming-languages.jpg" alt="" width="263" height="297" /></p>
<p style="text-align: center;"><em>Source :  <a href="https://www.javascript.com/" target="_blank" rel="noopener">Official JavaScript Website</a></em></p>
<ul>
<li><strong>Level:</strong> Beginner</li>
<li><strong>Popular Frameworks:</strong> <a href="https://blog.digitalogy.co/node-js-interview-questions-and-answers/" target="_blank" rel="noopener">Node.js</a>, Angular, <a href="https://blog.digitalogy.co/top-react-component-libraries/" target="_blank" rel="noopener">React.js,</a> Vue, Meteor</li>
<li><strong>Platform:</strong> Web, Desktop, Frontend scripting</li>
<li><strong>Popularity: </strong><a href="https://pypl.github.io/PYPL.html" target="_blank" rel="noopener">#3</a> on PYPL Popularity Index of March 2021, <a href="https://www.tiobe.com/tiobe-index/" target="_blank" rel="noopener">#7</a> on Tiobe Index for March 2021, Loved by <a href="https://insights.stackoverflow.com/survey/2020#technology-most-loved-dreaded-and-wanted-languages-loved" target="_blank" rel="noopener">58.3%</a> of StackExchange developers in 2020, and wanted by 18.5%, the most of any language.</li>
</ul>
<p><a href="https://www.javascript.com/" target="_blank" rel="noopener">JavaScript</a> was one of the key programming languages alongside HTML and CSS that helped build the internet. JavaScript was<strong> created in 1995 by Netscape,</strong> the company that released the famous Netscape Navigator browser, to eliminate the crudeness of static web pages and add a pinch of dynamic behavior to them.</p>
<p>Today, JavaScript has become a <a href="https://javascript.plainenglish.io/what-are-javascript-programming-paradigms-3ef0f576dfdb" target="_blank" rel="noopener">high-level multi-paradigm programming language</a> that serves as the world’s top frontend programming language for the web, handling all the interactions offered by the webpages, such as pop-ups, alerts, events, and many more like them.</p>
<p><strong>What this language is used for — </strong></p>
<p>JavaScript is the perfect option if you want your app to run across a range of devices, such as smartphones, cloud, containers, micro-controllers, and on hundreds of browsers. For the server-side workloads, there’s Node.js, a proven JavaScript runtime that is being used by thousands of companies today.</p>
<p><strong>Additional Resources:</strong></p>
<ul>
<li><a href="https://www.youtube.com/watch?v=PkZNo7MFNFg" target="_blank" rel="noopener">Learn JavaScript</a> — <em>freecodecamp</em></li>
<li><a href="https://www.youtube.com/watch?v=W6NZfCO5SIk" target="_blank" rel="noopener">JavaScript Tutorial for Beginners: Learn JavaScript in 1 Hour</a> — <em>Programming with Mosh</em></li>
<li><a href="https://www.freecodecamp.org/news/learn-javascript-by-building-7-games-video-course/" target="_blank" rel="noopener">Learn JavaScript By Building Seven Games</a> — <em>freecodecamp</em></li>
</ul>
<p>&nbsp;</p>
<h2>3. Java — Enterprise Application Development</h2>
<p><img loading="lazy" class="aligncenter size-full wp-image-127810" src="https://www.kdnuggets.com/wp-content/uploads/Costa_Java_top-programming-languages.jpg" alt="" width="199" height="264" /></p>
<p style="text-align: center;"><em>Source :  <a href="https://www.java.com/en/" target="_blank" rel="noopener">Official Java Website</a></em></p>
<ul>
<li><strong>Level:</strong> Intermediate</li>
<li><strong>Popular Frameworks: </strong>Spring, Hibernate, Strut</li>
<li><strong>Platform:</strong> Web, Mobile, Desktop</li>
<li><strong>Popularity: </strong><a href="https://pypl.github.io/PYPL.html" target="_blank" rel="noopener">#2</a> on PYPL Popularity Index of March 2021, <a href="https://www.tiobe.com/tiobe-index/" target="_blank" rel="noopener">#2</a> on Tiobe Index for March 2021, Loved by <a href="https://insights.stackoverflow.com/survey/2020#technology-most-loved-dreaded-and-wanted-languages-loved" target="_blank" rel="noopener">44.1%</a> of StackExchange developers in 2020.</li>
</ul>
<p><a href="https://www.java.com/en/" target="_blank" rel="noopener">Java</a> has remained the de-facto programming language for building enterprise-grade applications for more than 20 years now.</p>
<p><strong>Created by Sun Microsystems’ James Gosling in 1995</strong>, the object-oriented programming language Java has been serving as a secure, reliable, and scalable tool for developers ever since.</p>
<p>Some of the features offered by Java that make it more preferable than several other programming languages are its garbage collection capabilities, backward compatibility, platform independence via JVM, portability, and high performance.</p>
<p>Java’s popularity can be seen clearly among the Fortune 500 members as 90% of them use Java to manage their business efficiently.</p>
<p><strong>What this language is used for — </strong></p>
<p>Apart from being used to develop robust business applications, Java has also been used extensively in Android, making it a prerequisite for Android developers. Java also allows developers to create apps for a range of industries, such as banking, electronic trading, e-commerce, as well as apps for distributed computing.</p>
<p><strong>Additional Resources:</strong></p>
<ul>
<li><a href="https://www.codecademy.com/learn/learn-java" target="_blank" rel="noopener">Learn Java</a> — <em>Codecademy</em></li>
<li><a href="https://www.programiz.com/java-programming" target="_blank" rel="noopener">Learn Java Programming</a> — Programiz</li>
</ul>
<p>&nbsp;</p>
<h2>4. R — Data Analysis</h2>
<p><img loading="lazy" class="aligncenter size-full wp-image-127811" src="https://www.kdnuggets.com/wp-content/uploads/Costa_R_top-programming-languages.jpg" alt="" width="350" height="271" srcset="https://www.kdnuggets.com/wp-content/uploads/Costa_R_top-programming-languages.jpg 350w, https://www.kdnuggets.com/wp-content/uploads/Costa_R_top-programming-languages-300x232.jpg 300w" sizes="(max-width: 350px) 100vw, 350px" /></p>
<p style="text-align: center;"><em>Source: <a href="https://www.r-project.org/about.html" target="_blank" rel="noopener"> Official R Website</a></em></p>
<ul>
<li><strong>Level:</strong> Intermediate</li>
<li><strong>Popular Studio: </strong>R Studio</li>
<li><strong>Platform:</strong> Mainly desktop</li>
<li><strong>Popularity: </strong><a href="https://pypl.github.io/PYPL.html" target="_blank" rel="noopener">#7</a> on PYPL Popularity Index of March 2021.</li>
</ul>
<p>If you do any sort of data analysis or work on Machine Learning projects, the chances are that you may have heard about R. The <a href="https://www.r-project.org/about.html" target="_blank" rel="noopener">R programming language</a> was<strong> first released to the public in 1993 by its creators Ross Ihaka and Robert Gentleman </strong>as an implementation of the S programming language with a special focus on <a href="https://www.wiley.com/en-ag/Statistical+Computing%3A+An+Introduction+to+Data+Analysis+using+S+Plus+-p-9780471560401" target="_blank" rel="noopener">statistical computing</a> and <a href="https://arxiv.org/pdf/1005.1036.pdf" target="_blank" rel="noopener">graphical modeling</a>.</p>
<p>Over the years, R became one of the best programming languages for projects requiring extensive data analysis, graphical data modeling, spatial and time-series analysis.</p>
<p>R also provides great extensibility via its functions and extensions that offer a ton of specialized techniques and capabilities to developers. The language also works remarkably well with code from other programming languages, such as C, C++, Python, Java, and .NET.</p>
<p><strong>What this language is used for — </strong></p>
<p>Apart from some of the uses mentioned above, R can be used for behavior analysis, data science, and machine learning projects that involve classification, clustering, and more.</p>
<p><strong>Additional Resources:</strong></p>
<ul>
<li><a href="https://www.youtube.com/watch?v=_V8eKsto3Ug" target="_blank" rel="noopener">R Programming Tutorial — Learn the Basics of Statistical Computing</a> — <em>freecodecamp</em></li>
<li><a href="https://www.coursera.org/learn/r-programming" target="_blank" rel="noopener">R Programming </a>— <em>Coursera</em></li>
<li><a href="https://www.codecademy.com/learn/learn-r" target="_blank" rel="noopener">Learn R</a> — <em>Codecademy</em></li>
</ul>
<p>&nbsp;</p>
<h2>5. C/C++ — Operating Systems and System Tools</h2>
<p><img loading="lazy" class="aligncenter size-full wp-image-127812" src="https://www.kdnuggets.com/wp-content/uploads/Costa_C_top-programming-languages.jpg" alt="" width="350" height="168" srcset="https://www.kdnuggets.com/wp-content/uploads/Costa_C_top-programming-languages.jpg 350w, https://www.kdnuggets.com/wp-content/uploads/Costa_C_top-programming-languages-300x144.jpg 300w" sizes="(max-width: 350px) 100vw, 350px" /></p>
<p style="text-align: center;"><em>Arranged by author.</em></p>
<ul>
<li><strong>Level:</strong> <strong>C —</strong> Intermediate to Advanced, <strong>C++ — </strong>Beginner to Intermediate</li>
<li><strong>Popular Frameworks:</strong> MFC, .Net, Qt, KDE, GNOME</li>
<li><strong>Platform:</strong> Mobile, Desktop, Embedded</li>
</ul>
<p>Believe it or not, the programming languages C/C++ were all the rage in the very late 20th century. Why?</p>
<p>It’s because C and <a href="https://www.cplusplus.com/" target="_blank" rel="noopener">C++</a> are both very low-level programming languages, offering blazing fast performance, which is why they were and are still being used to develop operating systems, file systems, and other system-level applications.</p>
<p>While <strong>C was released in the 70s by Dennis Ritchie,</strong> <strong>C++</strong>, an extension to C with classes and many other additions, such as object-oriented features, was <strong>released later by Bjarne Stroustrup in the mid-80s. </strong></p>
<p>Even after close to 50 years, both the programming languages are still being used to create rock-steady and some of the fastest applications of all times.</p>
<p><strong>What this language is used for — </strong></p>
<p>As C &amp; C++ both offer full access to the underlying hardware, they have been used to create a wide variety of applications and platforms, such as system applications, real-time systems, IoT, embedded systems, games, cloud, containers, and more.</p>
<p><strong>Additional Resources: </strong></p>
<ul>
<li><a href="https://www.youtube.com/watch?v=KJgsSFOSQv0" target="_blank" rel="noopener">C Programming Tutorial for Beginners </a>— <em>freecodecamp</em></li>
<li><a href="https://www.youtube.com/watch?v=vLnPwxZdW4Y" target="_blank" rel="noopener">C++ Tutorial for Beginners</a> — Full Course — <em>freecodecamp</em></li>
<li><a href="https://www.codecademy.com/learn/learn-c-plus-plus" target="_blank" rel="noopener">Learn C++</a> — <em>Codecademy</em></li>
<li><a href="https://www.programiz.com/c-programming" target="_blank" rel="noopener">Learn C </a>— <em>Programiz</em></li>
</ul>
<p>&nbsp;</p>
<h2>6. Golang — Server-Side Programming</h2>
<p><img loading="lazy" class="aligncenter size-full wp-image-127813" src="https://www.kdnuggets.com/wp-content/uploads/Costa_Go_top-programming-languages.jpg" alt="" width="216" height="297" /></p>
<p style="text-align: center;"><em>Source — <a href="https://golang.org/" target="_blank" rel="noopener">Official Golang Website</a></em></p>
<ul>
<li><strong>Level:</strong> Beginner to intermediate</li>
<li><strong>Popular Framework: </strong>Revel, Beego</li>
<li><strong>Platform:</strong> Cross-platform, mainly desktop</li>
<li><strong>Popularity: </strong>Loved by <a href="https://insights.stackoverflow.com/survey/2020#technology-most-loved-dreaded-and-wanted-languages-loved" target="_blank" rel="noopener">62.3%</a> of StackExchange developers in 2020, and wanted by 17.9%, the most of any language.</li>
</ul>
<p><a href="https://golang.org/" target="_blank" rel="noopener">Go, or Golang</a>, is a compiled programming language developed by the search giant Google. Created in 2009, Golang is an effort by the designers at Google to eliminate all the faults in the languages used throughout the organization and by keeping all the best features intact.</p>
<p>Golang is <strong>fast and has a simple syntax,</strong> allowing anyone to pick up the programming language. It also comes with cross-platform support, making it <strong>easy and efficient to use</strong>.</p>
<p>Go claims to offer a mix of high-performance like C/C++, simplicity, and usability like Python, along with efficient concurrency handling like Java.</p>
<p><strong>What this language is used for — </strong></p>
<p>Go is primarily used in back-end technologies, cloud services, distributed networks, IoT, but it has also been used to create console utilities, GUI applications, and web applications.</p>
<p><strong>Additional Resources :</strong></p>
<ul>
<li><a href="https://www.youtube.com/watch?v=YS4e4q9oBaU" target="_blank" rel="noopener">Golang Tutorial for Beginners</a>— <em>freecodecamp</em></li>
<li><a href="https://www.tutorialspoint.com/go/index.htm" target="_blank" rel="noopener">Go Tutorial</a> — Tutorialspoint</li>
<li><a href="https://www.amazon.com/Introducing-Go-Reliable-Scalable-Programs/dp/1491941952" target="_blank" rel="noopener">Introducing Go</a> — <em>Caleb Doxsey</em></li>
</ul>
<p>&nbsp;</p>
<h2>7. C# — Application &amp; Web Development Using .NET</h2>
<p><img loading="lazy" class="aligncenter size-full wp-image-127814" src="https://www.kdnuggets.com/wp-content/uploads/Costa_Csharp_top-programming-languages.jpg" alt="" width="284" height="313" srcset="https://www.kdnuggets.com/wp-content/uploads/Costa_Csharp_top-programming-languages.jpg 284w, https://www.kdnuggets.com/wp-content/uploads/Costa_Csharp_top-programming-languages-272x300.jpg 272w" sizes="(max-width: 284px) 100vw, 284px" /></p>
<p style="text-align: center;"><em>Source — <a href="https://en.wikipedia.org/wiki/C_Sharp_%28programming_language%29" target="_blank" rel="noopener">Wikipedia C Sharp</a></em></p>
<ul>
<li><strong>Level:</strong> Intermediate</li>
<li><strong>Popular Frameworks:</strong> .NET, Xamarin</li>
<li><strong>Platform:</strong> Cross-platform, including mobile and enterprise software applications</li>
<li><strong>Popularity: </strong><a href="https://pypl.github.io/PYPL.html" target="_blank" rel="noopener">#4</a> on PYPL Popularity Index of March 2021, <a href="https://www.tiobe.com/tiobe-index/" target="_blank" rel="noopener">#5</a> on Tiobe Index for March 2021, Loved by <a href="https://insights.stackoverflow.com/survey/2020#technology-most-loved-dreaded-and-wanted-languages-loved" target="_blank" rel="noopener">59.7%</a> of StackExchange developers in 2020.</li>
</ul>
<p>C# was Microsoft’s approach to developing a programming language similar to the object-oriented C as part of its .NET initiative. The <strong>general-purpose multi-paradigm programming language</strong> was unveiled in 2000 by Anders Hejlsberg and <strong>has a syntax similar to C, C++, and Java. </strong></p>
<p>This was a huge plus point for developers who were familiar with either of these languages. It also offered relatively faster compilation and execution along with seamless scalability.</p>
<p>C# was designed keeping in mind the .NET ecosystem, which allows developers to access a range of libraries and frameworks offered by Microsoft. And with the integration with Windows, C# becomes extremely easy to use, even perfect for developing Windows-based apps.</p>
<p><strong>What this language is used for — </strong></p>
<p>Developers can use C# for a range of projects, including game development, server-side programming, web development, creating web forms, mobile applications, and more. C# has also been used to develop apps for the Windows platform, specifically Windows 8 and 10.</p>
<p><strong>Additional Resources: </strong></p>
<ul>
<li><a href="https://www.codecademy.com/learn/learn-c-sharp" target="_blank" rel="noopener">Learn C#</a> — Codeacademy</li>
<li><a href="https://www.w3schools.com/cs/" target="_blank" rel="noopener">C# Tutorials</a> — W3Schools</li>
</ul>
<p>&nbsp;</p>
<h2>8. PHP — Web Development</h2>
<p><img loading="lazy" class="aligncenter size-full wp-image-127816" src="https://www.kdnuggets.com/wp-content/uploads/Costa_PHP_top-programming-languages.jpg" alt="" width="350" height="196" srcset="https://www.kdnuggets.com/wp-content/uploads/Costa_PHP_top-programming-languages.jpg 350w, https://www.kdnuggets.com/wp-content/uploads/Costa_PHP_top-programming-languages-300x168.jpg 300w" sizes="(max-width: 350px) 100vw, 350px" /></p>
<p style="text-align: center;"><em>Source —<a href="https://www.php.net/" target="_blank" rel="noopener"> Official PHP Website</a></em></p>
<ul>
<li><strong>Level:</strong> Beginner</li>
<li><strong>Popular Frameworks:</strong> CakePHP, Larawell, Symfony, Phalcon</li>
<li><strong>Platform:</strong> Cross-platform (desktop, mobile, web) Back-end web scripting.</li>
<li><strong>Popularity: </strong><a href="https://pypl.github.io/PYPL.html" target="_blank" rel="noopener">#6</a> on PYPL Popularity Index of March 2021, <a href="https://www.tiobe.com/tiobe-index/" target="_blank" rel="noopener">#8</a> on Tiobe Index for March 2021.</li>
</ul>
<p>Just like Guido van Rossum’s Python, <a href="https://n3x0.com/2019/09/06/multiple-code-execution-flaws-found-in-php-programming-language/" target="_blank" rel="noopener">PHP</a> also came to fruition as a side project by Rasmus Lerdorf, with the initial development dating back to the year 1994.</p>
<p>Rasmus’s version of PHP was originally intended to help him maintain his personal homepage, but over the years, the project evolved to support web forms and databases.</p>
<p>Today, PHP has become a general-purpose scripting language that’s being used around the globe, primarily for server-side web development. It is fast, simple, and is platform-independent, along with a large open-source software community.</p>
<p><strong>What this language is used for — </strong></p>
<p>A large number of companies are using PHP today to create tools like CMS (Content Management Systems), eCommerce platforms, and web applications. PHP also makes it extremely easy to create web pages in an instant.</p>
<p>&nbsp;</p>
<h2>9. SQL — Data Management</h2>
<p>&nbsp;</p>
<ul>
<li><strong>Level:</strong> Beginner</li>
<li><strong>Platform:</strong> Back-end database management</li>
<li><strong>Popularity: </strong><a href="https://pypl.github.io/PYPL.html" target="_blank" rel="noopener">#10</a> on Tiobe Index for March 2021, Loved by <a href="https://insights.stackoverflow.com/survey/2020#technology-most-loved-dreaded-and-wanted-languages-loved" target="_blank" rel="noopener">56.6%</a> of StackExchange developers in 2020.</li>
</ul>
<p>SQL, short for Structured Query Language, is probably one of the most crucial programming languages on this list.</p>
<p>Designed by Donald D. Chamberlin and Raymond F. Boyce in 1974, the special-purpose programming language has played a key role in enabling developers to create and manage tables and databases for storing relational data over hundreds of thousands of data fields.</p>
<p>Without SQL, organizations would have to rely on older and possibly slower methods of storing and accessing vast amounts of data. With SQL, much of these tasks can be done within seconds.</p>
<p>Over the years, SQL has helped spawn a large number of RDBMS (Relational Database Management Systems) that offer much more than just the creation of tables and databases.</p>
<p><strong>What this language is used for — </strong></p>
<p>Pretty much every other project or industry that needs to deal with large amounts of data stored in tables or databases uses SQL through an RDBMS.</p>
<p><strong>Additional Resources:</strong></p>
<ul>
<li><a href="https://www.codecademy.com/learn/learn-sql" target="_blank" rel="noopener">Learn SQL</a> — <em>Codecademy</em></li>
<li><a href="https://www.ibm.com/cloud/learn/nosql-databases" target="_blank" rel="noopener">NoSQL Databases Explained</a> — <em>IBM Cloud</em></li>
<li><a href="https://bootcamp.berkeley.edu/resources/coding/learn-sql/" target="_blank" rel="noopener">Coding Resources: SQL</a> — <em>Berkeley Boot Camps</em></li>
</ul>
<p>&nbsp;</p>
<h2>10. Swift — For Mobile App Development on iOS</h2>
<p><img loading="lazy" class="aligncenter size-full wp-image-127817" src="https://www.kdnuggets.com/wp-content/uploads/Costa_Swift_top-programming-languages.jpg" alt="" width="313" height="313" srcset="https://www.kdnuggets.com/wp-content/uploads/Costa_Swift_top-programming-languages.jpg 313w, https://www.kdnuggets.com/wp-content/uploads/Costa_Swift_top-programming-languages-150x150.jpg 150w, https://www.kdnuggets.com/wp-content/uploads/Costa_Swift_top-programming-languages-300x300.jpg 300w, https://www.kdnuggets.com/wp-content/uploads/Costa_Swift_top-programming-languages-120x120.jpg 120w" sizes="(max-width: 313px) 100vw, 313px" /></p>
<p style="text-align: center;"><em>Source — <a href="https://swift.org/" target="_blank" rel="noopener">Official Swift Website</a></em></p>
<ul>
<li><strong>Level:</strong> Beginner</li>
<li><strong>Popular Frameworks:</strong> Alamofire, RxSwift, Snapkit</li>
<li><strong>Platform:</strong> Mobile (Apple iOS apps, specifically)</li>
<li><strong>Popularity: </strong><a href="https://pypl.github.io/PYPL.html" target="_blank" rel="noopener">#9</a> on PYPL Popularity Index of March 2021, Loved by 59.5% of StackExchange developers in 2020.</li>
</ul>
<p>Apple’s full control over its hardware and software has allowed it to deliver smooth and consistent experiences across its range of devices. And that’s where <a href="https://lenac1884.medium.com/what-is-the-swift-programming-language-b45e271175e2" target="_blank" rel="noopener">Swift</a> comes in.</p>
<p>Swift is<strong> Apple’s own programming language</strong> that was <strong>released in 2014</strong> as a replacement for its Objective-C programming language. It is a multi-paradigm general-purpose programming language that’s extremely efficient and designed to improve developer productivity.</p>
<p>Swift is a modern programming language (newest on this list), <strong>fast, powerful, and offers full interoperability with Objective-C</strong>. Over the years, Swift received numerous updates that helped it gain significant popularity among Apple’s iOS, macOS, watchOS, and tvOS platforms.</p>
<p><strong>What this language is used for — </strong></p>
<p>Paired with Apple’s Cocoa and Cocoa Touch framework, Swift can be used to create apps for virtually every Apple device, such as iPhones, iPads, Mac, Watch, and other devices.</p>
<p><strong>Additional Resources — </strong></p>
<ul>
<li><a href="https://www.youtube.com/watch?v=Ulp1Kimblg0" target="_blank" rel="noopener">Swift Programming Tutorial for Beginners (Full Tutorial) </a>— <em>CodeWithChris</em></li>
</ul>
<p>&nbsp;</p>
<h2>Conclusion</h2>
<p>&nbsp;</p>
<p>Now let’s quickly conclude this article by giving you an insight into the importance and career growth opportunities associated with these programming languages. Every programming language has its own set of benefits, and out of all the entries, you can enter the field of your choice.</p>
<p>Mastering Python can help you land one of the top 3 highest paying job roles in the industry. With Python, you can apply for Software Engineer, DevOps Engineer, Data Scientist, and can even secure job positions in the most reputed companies with a handsome package.</p>
<p>You can simply opt for Quantitative Analyst, Data Visualization, Expert, Business Intelligence Expert, and Data Analyst with R.</p>
<p>Regarding JavaScript, there is a high demand for Javascript developers offering a modest salary.</p>
<p>But there’s no beating the efficiency of C/C++ when it comes to building system tools and operating systems as it continues to enjoy the number one spot on TIOBE’s software quality index. SQL remains one of the best programming languages to tinker around vast databases, while C# proves perfect for Windows. Swift has also been seeing a rise in popularity among developers looking to build for Apple’s hardware. As for PHP and Go, they continue to maintain a respectable position in the industry.</p>
<p>So, out of the 10 programming languages, it’s totally up to you which one is your go-to choice and makes your career in. So choose wisely!</p>
<p>&nbsp;<br />
&nbsp;<br />
<a href="https://twitter.com/ClaireDCosta2" target="_blank" rel="noopener"><strong>Claire D. Costa</strong></a> is a Content Crafter and Strategist at Digitalogy who can transform your content ideas into clear, compelling, concise writing that forges powerful connections with readers.<br />
&nbsp;</p>
<div class="crp_related  "><br><h3>More On This Topic</h3><ul><li><a href="https://www.kdnuggets.com/2022/02/top-news-week-0124-0130.html" class="crp_link post-137787"><span class="crp_title">Top Posts Jan 24-30: The High Paying Side Hustles for Data Scientists</span></a></li><li><a href="https://www.kdnuggets.com/2022/01/top-news-week-0117-0123.html" class="crp_link post-137604"><span class="crp_title">Top Posts Jan 17-23: The High Paying Side Hustles for Data Scientists</span></a></li><li><a href="https://www.kdnuggets.com/2022/n06.html" class="crp_link post-138064"><span class="crp_title">KDnuggets&trade; News 22:n06, Feb 9: Data Science Programming Languages and&hellip;</span></a></li><li><a href="https://www.kdnuggets.com/2022/02/top-news-week-0131-0206.html" class="crp_link post-138045"><span class="crp_title">Top Posts Jan 31 - Feb 6: 7 Steps to Mastering Machine Learning with Python&hellip;</span></a></li><li><a href="https://www.kdnuggets.com/2021/07/sql-syllogisms-explanations.html" class="crp_link post-129938"><span class="crp_title">SQL, Syllogisms, and Explanations</span></a></li><li><a href="https://www.kdnuggets.com/2022/02/top-news-week-0207-0213.html" class="crp_link post-138475"><span class="crp_title">Top Posts Feb 7-13: Decision Tree Algorithm, Explained</span></a></li></ul><div class="crp_clear"></div></div>
</div>
<div class="box-form">
<script type="rocketlazyloadscript">(function() {
	window.mc4wp = window.mc4wp || {
		listeners: [],
		forms: {
			on: function(evt, cb) {
				window.mc4wp.listeners.push(
					{
						event   : evt,
						callback: cb
					}
				);
			}
		}
	}
})();
</script><form id="mc4wp-form-3" class="mc4wp-form mc4wp-form-138095 mc4wp-ajax" method="post" data-id="138095" data-name="Subscribe to KDnuggets News (Article)"><div class="mc4wp-form-fields"><div class="header-container">
<div><img width="200" height="111" src="/wp-content/uploads/newsletter.png" width=100></div>
<p><a href="/news/subscribe.html">Get the FREE collection of 50+ data science cheatsheets and the leading newsletter on AI, Data Science, and Machine Learning, straight to your inbox.</a></p>
</div>
<div class="form-fields">
<div class="field-container"><input type="email" name="EMAIL" size="30" maxlength="60" placeholder="Your Email" required /></div>
<div class="field-container submit-container" "form-button">
<input class="btn" type="submit" value="Sign Up"></div>
<p style="font-size:11px; margin-top: 10px;">By subscribing you accept KDnuggets <a style="font-size:10px" target="_blank" href="https://kdnuggets.local/news/privacy-policy.html">Privacy Policy</a></p>
<input type="hidden" name="Form Signup Location" value="article">
</div></div><label style="display: none !important;">Leave this field empty if you're human: <input type="text" name="_mc4wp_honeypot" value="" tabindex="-1" autocomplete="off" /></label><input type="hidden" name="_mc4wp_timestamp" value="1646395518" /><input type="hidden" name="_mc4wp_form_id" value="138095" /><input type="hidden" name="_mc4wp_form_element_id" value="mc4wp-form-3" /><div class="mc4wp-response"></div></form></div>

<div id="comment_wrapper">
<p></p>

<p></p>
</div>
<div class="page-link"></div>
<div class="pagi">
<hr class="grey-line">
<br>
<div class="pagi-left">
<a href="https://www.kdnuggets.com/2022/n03.html" rel="prev"><= Previous post</a></div>
<div class="pagi-right">
<a href="https://www.kdnuggets.com/2022/01/6-data-science-technologies-need-build-supply-chain-pipeline.html" rel="next">Next post =></a></div>
<br><br>
<div class='latn' style='margin-top: 20px;'>
<div class='latn-heading'>
<h2>Top Posts Past 30 Days</h2>
</div>
<table cellpadding='3' cellspacing='2'>
<tr>
<td>
<ol class='three_ol'>
<li><a href='/2022/02/complete-collection-data-science-cheat-sheets-part-2.html'><b>The Complete Collection of Data Science Cheat Sheets &#8211; Part 2</b></a>
<li><a href='/2020/01/decision-tree-algorithm-explained.html'><b>Decision Tree Algorithm, Explained</b></a>
<li><a href='/2022/02/7-steps-mastering-machine-learning-python.html'><b>7 Steps to Mastering Machine Learning with Python in 2022</b></a>
<li><a href='/2022/02/learn-math-machine-learning.html'><b>How to Learn Math for Machine Learning</b></a>
<li><a href='/2021/05/top-programming-languages.html'><b>Top Programming Languages and Their Uses</b></a>
<li><a href='/2022/01/data-science-dying-career.html'><b>Is Data Science a Dying Career?</b></a>
<li><a href='/2020/05/guide-choose-right-machine-learning-algorithm.html'><b>An Easy Guide to Choose the Right Machine Learning Algorithm</b></a>
<li><a href='/2022/02/complete-collection-data-science-cheat-sheets-part-1.html'><b>The Complete Collection of Data Science Cheat Sheets &#8211; Part 1</b></a>
<li><a href='/2022/01/high-paying-side-hustles-data-scientists.html'><b>The High Paying Side Hustles for Data Scientists</b></a>
<li><a href='/2020/07/free-mit-courses-calculus-key-deep-learning.html'><b>Free MIT Courses on Calculus: The Key to Understanding Deep Learning</b></a>
</ol>
</td>
</tr>
</table>
</div> </div>
</div>
<div id="sidebar">
<div class="search">
<form method="get" id="searchform" action="/">
<input value="" name="s" id="s" placeholder="Search KDnuggets…" type="text">
<button>
<img width="74.29" height="74.29" src="https://www.kdnuggets.com/wp-content/themes/kdn17/images/search.svg" alt="Search">
</button>
</form>
</div>
<div id="post-header-ad">

<div class="kdnug-28e09373120b878b3a75adb49317c253 kdnug-med-rectangle-ros" id="kdnug-28e09373120b878b3a75adb49317c253"></div> </div>
<div>


</div>
<div class="latn">
<h3><a href="/news/index.html">Latest News</a></h3>
<ul style="font-size:16px;">
<li> <a href="https://www.kdnuggets.com/2022/03/adversarial-machine-learning.html">What is Adversarial Machine Learning?</a><li> <a href="https://www.kdnuggets.com/2022/03/top-3-free-resources-learn-linear-algebra-machine-learning.html">Top 3 Free Resources to Learn Linear Algebra for Machin...</a><li> <a href="https://www.kdnuggets.com/2022/03/hp-z-data-science-solutions.html">Z by HP: Data Science Solutions</a><li> <a href="https://www.kdnuggets.com/2022/03/3-possible-ways-get-data-science.html">3 Possible Ways to Get into Data Science</a><li> <a href="https://www.kdnuggets.com/2022/03/hybrid-ai-go-mainstream-2022.html">Hybrid AI Will Go Mainstream in 2022</a><li> <a href="https://www.kdnuggets.com/2022/03/women-world-data.html">Women in the World of Data</a></ul>
</div>
<table class='thb' cellpadding=3 width='100%'>
<tr><th class='thb'><h2 size='+1'>Top Posts Last Week</h2></a></th></tr>
<tr><td align=left>
<a href='/2022/02/complete-collection-data-science-cheat-sheets-part-2.html'><img src='https://www.kdnuggets.com/wp-content/uploads/complete-collection-ds-cheat-2-1.jpg' alt='The Complete Collection of Data Science Cheat Sheets &#8211; Part 2' width='100%' /></a>
<ol class='three_ol'>
<li><a href='/2022/02/complete-collection-data-science-cheat-sheets-part-2.html'><b>The Complete Collection of Data Science Cheat Sheets &#8211; Part 2</b></a>
<li><a href='/2020/01/decision-tree-algorithm-explained.html'><b>Decision Tree Algorithm, Explained</b></a>
<li><a href='/2022/02/complete-collection-data-science-cheat-sheets-part-1.html'><b>The Complete Collection of Data Science Cheat Sheets &#8211; Part 1</b></a>
<li><a href='/2021/05/essential-machine-learning-algorithms-beginners.html'><b>Essential Machine Learning Algorithms: A Beginner&#8217;s Guide</b></a>
<li><a href='/2020/05/guide-choose-right-machine-learning-algorithm.html'><b>An Easy Guide to Choose the Right Machine Learning Algorithm</b></a>
</ol>
</td></tr>
</table>
<div class="latn" style="margin-top: 15px;">
<h3><b>More Recent Posts</b></h3>
<ul class="next-posts">
<li> <a href="https://www.kdnuggets.com/2022/03/women-world-data.html">Women in the World of Data</a><li> <a href="https://www.kdnuggets.com/2022/n09.html">KDnuggets 22:n09, Mar 2: Telling a Great Data Story: A Visu...</a><li> <a href="https://www.kdnuggets.com/2022/03/top-posts-week-0221-0227.html">Top Posts Feb 21-27: The Complete Collection of Data Science C...</a><li> <a href="https://www.kdnuggets.com/2022/03/informs-2022-business-analytics-conference-career-advancement-opportunities.html">2022 INFORMS Business Analytics Conference: Join us for cuttin...</a><li> <a href="https://www.kdnuggets.com/2022/03/data-valuable-commodity-businesses.html">Data: The Most Valuable Commodity for Businesses</a><li> <a href="https://www.kdnuggets.com/2022/03/top-data-science-tools-2022.html">Top Data Science Tools for 2022</a><li> <a href="https://www.kdnuggets.com/2022/02/mlm-hidden-building-block-machine-learning.html">Calculus: The hidden building block of machine learning</a><li> <a href="https://www.kdnuggets.com/2022/02/create-dataset-machine-learning.html">How to Create a Dataset for Machine Learning</a><li> <a href="https://www.kdnuggets.com/2022/02/analyzing-probability-future-success-intelligence-node-attributes-evolution-model.html">Analyzing the Probability of Future Success with Intelligence ...</a><li> <a href="https://www.kdnuggets.com/2022/02/6-data-science-startups-work-2022.html">6 Data Science Startups To Work For In 2022</a></ul>
<ul id="sidebar-recent">
<li id="widget_crp-2" class="widget widget_widget_crp"><h2 class="widgettitle">Related Posts</h2>
<div class="crp_related_widget  "><ul><li><a href="https://www.kdnuggets.com/2021/05/top-news-week-0524-0530.html" class="crp_link post-127986"><span class="crp_title">Top Stories, May 24-30: A Guide On How To Become A Data Scientist (Step By&hellip;</span></a></li><li><a href="https://www.kdnuggets.com/2021/12/makes-python-ideal-programming-language-startups.html" class="crp_link post-136808"><span class="crp_title">What Makes Python An Ideal Programming Language For Startups</span></a></li><li><a href="https://www.kdnuggets.com/2022/n04.html" class="crp_link post-137616"><span class="crp_title">KDnuggets&trade; News 22:n04, Jan 26: The High Paying Side Hustles for Data&hellip;</span></a></li><li><a href="https://www.kdnuggets.com/2019/11/top-news-week-1118-1124.html" class="crp_link post-101791"><span class="crp_title">Top Stories, Nov 18-24: How to Speed up Pandas by 4x with one line of code;&hellip;</span></a></li><li><a href="https://www.kdnuggets.com/2020/09/free-mit-intro-computer-science-programming-python.html" class="crp_link post-115933"><span class="crp_title">Free From MIT: Intro to Computer Science and Programming in Python</span></a></li><li><a href="https://www.kdnuggets.com/2020/09/poll-python-ide-editor.html" class="crp_link post-116528"><span class="crp_title">New Poll: What Python IDE / Editor you used the most in 2020?</span></a></li></ul><div class="crp_clear"></div></div></li>
<li id="custom_html-3" class="widget_text widget widget_custom_html"><div class="textwidget custom-html-widget"><div class="kdnug-656b0d10fee6eab54d08e114ffc40cd0 kdnug-sidebar-3-sticky" id="kdnug-656b0d10fee6eab54d08e114ffc40cd0"></div>
<br></div></li>
<li id="mc4wp_form_widget-2" class="widget widget_mc4wp_form_widget"><h2 class="widgettitle">Get The Latest News!</h2>
<script type="rocketlazyloadscript">(function() {
	window.mc4wp = window.mc4wp || {
		listeners: [],
		forms: {
			on: function(evt, cb) {
				window.mc4wp.listeners.push(
					{
						event   : evt,
						callback: cb
					}
				);
			}
		}
	}
})();
</script><form id="mc4wp-form-4" class="mc4wp-form mc4wp-form-77281 mc4wp-ajax" method="post" data-id="77281" data-name="Subscribe to KDnuggets News (Sidebar)"><div class="mc4wp-form-fields"><div class="header-container">
<div><img width="200" height="111" src="/wp-content/uploads/newsletter.png" width=100></div>
<p><a href="/news/subscribe.html">Get the FREE collection of 50+ data science cheatsheets and the leading newsletter on AI, Data Science, and Machine Learning, straight to your inbox.</a></p>
</div>
<div class="form-fields">
<div class="field-container"><input type="email" name="EMAIL" size="30" maxlength="60" placeholder="Your Email" required /></div>
<div class="field-container submit-container" "form-button">
<input class="btn" type="submit" value="Sign Up"></div>
<p style="font-size:11px; margin-top: 10px;">By subscribing you accept KDnuggets <a style="font-size:10px" target="_blank" href="https://kdnuggets.local/news/privacy-policy.html">Privacy Policy</a></p>
</div></div><label style="display: none !important;">Leave this field empty if you're human: <input type="text" name="_mc4wp_honeypot" value="" tabindex="-1" autocomplete="off" /></label><input type="hidden" name="_mc4wp_timestamp" value="1646395518" /><input type="hidden" name="_mc4wp_form_id" value="77281" /><input type="hidden" name="_mc4wp_form_element_id" value="mc4wp-form-4" /><div class="mc4wp-response"></div></form></li>
</ul>
</div>
</div>
<div class="breadcrumbs_bottom">
<div class="breadcumb">
<a href="/">KDnuggets Home</a> &raquo; &raquo; Top Programming Languages and Their Uses </div>
</div>
</div>
<br />
<div id="footer">
<br>&copy; 2022 KDnuggets. | <a href="/about/index.html">About KDnuggets</a> &nbsp;| <a href="/contact.html">Contact</a> &nbsp;| <a href="/news/privacy-policy.html">Privacy policy</a> &nbsp;| <a href="/terms-of-service.html">Terms of Service</a>
<br>&nbsp;
<div style="display: none;">
Published on January 19, 2022 by Claire D. Costa</div>
<div class="kd_bottom">
<div class="footer-container">
<div class="footer-news">
<script type="rocketlazyloadscript">(function() {
	window.mc4wp = window.mc4wp || {
		listeners: [],
		forms: {
			on: function(evt, cb) {
				window.mc4wp.listeners.push(
					{
						event   : evt,
						callback: cb
					}
				);
			}
		}
	}
})();
</script><form id="mc4wp-form-5" class="mc4wp-form mc4wp-form-138093 mc4wp-ajax" method="post" data-id="138093" data-name="Subscribe to KDnuggets News (Footer)"><div class="mc4wp-form-fields"><p>
<strong>Subscribe To Our Newsletter</strong>
(Get 50+ Data Science Cheatsheets)
</p>
<div class="footer-news-form">
<input type="email" name="EMAIL" placeholder="Your email address" required />
<input class="btn" type="submit" value="Subscribe" />
<input type="hidden" name="Form Signup Location" value="footer">
</div></div><label style="display: none !important;">Leave this field empty if you're human: <input type="text" name="_mc4wp_honeypot" value="" tabindex="-1" autocomplete="off" /></label><input type="hidden" name="_mc4wp_timestamp" value="1646395518" /><input type="hidden" name="_mc4wp_form_id" value="138093" /><input type="hidden" name="_mc4wp_form_element_id" value="mc4wp-form-5" /><div class="mc4wp-response"></div></form> </div>
</div>
<a class="close-footer" href="#">
<img src="https://www.kdnuggets.com/wp-content/themes/kdn17/images/bar-cross.svg" alt="Close" width="30" height="30">
</a>
</div>
<script type="rocketlazyloadscript" data-rocket-type="text/javascript">
    $('.close-footer').on('click', function(e) {  
        e.preventDefault();
        const d = new Date();
        d.setTime(d.getTime() + (7 * 24 * 60 * 60 * 1000));
        let expires = "expires="+d.toUTCString()
        document.cookie = 'footer_closed=1; expires=' + expires + '; path=/;'; // Set cookie for 7 days
        $('.kd_bottom').hide();
    });
</script>
</div>
<div class="clear"></div>
</div>
<div style="display: none;"><div id="boxzilla-box-138215-content"><script type="rocketlazyloadscript">(function() {
	window.mc4wp = window.mc4wp || {
		listeners: [],
		forms: {
			on: function(evt, cb) {
				window.mc4wp.listeners.push(
					{
						event   : evt,
						callback: cb
					}
				);
			}
		}
	}
})();
</script><form id="mc4wp-form-6" class="mc4wp-form mc4wp-form-138213 mc4wp-ajax" method="post" data-id="138213" data-name="Subscribe to KDnuggets News (Popup Button)"><div class="mc4wp-form-fields"><div class="header-container">
<div><img width="200" height="111" src="/wp-content/uploads/newsletter-alt.png" width=100></div>
<p><a href="/news/subscribe.html">Get the FREE collection of 50+ data science cheatsheets and the leading newsletter on AI, Data Science, and Machine Learning, straight to your inbox.</a></p>
</div>
<div class="form-fields">
<div class="field-container"><input type="email" name="EMAIL" size="30" maxlength="60" placeholder="Your Email" required /></div>
<div class="field-container submit-container" "form-button">
<input class="btn" type="submit" value="Sign Up"></div>
<p style="font-size:11px; margin-top: 10px;">By subscribing you accept KDnuggets <a style="font-size:10px" target="_blank" href="https://kdnuggets.local/news/privacy-policy.html">Privacy Policy</a></p>
<input type="hidden" name="Form Signup Location" value="popup_button">
</div>
</div><label style="display: none !important;">Leave this field empty if you're human: <input type="text" name="_mc4wp_honeypot" value="" tabindex="-1" autocomplete="off" /></label><input type="hidden" name="_mc4wp_timestamp" value="1646395518" /><input type="hidden" name="_mc4wp_form_id" value="138213" /><input type="hidden" name="_mc4wp_form_element_id" value="mc4wp-form-6" /><div class="mc4wp-response"></div></form>
</div><div id="boxzilla-box-82996-content"><script type="rocketlazyloadscript">(function() {
	window.mc4wp = window.mc4wp || {
		listeners: [],
		forms: {
			on: function(evt, cb) {
				window.mc4wp.listeners.push(
					{
						event   : evt,
						callback: cb
					}
				);
			}
		}
	}
})();
</script><form id="mc4wp-form-7" class="mc4wp-form mc4wp-form-138094 mc4wp-ajax" method="post" data-id="138094" data-name="Subscribe to KDnuggets News (Popup)"><div class="mc4wp-form-fields"><div class="header-container">
<div><img width="200" height="111" src="/wp-content/uploads/newsletter-alt.png" width=100></div>
<p><a href="/news/subscribe.html">Get the FREE collection of 50+ data science cheatsheets and the leading newsletter on AI, Data Science, and Machine Learning, straight to your inbox.</a></p>
</div>
<div class="form-fields">
<div class="field-container"><input type="email" name="EMAIL" size="30" maxlength="60" placeholder="Your Email" required /></div>
<div class="field-container submit-container" "form-button">
<input class="btn" type="submit" value="Sign Up"></div>
<p style="font-size:11px; margin-top: 10px;">By subscribing you accept KDnuggets <a style="font-size:10px" target="_blank" href="https://kdnuggets.local/news/privacy-policy.html">Privacy Policy</a></p>
<input type="hidden" name="Form Signup Location" value="popup_main">
</div>
</div><label style="display: none !important;">Leave this field empty if you're human: <input type="text" name="_mc4wp_honeypot" value="" tabindex="-1" autocomplete="off" /></label><input type="hidden" name="_mc4wp_timestamp" value="1646395518" /><input type="hidden" name="_mc4wp_form_id" value="138094" /><input type="hidden" name="_mc4wp_form_element_id" value="mc4wp-form-7" /><div class="mc4wp-response"></div></form>
</div></div><script type="3c362d92d019cfdf947d8c29-text/javascript">(function(){var advanced_ads_ga_UID="UA-361129-1",advanced_ads_ga_anonymIP=!!1;function AdvAdsAdBlockCounterGA(t){this.UID=t,this.analyticsObject="function"==typeof gtag;var n=this;return this.count=function(){gtag("event","AdBlock",{event_category:"Advanced Ads",event_label:"Yes",non_interaction:!0,send_to:n.UID})},function(){if(!n.analyticsObject){var e=document.createElement("script");e.src="https://www.googletagmanager.com/gtag/js?id="+t,e.async=!0,document.body.appendChild(e),window.dataLayer=window.dataLayer||[],window.gtag=function(){dataLayer.push(arguments)},n.analyticsObject=!0,gtag("js",new Date)}var a={send_page_view:!1,transport_type:"beacon"};window.advanced_ads_ga_anonymIP&&(a.anonymize_ip=!0),gtag("config",t,a)}(),this}window.advanced_ads_check_adblocker=function(t){var n=[],e=null;function a(t){(window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||function(t){return setTimeout(t,16)}).call(window,t)}return a((function(){var t=document.createElement("div");t.innerHTML="&nbsp;",t.setAttribute("class","ad_unit ad-unit text-ad text_ad pub_300x250"),t.setAttribute("style","width: 1px !important; height: 1px !important; position: absolute !important; left: 0px !important; top: 0px !important; overflow: hidden !important;"),document.body.appendChild(t),a((function(){var a=window.getComputedStyle&&window.getComputedStyle(t),o=a&&a.getPropertyValue("-moz-binding");e=a&&"none"===a.getPropertyValue("display")||"string"==typeof o&&-1!==o.indexOf("about:");for(var i=0,d=n.length;i<d;i++)n[i](e);n=[]}))})),function(t){null!==e?t(e):n.push(t)}}(),advanced_ads_check_adblocker((function(t){t&&new AdvAdsAdBlockCounterGA(advanced_ads_ga_UID).count()}));})();</script><script type="rocketlazyloadscript">(function() {function maybePrefixUrlField() {
	if (this.value.trim() !== '' && this.value.indexOf('http') !== 0) {
		this.value = "http://" + this.value;
	}
}

var urlFields = document.querySelectorAll('.mc4wp-form input[type="url"]');
if (urlFields) {
	for (var j=0; j < urlFields.length; j++) {
		urlFields[j].addEventListener('blur', maybePrefixUrlField);
	}
}
})();</script><script type="3c362d92d019cfdf947d8c29-text/javascript">
		/* MonsterInsights Scroll Tracking */
			if ( typeof(jQuery) !== 'undefined' ) {
				jQuery( document ).ready(function(){
					function monsterinsights_scroll_tracking_load() {
						if ( ( typeof(__gaTracker) !== 'undefined' && __gaTracker && __gaTracker.hasOwnProperty( "loaded" ) && __gaTracker.loaded == true ) || ( typeof(__gtagTracker) !== 'undefined' && __gtagTracker ) ) {
							(function(factory) {
								factory(jQuery);
							}(function($) {

								/* Scroll Depth */
								"use strict";
								var defaults = {
									percentage: true
								};

								var $window = $(window),
									cache = [],
									scrollEventBound = false,
									lastPixelDepth = 0;

								/*
								 * Plugin
								 */

								$.scrollDepth = function(options) {

									var startTime = +new Date();

									options = $.extend({}, defaults, options);

									/*
									 * Functions
									 */

									function sendEvent(action, label, scrollDistance, timing) {
										if ( 'undefined' === typeof MonsterInsightsObject || 'undefined' === typeof MonsterInsightsObject.sendEvent ) {
											return;
										}
											var type        = 'event';
	var eventName   = action;
	var fieldsArray = {
		event_category : 'Scroll Depth',
		event_label    : label,
		value          : 1,
		non_interaction: true,
		send_to: 'UA-361129-1'
	};

	MonsterInsightsObject.sendEvent( type, eventName, fieldsArray );

	if (arguments.length > 3) {
		var type        = 'event';
		var eventName   = 'timing_complete';
		fieldsArray = {
			event_category : 'Scroll Depth',
			name           : action,
			event_label    : label,
			value          : timing,
			non_interaction: 1,
			send_to: 'UA-361129-1'
		};

		MonsterInsightsObject.sendEvent( type, eventName, fieldsArray );
	}
										}

									function calculateMarks(docHeight) {
										return {
											'25%' : parseInt(docHeight * 0.25, 10),
											'50%' : parseInt(docHeight * 0.50, 10),
											'75%' : parseInt(docHeight * 0.75, 10),
											/* Cushion to trigger 100% event in iOS */
											'100%': docHeight - 5
										};
									}

									function checkMarks(marks, scrollDistance, timing) {
										/* Check each active mark */
										$.each(marks, function(key, val) {
											if ( $.inArray(key, cache) === -1 && scrollDistance >= val ) {
												sendEvent('Percentage', key, scrollDistance, timing);
												cache.push(key);
											}
										});
									}

									function rounded(scrollDistance) {
										/* Returns String */
										return (Math.floor(scrollDistance/250) * 250).toString();
									}

									function init() {
										bindScrollDepth();
									}

									/*
									 * Public Methods
									 */

									/* Reset Scroll Depth with the originally initialized options */
									$.scrollDepth.reset = function() {
										cache = [];
										lastPixelDepth = 0;
										$window.off('scroll.scrollDepth');
										bindScrollDepth();
									};

									/* Add DOM elements to be tracked */
									$.scrollDepth.addElements = function(elems) {

										if (typeof elems == "undefined" || !$.isArray(elems)) {
											return;
										}

										$.merge(options.elements, elems);

										/* If scroll event has been unbound from window, rebind */
										if (!scrollEventBound) {
											bindScrollDepth();
										}

									};

									/* Remove DOM elements currently tracked */
									$.scrollDepth.removeElements = function(elems) {

										if (typeof elems == "undefined" || !$.isArray(elems)) {
											return;
										}

										$.each(elems, function(index, elem) {

											var inElementsArray = $.inArray(elem, options.elements);
											var inCacheArray = $.inArray(elem, cache);

											if (inElementsArray != -1) {
												options.elements.splice(inElementsArray, 1);
											}

											if (inCacheArray != -1) {
												cache.splice(inCacheArray, 1);
											}

										});

									};

									/*
									 * Throttle function borrowed from:
									 * Underscore.js 1.5.2
									 * http://underscorejs.org
									 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
									 * Underscore may be freely distributed under the MIT license.
									 */

									function throttle(func, wait) {
										var context, args, result;
										var timeout = null;
										var previous = 0;
										var later = function() {
											previous = new Date;
											timeout = null;
											result = func.apply(context, args);
										};
										return function() {
											var now = new Date;
											if (!previous) previous = now;
											var remaining = wait - (now - previous);
											context = this;
											args = arguments;
											if (remaining <= 0) {
												clearTimeout(timeout);
												timeout = null;
												previous = now;
												result = func.apply(context, args);
											} else if (!timeout) {
												timeout = setTimeout(later, remaining);
											}
											return result;
										};
									}

									/*
									 * Scroll Event
									 */

									function bindScrollDepth() {

										scrollEventBound = true;

										$window.on('scroll.scrollDepth', throttle(function() {
											/*
											 * We calculate document and window height on each scroll event to
											 * account for dynamic DOM changes.
											 */

											var docHeight = $(document).height(),
												winHeight = window.innerHeight ? window.innerHeight : $window.height(),
												scrollDistance = $window.scrollTop() + winHeight,

												/* Recalculate percentage marks */
												marks = calculateMarks(docHeight),

												/* Timing */
												timing = +new Date - startTime;

											checkMarks(marks, scrollDistance, timing);
										}, 500));

									}

									init();
								};

								/* UMD export */
								return $.scrollDepth;

							}));

							jQuery.scrollDepth();
						} else {
							setTimeout(monsterinsights_scroll_tracking_load, 200);
						}
					}
					monsterinsights_scroll_tracking_load();
				});
			}
		/* End MonsterInsights Scroll Tracking */
		
</script><script type="3c362d92d019cfdf947d8c29-text/javascript" id='advanced-ads-responsive-js-extra'>
/* <![CDATA[ */
var advanced_ads_responsive = {"reload_on_resize":"1"};
/* ]]> */
</script>
<script data-minify="1" type="3c362d92d019cfdf947d8c29-text/javascript" src='https://www.kdnuggets.com/wp-content/cache/min/1/wp-content/plugins/advanced-ads-responsive/public/assets/js/script.js?ver=1646344922' id='advanced-ads-responsive-js'></script>
<script type="rocketlazyloadscript" data-rocket-type='text/javascript' id='rocket-browser-checker-js-after'>
"use strict";var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}var RocketBrowserCompatibilityChecker=function(){function RocketBrowserCompatibilityChecker(options){_classCallCheck(this,RocketBrowserCompatibilityChecker),this.passiveSupported=!1,this._checkPassiveOption(this),this.options=!!this.passiveSupported&&options}return _createClass(RocketBrowserCompatibilityChecker,[{key:"_checkPassiveOption",value:function(self){try{var options={get passive(){return!(self.passiveSupported=!0)}};window.addEventListener("test",null,options),window.removeEventListener("test",null,options)}catch(err){self.passiveSupported=!1}}},{key:"initRequestIdleCallback",value:function(){!1 in window&&(window.requestIdleCallback=function(cb){var start=Date.now();return setTimeout(function(){cb({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-start))}})},1)}),!1 in window&&(window.cancelIdleCallback=function(id){return clearTimeout(id)})}},{key:"isDataSaverModeOn",value:function(){return"connection"in navigator&&!0===navigator.connection.saveData}},{key:"supportsLinkPrefetch",value:function(){var elem=document.createElement("link");return elem.relList&&elem.relList.supports&&elem.relList.supports("prefetch")&&window.IntersectionObserver&&"isIntersecting"in IntersectionObserverEntry.prototype}},{key:"isSlowConnection",value:function(){return"connection"in navigator&&"effectiveType"in navigator.connection&&("2g"===navigator.connection.effectiveType||"slow-2g"===navigator.connection.effectiveType)}}]),RocketBrowserCompatibilityChecker}();
</script>
<script type="3c362d92d019cfdf947d8c29-text/javascript" id='rocket-preload-links-js-extra'>
/* <![CDATA[ */
var RocketPreloadLinksConfig = {"excludeUris":"\/test|\/2021\/12\/5-characteristics-successful-data-scientist.html|\/news\/index.html|\/(?:.+\/)?feed(?:\/(?:.+\/?)?)?$|\/(?:.+\/)?embed\/|\/(index\\.php\/)?wp\\-json(\/.*|$)|\/wp-admin|\/logout|\/wp-login.php|\/refer\/|\/go\/|\/recommend\/|\/recommends\/","usesTrailingSlash":"","imageExt":"jpg|jpeg|gif|png|tiff|bmp|webp|avif","fileExt":"jpg|jpeg|gif|png|tiff|bmp|webp|avif|php|pdf|html|htm","siteUrl":"https:\/\/www.kdnuggets.com","onHoverDelay":"100","rateThrottle":"3"};
/* ]]> */
</script>
<script type="rocketlazyloadscript" data-rocket-type='text/javascript' id='rocket-preload-links-js-after'>
(function() {
"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e=function(){function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}}();function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var t=function(){function n(e,t){i(this,n),this.browser=e,this.config=t,this.options=this.browser.options,this.prefetched=new Set,this.eventTime=null,this.threshold=1111,this.numOnHover=0}return e(n,[{key:"init",value:function(){!this.browser.supportsLinkPrefetch()||this.browser.isDataSaverModeOn()||this.browser.isSlowConnection()||(this.regex={excludeUris:RegExp(this.config.excludeUris,"i"),images:RegExp(".("+this.config.imageExt+")$","i"),fileExt:RegExp(".("+this.config.fileExt+")$","i")},this._initListeners(this))}},{key:"_initListeners",value:function(e){-1<this.config.onHoverDelay&&document.addEventListener("mouseover",e.listener.bind(e),e.listenerOptions),document.addEventListener("mousedown",e.listener.bind(e),e.listenerOptions),document.addEventListener("touchstart",e.listener.bind(e),e.listenerOptions)}},{key:"listener",value:function(e){var t=e.target.closest("a"),n=this._prepareUrl(t);if(null!==n)switch(e.type){case"mousedown":case"touchstart":this._addPrefetchLink(n);break;case"mouseover":this._earlyPrefetch(t,n,"mouseout")}}},{key:"_earlyPrefetch",value:function(t,e,n){var i=this,r=setTimeout(function(){if(r=null,0===i.numOnHover)setTimeout(function(){return i.numOnHover=0},1e3);else if(i.numOnHover>i.config.rateThrottle)return;i.numOnHover++,i._addPrefetchLink(e)},this.config.onHoverDelay);t.addEventListener(n,function e(){t.removeEventListener(n,e,{passive:!0}),null!==r&&(clearTimeout(r),r=null)},{passive:!0})}},{key:"_addPrefetchLink",value:function(i){return this.prefetched.add(i.href),new Promise(function(e,t){var n=document.createElement("link");n.rel="prefetch",n.href=i.href,n.onload=e,n.onerror=t,document.head.appendChild(n)}).catch(function(){})}},{key:"_prepareUrl",value:function(e){if(null===e||"object"!==(void 0===e?"undefined":r(e))||!1 in e||-1===["http:","https:"].indexOf(e.protocol))return null;var t=e.href.substring(0,this.config.siteUrl.length),n=this._getPathname(e.href,t),i={original:e.href,protocol:e.protocol,origin:t,pathname:n,href:t+n};return this._isLinkOk(i)?i:null}},{key:"_getPathname",value:function(e,t){var n=t?e.substring(this.config.siteUrl.length):e;return n.startsWith("/")||(n="/"+n),this._shouldAddTrailingSlash(n)?n+"/":n}},{key:"_shouldAddTrailingSlash",value:function(e){return this.config.usesTrailingSlash&&!e.endsWith("/")&&!this.regex.fileExt.test(e)}},{key:"_isLinkOk",value:function(e){return null!==e&&"object"===(void 0===e?"undefined":r(e))&&(!this.prefetched.has(e.href)&&e.origin===this.config.siteUrl&&-1===e.href.indexOf("?")&&-1===e.href.indexOf("#")&&!this.regex.excludeUris.test(e.href)&&!this.regex.images.test(e.href))}}],[{key:"run",value:function(){"undefined"!=typeof RocketPreloadLinksConfig&&new n(new RocketBrowserCompatibilityChecker({capture:!0,passive:!0}),RocketPreloadLinksConfig).init()}}]),n}();t.run();
}());
</script>
<script type="3c362d92d019cfdf947d8c29-text/javascript" src="https://www.kdnuggets.com/wp-content/plugins/advanced-ads-pro/assets/js/advanced-ads-pro.min.js?ver=2.16.0" id='advanced-ads-pro/front-js'></script>
<script type="3c362d92d019cfdf947d8c29-text/javascript" id='q2w3_fixed_widget-js-extra'>
/* <![CDATA[ */
var q2w3_sidebar_options = [{"sidebar":"recent-widgets","use_sticky_position":false,"margin_top":80,"margin_bottom":0,"stop_elements_selectors":"","screen_max_width":700,"screen_max_height":0,"widgets":["#custom_html-3","#mc4wp_form_widget-2"]}];
/* ]]> */
</script>
<script type="rocketlazyloadscript" data-rocket-type='text/javascript' src='https://www.kdnuggets.com/wp-content/plugins/q2w3-fixed-widget/js/frontend.min.js?ver=6.0.5' id='q2w3_fixed_widget-js' defer></script>
<script type="3c362d92d019cfdf947d8c29-text/javascript" id='advanced-ads-pro/cache_busting-js-extra'>
/* <![CDATA[ */
var advanced_ads_pro_ajax_object = {"ajax_url":"https:\/\/www.kdnuggets.com\/wp-admin\/admin-ajax.php","lazy_load_module_enabled":"","lazy_load":{"default_offset":0,"offsets":[]},"moveintohidden":"","wp_timezone_offset":"-18000"};
/* ]]> */
</script>
<script type="3c362d92d019cfdf947d8c29-text/javascript" src="https://www.kdnuggets.com/wp-content/plugins/advanced-ads-pro/assets/js/base.min.js?ver=2.16.0" id='advanced-ads-pro/cache_busting-js'></script>
<script type="3c362d92d019cfdf947d8c29-text/javascript" id='advadsTrackingScript-js-extra'>
/* <![CDATA[ */
var advadsTracking = {"impressionActionName":"aatrack-records","clickActionName":"aatrack-click","targetClass":"kdnug-target","blogId":"1"};
/* ]]> */
</script>
<script type="3c362d92d019cfdf947d8c29-text/javascript" src="https://www.kdnuggets.com/wp-content/plugins/advanced-ads-tracking/public/assets/js/dist/tracking.min.js?ver=2.2.0" id='advadsTrackingScript-js'></script>
<script type="3c362d92d019cfdf947d8c29-text/javascript" id='advadsTrackingGAFront-js-extra'>
/* <![CDATA[ */
var advadsGALocale = {"Impressions":"Impressions","Clicks":"Clicks"};
/* ]]> */
</script>
<script type="3c362d92d019cfdf947d8c29-text/javascript" src="https://www.kdnuggets.com/wp-content/plugins/advanced-ads-tracking/public/assets/js/dist/ga-tracking.min.js?ver=2.2.0" id='advadsTrackingGAFront-js'></script>
<script type="3c362d92d019cfdf947d8c29-text/javascript" id='boxzilla-js-extra'>
/* <![CDATA[ */
var boxzilla_options = {"testMode":"","boxes":[{"id":138215,"icon":"&times;","content":"","css":{"background_color":"#f0ae37","width":600,"border_color":"#f0ae37","position":"center"},"trigger":false,"animation":"fade","cookie":{"triggered":0,"dismissed":0},"rehide":false,"position":"center","screenWidthCondition":null,"closable":true,"post":{"id":138215,"title":"Subscribe to KDnuggets (Button)","slug":"subscribe-to-kdnuggets-button"}},{"id":82996,"icon":"&times;","content":"","css":{"background_color":"#f0ae37","width":600,"border_color":"#f0ae37","border_style":"double","position":"center"},"trigger":{"method":"time_on_page","value":"3"},"animation":"fade","cookie":{"triggered":0,"dismissed":336},"rehide":false,"position":"center","screenWidthCondition":null,"closable":true,"post":{"id":82996,"title":"Subscribe to KDnuggets","slug":"subscribe-to-kdnuggets"}}]};
/* ]]> */
</script>
<script type="rocketlazyloadscript" data-rocket-type='text/javascript' src='https://www.kdnuggets.com/wp-content/plugins/boxzilla/assets/js/script.min.js?ver=3.2.25' id='boxzilla-js' defer></script>
<script type="rocketlazyloadscript" data-minify="1" data-rocket-type='text/javascript' defer src='https://www.kdnuggets.com/wp-content/cache/min/1/wp-content/plugins/mailchimp-for-wp/assets/js/forms.js?ver=1646344922' id='mc4wp-forms-api-js'></script>
<script type="3c362d92d019cfdf947d8c29-text/javascript" id='mc4wp-ajax-forms-js-extra'>
/* <![CDATA[ */
var mc4wp_ajax_vars = {"loading_character":"\u2022","ajax_url":"https:\/\/www.kdnuggets.com\/wp-admin\/admin-ajax.php?action=mc4wp-form","error_text":"Oops. Something went wrong. Please try again later."};
/* ]]> */
</script>
<script type="rocketlazyloadscript" data-minify="1" data-rocket-type='text/javascript' src='https://www.kdnuggets.com/wp-content/cache/min/1/wp-content/plugins/mc4wp-premium/ajax-forms/assets/js/ajax-forms.js?ver=1646344922' id='mc4wp-ajax-forms-js' defer></script>
<script type="3c362d92d019cfdf947d8c29-text/javascript" id='boxzilla-stats-js-extra'>
/* <![CDATA[ */
var boxzilla_stats_config = {"ajaxurl":"https:\/\/www.kdnuggets.com\/wp-admin\/admin-ajax.php?action=boxzilla_stats_track"};
/* ]]> */
</script>
<script type="rocketlazyloadscript" data-rocket-type='text/javascript' src='https://www.kdnuggets.com/wp-content/plugins/boxzilla-stats/assets/js/tracking.min.js?ver=1.1.3' id='boxzilla-stats-js' defer></script>
<script type="rocketlazyloadscript">window.advads_admin_bar_items = [];</script><script type="3c362d92d019cfdf947d8c29-text/javascript">window.advads_ajax_queries = [{"id":"leaderboard-ros","method":"placement","params":{"previous_method":"placement","previous_id":"leaderboard-ros","post":"r0","url_parameter":"\/2021\/05\/top-programming-languages.html","placement_type":"default","placement_position":"center","inline-css":"","cache-busting":"auto","output":{"class":["kdnug-leaderboard-ros"],"placement_id":"leaderboard-ros"}},"elementid":"kdnug-a3af61c1e1129e0f856a5189c5abbc8b","blog_id":1},{"id":"ros-mobile-in-content","method":"placement","params":{"inline-css":"","pro_minimum_length":"500","placement_conditions":{"visitors":[{"type":"mobile","operator":"is"}]},"position":"after","index":3,"tag":"p","xpath":"","cache-busting":"auto","previous_method":"placement","previous_id":"ros-mobile-in-content","post":"r0","url_parameter":"\/2021\/05\/top-programming-languages.html","placement_type":"post_content","output":{"class":["kdnug-ros-mobile-in-content"],"placement_id":"ros-mobile-in-content"}},"elementid":"kdnug-077fa7d86b48b98f06a070472f1ba773","blog_id":1},{"id":"med-rectangle-ros","method":"placement","params":{"previous_method":"placement","previous_id":"med-rectangle-ros","post":"r0","url_parameter":"\/2021\/05\/top-programming-languages.html","placement_type":"default","inline-css":"","cache-busting":"auto","output":{"class":["kdnug-med-rectangle-ros"],"placement_id":"med-rectangle-ros"}},"elementid":"kdnug-28e09373120b878b3a75adb49317c253","blog_id":1},{"id":"med-rectangle-ros-sidebar-1","method":"placement","params":{"previous_method":"placement","previous_id":"med-rectangle-ros-sidebar-1","post":"r0","url_parameter":"\/2021\/05\/top-programming-languages.html","placement_type":"default","inline-css":"","cache-busting":"auto","output":{"class":["kdnug-med-rectangle-ros-sidebar-1"],"placement_id":"med-rectangle-ros-sidebar-1"}},"elementid":"kdnug-bb55da2c3649ef680fe96c36783ac55d","blog_id":1},{"id":"sidebar-3-sticky","method":"placement","params":{"previous_method":"placement","previous_id":"sidebar-3-sticky","post":"r0","url_parameter":"\/2021\/05\/top-programming-languages.html","placement_type":"default","inline-css":"","placement_conditions":{"visitors":[{"type":"mobile","operator":"is_not"}]},"cache-busting":"auto","output":{"class":["kdnug-sidebar-3-sticky"],"placement_id":"sidebar-3-sticky"}},"elementid":"kdnug-656b0d10fee6eab54d08e114ffc40cd0","blog_id":1}];
window.advads_ajax_queries_args = {"r0":{"id":127794,"author":"229","post_type":"post"}};
( window.advanced_ads_ready || jQuery( document ).ready ).call( null, function() {if ( !window.advanced_ads_pro ) {console.log("Advanced Ads Pro: cache-busting can not be initialized");} });</script><script type="3c362d92d019cfdf947d8c29-text/javascript">!function(){window.advanced_ads_ready_queue=window.advanced_ads_ready_queue||[],advanced_ads_ready_queue.push=window.advanced_ads_ready;for(var d=0,a=advanced_ads_ready_queue.length;d<a;d++)advanced_ads_ready(advanced_ads_ready_queue[d])}();</script><script id="kdnug-tracking" type="3c362d92d019cfdf947d8c29-text/javascript">var advads_tracking_ads = {};var advads_tracking_urls = {"1":"https:\/\/www.kdnuggets.com\/wp-admin\/admin-ajax.php"};var advads_tracking_methods = {"1":"ga"};var advads_tracking_parallel = {"1":false};var advads_tracking_linkbases = {"1":"https:\/\/www.kdnuggets.com\/linkout\/"};var advads_gatracking_uids = {"1":"UA-361129-1"};var advads_gatracking_allads = {"1":{"138922":{"title":"s8-usd-2203-300","target":"https:\/\/ad.doubleclick.net\/ddm\/clk\/522002320;329786957;h","impression":true,"click":true},"136735":{"title":"s6-streamsets-2203-300-handbook","target":"https:\/\/go.streamsets.com\/data-engineers-handbook.html?utm_medium=social_pd&utm_source=KdNuggets&utm_campaign=22_q4data_engineer%92s_handbook","impression":true,"click":true},"138566":{"title":"t2-hp-2202-750","target":"https:\/\/www.hp.com\/us-en\/workstations\/industries\/data-science\/unlocked-with-z.html","impression":true,"click":true},"138565":{"title":"h1-hp-2202-600","target":"https:\/\/www.hp.com\/us-en\/workstations\/industries\/data-science\/unlocked-with-z.html","impression":true,"click":true},"138221":{"title":"s7-tigergraph-2202-300","target":"https:\/\/www.tigergraph.com\/graph-for-all?utm_campaign=2022.02%20MDC-%20KDNugget&utm_source=Banner&utm_medium=300x250","impression":true,"click":true},"138030":{"title":"t5-visplore-2201-750-b","target":"https:\/\/visplore.com\/use-case\/time-series-labeling\/?utm_source=kdnuggets&utm_medium=banner&utm_campaign=va","impression":true,"click":true},"137808":{"title":"stanford-2202-728","target":"https:\/\/learn.stanford.edu\/OA-DIS-AI-KDnuggets-2020-02_LP-KDnuggets.html?%20utm_medium=display&utm_term=&utm_campaign=ai&utm_source=kdnuggets","impression":true,"click":true},"137197":{"title":"s6-streamsets-2203-300","target":"https:\/\/streamsets.com\/products\/dataops-platform\/?utm_medium=social_pd&utm_source=KdNuggets&utm_campaign=22_q4streamsets_dataops_platform","impression":true,"click":true},"137033":{"title":"m2-rework-2201-600-summit","target":"https:\/\/www.re-work.co\/summits\/london-ai-finance-summit-2022?utm_source=referral&utm_medium=media_partner&utm_campaign=kdnuggets","impression":true,"click":true},"136880":{"title":"SASUS_KD Nuggets_Learn_Talent Development_300x250 ROS_145733","target":"","impression":true,"click":true},"136834":{"title":"SASUS_KD Nuggets_Discovering New Possibilities_300x250 ROS_205918","target":"","impression":true,"click":true},"136740":{"title":"t4-toloka-2201-750-a","target":"https:\/\/toloka.ai\/?utm_source=kdnuggets&utm_medium=banner&utm_campaign=jumpstartml","impression":true,"click":true},"136745":{"title":"s5-sparkbeyond-2201-300-geo-ab2","target":"https:\/\/www.sparkbeyond.com\/articles\/advanced-geospatial-feature-discovery?utm_source=KDNuggets&utm_medium=Banner2&utm_campaign=Geospatial","impression":true,"click":true},"136737":{"title":"t5-visplore-2201-750-a","target":"https:\/\/visplore.com\/use-case\/time-series-labeling\/?utm_source=kdnuggets&utm_medium=banner&utm_campaign=vb","impression":true,"click":true},"136744":{"title":"s5-sparkbeyond-2201-300-geo-ab1","target":"https:\/\/www.sparkbeyond.com\/articles\/advanced-geospatial-feature-discovery?utm_source=KDNuggets&utm_medium=Banner1&utm_campaign=Geospatial","impression":true,"click":true},"136736":{"title":"t3-domino-2201-750-a","target":"https:\/\/rev.dominodatalab.com\/?utm_campaign=rev_2021&utm_source=kdnuggets&utm_medium=display","impression":true,"click":true},"136734":{"title":"s6-streamsets-2201-300-platform","target":"https:\/\/streamsets.com\/products\/dataops-platform\/?utm_medium=social_pd&utm_source=KdNuggets&utm_campaign=22_q4streamsets_dataops_platform","impression":true,"click":true},"136796":{"title":"w1-formulated-2201-600-dss-a","target":"https:\/\/info.datascience.salon\/datasecops-what-it-is-and-how-it-keeps-your-data-secure-and-compliant?utm_campaign=DSS%20Webinars&utm_source=KDN","impression":true,"click":true},"136795":{"title":"m3-formulated-2201-600-dss-a","target":"https:\/\/www.ml-convergence.com\/?utm_source=KDNAD&utm_medium=KDNAD&utm_campaign=KDNAD&utm_id=KDNAD","impression":true,"click":true},"136377":{"title":"xpressoai 680 HP 2","target":"https:\/\/xpresso.ai\/free-trial\/?utm_campaign=3PSP-KDN-US-March-2022&utm_source=KDN&utm_medium=cpm&utm_term=BA&utm_content=start-a-free-trial","impression":true,"click":true},"136256":{"title":"sas 300x250 jan-dec","target":"","impression":true,"click":true},"136220":{"title":"kineme 300x250","target":"https:\/\/www.knime.com\/just-knime-it?utm_source=kdnuggets&utm_medium=display&utm_campaign=Just-KNIME-It","impression":true,"click":true},"136191":{"title":"northwestern education 680","target":"http:\/\/sps.northwestern.edu\/info\/data-science-masters.php?utm_source=KDNuggets_L&utm_medium=banner600x80&utm_term=FY21&utm_content=MSDS&utm_campaign=MSDS_KDnuggets21&src=kdnuggets_msds_banner600x80_julFY21_L","impression":true,"click":true},"136177":{"title":"odsc meetings 680","target":"https:\/\/bit.ly\/3rQ4FH3","impression":true,"click":true},"136107":{"title":"anaconda 300x250","target":"https:\/\/anaconda.cloud\/sign-up?utm_medium=ad&utm_source=KDNuggets&utm_campaign=nucleus","impression":true,"click":true},"136103":{"title":"pny 750x100","target":"http:\/\/www.pny.com\/gtc","impression":true,"click":true},"136101":{"title":"sas 300x250 oct-dec","target":"","impression":true,"click":true},"136095":{"title":"trifacta 728x90","target":"https:\/\/www.trifacta.com\/gated-form\/six-steps-data-engineering-cloud\/?utm_source=KDNuggetsad","impression":true,"click":true}}};var advads_gatracking_anonym = false;var advads_gatracking_transmitpageqs = {};</script><script type="3c362d92d019cfdf947d8c29-text/javascript">window.lazyLoadOptions={elements_selector:"iframe[data-lazy-src]",data_src:"lazy-src",data_srcset:"lazy-srcset",data_sizes:"lazy-sizes",class_loading:"lazyloading",class_loaded:"lazyloaded",threshold:300,callback_loaded:function(element){if(element.tagName==="IFRAME"&&element.dataset.rocketLazyload=="fitvidscompatible"){if(element.classList.contains("lazyloaded")){if(typeof window.jQuery!="undefined"){if(jQuery.fn.fitVids){jQuery(element).parent().fitVids()}}}}}};window.addEventListener('LazyLoad::Initialized',function(e){var lazyLoadInstance=e.detail.instance;if(window.MutationObserver){var observer=new MutationObserver(function(mutations){var image_count=0;var iframe_count=0;var rocketlazy_count=0;mutations.forEach(function(mutation){for(var i=0;i<mutation.addedNodes.length;i++){if(typeof mutation.addedNodes[i].getElementsByTagName!=='function'){continue}
if(typeof mutation.addedNodes[i].getElementsByClassName!=='function'){continue}
images=mutation.addedNodes[i].getElementsByTagName('img');is_image=mutation.addedNodes[i].tagName=="IMG";iframes=mutation.addedNodes[i].getElementsByTagName('iframe');is_iframe=mutation.addedNodes[i].tagName=="IFRAME";rocket_lazy=mutation.addedNodes[i].getElementsByClassName('rocket-lazyload');image_count+=images.length;iframe_count+=iframes.length;rocketlazy_count+=rocket_lazy.length;if(is_image){image_count+=1}
if(is_iframe){iframe_count+=1}}});if(image_count>0||iframe_count>0||rocketlazy_count>0){lazyLoadInstance.update()}});var b=document.getElementsByTagName("body")[0];var config={childList:!0,subtree:!0};observer.observe(b,config)}},!1)</script><script data-no-minify="1" async src="https://www.kdnuggets.com/wp-content/plugins/wp-rocket/assets/js/lazyload/17.5/lazyload.min.js" type="3c362d92d019cfdf947d8c29-text/javascript"></script></div>


<script type="rocketlazyloadscript" data-rocket-type='text/javascript'>
//<![CDATA[
var la=!1;window.addEventListener("scroll",function(){(0!=document.documentElement.scrollTop&&!1===la||0!=document.body.scrollTop&&!1===la)&&(!function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://s7.addthis.com/js/300/addthis_widget.js#pubid=gpsaddthis";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(e,a)}(),la=!0)},!0);
//]]>
</script>

<script src="/cdn-cgi/scripts/7d0fa10a/cloudflare-static/rocket-loader.min.js" data-cf-settings="3c362d92d019cfdf947d8c29-|49" defer=""></script></body>
</html>
