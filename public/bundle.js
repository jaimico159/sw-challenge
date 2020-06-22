/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/javascripts/application.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/javascripts/application.js":
/*!****************************************!*\
  !*** ./src/javascripts/application.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_People_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/People.js */ \"./src/javascripts/models/People.js\");\n\n\nlet el = $(\"#hello\");\nlet person = new _models_People_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](el);\nconsole.log(\"LOOK\");\nconsole.log(person);\nperson.setPeople();\nconsole.log(\"FINISH\");\n\n\n//# sourceURL=webpack:///./src/javascripts/application.js?");

/***/ }),

/***/ "./src/javascripts/models/People.js":
/*!******************************************!*\
  !*** ./src/javascripts/models/People.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _queries_config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../queries/config.js */ \"./src/javascripts/queries/config.js\");\n/* harmony import */ var _templates_people_templates_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../templates/people_templates.js */ \"./src/javascripts/templates/people_templates.js\");\n/* harmony import */ var _Person_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Person.js */ \"./src/javascripts/models/Person.js\");\n\n\n\n\nclass People {\n  constructor(el) {\n    this.element = el;\n    this.fetchUrl = \"people/\";\n    this.people = new Array();\n  }\n\n  setPeople() {\n    let clazz = this;\n    this.element.html(\"Loading ...\");\n    $.ajax({\n      url: _queries_config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] + this.fetchUrl,\n      success: function (response) {\n        for (const p of response.results) {\n          clazz.people.push(new _Person_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](p));\n        }\n        clazz.element.html(\"\");\n        console.log(response);\n        let table = Object(_templates_people_templates_js__WEBPACK_IMPORTED_MODULE_1__[\"peopleSideNav\"])(clazz.people, clazz.element);\n        console.log(table);\n      },\n    });\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (People);\n\n\n//# sourceURL=webpack:///./src/javascripts/models/People.js?");

/***/ }),

/***/ "./src/javascripts/models/Person.js":
/*!******************************************!*\
  !*** ./src/javascripts/models/Person.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _templates_people_templates_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../templates/people_templates.js */ \"./src/javascripts/templates/people_templates.js\");\n\n\nclass Person {\n  constructor(json_data) {\n    this.id = json_data.url\n      .match(/\\/(\\d+)+[\\/]?/g)\n      .map((id) => id.replace(/\\//g, \"\"))[0];\n\n    this.name = json_data.name;\n    this.birth_year = json_data.birth_year;\n    this.eye_color = json_data.eye_color;\n    this.gender = json_data.gender;\n    this.hair_color = json_data.hair_color;\n    this.skin_color = json_data.skin_color;\n    this.films = json_data.films;\n    this.species = json_data.species;\n    this.starships = json_data.starships;\n    this.vehicles = json_data.vehicles;\n    this.homeworld = json_data.homeworld;\n    this.url = json_data.url;\n\n    this.sidenav = null;\n    this.species_array = null;\n    this.vehicles_array = new Array();\n    this.has_vehicles = false;\n  }\n\n  async getVehicles() {\n    if (this.has_vehicles) return;\n    let clazz = this;\n    for (const vehicle of clazz.vehicles) {\n      let resp = await new Promise((resolve) => {\n        $.ajax({\n          url: vehicle,\n          success: function (response) {\n            resolve(response);\n          },\n        });\n      });\n      clazz.vehicles_array.push(resp);\n    }\n    this.has_vehicles = true;\n  }\n\n  async showInfo() {\n    await this.getVehicles();\n\n    let eye_color = $(\"#eye-color\");\n    let hair_color = $(\"#hair-color\");\n    let skin_color = $(\"#skin-color\");\n    let birth_color = $(\"#birth-year\");\n\n    eye_color.html(this.eye_color);\n    hair_color.html(this.hair_color);\n    skin_color.html(this.skin_color);\n    birth_color.html(this.birth_year);\n\n    let vehicles_list = $(\"#vehicles-list\");\n\n    for (const vehicle of this.vehicles_array) {\n      let elem = $(\n        `<div class=\"detail vehicle-element\"><span class=\"property\">${vehicle.name}</span></div>`\n      );\n      vehicles_list.after(elem);\n    }\n\n    $(\"#person-info\").show();\n  }\n\n  hideInfo() {\n    let eye_color = $(\"#eye-color\");\n    let hair_color = $(\"#hair-color\");\n    let skin_color = $(\"#skin-color\");\n    let birth_color = $(\"#birth-year\");\n\n    eye_color.html(\"\");\n    hair_color.html(\"\");\n    skin_color.html(\"\");\n    birth_color.html(\"\");\n\n    $(\".vehicle-element\").remove();\n\n    $(\"#person-info\").hide();\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Person);\n\n\n//# sourceURL=webpack:///./src/javascripts/models/Person.js?");

