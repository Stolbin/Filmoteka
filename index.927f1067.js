!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var a={id:e,exports:{}};return r[e]=a,t.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},t.parcelRequired7c6=a),a.register("5bDA3",(function(t,r){var n,o,s,i;n=t.exports,o="onSearchFormSubmit",s=function(){return v},Object.defineProperty(n,o,{get:s,set:i,enumerable:!0,configurable:!0});var l=a("bpxeT"),u=a("2TvXO"),c=a("h6c0i"),d=a("8fdg5"),f=a("2ibrE"),g=a("4Nugj"),p=a("jcFG7"),m=(p=a("jcFG7"),new(0,d.default));function v(e){return y.apply(this,arguments)}function y(){return y=e(l)(e(u).mark((function t(r){var n;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),m.page=1,m.query=g.refs.inputEl?g.refs.inputEl.value.trim():"",localStorage.setItem("query-value",m.query),""!==m.query){e.next=8;break}return"en"===localStorage.getItem("language")?(c.Notify.failure("Sorry, You need to write something in search query. Please try again."),console.log("en")):"ua"===localStorage.getItem("language")&&c.Notify.failure("Вибачте, вам потрібно написати щось в пошуковому полі. Спробуйте знову."),g.refs.warningContainer.classList.remove("is-hidden"),e.abrupt("return");case 8:return e.next=10,m.getSearchFilms();case 10:if(n=e.sent,m.totalResults=n.total_results,e.prev=12,(0,f.renderFilmCard)(n),g.refs.inputEl.value="",p.pagination.reset(n.total_results),0!==m.totalResults){e.next=20;break}return(0,p.cleanPagination)(),"en"===localStorage.getItem("language")?(c.Notify.failure("Sorry, there are no films matching your search query. Please try again."),console.log("en")):"ua"===localStorage.getItem("language")&&c.Notify.info("Вибачте, не знайдено жодного філльму по вашому запиту. Будь ласка, спробуйте ще"),e.abrupt("return");case 20:m.totalResults>=1&&("en"===localStorage.getItem("language")?c.Notify.success("Hooray! We found ".concat(m.totalResults," films.")):"ua"===localStorage.getItem("language")&&c.Notify.success("Ура! Ми знайшли по вашому запиту ".concat(m.totalResults," результатів."))),e.next=26;break;case 23:e.prev=23,e.t0=e.catch(12),console.log(e.t0);case 26:case"end":return e.stop()}}),t,null,[[12,23]])}))),y.apply(this,arguments)}g.refs.inputEl&&(g.refs.inputEl.addEventListener("click",(function(){if(""!==m.query)return void g.refs.searchForm.reset()})),g.refs.searchForm.addEventListener("submit",v))}));var o=a("4Nugj");var s=a("9I33b"),i=a("8BN3R"),l=a("bpxeT"),u=a("2TvXO"),c=(o=a("4Nugj"),a("5bDA3")),d=a("8fdg5"),f=a("2ibrE"),g=a("jcFG7"),p=new(0,d.default);function m(){return(m=e(l)(e(u).mark((function t(){var r;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.getPopularFilms();case 2:r=e.sent;try{(0,f.renderFilmCard)(r),g.pagination.reset(r.total_results)}catch(e){console.log(e)}case 4:case"end":return e.stop()}}),t)})))).apply(this,arguments)}var v=a("puS1k"),y=a("5xtVg");var h=a("73ES2");a("3fu6U"),a("bRreI");var w=a("jQRv7"),b=a("euqRf"),S=a("3jSZ7");a("dJcGT");b=a("euqRf");a("aGoAS");var F;S=a("3jSZ7");(F=new(0,y.Modal)(".navigation__open--btn",".modal__log-in--close-btn",".overlay__log-in",".modal__log-in")).openBtn.addEventListener("click",F.openModal.bind(F)),(0,w.homeHeaderLinkBntLogic)(),(0,S.onFirstLoadTheme)(),(0,S.getChengeMainThemeByClick)(),(0,b.authHandler)(),(0,s.sliderRevenueFilms)(),function(){m.apply(this,arguments)}(),""===p.query||o.refs.searchForm.getNewFilms("submit",c.onSearchFormSubmit),(0,h.filmCardModalWindow)(),(0,i.scrolToTop)(),o.refs.buttonShowPassword.addEventListener("click",(function(){"password"===o.refs.inputPassword.getAttribute("type")?(o.refs.inputPassword.removeAttribute("type"),o.refs.inputPassword.setAttribute("type","text"),o.refs.iconForShowPassword.classList.add("visually-hidden"),o.refs.iconForUnShowPassword.classList.remove("visually-hidden")):(o.refs.inputPassword.removeAttribute("type"),o.refs.inputPassword.setAttribute("type","password"),o.refs.iconForShowPassword.classList.remove("visually-hidden"),o.refs.iconForUnShowPassword.classList.add("visually-hidden"))})),(0,v.onTeamModal)()}();
//# sourceMappingURL=index.927f1067.js.map
