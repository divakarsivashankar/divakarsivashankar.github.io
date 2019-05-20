webpackJsonp(["styles"],{

/***/ "../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"import\":false}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":false}!../../../../../src/styles.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--7-1!../node_modules/postcss-loader/lib/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--7-1!../node_modules/postcss-loader/lib/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"import\":false}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":false}!../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n\nhtml,\nbody {\n    font-family: 'Roboto', sans-serif !important;\n}\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    /* margin-bottom: 25px; */\n    vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n    display: block;\n}\n\nbody {\n    line-height: 1;\n}\n\nol,\nul {\n    list-style: none;\n}\n\nblockquote,\nq {\n    quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n    content: '';\n    content: none;\n}\n\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}\n\n*,\n ::after,\n ::before {\n    -webkit-box-sizing: initial !important;\n            box-sizing: initial !important;\n}\n\nbody {\n    width: 100%;\n    height: 100%;\n    background-color: #272727 !important;\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23444444' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23444444'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E\");\n}\n\n.main-container {\n    padding-left: 0;\n    padding-right: 0 !important;\n    padding-left: 56px;\n    min-width: 1310px;\n}\n\n#navigation {\n    min-height: 500px;\n    height: 100%;\n    width: 56px;\n    background: #181818;\n    color: #fff;\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 2;\n}\n\nnav ul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n}\n\nnav ul li a {\n    display: block;\n    height: 30px;\n    width: 30px;\n    padding: 13px;\n    -webkit-transition: 0.3s all ease-out;\n    transition: 0.3s all ease-out;\n}\n\na svg path {\n    -webkit-transition: 0.3s all ease-out;\n    transition: 0.3s all ease-out;\n}\n\na.active svg path {\n    fill: #5bdbbb;\n}\n\nnav ul li a:hover svg path {\n    fill: #5bdbbb;\n}\n\n.logo a {\n    display: inline-block;\n    margin: 13px;\n}\n\n.inner-container {\n    padding-left: 15px;\n    padding-right: 15px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    height: 100vh;\n}\n\n.mycontent-section {\n    \n}\n\n.content-section,\n.media-section {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n}\n\n.content-section {\n    margin-left: 50px;\n    margin-right: 50px;\n    position: relative;\n}\n\nh1.info-title {\n    font-size: 0;\n    line-height: 54px;\n}\n\n.info-title-container {\n    position: absolute;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    top: 50%;\n    z-index: 1;\n}\n\n.social-links {\n    margin-top: 20px;\n    text-align: right;\n}\n\n.social-links div {\n    display: inline-block;\n}\n\n.social-links a {\n    font-size: 2rem;\n    color: #4d4d4d;\n    -webkit-transition: 0.3s color ease-out;\n    transition: 0.3s color ease-out;\n}\n\n.social-links a:hover {\n    font-size: 2rem;\n    color: white;\n}\n\n.social-links ul {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    list-style: none;\n    margin: 0;\n    padding: 0;\n}\n\n.social-links ul li a {\n    padding: 10px;\n}\n\nimg#my-photo {\n    -webkit-transform: scale(0, 0);\n            transform: scale(0, 0);\n    -webkit-transition: 0.5s all ease-in-out;\n    transition: 0.5s all ease-in-out;\n}\n\nimg#my-photo.show-in {\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1);\n}\n\nh1.info-title span {\n    opacity: 0;\n    font-size: 56px;\n    color: white;\n    display: inline-block;\n    cursor: default;\n}\n\nh1.info-title span.show {\n    opacity: 1;\n}\n\n.elastic {\n    -webkit-animation: Elastic 0.5s;\n            animation: Elastic 0.5s;\n}\n\nh1.info-title span.bounce {\n    -webkit-animation: BounceIn 0.5s;\n            animation: BounceIn 0.5s;\n    opacity: 1;\n}\n\n@-webkit-keyframes Elastic {\n    0% {\n        transform: matrix3d(1, 0, 0.00, 0, 0.00, 1, 0.00, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n        -webkit-transform: matrix3d(1, 0, 0.00, 0, 0.00, 1, 0.00, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n    }\n    25% {\n        transform: matrix3d(1.1, 0, 0.00, 0, 0.00, 0.9, 0.00, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n        -webkit-transform: matrix3d(1.1, 0, 0.00, 0, 0.00, 0.9, 0.00, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n    }\n    50% {\n        transform: matrix3d(0.8, 0, 0.00, 0, 0.00, 1.1, 0.00, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n        -webkit-transform: matrix3d(0.8, 0, 0.00, 0, 0.00, 1.1, 0.00, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n    }\n    75% {\n        transform: matrix3d(1, 0, 0.00, 0, 0.00, 0.9, 0.00, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n        -webkit-transform: matrix3d(1, 0, 0.00, 0, 0.00, 0.9, 0.00, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n    }\n    100% {\n        transform: matrix3d(1, 0, 0.00, 0, 0.00, 1, 0.00, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n        -webkit-transform: matrix3d(1, 0, 0.00, 0, 0.00, 1, 0.00, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n    }\n}\n\n@keyframes Elastic {\n    0% {\n        transform: matrix3d(1, 0, 0.00, 0, 0.00, 1, 0.00, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n        -webkit-transform: matrix3d(1, 0, 0.00, 0, 0.00, 1, 0.00, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n    }\n    25% {\n        transform: matrix3d(1.1, 0, 0.00, 0, 0.00, 0.9, 0.00, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n        -webkit-transform: matrix3d(1.1, 0, 0.00, 0, 0.00, 0.9, 0.00, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n    }\n    50% {\n        transform: matrix3d(0.8, 0, 0.00, 0, 0.00, 1.1, 0.00, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n        -webkit-transform: matrix3d(0.8, 0, 0.00, 0, 0.00, 1.1, 0.00, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n    }\n    75% {\n        transform: matrix3d(1, 0, 0.00, 0, 0.00, 0.9, 0.00, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n        -webkit-transform: matrix3d(1, 0, 0.00, 0, 0.00, 0.9, 0.00, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n    }\n    100% {\n        transform: matrix3d(1, 0, 0.00, 0, 0.00, 1, 0.00, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n        -webkit-transform: matrix3d(1, 0, 0.00, 0, 0.00, 1, 0.00, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n    }\n}\n\n@-webkit-keyframes BounceIn {\n    0% {\n        opacity: 0;\n        -webkit-transform: scale3d(.3, .3, .3);\n        transform: scale3d(.3, .3, .3)\n    }\n    20% {\n        -webkit-transform: scale3d(1.1, 1.1, 1.1);\n        transform: scale3d(1.1, 1.1, 1.1)\n    }\n    40% {\n        -webkit-transform: scale3d(.9, .9, .9);\n        transform: scale3d(.9, .9, .9)\n    }\n    60% {\n        opacity: 1;\n        -webkit-transform: scale3d(1.03, 1.03, 1.03);\n        transform: scale3d(1.03, 1.03, 1.03)\n    }\n    80% {\n        -webkit-transform: scale3d(.97, .97, .97);\n        transform: scale3d(.97, .97, .97)\n    }\n    100% {\n        opacity: 1;\n        -webkit-transform: scale3d(1, 1, 1);\n        transform: scale3d(1, 1, 1)\n    }\n}\n\n@keyframes BounceIn {\n    0% {\n        opacity: 0;\n        -webkit-transform: scale3d(.3, .3, .3);\n        transform: scale3d(.3, .3, .3)\n    }\n    20% {\n        -webkit-transform: scale3d(1.1, 1.1, 1.1);\n        transform: scale3d(1.1, 1.1, 1.1)\n    }\n    40% {\n        -webkit-transform: scale3d(.9, .9, .9);\n        transform: scale3d(.9, .9, .9)\n    }\n    60% {\n        opacity: 1;\n        -webkit-transform: scale3d(1.03, 1.03, 1.03);\n        transform: scale3d(1.03, 1.03, 1.03)\n    }\n    80% {\n        -webkit-transform: scale3d(.97, .97, .97);\n        transform: scale3d(.97, .97, .97)\n    }\n    100% {\n        opacity: 1;\n        -webkit-transform: scale3d(1, 1, 1);\n        transform: scale3d(1, 1, 1)\n    }\n}\n\n.inner-container {\n    padding-left: 15px;\n    padding-right: 15px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n\n.page-title h1 {\n    font-size: 60px;\n    color: white;\n    margin-top: 30px;\n    margin-bottom: 15px;\n}\n\n.content-section p {\n    font-size: 18px;\n    color: #989898;\n    line-height: 1.75rem;\n    margin-bottom: 10px;\n}\n\n.content-section h3 {\n    color: #5bdbbb;\n    font-size: 16px;\n    margin-top: 5px;\n    margin-bottom: 15px;\n    position: relative;\n    text-transform: uppercase;\n}\n\n.content-section h4 {\n    font-size: 13px;\n    color: white;\n    text-transform: uppercase;\n    padding-top: 5px;\n    padding-bottom: 15px;\n}\n\n.content-section h5 {\n    font-size: 10px;\n    color: white;\n    text-transform: uppercase;\n    padding-top: 5px;\n    padding-bottom: 10px;\n}\n\n.content-section h3:after {\n    content: '';\n    height: 3px;\n    width: 30px;\n    background: #FF5722;\n    display: block;\n    position: absolute;\n    bottom: -10px;\n}\n\n.content-section,\n.media-section {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n}\n\n.content-section {\n    margin-left: 50px;\n    margin-right: 50px;\n}\n\nagm-map {\n    height: 100vh;\n}\n\n.ham,\n.clear {\n    display: none;\n}\n\n.content-section {\n    font-size: 14px;\n}\n\n.content-section ul li span {\n    color: #989898;\n    line-height: 1.5;\n    padding-left: 19px;\n    display: block;\n    position: relative;\n}\n\n.content-section ul li {\n    margin-bottom: 7px;\n}\n\n.content-section ul li span i {\n    font-weight: 700;\n    font-style: normal;\n}\n\n.quotes:after,\n.quotes:before {\n    content: '\"';\n    font-size: 20px;\n    color: #333;\n}\n\n.content-section ul li span:before {\n    content: '';\n    height: 2px;\n    width: 7px;\n    display: block;\n    background: #5bdbbb;\n    position: absolute;\n    top: 10px;\n    left: 0;\n}\n\n.bx-wrapper {\n    -webkit-box-shadow: none !important;\n            box-shadow: none !important;\n    border: 0 !important;\n    background: #000 !important;\n    height: 442px;\n    position: relative;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    top: 50%;\n}\n\n.bx-wrapper img {\n    height: 442px;\n    margin: 0 auto;\n}\n\n.bx-wrapper .bx-pager.bx-default-pager a {\n    background: transparent;\n    width: 7px;\n    height: 7px;\n    border: 2px solid #585858;\n    border-radius: 50%;\n}\n\n.bx-wrapper .bx-pager.bx-default-pager a:hover,\n.bx-wrapper .bx-pager.bx-default-pager a.active,\n.bx-wrapper .bx-pager.bx-default-pager a:focus {\n    background: #585858;\n}\n\n@media only screen and (max-width: 768px) {\n    /* For mobile phones: */\n    .ham {\n        display: block;\n        float: right;\n        height: 60px;\n        width: 60px;\n        background: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22UTF-8%22%3F%3E%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 viewBox%3D%220 0 24 24%22 version%3D%221.1%22 fill%3D%22%23ffffff%22 width%3D%2248px%22 height%3D%2248px%22%3E%3Cg id%3D%22surface1%22 fill%3D%22%23ffffff%22%3E%3Cpath style%3D%22 %22 d%3D%22M 2 5 L 2 7 L 22 7 L 22 5 Z M 2 11 L 2 13 L 22 13 L 22 11 Z M 2 17 L 2 19 L 22 19 L 22 17 Z %22 fill%3D%22%23ffffff%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\") center/50% no-repeat;\n        -webkit-transition: 0.3s background-color ease;\n        transition: 0.3s background-color ease;\n    }\n    .clear {\n        clear: both;\n        display: block;\n    }\n    #navigation {\n        min-height: auto;\n        height: 60px;\n        width: 100%;\n        position: relative;\n        top: initial;\n        left: initial;\n        z-index: 3;\n    }\n    .main-container {\n        padding-left: 0;\n        min-width: auto;\n    }\n    .logo {\n        float: left;\n    }\n    .logo a {\n        margin: 9px 15px;\n    }\n    .main-navigation {\n        position: absolute;\n        top: 100%;\n        z-index: 2;\n        background: #000;\n        text-align: center;\n        left: 0;\n        right: 0;\n        -webkit-transition: 0.3s all ease;\n        transition: 0.3s all ease;\n        overflow: hidden;\n    }\n    .hide {\n        height: 0;\n    }\n    .main-navigation nav {\n        display: inline-block;\n    }\n    nav ul {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n    }\n    .content-section {\n        margin-left: 0;\n        margin-right: 0;\n    }\n    .inner-container {\n        display: block;\n    }\n    .content-section p {\n        font-size: 14px;\n        line-height: normal;\n    }\n    .page-title h1 {\n        font-size: 36px;\n        margin-top: 15px;\n        margin-bottom: 7px;\n        font-family: 'Roboto', sans-serif;\n    }\n    .close {\n        background: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22UTF-8%22%3F%3E%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 viewBox%3D%220 0 24 24%22 version%3D%221.1%22 fill%3D%22%23ffffff%22 width%3D%2248px%22 height%3D%2248px%22%3E%3Cg id%3D%22surface1%22 fill%3D%22%23ffffff%22%3E%3Cpath style%3D%22 %22 d%3D%22M 5.625 4.21875 L 4.21875 5.625 L 10.59375 12 L 4.21875 18.375 L 5.625 19.78125 L 12 13.40625 L 18.375 19.78125 L 19.78125 18.375 L 13.40625 12 L 19.78125 5.625 L 18.375 4.21875 L 12 10.59375 Z %22 fill%3D%22%23ffffff%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\") center/50% no-repeat #000;\n    }\n    #my-photo {\n        max-width: 500px;\n        width: 100%;\n    }\n    h1.info-title span {\n        font-size: 36px;\n    }\n    .info-title-container {\n        position: relative;\n        -webkit-transform: initial;\n                transform: initial;\n    }\n    .content-section h1 {\n        line-height: normal;\n        position: initial;\n        -webkit-transform: none;\n                transform: none;\n        top: initial;\n        z-index: unset;\n    }\n    .content-section {\n        margin-bottom: 20px;\n    }\n    .social-links {\n        margin-bottom: 20px;\n    }\n    .bx-wrapper {\n        position: relative;\n        -webkit-transform: initial;\n                transform: initial;\n    }\n    nav ul li a {\n        padding: 10px;\n    }\n}", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "../../../../style-loader/addStyles.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/styles.css");


/***/ })

},[2]);
//# sourceMappingURL=styles.bundle.js.map