/***/ }),

/***/ "./src/javascripts/queries/config.js":
/*!*******************************************!*\
  !*** ./src/javascripts/queries/config.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst baseUrl = \"https://swapi.dev/api/\";\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (baseUrl);\n\n\n//# sourceURL=webpack:///./src/javascripts/queries/config.js?");

/***/ }),

/***/ "./src/javascripts/templates/people_templates.js":
/*!*******************************************************!*\
  !*** ./src/javascripts/templates/people_templates.js ***!
  \*******************************************************/
/*! exports provided: peopleTable, peopleSideNav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"peopleTable\", function() { return peopleTable; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"peopleSideNav\", function() { return peopleSideNav; });\nconst peopleTable = (people) => {\n  return `<table id=\"people-table\">\n  <tr>\n    <th>Name</th>\n    <th>Birth</th>\n    <th>Gender</th>\n    <th>Height</th>\n    <th>Mass</th>\n    <th>Skin Color</th>\n  </tr>\n  ${people.results\n    .map((person) => {\n      return `\n      <tr>\n        <td>${person.name}</td>\n        <td>${person.birth}</td>\n        <td>${person.gender}</td>\n        <td>${person.height}</td>\n        <td>${person.mass}</td>\n        <td>${person.skin_color}</td>\n      </tr>\n    `;\n    })\n    .join(\"\")}\n</table>`;\n};\n\nconst peopleSideNav = async (people, container) => {\n  for (const person of people) {\n    container.append(await personSideNavElement(person));\n    $(`#person-${person.id}-info-button`).click(() => {\n      console.log(\"CLICKING\");\n      person.hideInfo();\n      person.showInfo();\n    });\n  }\n};\n\nconst personSideNavElement = async (person) => {\n  let elem = `\n  <div class=\"elem\">\n    <div class=\"info\">\n      <span class=\"name\">${person.name}</span>\n      <span class=\"procedence\">${await species(person.species)}\n      from ${await planet(person.homeworld)}\n      </span>\n    </div>\n    <div id=\"person-${person.id}-info-button\" class=\"button-container\">\n      <img class=\"center\" src=\"./images/enter.png\" height=\"10\" width=\"10\" alt=\"Go\"></img>\n    </div>\n  </div>\n  `;\n\n  return elem;\n};\n\nconst personInformation = async (people) => {\n  for (const person of people.results) {\n    container.append(\n      `\n      <div class=\"elem\">\n        <div class=\"info\">\n          <span class=\"name\">${person.name}</span>\n          <span class=\"procedence\">${await species(person.species)}\n          from ${await planet(person.homeworld)}\n          </span>\n        </div>\n        <div class=\"button-container\">\n          <img class=\"center\" src=\"./images/enter.png\" height=\"10\" width=\"10\" alt=\"Go\"></img>\n        </div>\n      </div>\n      `\n    );\n  }\n};\n\nconst planet = (url) => {\n  return new Promise((resolve) => {\n    $.ajax({\n      url: url,\n      success: function (response) {\n        resolve(response.name);\n      },\n    });\n  });\n};\n\nconst species = async (urls) => {\n  if (urls.length === 0) return \"Human\";\n  let results = new Array();\n  for (const url of urls) {\n    results.push(await specie(url));\n  }\n\n  return results.join(\", \");\n};\n\nconst specie = (url) => {\n  return new Promise((resolve) => {\n    $.ajax({\n      url: url,\n      success: function (response) {\n        console.log(response);\n        resolve(response.name);\n      },\n    });\n  });\n};\n\n\n\n\n//# sourceURL=webpack:///./src/javascripts/templates/people_templates.js?");

/***/ })

/******/ });