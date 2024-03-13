/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* Basic reset */\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n/* Header styles */\r\nheader {\r\n    background-color: #333;\r\n    color: #fff;\r\n    padding: 10px 20px;\r\n}\r\n\r\n/* Navigation styles */\r\nnav {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\nnav button {\r\n    background-color: transparent;\r\n    color: #fff;\r\n    border: none;\r\n    cursor: pointer;\r\n    margin: 0 10px;\r\n    font-size: 16px;\r\n    padding: 5px 10px;\r\n}\r\n\r\nnav button:hover {\r\n    background-color: rgba(255, 255, 255, 0.2);\r\n}\r\n\r\n/* Content styles */\r\n#content {\r\n    margin: 20px;\r\n}\r\n\r\n.homepage {\r\n    text-align: center;\r\n}\r\n\r\n.homepage img {\r\n    max-width: 100%;\r\n    height: auto;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.homepage h1 {\r\n    font-size: 24px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.homepage p {\r\n    font-size: 16px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.contact-page {\r\n    display: grid;\r\n    gap: 20px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    grid-template-rows: auto auto auto;\r\n    text-align: center;\r\n    max-width: 800px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.contact-details, .contact-form {\r\n    background-color: #f9f9f9;\r\n    padding: 20px;\r\n    border-radius: 10px;\r\n}\r\n\r\n.contact-form form {\r\n    display: grid;\r\n    gap: 10px;\r\n    justify-items: center;\r\n}\r\n\r\n.contact-form label {\r\n    display: block;\r\n}\r\n\r\n.contact-form input[type=\"text\"],\r\n.contact-form input[type=\"email\"],\r\n.contact-form textarea {\r\n    width: 100%;\r\n    padding: 10px;\r\n    border: 1px solid #ccc;\r\n    border-radius: 5px;\r\n}\r\n\r\n.contact-form textarea {\r\n    resize: vertical; /* Allow vertical resizing of textarea */\r\n}\r\n\r\n.contact-form button {\r\n    padding: 10px 20px;\r\n    background-color: #007bff;\r\n    color: white;\r\n    border: none;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n    transition: background-color 0.3s;\r\n}\r\n\r\n.contact-form button:hover {\r\n    background-color: #0056b3;\r\n}\r\n\r\n.menus-page {\r\n    display: grid;\r\n    gap: 20px;\r\n    grid-template-columns: auto auto;\r\n    justify-content: center;\r\n}\r\n\r\n.menu-card {\r\n    background-color: #fff;\r\n    border-radius: 10px;\r\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\r\n    padding: 20px;\r\n    transition: transform 0.3s ease;\r\n    cursor: pointer;\r\n}\r\n\r\n.menu-card:hover {\r\n    transform: translateY(-5px);\r\n}\r\n\r\n.menu-card img {\r\n    max-width: 400px;\r\n    height: auto;\r\n    border-radius: 5px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.menu-title {\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.menu-ingredients {\r\n    margin-bottom: 10px;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/images/menu-img.jpg":
/*!*********************************!*\
  !*** ./src/images/menu-img.jpg ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/menu-img.jpg\");\n\n//# sourceURL=webpack:///./src/images/menu-img.jpg?");

/***/ }),

/***/ "./src/images/restaurant-image.png":
/*!*****************************************!*\
  !*** ./src/images/restaurant-image.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/restaurant-image.png\");\n\n//# sourceURL=webpack:///./src/images/restaurant-image.png?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/aboutPage.js":
/*!**************************!*\
  !*** ./src/aboutPage.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   aboutPage: () => (/* binding */ aboutPage)\n/* harmony export */ });\nfunction aboutPage(){\r\n    /*\r\n    <div class=\"contact-page\">\r\n            <div>\r\n                <h1>Contact Us</h1>\r\n                <p>Feel free to contact us for any inquiries or reservations.</p>\r\n            </div>\r\n            <div class=\"contact-details\">\r\n                <h2>Restaurant Name</h2>\r\n                <p>123 Main Street</p>\r\n                <p>City, State ZIP</p>\r\n                <p>Phone: (123) 456-7890</p>\r\n                <p>Email: info@restaurant.com</p>\r\n            </div>\r\n            <div class=\"contact-form\">\r\n                <h2>Send us a message</h2>\r\n                <form action=\"submit_contact_form.php\" method=\"post\">\r\n                    <label for=\"name\">Name:</label>\r\n                    <input type=\"text\" id=\"name\" name=\"name\" required>\r\n                    <label for=\"email\">Email:</label>\r\n                    <input type=\"email\" id=\"email\" name=\"email\" required>\r\n                    <label for=\"message\">Message:</label>\r\n                    <textarea id=\"message\" name=\"message\" rows=\"4\" required></textarea>\r\n                    <button type=\"submit\">Send</button>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    */\r\n\r\n        // Create the contact page container\r\n        const contactPage = document.createElement('div');\r\n        contactPage.classList.add('contact-page');\r\n\r\n        // Create the contact section with title and description\r\n        const contactSection = document.createElement('div');\r\n        const contactTitle = document.createElement('h1');\r\n        contactTitle.textContent = 'Contact Us';\r\n        const contactDescription = document.createElement('p');\r\n        contactDescription.textContent = 'Feel free to contact us for any inquiries or reservations.';\r\n        contactSection.appendChild(contactTitle);\r\n        contactSection.appendChild(contactDescription);\r\n\r\n        // Create the contact details section\r\n        const contactDetails = document.createElement('div');\r\n        contactDetails.classList.add('contact-details');\r\n        const restaurantName = document.createElement('h2');\r\n        restaurantName.textContent = 'Restaurant Name';\r\n        const address = document.createElement('p');\r\n        address.textContent = '123 Main Street';\r\n        const cityStateZip = document.createElement('p');\r\n        cityStateZip.textContent = 'City, State ZIP';\r\n        const phone = document.createElement('p');\r\n        phone.textContent = 'Phone: (123) 456-7890';\r\n        const email = document.createElement('p');\r\n        email.textContent = 'Email: info@restaurant.com';\r\n        contactDetails.appendChild(restaurantName);\r\n        contactDetails.appendChild(address);\r\n        contactDetails.appendChild(cityStateZip);\r\n        contactDetails.appendChild(phone);\r\n        contactDetails.appendChild(email);\r\n\r\n        // Create the contact form section\r\n        const contactForm = document.createElement('div');\r\n        contactForm.classList.add('contact-form');\r\n        const formTitle = document.createElement('h2');\r\n        formTitle.textContent = 'Send us a message';\r\n        const form = document.createElement('form');\r\n        form.action = 'submit_contact_form.php';\r\n        form.method = 'post';\r\n        const nameLabel = document.createElement('label');\r\n        nameLabel.textContent = 'Name:';\r\n        const nameInput = document.createElement('input');\r\n        nameInput.type = 'text';\r\n        nameInput.id = 'name';\r\n        nameInput.name = 'name';\r\n        nameInput.required = true;\r\n        const emailLabel = document.createElement('label');\r\n        emailLabel.textContent = 'Email:';\r\n        const emailInput = document.createElement('input');\r\n        emailInput.type = 'email';\r\n        emailInput.id = 'email';\r\n        emailInput.name = 'email';\r\n        emailInput.required = true;\r\n        const messageLabel = document.createElement('label');\r\n        messageLabel.textContent = 'Message:';\r\n        const messageTextarea = document.createElement('textarea');\r\n        messageTextarea.id = 'message';\r\n        messageTextarea.name = 'message';\r\n        messageTextarea.rows = '4';\r\n        messageTextarea.required = true;\r\n        const submitButton = document.createElement('button');\r\n        submitButton.type = 'submit';\r\n        submitButton.textContent = 'Send';\r\n        form.appendChild(nameLabel);\r\n        form.appendChild(nameInput);\r\n        form.appendChild(emailLabel);\r\n        form.appendChild(emailInput);\r\n        form.appendChild(messageLabel);\r\n        form.appendChild(messageTextarea);\r\n        form.appendChild(submitButton);\r\n        contactForm.appendChild(form);\r\n\r\n        // Append all sections to the contact page container\r\n        contactPage.appendChild(contactSection);\r\n        contactPage.appendChild(contactDetails);\r\n        contactPage.appendChild(contactForm);\r\n\r\n        let container = document.getElementById('content');\r\n        container.appendChild(contactPage);\r\n\r\n\r\n} \r\n\r\n\n\n//# sourceURL=webpack:///./src/aboutPage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _images_restaurant_image_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/restaurant-image.png */ \"./src/images/restaurant-image.png\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _mainPage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mainPage.js */ \"./src/mainPage.js\");\n/* harmony import */ var _aboutPage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aboutPage.js */ \"./src/aboutPage.js\");\n/* harmony import */ var _menuPage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menuPage.js */ \"./src/menuPage.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nfunction cleanContainer(){\r\n    let container = document.getElementById('content');\r\n    container.innerHTML = '';\r\n}\r\n\r\ndocument.addEventListener('DOMContentLoaded', function () {\r\n    let btnHome = document.getElementById('btnHome');\r\n    let btnMenu = document.getElementById('btnMenu');\r\n    let btnAbout = document.getElementById('btnAbout');\r\n\r\n    (0,_mainPage_js__WEBPACK_IMPORTED_MODULE_2__.mainPage)();\r\n\r\n    btnHome.addEventListener('click', () => { \r\n        cleanContainer();\r\n        (0,_mainPage_js__WEBPACK_IMPORTED_MODULE_2__.mainPage)();\r\n    });\r\n\r\n    btnMenu.addEventListener('click', () => {\r\n        cleanContainer();\r\n        (0,_menuPage_js__WEBPACK_IMPORTED_MODULE_4__.menuPage)();\r\n    });\r\n\r\n    btnAbout.addEventListener('click', () => {\r\n        cleanContainer();\r\n        (0,_aboutPage_js__WEBPACK_IMPORTED_MODULE_3__.aboutPage)();\r\n    })\r\n});\r\n\r\n\r\n/*\r\nlet div = document.getElementById('homepage');\r\nlet img = document.createElement('img');\r\nimg.src = myImage;\r\nimg.alt = \"Restaurant image\"; */\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/mainPage.js":
/*!*************************!*\
  !*** ./src/mainPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   mainPage: () => (/* binding */ mainPage)\n/* harmony export */ });\n/* harmony import */ var _images_restaurant_image_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/restaurant-image.png */ \"./src/images/restaurant-image.png\");\n/* harmony import */ var _images_menu_img_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/menu-img.jpg */ \"./src/images/menu-img.jpg\");\n\r\n\r\n\r\nfunction mainPage(){\r\n    /*\r\n    <div id=\"content\">\r\n        <div class=\"homepage\" id=\"homepage\">\r\n            <img src=\"images/restaurant-image.png\" alt=\"Restaurant Image\">\r\n            <h1>Welcome to Our Restaurant</h1>\r\n            <p>We are a cozy restaurant located in the heart of the city, serving delicious meals made with fresh, locally-sourced ingredients.</p>\r\n            <p>Experience the warmth of our hospitality as you indulge in our exquisite dishes crafted with love by our talented chefs.</p>\r\n            <p>Join us for a culinary journey that delights the senses and leaves a lasting impression.</p>\r\n        </div>\r\n    </div>\r\n    */\r\n   let container = document.getElementById('content');\r\n   \r\n   let homePage = document.createElement('div');\r\n   homePage.classList.add('homepage');\r\n   homePage.id = 'homepage';\r\n\r\n    let img = document.createElement('img');\r\n    img.src = _images_restaurant_image_png__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\r\n    img.alt = \"Restaurant image\";\r\n    \r\n    let h1 = document.createElement('h1');\r\n    h1.textContent = 'Welcome to Our Restaurant';\r\n\r\n    let p = document.createElement('p');\r\n    p.textContent = 'We are a cozy restaurant located in the heart of the city, serving delicious meals made with fresh, locally-sourced ingredients.';\r\n    let p1 = document.createElement('p');\r\n    p1.textContent = 'Experience the warmth of our hospitality as you indulge in our exquisite dishes crafted with love by our talented chefs.';\r\n    let p2 = document.createElement('p');\r\n    p2.textContent = 'Join us for a culinary journey that delights the senses and leaves a lasting impression.';\r\n\r\n    homePage.appendChild(img);\r\n    homePage.appendChild(h1);\r\n    homePage.appendChild(p);\r\n    homePage.appendChild(p1);\r\n    homePage.appendChild(p2);\r\n\r\n    container.appendChild(homePage);\r\n\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/mainPage.js?");

/***/ }),

/***/ "./src/menuPage.js":
/*!*************************!*\
  !*** ./src/menuPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menuPage: () => (/* binding */ menuPage)\n/* harmony export */ });\n/* harmony import */ var _images_menu_img_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/menu-img.jpg */ \"./src/images/menu-img.jpg\");\n\r\n\r\nfunction createMenuCard(menu) {\r\n    let card = document.createElement('div');\r\n    card.classList.add(\"menu-card\");\r\n\r\n    const img = document.createElement('img');\r\n    img.src = 'images/menu-img.jpg'; \r\n    img.alt = menu.name;\r\n\r\n    const title = document.createElement('h2');\r\n    title.classList.add('menu-title');\r\n    title.textContent = menu.name;\r\n\r\n    const ingredients = document.createElement('p');\r\n    ingredients.classList.add('menu-ingredients');\r\n    ingredients.textContent = menu.ingredients;\r\n\r\n    const price = document.createElement('p');\r\n    price.textContent = 'Price: ' + menu.price;\r\n\r\n    card.appendChild(img);\r\n    card.appendChild(title);\r\n    card.appendChild(ingredients);\r\n    card.appendChild(price);\r\n\r\n\r\n    return card;\r\n}\r\n\r\nfunction menuPage(){\r\n    /*\r\n    <div class=\"menus-page\">\r\n            <div class=\"menu-card\">\r\n                <img src=\"images/menu-img.jpg\" alt=\"Menu 4\">\r\n                <h2 class=\"menu-title\">Menu 4</h2>\r\n                <p class=\"menu-ingredients\">Ingredient 1, Ingredient 2, Ingredient 3</p>\r\n                <p>Price: $18</p>\r\n            </div>\r\n        </div>\r\n    */\r\n\r\n    const menus = [ \r\n        { ame: \"Menu 1\", ingredients:\"ingredient1, ingredients2, ingredients3, ingredients4\", price: \"$20\" },\r\n        { name: \"Menu 2\", ingredients: \"Ingredient 1, Ingredient 2, Ingredient 3\", price: \"$12\" },\r\n        { name: \"Menu 3\", ingredients: \"Ingredient 1, Ingredient 2, Ingredient 3\", price: \"$15\" },\r\n        { name: \"Menu 4\", ingredients: \"Ingredient 1, Ingredient 2, Ingredient 3\", price: \"$18\" } ];\r\n\r\n    \r\n    const container = document.getElementById('content');\r\n    const menuContainer = document.createElement('div');\r\n    menuContainer.id = 'menuPage';\r\n    menuContainer.classList.add(\"menus-page\");\r\n\r\n    menus.forEach( menu => {\r\n        let card = createMenuCard(menu);\r\n        menuContainer.appendChild(card);\r\n    });\r\n\r\n    container.appendChild(menuContainer);\r\n\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/menuPage.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;