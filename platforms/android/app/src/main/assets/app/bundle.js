require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Footerm.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("nativescript-vue");
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Header.vue");
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/Home.vue");
/* harmony import */ var _Viewprediction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./components/Viewprediction.vue");
/* harmony import */ var _LeatherBoard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./components/LeatherBoard.vue");
/* harmony import */ var _UserProfile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./components/UserProfile.vue");
/* harmony import */ var _Footerm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./components/Footerm.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    goToHome() {
      this.$navigateTo(_Home__WEBPACK_IMPORTED_MODULE_2__["default"], {
        animated: true,
        transition: {
          name: "slideLeft",
          duration: 100,
          curve: "easeIn"
        }
      });
    },

    goToViewPredict() {
      this.$navigateTo(_Viewprediction__WEBPACK_IMPORTED_MODULE_3__["default"], {
        animated: true,
        transition: {
          name: "slideLeft",
          duration: 250,
          curve: "easeIn"
        }
      });
    },

    goToLether() {
      this.$navigateTo(_LeatherBoard__WEBPACK_IMPORTED_MODULE_4__["default"], {
        animated: true,
        transition: {
          name: "slideLeft",
          duration: 250,
          curve: "easeIn"
        }
      });
    },

    goToProfileSection() {
      this.$navigateTo(_UserProfile__WEBPACK_IMPORTED_MODULE_5__["default"], {
        animated: true,
        transition: {
          name: "slideLeft",
          duration: 100,
          curve: "easeIn"
        }
      });
    }

  },

  data() {
    return {};
  }

});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Header.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("nativescript-vue");
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Header.vue");
/* harmony import */ var _Questions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/Questions.vue");
/* harmony import */ var _Footerm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./components/Footerm.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    onItemTap: function onItemTap(args) {
      console.log("dlfjdlfjdljfldjf", args);
      this.$navigateTo(_Questions__WEBPACK_IMPORTED_MODULE_2__["default"], {
        props: {
          qId: args._id
        }
      });
    },

    goToQuestionPage() {
      console.log("TFYGujhijoihugyfv");
    }

  },

  mounted() {
    fetch("https://predicto.wohlig.co.in/api/Match/allMatches", {
      method: "POST"
    }).then(response => response.json()).then(data => {
      this.matche = data.data;
    });
  },

  data() {
    return {
      matche: []
    };
  },

  components: {
    Header: _Header__WEBPACK_IMPORTED_MODULE_1__["default"],
    Footerm: _Footerm__WEBPACK_IMPORTED_MODULE_3__["default"]
  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/LeatherBoard.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Viewprediction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Viewprediction.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    goToViewPredict() {
      this.$navigateTo(_Viewprediction__WEBPACK_IMPORTED_MODULE_0__["default"]);
    }

  },

  data() {
    return {};
  }

});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Questions.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("nativescript-vue");
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Home.vue");
/* harmony import */ var _Viewprediction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/Viewprediction.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    goToViewprediction() {
      this.$navigateTo(_Viewprediction__WEBPACK_IMPORTED_MODULE_2__["default"]);
    },

    goToHome() {
      this.$navigateTo(_Home__WEBPACK_IMPORTED_MODULE_1__["default"], {
        animated: true,
        transition: {
          name: "slideLeft",
          duration: 100,
          curve: "easeIn"
        }
      });
    },

    onButtonTap(data, id) {
      this.answer.push(data);
      console.log("This is answer", this.answer, id);
    },

    onButtonTap1(data) {
      console.log("This is second funcion", data);
    }

  },

  mounted() {
    console.log("ldjfldkfjldjfdlk", this.qId);
    this.questionId = this.qId;
    fetch("https://predicto.wohlig.co.in/api/Question/getQuestion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        matchId: this.questionId
      })
    }).then(response => response.json()).then(data => {
      this.questionsFor = data.data.question;
      console.log("result of question", data.data);
    });
  },

  props: ["qId"],

  data() {
    return {
      answer: [],
      questionId: "",
      questionsFor: []
    };
  }

});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/UserProfile.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("nativescript-vue");
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Home.vue");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/Header.vue");
/* harmony import */ var _Footerm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./components/Footerm.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    goToHome() {
      this.$navigateTo(_Home__WEBPACK_IMPORTED_MODULE_1__["default"], {
        animated: true,
        transition: {
          name: "slideLeft",
          duration: 100,
          curve: "easeIn"
        }
      });
    }

  },
  components: {
    Header: _Header__WEBPACK_IMPORTED_MODULE_2__["default"],
    Footerm: _Footerm__WEBPACK_IMPORTED_MODULE_3__["default"]
  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Viewprediction.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("nativescript-vue");
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Header.vue");
/* harmony import */ var _Footerm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/Footerm.vue");
/* harmony import */ var _Questions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./components/Questions.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    goToQuestion() {
      this.$navigateTo(_Questions__WEBPACK_IMPORTED_MODULE_3__["default"]);
    } // onItemTap: function(args) {
    //     console.log("Item with index: " + Object.values(args) +
    //         " tapped");
    //     console.log();
    // }


  },

  data() {
    return {
      matches: [{
        points: "Point 120",
        matchIndex: "Match1",
        firstMatch: "England",
        firstMatchlogoSrc: "https://play.nativescript.org/dist/assets/img/flags/au.png",
        secondMatch: "South Africa",
        secondMatchlogoSrc: "https://play.nativescript.org/dist/assets/img/flags/au.png",
        place: "Kennington Oval, London",
        time: "May 30 2019"
      }, {
        points: "Point 120",
        matchIndex: "Match1",
        firstMatch: "England",
        firstMatchlogoSrc: "https://play.nativescript.org/dist/assets/img/flags/au.png",
        secondMatch: "South Africa",
        secondMatchlogoSrc: "https://play.nativescript.org/dist/assets/img/flags/au.png",
        place: "Kennington Oval, London ",
        time: "May 30 2019"
      }]
    };
  },

  components: {
    Header: _Header__WEBPACK_IMPORTED_MODULE_1__["default"],
    Footerm: _Footerm__WEBPACK_IMPORTED_MODULE_2__["default"]
  }
});

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib/index.js?!./components/Footerm.vue?vue&type=style&index=0&id=37176da7&lang=scss&scoped=true&":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".font-icon-color[data-v-37176da7] {\n  color: #fff;\n  width: 25%;\n}\n.footerr[data-v-37176da7] {\n  height: 160;\n}\n", ""]);

// exports

    const application = __webpack_require__("tns-core-modules/application");
    __webpack_require__("tns-core-modules/ui/styling/style-scope");

    exports.forEach(cssExport => {
        if (cssExport.length > 1 && cssExport[1]) {
            // applying the second item of the export as it contains the css contents
            application.addCss(cssExport[1]);
        }
    });
    ;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './components/Footerm.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=style&index=0&id=67410f3a&lang=scss&scoped=true&":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* $view-prediction: aqua !default; */\nPage[data-v-67410f3a] {\n  background-Color: #f2f4fb;\n  font-family: \"Khand-Medium\", \"Khand Medium\";\n  font-size: 16;\n}\n.home-panel[data-v-67410f3a] {\n  vertical-align: center;\n  font-size: 20;\n  margin: 15;\n}\n.list-schedule[data-v-67410f3a] {\n  margin: 20;\n  separatorColor: transparent;\n}\n.list-group-item[data-v-67410f3a] {\n  border-radius: 5;\n}\n.match-container[data-v-67410f3a] {\n  margin-bottom: 15;\n  border-radius: 5;\n  background-Color: #fff;\n  separatorColor: transparent;\n  box-shadow: 10px 10px 5px grey;\n}\n.description-label[data-v-67410f3a] {\n  margin-bottom: 15;\n}\n.live[data-v-67410f3a] {\n  background: linear-gradient(to right, #BE3073, #FA1642);\n  color: #fff;\n  font-size: 12;\n  border-radius: 5;\n  padding: 5 10;\n  vertical-align: center;\n  margin-right: 10;\n  margin-top: 10;\n  font-weight: bold;\n  width: 100%;\n}\n.shortname[data-v-67410f3a] {\n  background: linear-gradient(to right, #397DC8, #5461CB);\n  color: #fff;\n  vertical-align: center;\n  textAlignment: center;\n}\n.predict-button[data-v-67410f3a] {\n  margin-top: 10;\n  border-radius: 0 0 5 5;\n  color: #fff;\n  font-size: 14;\n}\n\n/* .view-prediction {\n    background-color: $view-prediction;\n} */\n", ""]);

// exports

    const application = __webpack_require__("tns-core-modules/application");
    __webpack_require__("tns-core-modules/ui/styling/style-scope");

    exports.forEach(cssExport => {
        if (cssExport.length > 1 && cssExport[1]) {
            // applying the second item of the export as it contains the css contents
            application.addCss(cssExport[1]);
        }
    });
    ;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './components/Home.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib/index.js?!./components/UserProfile.vue?vue&type=style&index=0&id=33ad2e53&lang=scss&scoped=true&":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "Page[data-v-33ad2e53] {\n  background-color: #f2f4fb;\n  font-family: \"Khand-Medium\", \"Khand Medium\";\n  font-size: 16;\n}\n.home-panel[data-v-33ad2e53] {\n  vertical-align: center;\n  font-size: 20;\n  margin: 15;\n}\n.profile-content[data-v-33ad2e53] {\n  margin: 20;\n  padding: 20;\n  border-radius: 5;\n  background-color: #fff;\n  box-shadow: 10px 10px 5px grey;\n}\n", ""]);

// exports

    const application = __webpack_require__("tns-core-modules/application");
    __webpack_require__("tns-core-modules/ui/styling/style-scope");

    exports.forEach(cssExport => {
        if (cssExport.length > 1 && cssExport[1]) {
            // applying the second item of the export as it contains the css contents
            application.addCss(cssExport[1]);
        }
    });
    ;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './components/UserProfile.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib/index.js?!./components/Viewprediction.vue?vue&type=style&index=0&id=6231ede2&lang=scss&scoped=true&":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "Page[data-v-6231ede2] {\n  background-color: #f2f4fb;\n  font-family: \"Khand-Medium\", \"Khand Medium\";\n  font-size: 16;\n}\n.home-panel[data-v-6231ede2] {\n  vertical-align: center;\n  font-size: 20;\n  margin: 15;\n}\n.list-schedule[data-v-6231ede2] {\n  margin: 20;\n  separatorcolor: transparent;\n}\n.list-group-item[data-v-6231ede2] {\n  border-radius: 5;\n}\n.match-container[data-v-6231ede2] {\n  margin-bottom: 15;\n  border-radius: 5;\n  background-color: #fff;\n  separatorcolor: transparent;\n  box-shadow: 10px 10px 5px grey;\n}\n.description-label[data-v-6231ede2] {\n  margin-bottom: 15;\n}\n.live[data-v-6231ede2] {\n  font-size: 12;\n  border-radius: 5;\n  padding: 5 10;\n  vertical-align: center;\n  margin-right: 10;\n  margin-top: 10;\n  font-weight: bold;\n  width: 100%;\n  background: transparent;\n}\n.predict-button[data-v-6231ede2] {\n  margin: 10;\n  border-radius: 5;\n  background: linear-gradient(to right, #be3073, #fa1642);\n  color: #fff;\n  font-size: 14;\n  padding: 5 10;\n}\n", ""]);

// exports

    const application = __webpack_require__("tns-core-modules/application");
    __webpack_require__("tns-core-modules/ui/styling/style-scope");

    exports.forEach(cssExport => {
        if (cssExport.length > 1 && cssExport[1]) {
            // applying the second item of the export as it contains the css contents
            application.addCss(cssExport[1]);
        }
    });
    ;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './components/Viewprediction.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/Header.vue?vue&type=style&index=0&id=1a9bb128&scoped=true&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#header .Global_point[data-v-1a9bb128] {\n  background: linear-gradient(to right, #be3073, #fa1642);\n  padding: 10;\n  font-size: 14;\n  color: #fff;\n  border-radius: 20;\n  font-weight: bold;\n  margin-right: 10;\n}\n#header .btn[data-v-1a9bb128] {\n  margin: 0;\n  padding: 0;\n  justify-content: center;\n  align-items: center;\n}\n.actionbar[data-v-1a9bb128] {\n  padding: 10;\n  height: 160;\n  background-image: linear-gradient(to right, #397dc8, #5461cb);\n  color: #fff;\n  box-shadow: 5px 10px 8px #888888;\n}\n", ""]);

// exports

    const application = __webpack_require__("tns-core-modules/application");
    __webpack_require__("tns-core-modules/ui/styling/style-scope");

    exports.forEach(cssExport => {
        if (cssExport.length > 1 && cssExport[1]) {
            // applying the second item of the export as it contains the css contents
            application.addCss(cssExport[1]);
        }
    });
    ;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './components/Header.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/Questions.vue?vue&type=style&index=0&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.predict-button-active {\n  background-color: #57a173;\n  border-radius: 5;\n  color: #fff;\n  font-size: 16;\n  margin: 5px;\n  padding: 30px;\n}\n.predict-button-gray {\n  background-color: #ececec;\n  border-radius: 5;\n  color: #717070;\n  font-size: 16;\n  margin: 5px;\n  padding: 30px;\n}\n.live {\n  padding-right: 10;\n  background-image: linear-gradient(to right, #be3073, #fa1642);\n  color: #fff;\n  font-size: 14;\n}\nPage {\n  background-color: #f5f4fa;\n  font-family: \"Khand-Medium\", \"Khand Medium\";\n  font-size: 16;\n}\n", ""]);

// exports

    const application = __webpack_require__("tns-core-modules/application");
    __webpack_require__("tns-core-modules/ui/styling/style-scope");

    exports.forEach(cssExport => {
        if (cssExport.length > 1 && cssExport[1]) {
            // applying the second item of the export as it contains the css contents
            application.addCss(cssExport[1]);
        }
    });
    ;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './components/Questions.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Footerm.vue?vue&type=template&id=37176da7&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "StackLayout",
    {
      staticClass: "footerr",
      attrs: { row: "1", orientation: "horizontal", backgroundColor: "red" }
    },
    [
      _c(
        "StackLayout",
        { staticClass: "font-icon-color" },
        [
          _c("Label", {
            staticClass: "fa status color",
            attrs: { margin: "15", text: _vm._f("fonticon")("fa-home") },
            on: { tap: _vm.goToHome }
          })
        ],
        1
      ),
      _c(
        "StackLayout",
        { staticClass: "font-icon-color" },
        [
          _c("Label", {
            staticClass: "fa status color",
            attrs: { margin: "15", text: _vm._f("fonticon")("fa-eye") },
            on: { tap: _vm.goToViewPredict }
          })
        ],
        1
      ),
      _c(
        "StackLayout",
        { staticClass: "font-icon-color" },
        [
          _c("Label", {
            staticClass: "fa status color",
            attrs: { margin: "15", text: _vm._f("fonticon")("fa-bar-chart") },
            on: { tap: _vm.goToLether }
          })
        ],
        1
      ),
      _c(
        "StackLayout",
        { attrs: { width: "25%" } },
        [
          _c("Image", {
            attrs: { src: "~/assets/NewPic/profile.png", margin: "20" },
            on: { tap: _vm.goToProfileSection }
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Header.vue?vue&type=template&id=1a9bb128&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "FlexboxLayout",
    {
      staticClass: "actionbar",
      attrs: {
        flexDirection: "row",
        justifyContent: "space-between",
        id: "header"
      }
    },
    [
      _c(
        "FlexboxLayout",
        { staticClass: "btn menu" },
        [
          _c("Label", {
            attrs: {
              text: "Predicto",
              paddingLeft: "20",
              fontSize: "16",
              color: "white",
              fontWeight: "bold"
            }
          })
        ],
        1
      ),
      _c(
        "FlexboxLayout",
        { staticClass: "btn pp" },
        [
          _c("Label", {
            staticClass: "Global_point",
            attrs: { text: "Points:1234", color: "#ffffff" }
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=template&id=67410f3a&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "page",
    { attrs: { actionBarHidden: "true" } },
    [
      _c(
        "FlexboxLayout",
        { attrs: { flexDirection: "column", height: "100%", width: "100%" } },
        [
          _c("Header"),
          _c(
            "GridLayout",
            { attrs: { rows: "*", height: "100%" } },
            [
              _c(
                "StackLayout",
                { staticClass: "view-prediction" },
                [
                  _c(
                    "ListView",
                    {
                      staticClass: "list-schedule",
                      staticStyle: { height: "100%" },
                      attrs: {
                        separatorColor: "transparent",
                        items: _vm.matche,
                        "+alias": "match"
                      }
                    },
                    [
                      _c("v-template", {
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function(ref) {
                              var match = ref.match
                              var $index = ref.$index
                              var $even = ref.$even
                              var $odd = ref.$odd
                              return _c(
                                "ScrollView",
                                [
                                  _c(
                                    "StackLayout",
                                    [
                                      _c(
                                        "GridLayout",
                                        {
                                          staticClass: "match-container",
                                          attrs: {
                                            columns: "auto,2*, *, auto,2*",
                                            rows: "*, 2*, *,2*"
                                          }
                                        },
                                        [
                                          _c("Label", {
                                            attrs: {
                                              text: match.matchNumber,
                                              row: "0",
                                              col: "0",
                                              colSpan: "2",
                                              marginLeft: "10",
                                              marginTop: "10",
                                              fontSize: "12"
                                            }
                                          }),
                                          _c("Label", {
                                            staticClass: "live",
                                            attrs: {
                                              text: match.startingTime,
                                              row: "0",
                                              col: "3",
                                              colSpan: "3",
                                              textAlignment: "center"
                                            }
                                          }),
                                          _c("Label", {
                                            staticClass: "shortname",
                                            attrs: {
                                              text: match.team1.shortName,
                                              row: "1",
                                              col: "0",
                                              borderRadius: "5",
                                              margin: "10",
                                              fontSize: "8",
                                              padding: "6 5",
                                              verticalAlignment: "center",
                                              textAlignment: "center"
                                            }
                                          }),
                                          _c("Label", {
                                            attrs: {
                                              text: match.team1.teamName,
                                              row: "1",
                                              verticalAlignment: "center",
                                              col: "1",
                                              fontWeight: "bold",
                                              fontSize: "12"
                                            }
                                          }),
                                          _c("Label", {
                                            attrs: {
                                              text: "vs",
                                              row: "1",
                                              col: "2",
                                              verticalAlignment: "center",
                                              textAlignment: "center",
                                              fontWeight: "bold",
                                              fontSize: "12"
                                            }
                                          }),
                                          _c("Label", {
                                            staticClass: "shortname",
                                            attrs: {
                                              text: match.team2.shortName,
                                              row: "1",
                                              col: "3",
                                              borderRadius: "5",
                                              margin: "10",
                                              fontSize: "8",
                                              padding: "6 5",
                                              textAlignment: "center"
                                            }
                                          }),
                                          _c("Label", {
                                            attrs: {
                                              text: match.team2.teamName,
                                              row: "1",
                                              verticalAlignment: "center",
                                              col: "4",
                                              fontWeight: "bold",
                                              fontSize: "12"
                                            }
                                          }),
                                          _c("Label", {
                                            attrs: {
                                              text: match.place,
                                              row: "2",
                                              col: "0",
                                              colSpan: "4",
                                              marginLeft: "10",
                                              fontSize: "12"
                                            }
                                          }),
                                          _c("Label", {
                                            attrs: {
                                              text: match.startingTime,
                                              row: "2",
                                              col: "1",
                                              colSpan: "4",
                                              textAlignment: "right",
                                              marginRight: "10",
                                              fontSize: "12"
                                            }
                                          }),
                                          _c("Button", {
                                            staticClass: "predict-button",
                                            attrs: {
                                              text: "Start Predict",
                                              row: "3",
                                              colSpan: "5",
                                              background:
                                                "linear-gradient(to right, #0EA948, #0CAAA4)"
                                            },
                                            on: {
                                              tap: function($event) {
                                                return _vm.onItemTap(match)
                                              }
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            }
                          }
                        ])
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _c("Footerm")
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/LeatherBoard.vue?vue&type=template&id=2e17cc98&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    { attrs: { actionBarHidden: "true" } },
    [
      _c(
        "StackLayout",
        { attrs: { backgroundColor: "#F5F4FA" } },
        [
          _c(
            "GridLayout",
            {
              attrs: {
                backgroundColor: "#E9E7F4",
                height: "70",
                columns: " 3*,*",
                rows: "*"
              }
            },
            [
              _c("Label", {
                attrs: {
                  text: "Lorem Ipsum is simply dummy",
                  row: "0",
                  col: "0",
                  verticalAlignment: "center"
                }
              }),
              _c("button", {
                attrs: {
                  text: "Rewards",
                  backgroundColor: "#5065CB",
                  color: "#fff",
                  row: "0",
                  col: "1",
                  textAlignment: "center",
                  verticalAlignment: "center",
                  fontSize: "12"
                }
              })
            ],
            1
          ),
          _c(
            "GridLayout",
            {
              attrs: {
                backgroundColor: "#FFFFFF",
                height: "40",
                columns: "*, 3*,*,*",
                rows: "*"
              }
            },
            [
              _c("Label", {
                attrs: {
                  text: "Pic",
                  row: "0",
                  col: "0",
                  textAlignment: "center",
                  verticalAlignment: "center"
                }
              }),
              _c("Label", {
                attrs: {
                  text: "Participate",
                  row: "0",
                  col: "1",
                  textAlignment: "left",
                  verticalAlignment: "center"
                }
              }),
              _c("Label", {
                attrs: {
                  text: "Points",
                  row: "0",
                  col: "2",
                  textAlignment: "center",
                  verticalAlignment: "center"
                }
              }),
              _c("Label", {
                attrs: {
                  text: "Rank",
                  row: "0",
                  col: "3",
                  textAlignment: "center",
                  verticalAlignment: "center"
                }
              })
            ],
            1
          ),
          _c(
            "GridLayout",
            {
              attrs: {
                backgroundColor: "#5065CB",
                height: "40",
                columns: "*, 3*,*,*",
                rows: "*"
              }
            },
            [
              _c("Label", {
                attrs: {
                  text: "Pic",
                  row: "0",
                  col: "0",
                  textAlignment: "center",
                  verticalAlignment: "center"
                }
              }),
              _c("Label", {
                attrs: {
                  text: "Princy Varghese",
                  row: "0",
                  col: "1",
                  textAlignment: "left",
                  verticalAlignment: "center"
                }
              }),
              _c("Label", {
                attrs: {
                  text: "112",
                  row: "0",
                  col: "2",
                  textAlignment: "center",
                  verticalAlignment: "center"
                }
              }),
              _c("Label", {
                attrs: {
                  text: "01",
                  row: "0",
                  col: "3",
                  textAlignment: "center",
                  verticalAlignment: "center"
                }
              })
            ],
            1
          ),
          _c(
            "GridLayout",
            { attrs: { height: "40", columns: "*, 3*,*,*", rows: "*" } },
            [
              _c("Label", {
                attrs: {
                  text: "Pic",
                  row: "0",
                  col: "0",
                  textAlignment: "center",
                  verticalAlignment: "center"
                }
              }),
              _c("Label", {
                attrs: {
                  text: "Saraswati Gauda",
                  row: "0",
                  col: "1",
                  textAlignment: "left",
                  verticalAlignment: "center"
                }
              }),
              _c("Label", {
                attrs: {
                  text: "112",
                  row: "0",
                  col: "2",
                  textAlignment: "center",
                  verticalAlignment: "center"
                }
              }),
              _c("Label", {
                attrs: {
                  text: "01",
                  row: "0",
                  col: "3",
                  textAlignment: "center",
                  verticalAlignment: "center"
                }
              })
            ],
            1
          ),
          _c(
            "GridLayout",
            { attrs: { height: "40", columns: "*, 3*,*,*", rows: "*" } },
            [
              _c("Label", {
                attrs: {
                  text: "Pic",
                  row: "0",
                  col: "0",
                  textAlignment: "center",
                  verticalAlignment: "center"
                }
              }),
              _c("Label", {
                attrs: {
                  text: "Roshan Ahire",
                  row: "0",
                  col: "1",
                  textAlignment: "left",
                  verticalAlignment: "center"
                }
              }),
              _c("Label", {
                attrs: {
                  text: "112",
                  row: "0",
                  col: "2",
                  textAlignment: "center",
                  verticalAlignment: "center"
                }
              }),
              _c("Label", {
                attrs: {
                  text: "01",
                  row: "0",
                  col: "3",
                  textAlignment: "center",
                  verticalAlignment: "center"
                }
              })
            ],
            1
          ),
          _c(
            "GridLayout",
            { attrs: { height: "40", columns: "*, 3*,*,*", rows: "*" } },
            [
              _c("Label", {
                attrs: {
                  text: "Pic",
                  row: "0",
                  col: "0",
                  textAlignment: "center",
                  verticalAlignment: "center"
                }
              }),
              _c("Label", {
                attrs: {
                  text: "Pristina Varghese",
                  row: "0",
                  col: "1",
                  textAlignment: "left",
                  verticalAlignment: "center"
                }
              }),
              _c("Label", {
                attrs: {
                  text: "112",
                  row: "0",
                  col: "2",
                  textAlignment: "center",
                  verticalAlignment: "center"
                }
              }),
              _c("Label", {
                attrs: {
                  text: "01",
                  row: "0",
                  col: "3",
                  textAlignment: "center",
                  verticalAlignment: "center"
                }
              })
            ],
            1
          ),
          _c(
            "GridLayout",
            { attrs: { height: "40", columns: "*, 3*,*,*", rows: "*" } },
            [
              _c("Label", {
                attrs: {
                  text: "Pic",
                  row: "0",
                  col: "0",
                  textAlignment: "center",
                  verticalAlignment: "center"
                }
              }),
              _c("Label", {
                attrs: {
                  text: "Dimple Ahire",
                  row: "0",
                  col: "1",
                  textAlignment: "left",
                  verticalAlignment: "center"
                }
              }),
              _c("Label", {
                attrs: {
                  text: "112",
                  row: "0",
                  col: "2",
                  textAlignment: "center",
                  verticalAlignment: "center"
                }
              }),
              _c("Label", {
                attrs: {
                  text: "01",
                  row: "0",
                  col: "3",
                  textAlignment: "center",
                  verticalAlignment: "center"
                }
              })
            ],
            1
          ),
          _c(
            "GridLayout",
            { attrs: { height: "40", columns: "*, 3*,*,*", rows: "*" } },
            [
              _c("Label", {
                attrs: {
                  text: "Pic",
                  row: "0",
                  col: "0",
                  textAlignment: "center",
                  verticalAlignment: "center"
                }
              }),
              _c("Label", {
                attrs: {
                  text: "Prerna Anthony",
                  row: "0",
                  col: "1",
                  textAlignment: "left",
                  verticalAlignment: "center"
                }
              }),
              _c("Label", {
                attrs: {
                  text: "112",
                  row: "0",
                  col: "2",
                  textAlignment: "center",
                  verticalAlignment: "center"
                }
              }),
              _c("Label", {
                attrs: {
                  text: "01",
                  row: "0",
                  col: "3",
                  textAlignment: "center",
                  verticalAlignment: "center"
                }
              })
            ],
            1
          ),
          _c(
            "GridLayout",
            { attrs: { height: "40", columns: "*, 3*,*,*", rows: "*" } },
            [
              _c("Label", {
                attrs: {
                  text: "Pic",
                  row: "0",
                  col: "0",
                  textAlignment: "center",
                  verticalAlignment: "center"
                }
              }),
              _c("Label", {
                attrs: {
                  text: "Manohar Anthony",
                  row: "0",
                  col: "1",
                  textAlignment: "left",
                  verticalAlignment: "center"
                }
              }),
              _c("Label", {
                attrs: {
                  text: "112",
                  row: "0",
                  col: "2",
                  textAlignment: "center",
                  verticalAlignment: "center"
                }
              }),
              _c("Label", {
                attrs: {
                  text: "01",
                  row: "0",
                  col: "3",
                  textAlignment: "center",
                  verticalAlignment: "center"
                }
              })
            ],
            1
          ),
          _c(
            "GridLayout",
            { attrs: { height: "40", columns: "*, 3*,*,*", rows: "*" } },
            [
              _c("Label", {
                attrs: {
                  text: "Pic",
                  row: "0",
                  col: "0",
                  textAlignment: "center",
                  verticalAlignment: "center"
                }
              }),
              _c("Label", {
                attrs: {
                  text: "Hitesh Patil",
                  row: "0",
                  col: "1",
                  textAlignment: "left",
                  verticalAlignment: "center"
                }
              }),
              _c("Label", {
                attrs: {
                  text: "112",
                  row: "0",
                  col: "2",
                  textAlignment: "center",
                  verticalAlignment: "center"
                }
              }),
              _c("Label", {
                attrs: {
                  text: "01",
                  row: "0",
                  col: "3",
                  textAlignment: "center",
                  verticalAlignment: "center"
                }
              })
            ],
            1
          ),
          _c(
            "StackLayout",
            [
              _c("Button", {
                staticClass: "predict-button",
                attrs: { text: "View Prediction", row: "3", colSpan: "5" },
                on: { tap: _vm.goToViewPredict }
              })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Questions.vue?vue&type=template&id=5755a802&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    { attrs: { actionBarHidden: "true" } },
    [
      _c(
        "StackLayout",
        { attrs: { items: _vm.questionsFor, "+alias": "question" } },
        [
          _c(
            "FlexboxLayout",
            {
              attrs: {
                alignItems: "flex-start",
                justifyContent: "flex-start",
                backgroundColor: "#3c7ec7",
                padding: "10 20"
              }
            },
            [
              _c("Label", {
                staticClass: "fa status",
                staticStyle: { color: "white" },
                attrs: {
                  text: _vm._f("fonticon")("fa-long-arrow-left"),
                  marginRight: "20",
                  verticalAlignment: "center",
                  horizontalAlignment: "center"
                },
                on: { tap: _vm.goToHome }
              }),
              _c("Label", {
                attrs: {
                  text: "England Vs South Africa",
                  color: "white",
                  verticalAlignment: "center"
                }
              })
            ],
            1
          ),
          _c(
            "FlexboxLayout",
            { attrs: { alignItems: "flex-end", justifyContent: "flex-end" } },
            [
              _c("Label", {
                staticClass: "live",
                attrs: {
                  text: "Timer 1:44:32",
                  borderRadius: "50",
                  marginRight: "20",
                  marginTop: "10",
                  padding: "10",
                  backgroundColor: "#5065CB",
                  color: "#fff"
                }
              })
            ],
            1
          ),
          _c(
            "StackLayout",
            {
              attrs: {
                backgroundColor: "white",
                borderWidth: "2",
                bordercolor: "gray",
                margin: "20",
                height: "auto",
                padding: "10"
              }
            },
            [
              _c("Label", {
                staticClass: "question-title",
                attrs: {
                  marginBottom: "20",
                  width: "100%",
                  row: "*",
                  text: "who will win the match"
                }
              }),
              _c("Label", {
                attrs: {
                  textAlignment: "right",
                  marginBottom: "10",
                  text: "Q 1/5"
                }
              }),
              _c(
                "FlexboxLayout",
                {
                  staticClass: "predict-button-active",
                  attrs: {
                    alignItems: "flex-start",
                    marginBottom: "15",
                    justifyContent: "space-between"
                  }
                },
                [
                  _c("Label", { attrs: { text: "0-5 runs" } }),
                  _c("Label", { attrs: { text: "Points 40" } })
                ],
                1
              ),
              _c(
                "FlexboxLayout",
                {
                  staticClass: "predict-button-gray",
                  attrs: {
                    alignItems: "flex-start",
                    marginBottom: "15",
                    justifyContent: "space-between"
                  }
                },
                [
                  _c("Label", { attrs: { text: "6-10 runs" } }),
                  _c("Label", { attrs: { text: "Points 20" } })
                ],
                1
              ),
              _c(
                "FlexboxLayout",
                {
                  staticClass: "predict-button-gray",
                  attrs: {
                    alignItems: "flex-start",
                    marginBottom: "15",
                    justifyContent: "space-between"
                  }
                },
                [
                  _c("Label", { attrs: { text: "11-15 runs" } }),
                  _c("Label", { attrs: { text: "Points 60" } })
                ],
                1
              ),
              _c(
                "FlexboxLayout",
                {
                  staticClass: "predict-button-gray",
                  attrs: {
                    alignItems: "flex-start",
                    marginBottom: "15",
                    justifyContent: "space-between"
                  }
                },
                [
                  _c("Label", { attrs: { text: "16 or more runs" } }),
                  _c("Label", { attrs: { text: "Points 80" } })
                ],
                1
              ),
              _c(
                "FlexboxLayout",
                {
                  attrs: {
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    marginBottom: "20"
                  }
                },
                [
                  _c("Label", {
                    attrs: {
                      text: "Previous",
                      backgroundColor: "#b7b7b7",
                      padding: "3 30",
                      borderRadius: "5",
                      color: "#fff"
                    }
                  }),
                  _c("Label", {
                    attrs: {
                      text: "Next",
                      backgroundColor: "#318ec4",
                      padding: "3 40",
                      borderRadius: "5",
                      color: "#fff"
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _c(
            "FlexboxLayout",
            {
              attrs: {
                alignItems: "center",
                justifyContent: "center",
                "ng-disabled": ""
              }
            },
            [
              _c("Button", {
                attrs: {
                  text: "Submit",
                  backgroundColor: "#57a173",
                  color: "#fff",
                  borderRadius: "5",
                  padding: "10 30",
                  margin: "10"
                },
                on: { tap: _vm.goToViewprediction }
              })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/UserProfile.vue?vue&type=template&id=33ad2e53&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    { attrs: { actionBarHidden: "true" } },
    [
      _c(
        "StackLayout",
        [
          _c(
            "FlexboxLayout",
            {
              attrs: {
                alignItems: "flex-start",
                justifyContent: "flex-start",
                backgroundColor: "#3c7ec7",
                padding: "10 20"
              }
            },
            [
              _c("Label", {
                staticClass: "fa status",
                staticStyle: { color: "white" },
                attrs: {
                  text: _vm._f("fonticon")("fa-long-arrow-left"),
                  marginRight: "20",
                  verticalAlignment: "center",
                  horizontalAlignment: "center"
                },
                on: { tap: _vm.goToHome }
              }),
              _c("Label", {
                attrs: {
                  text: "Profile",
                  color: "white",
                  verticalAlignment: "center"
                }
              })
            ],
            1
          ),
          _c(
            "FlexboxLayout",
            {
              staticClass: "profile-content",
              attrs: { flexDirection: "column" }
            },
            [
              _c("Label", { attrs: { text: "PROFILE", height: "70" } }),
              _c("Label", {
                attrs: {
                  text: "SMIT25",
                  height: "40",
                  fontWeight: "bold",
                  textAlignment: "center"
                }
              }),
              _c(
                "FlexboxLayout",
                { attrs: { justifyContent: "space-between" } },
                [
                  _c("Label", {
                    attrs: { text: "SERIES PLAYED", height: "40" }
                  }),
                  _c("Label", {
                    attrs: { text: "MATCHES PLAYED", height: "40" }
                  })
                ],
                1
              ),
              _c(
                "FlexboxLayout",
                { attrs: { justifyContent: "space-between" } },
                [
                  _c("Label", { attrs: { text: "0", height: "30" } }),
                  _c("Label", { attrs: { text: "0", height: "30" } })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Viewprediction.vue?vue&type=template&id=6231ede2&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    { attrs: { actionBarHidden: "true" } },
    [
      _c(
        "FlexboxLayout",
        { attrs: { flexDirection: "column", height: "100%", width: "100%" } },
        [
          _c("Header"),
          _c(
            "GridLayout",
            { attrs: { rows: "*", height: "100%" } },
            [
              _c(
                "StackLayout",
                [
                  _c(
                    "ListView",
                    {
                      staticClass: "list-schedule",
                      staticStyle: { height: "100%" },
                      attrs: {
                        separatorColor: "transparent",
                        items: _vm.matches,
                        "+alias": "match"
                      },
                      on: { itemTap: _vm.onItemTap }
                    },
                    [
                      _c("v-template", {
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function(ref) {
                              var match = ref.match
                              var $index = ref.$index
                              var $even = ref.$even
                              var $odd = ref.$odd
                              return _c(
                                "StackLayout",
                                [
                                  _c(
                                    "GridLayout",
                                    {
                                      staticClass: "match-container",
                                      attrs: {
                                        columns: "auto,2*, *, auto,2*",
                                        rows: "*, 2*, *,2*"
                                      }
                                    },
                                    [
                                      _c("Label", {
                                        attrs: {
                                          text: match.matchIndex,
                                          row: "0",
                                          col: "0",
                                          colspan: "2",
                                          marginLeft: "10",
                                          marginTop: "10",
                                          fontSize: "12"
                                        }
                                      }),
                                      _c("Label", {
                                        staticClass: "live",
                                        attrs: {
                                          text: match.points,
                                          row: "0",
                                          col: "3",
                                          colspan: "3",
                                          color: "red",
                                          ";": "",
                                          textAlignment: "center"
                                        }
                                      }),
                                      _c("Image", {
                                        attrs: {
                                          src:
                                            "https://play.nativescript.org/dist/assets/img/NativeScript_logo.png",
                                          row: "1",
                                          col: "0",
                                          borderRadius: "5",
                                          margin: "10",
                                          height: "30",
                                          width: "30"
                                        }
                                      }),
                                      _c("Label", {
                                        attrs: {
                                          text: match.firstMatch,
                                          row: "1",
                                          verticalAlignment: "center",
                                          col: "1",
                                          fontWeight: "bold",
                                          fontSize: "12"
                                        }
                                      }),
                                      _c("Label", {
                                        attrs: {
                                          text: "vs",
                                          row: "1",
                                          col: "2",
                                          verticalAlignment: "center",
                                          textAlignment: "center",
                                          fontWeight: "bold",
                                          fontSize: "12"
                                        }
                                      }),
                                      _c("Image", {
                                        attrs: {
                                          src:
                                            "https://play.nativescript.org/dist/assets/img/NativeScript_logo.png",
                                          row: "1",
                                          col: "3",
                                          borderRadius: "5",
                                          margin: "10",
                                          height: "30",
                                          width: "30"
                                        },
                                        on: { tap: _vm.goToLeatherBoard }
                                      }),
                                      _c("Label", {
                                        attrs: {
                                          text: match.secondMatch,
                                          row: "1",
                                          verticalAlignment: "center",
                                          col: "4",
                                          fontWeight: "bold",
                                          fontSize: "12"
                                        }
                                      }),
                                      _c("Label", {
                                        attrs: {
                                          text: match.place,
                                          row: "2",
                                          col: "0",
                                          colspan: "4",
                                          marginLeft: "10",
                                          fontSize: "12"
                                        }
                                      }),
                                      _c("Label", {
                                        attrs: {
                                          text: match.time,
                                          row: "2",
                                          col: "1",
                                          colspan: "4",
                                          textAlignment: "right",
                                          marginRight: "10",
                                          fontSize: "12"
                                        }
                                      }),
                                      _c("Label", {
                                        staticClass: "predict-button",
                                        attrs: {
                                          text: "View Prediction",
                                          row: "3",
                                          col: "2",
                                          colspan: "5",
                                          background: "",
                                          textAlignment: "center"
                                        },
                                        on: { tap: _vm.goToQuestion }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            }
                          }
                        ])
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _c("Footerm")
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./ sync ^\\.\\/app\\.(css|scss|less|sass)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.css": "./app.css"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync ^\\.\\/app\\.(css|scss|less|sass)$";

/***/ }),

/***/ "./ sync recursive (?<!\\bApp_Resources\\b.*)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.css": "./app.css",
	"./app.js": "./app.js",
	"./assets/font-awesome.css": "./assets/font-awesome.css",
	"./css/animate.css": "./css/animate.css",
	"./nativescript-fonticon/lib.js": "./nativescript-fonticon/lib.js",
	"./nativescript-fonticon/nativescript-fonticon.js": "./nativescript-fonticon/nativescript-fonticon.js",
	"./scss/footerSection.scss": "./scss/footerSection.scss",
	"./scss/main.scss": "./scss/main.scss",
	"./scss/variable.scss": "./scss/variable.scss"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync recursive (?<!\\bApp_Resources\\b.*)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$";

/***/ }),

/***/ "./app.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../node_modules/css-loader/index.js?!../node_modules/nativescript-theme-core/css/core.light.css"), "");

// module
exports.push([module.i, "\n.extra-bold{\n    font-family: \"Khand-Bold\", \"Khand Bold\";\n    font-weight: 800;\n    font-size: 32;\n}\n\n.bold{\n    font-family: \"Assistant-Bold\",\"Assistant\";\n    font-weight: 700;\n}\n\n.semi-bold{\n    font-family: \"Assistant-SemiBold\",\"Assistant SemiBold\";\n    font-weight: 600;\n}\n\n.align-center { \n        text-align: center; \n}\n.footer{\n    background-image: linear-gradient(to right, #397DC8, #5461CB);\n}", ""]);

// exports
;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './app.css' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("nativescript-vue");
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Home.vue");
/* harmony import */ var _nativescript_fonticon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./nativescript-fonticon/nativescript-fonticon.js");
/* harmony import */ var _nativescript_fonticon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nativescript_fonticon__WEBPACK_IMPORTED_MODULE_2__);

        let applicationCheckPlatform = __webpack_require__("tns-core-modules/application");
        if (applicationCheckPlatform.android && !global["__snapshot"]) {
            __webpack_require__("tns-core-modules/ui/frame");
__webpack_require__("tns-core-modules/ui/frame/activity");
        }

        
            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-regular.js")();
            
            
        if (true) {
            const hmrUpdate = __webpack_require__("../node_modules/nativescript-dev-webpack/hmr/index.js").hmrUpdate;
            global.__initialHmrUpdate = true;
            global.__hmrSyncBackup = global.__onLiveSync;

            global.__onLiveSync = function () {
                hmrUpdate();
            };

            global.hmrRefresh = function({ type, path } = {}) {
                if (global.__initialHmrUpdate) {
                    return;
                }

                setTimeout(() => {
                    global.__hmrSyncBackup({ type, path });
                });
            };

            hmrUpdate().then(() => {
                global.__initialHmrUpdate = false;
            })
        }
        
            const context = __webpack_require__("./ sync recursive (?<!\\bApp_Resources\\b.*)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$");
            global.registerWebpackModules(context);
            if (true) {
                module.hot.accept(context.id, () => { 
                    console.log("HMR: Accept module '" + context.id + "' from '" + module.i + "'"); 
                });
            }
            
        __webpack_require__("tns-core-modules/bundle-entry-points");
        


_nativescript_fonticon__WEBPACK_IMPORTED_MODULE_2__["TNSFontIcon"].paths = {
  fa: './assets/font-awesome.css'
};
_nativescript_fonticon__WEBPACK_IMPORTED_MODULE_2__["TNSFontIcon"].loadCss();
nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a.filter('fonticon', _nativescript_fonticon__WEBPACK_IMPORTED_MODULE_2__["fonticon"]);
new nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a({
  template: "\n        <Frame>\n            <Home />\n        </Frame>",
  components: {
    Home: _components_Home__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
}).$start();
    
        
        
    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./assets/font-awesome.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fa-glass:before {\n  content: \"\\F000\";\n}\n.fa-music:before {\n  content: \"\\F001\";\n}\n.fa-search:before {\n  content: \"\\F002\";\n}\n.fa-envelope-o:before {\n  content: \"\\F003\";\n}\n.fa-heart:before {\n  content: \"\\F004\";\n}\n.fa-star:before {\n  content: \"\\F005\";\n}\n.fa-star-o:before {\n  content: \"\\F006\";\n}\n.fa-user:before {\n  content: \"\\F007\";\n}\n.fa-film:before {\n  content: \"\\F008\";\n}\n.fa-th-large:before {\n  content: \"\\F009\";\n}\n.fa-th:before {\n  content: \"\\F00A\";\n}\n.fa-th-list:before {\n  content: \"\\F00B\";\n}\n.fa-check:before {\n  content: \"\\F00C\";\n}\n.fa-remove:before,\n.fa-close:before,\n.fa-times:before {\n  content: \"\\F00D\";\n}\n.fa-search-plus:before {\n  content: \"\\F00E\";\n}\n.fa-search-minus:before {\n  content: \"\\F010\";\n}\n.fa-power-off:before {\n  content: \"\\F011\";\n}\n.fa-signal:before {\n  content: \"\\F012\";\n}\n.fa-gear:before,\n.fa-cog:before {\n  content: \"\\F013\";\n}\n.fa-trash-o:before {\n  content: \"\\F014\";\n}\n.fa-home:before {\n  content: \"\\F015\";\n}\n.fa-file-o:before {\n  content: \"\\F016\";\n}\n.fa-clock-o:before {\n  content: \"\\F017\";\n}\n.fa-road:before {\n  content: \"\\F018\";\n}\n.fa-download:before {\n  content: \"\\F019\";\n}\n.fa-arrow-circle-o-down:before {\n  content: \"\\F01A\";\n}\n.fa-arrow-circle-o-up:before {\n  content: \"\\F01B\";\n}\n.fa-inbox:before {\n  content: \"\\F01C\";\n}\n.fa-play-circle-o:before {\n  content: \"\\F01D\";\n}\n.fa-rotate-right:before,\n.fa-repeat:before {\n  content: \"\\F01E\";\n}\n.fa-refresh:before {\n  content: \"\\F021\";\n}\n.fa-list-alt:before {\n  content: \"\\F022\";\n}\n.fa-lock:before {\n  content: \"\\F023\";\n}\n.fa-flag:before {\n  content: \"\\F024\";\n}\n.fa-headphones:before {\n  content: \"\\F025\";\n}\n.fa-volume-off:before {\n  content: \"\\F026\";\n}\n.fa-volume-down:before {\n  content: \"\\F027\";\n}\n.fa-volume-up:before {\n  content: \"\\F028\";\n}\n.fa-qrcode:before {\n  content: \"\\F029\";\n}\n.fa-barcode:before {\n  content: \"\\F02A\";\n}\n.fa-tag:before {\n  content: \"\\F02B\";\n}\n.fa-tags:before {\n  content: \"\\F02C\";\n}\n.fa-book:before {\n  content: \"\\F02D\";\n}\n.fa-bookmark:before {\n  content: \"\\F02E\";\n}\n.fa-print:before {\n  content: \"\\F02F\";\n}\n.fa-camera:before {\n  content: \"\\F030\";\n}\n.fa-font:before {\n  content: \"\\F031\";\n}\n.fa-bold:before {\n  content: \"\\F032\";\n}\n.fa-italic:before {\n  content: \"\\F033\";\n}\n.fa-text-height:before {\n  content: \"\\F034\";\n}\n.fa-text-width:before {\n  content: \"\\F035\";\n}\n.fa-align-left:before {\n  content: \"\\F036\";\n}\n.fa-align-center:before {\n  content: \"\\F037\";\n}\n.fa-align-right:before {\n  content: \"\\F038\";\n}\n.fa-align-justify:before {\n  content: \"\\F039\";\n}\n.fa-list:before {\n  content: \"\\F03A\";\n}\n.fa-dedent:before,\n.fa-outdent:before {\n  content: \"\\F03B\";\n}\n.fa-indent:before {\n  content: \"\\F03C\";\n}\n.fa-video-camera:before {\n  content: \"\\F03D\";\n}\n.fa-photo:before,\n.fa-image:before,\n.fa-picture-o:before {\n  content: \"\\F03E\";\n}\n.fa-pencil:before {\n  content: \"\\F040\";\n}\n.fa-map-marker:before {\n  content: \"\\F041\";\n}\n.fa-adjust:before {\n  content: \"\\F042\";\n}\n.fa-tint:before {\n  content: \"\\F043\";\n}\n.fa-edit:before,\n.fa-pencil-square-o:before {\n  content: \"\\F044\";\n}\n.fa-share-square-o:before {\n  content: \"\\F045\";\n}\n.fa-check-square-o:before {\n  content: \"\\F046\";\n}\n.fa-arrows:before {\n  content: \"\\F047\";\n}\n.fa-step-backward:before {\n  content: \"\\F048\";\n}\n.fa-fast-backward:before {\n  content: \"\\F049\";\n}\n.fa-backward:before {\n  content: \"\\F04A\";\n}\n.fa-play:before {\n  content: \"\\F04B\";\n}\n.fa-pause:before {\n  content: \"\\F04C\";\n}\n.fa-stop:before {\n  content: \"\\F04D\";\n}\n.fa-forward:before {\n  content: \"\\F04E\";\n}\n.fa-fast-forward:before {\n  content: \"\\F050\";\n}\n.fa-step-forward:before {\n  content: \"\\F051\";\n}\n.fa-eject:before {\n  content: \"\\F052\";\n}\n.fa-chevron-left:before {\n  content: \"\\F053\";\n}\n.fa-chevron-right:before {\n  content: \"\\F054\";\n}\n.fa-plus-circle:before {\n  content: \"\\F055\";\n}\n.fa-minus-circle:before {\n  content: \"\\F056\";\n}\n.fa-times-circle:before {\n  content: \"\\F057\";\n}\n.fa-check-circle:before {\n  content: \"\\F058\";\n}\n.fa-question-circle:before {\n  content: \"\\F059\";\n}\n.fa-info-circle:before {\n  content: \"\\F05A\";\n}\n.fa-crosshairs:before {\n  content: \"\\F05B\";\n}\n.fa-times-circle-o:before {\n  content: \"\\F05C\";\n}\n.fa-check-circle-o:before {\n  content: \"\\F05D\";\n}\n.fa-ban:before {\n  content: \"\\F05E\";\n}\n.fa-arrow-left:before {\n  content: \"\\F060\";\n}\n.fa-arrow-right:before {\n  content: \"\\F061\";\n}\n.fa-arrow-up:before {\n  content: \"\\F062\";\n}\n.fa-arrow-down:before {\n  content: \"\\F063\";\n}\n.fa-mail-forward:before,\n.fa-share:before {\n  content: \"\\F064\";\n}\n.fa-expand:before {\n  content: \"\\F065\";\n}\n.fa-compress:before {\n  content: \"\\F066\";\n}\n.fa-plus:before {\n  content: \"\\F067\";\n}\n.fa-minus:before {\n  content: \"\\F068\";\n}\n.fa-asterisk:before {\n  content: \"\\F069\";\n}\n.fa-exclamation-circle:before {\n  content: \"\\F06A\";\n}\n.fa-gift:before {\n  content: \"\\F06B\";\n}\n.fa-leaf:before {\n  content: \"\\F06C\";\n}\n.fa-fire:before {\n  content: \"\\F06D\";\n}\n.fa-eye:before {\n  content: \"\\F06E\";\n}\n.fa-eye-slash:before {\n  content: \"\\F070\";\n}\n.fa-warning:before,\n.fa-exclamation-triangle:before {\n  content: \"\\F071\";\n}\n.fa-plane:before {\n  content: \"\\F072\";\n}\n.fa-calendar:before {\n  content: \"\\F073\";\n}\n.fa-random:before {\n  content: \"\\F074\";\n}\n.fa-comment:before {\n  content: \"\\F075\";\n}\n.fa-magnet:before {\n  content: \"\\F076\";\n}\n.fa-chevron-up:before {\n  content: \"\\F077\";\n}\n.fa-chevron-down:before {\n  content: \"\\F078\";\n}\n.fa-retweet:before {\n  content: \"\\F079\";\n}\n.fa-shopping-cart:before {\n  content: \"\\F07A\";\n}\n.fa-folder:before {\n  content: \"\\F07B\";\n}\n.fa-folder-open:before {\n  content: \"\\F07C\";\n}\n.fa-arrows-v:before {\n  content: \"\\F07D\";\n}\n.fa-arrows-h:before {\n  content: \"\\F07E\";\n}\n.fa-bar-chart-o:before,\n.fa-bar-chart:before {\n  content: \"\\F080\";\n}\n.fa-twitter-square:before {\n  content: \"\\F081\";\n}\n.fa-facebook-square:before {\n  content: \"\\F082\";\n}\n.fa-camera-retro:before {\n  content: \"\\F083\";\n}\n.fa-key:before {\n  content: \"\\F084\";\n}\n.fa-gears:before,\n.fa-cogs:before {\n  content: \"\\F085\";\n}\n.fa-comments:before {\n  content: \"\\F086\";\n}\n.fa-thumbs-o-up:before {\n  content: \"\\F087\";\n}\n.fa-thumbs-o-down:before {\n  content: \"\\F088\";\n}\n.fa-star-half:before {\n  content: \"\\F089\";\n}\n.fa-heart-o:before {\n  content: \"\\F08A\";\n}\n.fa-sign-out:before {\n  content: \"\\F08B\";\n}\n.fa-linkedin-square:before {\n  content: \"\\F08C\";\n}\n.fa-thumb-tack:before {\n  content: \"\\F08D\";\n}\n.fa-external-link:before {\n  content: \"\\F08E\";\n}\n.fa-sign-in:before {\n  content: \"\\F090\";\n}\n.fa-trophy:before {\n  content: \"\\F091\";\n}\n.fa-github-square:before {\n  content: \"\\F092\";\n}\n.fa-upload:before {\n  content: \"\\F093\";\n}\n.fa-lemon-o:before {\n  content: \"\\F094\";\n}\n.fa-phone:before {\n  content: \"\\F095\";\n}\n.fa-square-o:before {\n  content: \"\\F096\";\n}\n.fa-bookmark-o:before {\n  content: \"\\F097\";\n}\n.fa-phone-square:before {\n  content: \"\\F098\";\n}\n.fa-twitter:before {\n  content: \"\\F099\";\n}\n.fa-facebook-f:before,\n.fa-facebook:before {\n  content: \"\\F09A\";\n}\n.fa-github:before {\n  content: \"\\F09B\";\n}\n.fa-unlock:before {\n  content: \"\\F09C\";\n}\n.fa-credit-card:before {\n  content: \"\\F09D\";\n}\n.fa-feed:before,\n.fa-rss:before {\n  content: \"\\F09E\";\n}\n.fa-hdd-o:before {\n  content: \"\\F0A0\";\n}\n.fa-bullhorn:before {\n  content: \"\\F0A1\";\n}\n.fa-bell:before {\n  content: \"\\F0F3\";\n}\n.fa-certificate:before {\n  content: \"\\F0A3\";\n}\n.fa-hand-o-right:before {\n  content: \"\\F0A4\";\n}\n.fa-hand-o-left:before {\n  content: \"\\F0A5\";\n}\n.fa-hand-o-up:before {\n  content: \"\\F0A6\";\n}\n.fa-hand-o-down:before {\n  content: \"\\F0A7\";\n}\n.fa-arrow-circle-left:before {\n  content: \"\\F0A8\";\n}\n.fa-arrow-circle-right:before {\n  content: \"\\F0A9\";\n}\n.fa-arrow-circle-up:before {\n  content: \"\\F0AA\";\n}\n.fa-arrow-circle-down:before {\n  content: \"\\F0AB\";\n}\n.fa-globe:before {\n  content: \"\\F0AC\";\n}\n.fa-wrench:before {\n  content: \"\\F0AD\";\n}\n.fa-tasks:before {\n  content: \"\\F0AE\";\n}\n.fa-filter:before {\n  content: \"\\F0B0\";\n}\n.fa-briefcase:before {\n  content: \"\\F0B1\";\n}\n.fa-arrows-alt:before {\n  content: \"\\F0B2\";\n}\n.fa-group:before,\n.fa-users:before {\n  content: \"\\F0C0\";\n}\n.fa-chain:before,\n.fa-link:before {\n  content: \"\\F0C1\";\n}\n.fa-cloud:before {\n  content: \"\\F0C2\";\n}\n.fa-flask:before {\n  content: \"\\F0C3\";\n}\n.fa-cut:before,\n.fa-scissors:before {\n  content: \"\\F0C4\";\n}\n.fa-copy:before,\n.fa-files-o:before {\n  content: \"\\F0C5\";\n}\n.fa-paperclip:before {\n  content: \"\\F0C6\";\n}\n.fa-save:before,\n.fa-floppy-o:before {\n  content: \"\\F0C7\";\n}\n.fa-square:before {\n  content: \"\\F0C8\";\n}\n.fa-navicon:before,\n.fa-reorder:before,\n.fa-bars:before {\n  content: \"\\F0C9\";\n}\n.fa-list-ul:before {\n  content: \"\\F0CA\";\n}\n.fa-list-ol:before {\n  content: \"\\F0CB\";\n}\n.fa-strikethrough:before {\n  content: \"\\F0CC\";\n}\n.fa-underline:before {\n  content: \"\\F0CD\";\n}\n.fa-table:before {\n  content: \"\\F0CE\";\n}\n.fa-magic:before {\n  content: \"\\F0D0\";\n}\n.fa-truck:before {\n  content: \"\\F0D1\";\n}\n.fa-pinterest:before {\n  content: \"\\F0D2\";\n}\n.fa-pinterest-square:before {\n  content: \"\\F0D3\";\n}\n.fa-google-plus-square:before {\n  content: \"\\F0D4\";\n}\n.fa-google-plus:before {\n  content: \"\\F0D5\";\n}\n.fa-money:before {\n  content: \"\\F0D6\";\n}\n.fa-caret-down:before {\n  content: \"\\F0D7\";\n}\n.fa-caret-up:before {\n  content: \"\\F0D8\";\n}\n.fa-caret-left:before {\n  content: \"\\F0D9\";\n}\n.fa-caret-right:before {\n  content: \"\\F0DA\";\n}\n.fa-columns:before {\n  content: \"\\F0DB\";\n}\n.fa-unsorted:before,\n.fa-sort:before {\n  content: \"\\F0DC\";\n}\n.fa-sort-down:before,\n.fa-sort-desc:before {\n  content: \"\\F0DD\";\n}\n.fa-sort-up:before,\n.fa-sort-asc:before {\n  content: \"\\F0DE\";\n}\n.fa-envelope:before {\n  content: \"\\F0E0\";\n}\n.fa-linkedin:before {\n  content: \"\\F0E1\";\n}\n.fa-rotate-left:before,\n.fa-undo:before {\n  content: \"\\F0E2\";\n}\n.fa-legal:before,\n.fa-gavel:before {\n  content: \"\\F0E3\";\n}\n.fa-dashboard:before,\n.fa-tachometer:before {\n  content: \"\\F0E4\";\n}\n.fa-comment-o:before {\n  content: \"\\F0E5\";\n}\n.fa-comments-o:before {\n  content: \"\\F0E6\";\n}\n.fa-flash:before,\n.fa-bolt:before {\n  content: \"\\F0E7\";\n}\n.fa-sitemap:before {\n  content: \"\\F0E8\";\n}\n.fa-umbrella:before {\n  content: \"\\F0E9\";\n}\n.fa-paste:before,\n.fa-clipboard:before {\n  content: \"\\F0EA\";\n}\n.fa-lightbulb-o:before {\n  content: \"\\F0EB\";\n}\n.fa-exchange:before {\n  content: \"\\F0EC\";\n}\n.fa-cloud-download:before {\n  content: \"\\F0ED\";\n}\n.fa-cloud-upload:before {\n  content: \"\\F0EE\";\n}\n.fa-user-md:before {\n  content: \"\\F0F0\";\n}\n.fa-stethoscope:before {\n  content: \"\\F0F1\";\n}\n.fa-suitcase:before {\n  content: \"\\F0F2\";\n}\n.fa-bell-o:before {\n  content: \"\\F0A2\";\n}\n.fa-coffee:before {\n  content: \"\\F0F4\";\n}\n.fa-cutlery:before {\n  content: \"\\F0F5\";\n}\n.fa-file-text-o:before {\n  content: \"\\F0F6\";\n}\n.fa-building-o:before {\n  content: \"\\F0F7\";\n}\n.fa-hospital-o:before {\n  content: \"\\F0F8\";\n}\n.fa-ambulance:before {\n  content: \"\\F0F9\";\n}\n.fa-medkit:before {\n  content: \"\\F0FA\";\n}\n.fa-fighter-jet:before {\n  content: \"\\F0FB\";\n}\n.fa-beer:before {\n  content: \"\\F0FC\";\n}\n.fa-h-square:before {\n  content: \"\\F0FD\";\n}\n.fa-plus-square:before {\n  content: \"\\F0FE\";\n}\n.fa-angle-double-left:before {\n  content: \"\\F100\";\n}\n.fa-angle-double-right:before {\n  content: \"\\F101\";\n}\n.fa-angle-double-up:before {\n  content: \"\\F102\";\n}\n.fa-angle-double-down:before {\n  content: \"\\F103\";\n}\n.fa-angle-left:before {\n  content: \"\\F104\";\n}\n.fa-angle-right:before {\n  content: \"\\F105\";\n}\n.fa-angle-up:before {\n  content: \"\\F106\";\n}\n.fa-angle-down:before {\n  content: \"\\F107\";\n}\n.fa-desktop:before {\n  content: \"\\F108\";\n}\n.fa-laptop:before {\n  content: \"\\F109\";\n}\n.fa-tablet:before {\n  content: \"\\F10A\";\n}\n.fa-mobile-phone:before,\n.fa-mobile:before {\n  content: \"\\F10B\";\n}\n.fa-circle-o:before {\n  content: \"\\F10C\";\n}\n.fa-quote-left:before {\n  content: \"\\F10D\";\n}\n.fa-quote-right:before {\n  content: \"\\F10E\";\n}\n.fa-spinner:before {\n  content: \"\\F110\";\n}\n.fa-circle:before {\n  content: \"\\F111\";\n}\n.fa-mail-reply:before,\n.fa-reply:before {\n  content: \"\\F112\";\n}\n.fa-github-alt:before {\n  content: \"\\F113\";\n}\n.fa-folder-o:before {\n  content: \"\\F114\";\n}\n.fa-folder-open-o:before {\n  content: \"\\F115\";\n}\n.fa-smile-o:before {\n  content: \"\\F118\";\n}\n.fa-frown-o:before {\n  content: \"\\F119\";\n}\n.fa-meh-o:before {\n  content: \"\\F11A\";\n}\n.fa-gamepad:before {\n  content: \"\\F11B\";\n}\n.fa-keyboard-o:before {\n  content: \"\\F11C\";\n}\n.fa-flag-o:before {\n  content: \"\\F11D\";\n}\n.fa-flag-checkered:before {\n  content: \"\\F11E\";\n}\n.fa-terminal:before {\n  content: \"\\F120\";\n}\n.fa-code:before {\n  content: \"\\F121\";\n}\n.fa-mail-reply-all:before,\n.fa-reply-all:before {\n  content: \"\\F122\";\n}\n.fa-star-half-empty:before,\n.fa-star-half-full:before,\n.fa-star-half-o:before {\n  content: \"\\F123\";\n}\n.fa-location-arrow:before {\n  content: \"\\F124\";\n}\n.fa-crop:before {\n  content: \"\\F125\";\n}\n.fa-code-fork:before {\n  content: \"\\F126\";\n}\n.fa-unlink:before,\n.fa-chain-broken:before {\n  content: \"\\F127\";\n}\n.fa-question:before {\n  content: \"\\F128\";\n}\n.fa-info:before {\n  content: \"\\F129\";\n}\n.fa-exclamation:before {\n  content: \"\\F12A\";\n}\n.fa-superscript:before {\n  content: \"\\F12B\";\n}\n.fa-subscript:before {\n  content: \"\\F12C\";\n}\n.fa-eraser:before {\n  content: \"\\F12D\";\n}\n.fa-puzzle-piece:before {\n  content: \"\\F12E\";\n}\n.fa-microphone:before {\n  content: \"\\F130\";\n}\n.fa-microphone-slash:before {\n  content: \"\\F131\";\n}\n.fa-shield:before {\n  content: \"\\F132\";\n}\n.fa-calendar-o:before {\n  content: \"\\F133\";\n}\n.fa-fire-extinguisher:before {\n  content: \"\\F134\";\n}\n.fa-rocket:before {\n  content: \"\\F135\";\n}\n.fa-maxcdn:before {\n  content: \"\\F136\";\n}\n.fa-chevron-circle-left:before {\n  content: \"\\F137\";\n}\n.fa-chevron-circle-right:before {\n  content: \"\\F138\";\n}\n.fa-chevron-circle-up:before {\n  content: \"\\F139\";\n}\n.fa-chevron-circle-down:before {\n  content: \"\\F13A\";\n}\n.fa-html5:before {\n  content: \"\\F13B\";\n}\n.fa-css3:before {\n  content: \"\\F13C\";\n}\n.fa-anchor:before {\n  content: \"\\F13D\";\n}\n.fa-unlock-alt:before {\n  content: \"\\F13E\";\n}\n.fa-bullseye:before {\n  content: \"\\F140\";\n}\n.fa-ellipsis-h:before {\n  content: \"\\F141\";\n}\n.fa-ellipsis-v:before {\n  content: \"\\F142\";\n}\n.fa-rss-square:before {\n  content: \"\\F143\";\n}\n.fa-play-circle:before {\n  content: \"\\F144\";\n}\n.fa-ticket:before {\n  content: \"\\F145\";\n}\n.fa-minus-square:before {\n  content: \"\\F146\";\n}\n.fa-minus-square-o:before {\n  content: \"\\F147\";\n}\n.fa-level-up:before {\n  content: \"\\F148\";\n}\n.fa-level-down:before {\n  content: \"\\F149\";\n}\n.fa-check-square:before {\n  content: \"\\F14A\";\n}\n.fa-pencil-square:before {\n  content: \"\\F14B\";\n}\n.fa-external-link-square:before {\n  content: \"\\F14C\";\n}\n.fa-share-square:before {\n  content: \"\\F14D\";\n}\n.fa-compass:before {\n  content: \"\\F14E\";\n}\n.fa-toggle-down:before,\n.fa-caret-square-o-down:before {\n  content: \"\\F150\";\n}\n.fa-toggle-up:before,\n.fa-caret-square-o-up:before {\n  content: \"\\F151\";\n}\n.fa-toggle-right:before,\n.fa-caret-square-o-right:before {\n  content: \"\\F152\";\n}\n.fa-euro:before,\n.fa-eur:before {\n  content: \"\\F153\";\n}\n.fa-gbp:before {\n  content: \"\\F154\";\n}\n.fa-dollar:before,\n.fa-usd:before {\n  content: \"\\F155\";\n}\n.fa-rupee:before,\n.fa-inr:before {\n  content: \"\\F156\";\n}\n.fa-cny:before,\n.fa-rmb:before,\n.fa-yen:before,\n.fa-jpy:before {\n  content: \"\\F157\";\n}\n.fa-ruble:before,\n.fa-rouble:before,\n.fa-rub:before {\n  content: \"\\F158\";\n}\n.fa-won:before,\n.fa-krw:before {\n  content: \"\\F159\";\n}\n.fa-bitcoin:before,\n.fa-btc:before {\n  content: \"\\F15A\";\n}\n.fa-file:before {\n  content: \"\\F15B\";\n}\n.fa-file-text:before {\n  content: \"\\F15C\";\n}\n.fa-sort-alpha-asc:before {\n  content: \"\\F15D\";\n}\n.fa-sort-alpha-desc:before {\n  content: \"\\F15E\";\n}\n.fa-sort-amount-asc:before {\n  content: \"\\F160\";\n}\n.fa-sort-amount-desc:before {\n  content: \"\\F161\";\n}\n.fa-sort-numeric-asc:before {\n  content: \"\\F162\";\n}\n.fa-sort-numeric-desc:before {\n  content: \"\\F163\";\n}\n.fa-thumbs-up:before {\n  content: \"\\F164\";\n}\n.fa-thumbs-down:before {\n  content: \"\\F165\";\n}\n.fa-youtube-square:before {\n  content: \"\\F166\";\n}\n.fa-youtube:before {\n  content: \"\\F167\";\n}\n.fa-xing:before {\n  content: \"\\F168\";\n}\n.fa-xing-square:before {\n  content: \"\\F169\";\n}\n.fa-youtube-play:before {\n  content: \"\\F16A\";\n}\n.fa-dropbox:before {\n  content: \"\\F16B\";\n}\n.fa-stack-overflow:before {\n  content: \"\\F16C\";\n}\n.fa-instagram:before {\n  content: \"\\F16D\";\n}\n.fa-flickr:before {\n  content: \"\\F16E\";\n}\n.fa-adn:before {\n  content: \"\\F170\";\n}\n.fa-bitbucket:before {\n  content: \"\\F171\";\n}\n.fa-bitbucket-square:before {\n  content: \"\\F172\";\n}\n.fa-tumblr:before {\n  content: \"\\F173\";\n}\n.fa-tumblr-square:before {\n  content: \"\\F174\";\n}\n.fa-long-arrow-down:before {\n  content: \"\\F175\";\n}\n.fa-long-arrow-up:before {\n  content: \"\\F176\";\n}\n.fa-long-arrow-left:before {\n  content: \"\\F177\";\n}\n.fa-long-arrow-right:before {\n  content: \"\\F178\";\n}\n.fa-apple:before {\n  content: \"\\F179\";\n}\n.fa-windows:before {\n  content: \"\\F17A\";\n}\n.fa-android:before {\n  content: \"\\F17B\";\n}\n.fa-linux:before {\n  content: \"\\F17C\";\n}\n.fa-dribbble:before {\n  content: \"\\F17D\";\n}\n.fa-skype:before {\n  content: \"\\F17E\";\n}\n.fa-foursquare:before {\n  content: \"\\F180\";\n}\n.fa-trello:before {\n  content: \"\\F181\";\n}\n.fa-female:before {\n  content: \"\\F182\";\n}\n.fa-male:before {\n  content: \"\\F183\";\n}\n.fa-gittip:before,\n.fa-gratipay:before {\n  content: \"\\F184\";\n}\n.fa-sun-o:before {\n  content: \"\\F185\";\n}\n.fa-moon-o:before {\n  content: \"\\F186\";\n}\n.fa-archive:before {\n  content: \"\\F187\";\n}\n.fa-bug:before {\n  content: \"\\F188\";\n}\n.fa-vk:before {\n  content: \"\\F189\";\n}\n.fa-weibo:before {\n  content: \"\\F18A\";\n}\n.fa-renren:before {\n  content: \"\\F18B\";\n}\n.fa-pagelines:before {\n  content: \"\\F18C\";\n}\n.fa-stack-exchange:before {\n  content: \"\\F18D\";\n}\n.fa-arrow-circle-o-right:before {\n  content: \"\\F18E\";\n}\n.fa-arrow-circle-o-left:before {\n  content: \"\\F190\";\n}\n.fa-toggle-left:before,\n.fa-caret-square-o-left:before {\n  content: \"\\F191\";\n}\n.fa-dot-circle-o:before {\n  content: \"\\F192\";\n}\n.fa-wheelchair:before {\n  content: \"\\F193\";\n}\n.fa-vimeo-square:before {\n  content: \"\\F194\";\n}\n.fa-turkish-lira:before,\n.fa-try:before {\n  content: \"\\F195\";\n}\n.fa-plus-square-o:before {\n  content: \"\\F196\";\n}\n.fa-space-shuttle:before {\n  content: \"\\F197\";\n}\n.fa-slack:before {\n  content: \"\\F198\";\n}\n.fa-envelope-square:before {\n  content: \"\\F199\";\n}\n.fa-wordpress:before {\n  content: \"\\F19A\";\n}\n.fa-openid:before {\n  content: \"\\F19B\";\n}\n.fa-institution:before,\n.fa-bank:before,\n.fa-university:before {\n  content: \"\\F19C\";\n}\n.fa-mortar-board:before,\n.fa-graduation-cap:before {\n  content: \"\\F19D\";\n}\n.fa-yahoo:before {\n  content: \"\\F19E\";\n}\n.fa-google:before {\n  content: \"\\F1A0\";\n}\n.fa-reddit:before {\n  content: \"\\F1A1\";\n}\n.fa-reddit-square:before {\n  content: \"\\F1A2\";\n}\n.fa-stumbleupon-circle:before {\n  content: \"\\F1A3\";\n}\n.fa-stumbleupon:before {\n  content: \"\\F1A4\";\n}\n.fa-delicious:before {\n  content: \"\\F1A5\";\n}\n.fa-digg:before {\n  content: \"\\F1A6\";\n}\n.fa-pied-piper-pp:before {\n  content: \"\\F1A7\";\n}\n.fa-pied-piper-alt:before {\n  content: \"\\F1A8\";\n}\n.fa-drupal:before {\n  content: \"\\F1A9\";\n}\n.fa-joomla:before {\n  content: \"\\F1AA\";\n}\n.fa-language:before {\n  content: \"\\F1AB\";\n}\n.fa-fax:before {\n  content: \"\\F1AC\";\n}\n.fa-building:before {\n  content: \"\\F1AD\";\n}\n.fa-child:before {\n  content: \"\\F1AE\";\n}\n.fa-paw:before {\n  content: \"\\F1B0\";\n}\n.fa-spoon:before {\n  content: \"\\F1B1\";\n}\n.fa-cube:before {\n  content: \"\\F1B2\";\n}\n.fa-cubes:before {\n  content: \"\\F1B3\";\n}\n.fa-behance:before {\n  content: \"\\F1B4\";\n}\n.fa-behance-square:before {\n  content: \"\\F1B5\";\n}\n.fa-steam:before {\n  content: \"\\F1B6\";\n}\n.fa-steam-square:before {\n  content: \"\\F1B7\";\n}\n.fa-recycle:before {\n  content: \"\\F1B8\";\n}\n.fa-automobile:before,\n.fa-car:before {\n  content: \"\\F1B9\";\n}\n.fa-cab:before,\n.fa-taxi:before {\n  content: \"\\F1BA\";\n}\n.fa-tree:before {\n  content: \"\\F1BB\";\n}\n.fa-spotify:before {\n  content: \"\\F1BC\";\n}\n.fa-deviantart:before {\n  content: \"\\F1BD\";\n}\n.fa-soundcloud:before {\n  content: \"\\F1BE\";\n}\n.fa-database:before {\n  content: \"\\F1C0\";\n}\n.fa-file-pdf-o:before {\n  content: \"\\F1C1\";\n}\n.fa-file-word-o:before {\n  content: \"\\F1C2\";\n}\n.fa-file-excel-o:before {\n  content: \"\\F1C3\";\n}\n.fa-file-powerpoint-o:before {\n  content: \"\\F1C4\";\n}\n.fa-file-photo-o:before,\n.fa-file-picture-o:before,\n.fa-file-image-o:before {\n  content: \"\\F1C5\";\n}\n.fa-file-zip-o:before,\n.fa-file-archive-o:before {\n  content: \"\\F1C6\";\n}\n.fa-file-sound-o:before,\n.fa-file-audio-o:before {\n  content: \"\\F1C7\";\n}\n.fa-file-movie-o:before,\n.fa-file-video-o:before {\n  content: \"\\F1C8\";\n}\n.fa-file-code-o:before {\n  content: \"\\F1C9\";\n}\n.fa-vine:before {\n  content: \"\\F1CA\";\n}\n.fa-codepen:before {\n  content: \"\\F1CB\";\n}\n.fa-jsfiddle:before {\n  content: \"\\F1CC\";\n}\n.fa-life-bouy:before,\n.fa-life-buoy:before,\n.fa-life-saver:before,\n.fa-support:before,\n.fa-life-ring:before {\n  content: \"\\F1CD\";\n}\n.fa-circle-o-notch:before {\n  content: \"\\F1CE\";\n}\n.fa-ra:before,\n.fa-resistance:before,\n.fa-rebel:before {\n  content: \"\\F1D0\";\n}\n.fa-ge:before,\n.fa-empire:before {\n  content: \"\\F1D1\";\n}\n.fa-git-square:before {\n  content: \"\\F1D2\";\n}\n.fa-git:before {\n  content: \"\\F1D3\";\n}\n.fa-y-combinator-square:before,\n.fa-yc-square:before,\n.fa-hacker-news:before {\n  content: \"\\F1D4\";\n}\n.fa-tencent-weibo:before {\n  content: \"\\F1D5\";\n}\n.fa-qq:before {\n  content: \"\\F1D6\";\n}\n.fa-wechat:before,\n.fa-weixin:before {\n  content: \"\\F1D7\";\n}\n.fa-send:before,\n.fa-paper-plane:before {\n  content: \"\\F1D8\";\n}\n.fa-send-o:before,\n.fa-paper-plane-o:before {\n  content: \"\\F1D9\";\n}\n.fa-history:before {\n  content: \"\\F1DA\";\n}\n.fa-circle-thin:before {\n  content: \"\\F1DB\";\n}\n.fa-header:before {\n  content: \"\\F1DC\";\n}\n.fa-paragraph:before {\n  content: \"\\F1DD\";\n}\n.fa-sliders:before {\n  content: \"\\F1DE\";\n}\n.fa-share-alt:before {\n  content: \"\\F1E0\";\n}\n.fa-share-alt-square:before {\n  content: \"\\F1E1\";\n}\n.fa-bomb:before {\n  content: \"\\F1E2\";\n}\n.fa-soccer-ball-o:before,\n.fa-futbol-o:before {\n  content: \"\\F1E3\";\n}\n.fa-tty:before {\n  content: \"\\F1E4\";\n}\n.fa-binoculars:before {\n  content: \"\\F1E5\";\n}\n.fa-plug:before {\n  content: \"\\F1E6\";\n}\n.fa-slideshare:before {\n  content: \"\\F1E7\";\n}\n.fa-twitch:before {\n  content: \"\\F1E8\";\n}\n.fa-yelp:before {\n  content: \"\\F1E9\";\n}\n.fa-newspaper-o:before {\n  content: \"\\F1EA\";\n}\n.fa-wifi:before {\n  content: \"\\F1EB\";\n}\n.fa-calculator:before {\n  content: \"\\F1EC\";\n}\n.fa-paypal:before {\n  content: \"\\F1ED\";\n}\n.fa-google-wallet:before {\n  content: \"\\F1EE\";\n}\n.fa-cc-visa:before {\n  content: \"\\F1F0\";\n}\n.fa-cc-mastercard:before {\n  content: \"\\F1F1\";\n}\n.fa-cc-discover:before {\n  content: \"\\F1F2\";\n}\n.fa-cc-amex:before {\n  content: \"\\F1F3\";\n}\n.fa-cc-paypal:before {\n  content: \"\\F1F4\";\n}\n.fa-cc-stripe:before {\n  content: \"\\F1F5\";\n}\n.fa-bell-slash:before {\n  content: \"\\F1F6\";\n}\n.fa-bell-slash-o:before {\n  content: \"\\F1F7\";\n}\n.fa-trash:before {\n  content: \"\\F1F8\";\n}\n.fa-copyright:before {\n  content: \"\\F1F9\";\n}\n.fa-at:before {\n  content: \"\\F1FA\";\n}\n.fa-eyedropper:before {\n  content: \"\\F1FB\";\n}\n.fa-paint-brush:before {\n  content: \"\\F1FC\";\n}\n.fa-birthday-cake:before {\n  content: \"\\F1FD\";\n}\n.fa-area-chart:before {\n  content: \"\\F1FE\";\n}\n.fa-pie-chart:before {\n  content: \"\\F200\";\n}\n.fa-line-chart:before {\n  content: \"\\F201\";\n}\n.fa-lastfm:before {\n  content: \"\\F202\";\n}\n.fa-lastfm-square:before {\n  content: \"\\F203\";\n}\n.fa-toggle-off:before {\n  content: \"\\F204\";\n}\n.fa-toggle-on:before {\n  content: \"\\F205\";\n}\n.fa-bicycle:before {\n  content: \"\\F206\";\n}\n.fa-bus:before {\n  content: \"\\F207\";\n}\n.fa-ioxhost:before {\n  content: \"\\F208\";\n}\n.fa-angellist:before {\n  content: \"\\F209\";\n}\n.fa-cc:before {\n  content: \"\\F20A\";\n}\n.fa-shekel:before,\n.fa-sheqel:before,\n.fa-ils:before {\n  content: \"\\F20B\";\n}\n.fa-meanpath:before {\n  content: \"\\F20C\";\n}\n.fa-buysellads:before {\n  content: \"\\F20D\";\n}\n.fa-connectdevelop:before {\n  content: \"\\F20E\";\n}\n.fa-dashcube:before {\n  content: \"\\F210\";\n}\n.fa-forumbee:before {\n  content: \"\\F211\";\n}\n.fa-leanpub:before {\n  content: \"\\F212\";\n}\n.fa-sellsy:before {\n  content: \"\\F213\";\n}\n.fa-shirtsinbulk:before {\n  content: \"\\F214\";\n}\n.fa-simplybuilt:before {\n  content: \"\\F215\";\n}\n.fa-skyatlas:before {\n  content: \"\\F216\";\n}\n.fa-cart-plus:before {\n  content: \"\\F217\";\n}\n.fa-cart-arrow-down:before {\n  content: \"\\F218\";\n}\n.fa-diamond:before {\n  content: \"\\F219\";\n}\n.fa-ship:before {\n  content: \"\\F21A\";\n}\n.fa-user-secret:before {\n  content: \"\\F21B\";\n}\n.fa-motorcycle:before {\n  content: \"\\F21C\";\n}\n.fa-street-view:before {\n  content: \"\\F21D\";\n}\n.fa-heartbeat:before {\n  content: \"\\F21E\";\n}\n.fa-venus:before {\n  content: \"\\F221\";\n}\n.fa-mars:before {\n  content: \"\\F222\";\n}\n.fa-mercury:before {\n  content: \"\\F223\";\n}\n.fa-intersex:before,\n.fa-transgender:before {\n  content: \"\\F224\";\n}\n.fa-transgender-alt:before {\n  content: \"\\F225\";\n}\n.fa-venus-double:before {\n  content: \"\\F226\";\n}\n.fa-mars-double:before {\n  content: \"\\F227\";\n}\n.fa-venus-mars:before {\n  content: \"\\F228\";\n}\n.fa-mars-stroke:before {\n  content: \"\\F229\";\n}\n.fa-mars-stroke-v:before {\n  content: \"\\F22A\";\n}\n.fa-mars-stroke-h:before {\n  content: \"\\F22B\";\n}\n.fa-neuter:before {\n  content: \"\\F22C\";\n}\n.fa-genderless:before {\n  content: \"\\F22D\";\n}\n.fa-facebook-official:before {\n  content: \"\\F230\";\n}\n.fa-pinterest-p:before {\n  content: \"\\F231\";\n}\n.fa-whatsapp:before {\n  content: \"\\F232\";\n}\n.fa-server:before {\n  content: \"\\F233\";\n}\n.fa-user-plus:before {\n  content: \"\\F234\";\n}\n.fa-user-times:before {\n  content: \"\\F235\";\n}\n.fa-hotel:before,\n.fa-bed:before {\n  content: \"\\F236\";\n}\n.fa-viacoin:before {\n  content: \"\\F237\";\n}\n.fa-train:before {\n  content: \"\\F238\";\n}\n.fa-subway:before {\n  content: \"\\F239\";\n}\n.fa-medium:before {\n  content: \"\\F23A\";\n}\n.fa-yc:before,\n.fa-y-combinator:before {\n  content: \"\\F23B\";\n}\n.fa-optin-monster:before {\n  content: \"\\F23C\";\n}\n.fa-opencart:before {\n  content: \"\\F23D\";\n}\n.fa-expeditedssl:before {\n  content: \"\\F23E\";\n}\n.fa-battery-4:before,\n.fa-battery-full:before {\n  content: \"\\F240\";\n}\n.fa-battery-3:before,\n.fa-battery-three-quarters:before {\n  content: \"\\F241\";\n}\n.fa-battery-2:before,\n.fa-battery-half:before {\n  content: \"\\F242\";\n}\n.fa-battery-1:before,\n.fa-battery-quarter:before {\n  content: \"\\F243\";\n}\n.fa-battery-0:before,\n.fa-battery-empty:before {\n  content: \"\\F244\";\n}\n.fa-mouse-pointer:before {\n  content: \"\\F245\";\n}\n.fa-i-cursor:before {\n  content: \"\\F246\";\n}\n.fa-object-group:before {\n  content: \"\\F247\";\n}\n.fa-object-ungroup:before {\n  content: \"\\F248\";\n}\n.fa-sticky-note:before {\n  content: \"\\F249\";\n}\n.fa-sticky-note-o:before {\n  content: \"\\F24A\";\n}\n.fa-cc-jcb:before {\n  content: \"\\F24B\";\n}\n.fa-cc-diners-club:before {\n  content: \"\\F24C\";\n}\n.fa-clone:before {\n  content: \"\\F24D\";\n}\n.fa-balance-scale:before {\n  content: \"\\F24E\";\n}\n.fa-hourglass-o:before {\n  content: \"\\F250\";\n}\n.fa-hourglass-1:before,\n.fa-hourglass-start:before {\n  content: \"\\F251\";\n}\n.fa-hourglass-2:before,\n.fa-hourglass-half:before {\n  content: \"\\F252\";\n}\n.fa-hourglass-3:before,\n.fa-hourglass-end:before {\n  content: \"\\F253\";\n}\n.fa-hourglass:before {\n  content: \"\\F254\";\n}\n.fa-hand-grab-o:before,\n.fa-hand-rock-o:before {\n  content: \"\\F255\";\n}\n.fa-hand-stop-o:before,\n.fa-hand-paper-o:before {\n  content: \"\\F256\";\n}\n.fa-hand-scissors-o:before {\n  content: \"\\F257\";\n}\n.fa-hand-lizard-o:before {\n  content: \"\\F258\";\n}\n.fa-hand-spock-o:before {\n  content: \"\\F259\";\n}\n.fa-hand-pointer-o:before {\n  content: \"\\F25A\";\n}\n.fa-hand-peace-o:before {\n  content: \"\\F25B\";\n}\n.fa-trademark:before {\n  content: \"\\F25C\";\n}\n.fa-registered:before {\n  content: \"\\F25D\";\n}\n.fa-creative-commons:before {\n  content: \"\\F25E\";\n}\n.fa-gg:before {\n  content: \"\\F260\";\n}\n.fa-gg-circle:before {\n  content: \"\\F261\";\n}\n.fa-tripadvisor:before {\n  content: \"\\F262\";\n}\n.fa-odnoklassniki:before {\n  content: \"\\F263\";\n}\n.fa-odnoklassniki-square:before {\n  content: \"\\F264\";\n}\n.fa-get-pocket:before {\n  content: \"\\F265\";\n}\n.fa-wikipedia-w:before {\n  content: \"\\F266\";\n}\n.fa-safari:before {\n  content: \"\\F267\";\n}\n.fa-chrome:before {\n  content: \"\\F268\";\n}\n.fa-firefox:before {\n  content: \"\\F269\";\n}\n.fa-opera:before {\n  content: \"\\F26A\";\n}\n.fa-internet-explorer:before {\n  content: \"\\F26B\";\n}\n.fa-tv:before,\n.fa-television:before {\n  content: \"\\F26C\";\n}\n.fa-contao:before {\n  content: \"\\F26D\";\n}\n.fa-500px:before {\n  content: \"\\F26E\";\n}\n.fa-amazon:before {\n  content: \"\\F270\";\n}\n.fa-calendar-plus-o:before {\n  content: \"\\F271\";\n}\n.fa-calendar-minus-o:before {\n  content: \"\\F272\";\n}\n.fa-calendar-times-o:before {\n  content: \"\\F273\";\n}\n.fa-calendar-check-o:before {\n  content: \"\\F274\";\n}\n.fa-industry:before {\n  content: \"\\F275\";\n}\n.fa-map-pin:before {\n  content: \"\\F276\";\n}\n.fa-map-signs:before {\n  content: \"\\F277\";\n}\n.fa-map-o:before {\n  content: \"\\F278\";\n}\n.fa-map:before {\n  content: \"\\F279\";\n}\n.fa-commenting:before {\n  content: \"\\F27A\";\n}\n.fa-commenting-o:before {\n  content: \"\\F27B\";\n}\n.fa-houzz:before {\n  content: \"\\F27C\";\n}\n.fa-vimeo:before {\n  content: \"\\F27D\";\n}\n.fa-black-tie:before {\n  content: \"\\F27E\";\n}\n.fa-fonticons:before {\n  content: \"\\F280\";\n}\n.fa-reddit-alien:before {\n  content: \"\\F281\";\n}\n.fa-edge:before {\n  content: \"\\F282\";\n}\n.fa-credit-card-alt:before {\n  content: \"\\F283\";\n}\n.fa-codiepie:before {\n  content: \"\\F284\";\n}\n.fa-modx:before {\n  content: \"\\F285\";\n}\n.fa-fort-awesome:before {\n  content: \"\\F286\";\n}\n.fa-usb:before {\n  content: \"\\F287\";\n}\n.fa-product-hunt:before {\n  content: \"\\F288\";\n}\n.fa-mixcloud:before {\n  content: \"\\F289\";\n}\n.fa-scribd:before {\n  content: \"\\F28A\";\n}\n.fa-pause-circle:before {\n  content: \"\\F28B\";\n}\n.fa-pause-circle-o:before {\n  content: \"\\F28C\";\n}\n.fa-stop-circle:before {\n  content: \"\\F28D\";\n}\n.fa-stop-circle-o:before {\n  content: \"\\F28E\";\n}\n.fa-shopping-bag:before {\n  content: \"\\F290\";\n}\n.fa-shopping-basket:before {\n  content: \"\\F291\";\n}\n.fa-hashtag:before {\n  content: \"\\F292\";\n}\n.fa-bluetooth:before {\n  content: \"\\F293\";\n}\n.fa-bluetooth-b:before {\n  content: \"\\F294\";\n}\n.fa-percent:before {\n  content: \"\\F295\";\n}\n.fa-gitlab:before {\n  content: \"\\F296\";\n}\n.fa-wpbeginner:before {\n  content: \"\\F297\";\n}\n.fa-wpforms:before {\n  content: \"\\F298\";\n}\n.fa-envira:before {\n  content: \"\\F299\";\n}\n.fa-universal-access:before {\n  content: \"\\F29A\";\n}\n.fa-wheelchair-alt:before {\n  content: \"\\F29B\";\n}\n.fa-question-circle-o:before {\n  content: \"\\F29C\";\n}\n.fa-blind:before {\n  content: \"\\F29D\";\n}\n.fa-audio-description:before {\n  content: \"\\F29E\";\n}\n.fa-volume-control-phone:before {\n  content: \"\\F2A0\";\n}\n.fa-braille:before {\n  content: \"\\F2A1\";\n}\n.fa-assistive-listening-systems:before {\n  content: \"\\F2A2\";\n}\n.fa-asl-interpreting:before,\n.fa-american-sign-language-interpreting:before {\n  content: \"\\F2A3\";\n}\n.fa-deafness:before,\n.fa-hard-of-hearing:before,\n.fa-deaf:before {\n  content: \"\\F2A4\";\n}\n.fa-glide:before {\n  content: \"\\F2A5\";\n}\n.fa-glide-g:before {\n  content: \"\\F2A6\";\n}\n.fa-signing:before,\n.fa-sign-language:before {\n  content: \"\\F2A7\";\n}\n.fa-low-vision:before {\n  content: \"\\F2A8\";\n}\n.fa-viadeo:before {\n  content: \"\\F2A9\";\n}\n.fa-viadeo-square:before {\n  content: \"\\F2AA\";\n}\n.fa-snapchat:before {\n  content: \"\\F2AB\";\n}\n.fa-snapchat-ghost:before {\n  content: \"\\F2AC\";\n}\n.fa-snapchat-square:before {\n  content: \"\\F2AD\";\n}\n.fa-pied-piper:before {\n  content: \"\\F2AE\";\n}\n.fa-first-order:before {\n  content: \"\\F2B0\";\n}\n.fa-yoast:before {\n  content: \"\\F2B1\";\n}\n.fa-themeisle:before {\n  content: \"\\F2B2\";\n}\n.fa-google-plus-circle:before,\n.fa-google-plus-official:before {\n  content: \"\\F2B3\";\n}\n.fa-fa:before,\n.fa-font-awesome:before {\n  content: \"\\F2B4\";\n}\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n}\n.sr-only-focusable:active,\n.sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  clip: auto;\n}", ""]);

// exports

    const application = __webpack_require__("tns-core-modules/application");
    __webpack_require__("tns-core-modules/ui/styling/style-scope");

    exports.forEach(cssExport => {
        if (cssExport.length > 1 && cssExport[1]) {
            // applying the second item of the export as it contains the css contents
            application.addCss(cssExport[1]);
        }
    });
    ;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './assets/font-awesome.css' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./components/Footerm.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Footerm_vue_vue_type_template_id_37176da7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Footerm.vue?vue&type=template&id=37176da7&scoped=true&");
/* harmony import */ var _Footerm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Footerm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Footerm_vue_vue_type_style_index_0_id_37176da7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/Footerm.vue?vue&type=style&index=0&id=37176da7&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Footerm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Footerm_vue_vue_type_template_id_37176da7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Footerm_vue_vue_type_template_id_37176da7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "37176da7",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('37176da7')) {
      api.createRecord('37176da7', component.options)
    } else {
      api.reload('37176da7', component.options)
    }
    module.hot.accept("./components/Footerm.vue?vue&type=template&id=37176da7&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Footerm_vue_vue_type_template_id_37176da7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Footerm.vue?vue&type=template&id=37176da7&scoped=true&");
(function () {
      api.rerender('37176da7', {
        render: _Footerm_vue_vue_type_template_id_37176da7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Footerm_vue_vue_type_template_id_37176da7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/Footerm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/Footerm.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Footerm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Footerm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Footerm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/Footerm.vue?vue&type=style&index=0&id=37176da7&lang=scss&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Footerm_vue_vue_type_style_index_0_id_37176da7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib/index.js?!./components/Footerm.vue?vue&type=style&index=0&id=37176da7&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Footerm_vue_vue_type_style_index_0_id_37176da7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Footerm_vue_vue_type_style_index_0_id_37176da7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Footerm_vue_vue_type_style_index_0_id_37176da7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Footerm_vue_vue_type_style_index_0_id_37176da7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Footerm_vue_vue_type_style_index_0_id_37176da7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/Footerm.vue?vue&type=template&id=37176da7&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footerm_vue_vue_type_template_id_37176da7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Footerm.vue?vue&type=template&id=37176da7&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footerm_vue_vue_type_template_id_37176da7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footerm_vue_vue_type_template_id_37176da7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/Header.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header_vue_vue_type_template_id_1a9bb128_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Header.vue?vue&type=template&id=1a9bb128&scoped=true&");
/* harmony import */ var _Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Header.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Header_vue_vue_type_style_index_0_id_1a9bb128_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/Header.vue?vue&type=style&index=0&id=1a9bb128&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Header_vue_vue_type_template_id_1a9bb128_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Header_vue_vue_type_template_id_1a9bb128_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1a9bb128",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('1a9bb128')) {
      api.createRecord('1a9bb128', component.options)
    } else {
      api.reload('1a9bb128', component.options)
    }
    module.hot.accept("./components/Header.vue?vue&type=template&id=1a9bb128&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Header_vue_vue_type_template_id_1a9bb128_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Header.vue?vue&type=template&id=1a9bb128&scoped=true&");
(function () {
      api.rerender('1a9bb128', {
        render: _Header_vue_vue_type_template_id_1a9bb128_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Header_vue_vue_type_template_id_1a9bb128_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/Header.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/Header.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Header.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/Header.vue?vue&type=style&index=0&id=1a9bb128&scoped=true&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_1a9bb128_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/Header.vue?vue&type=style&index=0&id=1a9bb128&scoped=true&lang=css&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_1a9bb128_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_1a9bb128_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_1a9bb128_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_1a9bb128_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_1a9bb128_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/Header.vue?vue&type=template&id=1a9bb128&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_1a9bb128_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Header.vue?vue&type=template&id=1a9bb128&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_1a9bb128_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_1a9bb128_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/Home.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_67410f3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Home.vue?vue&type=template&id=67410f3a&scoped=true&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Home_vue_vue_type_style_index_0_id_67410f3a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/Home.vue?vue&type=style&index=0&id=67410f3a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_67410f3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_67410f3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "67410f3a",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('67410f3a')) {
      api.createRecord('67410f3a', component.options)
    } else {
      api.reload('67410f3a', component.options)
    }
    module.hot.accept("./components/Home.vue?vue&type=template&id=67410f3a&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Home_vue_vue_type_template_id_67410f3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Home.vue?vue&type=template&id=67410f3a&scoped=true&");
(function () {
      api.rerender('67410f3a', {
        render: _Home_vue_vue_type_template_id_67410f3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Home_vue_vue_type_template_id_67410f3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/Home.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/Home.vue?vue&type=style&index=0&id=67410f3a&lang=scss&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_67410f3a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=style&index=0&id=67410f3a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_67410f3a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_67410f3a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_67410f3a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_67410f3a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_67410f3a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/Home.vue?vue&type=template&id=67410f3a&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_67410f3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=template&id=67410f3a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_67410f3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_67410f3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/LeatherBoard.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LeatherBoard_vue_vue_type_template_id_2e17cc98___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/LeatherBoard.vue?vue&type=template&id=2e17cc98&");
/* harmony import */ var _LeatherBoard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/LeatherBoard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LeatherBoard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LeatherBoard_vue_vue_type_template_id_2e17cc98___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LeatherBoard_vue_vue_type_template_id_2e17cc98___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('2e17cc98')) {
      api.createRecord('2e17cc98', component.options)
    } else {
      api.reload('2e17cc98', component.options)
    }
    module.hot.accept("./components/LeatherBoard.vue?vue&type=template&id=2e17cc98&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _LeatherBoard_vue_vue_type_template_id_2e17cc98___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/LeatherBoard.vue?vue&type=template&id=2e17cc98&");
(function () {
      api.rerender('2e17cc98', {
        render: _LeatherBoard_vue_vue_type_template_id_2e17cc98___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _LeatherBoard_vue_vue_type_template_id_2e17cc98___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/LeatherBoard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/LeatherBoard.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LeatherBoard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/LeatherBoard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LeatherBoard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/LeatherBoard.vue?vue&type=template&id=2e17cc98&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LeatherBoard_vue_vue_type_template_id_2e17cc98___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/LeatherBoard.vue?vue&type=template&id=2e17cc98&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LeatherBoard_vue_vue_type_template_id_2e17cc98___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LeatherBoard_vue_vue_type_template_id_2e17cc98___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/Questions.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Questions_vue_vue_type_template_id_5755a802___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Questions.vue?vue&type=template&id=5755a802&");
/* harmony import */ var _Questions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Questions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Questions_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/Questions.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Questions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Questions_vue_vue_type_template_id_5755a802___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Questions_vue_vue_type_template_id_5755a802___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('5755a802')) {
      api.createRecord('5755a802', component.options)
    } else {
      api.reload('5755a802', component.options)
    }
    module.hot.accept("./components/Questions.vue?vue&type=template&id=5755a802&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Questions_vue_vue_type_template_id_5755a802___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Questions.vue?vue&type=template&id=5755a802&");
(function () {
      api.rerender('5755a802', {
        render: _Questions_vue_vue_type_template_id_5755a802___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Questions_vue_vue_type_template_id_5755a802___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/Questions.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/Questions.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Questions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Questions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Questions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/Questions.vue?vue&type=style&index=0&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Questions_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/Questions.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Questions_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Questions_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Questions_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Questions_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Questions_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/Questions.vue?vue&type=template&id=5755a802&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Questions_vue_vue_type_template_id_5755a802___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Questions.vue?vue&type=template&id=5755a802&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Questions_vue_vue_type_template_id_5755a802___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Questions_vue_vue_type_template_id_5755a802___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/UserProfile.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserProfile_vue_vue_type_template_id_33ad2e53_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/UserProfile.vue?vue&type=template&id=33ad2e53&scoped=true&");
/* harmony import */ var _UserProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/UserProfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _UserProfile_vue_vue_type_style_index_0_id_33ad2e53_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/UserProfile.vue?vue&type=style&index=0&id=33ad2e53&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _UserProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserProfile_vue_vue_type_template_id_33ad2e53_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserProfile_vue_vue_type_template_id_33ad2e53_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "33ad2e53",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('33ad2e53')) {
      api.createRecord('33ad2e53', component.options)
    } else {
      api.reload('33ad2e53', component.options)
    }
    module.hot.accept("./components/UserProfile.vue?vue&type=template&id=33ad2e53&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _UserProfile_vue_vue_type_template_id_33ad2e53_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/UserProfile.vue?vue&type=template&id=33ad2e53&scoped=true&");
(function () {
      api.rerender('33ad2e53', {
        render: _UserProfile_vue_vue_type_template_id_33ad2e53_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _UserProfile_vue_vue_type_template_id_33ad2e53_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/UserProfile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/UserProfile.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/UserProfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/UserProfile.vue?vue&type=style&index=0&id=33ad2e53&lang=scss&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_style_index_0_id_33ad2e53_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib/index.js?!./components/UserProfile.vue?vue&type=style&index=0&id=33ad2e53&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_style_index_0_id_33ad2e53_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_style_index_0_id_33ad2e53_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_style_index_0_id_33ad2e53_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_style_index_0_id_33ad2e53_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_style_index_0_id_33ad2e53_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/UserProfile.vue?vue&type=template&id=33ad2e53&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_template_id_33ad2e53_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/UserProfile.vue?vue&type=template&id=33ad2e53&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_template_id_33ad2e53_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_template_id_33ad2e53_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/Viewprediction.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Viewprediction_vue_vue_type_template_id_6231ede2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Viewprediction.vue?vue&type=template&id=6231ede2&scoped=true&");
/* harmony import */ var _Viewprediction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Viewprediction.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Viewprediction_vue_vue_type_style_index_0_id_6231ede2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/Viewprediction.vue?vue&type=style&index=0&id=6231ede2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Viewprediction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Viewprediction_vue_vue_type_template_id_6231ede2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Viewprediction_vue_vue_type_template_id_6231ede2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6231ede2",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('6231ede2')) {
      api.createRecord('6231ede2', component.options)
    } else {
      api.reload('6231ede2', component.options)
    }
    module.hot.accept("./components/Viewprediction.vue?vue&type=template&id=6231ede2&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Viewprediction_vue_vue_type_template_id_6231ede2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Viewprediction.vue?vue&type=template&id=6231ede2&scoped=true&");
(function () {
      api.rerender('6231ede2', {
        render: _Viewprediction_vue_vue_type_template_id_6231ede2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Viewprediction_vue_vue_type_template_id_6231ede2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/Viewprediction.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/Viewprediction.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Viewprediction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Viewprediction.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Viewprediction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/Viewprediction.vue?vue&type=style&index=0&id=6231ede2&lang=scss&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Viewprediction_vue_vue_type_style_index_0_id_6231ede2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/vue-loader/lib/index.js?!./components/Viewprediction.vue?vue&type=style&index=0&id=6231ede2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Viewprediction_vue_vue_type_style_index_0_id_6231ede2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Viewprediction_vue_vue_type_style_index_0_id_6231ede2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Viewprediction_vue_vue_type_style_index_0_id_6231ede2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Viewprediction_vue_vue_type_style_index_0_id_6231ede2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_2_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Viewprediction_vue_vue_type_style_index_0_id_6231ede2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/Viewprediction.vue?vue&type=template&id=6231ede2&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Viewprediction_vue_vue_type_template_id_6231ede2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Viewprediction.vue?vue&type=template&id=6231ede2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Viewprediction_vue_vue_type_template_id_6231ede2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Viewprediction_vue_vue_type_template_id_6231ede2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./css/animate.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n\n/*!\n * animate.css -http://daneden.me/animate\n * Version - 3.7.0\n * Licensed under the MIT license - http://opensource.org/licenses/MIT\n *\n * Copyright (c) 2018 Daniel Eden\n */\n\n@-webkit-keyframes bounce {\n  from,\n  20%,\n  53%,\n  80%,\n  to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  40%,\n  43% {\n    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n    -webkit-transform: translate3d(0, -30px, 0);\n    transform: translate3d(0, -30px, 0);\n  }\n\n  70% {\n    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n    -webkit-transform: translate3d(0, -15px, 0);\n    transform: translate3d(0, -15px, 0);\n  }\n\n  90% {\n    -webkit-transform: translate3d(0, -4px, 0);\n    transform: translate3d(0, -4px, 0);\n  }\n}\n\n@keyframes bounce {\n  from,\n  20%,\n  53%,\n  80%,\n  to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  40%,\n  43% {\n    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n    -webkit-transform: translate3d(0, -30px, 0);\n    transform: translate3d(0, -30px, 0);\n  }\n\n  70% {\n    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n    -webkit-transform: translate3d(0, -15px, 0);\n    transform: translate3d(0, -15px, 0);\n  }\n\n  90% {\n    -webkit-transform: translate3d(0, -4px, 0);\n    transform: translate3d(0, -4px, 0);\n  }\n}\n\n.bounce {\n  -webkit-animation-name: bounce;\n  animation-name: bounce;\n  -webkit-transform-origin: center bottom;\n  transform-origin: center bottom;\n}\n\n@-webkit-keyframes flash {\n  from,\n  50%,\n  to {\n    opacity: 1;\n  }\n\n  25%,\n  75% {\n    opacity: 0;\n  }\n}\n\n@keyframes flash {\n  from,\n  50%,\n  to {\n    opacity: 1;\n  }\n\n  25%,\n  75% {\n    opacity: 0;\n  }\n}\n\n.flash {\n  -webkit-animation-name: flash;\n  animation-name: flash;\n}\n\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n\n@-webkit-keyframes pulse {\n  from {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n\n  50% {\n    -webkit-transform: scale3d(1.05, 1.05, 1.05);\n    transform: scale3d(1.05, 1.05, 1.05);\n  }\n\n  to {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n@keyframes pulse {\n  from {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n\n  50% {\n    -webkit-transform: scale3d(1.05, 1.05, 1.05);\n    transform: scale3d(1.05, 1.05, 1.05);\n  }\n\n  to {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n.pulse {\n  -webkit-animation-name: pulse;\n  animation-name: pulse;\n}\n\n@-webkit-keyframes rubberBand {\n  from {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n\n  30% {\n    -webkit-transform: scale3d(1.25, 0.75, 1);\n    transform: scale3d(1.25, 0.75, 1);\n  }\n\n  40% {\n    -webkit-transform: scale3d(0.75, 1.25, 1);\n    transform: scale3d(0.75, 1.25, 1);\n  }\n\n  50% {\n    -webkit-transform: scale3d(1.15, 0.85, 1);\n    transform: scale3d(1.15, 0.85, 1);\n  }\n\n  65% {\n    -webkit-transform: scale3d(0.95, 1.05, 1);\n    transform: scale3d(0.95, 1.05, 1);\n  }\n\n  75% {\n    -webkit-transform: scale3d(1.05, 0.95, 1);\n    transform: scale3d(1.05, 0.95, 1);\n  }\n\n  to {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n@keyframes rubberBand {\n  from {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n\n  30% {\n    -webkit-transform: scale3d(1.25, 0.75, 1);\n    transform: scale3d(1.25, 0.75, 1);\n  }\n\n  40% {\n    -webkit-transform: scale3d(0.75, 1.25, 1);\n    transform: scale3d(0.75, 1.25, 1);\n  }\n\n  50% {\n    -webkit-transform: scale3d(1.15, 0.85, 1);\n    transform: scale3d(1.15, 0.85, 1);\n  }\n\n  65% {\n    -webkit-transform: scale3d(0.95, 1.05, 1);\n    transform: scale3d(0.95, 1.05, 1);\n  }\n\n  75% {\n    -webkit-transform: scale3d(1.05, 0.95, 1);\n    transform: scale3d(1.05, 0.95, 1);\n  }\n\n  to {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n.rubberBand {\n  -webkit-animation-name: rubberBand;\n  animation-name: rubberBand;\n}\n\n@-webkit-keyframes shake {\n  from,\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    -webkit-transform: translate3d(-10px, 0, 0);\n    transform: translate3d(-10px, 0, 0);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    -webkit-transform: translate3d(10px, 0, 0);\n    transform: translate3d(10px, 0, 0);\n  }\n}\n\n@keyframes shake {\n  from,\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    -webkit-transform: translate3d(-10px, 0, 0);\n    transform: translate3d(-10px, 0, 0);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    -webkit-transform: translate3d(10px, 0, 0);\n    transform: translate3d(10px, 0, 0);\n  }\n}\n\n.shake {\n  -webkit-animation-name: shake;\n  animation-name: shake;\n}\n\n@-webkit-keyframes headShake {\n  0% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n\n  6.5% {\n    -webkit-transform: translateX(-6px) rotateY(-9deg);\n    transform: translateX(-6px) rotateY(-9deg);\n  }\n\n  18.5% {\n    -webkit-transform: translateX(5px) rotateY(7deg);\n    transform: translateX(5px) rotateY(7deg);\n  }\n\n  31.5% {\n    -webkit-transform: translateX(-3px) rotateY(-5deg);\n    transform: translateX(-3px) rotateY(-5deg);\n  }\n\n  43.5% {\n    -webkit-transform: translateX(2px) rotateY(3deg);\n    transform: translateX(2px) rotateY(3deg);\n  }\n\n  50% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n\n@keyframes headShake {\n  0% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n\n  6.5% {\n    -webkit-transform: translateX(-6px) rotateY(-9deg);\n    transform: translateX(-6px) rotateY(-9deg);\n  }\n\n  18.5% {\n    -webkit-transform: translateX(5px) rotateY(7deg);\n    transform: translateX(5px) rotateY(7deg);\n  }\n\n  31.5% {\n    -webkit-transform: translateX(-3px) rotateY(-5deg);\n    transform: translateX(-3px) rotateY(-5deg);\n  }\n\n  43.5% {\n    -webkit-transform: translateX(2px) rotateY(3deg);\n    transform: translateX(2px) rotateY(3deg);\n  }\n\n  50% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n\n.headShake {\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out;\n  -webkit-animation-name: headShake;\n  animation-name: headShake;\n}\n\n@-webkit-keyframes swing {\n  20% {\n    -webkit-transform: rotate3d(0, 0, 1, 15deg);\n    transform: rotate3d(0, 0, 1, 15deg);\n  }\n\n  40% {\n    -webkit-transform: rotate3d(0, 0, 1, -10deg);\n    transform: rotate3d(0, 0, 1, -10deg);\n  }\n\n  60% {\n    -webkit-transform: rotate3d(0, 0, 1, 5deg);\n    transform: rotate3d(0, 0, 1, 5deg);\n  }\n\n  80% {\n    -webkit-transform: rotate3d(0, 0, 1, -5deg);\n    transform: rotate3d(0, 0, 1, -5deg);\n  }\n\n  to {\n    -webkit-transform: rotate3d(0, 0, 1, 0deg);\n    transform: rotate3d(0, 0, 1, 0deg);\n  }\n}\n\n@keyframes swing {\n  20% {\n    -webkit-transform: rotate3d(0, 0, 1, 15deg);\n    transform: rotate3d(0, 0, 1, 15deg);\n  }\n\n  40% {\n    -webkit-transform: rotate3d(0, 0, 1, -10deg);\n    transform: rotate3d(0, 0, 1, -10deg);\n  }\n\n  60% {\n    -webkit-transform: rotate3d(0, 0, 1, 5deg);\n    transform: rotate3d(0, 0, 1, 5deg);\n  }\n\n  80% {\n    -webkit-transform: rotate3d(0, 0, 1, -5deg);\n    transform: rotate3d(0, 0, 1, -5deg);\n  }\n\n  to {\n    -webkit-transform: rotate3d(0, 0, 1, 0deg);\n    transform: rotate3d(0, 0, 1, 0deg);\n  }\n}\n\n.swing {\n  -webkit-transform-origin: top center;\n  transform-origin: top center;\n  -webkit-animation-name: swing;\n  animation-name: swing;\n}\n\n@-webkit-keyframes tada {\n  from {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n\n  10%,\n  20% {\n    -webkit-transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);\n    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);\n  }\n\n  30%,\n  50%,\n  70%,\n  90% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\n  }\n\n  40%,\n  60%,\n  80% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\n  }\n\n  to {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n@keyframes tada {\n  from {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n\n  10%,\n  20% {\n    -webkit-transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);\n    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);\n  }\n\n  30%,\n  50%,\n  70%,\n  90% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\n  }\n\n  40%,\n  60%,\n  80% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\n  }\n\n  to {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n.tada {\n  -webkit-animation-name: tada;\n  animation-name: tada;\n}\n\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n\n@-webkit-keyframes wobble {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  15% {\n    -webkit-transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);\n    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);\n  }\n\n  30% {\n    -webkit-transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);\n    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);\n  }\n\n  45% {\n    -webkit-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);\n    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);\n  }\n\n  60% {\n    -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);\n    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);\n  }\n\n  75% {\n    -webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);\n    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n@keyframes wobble {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  15% {\n    -webkit-transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);\n    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);\n  }\n\n  30% {\n    -webkit-transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);\n    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);\n  }\n\n  45% {\n    -webkit-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);\n    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);\n  }\n\n  60% {\n    -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);\n    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);\n  }\n\n  75% {\n    -webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);\n    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n.wobble {\n  -webkit-animation-name: wobble;\n  animation-name: wobble;\n}\n\n@-webkit-keyframes jello {\n  from,\n  11.1%,\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  22.2% {\n    -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);\n    transform: skewX(-12.5deg) skewY(-12.5deg);\n  }\n\n  33.3% {\n    -webkit-transform: skewX(6.25deg) skewY(6.25deg);\n    transform: skewX(6.25deg) skewY(6.25deg);\n  }\n\n  44.4% {\n    -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);\n    transform: skewX(-3.125deg) skewY(-3.125deg);\n  }\n\n  55.5% {\n    -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);\n    transform: skewX(1.5625deg) skewY(1.5625deg);\n  }\n\n  66.6% {\n    -webkit-transform: skewX(-0.78125deg) skewY(-0.78125deg);\n    transform: skewX(-0.78125deg) skewY(-0.78125deg);\n  }\n\n  77.7% {\n    -webkit-transform: skewX(0.390625deg) skewY(0.390625deg);\n    transform: skewX(0.390625deg) skewY(0.390625deg);\n  }\n\n  88.8% {\n    -webkit-transform: skewX(-0.1953125deg) skewY(-0.1953125deg);\n    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);\n  }\n}\n\n@keyframes jello {\n  from,\n  11.1%,\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  22.2% {\n    -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);\n    transform: skewX(-12.5deg) skewY(-12.5deg);\n  }\n\n  33.3% {\n    -webkit-transform: skewX(6.25deg) skewY(6.25deg);\n    transform: skewX(6.25deg) skewY(6.25deg);\n  }\n\n  44.4% {\n    -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);\n    transform: skewX(-3.125deg) skewY(-3.125deg);\n  }\n\n  55.5% {\n    -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);\n    transform: skewX(1.5625deg) skewY(1.5625deg);\n  }\n\n  66.6% {\n    -webkit-transform: skewX(-0.78125deg) skewY(-0.78125deg);\n    transform: skewX(-0.78125deg) skewY(-0.78125deg);\n  }\n\n  77.7% {\n    -webkit-transform: skewX(0.390625deg) skewY(0.390625deg);\n    transform: skewX(0.390625deg) skewY(0.390625deg);\n  }\n\n  88.8% {\n    -webkit-transform: skewX(-0.1953125deg) skewY(-0.1953125deg);\n    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);\n  }\n}\n\n.jello {\n  -webkit-animation-name: jello;\n  animation-name: jello;\n  -webkit-transform-origin: center;\n  transform-origin: center;\n}\n\n@-webkit-keyframes heartBeat {\n  0% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n\n  14% {\n    -webkit-transform: scale(1.3);\n    transform: scale(1.3);\n  }\n\n  28% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n\n  42% {\n    -webkit-transform: scale(1.3);\n    transform: scale(1.3);\n  }\n\n  70% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n\n@keyframes heartBeat {\n  0% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n\n  14% {\n    -webkit-transform: scale(1.3);\n    transform: scale(1.3);\n  }\n\n  28% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n\n  42% {\n    -webkit-transform: scale(1.3);\n    transform: scale(1.3);\n  }\n\n  70% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n\n.heartBeat {\n  -webkit-animation-name: heartBeat;\n  animation-name: heartBeat;\n  -webkit-animation-duration: 1.3s;\n  animation-duration: 1.3s;\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out;\n}\n\n@-webkit-keyframes bounceIn {\n  from,\n  20%,\n  40%,\n  60%,\n  80%,\n  to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n    transform: scale3d(0.3, 0.3, 0.3);\n  }\n\n  20% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\n    transform: scale3d(1.1, 1.1, 1.1);\n  }\n\n  40% {\n    -webkit-transform: scale3d(0.9, 0.9, 0.9);\n    transform: scale3d(0.9, 0.9, 0.9);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(1.03, 1.03, 1.03);\n    transform: scale3d(1.03, 1.03, 1.03);\n  }\n\n  80% {\n    -webkit-transform: scale3d(0.97, 0.97, 0.97);\n    transform: scale3d(0.97, 0.97, 0.97);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n@keyframes bounceIn {\n  from,\n  20%,\n  40%,\n  60%,\n  80%,\n  to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n    transform: scale3d(0.3, 0.3, 0.3);\n  }\n\n  20% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\n    transform: scale3d(1.1, 1.1, 1.1);\n  }\n\n  40% {\n    -webkit-transform: scale3d(0.9, 0.9, 0.9);\n    transform: scale3d(0.9, 0.9, 0.9);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(1.03, 1.03, 1.03);\n    transform: scale3d(1.03, 1.03, 1.03);\n  }\n\n  80% {\n    -webkit-transform: scale3d(0.97, 0.97, 0.97);\n    transform: scale3d(0.97, 0.97, 0.97);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n.bounceIn {\n  -webkit-animation-duration: 0.75s;\n  animation-duration: 0.75s;\n  -webkit-animation-name: bounceIn;\n  animation-name: bounceIn;\n}\n\n@-webkit-keyframes bounceInDown {\n  from,\n  60%,\n  75%,\n  90%,\n  to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -3000px, 0);\n    transform: translate3d(0, -3000px, 0);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 25px, 0);\n    transform: translate3d(0, 25px, 0);\n  }\n\n  75% {\n    -webkit-transform: translate3d(0, -10px, 0);\n    transform: translate3d(0, -10px, 0);\n  }\n\n  90% {\n    -webkit-transform: translate3d(0, 5px, 0);\n    transform: translate3d(0, 5px, 0);\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n@keyframes bounceInDown {\n  from,\n  60%,\n  75%,\n  90%,\n  to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -3000px, 0);\n    transform: translate3d(0, -3000px, 0);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 25px, 0);\n    transform: translate3d(0, 25px, 0);\n  }\n\n  75% {\n    -webkit-transform: translate3d(0, -10px, 0);\n    transform: translate3d(0, -10px, 0);\n  }\n\n  90% {\n    -webkit-transform: translate3d(0, 5px, 0);\n    transform: translate3d(0, 5px, 0);\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n.bounceInDown {\n  -webkit-animation-name: bounceInDown;\n  animation-name: bounceInDown;\n}\n\n@-webkit-keyframes bounceInLeft {\n  from,\n  60%,\n  75%,\n  90%,\n  to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(-3000px, 0, 0);\n    transform: translate3d(-3000px, 0, 0);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(25px, 0, 0);\n    transform: translate3d(25px, 0, 0);\n  }\n\n  75% {\n    -webkit-transform: translate3d(-10px, 0, 0);\n    transform: translate3d(-10px, 0, 0);\n  }\n\n  90% {\n    -webkit-transform: translate3d(5px, 0, 0);\n    transform: translate3d(5px, 0, 0);\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n@keyframes bounceInLeft {\n  from,\n  60%,\n  75%,\n  90%,\n  to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(-3000px, 0, 0);\n    transform: translate3d(-3000px, 0, 0);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(25px, 0, 0);\n    transform: translate3d(25px, 0, 0);\n  }\n\n  75% {\n    -webkit-transform: translate3d(-10px, 0, 0);\n    transform: translate3d(-10px, 0, 0);\n  }\n\n  90% {\n    -webkit-transform: translate3d(5px, 0, 0);\n    transform: translate3d(5px, 0, 0);\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n.bounceInLeft {\n  -webkit-animation-name: bounceInLeft;\n  animation-name: bounceInLeft;\n}\n\n@-webkit-keyframes bounceInRight {\n  from,\n  60%,\n  75%,\n  90%,\n  to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(3000px, 0, 0);\n    transform: translate3d(3000px, 0, 0);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(-25px, 0, 0);\n    transform: translate3d(-25px, 0, 0);\n  }\n\n  75% {\n    -webkit-transform: translate3d(10px, 0, 0);\n    transform: translate3d(10px, 0, 0);\n  }\n\n  90% {\n    -webkit-transform: translate3d(-5px, 0, 0);\n    transform: translate3d(-5px, 0, 0);\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n@keyframes bounceInRight {\n  from,\n  60%,\n  75%,\n  90%,\n  to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(3000px, 0, 0);\n    transform: translate3d(3000px, 0, 0);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(-25px, 0, 0);\n    transform: translate3d(-25px, 0, 0);\n  }\n\n  75% {\n    -webkit-transform: translate3d(10px, 0, 0);\n    transform: translate3d(10px, 0, 0);\n  }\n\n  90% {\n    -webkit-transform: translate3d(-5px, 0, 0);\n    transform: translate3d(-5px, 0, 0);\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n.bounceInRight {\n  -webkit-animation-name: bounceInRight;\n  animation-name: bounceInRight;\n}\n\n@-webkit-keyframes bounceInUp {\n  from,\n  60%,\n  75%,\n  90%,\n  to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 3000px, 0);\n    transform: translate3d(0, 3000px, 0);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, -20px, 0);\n    transform: translate3d(0, -20px, 0);\n  }\n\n  75% {\n    -webkit-transform: translate3d(0, 10px, 0);\n    transform: translate3d(0, 10px, 0);\n  }\n\n  90% {\n    -webkit-transform: translate3d(0, -5px, 0);\n    transform: translate3d(0, -5px, 0);\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n@keyframes bounceInUp {\n  from,\n  60%,\n  75%,\n  90%,\n  to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 3000px, 0);\n    transform: translate3d(0, 3000px, 0);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, -20px, 0);\n    transform: translate3d(0, -20px, 0);\n  }\n\n  75% {\n    -webkit-transform: translate3d(0, 10px, 0);\n    transform: translate3d(0, 10px, 0);\n  }\n\n  90% {\n    -webkit-transform: translate3d(0, -5px, 0);\n    transform: translate3d(0, -5px, 0);\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n.bounceInUp {\n  -webkit-animation-name: bounceInUp;\n  animation-name: bounceInUp;\n}\n\n@-webkit-keyframes bounceOut {\n  20% {\n    -webkit-transform: scale3d(0.9, 0.9, 0.9);\n    transform: scale3d(0.9, 0.9, 0.9);\n  }\n\n  50%,\n  55% {\n    opacity: 1;\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\n    transform: scale3d(1.1, 1.1, 1.1);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n    transform: scale3d(0.3, 0.3, 0.3);\n  }\n}\n\n@keyframes bounceOut {\n  20% {\n    -webkit-transform: scale3d(0.9, 0.9, 0.9);\n    transform: scale3d(0.9, 0.9, 0.9);\n  }\n\n  50%,\n  55% {\n    opacity: 1;\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\n    transform: scale3d(1.1, 1.1, 1.1);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n    transform: scale3d(0.3, 0.3, 0.3);\n  }\n}\n\n.bounceOut {\n  -webkit-animation-duration: 0.75s;\n  animation-duration: 0.75s;\n  -webkit-animation-name: bounceOut;\n  animation-name: bounceOut;\n}\n\n@-webkit-keyframes bounceOutDown {\n  20% {\n    -webkit-transform: translate3d(0, 10px, 0);\n    transform: translate3d(0, 10px, 0);\n  }\n\n  40%,\n  45% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, -20px, 0);\n    transform: translate3d(0, -20px, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 2000px, 0);\n    transform: translate3d(0, 2000px, 0);\n  }\n}\n\n@keyframes bounceOutDown {\n  20% {\n    -webkit-transform: translate3d(0, 10px, 0);\n    transform: translate3d(0, 10px, 0);\n  }\n\n  40%,\n  45% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, -20px, 0);\n    transform: translate3d(0, -20px, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 2000px, 0);\n    transform: translate3d(0, 2000px, 0);\n  }\n}\n\n.bounceOutDown {\n  -webkit-animation-name: bounceOutDown;\n  animation-name: bounceOutDown;\n}\n\n@-webkit-keyframes bounceOutLeft {\n  20% {\n    opacity: 1;\n    -webkit-transform: translate3d(20px, 0, 0);\n    transform: translate3d(20px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-2000px, 0, 0);\n    transform: translate3d(-2000px, 0, 0);\n  }\n}\n\n@keyframes bounceOutLeft {\n  20% {\n    opacity: 1;\n    -webkit-transform: translate3d(20px, 0, 0);\n    transform: translate3d(20px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-2000px, 0, 0);\n    transform: translate3d(-2000px, 0, 0);\n  }\n}\n\n.bounceOutLeft {\n  -webkit-animation-name: bounceOutLeft;\n  animation-name: bounceOutLeft;\n}\n\n@-webkit-keyframes bounceOutRight {\n  20% {\n    opacity: 1;\n    -webkit-transform: translate3d(-20px, 0, 0);\n    transform: translate3d(-20px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(2000px, 0, 0);\n    transform: translate3d(2000px, 0, 0);\n  }\n}\n\n@keyframes bounceOutRight {\n  20% {\n    opacity: 1;\n    -webkit-transform: translate3d(-20px, 0, 0);\n    transform: translate3d(-20px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(2000px, 0, 0);\n    transform: translate3d(2000px, 0, 0);\n  }\n}\n\n.bounceOutRight {\n  -webkit-animation-name: bounceOutRight;\n  animation-name: bounceOutRight;\n}\n\n@-webkit-keyframes bounceOutUp {\n  20% {\n    -webkit-transform: translate3d(0, -10px, 0);\n    transform: translate3d(0, -10px, 0);\n  }\n\n  40%,\n  45% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 20px, 0);\n    transform: translate3d(0, 20px, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -2000px, 0);\n    transform: translate3d(0, -2000px, 0);\n  }\n}\n\n@keyframes bounceOutUp {\n  20% {\n    -webkit-transform: translate3d(0, -10px, 0);\n    transform: translate3d(0, -10px, 0);\n  }\n\n  40%,\n  45% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 20px, 0);\n    transform: translate3d(0, 20px, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -2000px, 0);\n    transform: translate3d(0, -2000px, 0);\n  }\n}\n\n.bounceOutUp {\n  -webkit-animation-name: bounceOutUp;\n  animation-name: bounceOutUp;\n}\n\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n}\n\n.fadeIn {\n  -webkit-animation-name: fadeIn;\n  animation-name: fadeIn;\n}\n\n@keyframes fadeInDown {\n  from {\n    opacity: 0;\n    transform: translate3d(0, -100%, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n.fadeInDown {\n  animation-name: fadeInDown;\n}\n\n@-webkit-keyframes fadeInDownBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -2000px, 0);\n    transform: translate3d(0, -2000px, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n@keyframes fadeInDownBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -2000px, 0);\n    transform: translate3d(0, -2000px, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n.fadeInDownBig {\n  -webkit-animation-name: fadeInDownBig;\n  animation-name: fadeInDownBig;\n}\n\n@-webkit-keyframes fadeInLeft {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n@keyframes fadeInLeft {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n.fadeInLeft {\n  -webkit-animation-name: fadeInLeft;\n  animation-name: fadeInLeft;\n}\n\n@-webkit-keyframes fadeInLeftBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-2000px, 0, 0);\n    transform: translate3d(-2000px, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n@keyframes fadeInLeftBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-2000px, 0, 0);\n    transform: translate3d(-2000px, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n.fadeInLeftBig {\n  -webkit-animation-name: fadeInLeftBig;\n  animation-name: fadeInLeftBig;\n}\n\n@-webkit-keyframes fadeInRight {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n@keyframes fadeInRight {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n.fadeInRight {\n  -webkit-animation-name: fadeInRight;\n  animation-name: fadeInRight;\n}\n\n@-webkit-keyframes fadeInRightBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(2000px, 0, 0);\n    transform: translate3d(2000px, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n@keyframes fadeInRightBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(2000px, 0, 0);\n    transform: translate3d(2000px, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n.fadeInRightBig {\n  -webkit-animation-name: fadeInRightBig;\n  animation-name: fadeInRightBig;\n}\n\n@-webkit-keyframes fadeInUp {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n.fadeInUp {\n  -webkit-animation-name: fadeInUp;\n  animation-name: fadeInUp;\n}\n\n@-webkit-keyframes fadeInUpBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 2000px, 0);\n    transform: translate3d(0, 2000px, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n@keyframes fadeInUpBig {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 2000px, 0);\n    transform: translate3d(0, 2000px, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n.fadeInUpBig {\n  -webkit-animation-name: fadeInUpBig;\n  animation-name: fadeInUpBig;\n}\n\n@-webkit-keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n  }\n}\n\n@keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n  }\n}\n\n.fadeOut {\n  -webkit-animation-name: fadeOut;\n  animation-name: fadeOut;\n}\n\n@-webkit-keyframes fadeOutDown {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n  }\n}\n\n@keyframes fadeOutDown {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n  }\n}\n\n.fadeOutDown {\n  -webkit-animation-name: fadeOutDown;\n  animation-name: fadeOutDown;\n}\n\n@-webkit-keyframes fadeOutDownBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 2000px, 0);\n    transform: translate3d(0, 2000px, 0);\n  }\n}\n\n@keyframes fadeOutDownBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 2000px, 0);\n    transform: translate3d(0, 2000px, 0);\n  }\n}\n\n.fadeOutDownBig {\n  -webkit-animation-name: fadeOutDownBig;\n  animation-name: fadeOutDownBig;\n}\n\n@-webkit-keyframes fadeOutLeft {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n}\n\n@keyframes fadeOutLeft {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n}\n\n.fadeOutLeft {\n  -webkit-animation-name: fadeOutLeft;\n  animation-name: fadeOutLeft;\n}\n\n@-webkit-keyframes fadeOutLeftBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-2000px, 0, 0);\n    transform: translate3d(-2000px, 0, 0);\n  }\n}\n\n@keyframes fadeOutLeftBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-2000px, 0, 0);\n    transform: translate3d(-2000px, 0, 0);\n  }\n}\n\n.fadeOutLeftBig {\n  -webkit-animation-name: fadeOutLeftBig;\n  animation-name: fadeOutLeftBig;\n}\n\n@-webkit-keyframes fadeOutRight {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n  }\n}\n\n@keyframes fadeOutRight {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n  }\n}\n\n.fadeOutRight {\n  -webkit-animation-name: fadeOutRight;\n  animation-name: fadeOutRight;\n}\n\n@-webkit-keyframes fadeOutRightBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(2000px, 0, 0);\n    transform: translate3d(2000px, 0, 0);\n  }\n}\n\n@keyframes fadeOutRightBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(2000px, 0, 0);\n    transform: translate3d(2000px, 0, 0);\n  }\n}\n\n.fadeOutRightBig {\n  -webkit-animation-name: fadeOutRightBig;\n  animation-name: fadeOutRightBig;\n}\n\n@-webkit-keyframes fadeOutUp {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n}\n\n@keyframes fadeOutUp {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n}\n\n.fadeOutUp {\n  -webkit-animation-name: fadeOutUp;\n  animation-name: fadeOutUp;\n}\n\n@-webkit-keyframes fadeOutUpBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -2000px, 0);\n    transform: translate3d(0, -2000px, 0);\n  }\n}\n\n@keyframes fadeOutUpBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -2000px, 0);\n    transform: translate3d(0, -2000px, 0);\n  }\n}\n\n.fadeOutUpBig {\n  -webkit-animation-name: fadeOutUpBig;\n  animation-name: fadeOutUpBig;\n}\n\n@-webkit-keyframes flip {\n  from {\n    -webkit-transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0)\n      rotate3d(0, 1, 0, -360deg);\n    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out;\n  }\n\n  40% {\n    -webkit-transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)\n      rotate3d(0, 1, 0, -190deg);\n    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)\n      rotate3d(0, 1, 0, -190deg);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out;\n  }\n\n  50% {\n    -webkit-transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)\n      rotate3d(0, 1, 0, -170deg);\n    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)\n      rotate3d(0, 1, 0, -170deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n\n  80% {\n    -webkit-transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)\n      rotate3d(0, 1, 0, 0deg);\n    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)\n      rotate3d(0, 1, 0, 0deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n\n  to {\n    -webkit-transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0)\n      rotate3d(0, 1, 0, 0deg);\n    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n}\n\n@keyframes flip {\n  from {\n    -webkit-transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0)\n      rotate3d(0, 1, 0, -360deg);\n    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out;\n  }\n\n  40% {\n    -webkit-transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)\n      rotate3d(0, 1, 0, -190deg);\n    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)\n      rotate3d(0, 1, 0, -190deg);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out;\n  }\n\n  50% {\n    -webkit-transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)\n      rotate3d(0, 1, 0, -170deg);\n    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)\n      rotate3d(0, 1, 0, -170deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n\n  80% {\n    -webkit-transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)\n      rotate3d(0, 1, 0, 0deg);\n    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)\n      rotate3d(0, 1, 0, 0deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n\n  to {\n    -webkit-transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0)\n      rotate3d(0, 1, 0, 0deg);\n    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n}\n\n.animated.flip {\n  -webkit-backface-visibility: visible;\n  backface-visibility: visible;\n  -webkit-animation-name: flip;\n  animation-name: flip;\n}\n\n@-webkit-keyframes flipInX {\n  from {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n    opacity: 0;\n  }\n\n  40% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n\n  60% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n    opacity: 1;\n  }\n\n  80% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);\n  }\n\n  to {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n  }\n}\n\n@keyframes flipInX {\n  from {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n    opacity: 0;\n  }\n\n  40% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n\n  60% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n    opacity: 1;\n  }\n\n  80% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);\n  }\n\n  to {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n  }\n}\n\n.flipInX {\n  -webkit-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n  -webkit-animation-name: flipInX;\n  animation-name: flipInX;\n}\n\n@-webkit-keyframes flipInY {\n  from {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n    opacity: 0;\n  }\n\n  40% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n\n  60% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\n    opacity: 1;\n  }\n\n  80% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -5deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);\n  }\n\n  to {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n  }\n}\n\n@keyframes flipInY {\n  from {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n    opacity: 0;\n  }\n\n  40% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n\n  60% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\n    opacity: 1;\n  }\n\n  80% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -5deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);\n  }\n\n  to {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n  }\n}\n\n.flipInY {\n  -webkit-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n  -webkit-animation-name: flipInY;\n  animation-name: flipInY;\n}\n\n@-webkit-keyframes flipOutX {\n  from {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n  }\n\n  30% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    opacity: 0;\n  }\n}\n\n@keyframes flipOutX {\n  from {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n  }\n\n  30% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    opacity: 0;\n  }\n}\n\n.flipOutX {\n  -webkit-animation-duration: 0.75s;\n  animation-duration: 0.75s;\n  -webkit-animation-name: flipOutX;\n  animation-name: flipOutX;\n  -webkit-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n}\n\n@-webkit-keyframes flipOutY {\n  from {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n  }\n\n  30% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -15deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    opacity: 0;\n  }\n}\n\n@keyframes flipOutY {\n  from {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n  }\n\n  30% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -15deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    opacity: 0;\n  }\n}\n\n.flipOutY {\n  -webkit-animation-duration: 0.75s;\n  animation-duration: 0.75s;\n  -webkit-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n  -webkit-animation-name: flipOutY;\n  animation-name: flipOutY;\n}\n\n@-webkit-keyframes lightSpeedIn {\n  from {\n    -webkit-transform: translate3d(100%, 0, 0) skewX(-30deg);\n    transform: translate3d(100%, 0, 0) skewX(-30deg);\n    opacity: 0;\n  }\n\n  60% {\n    -webkit-transform: skewX(20deg);\n    transform: skewX(20deg);\n    opacity: 1;\n  }\n\n  80% {\n    -webkit-transform: skewX(-5deg);\n    transform: skewX(-5deg);\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n@keyframes lightSpeedIn {\n  from {\n    -webkit-transform: translate3d(100%, 0, 0) skewX(-30deg);\n    transform: translate3d(100%, 0, 0) skewX(-30deg);\n    opacity: 0;\n  }\n\n  60% {\n    -webkit-transform: skewX(20deg);\n    transform: skewX(20deg);\n    opacity: 1;\n  }\n\n  80% {\n    -webkit-transform: skewX(-5deg);\n    transform: skewX(-5deg);\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n.lightSpeedIn {\n  -webkit-animation-name: lightSpeedIn;\n  animation-name: lightSpeedIn;\n  -webkit-animation-timing-function: ease-out;\n  animation-timing-function: ease-out;\n}\n\n@-webkit-keyframes lightSpeedOut {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: translate3d(100%, 0, 0) skewX(30deg);\n    transform: translate3d(100%, 0, 0) skewX(30deg);\n    opacity: 0;\n  }\n}\n\n@keyframes lightSpeedOut {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: translate3d(100%, 0, 0) skewX(30deg);\n    transform: translate3d(100%, 0, 0) skewX(30deg);\n    opacity: 0;\n  }\n}\n\n.lightSpeedOut {\n  -webkit-animation-name: lightSpeedOut;\n  animation-name: lightSpeedOut;\n  -webkit-animation-timing-function: ease-in;\n  animation-timing-function: ease-in;\n}\n\n@-webkit-keyframes rotateIn {\n  from {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    -webkit-transform: rotate3d(0, 0, 1, -200deg);\n    transform: rotate3d(0, 0, 1, -200deg);\n    opacity: 0;\n  }\n\n  to {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n    opacity: 1;\n  }\n}\n\n@keyframes rotateIn {\n  from {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    -webkit-transform: rotate3d(0, 0, 1, -200deg);\n    transform: rotate3d(0, 0, 1, -200deg);\n    opacity: 0;\n  }\n\n  to {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n    opacity: 1;\n  }\n}\n\n.rotateIn {\n  -webkit-animation-name: rotateIn;\n  animation-name: rotateIn;\n}\n\n@-webkit-keyframes rotateInDownLeft {\n  from {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n\n  to {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n    opacity: 1;\n  }\n}\n\n@keyframes rotateInDownLeft {\n  from {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n\n  to {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n    opacity: 1;\n  }\n}\n\n.rotateInDownLeft {\n  -webkit-animation-name: rotateInDownLeft;\n  animation-name: rotateInDownLeft;\n}\n\n@-webkit-keyframes rotateInDownRight {\n  from {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n\n  to {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n    opacity: 1;\n  }\n}\n\n@keyframes rotateInDownRight {\n  from {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n\n  to {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n    opacity: 1;\n  }\n}\n\n.rotateInDownRight {\n  -webkit-animation-name: rotateInDownRight;\n  animation-name: rotateInDownRight;\n}\n\n@-webkit-keyframes rotateInUpLeft {\n  from {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n\n  to {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n    opacity: 1;\n  }\n}\n\n@keyframes rotateInUpLeft {\n  from {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n\n  to {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n    opacity: 1;\n  }\n}\n\n.rotateInUpLeft {\n  -webkit-animation-name: rotateInUpLeft;\n  animation-name: rotateInUpLeft;\n}\n\n@-webkit-keyframes rotateInUpRight {\n  from {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -90deg);\n    transform: rotate3d(0, 0, 1, -90deg);\n    opacity: 0;\n  }\n\n  to {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n    opacity: 1;\n  }\n}\n\n@keyframes rotateInUpRight {\n  from {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -90deg);\n    transform: rotate3d(0, 0, 1, -90deg);\n    opacity: 0;\n  }\n\n  to {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n    opacity: 1;\n  }\n}\n\n.rotateInUpRight {\n  -webkit-animation-name: rotateInUpRight;\n  animation-name: rotateInUpRight;\n}\n\n@-webkit-keyframes rotateOut {\n  from {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    -webkit-transform: rotate3d(0, 0, 1, 200deg);\n    transform: rotate3d(0, 0, 1, 200deg);\n    opacity: 0;\n  }\n}\n\n@keyframes rotateOut {\n  from {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    -webkit-transform: rotate3d(0, 0, 1, 200deg);\n    transform: rotate3d(0, 0, 1, 200deg);\n    opacity: 0;\n  }\n}\n\n.rotateOut {\n  -webkit-animation-name: rotateOut;\n  animation-name: rotateOut;\n}\n\n@-webkit-keyframes rotateOutDownLeft {\n  from {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n}\n\n@keyframes rotateOutDownLeft {\n  from {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n}\n\n.rotateOutDownLeft {\n  -webkit-animation-name: rotateOutDownLeft;\n  animation-name: rotateOutDownLeft;\n}\n\n@-webkit-keyframes rotateOutDownRight {\n  from {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n}\n\n@keyframes rotateOutDownRight {\n  from {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n}\n\n.rotateOutDownRight {\n  -webkit-animation-name: rotateOutDownRight;\n  animation-name: rotateOutDownRight;\n}\n\n@-webkit-keyframes rotateOutUpLeft {\n  from {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n}\n\n@keyframes rotateOutUpLeft {\n  from {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n}\n\n.rotateOutUpLeft {\n  -webkit-animation-name: rotateOutUpLeft;\n  animation-name: rotateOutUpLeft;\n}\n\n@-webkit-keyframes rotateOutUpRight {\n  from {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 90deg);\n    transform: rotate3d(0, 0, 1, 90deg);\n    opacity: 0;\n  }\n}\n\n@keyframes rotateOutUpRight {\n  from {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 90deg);\n    transform: rotate3d(0, 0, 1, 90deg);\n    opacity: 0;\n  }\n}\n\n.rotateOutUpRight {\n  -webkit-animation-name: rotateOutUpRight;\n  animation-name: rotateOutUpRight;\n}\n\n@-webkit-keyframes hinge {\n  0% {\n    -webkit-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n  }\n\n  20%,\n  60% {\n    -webkit-transform: rotate3d(0, 0, 1, 80deg);\n    transform: rotate3d(0, 0, 1, 80deg);\n    -webkit-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n  }\n\n  40%,\n  80% {\n    -webkit-transform: rotate3d(0, 0, 1, 60deg);\n    transform: rotate3d(0, 0, 1, 60deg);\n    -webkit-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 700px, 0);\n    transform: translate3d(0, 700px, 0);\n    opacity: 0;\n  }\n}\n\n@keyframes hinge {\n  0% {\n    -webkit-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n  }\n\n  20%,\n  60% {\n    -webkit-transform: rotate3d(0, 0, 1, 80deg);\n    transform: rotate3d(0, 0, 1, 80deg);\n    -webkit-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n  }\n\n  40%,\n  80% {\n    -webkit-transform: rotate3d(0, 0, 1, 60deg);\n    transform: rotate3d(0, 0, 1, 60deg);\n    -webkit-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n    opacity: 1;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 700px, 0);\n    transform: translate3d(0, 700px, 0);\n    opacity: 0;\n  }\n}\n\n.hinge {\n  -webkit-animation-duration: 2s;\n  animation-duration: 2s;\n  -webkit-animation-name: hinge;\n  animation-name: hinge;\n}\n\n@-webkit-keyframes jackInTheBox {\n  from {\n    opacity: 0;\n    -webkit-transform: scale(0.1) rotate(30deg);\n    transform: scale(0.1) rotate(30deg);\n    -webkit-transform-origin: center bottom;\n    transform-origin: center bottom;\n  }\n\n  50% {\n    -webkit-transform: rotate(-10deg);\n    transform: rotate(-10deg);\n  }\n\n  70% {\n    -webkit-transform: rotate(3deg);\n    transform: rotate(3deg);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n\n@keyframes jackInTheBox {\n  from {\n    opacity: 0;\n    -webkit-transform: scale(0.1) rotate(30deg);\n    transform: scale(0.1) rotate(30deg);\n    -webkit-transform-origin: center bottom;\n    transform-origin: center bottom;\n  }\n\n  50% {\n    -webkit-transform: rotate(-10deg);\n    transform: rotate(-10deg);\n  }\n\n  70% {\n    -webkit-transform: rotate(3deg);\n    transform: rotate(3deg);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n\n.jackInTheBox {\n  -webkit-animation-name: jackInTheBox;\n  animation-name: jackInTheBox;\n}\n\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n\n@-webkit-keyframes rollIn {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);\n    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n@keyframes rollIn {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);\n    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n.rollIn {\n  -webkit-animation-name: rollIn;\n  animation-name: rollIn;\n}\n\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n\n@-webkit-keyframes rollOut {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);\n    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);\n  }\n}\n\n@keyframes rollOut {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);\n    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);\n  }\n}\n\n.rollOut {\n  -webkit-animation-name: rollOut;\n  animation-name: rollOut;\n}\n\n@-webkit-keyframes zoomIn {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n    transform: scale3d(0.3, 0.3, 0.3);\n  }\n\n  50% {\n    opacity: 1;\n  }\n}\n\n@keyframes zoomIn {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n    transform: scale3d(0.3, 0.3, 0.3);\n  }\n\n  50% {\n    opacity: 1;\n  }\n}\n\n.zoomIn {\n  -webkit-animation-name: zoomIn;\n  animation-name: zoomIn;\n}\n\n@-webkit-keyframes zoomInDown {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n  }\n}\n\n@keyframes zoomInDown {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n  }\n}\n\n.zoomInDown {\n  -webkit-animation-name: zoomInDown;\n  animation-name: zoomInDown;\n}\n\n@-webkit-keyframes zoomInLeft {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n  }\n}\n\n@keyframes zoomInLeft {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n  }\n}\n\n.zoomInLeft {\n  -webkit-animation-name: zoomInLeft;\n  animation-name: zoomInLeft;\n}\n\n@-webkit-keyframes zoomInRight {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n  }\n}\n\n@keyframes zoomInRight {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n  }\n}\n\n.zoomInRight {\n  -webkit-animation-name: zoomInRight;\n  animation-name: zoomInRight;\n}\n\n@-webkit-keyframes zoomInUp {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n  }\n}\n\n@keyframes zoomInUp {\n  from {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n  }\n}\n\n.zoomInUp {\n  -webkit-animation-name: zoomInUp;\n  animation-name: zoomInUp;\n}\n\n@-webkit-keyframes zoomOut {\n  from {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n    transform: scale3d(0.3, 0.3, 0.3);\n  }\n\n  to {\n    opacity: 0;\n  }\n}\n\n@keyframes zoomOut {\n  from {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n    transform: scale3d(0.3, 0.3, 0.3);\n  }\n\n  to {\n    opacity: 0;\n  }\n}\n\n.zoomOut {\n  -webkit-animation-name: zoomOut;\n  animation-name: zoomOut;\n}\n\n@-webkit-keyframes zoomOutDown {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);\n    -webkit-transform-origin: center bottom;\n    transform-origin: center bottom;\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n  }\n}\n\n@keyframes zoomOutDown {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);\n    -webkit-transform-origin: center bottom;\n    transform-origin: center bottom;\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n  }\n}\n\n.zoomOutDown {\n  -webkit-animation-name: zoomOutDown;\n  animation-name: zoomOutDown;\n}\n\n@-webkit-keyframes zoomOutLeft {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: scale(0.1) translate3d(-2000px, 0, 0);\n    transform: scale(0.1) translate3d(-2000px, 0, 0);\n    -webkit-transform-origin: left center;\n    transform-origin: left center;\n  }\n}\n\n@keyframes zoomOutLeft {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: scale(0.1) translate3d(-2000px, 0, 0);\n    transform: scale(0.1) translate3d(-2000px, 0, 0);\n    -webkit-transform-origin: left center;\n    transform-origin: left center;\n  }\n}\n\n.zoomOutLeft {\n  -webkit-animation-name: zoomOutLeft;\n  animation-name: zoomOutLeft;\n}\n\n@-webkit-keyframes zoomOutRight {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: scale(0.1) translate3d(2000px, 0, 0);\n    transform: scale(0.1) translate3d(2000px, 0, 0);\n    -webkit-transform-origin: right center;\n    transform-origin: right center;\n  }\n}\n\n@keyframes zoomOutRight {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: scale(0.1) translate3d(2000px, 0, 0);\n    transform: scale(0.1) translate3d(2000px, 0, 0);\n    -webkit-transform-origin: right center;\n    transform-origin: right center;\n  }\n}\n\n.zoomOutRight {\n  -webkit-animation-name: zoomOutRight;\n  animation-name: zoomOutRight;\n}\n\n@-webkit-keyframes zoomOutUp {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);\n    -webkit-transform-origin: center bottom;\n    transform-origin: center bottom;\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n  }\n}\n\n@keyframes zoomOutUp {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);\n    -webkit-transform-origin: center bottom;\n    transform-origin: center bottom;\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n  }\n}\n\n.zoomOutUp {\n  -webkit-animation-name: zoomOutUp;\n  animation-name: zoomOutUp;\n}\n\n@-webkit-keyframes slideInDown {\n  from {\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n    visibility: visible;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n@keyframes slideInDown {\n  from {\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n    visibility: visible;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n.slideInDown {\n  -webkit-animation-name: slideInDown;\n  animation-name: slideInDown;\n}\n\n@-webkit-keyframes slideInLeft {\n  from {\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n    visibility: visible;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n@keyframes slideInLeft {\n  from {\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n    visibility: visible;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n.slideInLeft {\n  -webkit-animation-name: slideInLeft;\n  animation-name: slideInLeft;\n}\n\n@-webkit-keyframes slideInRight {\n  from {\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n    visibility: visible;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n@keyframes slideInRight {\n  from {\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n    visibility: visible;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n.slideInRight {\n  -webkit-animation-name: slideInRight;\n  animation-name: slideInRight;\n}\n\n@-webkit-keyframes slideInUp {\n  from {\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n    visibility: visible;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n@keyframes slideInUp {\n  from {\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n    visibility: visible;\n  }\n\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n.slideInUp {\n  -webkit-animation-name: slideInUp;\n  animation-name: slideInUp;\n}\n\n@-webkit-keyframes slideOutDown {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n  }\n}\n\n@keyframes slideOutDown {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n  }\n}\n\n.slideOutDown {\n  -webkit-animation-name: slideOutDown;\n  animation-name: slideOutDown;\n}\n\n@-webkit-keyframes slideOutLeft {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n}\n\n@keyframes slideOutLeft {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n}\n\n.slideOutLeft {\n  -webkit-animation-name: slideOutLeft;\n  animation-name: slideOutLeft;\n}\n\n@-webkit-keyframes slideOutRight {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n  }\n}\n\n@keyframes slideOutRight {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0);\n  }\n}\n\n.slideOutRight {\n  -webkit-animation-name: slideOutRight;\n  animation-name: slideOutRight;\n}\n\n@-webkit-keyframes slideOutUp {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n}\n\n@keyframes slideOutUp {\n  from {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n}\n\n.slideOutUp {\n  -webkit-animation-name: slideOutUp;\n  animation-name: slideOutUp;\n}\n\n.animated {\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n\n.animated.infinite {\n  -webkit-animation-iteration-count: infinite;\n  animation-iteration-count: infinite;\n}\n\n.animated.delay-1s {\n  -webkit-animation-delay: 1s;\n  animation-delay: 1s;\n}\n\n.animated.delay-2s {\n  -webkit-animation-delay: 2s;\n  animation-delay: 2s;\n}\n\n.animated.delay-3s {\n  -webkit-animation-delay: 3s;\n  animation-delay: 3s;\n}\n\n.animated.delay-4s {\n  -webkit-animation-delay: 4s;\n  animation-delay: 4s;\n}\n\n.animated.delay-5s {\n  -webkit-animation-delay: 5s;\n  animation-delay: 5s;\n}\n\n.animated.fast {\n  -webkit-animation-duration: 800ms;\n  animation-duration: 800ms;\n}\n\n.animated.faster {\n  -webkit-animation-duration: 500ms;\n  animation-duration: 500ms;\n}\n\n.animated.slow {\n  -webkit-animation-duration: 2s;\n  animation-duration: 2s;\n}\n\n.animated.slower {\n  -webkit-animation-duration: 3s;\n  animation-duration: 3s;\n}\n\n@media (prefers-reduced-motion) {\n  .animated {\n    -webkit-animation: unset !important;\n    animation: unset !important;\n    -webkit-transition: none !important;\n    transition: none !important;\n  }\n}", ""]);

// exports

    const application = __webpack_require__("tns-core-modules/application");
    __webpack_require__("tns-core-modules/ui/styling/style-scope");

    exports.forEach(cssExport => {
        if (cssExport.length > 1 && cssExport[1]) {
            // applying the second item of the export as it contains the css contents
            application.addCss(cssExport[1]);
        }
    });
    ;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './css/animate.css' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./nativescript-fonticon/lib.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.mapCss = function (data, debug) {
  var map = {};
  var sets = data.split('}');

  for (var _i = 0, sets_1 = sets; _i < sets_1.length; _i++) {
    var set = sets_1[_i];
    var pair = set.split(/:before\s*{/);
    var keyGroups = pair[0];
    var keys = keyGroups.split(',');

    if (pair[1]) {
      var value = exports.cleanValue(pair[1]);

      if (!value) {
        continue;
      }

      for (var _a = 0, keys_1 = keys; _a < keys_1.length; _a++) {
        var key = keys_1[_a];
        key = key.trim().slice(1).split(':before')[0];
        map[key] = String.fromCharCode(parseInt(value.substring(2), 16));

        if (debug) {
          console.log(key + ": " + value);
        }
      }
    }
  }

  return map;
};

exports.cleanValue = function (val) {
  var matches = val.match(/content:\s*"\\f([^"]+)"/i);

  if (matches) {
    return "\\uf" + matches[1];
  }

  return void 0;
};

/***/ }),

/***/ "./nativescript-fonticon/nativescript-fonticon.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var file_system_1 = __webpack_require__("tns-core-modules/file-system");

var lib = __webpack_require__("./nativescript-fonticon/lib.js");

var TNSFontIcon = function () {
  function TNSFontIcon() {}

  TNSFontIcon.loadCss = function () {
    var cnt = 0;
    var currentName;
    var fontIconCollections = Object.keys(TNSFontIcon.paths);

    if (TNSFontIcon.debug) {
      console.log("Collections to load: " + fontIconCollections);
    }

    var initCollection = function initCollection() {
      currentName = fontIconCollections[cnt];
      TNSFontIcon.css[currentName] = {};
    };

    var loadFile = function loadFile(path) {
      if (TNSFontIcon.debug) {
        console.log('----------');
        console.log("Loading collection '" + currentName + "' from file: " + path);
      }

      var cssFile = file_system_1.knownFolders.currentApp().getFile(path);
      return new Promise(function (resolve, reject) {
        cssFile.readText().then(function (data) {
          var map = lib.mapCss(data, TNSFontIcon.debug);
          TNSFontIcon.css[currentName] = map;
          resolve();
        }, function (err) {
          reject(err);
        });
      });
    };

    var loadFiles = function loadFiles() {
      return new Promise(function (resolve) {
        initCollection();

        if (cnt < fontIconCollections.length) {
          loadFile(TNSFontIcon.paths[currentName]).then(function () {
            cnt++;
            return loadFiles().then(function () {
              resolve();
            });
          });
        } else {
          resolve();
        }
      });
    };

    return loadFiles();
  };

  TNSFontIcon.css = {};
  TNSFontIcon.paths = {};
  TNSFontIcon.debug = false;
  return TNSFontIcon;
}();

exports.TNSFontIcon = TNSFontIcon;

function fonticon(value) {
  if (value) {
    if (value.indexOf('-') > -1) {
      var prefix = value.split('-')[0];
      return TNSFontIcon.css[prefix][value];
    } else {
      console.log('Fonticon classname did not contain a prefix. i.e., \'fa-bluetooth\'');
    }
  }

  return value;
}

exports.fonticon = fonticon;

/***/ }),

/***/ "./scss/footerSection.scss":
/***/ (function(module, exports) {

throw new Error("Module build failed (from ../node_modules/sass-loader/dist/cjs.js):\n\n        color: $white;\n              ^\n      Undefined variable: \"$white\".\n      in /home/wohlig/Downloads/NSPlayground (2)/app/scss/footerSection.scss (line 5, column 16)");

/***/ }),

/***/ "./scss/main.scss":
/***/ (function(module, exports) {

throw new Error("Module build failed (from ../node_modules/sass-loader/dist/cjs.js):\n\n        background-color: $view-prediction;\n                         ^\n      Undefined variable: \"$view-prediction\".\n      in /home/wohlig/Downloads/NSPlayground (2)/app/scss/main.scss (line 2, column 27)");

/***/ }),

/***/ "./scss/variable.scss":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports

    const application = __webpack_require__("tns-core-modules/application");
    __webpack_require__("tns-core-modules/ui/styling/style-scope");

    exports.forEach(cssExport => {
        if (cssExport.length > 1 && cssExport[1]) {
            // applying the second item of the export as it contains the css contents
            application.addCss(cssExport[1]);
        }
    });
    ;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './scss/variable.scss' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "nativescript-vue":
/***/ (function(module, exports) {

module.exports = require("nativescript-vue");

/***/ }),

/***/ "tns-core-modules/application":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/application");

/***/ }),

/***/ "tns-core-modules/bundle-entry-points":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/bundle-entry-points");

/***/ }),

/***/ "tns-core-modules/data/observable-array":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/data/observable-array");

/***/ }),

/***/ "tns-core-modules/file-system":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/file-system");

/***/ }),

/***/ "tns-core-modules/platform":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/platform");

/***/ }),

/***/ "tns-core-modules/text/formatted-string":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/text/formatted-string");

/***/ }),

/***/ "tns-core-modules/text/span":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/text/span");

/***/ }),

/***/ "tns-core-modules/ui/action-bar":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/action-bar");

/***/ }),

/***/ "tns-core-modules/ui/activity-indicator":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/activity-indicator");

/***/ }),

/***/ "tns-core-modules/ui/border":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/border");

/***/ }),

/***/ "tns-core-modules/ui/bottom-navigation":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/bottom-navigation");

/***/ }),

/***/ "tns-core-modules/ui/button":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/button");

/***/ }),

/***/ "tns-core-modules/ui/content-view":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/content-view");

/***/ }),

/***/ "tns-core-modules/ui/core/view":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/core/view");

/***/ }),

/***/ "tns-core-modules/ui/date-picker":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/date-picker");

/***/ }),

/***/ "tns-core-modules/ui/frame":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/frame");

/***/ }),

/***/ "tns-core-modules/ui/frame/activity":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/frame/activity");

/***/ }),

/***/ "tns-core-modules/ui/html-view":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/html-view");

/***/ }),

/***/ "tns-core-modules/ui/image":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/image");

/***/ }),

/***/ "tns-core-modules/ui/label":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/label");

/***/ }),

/***/ "tns-core-modules/ui/layouts/absolute-layout":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/layouts/absolute-layout");

/***/ }),

/***/ "tns-core-modules/ui/layouts/dock-layout":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/layouts/dock-layout");

/***/ }),

/***/ "tns-core-modules/ui/layouts/flexbox-layout":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/layouts/flexbox-layout");

/***/ }),

/***/ "tns-core-modules/ui/layouts/grid-layout":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/layouts/grid-layout");

/***/ }),

/***/ "tns-core-modules/ui/layouts/layout-base":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/layouts/layout-base");

/***/ }),

/***/ "tns-core-modules/ui/layouts/stack-layout":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/layouts/stack-layout");

/***/ }),

/***/ "tns-core-modules/ui/layouts/wrap-layout":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/layouts/wrap-layout");

/***/ }),

/***/ "tns-core-modules/ui/list-picker":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/list-picker");

/***/ }),

/***/ "tns-core-modules/ui/list-view":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/list-view");

/***/ }),

/***/ "tns-core-modules/ui/page":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/page");

/***/ }),

/***/ "tns-core-modules/ui/placeholder":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/placeholder");

/***/ }),

/***/ "tns-core-modules/ui/progress":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/progress");

/***/ }),

/***/ "tns-core-modules/ui/proxy-view-container":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/proxy-view-container");

/***/ }),

/***/ "tns-core-modules/ui/scroll-view":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/scroll-view");

/***/ }),

/***/ "tns-core-modules/ui/search-bar":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/search-bar");

/***/ }),

/***/ "tns-core-modules/ui/segmented-bar":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/segmented-bar");

/***/ }),

/***/ "tns-core-modules/ui/slider":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/slider");

/***/ }),

/***/ "tns-core-modules/ui/styling/style-scope":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/styling/style-scope");

/***/ }),

/***/ "tns-core-modules/ui/switch":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/switch");

/***/ }),

/***/ "tns-core-modules/ui/tab-navigation-base/tab-content-item":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/tab-navigation-base/tab-content-item");

/***/ }),

/***/ "tns-core-modules/ui/tab-navigation-base/tab-strip":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/tab-navigation-base/tab-strip");

/***/ }),

/***/ "tns-core-modules/ui/tab-navigation-base/tab-strip-item":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/tab-navigation-base/tab-strip-item");

/***/ }),

/***/ "tns-core-modules/ui/tab-view":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/tab-view");

/***/ }),

/***/ "tns-core-modules/ui/tabs":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/tabs");

/***/ }),

/***/ "tns-core-modules/ui/text-field":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/text-field");

/***/ }),

/***/ "tns-core-modules/ui/text-view":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/text-view");

/***/ }),

/***/ "tns-core-modules/ui/time-picker":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/time-picker");

/***/ }),

/***/ "tns-core-modules/ui/web-view":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/web-view");

/***/ }),

/***/ "tns-core-modules/utils/types":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/utils/types");

/***/ }),

/***/ "tns-core-modules/xml":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/xml");

/***/ })

},[["./app.js","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Gb290ZXJtLnZ1ZSIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9IZWFkZXIudnVlIiwid2VicGFjazovLy9jb21wb25lbnRzL0hvbWUudnVlIiwid2VicGFjazovLy9jb21wb25lbnRzL0xlYXRoZXJCb2FyZC52dWUiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvUXVlc3Rpb25zLnZ1ZSIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Vc2VyUHJvZmlsZS52dWUiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvVmlld3ByZWRpY3Rpb24udnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRm9vdGVybS52dWU/NmYzYyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUudnVlPzA4OTkiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Vc2VyUHJvZmlsZS52dWU/OWVhMSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1ZpZXdwcmVkaWN0aW9uLnZ1ZT9lYmYzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyLnZ1ZT83ODdlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUXVlc3Rpb25zLnZ1ZT9kODhjIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRm9vdGVybS52dWU/NmQ3OSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci52dWU/MGYxZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUudnVlPzQ5OWYiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MZWF0aGVyQm9hcmQudnVlPzUwMjkiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9RdWVzdGlvbnMudnVlPzRkNjciLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Vc2VyUHJvZmlsZS52dWU/ZjNiYiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1ZpZXdwcmVkaWN0aW9uLnZ1ZT84Y2JkIiwid2VicGFjazovLy8uIHN5bmMgbm9ucmVjdXJzaXZlIF5cXC5cXC9hcHBcXC4oY3NzfHNjc3N8bGVzc3xzYXNzKSQiLCJ3ZWJwYWNrOi8vL1xcYl9bXFx3LV0qXFwuKXNjc3MpJCIsIndlYnBhY2s6Ly8vLi9hcHAuY3NzIiwid2VicGFjazovLy8uL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvZm9udC1hd2Vzb21lLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvb3Rlcm0udnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRm9vdGVybS52dWU/ODU4YyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvb3Rlcm0udnVlP2E0OGUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb290ZXJtLnZ1ZT8wMDNjIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci52dWU/MmZmZiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci52dWU/MWFlMSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci52dWU/Nzk3NiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS52dWU/NTYyNSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUudnVlPzkxYWEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lLnZ1ZT8yYzM1Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGVhdGhlckJvYXJkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xlYXRoZXJCb2FyZC52dWU/YWRhNSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xlYXRoZXJCb2FyZC52dWU/YmY0MSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1F1ZXN0aW9ucy52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9RdWVzdGlvbnMudnVlP2U0MzgiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9RdWVzdGlvbnMudnVlPzQ1NjAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9RdWVzdGlvbnMudnVlP2NhNGQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Vc2VyUHJvZmlsZS52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Vc2VyUHJvZmlsZS52dWU/YTM1YiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VzZXJQcm9maWxlLnZ1ZT82ZjNlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVXNlclByb2ZpbGUudnVlPzhkZTMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9WaWV3cHJlZGljdGlvbi52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9WaWV3cHJlZGljdGlvbi52dWU/ZTdmYSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1ZpZXdwcmVkaWN0aW9uLnZ1ZT83YmJlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVmlld3ByZWRpY3Rpb24udnVlPzNkNTEiLCJ3ZWJwYWNrOi8vLy4vY3NzL2FuaW1hdGUuY3NzIiwid2VicGFjazovLy8uL25hdGl2ZXNjcmlwdC1mb250aWNvbi9saWIuanMiLCJ3ZWJwYWNrOi8vLy4vbmF0aXZlc2NyaXB0LWZvbnRpY29uL25hdGl2ZXNjcmlwdC1mb250aWNvbi5qcyIsIndlYnBhY2s6Ly8vLi9zY3NzL3ZhcmlhYmxlLnNjc3MiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmF0aXZlc2NyaXB0LXZ1ZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL2J1bmRsZS1lbnRyeS1wb2ludHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvZmlsZS1zeXN0ZW1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy90ZXh0L2Zvcm1hdHRlZC1zdHJpbmdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3RleHQvc3BhblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvYWN0aW9uLWJhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvYWN0aXZpdHktaW5kaWNhdG9yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9ib3JkZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2JvdHRvbS1uYXZpZ2F0aW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9idXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2NvbnRlbnQtdmlld1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvY29yZS92aWV3XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kYXRlLXBpY2tlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lL2FjdGl2aXR5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9odG1sLXZpZXdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ltYWdlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYWJlbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9hYnNvbHV0ZS1sYXlvdXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvZG9jay1sYXlvdXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvZmxleGJveC1sYXlvdXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvZ3JpZC1sYXlvdXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvbGF5b3V0LWJhc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvc3RhY2stbGF5b3V0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL3dyYXAtbGF5b3V0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9saXN0LXBpY2tlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGlzdC12aWV3XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wbGFjZWhvbGRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvcHJvZ3Jlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3Byb3h5LXZpZXctY29udGFpbmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9zY3JvbGwtdmlld1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvc2VhcmNoLWJhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvc2VnbWVudGVkLWJhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvc2xpZGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9zd2l0Y2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RhYi1uYXZpZ2F0aW9uLWJhc2UvdGFiLWNvbnRlbnQtaXRlbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvdGFiLW5hdmlnYXRpb24tYmFzZS90YWItc3RyaXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RhYi1uYXZpZ2F0aW9uLWJhc2UvdGFiLXN0cmlwLWl0ZW1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RhYi12aWV3XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS90YWJzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS90ZXh0LWZpZWxkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS90ZXh0LXZpZXdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RpbWUtcGlja2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS93ZWItdmlld1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdXRpbHMvdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3htbFwiIl0sIm5hbWVzIjpbIkhvbWUiLCJUTlNGb250SWNvbiIsImZvbnRpY29uIiwicGF0aHMiLCJmYSIsIlZ1ZSIsImZpbHRlciIsInRlbXBsYXRlIiwiY29tcG9uZW50cyIsIiRzdGFydCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwibWFwQ3NzIiwiZGF0YSIsImRlYnVnIiwibWFwIiwic2V0cyIsInNwbGl0IiwiX2kiLCJzZXRzXzEiLCJsZW5ndGgiLCJzZXQiLCJwYWlyIiwia2V5R3JvdXBzIiwia2V5cyIsImNsZWFuVmFsdWUiLCJfYSIsImtleXNfMSIsImtleSIsInRyaW0iLCJzbGljZSIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsInBhcnNlSW50Iiwic3Vic3RyaW5nIiwiY29uc29sZSIsImxvZyIsInZhbCIsIm1hdGNoZXMiLCJtYXRjaCIsImZpbGVfc3lzdGVtXzEiLCJyZXF1aXJlIiwibGliIiwibG9hZENzcyIsImNudCIsImN1cnJlbnROYW1lIiwiZm9udEljb25Db2xsZWN0aW9ucyIsImluaXRDb2xsZWN0aW9uIiwiY3NzIiwibG9hZEZpbGUiLCJwYXRoIiwiY3NzRmlsZSIsImtub3duRm9sZGVycyIsImN1cnJlbnRBcHAiLCJnZXRGaWxlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWFkVGV4dCIsInRoZW4iLCJlcnIiLCJsb2FkRmlsZXMiLCJpbmRleE9mIiwicHJlZml4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFEQTtBQUVBO0FBQ0EsMkJBREE7QUFFQSx1QkFGQTtBQUdBO0FBSEE7QUFGQTtBQVFBLEtBVkE7O0FBV0E7QUFDQTtBQUNBLHNCQURBO0FBRUE7QUFDQSwyQkFEQTtBQUVBLHVCQUZBO0FBR0E7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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1TUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxTQUFTLDBCQUEwQixFQUFFO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLFNBQVMsU0FBUyw2QkFBNkIsRUFBRTtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFNBQVMsZ0RBQWdELEVBQUU7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFNBQVMsZ0RBQWdELEVBQUU7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFNBQVMsZ0RBQWdELEVBQUU7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFNBQVMsZ0RBQWdELEVBQUU7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFNBQVMsZ0RBQWdELEVBQUU7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFNBQVMsZ0RBQWdELEVBQUU7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFNBQVMsZ0RBQWdELEVBQUU7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isa0RBQWtEO0FBQzFFLHFCQUFxQjtBQUNyQixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbGRBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssU0FBUywwQkFBMEIsRUFBRTtBQUMxQztBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMsZ0RBQWdELEVBQUU7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGlCQUFpQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLHFCQUFxQjtBQUNyQixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFNBQVMscURBQXFELEVBQUU7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSwrQkFBK0IsU0FBUyxtQkFBbUIsRUFBRTtBQUM3RCwrQkFBK0IsU0FBUyxvQkFBb0IsRUFBRTtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSwrQkFBK0IsU0FBUyxvQkFBb0IsRUFBRTtBQUM5RCwrQkFBK0IsU0FBUyxvQkFBb0IsRUFBRTtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSwrQkFBK0IsU0FBUyxxQkFBcUIsRUFBRTtBQUMvRCwrQkFBK0IsU0FBUyxvQkFBb0IsRUFBRTtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSwrQkFBK0IsU0FBUywwQkFBMEIsRUFBRTtBQUNwRSwrQkFBK0IsU0FBUyxvQkFBb0IsRUFBRTtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLHFCQUFxQjtBQUNyQixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDOU5BO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssU0FBUywwQkFBMEIsRUFBRTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsaUJBQWlCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIscUJBQXFCO0FBQ3JCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEIsYUFBYTtBQUNiO0FBQ0EsMkJBQTJCLFNBQVMsZ0NBQWdDLEVBQUU7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLGlCQUFpQixTQUFTLGtDQUFrQyxFQUFFO0FBQzlEO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUIsbUJBQW1CO0FBQ25CO0FBQ0EsNEJBQTRCO0FBQzVCLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFNBQVMsa0NBQWtDLEVBQUU7QUFDOUQ7QUFDQSwrQkFBK0IsU0FBUywwQkFBMEIsRUFBRTtBQUNwRSwrQkFBK0IsU0FBUywwQkFBMEIsRUFBRTtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxTQUFTLDBCQUEwQixFQUFFO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLFNBQVMsU0FBUyx5REFBeUQsRUFBRTtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsU0FBUyw0QkFBNEIsRUFBRTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLGlCQUFpQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QiwyQkFBMkI7QUFDM0IscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6Qyw2Q0FBNkM7QUFDN0MsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDLDZDQUE2QztBQUM3Qyx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNuTUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUU7Ozs7Ozs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBIOzs7Ozs7O0FDOUJBLHlFQUEyQixtQkFBTyxDQUFDLDRDQUE0QztBQUMvRTtBQUNBLFVBQVUsbUJBQU8sQ0FBQyxpR0FBNEY7O0FBRTlHO0FBQ0EsY0FBYyxRQUFTLGlCQUFpQixrREFBa0QsdUJBQXVCLG9CQUFvQixHQUFHLFVBQVUsb0RBQW9ELHVCQUF1QixHQUFHLGVBQWUsaUVBQWlFLHVCQUF1QixHQUFHLG1CQUFtQiw4QkFBOEIsSUFBSSxVQUFVLG9FQUFvRSxHQUFHOztBQUVoZDtBQUNBO0FBQ0EsUUFBUSxJQUFVO0FBQ2xCO0FBQ0E7QUFDQSwrQkFBK0IsbUNBQW1DO0FBQ2xFLFNBQVM7QUFDVDs7Ozs7Ozs7OztBQ2RBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0EsT0FBT0EsSUFBUCxNQUFpQixtQkFBakI7QUFDQSxTQUFTQyxXQUFULEVBQXNCQyxRQUF0QixRQUFzQyx5QkFBdEM7QUFFQUQsV0FBVyxDQUFDRSxtQkFBWixDQUFvQjtBQUNoQkMsbUJBQUk7QUFEWSxDQUFwQjtBQUdBO0FBRUFDLEdBQUcsQ0FBQ0MsSUFBSjtBQUdBLElBQUlELEdBQUosQ0FBUTtBQUVKRSxVQUFRLEVBRko7QUFPSkMsWUFBWTtBQUNSUjtBQURRO0FBUFIsQ0FBUixFQVVHUyxNQVZIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBLHlFQUEyQixtQkFBTyxDQUFDLDRDQUErQztBQUNsRjs7O0FBR0E7QUFDQSxjQUFjLFFBQVMscUJBQXFCLHdCQUF3QixHQUFHLG9CQUFvQix3QkFBd0IsR0FBRyxxQkFBcUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLG9CQUFvQix3QkFBd0IsR0FBRyxtQkFBbUIsd0JBQXdCLEdBQUcscUJBQXFCLHdCQUF3QixHQUFHLG1CQUFtQix3QkFBd0IsR0FBRyxtQkFBbUIsd0JBQXdCLEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLGlCQUFpQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsb0JBQW9CLHdCQUF3QixHQUFHLDJEQUEyRCx3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsMkJBQTJCLHdCQUF3QixHQUFHLHdCQUF3Qix3QkFBd0IsR0FBRyxxQkFBcUIsd0JBQXdCLEdBQUcsb0NBQW9DLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxtQkFBbUIsd0JBQXdCLEdBQUcscUJBQXFCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxtQkFBbUIsd0JBQXdCLEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLGtDQUFrQyx3QkFBd0IsR0FBRyxnQ0FBZ0Msd0JBQXdCLEdBQUcsb0JBQW9CLHdCQUF3QixHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRywrQ0FBK0Msd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHVCQUF1Qix3QkFBd0IsR0FBRyxtQkFBbUIsd0JBQXdCLEdBQUcsbUJBQW1CLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLHdCQUF3Qix3QkFBd0IsR0FBRyxxQkFBcUIsd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLGtCQUFrQix3QkFBd0IsR0FBRyxtQkFBbUIsd0JBQXdCLEdBQUcsbUJBQW1CLHdCQUF3QixHQUFHLHVCQUF1Qix3QkFBd0IsR0FBRyxvQkFBb0Isd0JBQXdCLEdBQUcscUJBQXFCLHdCQUF3QixHQUFHLG1CQUFtQix3QkFBd0IsR0FBRyxtQkFBbUIsd0JBQXdCLEdBQUcscUJBQXFCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLDJCQUEyQix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsNEJBQTRCLHdCQUF3QixHQUFHLG1CQUFtQix3QkFBd0IsR0FBRywwQ0FBMEMsd0JBQXdCLEdBQUcscUJBQXFCLHdCQUF3QixHQUFHLDJCQUEyQix3QkFBd0IsR0FBRyw4REFBOEQsd0JBQXdCLEdBQUcscUJBQXFCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyxxQkFBcUIsd0JBQXdCLEdBQUcsbUJBQW1CLHdCQUF3QixHQUFHLGdEQUFnRCx3QkFBd0IsR0FBRyw2QkFBNkIsd0JBQXdCLEdBQUcsNkJBQTZCLHdCQUF3QixHQUFHLHFCQUFxQix3QkFBd0IsR0FBRyw0QkFBNEIsd0JBQXdCLEdBQUcsNEJBQTRCLHdCQUF3QixHQUFHLHVCQUF1Qix3QkFBd0IsR0FBRyxtQkFBbUIsd0JBQXdCLEdBQUcsb0JBQW9CLHdCQUF3QixHQUFHLG1CQUFtQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsMkJBQTJCLHdCQUF3QixHQUFHLDJCQUEyQix3QkFBd0IsR0FBRyxvQkFBb0Isd0JBQXdCLEdBQUcsMkJBQTJCLHdCQUF3QixHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsMkJBQTJCLHdCQUF3QixHQUFHLDJCQUEyQix3QkFBd0IsR0FBRywyQkFBMkIsd0JBQXdCLEdBQUcsOEJBQThCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcsNkJBQTZCLHdCQUF3QixHQUFHLDZCQUE2Qix3QkFBd0IsR0FBRyxrQkFBa0Isd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRyx1QkFBdUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLDhDQUE4Qyx3QkFBd0IsR0FBRyxxQkFBcUIsd0JBQXdCLEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLG1CQUFtQix3QkFBd0IsR0FBRyxvQkFBb0Isd0JBQXdCLEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLGlDQUFpQyx3QkFBd0IsR0FBRyxtQkFBbUIsd0JBQXdCLEdBQUcsbUJBQW1CLHdCQUF3QixHQUFHLG1CQUFtQix3QkFBd0IsR0FBRyxrQkFBa0Isd0JBQXdCLEdBQUcsd0JBQXdCLHdCQUF3QixHQUFHLHdEQUF3RCx3QkFBd0IsR0FBRyxvQkFBb0Isd0JBQXdCLEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLHFCQUFxQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcscUJBQXFCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRywyQkFBMkIsd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRyxxQkFBcUIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLHVCQUF1Qix3QkFBd0IsR0FBRyx1QkFBdUIsd0JBQXdCLEdBQUcsaURBQWlELHdCQUF3QixHQUFHLDZCQUE2Qix3QkFBd0IsR0FBRyw4QkFBOEIsd0JBQXdCLEdBQUcsMkJBQTJCLHdCQUF3QixHQUFHLGtCQUFrQix3QkFBd0IsR0FBRyxzQ0FBc0Msd0JBQXdCLEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRyw0QkFBNEIsd0JBQXdCLEdBQUcsd0JBQXdCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyx1QkFBdUIsd0JBQXdCLEdBQUcsOEJBQThCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyw0QkFBNEIsd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHFCQUFxQix3QkFBd0IsR0FBRyw0QkFBNEIsd0JBQXdCLEdBQUcscUJBQXFCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxvQkFBb0Isd0JBQXdCLEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRywyQkFBMkIsd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLCtDQUErQyx3QkFBd0IsR0FBRyxxQkFBcUIsd0JBQXdCLEdBQUcscUJBQXFCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRyxvQ0FBb0Msd0JBQXdCLEdBQUcsb0JBQW9CLHdCQUF3QixHQUFHLHVCQUF1Qix3QkFBd0IsR0FBRyxtQkFBbUIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLDJCQUEyQix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsd0JBQXdCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRyxnQ0FBZ0Msd0JBQXdCLEdBQUcsaUNBQWlDLHdCQUF3QixHQUFHLDhCQUE4Qix3QkFBd0IsR0FBRyxnQ0FBZ0Msd0JBQXdCLEdBQUcsb0JBQW9CLHdCQUF3QixHQUFHLHFCQUFxQix3QkFBd0IsR0FBRyxvQkFBb0Isd0JBQXdCLEdBQUcscUJBQXFCLHdCQUF3QixHQUFHLHdCQUF3Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcsdUNBQXVDLHdCQUF3QixHQUFHLHNDQUFzQyx3QkFBd0IsR0FBRyxvQkFBb0Isd0JBQXdCLEdBQUcsb0JBQW9CLHdCQUF3QixHQUFHLHdDQUF3Qyx3QkFBd0IsR0FBRyx3Q0FBd0Msd0JBQXdCLEdBQUcsd0JBQXdCLHdCQUF3QixHQUFHLHlDQUF5Qyx3QkFBd0IsR0FBRyxxQkFBcUIsd0JBQXdCLEdBQUcsNkRBQTZELHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsNEJBQTRCLHdCQUF3QixHQUFHLHdCQUF3Qix3QkFBd0IsR0FBRyxvQkFBb0Isd0JBQXdCLEdBQUcsb0JBQW9CLHdCQUF3QixHQUFHLG9CQUFvQix3QkFBd0IsR0FBRyx3QkFBd0Isd0JBQXdCLEdBQUcsK0JBQStCLHdCQUF3QixHQUFHLGlDQUFpQyx3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsb0JBQW9CLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx1QkFBdUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcseUNBQXlDLHdCQUF3QixHQUFHLCtDQUErQyx3QkFBd0IsR0FBRyw0Q0FBNEMsd0JBQXdCLEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLHVCQUF1Qix3QkFBd0IsR0FBRyw0Q0FBNEMsd0JBQXdCLEdBQUcsdUNBQXVDLHdCQUF3QixHQUFHLGdEQUFnRCx3QkFBd0IsR0FBRyx3QkFBd0Isd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHNDQUFzQyx3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLDJDQUEyQyx3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLDZCQUE2Qix3QkFBd0IsR0FBRywyQkFBMkIsd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRyx1QkFBdUIsd0JBQXdCLEdBQUcscUJBQXFCLHdCQUF3QixHQUFHLHFCQUFxQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcsd0JBQXdCLHdCQUF3QixHQUFHLHFCQUFxQix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsbUJBQW1CLHdCQUF3QixHQUFHLHVCQUF1Qix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsZ0NBQWdDLHdCQUF3QixHQUFHLGlDQUFpQyx3QkFBd0IsR0FBRyw4QkFBOEIsd0JBQXdCLEdBQUcsZ0NBQWdDLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcscUJBQXFCLHdCQUF3QixHQUFHLHFCQUFxQix3QkFBd0IsR0FBRywrQ0FBK0Msd0JBQXdCLEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHFCQUFxQix3QkFBd0IsR0FBRyw0Q0FBNEMsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHVCQUF1Qix3QkFBd0IsR0FBRyw0QkFBNEIsd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxvQkFBb0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyxxQkFBcUIsd0JBQXdCLEdBQUcsNkJBQTZCLHdCQUF3QixHQUFHLHVCQUF1Qix3QkFBd0IsR0FBRyxtQkFBbUIsd0JBQXdCLEdBQUcsb0RBQW9ELHdCQUF3QixHQUFHLG1GQUFtRix3QkFBd0IsR0FBRyw2QkFBNkIsd0JBQXdCLEdBQUcsbUJBQW1CLHdCQUF3QixHQUFHLHdCQUF3Qix3QkFBd0IsR0FBRywrQ0FBK0Msd0JBQXdCLEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLG1CQUFtQix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLHdCQUF3Qix3QkFBd0IsR0FBRyxxQkFBcUIsd0JBQXdCLEdBQUcsMkJBQTJCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRywrQkFBK0Isd0JBQXdCLEdBQUcscUJBQXFCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyxnQ0FBZ0Msd0JBQXdCLEdBQUcscUJBQXFCLHdCQUF3QixHQUFHLHFCQUFxQix3QkFBd0IsR0FBRyxrQ0FBa0Msd0JBQXdCLEdBQUcsbUNBQW1DLHdCQUF3QixHQUFHLGdDQUFnQyx3QkFBd0IsR0FBRyxrQ0FBa0Msd0JBQXdCLEdBQUcsb0JBQW9CLHdCQUF3QixHQUFHLG1CQUFtQix3QkFBd0IsR0FBRyxxQkFBcUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHVCQUF1Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcscUJBQXFCLHdCQUF3QixHQUFHLDJCQUEyQix3QkFBd0IsR0FBRyw2QkFBNkIsd0JBQXdCLEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRywyQkFBMkIsd0JBQXdCLEdBQUcsNEJBQTRCLHdCQUF3QixHQUFHLG1DQUFtQyx3QkFBd0IsR0FBRywyQkFBMkIsd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLDJEQUEyRCx3QkFBd0IsR0FBRyx1REFBdUQsd0JBQXdCLEdBQUcsNkRBQTZELHdCQUF3QixHQUFHLG9DQUFvQyx3QkFBd0IsR0FBRyxrQkFBa0Isd0JBQXdCLEdBQUcsc0NBQXNDLHdCQUF3QixHQUFHLHFDQUFxQyx3QkFBd0IsR0FBRyxxRUFBcUUsd0JBQXdCLEdBQUcseURBQXlELHdCQUF3QixHQUFHLG1DQUFtQyx3QkFBd0IsR0FBRyx1Q0FBdUMsd0JBQXdCLEdBQUcsbUJBQW1CLHdCQUF3QixHQUFHLHdCQUF3Qix3QkFBd0IsR0FBRyw2QkFBNkIsd0JBQXdCLEdBQUcsOEJBQThCLHdCQUF3QixHQUFHLDhCQUE4Qix3QkFBd0IsR0FBRywrQkFBK0Isd0JBQXdCLEdBQUcsK0JBQStCLHdCQUF3QixHQUFHLGdDQUFnQyx3QkFBd0IsR0FBRyx3QkFBd0Isd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLDZCQUE2Qix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsbUJBQW1CLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRywyQkFBMkIsd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLDZCQUE2Qix3QkFBd0IsR0FBRyx3QkFBd0Isd0JBQXdCLEdBQUcscUJBQXFCLHdCQUF3QixHQUFHLGtCQUFrQix3QkFBd0IsR0FBRyx3QkFBd0Isd0JBQXdCLEdBQUcsK0JBQStCLHdCQUF3QixHQUFHLHFCQUFxQix3QkFBd0IsR0FBRyw0QkFBNEIsd0JBQXdCLEdBQUcsOEJBQThCLHdCQUF3QixHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRyw4QkFBOEIsd0JBQXdCLEdBQUcsK0JBQStCLHdCQUF3QixHQUFHLG9CQUFvQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLG9CQUFvQix3QkFBd0IsR0FBRyx1QkFBdUIsd0JBQXdCLEdBQUcsb0JBQW9CLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyxxQkFBcUIsd0JBQXdCLEdBQUcscUJBQXFCLHdCQUF3QixHQUFHLG1CQUFtQix3QkFBd0IsR0FBRywyQ0FBMkMsd0JBQXdCLEdBQUcsb0JBQW9CLHdCQUF3QixHQUFHLHFCQUFxQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsa0JBQWtCLHdCQUF3QixHQUFHLGlCQUFpQix3QkFBd0IsR0FBRyxvQkFBb0Isd0JBQXdCLEdBQUcscUJBQXFCLHdCQUF3QixHQUFHLHdCQUF3Qix3QkFBd0IsR0FBRyw2QkFBNkIsd0JBQXdCLEdBQUcsbUNBQW1DLHdCQUF3QixHQUFHLGtDQUFrQyx3QkFBd0IsR0FBRywyREFBMkQsd0JBQXdCLEdBQUcsMkJBQTJCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRywyQkFBMkIsd0JBQXdCLEdBQUcsNENBQTRDLHdCQUF3QixHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRyw0QkFBNEIsd0JBQXdCLEdBQUcsb0JBQW9CLHdCQUF3QixHQUFHLDhCQUE4Qix3QkFBd0IsR0FBRyx3QkFBd0Isd0JBQXdCLEdBQUcscUJBQXFCLHdCQUF3QixHQUFHLG9FQUFvRSx3QkFBd0IsR0FBRyx1REFBdUQsd0JBQXdCLEdBQUcsb0JBQW9CLHdCQUF3QixHQUFHLHFCQUFxQix3QkFBd0IsR0FBRyxxQkFBcUIsd0JBQXdCLEdBQUcsNEJBQTRCLHdCQUF3QixHQUFHLGlDQUFpQyx3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsd0JBQXdCLHdCQUF3QixHQUFHLG1CQUFtQix3QkFBd0IsR0FBRyw0QkFBNEIsd0JBQXdCLEdBQUcsNkJBQTZCLHdCQUF3QixHQUFHLHFCQUFxQix3QkFBd0IsR0FBRyxxQkFBcUIsd0JBQXdCLEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLGtCQUFrQix3QkFBd0IsR0FBRyx1QkFBdUIsd0JBQXdCLEdBQUcsb0JBQW9CLHdCQUF3QixHQUFHLGtCQUFrQix3QkFBd0IsR0FBRyxvQkFBb0Isd0JBQXdCLEdBQUcsbUJBQW1CLHdCQUF3QixHQUFHLG9CQUFvQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsNkJBQTZCLHdCQUF3QixHQUFHLG9CQUFvQix3QkFBd0IsR0FBRywyQkFBMkIsd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLDBDQUEwQyx3QkFBd0IsR0FBRyxvQ0FBb0Msd0JBQXdCLEdBQUcsbUJBQW1CLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHVCQUF1Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLDJCQUEyQix3QkFBd0IsR0FBRyxnQ0FBZ0Msd0JBQXdCLEdBQUcsaUZBQWlGLHdCQUF3QixHQUFHLHFEQUFxRCx3QkFBd0IsR0FBRyxxREFBcUQsd0JBQXdCLEdBQUcscURBQXFELHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRyxtQkFBbUIsd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHVCQUF1Qix3QkFBd0IsR0FBRyxtSEFBbUgsd0JBQXdCLEdBQUcsNkJBQTZCLHdCQUF3QixHQUFHLDREQUE0RCx3QkFBd0IsR0FBRyxxQ0FBcUMsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLGtCQUFrQix3QkFBd0IsR0FBRyxrRkFBa0Ysd0JBQXdCLEdBQUcsNEJBQTRCLHdCQUF3QixHQUFHLGlCQUFpQix3QkFBd0IsR0FBRyx5Q0FBeUMsd0JBQXdCLEdBQUcsNENBQTRDLHdCQUF3QixHQUFHLGdEQUFnRCx3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLHFCQUFxQix3QkFBd0IsR0FBRyx3QkFBd0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHdCQUF3Qix3QkFBd0IsR0FBRywrQkFBK0Isd0JBQXdCLEdBQUcsbUJBQW1CLHdCQUF3QixHQUFHLGtEQUFrRCx3QkFBd0IsR0FBRyxrQkFBa0Isd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLG1CQUFtQix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcscUJBQXFCLHdCQUF3QixHQUFHLG1CQUFtQix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsbUJBQW1CLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyxxQkFBcUIsd0JBQXdCLEdBQUcsNEJBQTRCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyw0QkFBNEIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyx3QkFBd0Isd0JBQXdCLEdBQUcsd0JBQXdCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRywyQkFBMkIsd0JBQXdCLEdBQUcsb0JBQW9CLHdCQUF3QixHQUFHLHdCQUF3Qix3QkFBd0IsR0FBRyxpQkFBaUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRyw0QkFBNEIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHdCQUF3Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcscUJBQXFCLHdCQUF3QixHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcsd0JBQXdCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxrQkFBa0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHdCQUF3Qix3QkFBd0IsR0FBRyxpQkFBaUIsd0JBQXdCLEdBQUcsMERBQTBELHdCQUF3QixHQUFHLHVCQUF1Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcsNkJBQTZCLHdCQUF3QixHQUFHLHVCQUF1Qix3QkFBd0IsR0FBRyx1QkFBdUIsd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHFCQUFxQix3QkFBd0IsR0FBRywyQkFBMkIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLHVCQUF1Qix3QkFBd0IsR0FBRyx3QkFBd0Isd0JBQXdCLEdBQUcsOEJBQThCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxtQkFBbUIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsd0JBQXdCLHdCQUF3QixHQUFHLG9CQUFvQix3QkFBd0IsR0FBRyxtQkFBbUIsd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLGdEQUFnRCx3QkFBd0IsR0FBRyw4QkFBOEIsd0JBQXdCLEdBQUcsMkJBQTJCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRyw0QkFBNEIsd0JBQXdCLEdBQUcscUJBQXFCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyxnQ0FBZ0Msd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLHVCQUF1Qix3QkFBd0IsR0FBRyxxQkFBcUIsd0JBQXdCLEdBQUcsd0JBQXdCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyxxQ0FBcUMsd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLG9CQUFvQix3QkFBd0IsR0FBRyxxQkFBcUIsd0JBQXdCLEdBQUcscUJBQXFCLHdCQUF3QixHQUFHLDJDQUEyQyx3QkFBd0IsR0FBRyw0QkFBNEIsd0JBQXdCLEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLDJCQUEyQix3QkFBd0IsR0FBRyxrREFBa0Qsd0JBQXdCLEdBQUcsNERBQTRELHdCQUF3QixHQUFHLGtEQUFrRCx3QkFBd0IsR0FBRyxxREFBcUQsd0JBQXdCLEdBQUcsbURBQW1ELHdCQUF3QixHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRyx1QkFBdUIsd0JBQXdCLEdBQUcsMkJBQTJCLHdCQUF3QixHQUFHLDZCQUE2Qix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsNEJBQTRCLHdCQUF3QixHQUFHLHFCQUFxQix3QkFBd0IsR0FBRyw2QkFBNkIsd0JBQXdCLEdBQUcsb0JBQW9CLHdCQUF3QixHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsdURBQXVELHdCQUF3QixHQUFHLHNEQUFzRCx3QkFBd0IsR0FBRyxxREFBcUQsd0JBQXdCLEdBQUcsd0JBQXdCLHdCQUF3QixHQUFHLG1EQUFtRCx3QkFBd0IsR0FBRyxvREFBb0Qsd0JBQXdCLEdBQUcsOEJBQThCLHdCQUF3QixHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRywyQkFBMkIsd0JBQXdCLEdBQUcsNkJBQTZCLHdCQUF3QixHQUFHLDJCQUEyQix3QkFBd0IsR0FBRyx3QkFBd0Isd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLCtCQUErQix3QkFBd0IsR0FBRyxpQkFBaUIsd0JBQXdCLEdBQUcsd0JBQXdCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRyw0QkFBNEIsd0JBQXdCLEdBQUcsbUNBQW1DLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcscUJBQXFCLHdCQUF3QixHQUFHLHFCQUFxQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsb0JBQW9CLHdCQUF3QixHQUFHLGdDQUFnQyx3QkFBd0IsR0FBRyx5Q0FBeUMsd0JBQXdCLEdBQUcscUJBQXFCLHdCQUF3QixHQUFHLG9CQUFvQix3QkFBd0IsR0FBRyxxQkFBcUIsd0JBQXdCLEdBQUcsOEJBQThCLHdCQUF3QixHQUFHLCtCQUErQix3QkFBd0IsR0FBRywrQkFBK0Isd0JBQXdCLEdBQUcsK0JBQStCLHdCQUF3QixHQUFHLHVCQUF1Qix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsd0JBQXdCLHdCQUF3QixHQUFHLG9CQUFvQix3QkFBd0IsR0FBRyxrQkFBa0Isd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLDJCQUEyQix3QkFBd0IsR0FBRyxvQkFBb0Isd0JBQXdCLEdBQUcsb0JBQW9CLHdCQUF3QixHQUFHLHdCQUF3Qix3QkFBd0IsR0FBRyx3QkFBd0Isd0JBQXdCLEdBQUcsMkJBQTJCLHdCQUF3QixHQUFHLG1CQUFtQix3QkFBd0IsR0FBRyw4QkFBOEIsd0JBQXdCLEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLG1CQUFtQix3QkFBd0IsR0FBRywyQkFBMkIsd0JBQXdCLEdBQUcsa0JBQWtCLHdCQUF3QixHQUFHLDJCQUEyQix3QkFBd0IsR0FBRyx1QkFBdUIsd0JBQXdCLEdBQUcscUJBQXFCLHdCQUF3QixHQUFHLDJCQUEyQix3QkFBd0IsR0FBRyw2QkFBNkIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRywyQkFBMkIsd0JBQXdCLEdBQUcsOEJBQThCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyx3QkFBd0Isd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxxQkFBcUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxxQkFBcUIsd0JBQXdCLEdBQUcsK0JBQStCLHdCQUF3QixHQUFHLDZCQUE2Qix3QkFBd0IsR0FBRyxnQ0FBZ0Msd0JBQXdCLEdBQUcsb0JBQW9CLHdCQUF3QixHQUFHLGdDQUFnQyx3QkFBd0IsR0FBRyxtQ0FBbUMsd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLDBDQUEwQyx3QkFBd0IsR0FBRyxnRkFBZ0Ysd0JBQXdCLEdBQUcsc0VBQXNFLHdCQUF3QixHQUFHLG9CQUFvQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsaURBQWlELHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyxxQkFBcUIsd0JBQXdCLEdBQUcsNEJBQTRCLHdCQUF3QixHQUFHLHVCQUF1Qix3QkFBd0IsR0FBRyw2QkFBNkIsd0JBQXdCLEdBQUcsOEJBQThCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsb0JBQW9CLHdCQUF3QixHQUFHLHdCQUF3Qix3QkFBd0IsR0FBRyxtRUFBbUUsd0JBQXdCLEdBQUcsMkNBQTJDLHdCQUF3QixHQUFHLFlBQVksdUJBQXVCLGVBQWUsZ0JBQWdCLGVBQWUsaUJBQWlCLHFCQUFxQiwyQkFBMkIsY0FBYyxHQUFHLHdEQUF3RCxxQkFBcUIsZ0JBQWdCLGlCQUFpQixjQUFjLHNCQUFzQixlQUFlLEdBQUc7O0FBRW5ua0M7O0FBRUEsd0JBQXdCLG1CQUFPLENBQUMsOEJBQThCO0FBQzlELElBQUksbUJBQU8sQ0FBQyx5Q0FBeUM7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxRQUFRLElBQVU7QUFDbEI7QUFDQTtBQUNBLCtCQUErQixtREFBbUQ7QUFDbEYsU0FBUztBQUNUOzs7Ozs7Ozs7O0FDeEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0c7QUFDdkM7QUFDTDtBQUNzQzs7O0FBRzVGO0FBQzBGO0FBQzFGLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDZFQUFNO0FBQ1IsRUFBRSw4RkFBTTtBQUNSLEVBQUUsdUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLElBQVU7QUFDZCxZQUFZLG1CQUFPLENBQUMsa0RBQXVGO0FBQzNHLGNBQWMsbUJBQU8sQ0FBQyxnREFBSztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0JBQXNCLHFFQUEwRCxFQUFFO0FBQUE7QUFDbEY7QUFDQSxnQkFBZ0IsOEZBQU07QUFDdEIseUJBQXlCLHVHQUFlO0FBQ3hDLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ2UsZ0Y7Ozs7Ozs7O0FDdkNmO0FBQUE7QUFBQSx3Q0FBdUssQ0FBZ0IsMk9BQUcsRUFBQyxDOzs7Ozs7OztBQ0EzTDtBQUFBO0FBQUE7QUFBQTtBQUFvYixDQUFnQiw2ZEFBRyxFQUFDLEM7Ozs7Ozs7O0FDQXhjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFpRztBQUN2QztBQUNMO0FBQ3FDOzs7QUFHMUY7QUFDMEY7QUFDMUYsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsNEVBQU07QUFDUixFQUFFLDZGQUFNO0FBQ1IsRUFBRSxzR0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksSUFBVTtBQUNkLFlBQVksbUJBQU8sQ0FBQyxrREFBdUY7QUFDM0csY0FBYyxtQkFBTyxDQUFDLGdEQUFLO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQkFBc0Isb0VBQXlELEVBQUU7QUFBQTtBQUNqRjtBQUNBLGdCQUFnQiw2RkFBTTtBQUN0Qix5QkFBeUIsc0dBQWU7QUFDeEMsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDZSxnRjs7Ozs7Ozs7QUN2Q2Y7QUFBQTtBQUFBLHdDQUFzSyxDQUFnQiwwT0FBRyxFQUFDLEM7Ozs7Ozs7O0FDQTFMO0FBQUE7QUFBQTtBQUFBO0FBQXVZLENBQWdCLHNiQUFHLEVBQUMsQzs7Ozs7Ozs7QUNBM1o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStGO0FBQ3ZDO0FBQ0w7QUFDc0M7OztBQUd6RjtBQUMwRjtBQUMxRixnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSwwRUFBTTtBQUNSLEVBQUUsMkZBQU07QUFDUixFQUFFLG9HQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxJQUFVO0FBQ2QsWUFBWSxtQkFBTyxDQUFDLGtEQUF1RjtBQUMzRyxjQUFjLG1CQUFPLENBQUMsZ0RBQUs7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNCQUFzQixrRUFBdUQsRUFBRTtBQUFBO0FBQy9FO0FBQ0EsZ0JBQWdCLDJGQUFNO0FBQ3RCLHlCQUF5QixvR0FBZTtBQUN4QyxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNlLGdGOzs7Ozs7OztBQ3ZDZjtBQUFBO0FBQUEsd0NBQW9LLENBQWdCLHdPQUFHLEVBQUMsQzs7Ozs7Ozs7QUNBeEw7QUFBQTtBQUFBO0FBQUE7QUFBaWIsQ0FBZ0IsMGRBQUcsRUFBQyxDOzs7Ozs7OztBQ0FyYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQTJGO0FBQzNCO0FBQ0w7OztBQUczRDtBQUMwRjtBQUMxRixnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSxrRkFBTTtBQUNSLEVBQUUsdUZBQU07QUFDUixFQUFFLGdHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxJQUFVO0FBQ2QsWUFBWSxtQkFBTyxDQUFDLGtEQUF1RjtBQUMzRyxjQUFjLG1CQUFPLENBQUMsZ0RBQUs7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNCQUFzQiw4REFBbUQsRUFBRTtBQUFBO0FBQzNFO0FBQ0EsZ0JBQWdCLHVGQUFNO0FBQ3RCLHlCQUF5QixnR0FBZTtBQUN4QyxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNlLGdGOzs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQTRLLENBQWdCLGdQQUFHLEVBQUMsQzs7Ozs7Ozs7QUNBaE07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXdGO0FBQzNCO0FBQ0w7QUFDYTs7O0FBR3JFO0FBQzBGO0FBQzFGLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLCtFQUFNO0FBQ1IsRUFBRSxvRkFBTTtBQUNSLEVBQUUsNkZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLElBQVU7QUFDZCxZQUFZLG1CQUFPLENBQUMsa0RBQXVGO0FBQzNHLGNBQWMsbUJBQU8sQ0FBQyxnREFBSztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0JBQXNCLDJEQUFnRCxFQUFFO0FBQUE7QUFDeEU7QUFDQSxnQkFBZ0Isb0ZBQU07QUFDdEIseUJBQXlCLDZGQUFlO0FBQ3hDLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ2UsZ0Y7Ozs7Ozs7O0FDdkNmO0FBQUE7QUFBQSx3Q0FBeUssQ0FBZ0IsNk9BQUcsRUFBQyxDOzs7Ozs7OztBQ0E3TDtBQUFBO0FBQUE7QUFBQTtBQUFrWCxDQUFnQixpYUFBRyxFQUFDLEM7Ozs7Ozs7O0FDQXRZO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFzRztBQUN2QztBQUNMO0FBQ3NDOzs7QUFHaEc7QUFDMEY7QUFDMUYsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsaUZBQU07QUFDUixFQUFFLGtHQUFNO0FBQ1IsRUFBRSwyR0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksSUFBVTtBQUNkLFlBQVksbUJBQU8sQ0FBQyxrREFBdUY7QUFDM0csY0FBYyxtQkFBTyxDQUFDLGdEQUFLO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQkFBc0IseUVBQThELEVBQUU7QUFBQTtBQUN0RjtBQUNBLGdCQUFnQixrR0FBTTtBQUN0Qix5QkFBeUIsMkdBQWU7QUFDeEMsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDZSxnRjs7Ozs7Ozs7QUN2Q2Y7QUFBQTtBQUFBLHdDQUEySyxDQUFnQiwrT0FBRyxFQUFDLEM7Ozs7Ozs7O0FDQS9MO0FBQUE7QUFBQTtBQUFBO0FBQXdiLENBQWdCLGllQUFHLEVBQUMsQzs7Ozs7Ozs7QUNBNWM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlHO0FBQ3ZDO0FBQ0w7QUFDc0M7OztBQUduRztBQUMwRjtBQUMxRixnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSxvRkFBTTtBQUNSLEVBQUUscUdBQU07QUFDUixFQUFFLDhHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxJQUFVO0FBQ2QsWUFBWSxtQkFBTyxDQUFDLGtEQUF1RjtBQUMzRyxjQUFjLG1CQUFPLENBQUMsZ0RBQUs7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNCQUFzQiw0RUFBaUUsRUFBRTtBQUFBO0FBQ3pGO0FBQ0EsZ0JBQWdCLHFHQUFNO0FBQ3RCLHlCQUF5Qiw4R0FBZTtBQUN4QyxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNlLGdGOzs7Ozs7OztBQ3ZDZjtBQUFBO0FBQUEsd0NBQThLLENBQWdCLGtQQUFHLEVBQUMsQzs7Ozs7Ozs7QUNBbE07QUFBQTtBQUFBO0FBQUE7QUFBMmIsQ0FBZ0Isb2VBQUcsRUFBQyxDOzs7Ozs7OztBQ0EvYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7O0FDQUEseUVBQTJCLG1CQUFPLENBQUMsNENBQStDO0FBQ2xGOzs7QUFHQTtBQUNBLGNBQWMsUUFBUyxzQkFBc0IseU5BQXlOLHlDQUF5Qyw2RUFBNkUscUVBQXFFLDhDQUE4QyxzQ0FBc0MsS0FBSyxtQkFBbUIsZ0ZBQWdGLHdFQUF3RSxrREFBa0QsMENBQTBDLEtBQUssV0FBVyxnRkFBZ0Ysd0VBQXdFLGtEQUFrRCwwQ0FBMEMsS0FBSyxXQUFXLGlEQUFpRCx5Q0FBeUMsS0FBSyxHQUFHLHVCQUF1Qix5Q0FBeUMsNkVBQTZFLHFFQUFxRSw4Q0FBOEMsc0NBQXNDLEtBQUssbUJBQW1CLGdGQUFnRix3RUFBd0Usa0RBQWtELDBDQUEwQyxLQUFLLFdBQVcsZ0ZBQWdGLHdFQUF3RSxrREFBa0QsMENBQTBDLEtBQUssV0FBVyxpREFBaUQseUNBQXlDLEtBQUssR0FBRyxhQUFhLG1DQUFtQywyQkFBMkIsNENBQTRDLG9DQUFvQyxHQUFHLDhCQUE4Qix5QkFBeUIsaUJBQWlCLEtBQUssbUJBQW1CLGlCQUFpQixLQUFLLEdBQUcsc0JBQXNCLHlCQUF5QixpQkFBaUIsS0FBSyxtQkFBbUIsaUJBQWlCLEtBQUssR0FBRyxZQUFZLGtDQUFrQywwQkFBMEIsR0FBRyxnSEFBZ0gsVUFBVSwwQ0FBMEMsa0NBQWtDLEtBQUssV0FBVyxtREFBbUQsMkNBQTJDLEtBQUssVUFBVSwwQ0FBMEMsa0NBQWtDLEtBQUssR0FBRyxzQkFBc0IsVUFBVSwwQ0FBMEMsa0NBQWtDLEtBQUssV0FBVyxtREFBbUQsMkNBQTJDLEtBQUssVUFBVSwwQ0FBMEMsa0NBQWtDLEtBQUssR0FBRyxZQUFZLGtDQUFrQywwQkFBMEIsR0FBRyxtQ0FBbUMsVUFBVSwwQ0FBMEMsa0NBQWtDLEtBQUssV0FBVyxnREFBZ0Qsd0NBQXdDLEtBQUssV0FBVyxnREFBZ0Qsd0NBQXdDLEtBQUssV0FBVyxnREFBZ0Qsd0NBQXdDLEtBQUssV0FBVyxnREFBZ0Qsd0NBQXdDLEtBQUssV0FBVyxnREFBZ0Qsd0NBQXdDLEtBQUssVUFBVSwwQ0FBMEMsa0NBQWtDLEtBQUssR0FBRywyQkFBMkIsVUFBVSwwQ0FBMEMsa0NBQWtDLEtBQUssV0FBVyxnREFBZ0Qsd0NBQXdDLEtBQUssV0FBVyxnREFBZ0Qsd0NBQXdDLEtBQUssV0FBVyxnREFBZ0Qsd0NBQXdDLEtBQUssV0FBVyxnREFBZ0Qsd0NBQXdDLEtBQUssV0FBVyxnREFBZ0Qsd0NBQXdDLEtBQUssVUFBVSwwQ0FBMEMsa0NBQWtDLEtBQUssR0FBRyxpQkFBaUIsdUNBQXVDLCtCQUErQixHQUFHLDhCQUE4QixpQkFBaUIsOENBQThDLHNDQUFzQyxLQUFLLDJDQUEyQyxrREFBa0QsMENBQTBDLEtBQUssbUNBQW1DLGlEQUFpRCx5Q0FBeUMsS0FBSyxHQUFHLHNCQUFzQixpQkFBaUIsOENBQThDLHNDQUFzQyxLQUFLLDJDQUEyQyxrREFBa0QsMENBQTBDLEtBQUssbUNBQW1DLGlEQUFpRCx5Q0FBeUMsS0FBSyxHQUFHLFlBQVksa0NBQWtDLDBCQUEwQixHQUFHLGtDQUFrQyxRQUFRLHVDQUF1QywrQkFBK0IsS0FBSyxZQUFZLHlEQUF5RCxpREFBaUQsS0FBSyxhQUFhLHVEQUF1RCwrQ0FBK0MsS0FBSyxhQUFhLHlEQUF5RCxpREFBaUQsS0FBSyxhQUFhLHVEQUF1RCwrQ0FBK0MsS0FBSyxXQUFXLHVDQUF1QywrQkFBK0IsS0FBSyxHQUFHLDBCQUEwQixRQUFRLHVDQUF1QywrQkFBK0IsS0FBSyxZQUFZLHlEQUF5RCxpREFBaUQsS0FBSyxhQUFhLHVEQUF1RCwrQ0FBK0MsS0FBSyxhQUFhLHlEQUF5RCxpREFBaUQsS0FBSyxhQUFhLHVEQUF1RCwrQ0FBK0MsS0FBSyxXQUFXLHVDQUF1QywrQkFBK0IsS0FBSyxHQUFHLGdCQUFnQixtREFBbUQsMkNBQTJDLHNDQUFzQyw4QkFBOEIsR0FBRyw4QkFBOEIsU0FBUyxrREFBa0QsMENBQTBDLEtBQUssV0FBVyxtREFBbUQsMkNBQTJDLEtBQUssV0FBVyxpREFBaUQseUNBQXlDLEtBQUssV0FBVyxrREFBa0QsMENBQTBDLEtBQUssVUFBVSxpREFBaUQseUNBQXlDLEtBQUssR0FBRyxzQkFBc0IsU0FBUyxrREFBa0QsMENBQTBDLEtBQUssV0FBVyxtREFBbUQsMkNBQTJDLEtBQUssV0FBVyxpREFBaUQseUNBQXlDLEtBQUssV0FBVyxrREFBa0QsMENBQTBDLEtBQUssVUFBVSxpREFBaUQseUNBQXlDLEtBQUssR0FBRyxZQUFZLHlDQUF5QyxpQ0FBaUMsa0NBQWtDLDBCQUEwQixHQUFHLDZCQUE2QixVQUFVLDBDQUEwQyxrQ0FBa0MsS0FBSyxtQkFBbUIseUVBQXlFLGlFQUFpRSxLQUFLLG1DQUFtQyx3RUFBd0UsZ0VBQWdFLEtBQUssMkJBQTJCLHlFQUF5RSxpRUFBaUUsS0FBSyxVQUFVLDBDQUEwQyxrQ0FBa0MsS0FBSyxHQUFHLHFCQUFxQixVQUFVLDBDQUEwQyxrQ0FBa0MsS0FBSyxtQkFBbUIseUVBQXlFLGlFQUFpRSxLQUFLLG1DQUFtQyx3RUFBd0UsZ0VBQWdFLEtBQUssMkJBQTJCLHlFQUF5RSxpRUFBaUUsS0FBSyxVQUFVLDBDQUEwQyxrQ0FBa0MsS0FBSyxHQUFHLFdBQVcsaUNBQWlDLHlCQUF5QixHQUFHLGlIQUFpSCxVQUFVLDhDQUE4QyxzQ0FBc0MsS0FBSyxXQUFXLDBFQUEwRSxrRUFBa0UsS0FBSyxXQUFXLHdFQUF3RSxnRUFBZ0UsS0FBSyxXQUFXLDBFQUEwRSxrRUFBa0UsS0FBSyxXQUFXLHdFQUF3RSxnRUFBZ0UsS0FBSyxXQUFXLHlFQUF5RSxpRUFBaUUsS0FBSyxVQUFVLDhDQUE4QyxzQ0FBc0MsS0FBSyxHQUFHLHVCQUF1QixVQUFVLDhDQUE4QyxzQ0FBc0MsS0FBSyxXQUFXLDBFQUEwRSxrRUFBa0UsS0FBSyxXQUFXLHdFQUF3RSxnRUFBZ0UsS0FBSyxXQUFXLDBFQUEwRSxrRUFBa0UsS0FBSyxXQUFXLHdFQUF3RSxnRUFBZ0UsS0FBSyxXQUFXLHlFQUF5RSxpRUFBaUUsS0FBSyxVQUFVLDhDQUE4QyxzQ0FBc0MsS0FBSyxHQUFHLGFBQWEsbUNBQW1DLDJCQUEyQixHQUFHLDhCQUE4QiwyQkFBMkIsOENBQThDLHNDQUFzQyxLQUFLLGFBQWEseURBQXlELGlEQUFpRCxLQUFLLGFBQWEsdURBQXVELCtDQUErQyxLQUFLLGFBQWEsMkRBQTJELG1EQUFtRCxLQUFLLGFBQWEsMkRBQTJELG1EQUFtRCxLQUFLLGFBQWEsK0RBQStELHVEQUF1RCxLQUFLLGFBQWEsK0RBQStELHVEQUF1RCxLQUFLLGFBQWEsbUVBQW1FLDJEQUEyRCxLQUFLLEdBQUcsc0JBQXNCLDJCQUEyQiw4Q0FBOEMsc0NBQXNDLEtBQUssYUFBYSx5REFBeUQsaURBQWlELEtBQUssYUFBYSx1REFBdUQsK0NBQStDLEtBQUssYUFBYSwyREFBMkQsbURBQW1ELEtBQUssYUFBYSwyREFBMkQsbURBQW1ELEtBQUssYUFBYSwrREFBK0QsdURBQXVELEtBQUssYUFBYSwrREFBK0QsdURBQXVELEtBQUssYUFBYSxtRUFBbUUsMkRBQTJELEtBQUssR0FBRyxZQUFZLGtDQUFrQywwQkFBMEIscUNBQXFDLDZCQUE2QixHQUFHLGtDQUFrQyxRQUFRLGtDQUFrQywwQkFBMEIsS0FBSyxXQUFXLG9DQUFvQyw0QkFBNEIsS0FBSyxXQUFXLGtDQUFrQywwQkFBMEIsS0FBSyxXQUFXLG9DQUFvQyw0QkFBNEIsS0FBSyxXQUFXLGtDQUFrQywwQkFBMEIsS0FBSyxHQUFHLDBCQUEwQixRQUFRLGtDQUFrQywwQkFBMEIsS0FBSyxXQUFXLG9DQUFvQyw0QkFBNEIsS0FBSyxXQUFXLGtDQUFrQywwQkFBMEIsS0FBSyxXQUFXLG9DQUFvQyw0QkFBNEIsS0FBSyxXQUFXLGtDQUFrQywwQkFBMEIsS0FBSyxHQUFHLGdCQUFnQixzQ0FBc0MsOEJBQThCLHFDQUFxQyw2QkFBNkIsbURBQW1ELDJDQUEyQyxHQUFHLGlDQUFpQyxpREFBaUQsNkVBQTZFLHFFQUFxRSxLQUFLLFVBQVUsaUJBQWlCLGdEQUFnRCx3Q0FBd0MsS0FBSyxXQUFXLGdEQUFnRCx3Q0FBd0MsS0FBSyxXQUFXLGdEQUFnRCx3Q0FBd0MsS0FBSyxXQUFXLGlCQUFpQixtREFBbUQsMkNBQTJDLEtBQUssV0FBVyxtREFBbUQsMkNBQTJDLEtBQUssVUFBVSxpQkFBaUIsMENBQTBDLGtDQUFrQyxLQUFLLEdBQUcseUJBQXlCLGlEQUFpRCw2RUFBNkUscUVBQXFFLEtBQUssVUFBVSxpQkFBaUIsZ0RBQWdELHdDQUF3QyxLQUFLLFdBQVcsZ0RBQWdELHdDQUF3QyxLQUFLLFdBQVcsZ0RBQWdELHdDQUF3QyxLQUFLLFdBQVcsaUJBQWlCLG1EQUFtRCwyQ0FBMkMsS0FBSyxXQUFXLG1EQUFtRCwyQ0FBMkMsS0FBSyxVQUFVLGlCQUFpQiwwQ0FBMEMsa0NBQWtDLEtBQUssR0FBRyxlQUFlLHNDQUFzQyw4QkFBOEIscUNBQXFDLDZCQUE2QixHQUFHLHFDQUFxQyx5Q0FBeUMsNkVBQTZFLHFFQUFxRSxLQUFLLFVBQVUsaUJBQWlCLG9EQUFvRCw0Q0FBNEMsS0FBSyxXQUFXLGlCQUFpQixpREFBaUQseUNBQXlDLEtBQUssV0FBVyxrREFBa0QsMENBQTBDLEtBQUssV0FBVyxnREFBZ0Qsd0NBQXdDLEtBQUssVUFBVSw4Q0FBOEMsc0NBQXNDLEtBQUssR0FBRyw2QkFBNkIseUNBQXlDLDZFQUE2RSxxRUFBcUUsS0FBSyxVQUFVLGlCQUFpQixvREFBb0QsNENBQTRDLEtBQUssV0FBVyxpQkFBaUIsaURBQWlELHlDQUF5QyxLQUFLLFdBQVcsa0RBQWtELDBDQUEwQyxLQUFLLFdBQVcsZ0RBQWdELHdDQUF3QyxLQUFLLFVBQVUsOENBQThDLHNDQUFzQyxLQUFLLEdBQUcsbUJBQW1CLHlDQUF5QyxpQ0FBaUMsR0FBRyxxQ0FBcUMseUNBQXlDLDZFQUE2RSxxRUFBcUUsS0FBSyxVQUFVLGlCQUFpQixvREFBb0QsNENBQTRDLEtBQUssV0FBVyxpQkFBaUIsaURBQWlELHlDQUF5QyxLQUFLLFdBQVcsa0RBQWtELDBDQUEwQyxLQUFLLFdBQVcsZ0RBQWdELHdDQUF3QyxLQUFLLFVBQVUsOENBQThDLHNDQUFzQyxLQUFLLEdBQUcsNkJBQTZCLHlDQUF5Qyw2RUFBNkUscUVBQXFFLEtBQUssVUFBVSxpQkFBaUIsb0RBQW9ELDRDQUE0QyxLQUFLLFdBQVcsaUJBQWlCLGlEQUFpRCx5Q0FBeUMsS0FBSyxXQUFXLGtEQUFrRCwwQ0FBMEMsS0FBSyxXQUFXLGdEQUFnRCx3Q0FBd0MsS0FBSyxVQUFVLDhDQUE4QyxzQ0FBc0MsS0FBSyxHQUFHLG1CQUFtQix5Q0FBeUMsaUNBQWlDLEdBQUcsc0NBQXNDLHlDQUF5Qyw2RUFBNkUscUVBQXFFLEtBQUssWUFBWSxpQkFBaUIsbURBQW1ELDJDQUEyQyxLQUFLLFdBQVcsaUJBQWlCLGtEQUFrRCwwQ0FBMEMsS0FBSyxXQUFXLGlEQUFpRCx5Q0FBeUMsS0FBSyxXQUFXLGlEQUFpRCx5Q0FBeUMsS0FBSyxVQUFVLDhDQUE4QyxzQ0FBc0MsS0FBSyxHQUFHLDhCQUE4Qix5Q0FBeUMsNkVBQTZFLHFFQUFxRSxLQUFLLFlBQVksaUJBQWlCLG1EQUFtRCwyQ0FBMkMsS0FBSyxXQUFXLGlCQUFpQixrREFBa0QsMENBQTBDLEtBQUssV0FBVyxpREFBaUQseUNBQXlDLEtBQUssV0FBVyxpREFBaUQseUNBQXlDLEtBQUssVUFBVSw4Q0FBOEMsc0NBQXNDLEtBQUssR0FBRyxvQkFBb0IsMENBQTBDLGtDQUFrQyxHQUFHLG1DQUFtQyx5Q0FBeUMsNkVBQTZFLHFFQUFxRSxLQUFLLFlBQVksaUJBQWlCLG1EQUFtRCwyQ0FBMkMsS0FBSyxXQUFXLGlCQUFpQixrREFBa0QsMENBQTBDLEtBQUssV0FBVyxpREFBaUQseUNBQXlDLEtBQUssV0FBVyxpREFBaUQseUNBQXlDLEtBQUssVUFBVSw4Q0FBOEMsc0NBQXNDLEtBQUssR0FBRywyQkFBMkIseUNBQXlDLDZFQUE2RSxxRUFBcUUsS0FBSyxZQUFZLGlCQUFpQixtREFBbUQsMkNBQTJDLEtBQUssV0FBVyxpQkFBaUIsa0RBQWtELDBDQUEwQyxLQUFLLFdBQVcsaURBQWlELHlDQUF5QyxLQUFLLFdBQVcsaURBQWlELHlDQUF5QyxLQUFLLFVBQVUsOENBQThDLHNDQUFzQyxLQUFLLEdBQUcsaUJBQWlCLHVDQUF1QywrQkFBK0IsR0FBRyxrQ0FBa0MsU0FBUyxnREFBZ0Qsd0NBQXdDLEtBQUssbUJBQW1CLGlCQUFpQixnREFBZ0Qsd0NBQXdDLEtBQUssVUFBVSxpQkFBaUIsZ0RBQWdELHdDQUF3QyxLQUFLLEdBQUcsMEJBQTBCLFNBQVMsZ0RBQWdELHdDQUF3QyxLQUFLLG1CQUFtQixpQkFBaUIsZ0RBQWdELHdDQUF3QyxLQUFLLFVBQVUsaUJBQWlCLGdEQUFnRCx3Q0FBd0MsS0FBSyxHQUFHLGdCQUFnQixzQ0FBc0MsOEJBQThCLHNDQUFzQyw4QkFBOEIsR0FBRyxzQ0FBc0MsU0FBUyxpREFBaUQseUNBQXlDLEtBQUssbUJBQW1CLGlCQUFpQixrREFBa0QsMENBQTBDLEtBQUssVUFBVSxpQkFBaUIsbURBQW1ELDJDQUEyQyxLQUFLLEdBQUcsOEJBQThCLFNBQVMsaURBQWlELHlDQUF5QyxLQUFLLG1CQUFtQixpQkFBaUIsa0RBQWtELDBDQUEwQyxLQUFLLFVBQVUsaUJBQWlCLG1EQUFtRCwyQ0FBMkMsS0FBSyxHQUFHLG9CQUFvQiwwQ0FBMEMsa0NBQWtDLEdBQUcsc0NBQXNDLFNBQVMsaUJBQWlCLGlEQUFpRCx5Q0FBeUMsS0FBSyxVQUFVLGlCQUFpQixvREFBb0QsNENBQTRDLEtBQUssR0FBRyw4QkFBOEIsU0FBUyxpQkFBaUIsaURBQWlELHlDQUF5QyxLQUFLLFVBQVUsaUJBQWlCLG9EQUFvRCw0Q0FBNEMsS0FBSyxHQUFHLG9CQUFvQiwwQ0FBMEMsa0NBQWtDLEdBQUcsdUNBQXVDLFNBQVMsaUJBQWlCLGtEQUFrRCwwQ0FBMEMsS0FBSyxVQUFVLGlCQUFpQixtREFBbUQsMkNBQTJDLEtBQUssR0FBRywrQkFBK0IsU0FBUyxpQkFBaUIsa0RBQWtELDBDQUEwQyxLQUFLLFVBQVUsaUJBQWlCLG1EQUFtRCwyQ0FBMkMsS0FBSyxHQUFHLHFCQUFxQiwyQ0FBMkMsbUNBQW1DLEdBQUcsb0NBQW9DLFNBQVMsa0RBQWtELDBDQUEwQyxLQUFLLG1CQUFtQixpQkFBaUIsaURBQWlELHlDQUF5QyxLQUFLLFVBQVUsaUJBQWlCLG9EQUFvRCw0Q0FBNEMsS0FBSyxHQUFHLDRCQUE0QixTQUFTLGtEQUFrRCwwQ0FBMEMsS0FBSyxtQkFBbUIsaUJBQWlCLGlEQUFpRCx5Q0FBeUMsS0FBSyxVQUFVLGlCQUFpQixvREFBb0QsNENBQTRDLEtBQUssR0FBRyxrQkFBa0Isd0NBQXdDLGdDQUFnQyxHQUFHLCtCQUErQixVQUFVLGlCQUFpQixLQUFLLFVBQVUsaUJBQWlCLEtBQUssR0FBRyx1QkFBdUIsVUFBVSxpQkFBaUIsS0FBSyxVQUFVLGlCQUFpQixLQUFLLEdBQUcsYUFBYSxtQ0FBbUMsMkJBQTJCLEdBQUcsMkJBQTJCLFVBQVUsaUJBQWlCLDBDQUEwQyxLQUFLLFVBQVUsaUJBQWlCLHNDQUFzQyxLQUFLLEdBQUcsaUJBQWlCLCtCQUErQixHQUFHLHNDQUFzQyxVQUFVLGlCQUFpQixvREFBb0QsNENBQTRDLEtBQUssVUFBVSxpQkFBaUIsOENBQThDLHNDQUFzQyxLQUFLLEdBQUcsOEJBQThCLFVBQVUsaUJBQWlCLG9EQUFvRCw0Q0FBNEMsS0FBSyxVQUFVLGlCQUFpQiw4Q0FBOEMsc0NBQXNDLEtBQUssR0FBRyxvQkFBb0IsMENBQTBDLGtDQUFrQyxHQUFHLG1DQUFtQyxVQUFVLGlCQUFpQixrREFBa0QsMENBQTBDLEtBQUssVUFBVSxpQkFBaUIsOENBQThDLHNDQUFzQyxLQUFLLEdBQUcsMkJBQTJCLFVBQVUsaUJBQWlCLGtEQUFrRCwwQ0FBMEMsS0FBSyxVQUFVLGlCQUFpQiw4Q0FBOEMsc0NBQXNDLEtBQUssR0FBRyxpQkFBaUIsdUNBQXVDLCtCQUErQixHQUFHLHNDQUFzQyxVQUFVLGlCQUFpQixvREFBb0QsNENBQTRDLEtBQUssVUFBVSxpQkFBaUIsOENBQThDLHNDQUFzQyxLQUFLLEdBQUcsOEJBQThCLFVBQVUsaUJBQWlCLG9EQUFvRCw0Q0FBNEMsS0FBSyxVQUFVLGlCQUFpQiw4Q0FBOEMsc0NBQXNDLEtBQUssR0FBRyxvQkFBb0IsMENBQTBDLGtDQUFrQyxHQUFHLG9DQUFvQyxVQUFVLGlCQUFpQixpREFBaUQseUNBQXlDLEtBQUssVUFBVSxpQkFBaUIsOENBQThDLHNDQUFzQyxLQUFLLEdBQUcsNEJBQTRCLFVBQVUsaUJBQWlCLGlEQUFpRCx5Q0FBeUMsS0FBSyxVQUFVLGlCQUFpQiw4Q0FBOEMsc0NBQXNDLEtBQUssR0FBRyxrQkFBa0Isd0NBQXdDLGdDQUFnQyxHQUFHLHVDQUF1QyxVQUFVLGlCQUFpQixtREFBbUQsMkNBQTJDLEtBQUssVUFBVSxpQkFBaUIsOENBQThDLHNDQUFzQyxLQUFLLEdBQUcsK0JBQStCLFVBQVUsaUJBQWlCLG1EQUFtRCwyQ0FBMkMsS0FBSyxVQUFVLGlCQUFpQiw4Q0FBOEMsc0NBQXNDLEtBQUssR0FBRyxxQkFBcUIsMkNBQTJDLG1DQUFtQyxHQUFHLGlDQUFpQyxVQUFVLGlCQUFpQixpREFBaUQseUNBQXlDLEtBQUssVUFBVSxpQkFBaUIsOENBQThDLHNDQUFzQyxLQUFLLEdBQUcseUJBQXlCLFVBQVUsaUJBQWlCLGlEQUFpRCx5Q0FBeUMsS0FBSyxVQUFVLGlCQUFpQiw4Q0FBOEMsc0NBQXNDLEtBQUssR0FBRyxlQUFlLHFDQUFxQyw2QkFBNkIsR0FBRyxvQ0FBb0MsVUFBVSxpQkFBaUIsbURBQW1ELDJDQUEyQyxLQUFLLFVBQVUsaUJBQWlCLDhDQUE4QyxzQ0FBc0MsS0FBSyxHQUFHLDRCQUE0QixVQUFVLGlCQUFpQixtREFBbUQsMkNBQTJDLEtBQUssVUFBVSxpQkFBaUIsOENBQThDLHNDQUFzQyxLQUFLLEdBQUcsa0JBQWtCLHdDQUF3QyxnQ0FBZ0MsR0FBRyxnQ0FBZ0MsVUFBVSxpQkFBaUIsS0FBSyxVQUFVLGlCQUFpQixLQUFLLEdBQUcsd0JBQXdCLFVBQVUsaUJBQWlCLEtBQUssVUFBVSxpQkFBaUIsS0FBSyxHQUFHLGNBQWMsb0NBQW9DLDRCQUE0QixHQUFHLG9DQUFvQyxVQUFVLGlCQUFpQixLQUFLLFVBQVUsaUJBQWlCLGlEQUFpRCx5Q0FBeUMsS0FBSyxHQUFHLDRCQUE0QixVQUFVLGlCQUFpQixLQUFLLFVBQVUsaUJBQWlCLGlEQUFpRCx5Q0FBeUMsS0FBSyxHQUFHLGtCQUFrQix3Q0FBd0MsZ0NBQWdDLEdBQUcsdUNBQXVDLFVBQVUsaUJBQWlCLEtBQUssVUFBVSxpQkFBaUIsbURBQW1ELDJDQUEyQyxLQUFLLEdBQUcsK0JBQStCLFVBQVUsaUJBQWlCLEtBQUssVUFBVSxpQkFBaUIsbURBQW1ELDJDQUEyQyxLQUFLLEdBQUcscUJBQXFCLDJDQUEyQyxtQ0FBbUMsR0FBRyxvQ0FBb0MsVUFBVSxpQkFBaUIsS0FBSyxVQUFVLGlCQUFpQixrREFBa0QsMENBQTBDLEtBQUssR0FBRyw0QkFBNEIsVUFBVSxpQkFBaUIsS0FBSyxVQUFVLGlCQUFpQixrREFBa0QsMENBQTBDLEtBQUssR0FBRyxrQkFBa0Isd0NBQXdDLGdDQUFnQyxHQUFHLHVDQUF1QyxVQUFVLGlCQUFpQixLQUFLLFVBQVUsaUJBQWlCLG9EQUFvRCw0Q0FBNEMsS0FBSyxHQUFHLCtCQUErQixVQUFVLGlCQUFpQixLQUFLLFVBQVUsaUJBQWlCLG9EQUFvRCw0Q0FBNEMsS0FBSyxHQUFHLHFCQUFxQiwyQ0FBMkMsbUNBQW1DLEdBQUcscUNBQXFDLFVBQVUsaUJBQWlCLEtBQUssVUFBVSxpQkFBaUIsaURBQWlELHlDQUF5QyxLQUFLLEdBQUcsNkJBQTZCLFVBQVUsaUJBQWlCLEtBQUssVUFBVSxpQkFBaUIsaURBQWlELHlDQUF5QyxLQUFLLEdBQUcsbUJBQW1CLHlDQUF5QyxpQ0FBaUMsR0FBRyx3Q0FBd0MsVUFBVSxpQkFBaUIsS0FBSyxVQUFVLGlCQUFpQixtREFBbUQsMkNBQTJDLEtBQUssR0FBRyxnQ0FBZ0MsVUFBVSxpQkFBaUIsS0FBSyxVQUFVLGlCQUFpQixtREFBbUQsMkNBQTJDLEtBQUssR0FBRyxzQkFBc0IsNENBQTRDLG9DQUFvQyxHQUFHLGtDQUFrQyxVQUFVLGlCQUFpQixLQUFLLFVBQVUsaUJBQWlCLGtEQUFrRCwwQ0FBMEMsS0FBSyxHQUFHLDBCQUEwQixVQUFVLGlCQUFpQixLQUFLLFVBQVUsaUJBQWlCLGtEQUFrRCwwQ0FBMEMsS0FBSyxHQUFHLGdCQUFnQixzQ0FBc0MsOEJBQThCLEdBQUcscUNBQXFDLFVBQVUsaUJBQWlCLEtBQUssVUFBVSxpQkFBaUIsb0RBQW9ELDRDQUE0QyxLQUFLLEdBQUcsNkJBQTZCLFVBQVUsaUJBQWlCLEtBQUssVUFBVSxpQkFBaUIsb0RBQW9ELDRDQUE0QyxLQUFLLEdBQUcsbUJBQW1CLHlDQUF5QyxpQ0FBaUMsR0FBRyw2QkFBNkIsVUFBVSxvSEFBb0gscUdBQXFHLGtEQUFrRCwwQ0FBMEMsS0FBSyxXQUFXLHdIQUF3SCxnSEFBZ0gsa0RBQWtELDBDQUEwQyxLQUFLLFdBQVcsd0hBQXdILGdIQUFnSCxpREFBaUQseUNBQXlDLEtBQUssV0FBVywwSEFBMEgsa0hBQWtILGlEQUFpRCx5Q0FBeUMsS0FBSyxVQUFVLGlIQUFpSCxrR0FBa0csaURBQWlELHlDQUF5QyxLQUFLLEdBQUcscUJBQXFCLFVBQVUsb0hBQW9ILHFHQUFxRyxrREFBa0QsMENBQTBDLEtBQUssV0FBVyx3SEFBd0gsZ0hBQWdILGtEQUFrRCwwQ0FBMEMsS0FBSyxXQUFXLHdIQUF3SCxnSEFBZ0gsaURBQWlELHlDQUF5QyxLQUFLLFdBQVcsMEhBQTBILGtIQUFrSCxpREFBaUQseUNBQXlDLEtBQUssVUFBVSxpSEFBaUgsa0dBQWtHLGlEQUFpRCx5Q0FBeUMsS0FBSyxHQUFHLG9CQUFvQix5Q0FBeUMsaUNBQWlDLGlDQUFpQyx5QkFBeUIsR0FBRyxnQ0FBZ0MsVUFBVSxxRUFBcUUsNkRBQTZELGlEQUFpRCx5Q0FBeUMsaUJBQWlCLEtBQUssV0FBVyxzRUFBc0UsOERBQThELGlEQUFpRCx5Q0FBeUMsS0FBSyxXQUFXLHFFQUFxRSw2REFBNkQsaUJBQWlCLEtBQUssV0FBVyxxRUFBcUUsNkRBQTZELEtBQUssVUFBVSw0Q0FBNEMsb0NBQW9DLEtBQUssR0FBRyx3QkFBd0IsVUFBVSxxRUFBcUUsNkRBQTZELGlEQUFpRCx5Q0FBeUMsaUJBQWlCLEtBQUssV0FBVyxzRUFBc0UsOERBQThELGlEQUFpRCx5Q0FBeUMsS0FBSyxXQUFXLHFFQUFxRSw2REFBNkQsaUJBQWlCLEtBQUssV0FBVyxxRUFBcUUsNkRBQTZELEtBQUssVUFBVSw0Q0FBNEMsb0NBQW9DLEtBQUssR0FBRyxjQUFjLG9EQUFvRCw0Q0FBNEMsb0NBQW9DLDRCQUE0QixHQUFHLGdDQUFnQyxVQUFVLHFFQUFxRSw2REFBNkQsaURBQWlELHlDQUF5QyxpQkFBaUIsS0FBSyxXQUFXLHNFQUFzRSw4REFBOEQsaURBQWlELHlDQUF5QyxLQUFLLFdBQVcscUVBQXFFLDZEQUE2RCxpQkFBaUIsS0FBSyxXQUFXLHFFQUFxRSw2REFBNkQsS0FBSyxVQUFVLDRDQUE0QyxvQ0FBb0MsS0FBSyxHQUFHLHdCQUF3QixVQUFVLHFFQUFxRSw2REFBNkQsaURBQWlELHlDQUF5QyxpQkFBaUIsS0FBSyxXQUFXLHNFQUFzRSw4REFBOEQsaURBQWlELHlDQUF5QyxLQUFLLFdBQVcscUVBQXFFLDZEQUE2RCxpQkFBaUIsS0FBSyxXQUFXLHFFQUFxRSw2REFBNkQsS0FBSyxVQUFVLDRDQUE0QyxvQ0FBb0MsS0FBSyxHQUFHLGNBQWMsb0RBQW9ELDRDQUE0QyxvQ0FBb0MsNEJBQTRCLEdBQUcsaUNBQWlDLFVBQVUsNENBQTRDLG9DQUFvQyxLQUFLLFdBQVcsc0VBQXNFLDhEQUE4RCxpQkFBaUIsS0FBSyxVQUFVLHFFQUFxRSw2REFBNkQsaUJBQWlCLEtBQUssR0FBRyx5QkFBeUIsVUFBVSw0Q0FBNEMsb0NBQW9DLEtBQUssV0FBVyxzRUFBc0UsOERBQThELGlCQUFpQixLQUFLLFVBQVUscUVBQXFFLDZEQUE2RCxpQkFBaUIsS0FBSyxHQUFHLGVBQWUsc0NBQXNDLDhCQUE4QixxQ0FBcUMsNkJBQTZCLG9EQUFvRCw0Q0FBNEMsR0FBRyxpQ0FBaUMsVUFBVSw0Q0FBNEMsb0NBQW9DLEtBQUssV0FBVyxzRUFBc0UsOERBQThELGlCQUFpQixLQUFLLFVBQVUscUVBQXFFLDZEQUE2RCxpQkFBaUIsS0FBSyxHQUFHLHlCQUF5QixVQUFVLDRDQUE0QyxvQ0FBb0MsS0FBSyxXQUFXLHNFQUFzRSw4REFBOEQsaUJBQWlCLEtBQUssVUFBVSxxRUFBcUUsNkRBQTZELGlCQUFpQixLQUFLLEdBQUcsZUFBZSxzQ0FBc0MsOEJBQThCLG9EQUFvRCw0Q0FBNEMscUNBQXFDLDZCQUE2QixHQUFHLHFDQUFxQyxVQUFVLCtEQUErRCx1REFBdUQsaUJBQWlCLEtBQUssV0FBVyxzQ0FBc0MsOEJBQThCLGlCQUFpQixLQUFLLFdBQVcsc0NBQXNDLDhCQUE4QixLQUFLLFVBQVUsOENBQThDLHNDQUFzQyxLQUFLLEdBQUcsNkJBQTZCLFVBQVUsK0RBQStELHVEQUF1RCxpQkFBaUIsS0FBSyxXQUFXLHNDQUFzQyw4QkFBOEIsaUJBQWlCLEtBQUssV0FBVyxzQ0FBc0MsOEJBQThCLEtBQUssVUFBVSw4Q0FBOEMsc0NBQXNDLEtBQUssR0FBRyxtQkFBbUIseUNBQXlDLGlDQUFpQyxnREFBZ0Qsd0NBQXdDLEdBQUcsc0NBQXNDLFVBQVUsaUJBQWlCLEtBQUssVUFBVSw4REFBOEQsc0RBQXNELGlCQUFpQixLQUFLLEdBQUcsOEJBQThCLFVBQVUsaUJBQWlCLEtBQUssVUFBVSw4REFBOEQsc0RBQXNELGlCQUFpQixLQUFLLEdBQUcsb0JBQW9CLDBDQUEwQyxrQ0FBa0MsK0NBQStDLHVDQUF1QyxHQUFHLGlDQUFpQyxVQUFVLHVDQUF1QywrQkFBK0Isb0RBQW9ELDRDQUE0QyxpQkFBaUIsS0FBSyxVQUFVLHVDQUF1QywrQkFBK0IsOENBQThDLHNDQUFzQyxpQkFBaUIsS0FBSyxHQUFHLHlCQUF5QixVQUFVLHVDQUF1QywrQkFBK0Isb0RBQW9ELDRDQUE0QyxpQkFBaUIsS0FBSyxVQUFVLHVDQUF1QywrQkFBK0IsOENBQThDLHNDQUFzQyxpQkFBaUIsS0FBSyxHQUFHLGVBQWUscUNBQXFDLDZCQUE2QixHQUFHLHlDQUF5QyxVQUFVLDRDQUE0QyxvQ0FBb0MsbURBQW1ELDJDQUEyQyxpQkFBaUIsS0FBSyxVQUFVLDRDQUE0QyxvQ0FBb0MsOENBQThDLHNDQUFzQyxpQkFBaUIsS0FBSyxHQUFHLGlDQUFpQyxVQUFVLDRDQUE0QyxvQ0FBb0MsbURBQW1ELDJDQUEyQyxpQkFBaUIsS0FBSyxVQUFVLDRDQUE0QyxvQ0FBb0MsOENBQThDLHNDQUFzQyxpQkFBaUIsS0FBSyxHQUFHLHVCQUF1Qiw2Q0FBNkMscUNBQXFDLEdBQUcsMENBQTBDLFVBQVUsNkNBQTZDLHFDQUFxQyxrREFBa0QsMENBQTBDLGlCQUFpQixLQUFLLFVBQVUsNkNBQTZDLHFDQUFxQyw4Q0FBOEMsc0NBQXNDLGlCQUFpQixLQUFLLEdBQUcsa0NBQWtDLFVBQVUsNkNBQTZDLHFDQUFxQyxrREFBa0QsMENBQTBDLGlCQUFpQixLQUFLLFVBQVUsNkNBQTZDLHFDQUFxQyw4Q0FBOEMsc0NBQXNDLGlCQUFpQixLQUFLLEdBQUcsd0JBQXdCLDhDQUE4QyxzQ0FBc0MsR0FBRyx1Q0FBdUMsVUFBVSw0Q0FBNEMsb0NBQW9DLGtEQUFrRCwwQ0FBMEMsaUJBQWlCLEtBQUssVUFBVSw0Q0FBNEMsb0NBQW9DLDhDQUE4QyxzQ0FBc0MsaUJBQWlCLEtBQUssR0FBRywrQkFBK0IsVUFBVSw0Q0FBNEMsb0NBQW9DLGtEQUFrRCwwQ0FBMEMsaUJBQWlCLEtBQUssVUFBVSw0Q0FBNEMsb0NBQW9DLDhDQUE4QyxzQ0FBc0MsaUJBQWlCLEtBQUssR0FBRyxxQkFBcUIsMkNBQTJDLG1DQUFtQyxHQUFHLHdDQUF3QyxVQUFVLDZDQUE2QyxxQ0FBcUMsbURBQW1ELDJDQUEyQyxpQkFBaUIsS0FBSyxVQUFVLDZDQUE2QyxxQ0FBcUMsOENBQThDLHNDQUFzQyxpQkFBaUIsS0FBSyxHQUFHLGdDQUFnQyxVQUFVLDZDQUE2QyxxQ0FBcUMsbURBQW1ELDJDQUEyQyxpQkFBaUIsS0FBSyxVQUFVLDZDQUE2QyxxQ0FBcUMsOENBQThDLHNDQUFzQyxpQkFBaUIsS0FBSyxHQUFHLHNCQUFzQiw0Q0FBNEMsb0NBQW9DLEdBQUcsa0NBQWtDLFVBQVUsdUNBQXVDLCtCQUErQixpQkFBaUIsS0FBSyxVQUFVLHVDQUF1QywrQkFBK0IsbURBQW1ELDJDQUEyQyxpQkFBaUIsS0FBSyxHQUFHLDBCQUEwQixVQUFVLHVDQUF1QywrQkFBK0IsaUJBQWlCLEtBQUssVUFBVSx1Q0FBdUMsK0JBQStCLG1EQUFtRCwyQ0FBMkMsaUJBQWlCLEtBQUssR0FBRyxnQkFBZ0Isc0NBQXNDLDhCQUE4QixHQUFHLDBDQUEwQyxVQUFVLDRDQUE0QyxvQ0FBb0MsaUJBQWlCLEtBQUssVUFBVSw0Q0FBNEMsb0NBQW9DLGtEQUFrRCwwQ0FBMEMsaUJBQWlCLEtBQUssR0FBRyxrQ0FBa0MsVUFBVSw0Q0FBNEMsb0NBQW9DLGlCQUFpQixLQUFLLFVBQVUsNENBQTRDLG9DQUFvQyxrREFBa0QsMENBQTBDLGlCQUFpQixLQUFLLEdBQUcsd0JBQXdCLDhDQUE4QyxzQ0FBc0MsR0FBRywyQ0FBMkMsVUFBVSw2Q0FBNkMscUNBQXFDLGlCQUFpQixLQUFLLFVBQVUsNkNBQTZDLHFDQUFxQyxtREFBbUQsMkNBQTJDLGlCQUFpQixLQUFLLEdBQUcsbUNBQW1DLFVBQVUsNkNBQTZDLHFDQUFxQyxpQkFBaUIsS0FBSyxVQUFVLDZDQUE2QyxxQ0FBcUMsbURBQW1ELDJDQUEyQyxpQkFBaUIsS0FBSyxHQUFHLHlCQUF5QiwrQ0FBK0MsdUNBQXVDLEdBQUcsd0NBQXdDLFVBQVUsNENBQTRDLG9DQUFvQyxpQkFBaUIsS0FBSyxVQUFVLDRDQUE0QyxvQ0FBb0MsbURBQW1ELDJDQUEyQyxpQkFBaUIsS0FBSyxHQUFHLGdDQUFnQyxVQUFVLDRDQUE0QyxvQ0FBb0MsaUJBQWlCLEtBQUssVUFBVSw0Q0FBNEMsb0NBQW9DLG1EQUFtRCwyQ0FBMkMsaUJBQWlCLEtBQUssR0FBRyxzQkFBc0IsNENBQTRDLG9DQUFvQyxHQUFHLHlDQUF5QyxVQUFVLDZDQUE2QyxxQ0FBcUMsaUJBQWlCLEtBQUssVUFBVSw2Q0FBNkMscUNBQXFDLGtEQUFrRCwwQ0FBMEMsaUJBQWlCLEtBQUssR0FBRyxpQ0FBaUMsVUFBVSw2Q0FBNkMscUNBQXFDLGlCQUFpQixLQUFLLFVBQVUsNkNBQTZDLHFDQUFxQyxrREFBa0QsMENBQTBDLGlCQUFpQixLQUFLLEdBQUcsdUJBQXVCLDZDQUE2QyxxQ0FBcUMsR0FBRyw4QkFBOEIsUUFBUSx5Q0FBeUMsaUNBQWlDLHFEQUFxRCw2Q0FBNkMsS0FBSyxtQkFBbUIsa0RBQWtELDBDQUEwQyx5Q0FBeUMsaUNBQWlDLHFEQUFxRCw2Q0FBNkMsS0FBSyxtQkFBbUIsa0RBQWtELDBDQUEwQyx5Q0FBeUMsaUNBQWlDLHFEQUFxRCw2Q0FBNkMsaUJBQWlCLEtBQUssVUFBVSxrREFBa0QsMENBQTBDLGlCQUFpQixLQUFLLEdBQUcsc0JBQXNCLFFBQVEseUNBQXlDLGlDQUFpQyxxREFBcUQsNkNBQTZDLEtBQUssbUJBQW1CLGtEQUFrRCwwQ0FBMEMseUNBQXlDLGlDQUFpQyxxREFBcUQsNkNBQTZDLEtBQUssbUJBQW1CLGtEQUFrRCwwQ0FBMEMseUNBQXlDLGlDQUFpQyxxREFBcUQsNkNBQTZDLGlCQUFpQixLQUFLLFVBQVUsa0RBQWtELDBDQUEwQyxpQkFBaUIsS0FBSyxHQUFHLFlBQVksbUNBQW1DLDJCQUEyQixrQ0FBa0MsMEJBQTBCLEdBQUcscUNBQXFDLFVBQVUsaUJBQWlCLGtEQUFrRCwwQ0FBMEMsOENBQThDLHNDQUFzQyxLQUFLLFdBQVcsd0NBQXdDLGdDQUFnQyxLQUFLLFdBQVcsc0NBQXNDLDhCQUE4QixLQUFLLFVBQVUsaUJBQWlCLGtDQUFrQywwQkFBMEIsS0FBSyxHQUFHLDZCQUE2QixVQUFVLGlCQUFpQixrREFBa0QsMENBQTBDLDhDQUE4QyxzQ0FBc0MsS0FBSyxXQUFXLHdDQUF3QyxnQ0FBZ0MsS0FBSyxXQUFXLHNDQUFzQyw4QkFBOEIsS0FBSyxVQUFVLGlCQUFpQixrQ0FBa0MsMEJBQTBCLEtBQUssR0FBRyxtQkFBbUIseUNBQXlDLGlDQUFpQyxHQUFHLGlIQUFpSCxVQUFVLGlCQUFpQiw2RUFBNkUscUVBQXFFLEtBQUssVUFBVSxpQkFBaUIsOENBQThDLHNDQUFzQyxLQUFLLEdBQUcsdUJBQXVCLFVBQVUsaUJBQWlCLDZFQUE2RSxxRUFBcUUsS0FBSyxVQUFVLGlCQUFpQiw4Q0FBOEMsc0NBQXNDLEtBQUssR0FBRyxhQUFhLG1DQUFtQywyQkFBMkIsR0FBRyxrSEFBa0gsVUFBVSxpQkFBaUIsS0FBSyxVQUFVLGlCQUFpQiwyRUFBMkUsbUVBQW1FLEtBQUssR0FBRyx3QkFBd0IsVUFBVSxpQkFBaUIsS0FBSyxVQUFVLGlCQUFpQiwyRUFBMkUsbUVBQW1FLEtBQUssR0FBRyxjQUFjLG9DQUFvQyw0QkFBNEIsR0FBRywrQkFBK0IsVUFBVSxpQkFBaUIsZ0RBQWdELHdDQUF3QyxLQUFLLFdBQVcsaUJBQWlCLEtBQUssR0FBRyx1QkFBdUIsVUFBVSxpQkFBaUIsZ0RBQWdELHdDQUF3QyxLQUFLLFdBQVcsaUJBQWlCLEtBQUssR0FBRyxhQUFhLG1DQUFtQywyQkFBMkIsR0FBRyxtQ0FBbUMsVUFBVSxpQkFBaUIsMkVBQTJFLG1FQUFtRSxnRkFBZ0Ysd0VBQXdFLEtBQUssV0FBVyxpQkFBaUIsOEVBQThFLHNFQUFzRSw2RUFBNkUscUVBQXFFLEtBQUssR0FBRywyQkFBMkIsVUFBVSxpQkFBaUIsMkVBQTJFLG1FQUFtRSxnRkFBZ0Ysd0VBQXdFLEtBQUssV0FBVyxpQkFBaUIsOEVBQThFLHNFQUFzRSw2RUFBNkUscUVBQXFFLEtBQUssR0FBRyxpQkFBaUIsdUNBQXVDLCtCQUErQixHQUFHLG1DQUFtQyxVQUFVLGlCQUFpQiwyRUFBMkUsbUVBQW1FLGdGQUFnRix3RUFBd0UsS0FBSyxXQUFXLGlCQUFpQiw4RUFBOEUsc0VBQXNFLDZFQUE2RSxxRUFBcUUsS0FBSyxHQUFHLDJCQUEyQixVQUFVLGlCQUFpQiwyRUFBMkUsbUVBQW1FLGdGQUFnRix3RUFBd0UsS0FBSyxXQUFXLGlCQUFpQiw4RUFBOEUsc0VBQXNFLDZFQUE2RSxxRUFBcUUsS0FBSyxHQUFHLGlCQUFpQix1Q0FBdUMsK0JBQStCLEdBQUcsb0NBQW9DLFVBQVUsaUJBQWlCLDBFQUEwRSxrRUFBa0UsZ0ZBQWdGLHdFQUF3RSxLQUFLLFdBQVcsaUJBQWlCLCtFQUErRSx1RUFBdUUsNkVBQTZFLHFFQUFxRSxLQUFLLEdBQUcsNEJBQTRCLFVBQVUsaUJBQWlCLDBFQUEwRSxrRUFBa0UsZ0ZBQWdGLHdFQUF3RSxLQUFLLFdBQVcsaUJBQWlCLCtFQUErRSx1RUFBdUUsNkVBQTZFLHFFQUFxRSxLQUFLLEdBQUcsa0JBQWtCLHdDQUF3QyxnQ0FBZ0MsR0FBRyxpQ0FBaUMsVUFBVSxpQkFBaUIsMEVBQTBFLGtFQUFrRSxnRkFBZ0Ysd0VBQXdFLEtBQUssV0FBVyxpQkFBaUIsK0VBQStFLHVFQUF1RSw2RUFBNkUscUVBQXFFLEtBQUssR0FBRyx5QkFBeUIsVUFBVSxpQkFBaUIsMEVBQTBFLGtFQUFrRSxnRkFBZ0Ysd0VBQXdFLEtBQUssV0FBVyxpQkFBaUIsK0VBQStFLHVFQUF1RSw2RUFBNkUscUVBQXFFLEtBQUssR0FBRyxlQUFlLHFDQUFxQyw2QkFBNkIsR0FBRyxnQ0FBZ0MsVUFBVSxpQkFBaUIsS0FBSyxXQUFXLGlCQUFpQixnREFBZ0Qsd0NBQXdDLEtBQUssVUFBVSxpQkFBaUIsS0FBSyxHQUFHLHdCQUF3QixVQUFVLGlCQUFpQixLQUFLLFdBQVcsaUJBQWlCLGdEQUFnRCx3Q0FBd0MsS0FBSyxVQUFVLGlCQUFpQixLQUFLLEdBQUcsY0FBYyxvQ0FBb0MsNEJBQTRCLEdBQUcsb0NBQW9DLFNBQVMsaUJBQWlCLCtFQUErRSx1RUFBdUUsZ0ZBQWdGLHdFQUF3RSxLQUFLLFVBQVUsaUJBQWlCLDBFQUEwRSxrRUFBa0UsOENBQThDLHNDQUFzQyw2RUFBNkUscUVBQXFFLEtBQUssR0FBRyw0QkFBNEIsU0FBUyxpQkFBaUIsK0VBQStFLHVFQUF1RSxnRkFBZ0Ysd0VBQXdFLEtBQUssVUFBVSxpQkFBaUIsMEVBQTBFLGtFQUFrRSw4Q0FBOEMsc0NBQXNDLDZFQUE2RSxxRUFBcUUsS0FBSyxHQUFHLGtCQUFrQix3Q0FBd0MsZ0NBQWdDLEdBQUcsb0NBQW9DLFNBQVMsaUJBQWlCLDhFQUE4RSxzRUFBc0UsS0FBSyxVQUFVLGlCQUFpQiwrREFBK0QsdURBQXVELDRDQUE0QyxvQ0FBb0MsS0FBSyxHQUFHLDRCQUE0QixTQUFTLGlCQUFpQiw4RUFBOEUsc0VBQXNFLEtBQUssVUFBVSxpQkFBaUIsK0RBQStELHVEQUF1RCw0Q0FBNEMsb0NBQW9DLEtBQUssR0FBRyxrQkFBa0Isd0NBQXdDLGdDQUFnQyxHQUFHLHFDQUFxQyxTQUFTLGlCQUFpQiwrRUFBK0UsdUVBQXVFLEtBQUssVUFBVSxpQkFBaUIsOERBQThELHNEQUFzRCw2Q0FBNkMscUNBQXFDLEtBQUssR0FBRyw2QkFBNkIsU0FBUyxpQkFBaUIsK0VBQStFLHVFQUF1RSxLQUFLLFVBQVUsaUJBQWlCLDhEQUE4RCxzREFBc0QsNkNBQTZDLHFDQUFxQyxLQUFLLEdBQUcsbUJBQW1CLHlDQUF5QyxpQ0FBaUMsR0FBRyxrQ0FBa0MsU0FBUyxpQkFBaUIsOEVBQThFLHNFQUFzRSxnRkFBZ0Ysd0VBQXdFLEtBQUssVUFBVSxpQkFBaUIsMkVBQTJFLG1FQUFtRSw4Q0FBOEMsc0NBQXNDLDZFQUE2RSxxRUFBcUUsS0FBSyxHQUFHLDBCQUEwQixTQUFTLGlCQUFpQiw4RUFBOEUsc0VBQXNFLGdGQUFnRix3RUFBd0UsS0FBSyxVQUFVLGlCQUFpQiwyRUFBMkUsbUVBQW1FLDhDQUE4QyxzQ0FBc0MsNkVBQTZFLHFFQUFxRSxLQUFLLEdBQUcsZ0JBQWdCLHNDQUFzQyw4QkFBOEIsR0FBRyxvQ0FBb0MsVUFBVSxrREFBa0QsMENBQTBDLDBCQUEwQixLQUFLLFVBQVUsOENBQThDLHNDQUFzQyxLQUFLLEdBQUcsNEJBQTRCLFVBQVUsa0RBQWtELDBDQUEwQywwQkFBMEIsS0FBSyxVQUFVLDhDQUE4QyxzQ0FBc0MsS0FBSyxHQUFHLGtCQUFrQix3Q0FBd0MsZ0NBQWdDLEdBQUcsb0NBQW9DLFVBQVUsa0RBQWtELDBDQUEwQywwQkFBMEIsS0FBSyxVQUFVLDhDQUE4QyxzQ0FBc0MsS0FBSyxHQUFHLDRCQUE0QixVQUFVLGtEQUFrRCwwQ0FBMEMsMEJBQTBCLEtBQUssVUFBVSw4Q0FBOEMsc0NBQXNDLEtBQUssR0FBRyxrQkFBa0Isd0NBQXdDLGdDQUFnQyxHQUFHLHFDQUFxQyxVQUFVLGlEQUFpRCx5Q0FBeUMsMEJBQTBCLEtBQUssVUFBVSw4Q0FBOEMsc0NBQXNDLEtBQUssR0FBRyw2QkFBNkIsVUFBVSxpREFBaUQseUNBQXlDLDBCQUEwQixLQUFLLFVBQVUsOENBQThDLHNDQUFzQyxLQUFLLEdBQUcsbUJBQW1CLHlDQUF5QyxpQ0FBaUMsR0FBRyxrQ0FBa0MsVUFBVSxpREFBaUQseUNBQXlDLDBCQUEwQixLQUFLLFVBQVUsOENBQThDLHNDQUFzQyxLQUFLLEdBQUcsMEJBQTBCLFVBQVUsaURBQWlELHlDQUF5QywwQkFBMEIsS0FBSyxVQUFVLDhDQUE4QyxzQ0FBc0MsS0FBSyxHQUFHLGdCQUFnQixzQ0FBc0MsOEJBQThCLEdBQUcscUNBQXFDLFVBQVUsOENBQThDLHNDQUFzQyxLQUFLLFVBQVUseUJBQXlCLGlEQUFpRCx5Q0FBeUMsS0FBSyxHQUFHLDZCQUE2QixVQUFVLDhDQUE4QyxzQ0FBc0MsS0FBSyxVQUFVLHlCQUF5QixpREFBaUQseUNBQXlDLEtBQUssR0FBRyxtQkFBbUIseUNBQXlDLGlDQUFpQyxHQUFHLHFDQUFxQyxVQUFVLDhDQUE4QyxzQ0FBc0MsS0FBSyxVQUFVLHlCQUF5QixrREFBa0QsMENBQTBDLEtBQUssR0FBRyw2QkFBNkIsVUFBVSw4Q0FBOEMsc0NBQXNDLEtBQUssVUFBVSx5QkFBeUIsa0RBQWtELDBDQUEwQyxLQUFLLEdBQUcsbUJBQW1CLHlDQUF5QyxpQ0FBaUMsR0FBRyxzQ0FBc0MsVUFBVSw4Q0FBOEMsc0NBQXNDLEtBQUssVUFBVSx5QkFBeUIsaURBQWlELHlDQUF5QyxLQUFLLEdBQUcsOEJBQThCLFVBQVUsOENBQThDLHNDQUFzQyxLQUFLLFVBQVUseUJBQXlCLGlEQUFpRCx5Q0FBeUMsS0FBSyxHQUFHLG9CQUFvQiwwQ0FBMEMsa0NBQWtDLEdBQUcsbUNBQW1DLFVBQVUsOENBQThDLHNDQUFzQyxLQUFLLFVBQVUseUJBQXlCLGtEQUFrRCwwQ0FBMEMsS0FBSyxHQUFHLDJCQUEyQixVQUFVLDhDQUE4QyxzQ0FBc0MsS0FBSyxVQUFVLHlCQUF5QixrREFBa0QsMENBQTBDLEtBQUssR0FBRyxpQkFBaUIsdUNBQXVDLCtCQUErQixHQUFHLGVBQWUsbUNBQW1DLDJCQUEyQixzQ0FBc0MsOEJBQThCLEdBQUcsd0JBQXdCLGdEQUFnRCx3Q0FBd0MsR0FBRyx3QkFBd0IsZ0NBQWdDLHdCQUF3QixHQUFHLHdCQUF3QixnQ0FBZ0Msd0JBQXdCLEdBQUcsd0JBQXdCLGdDQUFnQyx3QkFBd0IsR0FBRyx3QkFBd0IsZ0NBQWdDLHdCQUF3QixHQUFHLHdCQUF3QixnQ0FBZ0Msd0JBQXdCLEdBQUcsb0JBQW9CLHNDQUFzQyw4QkFBOEIsR0FBRyxzQkFBc0Isc0NBQXNDLDhCQUE4QixHQUFHLG9CQUFvQixtQ0FBbUMsMkJBQTJCLEdBQUcsc0JBQXNCLG1DQUFtQywyQkFBMkIsR0FBRyxxQ0FBcUMsZUFBZSwwQ0FBMEMsa0NBQWtDLDBDQUEwQyxrQ0FBa0MsS0FBSyxHQUFHOztBQUV6bCtFOztBQUVBLHdCQUF3QixtQkFBTyxDQUFDLDhCQUE4QjtBQUM5RCxJQUFJLG1CQUFPLENBQUMseUNBQXlDOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsUUFBUSxJQUFVO0FBQ2xCO0FBQ0E7QUFDQSwrQkFBK0IsMkNBQTJDO0FBQzFFLFNBQVM7QUFDVDs7Ozs7Ozs7OztBQ3hCYTs7QUFDYkMsTUFBTSxDQUFDQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QztBQUFFQyxPQUFLLEVBQUU7QUFBVCxDQUE3Qzs7QUFDQUQsT0FBTyxDQUFDRSxNQUFSLEdBQWlCLFVBQVVDLElBQVYsRUFBZ0JDLEtBQWhCLEVBQXVCO0FBQ3BDLE1BQUlDLEdBQUcsR0FBRyxFQUFWO0FBQ0EsTUFBSUMsSUFBSSxHQUFHSCxJQUFJLENBQUNJLEtBQUwsQ0FBVyxHQUFYLENBQVg7O0FBQ0EsT0FBSyxJQUFJQyxFQUFFLEdBQUcsQ0FBVCxFQUFZQyxNQUFNLEdBQUdILElBQTFCLEVBQWdDRSxFQUFFLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBNUMsRUFBb0RGLEVBQUUsRUFBdEQsRUFBMEQ7QUFDdEQsUUFBSUcsR0FBRyxHQUFHRixNQUFNLENBQUNELEVBQUQsQ0FBaEI7QUFDQSxRQUFJSSxJQUFJLEdBQUdELEdBQUcsQ0FBQ0osS0FBSixDQUFVLGFBQVYsQ0FBWDtBQUNBLFFBQUlNLFNBQVMsR0FBR0QsSUFBSSxDQUFDLENBQUQsQ0FBcEI7QUFDQSxRQUFJRSxJQUFJLEdBQUdELFNBQVMsQ0FBQ04sS0FBVixDQUFnQixHQUFoQixDQUFYOztBQUNBLFFBQUlLLElBQUksQ0FBQyxDQUFELENBQVIsRUFBYTtBQUNULFVBQUlYLEtBQUssR0FBR0QsT0FBTyxDQUFDZSxVQUFSLENBQW1CSCxJQUFJLENBQUMsQ0FBRCxDQUF2QixDQUFaOztBQUNBLFVBQUksQ0FBQ1gsS0FBTCxFQUFZO0FBQ1I7QUFDSDs7QUFDRCxXQUFLLElBQUllLEVBQUUsR0FBRyxDQUFULEVBQVlDLE1BQU0sR0FBR0gsSUFBMUIsRUFBZ0NFLEVBQUUsR0FBR0MsTUFBTSxDQUFDUCxNQUE1QyxFQUFvRE0sRUFBRSxFQUF0RCxFQUEwRDtBQUN0RCxZQUFJRSxHQUFHLEdBQUdELE1BQU0sQ0FBQ0QsRUFBRCxDQUFoQjtBQUNBRSxXQUFHLEdBQUdBLEdBQUcsQ0FBQ0MsSUFBSixHQUFXQyxLQUFYLENBQWlCLENBQWpCLEVBQW9CYixLQUFwQixDQUEwQixTQUExQixFQUFxQyxDQUFyQyxDQUFOO0FBQ0FGLFdBQUcsQ0FBQ2EsR0FBRCxDQUFILEdBQVdHLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQkMsUUFBUSxDQUFDdEIsS0FBSyxDQUFDdUIsU0FBTixDQUFnQixDQUFoQixDQUFELEVBQXFCLEVBQXJCLENBQTVCLENBQVg7O0FBQ0EsWUFBSXBCLEtBQUosRUFBVztBQUNQcUIsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZUixHQUFHLEdBQUcsSUFBTixHQUFhakIsS0FBekI7QUFDSDtBQUNKO0FBQ0o7QUFDSjs7QUFDRCxTQUFPSSxHQUFQO0FBQ0gsQ0F4QkQ7O0FBeUJBTCxPQUFPLENBQUNlLFVBQVIsR0FBcUIsVUFBVVksR0FBVixFQUFlO0FBQ2hDLE1BQUlDLE9BQU8sR0FBR0QsR0FBRyxDQUFDRSxLQUFKLENBQVUsMEJBQVYsQ0FBZDs7QUFDQSxNQUFJRCxPQUFKLEVBQWE7QUFDVCxXQUFPLFNBQVNBLE9BQU8sQ0FBQyxDQUFELENBQXZCO0FBQ0g7O0FBQ0QsU0FBTyxLQUFLLENBQVo7QUFDSCxDQU5ELEM7Ozs7Ozs7O0FDM0JhOztBQUNiOUIsTUFBTSxDQUFDQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QztBQUFFQyxPQUFLLEVBQUU7QUFBVCxDQUE3Qzs7QUFDQSxJQUFJNkIsYUFBYSxHQUFHQyxtQkFBTyxDQUFDLDhCQUFELENBQTNCOztBQUNBLElBQUlDLEdBQUcsR0FBR0QsbUJBQU8sQ0FBQyxnQ0FBRCxDQUFqQjs7QUFDQSxJQUFJMUMsV0FBVyxHQUFJLFlBQVk7QUFDM0IsV0FBU0EsV0FBVCxHQUF1QixDQUN0Qjs7QUFDREEsYUFBVyxDQUFDNEMsT0FBWixHQUFzQixZQUFZO0FBQzlCLFFBQUlDLEdBQUcsR0FBRyxDQUFWO0FBQ0EsUUFBSUMsV0FBSjtBQUNBLFFBQUlDLG1CQUFtQixHQUFHdEMsTUFBTSxDQUFDZ0IsSUFBUCxDQUFZekIsV0FBVyxDQUFDRSxLQUF4QixDQUExQjs7QUFDQSxRQUFJRixXQUFXLENBQUNlLEtBQWhCLEVBQXVCO0FBQ25CcUIsYUFBTyxDQUFDQyxHQUFSLENBQVksMEJBQTBCVSxtQkFBdEM7QUFDSDs7QUFDRCxRQUFJQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQVk7QUFDN0JGLGlCQUFXLEdBQUdDLG1CQUFtQixDQUFDRixHQUFELENBQWpDO0FBQ0E3QyxpQkFBVyxDQUFDaUQsR0FBWixDQUFnQkgsV0FBaEIsSUFBK0IsRUFBL0I7QUFDSCxLQUhEOztBQUlBLFFBQUlJLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQVVDLElBQVYsRUFBZ0I7QUFDM0IsVUFBSW5ELFdBQVcsQ0FBQ2UsS0FBaEIsRUFBdUI7QUFDbkJxQixlQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaO0FBQ0FELGVBQU8sQ0FBQ0MsR0FBUixDQUFZLHlCQUF5QlMsV0FBekIsR0FBdUMsZUFBdkMsR0FBeURLLElBQXJFO0FBQ0g7O0FBQ0QsVUFBSUMsT0FBTyxHQUFHWCxhQUFhLENBQUNZLFlBQWQsQ0FBMkJDLFVBQTNCLEdBQXdDQyxPQUF4QyxDQUFnREosSUFBaEQsQ0FBZDtBQUNBLGFBQU8sSUFBSUssT0FBSixDQUFZLFVBQVVDLE9BQVYsRUFBbUJDLE1BQW5CLEVBQTJCO0FBQzFDTixlQUFPLENBQUNPLFFBQVIsR0FBbUJDLElBQW5CLENBQXdCLFVBQVU5QyxJQUFWLEVBQWdCO0FBQ3BDLGNBQUlFLEdBQUcsR0FBRzJCLEdBQUcsQ0FBQzlCLE1BQUosQ0FBV0MsSUFBWCxFQUFpQmQsV0FBVyxDQUFDZSxLQUE3QixDQUFWO0FBQ0FmLHFCQUFXLENBQUNpRCxHQUFaLENBQWdCSCxXQUFoQixJQUErQjlCLEdBQS9CO0FBQ0F5QyxpQkFBTztBQUNWLFNBSkQsRUFJRyxVQUFVSSxHQUFWLEVBQWU7QUFDZEgsZ0JBQU0sQ0FBQ0csR0FBRCxDQUFOO0FBQ0gsU0FORDtBQU9ILE9BUk0sQ0FBUDtBQVNILEtBZkQ7O0FBZ0JBLFFBQUlDLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQVk7QUFDeEIsYUFBTyxJQUFJTixPQUFKLENBQVksVUFBVUMsT0FBVixFQUFtQjtBQUNsQ1Qsc0JBQWM7O0FBQ2QsWUFBSUgsR0FBRyxHQUFHRSxtQkFBbUIsQ0FBQzFCLE1BQTlCLEVBQXNDO0FBQ2xDNkIsa0JBQVEsQ0FBQ2xELFdBQVcsQ0FBQ0UsS0FBWixDQUFrQjRDLFdBQWxCLENBQUQsQ0FBUixDQUF5Q2MsSUFBekMsQ0FBOEMsWUFBWTtBQUN0RGYsZUFBRztBQUNILG1CQUFPaUIsU0FBUyxHQUFHRixJQUFaLENBQWlCLFlBQVk7QUFDaENILHFCQUFPO0FBQ1YsYUFGTSxDQUFQO0FBR0gsV0FMRDtBQU1ILFNBUEQsTUFRSztBQUNEQSxpQkFBTztBQUNWO0FBQ0osT0FiTSxDQUFQO0FBY0gsS0FmRDs7QUFnQkEsV0FBT0ssU0FBUyxFQUFoQjtBQUNILEdBNUNEOztBQTZDQTlELGFBQVcsQ0FBQ2lELEdBQVosR0FBa0IsRUFBbEI7QUFDQWpELGFBQVcsQ0FBQ0UsS0FBWixHQUFvQixFQUFwQjtBQUNBRixhQUFXLENBQUNlLEtBQVosR0FBb0IsS0FBcEI7QUFDQSxTQUFPZixXQUFQO0FBQ0gsQ0FwRGtCLEVBQW5COztBQXFEQVcsT0FBTyxDQUFDWCxXQUFSLEdBQXNCQSxXQUF0Qjs7QUFDQSxTQUFTQyxRQUFULENBQWtCVyxLQUFsQixFQUF5QjtBQUNyQixNQUFJQSxLQUFKLEVBQVc7QUFDUCxRQUFJQSxLQUFLLENBQUNtRCxPQUFOLENBQWMsR0FBZCxJQUFxQixDQUFDLENBQTFCLEVBQTZCO0FBQ3pCLFVBQUlDLE1BQU0sR0FBR3BELEtBQUssQ0FBQ00sS0FBTixDQUFZLEdBQVosRUFBaUIsQ0FBakIsQ0FBYjtBQUNBLGFBQU9sQixXQUFXLENBQUNpRCxHQUFaLENBQWdCZSxNQUFoQixFQUF3QnBELEtBQXhCLENBQVA7QUFDSCxLQUhELE1BSUs7QUFDRHdCLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLHFFQUFaO0FBQ0g7QUFDSjs7QUFDRCxTQUFPekIsS0FBUDtBQUNIOztBQUNERCxPQUFPLENBQUNWLFFBQVIsR0FBbUJBLFFBQW5CLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RFQSx5RUFBMkIsbUJBQU8sQ0FBQyw0Q0FBK0M7QUFDbEY7OztBQUdBO0FBQ0EsY0FBYyxRQUFTOztBQUV2Qjs7QUFFQSx3QkFBd0IsbUJBQU8sQ0FBQyw4QkFBOEI7QUFDOUQsSUFBSSxtQkFBTyxDQUFDLHlDQUF5Qzs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLFFBQVEsSUFBVTtBQUNsQjtBQUNBO0FBQ0EsK0JBQStCLDhDQUE4QztBQUM3RSxTQUFTO0FBQ1Q7Ozs7Ozs7OztBQ3hCQSw2Qzs7Ozs7OztBQ0FBLHlEOzs7Ozs7O0FDQUEsaUU7Ozs7Ozs7QUNBQSxtRTs7Ozs7OztBQ0FBLHlEOzs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7QUNBQSxtRTs7Ozs7OztBQ0FBLHVEOzs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7QUNBQSxtRTs7Ozs7OztBQ0FBLHVEOzs7Ozs7O0FDQUEsa0U7Ozs7Ozs7QUNBQSx1RDs7Ozs7OztBQ0FBLDZEOzs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7QUNBQSw0RDs7Ozs7OztBQ0FBLHNEOzs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7QUNBQSwwRDs7Ozs7OztBQ0FBLHNEOzs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7QUNBQSx3RTs7Ozs7OztBQ0FBLG9FOzs7Ozs7O0FDQUEsdUU7Ozs7Ozs7QUNBQSxvRTs7Ozs7OztBQ0FBLG9FOzs7Ozs7O0FDQUEscUU7Ozs7Ozs7QUNBQSxvRTs7Ozs7OztBQ0FBLDREOzs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7QUNBQSxxRDs7Ozs7OztBQ0FBLDREOzs7Ozs7O0FDQUEseUQ7Ozs7Ozs7QUNBQSxxRTs7Ozs7OztBQ0FBLDREOzs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7QUNBQSw4RDs7Ozs7OztBQ0FBLHVEOzs7Ozs7O0FDQUEsb0U7Ozs7Ozs7QUNBQSx1RDs7Ozs7OztBQ0FBLHFGOzs7Ozs7O0FDQUEsOEU7Ozs7Ozs7QUNBQSxtRjs7Ozs7OztBQ0FBLHlEOzs7Ozs7O0FDQUEscUQ7Ozs7Ozs7QUNBQSwyRDs7Ozs7OztBQ0FBLDBEOzs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7QUNBQSx5RDs7Ozs7OztBQ0FBLHlEOzs7Ozs7O0FDQUEsaUQiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8U3RhY2tMYXlvdXQgcm93PVwiMVwiIG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIGJhY2tncm91bmRDb2xvcj1cInJlZFwiIGNsYXNzPVwiZm9vdGVyclwiPlxuICAgIDxTdGFja0xheW91dCBjbGFzcz1cImZvbnQtaWNvbi1jb2xvclwiPlxuICAgICAgPExhYmVsIGNsYXNzPVwiZmEgc3RhdHVzIGNvbG9yXCIgbWFyZ2luPVwiMTVcIiA6dGV4dD1cIidmYS1ob21lJyB8IGZvbnRpY29uXCIgQHRhcD1cImdvVG9Ib21lXCIgLz5cbiAgICA8L1N0YWNrTGF5b3V0PlxuICAgIDxTdGFja0xheW91dCBjbGFzcz1cImZvbnQtaWNvbi1jb2xvclwiPlxuICAgICAgPExhYmVsXG4gICAgICAgIGNsYXNzPVwiZmEgc3RhdHVzIGNvbG9yXCJcbiAgICAgICAgbWFyZ2luPVwiMTVcIlxuICAgICAgICA6dGV4dD1cIidmYS1leWUnIHwgZm9udGljb25cIlxuICAgICAgICBAdGFwPVwiZ29Ub1ZpZXdQcmVkaWN0XCJcbiAgICAgIC8+XG4gICAgPC9TdGFja0xheW91dD5cbiAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJmb250LWljb24tY29sb3JcIj5cbiAgICAgIDxMYWJlbFxuICAgICAgICBjbGFzcz1cImZhIHN0YXR1cyBjb2xvclwiXG4gICAgICAgIG1hcmdpbj1cIjE1XCJcbiAgICAgICAgOnRleHQ9XCInZmEtYmFyLWNoYXJ0JyB8IGZvbnRpY29uXCJcbiAgICAgICAgQHRhcD1cImdvVG9MZXRoZXJcIlxuICAgICAgLz5cbiAgICA8L1N0YWNrTGF5b3V0PlxuICAgIDxTdGFja0xheW91dCB3aWR0aD1cIjI1JVwiPlxuICAgICAgPEltYWdlIHNyYz1cIn4vYXNzZXRzL05ld1BpYy9wcm9maWxlLnBuZ1wiIG1hcmdpbj1cIjIwXCIgQHRhcD1cImdvVG9Qcm9maWxlU2VjdGlvblwiIC8+XG4gICAgPC9TdGFja0xheW91dD5cbiAgPC9TdGFja0xheW91dD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgVnVlIGZyb20gXCJuYXRpdmVzY3JpcHQtdnVlXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xuaW1wb3J0IEhvbWUgZnJvbSBcIi4vSG9tZVwiO1xuaW1wb3J0IFZpZXdwcmVkaWN0aW9uIGZyb20gXCIuL1ZpZXdwcmVkaWN0aW9uXCI7XG5pbXBvcnQgTGV0aGVyYm9hcmQgZnJvbSBcIi4vTGVhdGhlckJvYXJkXCI7XG5pbXBvcnQgUHJvZmlsZVBpYyBmcm9tIFwiLi9Vc2VyUHJvZmlsZVwiO1xuaW1wb3J0IEZvb3Rlcm0gZnJvbSBcIi4vRm9vdGVybVwiO1xuZXhwb3J0IGRlZmF1bHQge1xuICBtZXRob2RzOiB7XG4gICAgZ29Ub0hvbWUoKSB7XG4gICAgICB0aGlzLiRuYXZpZ2F0ZVRvKEhvbWUsIHtcbiAgICAgICAgYW5pbWF0ZWQ6IHRydWUsXG4gICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICBuYW1lOiBcInNsaWRlTGVmdFwiLFxuICAgICAgICAgIGR1cmF0aW9uOiAxMDAsXG4gICAgICAgICAgY3VydmU6IFwiZWFzZUluXCJcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcbiAgICBnb1RvVmlld1ByZWRpY3QoKSB7XG4gICAgICB0aGlzLiRuYXZpZ2F0ZVRvKFZpZXdwcmVkaWN0aW9uLCB7XG4gICAgICAgIGFuaW1hdGVkOiB0cnVlLFxuICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgbmFtZTogXCJzbGlkZUxlZnRcIixcbiAgICAgICAgICBkdXJhdGlvbjogMjUwLFxuICAgICAgICAgIGN1cnZlOiBcImVhc2VJblwiXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZ29Ub0xldGhlcigpIHtcbiAgICAgIHRoaXMuJG5hdmlnYXRlVG8oTGV0aGVyYm9hcmQsIHtcbiAgICAgICAgYW5pbWF0ZWQ6IHRydWUsXG4gICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICBuYW1lOiBcInNsaWRlTGVmdFwiLFxuICAgICAgICAgIGR1cmF0aW9uOiAyNTAsXG4gICAgICAgICAgY3VydmU6IFwiZWFzZUluXCJcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcbiAgICBnb1RvUHJvZmlsZVNlY3Rpb24oKSB7XG4gICAgICB0aGlzLiRuYXZpZ2F0ZVRvKFByb2ZpbGVQaWMsIHtcbiAgICAgICAgYW5pbWF0ZWQ6IHRydWUsXG4gICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICBuYW1lOiBcInNsaWRlTGVmdFwiLFxuICAgICAgICAgIGR1cmF0aW9uOiAxMDAsXG4gICAgICAgICAgY3VydmU6IFwiZWFzZUluXCJcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cbi8vIEBpbXBvcnQgXCJzY3NzL3ZhcmlhYmxlLnNjc3NcIjtcbi8vIEBpbXBvcnQgXCJzY3NzL21haW4uc2Nzc1wiO1xuLy8gQGltcG9ydCBcInNjc3MvZm9vdGVyU2VjdGlvbi5zY3NzXCI7XG5cbi5mb250LWljb24tY29sb3Ige1xuICBjb2xvcjogI2ZmZjtcbiAgd2lkdGg6IDI1JTtcbn1cbi5mb290ZXJyIHtcbiAgaGVpZ2h0OiAxNjA7XG59XG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cbiAgPEZsZXhib3hMYXlvdXQgZmxleERpcmVjdGlvbj1cInJvd1wiIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiIGNsYXNzPVwiYWN0aW9uYmFyXCIgaWQ9XCJoZWFkZXJcIj5cbiAgICA8RmxleGJveExheW91dCBjbGFzcz1cImJ0biBtZW51XCI+XG4gICAgICA8TGFiZWwgdGV4dD1cIlByZWRpY3RvXCIgcGFkZGluZ0xlZnQ9XCIyMFwiIGZvbnRTaXplPVwiMTZcIiBjb2xvcj1cIndoaXRlXCIgZm9udFdlaWdodD1cImJvbGRcIiAvPlxuICAgIDwvRmxleGJveExheW91dD5cbiAgICA8RmxleGJveExheW91dCBjbGFzcz1cImJ0biBwcFwiPlxuICAgICAgPExhYmVsIHRleHQ9XCJQb2ludHM6MTIzNFwiIGNsYXNzPVwiR2xvYmFsX3BvaW50XCIgY29sb3I9XCIjZmZmZmZmXCIgLz5cbiAgICA8L0ZsZXhib3hMYXlvdXQ+XG4gIDwvRmxleGJveExheW91dD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7fTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuI2hlYWRlciAuR2xvYmFsX3BvaW50IHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjYmUzMDczLCAjZmExNjQyKTtcbiAgcGFkZGluZzogMTA7XG4gIGZvbnQtc2l6ZTogMTQ7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAyMDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1yaWdodDogMTA7XG59XG5cbiNoZWFkZXIgLmJ0biB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hY3Rpb25iYXIge1xuICBwYWRkaW5nOiAxMDtcbiAgaGVpZ2h0OiAxNjA7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzM5N2RjOCwgIzU0NjFjYik7XG4gIGNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiA1cHggMTBweCA4cHggIzg4ODg4ODtcbn1cbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxuICAgIDxwYWdlIGFjdGlvbkJhckhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgPEZsZXhib3hMYXlvdXQgZmxleERpcmVjdGlvbj1cImNvbHVtblwiIGhlaWdodD1cIjEwMCVcIiB3aWR0aD1cIjEwMCVcIj5cbiAgICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgICAgIDxHcmlkTGF5b3V0IHJvd3M9XCIqXCIgaGVpZ2h0PVwiMTAwJVwiPlxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cInZpZXctcHJlZGljdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICA8TGlzdFZpZXcgY2xhc3M9XCJsaXN0LXNjaGVkdWxlXCIgZm9yPVwibWF0Y2ggaW4gbWF0Y2hlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlcGFyYXRvckNvbG9yPVwidHJhbnNwYXJlbnRcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiaGVpZ2h0OjEwMCVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2LXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTY3JvbGxWaWV3PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVwiYXV0bywyKiwgKiwgYXV0bywyKlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cz1cIiosIDIqLCAqLDIqXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1hdGNoLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cIm1hdGNoLm1hdGNoTnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93PVwiMFwiIGNvbD1cIjBcIiBjb2xTcGFuPVwiMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ9XCIxMFwiIG1hcmdpblRvcD1cIjEwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU9XCIxMlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsICA6dGV4dD1cIm1hdGNoLnN0YXJ0aW5nVGltZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdz1cIjBcIiBjb2w9XCIzXCIgY2xhc3M9XCJsaXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sU3Bhbj1cIjNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ25tZW50PVwiY2VudGVyXCIgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cIm1hdGNoLnRlYW0xLnNob3J0TmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdz1cIjFcIiBjb2w9XCIwXCIgY2xhc3M9XCJzaG9ydG5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM9XCI1XCIgbWFyZ2luPVwiMTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZT1cIjhcIiBwYWRkaW5nPVwiNiA1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ25tZW50PVwiY2VudGVyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJtYXRjaC50ZWFtMS50ZWFtTmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdz1cIjFcIiB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbD1cIjFcIiBmb250V2VpZ2h0PVwiYm9sZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplPVwiMTJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwidnNcIiByb3c9XCIxXCIgY29sPVwiMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWdubWVudD1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCJib2xkXCIgZm9udFNpemU9XCIxMlwiIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJtYXRjaC50ZWFtMi5zaG9ydE5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3c9XCIxXCIgY29sPVwiM1wiIGNsYXNzPVwic2hvcnRuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzPVwiNVwiIG1hcmdpbj1cIjEwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU9XCI4XCIgcGFkZGluZz1cIjYgNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbm1lbnQ9XCJjZW50ZXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cIm1hdGNoLnRlYW0yLnRlYW1OYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93PVwiMVwiIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sPVwiNFwiIGZvbnRXZWlnaHQ9XCJib2xkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU9XCIxMlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwibWF0Y2gucGxhY2VcIiByb3c9XCIyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sPVwiMFwiIGNvbFNwYW49XCI0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdD1cIjEwXCIgZm9udFNpemU9XCIxMlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwibWF0Y2guc3RhcnRpbmdUaW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93PVwiMlwiIGNvbD1cIjFcIiBjb2xTcGFuPVwiNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbm1lbnQ9XCJyaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0PVwiMTBcIiBmb250U2l6ZT1cIjEyXCIgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIlN0YXJ0IFByZWRpY3RcIiBAdGFwPVwib25JdGVtVGFwKG1hdGNoKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicHJlZGljdC1idXR0b25cIiByb3c9XCIzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sU3Bhbj1cIjVcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZD1cImxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzBFQTk0OCwgIzBDQUFBNClcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TY3JvbGxWaWV3PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC92LXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RWaWV3PlxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XG4gICAgICAgICAgICA8Rm9vdGVybSAvPlxuICAgICAgICA8L0ZsZXhib3hMYXlvdXQ+XG4gICAgPC9QYWdlPlxuPC90ZW1wbGF0ZT5cblxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBWdWUgZnJvbSBcIm5hdGl2ZXNjcmlwdC12dWVcIjtcbiAgICBpbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xuICAgIGltcG9ydCBRdWVzdGlvbiBmcm9tIFwiLi9RdWVzdGlvbnNcIjtcbiAgICBpbXBvcnQgRm9vdGVybSBmcm9tIFwiLi9Gb290ZXJtXCI7XG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG5cbiAgICAgICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgICAgICBvbkl0ZW1UYXA6IGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkbGZqZGxmamRsamZsZGpmXCIsYXJncylcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kbmF2aWdhdGVUbyhRdWVzdGlvbiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxSWQ6IGFyZ3MuX2lkXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZ29Ub1F1ZXN0aW9uUGFnZSgpe1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRGWUd1amhpam9paHVneWZ2XCIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIGZldGNoKFwiaHR0cHM6Ly9wcmVkaWN0by53b2hsaWcuY28uaW4vYXBpL01hdGNoL2FsbE1hdGNoZXNcIiwge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWF0Y2hlID0gZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG1hdGNoZTogW11cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICAgIEhlYWRlcixcbiAgICAgICAgICAgIEZvb3Rlcm1cbiAgICAgICAgfVxuICAgIH07XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxuICAgIC8vIEBpbXBvcnQgXCJzY3NzL21haW4uc2Nzc1wiO1xuICAgIC8vIEBpbXBvcnQgXCJzY3NzL3ZhcmlhYmxlLnNjc3NcIjtcbiAgICAvKiAkdmlldy1wcmVkaWN0aW9uOiBhcXVhICFkZWZhdWx0OyAqL1xuXG4gICAgUGFnZSB7XG4gICAgICAgIGJhY2tncm91bmQtQ29sb3I6ICNmMmY0ZmI7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIktoYW5kLU1lZGl1bVwiLCBcIktoYW5kIE1lZGl1bVwiO1xuICAgICAgICBmb250LXNpemU6IDE2O1xuICAgIH1cblxuICAgIC5ob21lLXBhbmVsIHtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAyMDtcbiAgICAgICAgbWFyZ2luOiAxNTtcbiAgICB9XG5cbiAgICAubGlzdC1zY2hlZHVsZSB7XG4gICAgICAgIG1hcmdpbjogMjA7XG4gICAgICAgIHNlcGFyYXRvckNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB9XG5cbiAgICAubGlzdC1ncm91cC1pdGVtIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTtcbiAgICB9XG5cbiAgICAubWF0Y2gtY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDU7XG4gICAgICAgIGJhY2tncm91bmQtQ29sb3I6ICNmZmY7XG4gICAgICAgIHNlcGFyYXRvckNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDVweCBncmV5O1xuICAgIH1cblxuICAgIC5kZXNjcmlwdGlvbi1sYWJlbCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1O1xuICAgIH1cblxuICAgIC5saXZlIHtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjQkUzMDczLCAjRkExNjQyKTtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGZvbnQtc2l6ZTogMTI7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDU7XG4gICAgICAgIHBhZGRpbmc6IDUgMTA7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTA7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLnNob3J0bmFtZSB7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzM5N0RDOCwgIzU0NjFDQik7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xuICAgICAgICB0ZXh0QWxpZ25tZW50OiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLnByZWRpY3QtYnV0dG9uIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTA7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCA1IDU7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBmb250LXNpemU6IDE0O1xuICAgIH1cbiAgICAvKiAudmlldy1wcmVkaWN0aW9uIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHZpZXctcHJlZGljdGlvbjtcbiAgICB9ICovXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cbiAgICA8UGFnZSBhY3Rpb25CYXJIaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgIDxTdGFja0xheW91dCBiYWNrZ3JvdW5kQ29sb3I9XCIjRjVGNEZBXCI+XG4gICAgICAgICAgICA8R3JpZExheW91dCBiYWNrZ3JvdW5kQ29sb3I9XCIjRTlFN0Y0XCIgaGVpZ2h0PVwiNzBcIiBjb2x1bW5zPVwiIDMqLCpcIlxuICAgICAgICAgICAgICAgIHJvd3M9XCIqXCI+XG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJMb3JlbSBJcHN1bSBpcyBzaW1wbHkgZHVtbXlcIiByb3c9XCIwXCIgY29sPVwiMFwiXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCIgLz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHRleHQ9XCJSZXdhcmRzXCIgYmFja2dyb3VuZENvbG9yPVwiIzUwNjVDQlwiIGNvbG9yPVwiI2ZmZlwiXG4gICAgICAgICAgICAgICAgICAgIHJvdz1cIjBcIiBjb2w9XCIxXCIgdGV4dEFsaWdubWVudD1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCIgZm9udFNpemU9XCIxMlwiIC8+XG4gICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XG4gICAgICAgICAgICA8R3JpZExheW91dCBiYWNrZ3JvdW5kQ29sb3I9XCIjRkZGRkZGXCIgaGVpZ2h0PVwiNDBcIlxuICAgICAgICAgICAgICAgIGNvbHVtbnM9XCIqLCAzKiwqLCpcIiByb3dzPVwiKlwiPlxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiUGljXCIgcm93PVwiMFwiIGNvbD1cIjBcIiB0ZXh0QWxpZ25tZW50PVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiAvPlxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiUGFydGljaXBhdGVcIiByb3c9XCIwXCIgY29sPVwiMVwiIHRleHRBbGlnbm1lbnQ9XCJsZWZ0XCJcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiAvPlxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiUG9pbnRzXCIgcm93PVwiMFwiIGNvbD1cIjJcIiB0ZXh0QWxpZ25tZW50PVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiAvPlxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiUmFua1wiIHJvdz1cIjBcIiBjb2w9XCIzXCIgdGV4dEFsaWdubWVudD1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCIgLz5cbiAgICAgICAgICAgIDwvR3JpZExheW91dD5cbiAgICAgICAgICAgIDxHcmlkTGF5b3V0IGJhY2tncm91bmRDb2xvcj1cIiM1MDY1Q0JcIiBoZWlnaHQ9XCI0MFwiXG4gICAgICAgICAgICAgICAgY29sdW1ucz1cIiosIDMqLCosKlwiIHJvd3M9XCIqXCI+XG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJQaWNcIiByb3c9XCIwXCIgY29sPVwiMFwiIHRleHRBbGlnbm1lbnQ9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiIC8+XG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJQcmluY3kgVmFyZ2hlc2VcIiByb3c9XCIwXCIgY29sPVwiMVwiXG4gICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbm1lbnQ9XCJsZWZ0XCIgdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiAvPlxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiMTEyXCIgcm93PVwiMFwiIGNvbD1cIjJcIiB0ZXh0QWxpZ25tZW50PVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiAvPlxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiMDFcIiByb3c9XCIwXCIgY29sPVwiM1wiIHRleHRBbGlnbm1lbnQ9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiIC8+XG4gICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XG4gICAgICAgICAgICA8R3JpZExheW91dCBoZWlnaHQ9XCI0MFwiXG4gICAgICAgICAgICAgICAgY29sdW1ucz1cIiosIDMqLCosKlwiIHJvd3M9XCIqXCI+XG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJQaWNcIiByb3c9XCIwXCIgY29sPVwiMFwiIHRleHRBbGlnbm1lbnQ9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiIC8+XG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJTYXJhc3dhdGkgR2F1ZGFcIiByb3c9XCIwXCIgY29sPVwiMVwiXG4gICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbm1lbnQ9XCJsZWZ0XCIgdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiAvPlxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiMTEyXCIgcm93PVwiMFwiIGNvbD1cIjJcIiB0ZXh0QWxpZ25tZW50PVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiAvPlxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiMDFcIiByb3c9XCIwXCIgY29sPVwiM1wiIHRleHRBbGlnbm1lbnQ9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiIC8+XG4gICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XG4gICAgICAgICAgICA8R3JpZExheW91dCBoZWlnaHQ9XCI0MFwiXG4gICAgICAgICAgICAgICAgY29sdW1ucz1cIiosIDMqLCosKlwiIHJvd3M9XCIqXCI+XG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJQaWNcIiByb3c9XCIwXCIgY29sPVwiMFwiIHRleHRBbGlnbm1lbnQ9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiIC8+XG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJSb3NoYW4gQWhpcmVcIiByb3c9XCIwXCIgY29sPVwiMVwiXG4gICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbm1lbnQ9XCJsZWZ0XCIgdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiAvPlxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiMTEyXCIgcm93PVwiMFwiIGNvbD1cIjJcIiB0ZXh0QWxpZ25tZW50PVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiAvPlxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiMDFcIiByb3c9XCIwXCIgY29sPVwiM1wiIHRleHRBbGlnbm1lbnQ9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiIC8+XG4gICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XG4gICAgICAgICAgICA8R3JpZExheW91dCBoZWlnaHQ9XCI0MFwiXG4gICAgICAgICAgICAgICAgY29sdW1ucz1cIiosIDMqLCosKlwiIHJvd3M9XCIqXCI+XG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJQaWNcIiByb3c9XCIwXCIgY29sPVwiMFwiIHRleHRBbGlnbm1lbnQ9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiIC8+XG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJQcmlzdGluYSBWYXJnaGVzZVwiIHJvdz1cIjBcIiBjb2w9XCIxXCJcbiAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWdubWVudD1cImxlZnRcIiB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiIC8+XG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCIxMTJcIiByb3c9XCIwXCIgY29sPVwiMlwiIHRleHRBbGlnbm1lbnQ9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiIC8+XG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCIwMVwiIHJvdz1cIjBcIiBjb2w9XCIzXCIgdGV4dEFsaWdubWVudD1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCIgLz5cbiAgICAgICAgICAgIDwvR3JpZExheW91dD5cbiAgICAgICAgICAgIDxHcmlkTGF5b3V0IGhlaWdodD1cIjQwXCJcbiAgICAgICAgICAgICAgICBjb2x1bW5zPVwiKiwgMyosKiwqXCIgcm93cz1cIipcIj5cbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cIlBpY1wiIHJvdz1cIjBcIiBjb2w9XCIwXCIgdGV4dEFsaWdubWVudD1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCIgLz5cbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cIkRpbXBsZSBBaGlyZVwiIHJvdz1cIjBcIiBjb2w9XCIxXCJcbiAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWdubWVudD1cImxlZnRcIiB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiIC8+XG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCIxMTJcIiByb3c9XCIwXCIgY29sPVwiMlwiIHRleHRBbGlnbm1lbnQ9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiIC8+XG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCIwMVwiIHJvdz1cIjBcIiBjb2w9XCIzXCIgdGV4dEFsaWdubWVudD1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCIgLz5cbiAgICAgICAgICAgIDwvR3JpZExheW91dD5cbiAgICAgICAgICAgIDxHcmlkTGF5b3V0IGhlaWdodD1cIjQwXCJcbiAgICAgICAgICAgICAgICBjb2x1bW5zPVwiKiwgMyosKiwqXCIgcm93cz1cIipcIj5cbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cIlBpY1wiIHJvdz1cIjBcIiBjb2w9XCIwXCIgdGV4dEFsaWdubWVudD1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCIgLz5cbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cIlByZXJuYSBBbnRob255XCIgcm93PVwiMFwiIGNvbD1cIjFcIlxuICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ25tZW50PVwibGVmdFwiIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCIgLz5cbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cIjExMlwiIHJvdz1cIjBcIiBjb2w9XCIyXCIgdGV4dEFsaWdubWVudD1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCIgLz5cbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cIjAxXCIgcm93PVwiMFwiIGNvbD1cIjNcIiB0ZXh0QWxpZ25tZW50PVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiAvPlxuICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxuICAgICAgICAgICAgPEdyaWRMYXlvdXQgaGVpZ2h0PVwiNDBcIlxuICAgICAgICAgICAgICAgIGNvbHVtbnM9XCIqLCAzKiwqLCpcIiByb3dzPVwiKlwiPlxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiUGljXCIgcm93PVwiMFwiIGNvbD1cIjBcIiB0ZXh0QWxpZ25tZW50PVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiAvPlxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiTWFub2hhciBBbnRob255XCIgcm93PVwiMFwiIGNvbD1cIjFcIlxuICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ25tZW50PVwibGVmdFwiIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCIgLz5cbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cIjExMlwiIHJvdz1cIjBcIiBjb2w9XCIyXCIgdGV4dEFsaWdubWVudD1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCIgLz5cbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cIjAxXCIgcm93PVwiMFwiIGNvbD1cIjNcIiB0ZXh0QWxpZ25tZW50PVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiAvPlxuICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxuICAgICAgICAgICAgPEdyaWRMYXlvdXQgaGVpZ2h0PVwiNDBcIlxuICAgICAgICAgICAgICAgIGNvbHVtbnM9XCIqLCAzKiwqLCpcIiByb3dzPVwiKlwiPlxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiUGljXCIgcm93PVwiMFwiIGNvbD1cIjBcIiB0ZXh0QWxpZ25tZW50PVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiAvPlxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiSGl0ZXNoIFBhdGlsXCIgcm93PVwiMFwiIGNvbD1cIjFcIlxuICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ25tZW50PVwibGVmdFwiIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCIgLz5cbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cIjExMlwiIHJvdz1cIjBcIiBjb2w9XCIyXCIgdGV4dEFsaWdubWVudD1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCIgLz5cbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cIjAxXCIgcm93PVwiMFwiIGNvbD1cIjNcIiB0ZXh0QWxpZ25tZW50PVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiAvPlxuICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0PlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIlZpZXcgUHJlZGljdGlvblwiIGNsYXNzPVwicHJlZGljdC1idXR0b25cIiByb3c9XCIzXCJcbiAgICAgICAgICAgICAgICAgICAgY29sU3Bhbj1cIjVcIiBAdGFwPVwiZ29Ub1ZpZXdQcmVkaWN0XCIgLz5cbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgPC9QYWdlPlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBWaWV3cHJlZGljdGlvbiBmcm9tIFwiLi9WaWV3cHJlZGljdGlvblwiO1xuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgZ29Ub1ZpZXdQcmVkaWN0KCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oVmlld3ByZWRpY3Rpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9XG4gICAgfTtcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cbiAgPFBhZ2UgYWN0aW9uQmFySGlkZGVuPVwidHJ1ZVwiPlxuICAgIDxTdGFja0xheW91dCBmb3I9XCJxdWVzdGlvbiBpbiBxdWVzdGlvbnNGb3JcIj5cbiAgICAgIDxGbGV4Ym94TGF5b3V0XG4gICAgICAgIGFsaWduSXRlbXM9XCJmbGV4LXN0YXJ0XCJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJmbGV4LXN0YXJ0XCJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yPVwiIzNjN2VjN1wiXG4gICAgICAgIHBhZGRpbmc9XCIxMCAyMFwiXG4gICAgICA+XG4gICAgICAgIDxMYWJlbFxuICAgICAgICAgIGNsYXNzPVwiZmEgc3RhdHVzXCJcbiAgICAgICAgICA6dGV4dD1cIidmYS1sb25nLWFycm93LWxlZnQnIHwgZm9udGljb25cIlxuICAgICAgICAgIHN0eWxlPVwiY29sb3I6d2hpdGVcIlxuICAgICAgICAgIEB0YXA9XCJnb1RvSG9tZVwiXG4gICAgICAgICAgbWFyZ2luUmlnaHQ9XCIyMFwiXG4gICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIlxuICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ9XCJjZW50ZXJcIlxuICAgICAgICAvPlxuICAgICAgICA8TGFiZWwgdGV4dD1cIkVuZ2xhbmQgVnMgU291dGggQWZyaWNhXCIgY29sb3I9XCJ3aGl0ZVwiIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCIgLz5cbiAgICAgIDwvRmxleGJveExheW91dD5cbiAgICAgIDxGbGV4Ym94TGF5b3V0IGFsaWduSXRlbXM9XCJmbGV4LWVuZFwiIGp1c3RpZnlDb250ZW50PVwiZmxleC1lbmRcIj5cbiAgICAgICAgPExhYmVsXG4gICAgICAgICAgdGV4dD1cIlRpbWVyIDE6NDQ6MzJcIlxuICAgICAgICAgIGJvcmRlclJhZGl1cz1cIjUwXCJcbiAgICAgICAgICBtYXJnaW5SaWdodD1cIjIwXCJcbiAgICAgICAgICBtYXJnaW5Ub3A9XCIxMFwiXG4gICAgICAgICAgcGFkZGluZz1cIjEwXCJcbiAgICAgICAgICBjbGFzcz1cImxpdmVcIlxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcj1cIiM1MDY1Q0JcIlxuICAgICAgICAgIGNvbG9yPVwiI2ZmZlwiXG4gICAgICAgIC8+XG4gICAgICA8L0ZsZXhib3hMYXlvdXQ+XG4gICAgICA8U3RhY2tMYXlvdXRcbiAgICAgICAgYmFja2dyb3VuZENvbG9yPVwid2hpdGVcIlxuICAgICAgICBib3JkZXJXaWR0aD1cIjJcIlxuICAgICAgICBib3JkZXJjb2xvcj1cImdyYXlcIlxuICAgICAgICBtYXJnaW49XCIyMFwiXG4gICAgICAgIGhlaWdodD1cImF1dG9cIlxuICAgICAgICBwYWRkaW5nPVwiMTBcIlxuICAgICAgPlxuICAgICAgICA8TGFiZWxcbiAgICAgICAgICBtYXJnaW5Cb3R0b209XCIyMFwiXG4gICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICByb3c9XCIqXCJcbiAgICAgICAgICBjbGFzcz1cInF1ZXN0aW9uLXRpdGxlXCJcbiAgICAgICAgICB0ZXh0PVwid2hvIHdpbGwgd2luIHRoZSBtYXRjaFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxMYWJlbCB0ZXh0QWxpZ25tZW50PVwicmlnaHRcIiBtYXJnaW5Cb3R0b209XCIxMFwiIHRleHQ9XCJRIDEvNVwiIC8+XG4gICAgICAgIDxGbGV4Ym94TGF5b3V0XG4gICAgICAgICAgYWxpZ25JdGVtcz1cImZsZXgtc3RhcnRcIlxuICAgICAgICAgIG1hcmdpbkJvdHRvbT1cIjE1XCJcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIlxuICAgICAgICAgIGNsYXNzPVwicHJlZGljdC1idXR0b24tYWN0aXZlXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiMC01IHJ1bnNcIiAvPlxuICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiUG9pbnRzIDQwXCIgLz5cbiAgICAgICAgPC9GbGV4Ym94TGF5b3V0PlxuICAgICAgICA8RmxleGJveExheW91dFxuICAgICAgICAgIGFsaWduSXRlbXM9XCJmbGV4LXN0YXJ0XCJcbiAgICAgICAgICBtYXJnaW5Cb3R0b209XCIxNVwiXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCJcbiAgICAgICAgICBjbGFzcz1cInByZWRpY3QtYnV0dG9uLWdyYXlcIlxuICAgICAgICA+XG4gICAgICAgICAgPExhYmVsIHRleHQ9XCI2LTEwIHJ1bnNcIiAvPlxuICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiUG9pbnRzIDIwXCIgLz5cbiAgICAgICAgPC9GbGV4Ym94TGF5b3V0PlxuICAgICAgICA8RmxleGJveExheW91dFxuICAgICAgICAgIGFsaWduSXRlbXM9XCJmbGV4LXN0YXJ0XCJcbiAgICAgICAgICBtYXJnaW5Cb3R0b209XCIxNVwiXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCJcbiAgICAgICAgICBjbGFzcz1cInByZWRpY3QtYnV0dG9uLWdyYXlcIlxuICAgICAgICA+XG4gICAgICAgICAgPExhYmVsIHRleHQ9XCIxMS0xNSBydW5zXCIgLz5cbiAgICAgICAgICA8TGFiZWwgdGV4dD1cIlBvaW50cyA2MFwiIC8+XG4gICAgICAgIDwvRmxleGJveExheW91dD5cbiAgICAgICAgPEZsZXhib3hMYXlvdXRcbiAgICAgICAgICBhbGlnbkl0ZW1zPVwiZmxleC1zdGFydFwiXG4gICAgICAgICAgbWFyZ2luQm90dG9tPVwiMTVcIlxuICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiXG4gICAgICAgICAgY2xhc3M9XCJwcmVkaWN0LWJ1dHRvbi1ncmF5XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiMTYgb3IgbW9yZSBydW5zXCIgLz5cbiAgICAgICAgICA8TGFiZWwgdGV4dD1cIlBvaW50cyA4MFwiIC8+XG4gICAgICAgIDwvRmxleGJveExheW91dD5cbiAgICAgICAgPEZsZXhib3hMYXlvdXQgYWxpZ25JdGVtcz1cImZsZXgtc3RhcnRcIiBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIiBtYXJnaW5Cb3R0b209XCIyMFwiPlxuICAgICAgICAgIDxMYWJlbFxuICAgICAgICAgICAgdGV4dD1cIlByZXZpb3VzXCJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj1cIiNiN2I3YjdcIlxuICAgICAgICAgICAgcGFkZGluZz1cIjMgMzBcIlxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzPVwiNVwiXG4gICAgICAgICAgICBjb2xvcj1cIiNmZmZcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPExhYmVsXG4gICAgICAgICAgICB0ZXh0PVwiTmV4dFwiXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XCIjMzE4ZWM0XCJcbiAgICAgICAgICAgIHBhZGRpbmc9XCIzIDQwXCJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1cz1cIjVcIlxuICAgICAgICAgICAgY29sb3I9XCIjZmZmXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L0ZsZXhib3hMYXlvdXQ+XG4gICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgPEZsZXhib3hMYXlvdXQgYWxpZ25JdGVtcz1cImNlbnRlclwiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgbmctZGlzYWJsZWQ+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICB0ZXh0PVwiU3VibWl0XCJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XCIjNTdhMTczXCJcbiAgICAgICAgICBjb2xvcj1cIiNmZmZcIlxuICAgICAgICAgIGJvcmRlclJhZGl1cz1cIjVcIlxuICAgICAgICAgIEB0YXA9XCJnb1RvVmlld3ByZWRpY3Rpb25cIlxuICAgICAgICAgIHBhZGRpbmc9XCIxMCAzMFwiXG4gICAgICAgICAgbWFyZ2luPVwiMTBcIlxuICAgICAgICAvPlxuICAgICAgPC9GbGV4Ym94TGF5b3V0PlxuICAgIDwvU3RhY2tMYXlvdXQ+XG4gIDwvUGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgVnVlIGZyb20gXCJuYXRpdmVzY3JpcHQtdnVlXCI7XG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9Ib21lXCI7XG5pbXBvcnQgVmlld3ByZWRpY3Rpb24gZnJvbSBcIi4vVmlld3ByZWRpY3Rpb25cIjtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgbWV0aG9kczoge1xuICAgIGdvVG9WaWV3cHJlZGljdGlvbigpIHtcbiAgICAgIHRoaXMuJG5hdmlnYXRlVG8oVmlld3ByZWRpY3Rpb24pO1xuICAgIH0sXG4gICAgZ29Ub0hvbWUoKSB7XG4gICAgICB0aGlzLiRuYXZpZ2F0ZVRvKEhvbWUsIHtcbiAgICAgICAgYW5pbWF0ZWQ6IHRydWUsXG4gICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICBuYW1lOiBcInNsaWRlTGVmdFwiLFxuICAgICAgICAgIGR1cmF0aW9uOiAxMDAsXG4gICAgICAgICAgY3VydmU6IFwiZWFzZUluXCJcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcbiAgICBvbkJ1dHRvblRhcChkYXRhLCBpZCkge1xuICAgICAgdGhpcy5hbnN3ZXIucHVzaChkYXRhKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiVGhpcyBpcyBhbnN3ZXJcIiwgdGhpcy5hbnN3ZXIsIGlkKTtcbiAgICB9LFxuICAgIG9uQnV0dG9uVGFwMShkYXRhKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIlRoaXMgaXMgc2Vjb25kIGZ1bmNpb25cIiwgZGF0YSk7XG4gICAgfVxuICB9LFxuICBtb3VudGVkKCkge1xuICAgIGNvbnNvbGUubG9nKFwibGRqZmxka2ZqbGRqZmRsa1wiLCB0aGlzLnFJZCk7XG4gICAgdGhpcy5xdWVzdGlvbklkID0gdGhpcy5xSWQ7XG5cbiAgICBmZXRjaChcImh0dHBzOi8vcHJlZGljdG8ud29obGlnLmNvLmluL2FwaS9RdWVzdGlvbi9nZXRRdWVzdGlvblwiLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgbWF0Y2hJZDogdGhpcy5xdWVzdGlvbklkXG4gICAgICB9KVxuICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgdGhpcy5xdWVzdGlvbnNGb3IgPSBkYXRhLmRhdGEucXVlc3Rpb247XG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVzdWx0IG9mIHF1ZXN0aW9uXCIsIGRhdGEuZGF0YSk7XG4gICAgICB9KTtcbiAgfSxcbiAgcHJvcHM6IFtcInFJZFwiXSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYW5zd2VyOiBbXSxcbiAgICAgIHF1ZXN0aW9uSWQ6IFwiXCIsXG4gICAgICBxdWVzdGlvbnNGb3I6IFtdXG4gICAgfTtcbiAgfVxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4ucHJlZGljdC1idXR0b24tYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU3YTE3MztcbiAgYm9yZGVyLXJhZGl1czogNTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTY7XG4gIG1hcmdpbjogNXB4O1xuICBwYWRkaW5nOiAzMHB4O1xufVxuXG4ucHJlZGljdC1idXR0b24tZ3JheSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XG4gIGJvcmRlci1yYWRpdXM6IDU7XG4gIGNvbG9yOiAjNzE3MDcwO1xuICBmb250LXNpemU6IDE2O1xuICBtYXJnaW46IDVweDtcbiAgcGFkZGluZzogMzBweDtcbn1cblxuLmxpdmUge1xuICBwYWRkaW5nLXJpZ2h0OiAxMDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjYmUzMDczLCAjZmExNjQyKTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTQ7XG59XG5cblBhZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNGZhO1xuICBmb250LWZhbWlseTogXCJLaGFuZC1NZWRpdW1cIiwgXCJLaGFuZCBNZWRpdW1cIjtcbiAgZm9udC1zaXplOiAxNjtcbn1cbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxuICA8UGFnZSBhY3Rpb25CYXJIaWRkZW49XCJ0cnVlXCI+XG4gICAgPCEtLSA8RmxleGJveExheW91dCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgaGVpZ2h0PVwiMTAwJVwiIHdpZHRoPVwiMTAwJVwiPlxuICAgICAgICAgICAgPEhlYWRlciAvPlxuICAgIDxHcmlkTGF5b3V0IHJvd3M9XCIqXCIgaGVpZ2h0PVwiMTAwJVwiPi0tPlxuICAgIDxTdGFja0xheW91dD5cbiAgICAgIDxGbGV4Ym94TGF5b3V0XG4gICAgICAgIGFsaWduSXRlbXM9XCJmbGV4LXN0YXJ0XCJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJmbGV4LXN0YXJ0XCJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yPVwiIzNjN2VjN1wiXG4gICAgICAgIHBhZGRpbmc9XCIxMCAyMFwiXG4gICAgICA+XG4gICAgICAgIDxMYWJlbFxuICAgICAgICAgIGNsYXNzPVwiZmEgc3RhdHVzXCJcbiAgICAgICAgICA6dGV4dD1cIidmYS1sb25nLWFycm93LWxlZnQnIHwgZm9udGljb25cIlxuICAgICAgICAgIHN0eWxlPVwiY29sb3I6d2hpdGVcIlxuICAgICAgICAgIEB0YXA9XCJnb1RvSG9tZVwiXG4gICAgICAgICAgbWFyZ2luUmlnaHQ9XCIyMFwiXG4gICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIlxuICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ9XCJjZW50ZXJcIlxuICAgICAgICAvPlxuICAgICAgICA8TGFiZWwgdGV4dD1cIlByb2ZpbGVcIiBjb2xvcj1cIndoaXRlXCIgdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiAvPlxuICAgICAgPC9GbGV4Ym94TGF5b3V0PlxuICAgICAgPEZsZXhib3hMYXlvdXQgZmxleERpcmVjdGlvbj1cImNvbHVtblwiIGNsYXNzPVwicHJvZmlsZS1jb250ZW50XCI+XG4gICAgICAgIDxMYWJlbCB0ZXh0PVwiUFJPRklMRVwiIGhlaWdodD1cIjcwXCIgLz5cbiAgICAgICAgPExhYmVsIHRleHQ9XCJTTUlUMjVcIiBoZWlnaHQ9XCI0MFwiIGZvbnRXZWlnaHQ9XCJib2xkXCIgdGV4dEFsaWdubWVudD1cImNlbnRlclwiIC8+XG4gICAgICAgIDxGbGV4Ym94TGF5b3V0IGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiPlxuICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiU0VSSUVTIFBMQVlFRFwiIGhlaWdodD1cIjQwXCIgLz5cbiAgICAgICAgICA8TGFiZWwgdGV4dD1cIk1BVENIRVMgUExBWUVEXCIgaGVpZ2h0PVwiNDBcIiAvPlxuICAgICAgICA8L0ZsZXhib3hMYXlvdXQ+XG4gICAgICAgIDxGbGV4Ym94TGF5b3V0IGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiPlxuICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiMFwiIGhlaWdodD1cIjMwXCIgLz5cbiAgICAgICAgICA8TGFiZWwgdGV4dD1cIjBcIiBoZWlnaHQ9XCIzMFwiIC8+XG4gICAgICAgIDwvRmxleGJveExheW91dD5cbiAgICAgIDwvRmxleGJveExheW91dD5cbiAgICA8L1N0YWNrTGF5b3V0PlxuICAgIDwhLS0gPC9HcmlkTGF5b3V0PlxuICAgICAgICAgICAgPEZvb3Rlcm0gLz5cbiAgICA8L0ZsZXhib3hMYXlvdXQ+LS0+XG4gIDwvUGFnZT5cbjwvdGVtcGxhdGU+XG5cblxuPHNjcmlwdD5cbmltcG9ydCBWdWUgZnJvbSBcIm5hdGl2ZXNjcmlwdC12dWVcIjtcbmltcG9ydCBIb21lIGZyb20gXCIuL0hvbWVcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCI7XG5pbXBvcnQgRm9vdGVybSBmcm9tIFwiLi9Gb290ZXJtXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbWV0aG9kczoge1xuICAgIGdvVG9Ib21lKCkge1xuICAgICAgdGhpcy4kbmF2aWdhdGVUbyhIb21lLCB7XG4gICAgICAgIGFuaW1hdGVkOiB0cnVlLFxuICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgbmFtZTogXCJzbGlkZUxlZnRcIixcbiAgICAgICAgICBkdXJhdGlvbjogMTAwLFxuICAgICAgICAgIGN1cnZlOiBcImVhc2VJblwiXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgY29tcG9uZW50czoge1xuICAgIEhlYWRlcixcbiAgICBGb290ZXJtXG4gIH1cbn07XG48L3NjcmlwdD5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cbi8vIEBpbXBvcnQgXCJzY3NzL3ZhcmlhYmxlLnNjc3NcIjtcbi8vIEBpbXBvcnQgXCJzY3NzL21haW4uc2Nzc1wiO1xuXG5QYWdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjRmYjtcbiAgZm9udC1mYW1pbHk6IFwiS2hhbmQtTWVkaXVtXCIsIFwiS2hhbmQgTWVkaXVtXCI7XG4gIGZvbnQtc2l6ZTogMTY7XG59XG5cbi5ob21lLXBhbmVsIHtcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMDtcbiAgbWFyZ2luOiAxNTtcbn1cblxuLnByb2ZpbGUtY29udGVudCB7XG4gIG1hcmdpbjogMjA7XG4gIHBhZGRpbmc6IDIwO1xuICBib3JkZXItcmFkaXVzOiA1O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiAxMHB4IDEwcHggNXB4IGdyZXk7XG59XG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cbiAgPFBhZ2UgYWN0aW9uQmFySGlkZGVuPVwidHJ1ZVwiPlxuICAgIDxGbGV4Ym94TGF5b3V0IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBoZWlnaHQ9XCIxMDAlXCIgd2lkdGg9XCIxMDAlXCI+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8R3JpZExheW91dCByb3dzPVwiKlwiIGhlaWdodD1cIjEwMCVcIj5cbiAgICAgICAgPFN0YWNrTGF5b3V0PlxuICAgICAgICAgIDxMaXN0Vmlld1xuICAgICAgICAgICAgY2xhc3M9XCJsaXN0LXNjaGVkdWxlXCJcbiAgICAgICAgICAgIGZvcj1cIm1hdGNoIGluIG1hdGNoZXNcIlxuICAgICAgICAgICAgc2VwYXJhdG9yQ29sb3I9XCJ0cmFuc3BhcmVudFwiXG4gICAgICAgICAgICBAaXRlbVRhcD1cIm9uSXRlbVRhcFwiXG4gICAgICAgICAgICBzdHlsZT1cImhlaWdodDoxMDAlXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8di10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0PlxuICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0XG4gICAgICAgICAgICAgICAgICBjb2x1bW5zPVwiYXV0bywyKiwgKiwgYXV0bywyKlwiXG4gICAgICAgICAgICAgICAgICByb3dzPVwiKiwgMiosICosMipcIlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtYXRjaC1jb250YWluZXJcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxMYWJlbFxuICAgICAgICAgICAgICAgICAgICA6dGV4dD1cIm1hdGNoLm1hdGNoSW5kZXhcIlxuICAgICAgICAgICAgICAgICAgICByb3c9XCIwXCJcbiAgICAgICAgICAgICAgICAgICAgY29sPVwiMFwiXG4gICAgICAgICAgICAgICAgICAgIGNvbHNwYW49XCIyXCJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdD1cIjEwXCJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wPVwiMTBcIlxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZT1cIjEyXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8TGFiZWxcbiAgICAgICAgICAgICAgICAgICAgOnRleHQ9XCJtYXRjaC5wb2ludHNcIlxuICAgICAgICAgICAgICAgICAgICByb3c9XCIwXCJcbiAgICAgICAgICAgICAgICAgICAgY29sPVwiM1wiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibGl2ZVwiXG4gICAgICAgICAgICAgICAgICAgIGNvbHNwYW49XCIzXCJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJyZWRcIlxuICAgICAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbm1lbnQ9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3BsYXkubmF0aXZlc2NyaXB0Lm9yZy9kaXN0L2Fzc2V0cy9pbWcvTmF0aXZlU2NyaXB0X2xvZ28ucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgcm93PVwiMVwiXG4gICAgICAgICAgICAgICAgICAgIGNvbD1cIjBcIlxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM9XCI1XCJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwiMTBcIlxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIzMFwiXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMzBcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxMYWJlbFxuICAgICAgICAgICAgICAgICAgICA6dGV4dD1cIm1hdGNoLmZpcnN0TWF0Y2hcIlxuICAgICAgICAgICAgICAgICAgICByb3c9XCIxXCJcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICBjb2w9XCIxXCJcbiAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodD1cImJvbGRcIlxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZT1cIjEyXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8TGFiZWxcbiAgICAgICAgICAgICAgICAgICAgdGV4dD1cInZzXCJcbiAgICAgICAgICAgICAgICAgICAgcm93PVwiMVwiXG4gICAgICAgICAgICAgICAgICAgIGNvbD1cIjJcIlxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudD1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbm1lbnQ9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0PVwiYm9sZFwiXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplPVwiMTJcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3BsYXkubmF0aXZlc2NyaXB0Lm9yZy9kaXN0L2Fzc2V0cy9pbWcvTmF0aXZlU2NyaXB0X2xvZ28ucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgcm93PVwiMVwiXG4gICAgICAgICAgICAgICAgICAgIGNvbD1cIjNcIlxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM9XCI1XCJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwiMTBcIlxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIzMFwiXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMzBcIlxuICAgICAgICAgICAgICAgICAgICBAdGFwPVwiZ29Ub0xlYXRoZXJCb2FyZFwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPExhYmVsXG4gICAgICAgICAgICAgICAgICAgIDp0ZXh0PVwibWF0Y2guc2Vjb25kTWF0Y2hcIlxuICAgICAgICAgICAgICAgICAgICByb3c9XCIxXCJcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICBjb2w9XCI0XCJcbiAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodD1cImJvbGRcIlxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZT1cIjEyXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8TGFiZWxcbiAgICAgICAgICAgICAgICAgICAgOnRleHQ9XCJtYXRjaC5wbGFjZVwiXG4gICAgICAgICAgICAgICAgICAgIHJvdz1cIjJcIlxuICAgICAgICAgICAgICAgICAgICBjb2w9XCIwXCJcbiAgICAgICAgICAgICAgICAgICAgY29sc3Bhbj1cIjRcIlxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0PVwiMTBcIlxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZT1cIjEyXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8TGFiZWxcbiAgICAgICAgICAgICAgICAgICAgOnRleHQ9XCJtYXRjaC50aW1lXCJcbiAgICAgICAgICAgICAgICAgICAgcm93PVwiMlwiXG4gICAgICAgICAgICAgICAgICAgIGNvbD1cIjFcIlxuICAgICAgICAgICAgICAgICAgICBjb2xzcGFuPVwiNFwiXG4gICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbm1lbnQ9XCJyaWdodFwiXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0PVwiMTBcIlxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZT1cIjEyXCJcbiAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgIDxMYWJlbFxuICAgICAgICAgICAgICAgICAgICB0ZXh0PVwiVmlldyBQcmVkaWN0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJwcmVkaWN0LWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIHJvdz1cIjNcIlxuICAgICAgICAgICAgICAgICAgICBjb2w9XCIyXCJcbiAgICAgICAgICAgICAgICAgICAgY29sc3Bhbj1cIjVcIlxuICAgICAgICAgICAgICAgICAgICBAdGFwPVwiZ29Ub1F1ZXN0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFxuICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ25tZW50PVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxuICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICAgICAgPC92LXRlbXBsYXRlPlxuICAgICAgICAgIDwvTGlzdFZpZXc+XG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICA8L0dyaWRMYXlvdXQ+XG4gICAgICA8Rm9vdGVybSAvPlxuICAgIDwvRmxleGJveExheW91dD5cbiAgPC9QYWdlPlxuPC90ZW1wbGF0ZT5cblxuXG48c2NyaXB0PlxuaW1wb3J0IFZ1ZSBmcm9tIFwibmF0aXZlc2NyaXB0LXZ1ZVwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9IZWFkZXJcIjtcbmltcG9ydCBGb290ZXJtIGZyb20gXCIuL0Zvb3Rlcm1cIjtcbmltcG9ydCBRdWVzdGlvbiBmcm9tIFwiLi9RdWVzdGlvbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBtZXRob2RzOiB7XG4gICAgZ29Ub1F1ZXN0aW9uKCkge1xuICAgICAgdGhpcy4kbmF2aWdhdGVUbyhRdWVzdGlvbik7XG4gICAgfVxuXG4gICAgLy8gb25JdGVtVGFwOiBmdW5jdGlvbihhcmdzKSB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwiSXRlbSB3aXRoIGluZGV4OiBcIiArIE9iamVjdC52YWx1ZXMoYXJncykgK1xuICAgIC8vICAgICAgICAgXCIgdGFwcGVkXCIpO1xuICAgIC8vICAgICBjb25zb2xlLmxvZygpO1xuICAgIC8vIH1cbiAgfSxcblxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBtYXRjaGVzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwb2ludHM6IFwiUG9pbnQgMTIwXCIsXG4gICAgICAgICAgbWF0Y2hJbmRleDogXCJNYXRjaDFcIixcbiAgICAgICAgICBmaXJzdE1hdGNoOiBcIkVuZ2xhbmRcIixcbiAgICAgICAgICBmaXJzdE1hdGNobG9nb1NyYzpcbiAgICAgICAgICAgIFwiaHR0cHM6Ly9wbGF5Lm5hdGl2ZXNjcmlwdC5vcmcvZGlzdC9hc3NldHMvaW1nL2ZsYWdzL2F1LnBuZ1wiLFxuICAgICAgICAgIHNlY29uZE1hdGNoOiBcIlNvdXRoIEFmcmljYVwiLFxuICAgICAgICAgIHNlY29uZE1hdGNobG9nb1NyYzpcbiAgICAgICAgICAgIFwiaHR0cHM6Ly9wbGF5Lm5hdGl2ZXNjcmlwdC5vcmcvZGlzdC9hc3NldHMvaW1nL2ZsYWdzL2F1LnBuZ1wiLFxuICAgICAgICAgIHBsYWNlOiBcIktlbm5pbmd0b24gT3ZhbCwgTG9uZG9uXCIsXG4gICAgICAgICAgdGltZTogXCJNYXkgMzAgMjAxOVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwb2ludHM6IFwiUG9pbnQgMTIwXCIsXG4gICAgICAgICAgbWF0Y2hJbmRleDogXCJNYXRjaDFcIixcbiAgICAgICAgICBmaXJzdE1hdGNoOiBcIkVuZ2xhbmRcIixcbiAgICAgICAgICBmaXJzdE1hdGNobG9nb1NyYzpcbiAgICAgICAgICAgIFwiaHR0cHM6Ly9wbGF5Lm5hdGl2ZXNjcmlwdC5vcmcvZGlzdC9hc3NldHMvaW1nL2ZsYWdzL2F1LnBuZ1wiLFxuICAgICAgICAgIHNlY29uZE1hdGNoOiBcIlNvdXRoIEFmcmljYVwiLFxuICAgICAgICAgIHNlY29uZE1hdGNobG9nb1NyYzpcbiAgICAgICAgICAgIFwiaHR0cHM6Ly9wbGF5Lm5hdGl2ZXNjcmlwdC5vcmcvZGlzdC9hc3NldHMvaW1nL2ZsYWdzL2F1LnBuZ1wiLFxuICAgICAgICAgIHBsYWNlOiBcIktlbm5pbmd0b24gT3ZhbCwgTG9uZG9uIFwiLFxuICAgICAgICAgIHRpbWU6IFwiTWF5IDMwIDIwMTlcIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfTtcbiAgfSxcbiAgY29tcG9uZW50czoge1xuICAgIEhlYWRlcixcbiAgICBGb290ZXJtXG4gIH1cbn07XG48L3NjcmlwdD5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cbi8vIEBpbXBvcnQgXCJzY3NzL21haW4uc2Nzc1wiO1xuXG5QYWdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjRmYjtcbiAgZm9udC1mYW1pbHk6IFwiS2hhbmQtTWVkaXVtXCIsIFwiS2hhbmQgTWVkaXVtXCI7XG4gIGZvbnQtc2l6ZTogMTY7XG59XG5cbi5ob21lLXBhbmVsIHtcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMDtcbiAgbWFyZ2luOiAxNTtcbn1cblxuLmxpc3Qtc2NoZWR1bGUge1xuICBtYXJnaW46IDIwO1xuICBzZXBhcmF0b3Jjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5saXN0LWdyb3VwLWl0ZW0ge1xuICBib3JkZXItcmFkaXVzOiA1O1xufVxuXG4ubWF0Y2gtY29udGFpbmVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMTU7XG4gIGJvcmRlci1yYWRpdXM6IDU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHNlcGFyYXRvcmNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDVweCBncmV5O1xufVxuXG4uZGVzY3JpcHRpb24tbGFiZWwge1xuICBtYXJnaW4tYm90dG9tOiAxNTtcbn1cblxuLmxpdmUge1xuICBmb250LXNpemU6IDEyO1xuICBib3JkZXItcmFkaXVzOiA1O1xuICBwYWRkaW5nOiA1IDEwO1xuICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDEwO1xuICBtYXJnaW4tdG9wOiAxMDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLnByZWRpY3QtYnV0dG9uIHtcbiAgbWFyZ2luOiAxMDtcbiAgYm9yZGVyLXJhZGl1czogNTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjYmUzMDczLCAjZmExNjQyKTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTQ7XG4gIHBhZGRpbmc6IDUgMTA7XG59XG48L3N0eWxlPiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmZvbnQtaWNvbi1jb2xvcltkYXRhLXYtMzcxNzZkYTddIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgd2lkdGg6IDI1JTtcXG59XFxuLmZvb3RlcnJbZGF0YS12LTM3MTc2ZGE3XSB7XFxuICBoZWlnaHQ6IDE2MDtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG4gICAgY29uc3QgYXBwbGljYXRpb24gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbiAgICByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpO1xuXG4gICAgZXhwb3J0cy5mb3JFYWNoKGNzc0V4cG9ydCA9PiB7XG4gICAgICAgIGlmIChjc3NFeHBvcnQubGVuZ3RoID4gMSAmJiBjc3NFeHBvcnRbMV0pIHtcbiAgICAgICAgICAgIC8vIGFwcGx5aW5nIHRoZSBzZWNvbmQgaXRlbSBvZiB0aGUgZXhwb3J0IGFzIGl0IGNvbnRhaW5zIHRoZSBjc3MgY29udGVudHNcbiAgICAgICAgICAgIGFwcGxpY2F0aW9uLmFkZENzcyhjc3NFeHBvcnRbMV0pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgO1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2NvbXBvbmVudHMvRm9vdGVybS52dWUnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogJHZpZXctcHJlZGljdGlvbjogYXF1YSAhZGVmYXVsdDsgKi9cXG5QYWdlW2RhdGEtdi02NzQxMGYzYV0ge1xcbiAgYmFja2dyb3VuZC1Db2xvcjogI2YyZjRmYjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiS2hhbmQtTWVkaXVtXFxcIiwgXFxcIktoYW5kIE1lZGl1bVxcXCI7XFxuICBmb250LXNpemU6IDE2O1xcbn1cXG4uaG9tZS1wYW5lbFtkYXRhLXYtNjc0MTBmM2FdIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDIwO1xcbiAgbWFyZ2luOiAxNTtcXG59XFxuLmxpc3Qtc2NoZWR1bGVbZGF0YS12LTY3NDEwZjNhXSB7XFxuICBtYXJnaW46IDIwO1xcbiAgc2VwYXJhdG9yQ29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG4ubGlzdC1ncm91cC1pdGVtW2RhdGEtdi02NzQxMGYzYV0ge1xcbiAgYm9yZGVyLXJhZGl1czogNTtcXG59XFxuLm1hdGNoLWNvbnRhaW5lcltkYXRhLXYtNjc0MTBmM2FdIHtcXG4gIG1hcmdpbi1ib3R0b206IDE1O1xcbiAgYm9yZGVyLXJhZGl1czogNTtcXG4gIGJhY2tncm91bmQtQ29sb3I6ICNmZmY7XFxuICBzZXBhcmF0b3JDb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3gtc2hhZG93OiAxMHB4IDEwcHggNXB4IGdyZXk7XFxufVxcbi5kZXNjcmlwdGlvbi1sYWJlbFtkYXRhLXYtNjc0MTBmM2FdIHtcXG4gIG1hcmdpbi1ib3R0b206IDE1O1xcbn1cXG4ubGl2ZVtkYXRhLXYtNjc0MTBmM2FdIHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI0JFMzA3MywgI0ZBMTY0Mik7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtc2l6ZTogMTI7XFxuICBib3JkZXItcmFkaXVzOiA1O1xcbiAgcGFkZGluZzogNSAxMDtcXG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tcmlnaHQ6IDEwO1xcbiAgbWFyZ2luLXRvcDogMTA7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4uc2hvcnRuYW1lW2RhdGEtdi02NzQxMGYzYV0ge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMzk3REM4LCAjNTQ2MUNCKTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG4gIHRleHRBbGlnbm1lbnQ6IGNlbnRlcjtcXG59XFxuLnByZWRpY3QtYnV0dG9uW2RhdGEtdi02NzQxMGYzYV0ge1xcbiAgbWFyZ2luLXRvcDogMTA7XFxuICBib3JkZXItcmFkaXVzOiAwIDAgNSA1O1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXNpemU6IDE0O1xcbn1cXG5cXG4vKiAudmlldy1wcmVkaWN0aW9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHZpZXctcHJlZGljdGlvbjtcXG59ICovXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG4gICAgY29uc3QgYXBwbGljYXRpb24gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbiAgICByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpO1xuXG4gICAgZXhwb3J0cy5mb3JFYWNoKGNzc0V4cG9ydCA9PiB7XG4gICAgICAgIGlmIChjc3NFeHBvcnQubGVuZ3RoID4gMSAmJiBjc3NFeHBvcnRbMV0pIHtcbiAgICAgICAgICAgIC8vIGFwcGx5aW5nIHRoZSBzZWNvbmQgaXRlbSBvZiB0aGUgZXhwb3J0IGFzIGl0IGNvbnRhaW5zIHRoZSBjc3MgY29udGVudHNcbiAgICAgICAgICAgIGFwcGxpY2F0aW9uLmFkZENzcyhjc3NFeHBvcnRbMV0pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgO1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2NvbXBvbmVudHMvSG9tZS52dWUnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiUGFnZVtkYXRhLXYtMzNhZDJlNTNdIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmY0ZmI7XFxuICBmb250LWZhbWlseTogXFxcIktoYW5kLU1lZGl1bVxcXCIsIFxcXCJLaGFuZCBNZWRpdW1cXFwiO1xcbiAgZm9udC1zaXplOiAxNjtcXG59XFxuLmhvbWUtcGFuZWxbZGF0YS12LTMzYWQyZTUzXSB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAyMDtcXG4gIG1hcmdpbjogMTU7XFxufVxcbi5wcm9maWxlLWNvbnRlbnRbZGF0YS12LTMzYWQyZTUzXSB7XFxuICBtYXJnaW46IDIwO1xcbiAgcGFkZGluZzogMjA7XFxuICBib3JkZXItcmFkaXVzOiA1O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCA1cHggZ3JleTtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG4gICAgY29uc3QgYXBwbGljYXRpb24gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbiAgICByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpO1xuXG4gICAgZXhwb3J0cy5mb3JFYWNoKGNzc0V4cG9ydCA9PiB7XG4gICAgICAgIGlmIChjc3NFeHBvcnQubGVuZ3RoID4gMSAmJiBjc3NFeHBvcnRbMV0pIHtcbiAgICAgICAgICAgIC8vIGFwcGx5aW5nIHRoZSBzZWNvbmQgaXRlbSBvZiB0aGUgZXhwb3J0IGFzIGl0IGNvbnRhaW5zIHRoZSBjc3MgY29udGVudHNcbiAgICAgICAgICAgIGFwcGxpY2F0aW9uLmFkZENzcyhjc3NFeHBvcnRbMV0pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgO1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2NvbXBvbmVudHMvVXNlclByb2ZpbGUudnVlJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlBhZ2VbZGF0YS12LTYyMzFlZGUyXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmNGZiO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJLaGFuZC1NZWRpdW1cXFwiLCBcXFwiS2hhbmQgTWVkaXVtXFxcIjtcXG4gIGZvbnQtc2l6ZTogMTY7XFxufVxcbi5ob21lLXBhbmVsW2RhdGEtdi02MjMxZWRlMl0ge1xcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjA7XFxuICBtYXJnaW46IDE1O1xcbn1cXG4ubGlzdC1zY2hlZHVsZVtkYXRhLXYtNjIzMWVkZTJdIHtcXG4gIG1hcmdpbjogMjA7XFxuICBzZXBhcmF0b3Jjb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbi5saXN0LWdyb3VwLWl0ZW1bZGF0YS12LTYyMzFlZGUyXSB7XFxuICBib3JkZXItcmFkaXVzOiA1O1xcbn1cXG4ubWF0Y2gtY29udGFpbmVyW2RhdGEtdi02MjMxZWRlMl0ge1xcbiAgbWFyZ2luLWJvdHRvbTogMTU7XFxuICBib3JkZXItcmFkaXVzOiA1O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIHNlcGFyYXRvcmNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCA1cHggZ3JleTtcXG59XFxuLmRlc2NyaXB0aW9uLWxhYmVsW2RhdGEtdi02MjMxZWRlMl0ge1xcbiAgbWFyZ2luLWJvdHRvbTogMTU7XFxufVxcbi5saXZlW2RhdGEtdi02MjMxZWRlMl0ge1xcbiAgZm9udC1zaXplOiAxMjtcXG4gIGJvcmRlci1yYWRpdXM6IDU7XFxuICBwYWRkaW5nOiA1IDEwO1xcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi1yaWdodDogMTA7XFxuICBtYXJnaW4tdG9wOiAxMDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG59XFxuLnByZWRpY3QtYnV0dG9uW2RhdGEtdi02MjMxZWRlMl0ge1xcbiAgbWFyZ2luOiAxMDtcXG4gIGJvcmRlci1yYWRpdXM6IDU7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNiZTMwNzMsICNmYTE2NDIpO1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXNpemU6IDE0O1xcbiAgcGFkZGluZzogNSAxMDtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG4gICAgY29uc3QgYXBwbGljYXRpb24gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbiAgICByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpO1xuXG4gICAgZXhwb3J0cy5mb3JFYWNoKGNzc0V4cG9ydCA9PiB7XG4gICAgICAgIGlmIChjc3NFeHBvcnQubGVuZ3RoID4gMSAmJiBjc3NFeHBvcnRbMV0pIHtcbiAgICAgICAgICAgIC8vIGFwcGx5aW5nIHRoZSBzZWNvbmQgaXRlbSBvZiB0aGUgZXhwb3J0IGFzIGl0IGNvbnRhaW5zIHRoZSBjc3MgY29udGVudHNcbiAgICAgICAgICAgIGFwcGxpY2F0aW9uLmFkZENzcyhjc3NFeHBvcnRbMV0pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgO1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2NvbXBvbmVudHMvVmlld3ByZWRpY3Rpb24udnVlJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbiNoZWFkZXIgLkdsb2JhbF9wb2ludFtkYXRhLXYtMWE5YmIxMjhdIHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2JlMzA3MywgI2ZhMTY0Mik7XFxuICBwYWRkaW5nOiAxMDtcXG4gIGZvbnQtc2l6ZTogMTQ7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDIwO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW4tcmlnaHQ6IDEwO1xcbn1cXG4jaGVhZGVyIC5idG5bZGF0YS12LTFhOWJiMTI4XSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uYWN0aW9uYmFyW2RhdGEtdi0xYTliYjEyOF0ge1xcbiAgcGFkZGluZzogMTA7XFxuICBoZWlnaHQ6IDE2MDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzM5N2RjOCwgIzU0NjFjYik7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJveC1zaGFkb3c6IDVweCAxMHB4IDhweCAjODg4ODg4O1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cbiAgICBjb25zdCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5cbiAgICBleHBvcnRzLmZvckVhY2goY3NzRXhwb3J0ID0+IHtcbiAgICAgICAgaWYgKGNzc0V4cG9ydC5sZW5ndGggPiAxICYmIGNzc0V4cG9ydFsxXSkge1xuICAgICAgICAgICAgLy8gYXBwbHlpbmcgdGhlIHNlY29uZCBpdGVtIG9mIHRoZSBleHBvcnQgYXMgaXQgY29udGFpbnMgdGhlIGNzcyBjb250ZW50c1xuICAgICAgICAgICAgYXBwbGljYXRpb24uYWRkQ3NzKGNzc0V4cG9ydFsxXSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICA7XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vY29tcG9uZW50cy9IZWFkZXIudnVlJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5wcmVkaWN0LWJ1dHRvbi1hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU3YTE3MztcXG4gIGJvcmRlci1yYWRpdXM6IDU7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtc2l6ZTogMTY7XFxuICBtYXJnaW46IDVweDtcXG4gIHBhZGRpbmc6IDMwcHg7XFxufVxcbi5wcmVkaWN0LWJ1dHRvbi1ncmF5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XFxuICBib3JkZXItcmFkaXVzOiA1O1xcbiAgY29sb3I6ICM3MTcwNzA7XFxuICBmb250LXNpemU6IDE2O1xcbiAgbWFyZ2luOiA1cHg7XFxuICBwYWRkaW5nOiAzMHB4O1xcbn1cXG4ubGl2ZSB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2JlMzA3MywgI2ZhMTY0Mik7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtc2l6ZTogMTQ7XFxufVxcblBhZ2Uge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjRmYTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiS2hhbmQtTWVkaXVtXFxcIiwgXFxcIktoYW5kIE1lZGl1bVxcXCI7XFxuICBmb250LXNpemU6IDE2O1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cbiAgICBjb25zdCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5cbiAgICBleHBvcnRzLmZvckVhY2goY3NzRXhwb3J0ID0+IHtcbiAgICAgICAgaWYgKGNzc0V4cG9ydC5sZW5ndGggPiAxICYmIGNzc0V4cG9ydFsxXSkge1xuICAgICAgICAgICAgLy8gYXBwbHlpbmcgdGhlIHNlY29uZCBpdGVtIG9mIHRoZSBleHBvcnQgYXMgaXQgY29udGFpbnMgdGhlIGNzcyBjb250ZW50c1xuICAgICAgICAgICAgYXBwbGljYXRpb24uYWRkQ3NzKGNzc0V4cG9ydFsxXSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICA7XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vY29tcG9uZW50cy9RdWVzdGlvbnMudnVlJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczogXCJmb290ZXJyXCIsXG4gICAgICBhdHRyczogeyByb3c6IFwiMVwiLCBvcmllbnRhdGlvbjogXCJob3Jpem9udGFsXCIsIGJhY2tncm91bmRDb2xvcjogXCJyZWRcIiB9XG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZvbnQtaWNvbi1jb2xvclwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhIHN0YXR1cyBjb2xvclwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgbWFyZ2luOiBcIjE1XCIsIHRleHQ6IF92bS5fZihcImZvbnRpY29uXCIpKFwiZmEtaG9tZVwiKSB9LFxuICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uZ29Ub0hvbWUgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfYyhcbiAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZvbnQtaWNvbi1jb2xvclwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhIHN0YXR1cyBjb2xvclwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgbWFyZ2luOiBcIjE1XCIsIHRleHQ6IF92bS5fZihcImZvbnRpY29uXCIpKFwiZmEtZXllXCIpIH0sXG4gICAgICAgICAgICBvbjogeyB0YXA6IF92bS5nb1RvVmlld1ByZWRpY3QgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfYyhcbiAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZvbnQtaWNvbi1jb2xvclwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhIHN0YXR1cyBjb2xvclwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgbWFyZ2luOiBcIjE1XCIsIHRleHQ6IF92bS5fZihcImZvbnRpY29uXCIpKFwiZmEtYmFyLWNoYXJ0XCIpIH0sXG4gICAgICAgICAgICBvbjogeyB0YXA6IF92bS5nb1RvTGV0aGVyIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX2MoXG4gICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgeyBhdHRyczogeyB3aWR0aDogXCIyNSVcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogXCJ+L2Fzc2V0cy9OZXdQaWMvcHJvZmlsZS5wbmdcIiwgbWFyZ2luOiBcIjIwXCIgfSxcbiAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLmdvVG9Qcm9maWxlU2VjdGlvbiB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIkZsZXhib3hMYXlvdXRcIixcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczogXCJhY3Rpb25iYXJcIixcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcbiAgICAgICAgaWQ6IFwiaGVhZGVyXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcIkZsZXhib3hMYXlvdXRcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJidG4gbWVudVwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIHRleHQ6IFwiUHJlZGljdG9cIixcbiAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IFwiMjBcIixcbiAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTZcIixcbiAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX2MoXG4gICAgICAgIFwiRmxleGJveExheW91dFwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJ0biBwcFwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIkdsb2JhbF9wb2ludFwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJQb2ludHM6MTIzNFwiLCBjb2xvcjogXCIjZmZmZmZmXCIgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJwYWdlXCIsXG4gICAgeyBhdHRyczogeyBhY3Rpb25CYXJIaWRkZW46IFwidHJ1ZVwiIH0gfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJGbGV4Ym94TGF5b3V0XCIsXG4gICAgICAgIHsgYXR0cnM6IHsgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiwgaGVpZ2h0OiBcIjEwMCVcIiwgd2lkdGg6IFwiMTAwJVwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiSGVhZGVyXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IHJvd3M6IFwiKlwiLCBoZWlnaHQ6IFwiMTAwJVwiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidmlldy1wcmVkaWN0aW9uXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJMaXN0Vmlld1wiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGlzdC1zY2hlZHVsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGhlaWdodDogXCIxMDAlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VwYXJhdG9yQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBfdm0ubWF0Y2hlLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIrYWxpYXNcIjogXCJtYXRjaFwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRlbXBsYXRlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF0Y2ggPSByZWYubWF0Y2hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkaW5kZXggPSByZWYuJGluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJGV2ZW4gPSByZWYuJGV2ZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkb2RkID0gcmVmLiRvZGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJTY3JvbGxWaWV3XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWF0Y2gtY29udGFpbmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5zOiBcImF1dG8sMiosICosIGF1dG8sMipcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93czogXCIqLCAyKiwgKiwyKlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBtYXRjaC5tYXRjaE51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sU3BhbjogXCIyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogXCIxMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCIxMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjEyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGl2ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IG1hdGNoLnN0YXJ0aW5nVGltZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sU3BhbjogXCIzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWdubWVudDogXCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzaG9ydG5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBtYXRjaC50ZWFtMS5zaG9ydE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcIjEwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiOFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiNiA1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWdubWVudDogXCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IG1hdGNoLnRlYW0xLnRlYW1OYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJ2c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ25tZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjEyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic2hvcnRuYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogbWF0Y2gudGVhbTIuc2hvcnROYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCIxMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjYgNVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBtYXRjaC50ZWFtMi50ZWFtTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCI0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IG1hdGNoLnBsYWNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xTcGFuOiBcIjRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIjEwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IG1hdGNoLnN0YXJ0aW5nVGltZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sU3BhbjogXCI0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWdubWVudDogXCJyaWdodFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjEwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicHJlZGljdC1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIlN0YXJ0IFByZWRpY3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbFNwYW46IFwiNVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzBFQTk0OCwgIzBDQUFBNClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm9uSXRlbVRhcChtYXRjaClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFwiRm9vdGVybVwiKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiUGFnZVwiLFxuICAgIHsgYXR0cnM6IHsgYWN0aW9uQmFySGlkZGVuOiBcInRydWVcIiB9IH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgeyBhdHRyczogeyBiYWNrZ3JvdW5kQ29sb3I6IFwiI0Y1RjRGQVwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNFOUU3RjRcIixcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiNzBcIixcbiAgICAgICAgICAgICAgICBjb2x1bW5zOiBcIiAzKiwqXCIsXG4gICAgICAgICAgICAgICAgcm93czogXCIqXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6IFwiTG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15XCIsXG4gICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgY29sOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiBcImNlbnRlclwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJidXR0b25cIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiBcIlJld2FyZHNcIixcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjNTA2NUNCXCIsXG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCIjZmZmXCIsXG4gICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgIHRleHRBbGlnbm1lbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjEyXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0ZGRkZGRlwiLFxuICAgICAgICAgICAgICAgIGhlaWdodDogXCI0MFwiLFxuICAgICAgICAgICAgICAgIGNvbHVtbnM6IFwiKiwgMyosKiwqXCIsXG4gICAgICAgICAgICAgICAgcm93czogXCIqXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6IFwiUGljXCIsXG4gICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgY29sOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgIHRleHRBbGlnbm1lbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiBcIlBhcnRpY2lwYXRlXCIsXG4gICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgIHRleHRBbGlnbm1lbnQ6IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgdGV4dDogXCJQb2ludHNcIixcbiAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICBjb2w6IFwiMlwiLFxuICAgICAgICAgICAgICAgICAgdGV4dEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiBcImNlbnRlclwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6IFwiUmFua1wiLFxuICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgIGNvbDogXCIzXCIsXG4gICAgICAgICAgICAgICAgICB0ZXh0QWxpZ25tZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzUwNjVDQlwiLFxuICAgICAgICAgICAgICAgIGhlaWdodDogXCI0MFwiLFxuICAgICAgICAgICAgICAgIGNvbHVtbnM6IFwiKiwgMyosKiwqXCIsXG4gICAgICAgICAgICAgICAgcm93czogXCIqXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6IFwiUGljXCIsXG4gICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgY29sOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgIHRleHRBbGlnbm1lbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiBcIlByaW5jeSBWYXJnaGVzZVwiLFxuICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgIGNvbDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICB0ZXh0QWxpZ25tZW50OiBcImxlZnRcIixcbiAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiBcImNlbnRlclwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6IFwiMTEyXCIsXG4gICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgY29sOiBcIjJcIixcbiAgICAgICAgICAgICAgICAgIHRleHRBbGlnbm1lbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiBcIjAxXCIsXG4gICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgY29sOiBcIjNcIixcbiAgICAgICAgICAgICAgICAgIHRleHRBbGlnbm1lbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgeyBhdHRyczogeyBoZWlnaHQ6IFwiNDBcIiwgY29sdW1uczogXCIqLCAzKiwqLCpcIiwgcm93czogXCIqXCIgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgdGV4dDogXCJQaWNcIixcbiAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICBjb2w6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgdGV4dEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiBcImNlbnRlclwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6IFwiU2FyYXN3YXRpIEdhdWRhXCIsXG4gICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgIHRleHRBbGlnbm1lbnQ6IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgdGV4dDogXCIxMTJcIixcbiAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICBjb2w6IFwiMlwiLFxuICAgICAgICAgICAgICAgICAgdGV4dEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiBcImNlbnRlclwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6IFwiMDFcIixcbiAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICBjb2w6IFwiM1wiLFxuICAgICAgICAgICAgICAgICAgdGV4dEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiBcImNlbnRlclwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IGhlaWdodDogXCI0MFwiLCBjb2x1bW5zOiBcIiosIDMqLCosKlwiLCByb3dzOiBcIipcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiBcIlBpY1wiLFxuICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICB0ZXh0QWxpZ25tZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgdGV4dDogXCJSb3NoYW4gQWhpcmVcIixcbiAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgdGV4dEFsaWdubWVudDogXCJsZWZ0XCIsXG4gICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiBcIjExMlwiLFxuICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgIGNvbDogXCIyXCIsXG4gICAgICAgICAgICAgICAgICB0ZXh0QWxpZ25tZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgdGV4dDogXCIwMVwiLFxuICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgIGNvbDogXCIzXCIsXG4gICAgICAgICAgICAgICAgICB0ZXh0QWxpZ25tZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgIHsgYXR0cnM6IHsgaGVpZ2h0OiBcIjQwXCIsIGNvbHVtbnM6IFwiKiwgMyosKiwqXCIsIHJvd3M6IFwiKlwiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6IFwiUGljXCIsXG4gICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgY29sOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgIHRleHRBbGlnbm1lbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiBcIlByaXN0aW5hIFZhcmdoZXNlXCIsXG4gICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgIHRleHRBbGlnbm1lbnQ6IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgdGV4dDogXCIxMTJcIixcbiAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICBjb2w6IFwiMlwiLFxuICAgICAgICAgICAgICAgICAgdGV4dEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiBcImNlbnRlclwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6IFwiMDFcIixcbiAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICBjb2w6IFwiM1wiLFxuICAgICAgICAgICAgICAgICAgdGV4dEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiBcImNlbnRlclwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IGhlaWdodDogXCI0MFwiLCBjb2x1bW5zOiBcIiosIDMqLCosKlwiLCByb3dzOiBcIipcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiBcIlBpY1wiLFxuICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICB0ZXh0QWxpZ25tZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgdGV4dDogXCJEaW1wbGUgQWhpcmVcIixcbiAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgdGV4dEFsaWdubWVudDogXCJsZWZ0XCIsXG4gICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiBcIjExMlwiLFxuICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgIGNvbDogXCIyXCIsXG4gICAgICAgICAgICAgICAgICB0ZXh0QWxpZ25tZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgdGV4dDogXCIwMVwiLFxuICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgIGNvbDogXCIzXCIsXG4gICAgICAgICAgICAgICAgICB0ZXh0QWxpZ25tZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgIHsgYXR0cnM6IHsgaGVpZ2h0OiBcIjQwXCIsIGNvbHVtbnM6IFwiKiwgMyosKiwqXCIsIHJvd3M6IFwiKlwiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6IFwiUGljXCIsXG4gICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgY29sOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgIHRleHRBbGlnbm1lbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiBcIlByZXJuYSBBbnRob255XCIsXG4gICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgIHRleHRBbGlnbm1lbnQ6IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgdGV4dDogXCIxMTJcIixcbiAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICBjb2w6IFwiMlwiLFxuICAgICAgICAgICAgICAgICAgdGV4dEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiBcImNlbnRlclwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6IFwiMDFcIixcbiAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICBjb2w6IFwiM1wiLFxuICAgICAgICAgICAgICAgICAgdGV4dEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiBcImNlbnRlclwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IGhlaWdodDogXCI0MFwiLCBjb2x1bW5zOiBcIiosIDMqLCosKlwiLCByb3dzOiBcIipcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiBcIlBpY1wiLFxuICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICB0ZXh0QWxpZ25tZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgdGV4dDogXCJNYW5vaGFyIEFudGhvbnlcIixcbiAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgdGV4dEFsaWdubWVudDogXCJsZWZ0XCIsXG4gICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiBcIjExMlwiLFxuICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgIGNvbDogXCIyXCIsXG4gICAgICAgICAgICAgICAgICB0ZXh0QWxpZ25tZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgdGV4dDogXCIwMVwiLFxuICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgIGNvbDogXCIzXCIsXG4gICAgICAgICAgICAgICAgICB0ZXh0QWxpZ25tZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgIHsgYXR0cnM6IHsgaGVpZ2h0OiBcIjQwXCIsIGNvbHVtbnM6IFwiKiwgMyosKiwqXCIsIHJvd3M6IFwiKlwiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6IFwiUGljXCIsXG4gICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgY29sOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgIHRleHRBbGlnbm1lbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiBcIkhpdGVzaCBQYXRpbFwiLFxuICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgIGNvbDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICB0ZXh0QWxpZ25tZW50OiBcImxlZnRcIixcbiAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiBcImNlbnRlclwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6IFwiMTEyXCIsXG4gICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgY29sOiBcIjJcIixcbiAgICAgICAgICAgICAgICAgIHRleHRBbGlnbm1lbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiBcIjAxXCIsXG4gICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgY29sOiBcIjNcIixcbiAgICAgICAgICAgICAgICAgIHRleHRBbGlnbm1lbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJCdXR0b25cIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInByZWRpY3QtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJWaWV3IFByZWRpY3Rpb25cIiwgcm93OiBcIjNcIiwgY29sU3BhbjogXCI1XCIgfSxcbiAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5nb1RvVmlld1ByZWRpY3QgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJQYWdlXCIsXG4gICAgeyBhdHRyczogeyBhY3Rpb25CYXJIaWRkZW46IFwidHJ1ZVwiIH0gfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICB7IGF0dHJzOiB7IGl0ZW1zOiBfdm0ucXVlc3Rpb25zRm9yLCBcIithbGlhc1wiOiBcInF1ZXN0aW9uXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIkZsZXhib3hMYXlvdXRcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImZsZXgtc3RhcnRcIixcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJmbGV4LXN0YXJ0XCIsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMzYzdlYzdcIixcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjEwIDIwXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEgc3RhdHVzXCIsXG4gICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgY29sb3I6IFwid2hpdGVcIiB9LFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uX2YoXCJmb250aWNvblwiKShcImZhLWxvbmctYXJyb3ctbGVmdFwiKSxcbiAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjIwXCIsXG4gICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLmdvVG9Ib21lIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiBcIkVuZ2xhbmQgVnMgU291dGggQWZyaWNhXCIsXG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIkZsZXhib3hMYXlvdXRcIixcbiAgICAgICAgICAgIHsgYXR0cnM6IHsgYWxpZ25JdGVtczogXCJmbGV4LWVuZFwiLCBqdXN0aWZ5Q29udGVudDogXCJmbGV4LWVuZFwiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGl2ZVwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiBcIlRpbWVyIDE6NDQ6MzJcIixcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1MFwiLFxuICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiMjBcIixcbiAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCIxMFwiLFxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIxMFwiLFxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiM1MDY1Q0JcIixcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNmZmZcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogXCIyXCIsXG4gICAgICAgICAgICAgICAgYm9yZGVyY29sb3I6IFwiZ3JheVwiLFxuICAgICAgICAgICAgICAgIG1hcmdpbjogXCIyMFwiLFxuICAgICAgICAgICAgICAgIGhlaWdodDogXCJhdXRvXCIsXG4gICAgICAgICAgICAgICAgcGFkZGluZzogXCIxMFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInF1ZXN0aW9uLXRpdGxlXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIyMFwiLFxuICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgcm93OiBcIipcIixcbiAgICAgICAgICAgICAgICAgIHRleHQ6IFwid2hvIHdpbGwgd2luIHRoZSBtYXRjaFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHRleHRBbGlnbm1lbnQ6IFwicmlnaHRcIixcbiAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIxMFwiLFxuICAgICAgICAgICAgICAgICAgdGV4dDogXCJRIDEvNVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJGbGV4Ym94TGF5b3V0XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicHJlZGljdC1idXR0b24tYWN0aXZlXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImZsZXgtc3RhcnRcIixcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjE1XCIsXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7IGF0dHJzOiB7IHRleHQ6IFwiMC01IHJ1bnNcIiB9IH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7IGF0dHJzOiB7IHRleHQ6IFwiUG9pbnRzIDQwXCIgfSB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkZsZXhib3hMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwcmVkaWN0LWJ1dHRvbi1ncmF5XCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImZsZXgtc3RhcnRcIixcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjE1XCIsXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7IGF0dHJzOiB7IHRleHQ6IFwiNi0xMCBydW5zXCIgfSB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwgeyBhdHRyczogeyB0ZXh0OiBcIlBvaW50cyAyMFwiIH0gfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJGbGV4Ym94TGF5b3V0XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicHJlZGljdC1idXR0b24tZ3JheVwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJmbGV4LXN0YXJ0XCIsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIxNVwiLFxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwgeyBhdHRyczogeyB0ZXh0OiBcIjExLTE1IHJ1bnNcIiB9IH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7IGF0dHJzOiB7IHRleHQ6IFwiUG9pbnRzIDYwXCIgfSB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkZsZXhib3hMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwcmVkaWN0LWJ1dHRvbi1ncmF5XCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImZsZXgtc3RhcnRcIixcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjE1XCIsXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7IGF0dHJzOiB7IHRleHQ6IFwiMTYgb3IgbW9yZSBydW5zXCIgfSB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwgeyBhdHRyczogeyB0ZXh0OiBcIlBvaW50cyA4MFwiIH0gfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJGbGV4Ym94TGF5b3V0XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJmbGV4LXN0YXJ0XCIsXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjIwXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiUHJldmlvdXNcIixcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2I3YjdiN1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMyAzMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiI2ZmZlwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJOZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMzMThlYzRcIixcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjMgNDBcIixcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNmZmZcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIkZsZXhib3hMYXlvdXRcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgIFwibmctZGlzYWJsZWRcIjogXCJcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6IFwiU3VibWl0XCIsXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzU3YTE3M1wiLFxuICAgICAgICAgICAgICAgICAgY29sb3I6IFwiI2ZmZlwiLFxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVcIixcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMTAgMzBcIixcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCIxMFwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5nb1RvVmlld3ByZWRpY3Rpb24gfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJQYWdlXCIsXG4gICAgeyBhdHRyczogeyBhY3Rpb25CYXJIaWRkZW46IFwidHJ1ZVwiIH0gfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIkZsZXhib3hMYXlvdXRcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImZsZXgtc3RhcnRcIixcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJmbGV4LXN0YXJ0XCIsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMzYzdlYzdcIixcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjEwIDIwXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEgc3RhdHVzXCIsXG4gICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgY29sb3I6IFwid2hpdGVcIiB9LFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uX2YoXCJmb250aWNvblwiKShcImZhLWxvbmctYXJyb3ctbGVmdFwiKSxcbiAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjIwXCIsXG4gICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLmdvVG9Ib21lIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiBcIlByb2ZpbGVcIixcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiRmxleGJveExheW91dFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwcm9maWxlLWNvbnRlbnRcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHsgYXR0cnM6IHsgdGV4dDogXCJQUk9GSUxFXCIsIGhlaWdodDogXCI3MFwiIH0gfSksXG4gICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiBcIlNNSVQyNVwiLFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjQwXCIsXG4gICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICAgICAgICAgICAgICAgIHRleHRBbGlnbm1lbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkZsZXhib3hMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiU0VSSUVTIFBMQVlFRFwiLCBoZWlnaHQ6IFwiNDBcIiB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIk1BVENIRVMgUExBWUVEXCIsIGhlaWdodDogXCI0MFwiIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiRmxleGJveExheW91dFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHsgYXR0cnM6IHsgdGV4dDogXCIwXCIsIGhlaWdodDogXCIzMFwiIH0gfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHsgYXR0cnM6IHsgdGV4dDogXCIwXCIsIGhlaWdodDogXCIzMFwiIH0gfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJQYWdlXCIsXG4gICAgeyBhdHRyczogeyBhY3Rpb25CYXJIaWRkZW46IFwidHJ1ZVwiIH0gfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJGbGV4Ym94TGF5b3V0XCIsXG4gICAgICAgIHsgYXR0cnM6IHsgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiwgaGVpZ2h0OiBcIjEwMCVcIiwgd2lkdGg6IFwiMTAwJVwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiSGVhZGVyXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IHJvd3M6IFwiKlwiLCBoZWlnaHQ6IFwiMTAwJVwiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIkxpc3RWaWV3XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsaXN0LXNjaGVkdWxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgaGVpZ2h0OiBcIjEwMCVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXBhcmF0b3JDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IF92bS5tYXRjaGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIrYWxpYXNcIjogXCJtYXRjaFwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjogeyBpdGVtVGFwOiBfdm0ub25JdGVtVGFwIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi10ZW1wbGF0ZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHJlZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1hdGNoID0gcmVmLm1hdGNoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJGluZGV4ID0gcmVmLiRpbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRldmVuID0gcmVmLiRldmVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJG9kZCA9IHJlZi4kb2RkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1hdGNoLWNvbnRhaW5lclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbnM6IFwiYXV0bywyKiwgKiwgYXV0bywyKlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M6IFwiKiwgMiosICosMipcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogbWF0Y2gubWF0Y2hJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sc3BhbjogXCIyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIjEwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiMTBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjEyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsaXZlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IG1hdGNoLnBvaW50cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sc3BhbjogXCIzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJyZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiO1wiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWdubWVudDogXCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly9wbGF5Lm5hdGl2ZXNjcmlwdC5vcmcvZGlzdC9hc3NldHMvaW1nL05hdGl2ZVNjcmlwdF9sb2dvLnBuZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcIjEwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMzBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjMwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogbWF0Y2guZmlyc3RNYXRjaCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjEyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJ2c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbm1lbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjEyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImh0dHBzOi8vcGxheS5uYXRpdmVzY3JpcHQub3JnL2Rpc3QvYXNzZXRzL2ltZy9OYXRpdmVTY3JpcHRfbG9nby5wbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCIxMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjMwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIzMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5nb1RvTGVhdGhlckJvYXJkIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBtYXRjaC5zZWNvbmRNYXRjaCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCI0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjEyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogbWF0Y2gucGxhY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHNwYW46IFwiNFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogXCIxMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBtYXRjaC50aW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xzcGFuOiBcIjRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbm1lbnQ6IFwicmlnaHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjEwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicHJlZGljdC1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJWaWV3IFByZWRpY3Rpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sc3BhbjogXCI1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWdubWVudDogXCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uZ29Ub1F1ZXN0aW9uIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFwiRm9vdGVybVwiKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgbWFwID0ge1xuXHRcIi4vYXBwLmNzc1wiOiBcIi4vYXBwLmNzc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuLyBzeW5jIF5cXFxcLlxcXFwvYXBwXFxcXC4oY3NzfHNjc3N8bGVzc3xzYXNzKSRcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vYXBwLmNzc1wiOiBcIi4vYXBwLmNzc1wiLFxuXHRcIi4vYXBwLmpzXCI6IFwiLi9hcHAuanNcIixcblx0XCIuL2Fzc2V0cy9mb250LWF3ZXNvbWUuY3NzXCI6IFwiLi9hc3NldHMvZm9udC1hd2Vzb21lLmNzc1wiLFxuXHRcIi4vY3NzL2FuaW1hdGUuY3NzXCI6IFwiLi9jc3MvYW5pbWF0ZS5jc3NcIixcblx0XCIuL25hdGl2ZXNjcmlwdC1mb250aWNvbi9saWIuanNcIjogXCIuL25hdGl2ZXNjcmlwdC1mb250aWNvbi9saWIuanNcIixcblx0XCIuL25hdGl2ZXNjcmlwdC1mb250aWNvbi9uYXRpdmVzY3JpcHQtZm9udGljb24uanNcIjogXCIuL25hdGl2ZXNjcmlwdC1mb250aWNvbi9uYXRpdmVzY3JpcHQtZm9udGljb24uanNcIixcblx0XCIuL3Njc3MvZm9vdGVyU2VjdGlvbi5zY3NzXCI6IFwiLi9zY3NzL2Zvb3RlclNlY3Rpb24uc2Nzc1wiLFxuXHRcIi4vc2Nzcy9tYWluLnNjc3NcIjogXCIuL3Njc3MvbWFpbi5zY3NzXCIsXG5cdFwiLi9zY3NzL3ZhcmlhYmxlLnNjc3NcIjogXCIuL3Njc3MvdmFyaWFibGUuc2Nzc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuLyBzeW5jIHJlY3Vyc2l2ZSAoPzwhXFxcXGJBcHBfUmVzb3VyY2VzXFxcXGIuKilcXFxcLih4bWx8Y3NzfGpzfCg/PCFcXFxcLmRcXFxcLil0c3woPzwhXFxcXGJfW1xcXFx3LV0qXFxcXC4pc2NzcykkXCI7IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5leHBvcnRzLmkocmVxdWlyZShcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS0yIW5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmxpZ2h0LmNzc1wiKSwgXCJcIik7XG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmV4dHJhLWJvbGR7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiS2hhbmQtQm9sZFxcXCIsIFxcXCJLaGFuZCBCb2xkXFxcIjtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gICAgZm9udC1zaXplOiAzMjtcXG59XFxuXFxuLmJvbGR7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiQXNzaXN0YW50LUJvbGRcXFwiLFxcXCJBc3Npc3RhbnRcXFwiO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uc2VtaS1ib2xke1xcbiAgICBmb250LWZhbWlseTogXFxcIkFzc2lzdGFudC1TZW1pQm9sZFxcXCIsXFxcIkFzc2lzdGFudCBTZW1pQm9sZFxcXCI7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5hbGlnbi1jZW50ZXIgeyBcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXFxufVxcbi5mb290ZXJ7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzM5N0RDOCwgIzU0NjFDQik7XFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbjtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9hcHAuY3NzJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJpbXBvcnQgVnVlIGZyb20gJ25hdGl2ZXNjcmlwdC12dWUnO1xuaW1wb3J0IEhvbWUgZnJvbSAnLi9jb21wb25lbnRzL0hvbWUnO1xuaW1wb3J0IHsgVE5TRm9udEljb24sIGZvbnRpY29uIH0gZnJvbSAnLi9uYXRpdmVzY3JpcHQtZm9udGljb24nO1xuXG5UTlNGb250SWNvbi5wYXRocyA9IHtcbiAgICBmYTogJy4vYXNzZXRzL2ZvbnQtYXdlc29tZS5jc3MnLFxufTtcblROU0ZvbnRJY29uLmxvYWRDc3MoKTtcblxuVnVlLmZpbHRlcignZm9udGljb24nLCBmb250aWNvbik7XG5cblxubmV3IFZ1ZSh7XG5cbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8RnJhbWU+XG4gICAgICAgICAgICA8SG9tZSAvPlxuICAgICAgICA8L0ZyYW1lPmAsXG5cbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIEhvbWVcbiAgICB9XG59KS4kc3RhcnQoKTsiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5mYS1nbGFzczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDAwXFxcIjtcXG59XFxuLmZhLW11c2ljOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMDFcXFwiO1xcbn1cXG4uZmEtc2VhcmNoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMDJcXFwiO1xcbn1cXG4uZmEtZW52ZWxvcGUtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDAzXFxcIjtcXG59XFxuLmZhLWhlYXJ0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMDRcXFwiO1xcbn1cXG4uZmEtc3RhcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDA1XFxcIjtcXG59XFxuLmZhLXN0YXItbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDA2XFxcIjtcXG59XFxuLmZhLXVzZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAwN1xcXCI7XFxufVxcbi5mYS1maWxtOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMDhcXFwiO1xcbn1cXG4uZmEtdGgtbGFyZ2U6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAwOVxcXCI7XFxufVxcbi5mYS10aDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDBBXFxcIjtcXG59XFxuLmZhLXRoLWxpc3Q6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAwQlxcXCI7XFxufVxcbi5mYS1jaGVjazpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDBDXFxcIjtcXG59XFxuLmZhLXJlbW92ZTpiZWZvcmUsXFxuLmZhLWNsb3NlOmJlZm9yZSxcXG4uZmEtdGltZXM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAwRFxcXCI7XFxufVxcbi5mYS1zZWFyY2gtcGx1czpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDBFXFxcIjtcXG59XFxuLmZhLXNlYXJjaC1taW51czpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDEwXFxcIjtcXG59XFxuLmZhLXBvd2VyLW9mZjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDExXFxcIjtcXG59XFxuLmZhLXNpZ25hbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDEyXFxcIjtcXG59XFxuLmZhLWdlYXI6YmVmb3JlLFxcbi5mYS1jb2c6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAxM1xcXCI7XFxufVxcbi5mYS10cmFzaC1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMTRcXFwiO1xcbn1cXG4uZmEtaG9tZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDE1XFxcIjtcXG59XFxuLmZhLWZpbGUtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDE2XFxcIjtcXG59XFxuLmZhLWNsb2NrLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAxN1xcXCI7XFxufVxcbi5mYS1yb2FkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMThcXFwiO1xcbn1cXG4uZmEtZG93bmxvYWQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAxOVxcXCI7XFxufVxcbi5mYS1hcnJvdy1jaXJjbGUtby1kb3duOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMUFcXFwiO1xcbn1cXG4uZmEtYXJyb3ctY2lyY2xlLW8tdXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAxQlxcXCI7XFxufVxcbi5mYS1pbmJveDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDFDXFxcIjtcXG59XFxuLmZhLXBsYXktY2lyY2xlLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAxRFxcXCI7XFxufVxcbi5mYS1yb3RhdGUtcmlnaHQ6YmVmb3JlLFxcbi5mYS1yZXBlYXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAxRVxcXCI7XFxufVxcbi5mYS1yZWZyZXNoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMjFcXFwiO1xcbn1cXG4uZmEtbGlzdC1hbHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAyMlxcXCI7XFxufVxcbi5mYS1sb2NrOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMjNcXFwiO1xcbn1cXG4uZmEtZmxhZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDI0XFxcIjtcXG59XFxuLmZhLWhlYWRwaG9uZXM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAyNVxcXCI7XFxufVxcbi5mYS12b2x1bWUtb2ZmOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMjZcXFwiO1xcbn1cXG4uZmEtdm9sdW1lLWRvd246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAyN1xcXCI7XFxufVxcbi5mYS12b2x1bWUtdXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAyOFxcXCI7XFxufVxcbi5mYS1xcmNvZGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAyOVxcXCI7XFxufVxcbi5mYS1iYXJjb2RlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMkFcXFwiO1xcbn1cXG4uZmEtdGFnOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMkJcXFwiO1xcbn1cXG4uZmEtdGFnczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDJDXFxcIjtcXG59XFxuLmZhLWJvb2s6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAyRFxcXCI7XFxufVxcbi5mYS1ib29rbWFyazpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDJFXFxcIjtcXG59XFxuLmZhLXByaW50OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMkZcXFwiO1xcbn1cXG4uZmEtY2FtZXJhOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMzBcXFwiO1xcbn1cXG4uZmEtZm9udDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDMxXFxcIjtcXG59XFxuLmZhLWJvbGQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAzMlxcXCI7XFxufVxcbi5mYS1pdGFsaWM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAzM1xcXCI7XFxufVxcbi5mYS10ZXh0LWhlaWdodDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDM0XFxcIjtcXG59XFxuLmZhLXRleHQtd2lkdGg6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAzNVxcXCI7XFxufVxcbi5mYS1hbGlnbi1sZWZ0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMzZcXFwiO1xcbn1cXG4uZmEtYWxpZ24tY2VudGVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMzdcXFwiO1xcbn1cXG4uZmEtYWxpZ24tcmlnaHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAzOFxcXCI7XFxufVxcbi5mYS1hbGlnbi1qdXN0aWZ5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMzlcXFwiO1xcbn1cXG4uZmEtbGlzdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDNBXFxcIjtcXG59XFxuLmZhLWRlZGVudDpiZWZvcmUsXFxuLmZhLW91dGRlbnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAzQlxcXCI7XFxufVxcbi5mYS1pbmRlbnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAzQ1xcXCI7XFxufVxcbi5mYS12aWRlby1jYW1lcmE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAzRFxcXCI7XFxufVxcbi5mYS1waG90bzpiZWZvcmUsXFxuLmZhLWltYWdlOmJlZm9yZSxcXG4uZmEtcGljdHVyZS1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwM0VcXFwiO1xcbn1cXG4uZmEtcGVuY2lsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNDBcXFwiO1xcbn1cXG4uZmEtbWFwLW1hcmtlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDQxXFxcIjtcXG59XFxuLmZhLWFkanVzdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDQyXFxcIjtcXG59XFxuLmZhLXRpbnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA0M1xcXCI7XFxufVxcbi5mYS1lZGl0OmJlZm9yZSxcXG4uZmEtcGVuY2lsLXNxdWFyZS1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNDRcXFwiO1xcbn1cXG4uZmEtc2hhcmUtc3F1YXJlLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA0NVxcXCI7XFxufVxcbi5mYS1jaGVjay1zcXVhcmUtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDQ2XFxcIjtcXG59XFxuLmZhLWFycm93czpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDQ3XFxcIjtcXG59XFxuLmZhLXN0ZXAtYmFja3dhcmQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA0OFxcXCI7XFxufVxcbi5mYS1mYXN0LWJhY2t3YXJkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNDlcXFwiO1xcbn1cXG4uZmEtYmFja3dhcmQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA0QVxcXCI7XFxufVxcbi5mYS1wbGF5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNEJcXFwiO1xcbn1cXG4uZmEtcGF1c2U6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA0Q1xcXCI7XFxufVxcbi5mYS1zdG9wOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNERcXFwiO1xcbn1cXG4uZmEtZm9yd2FyZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDRFXFxcIjtcXG59XFxuLmZhLWZhc3QtZm9yd2FyZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDUwXFxcIjtcXG59XFxuLmZhLXN0ZXAtZm9yd2FyZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDUxXFxcIjtcXG59XFxuLmZhLWVqZWN0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNTJcXFwiO1xcbn1cXG4uZmEtY2hldnJvbi1sZWZ0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNTNcXFwiO1xcbn1cXG4uZmEtY2hldnJvbi1yaWdodDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDU0XFxcIjtcXG59XFxuLmZhLXBsdXMtY2lyY2xlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNTVcXFwiO1xcbn1cXG4uZmEtbWludXMtY2lyY2xlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNTZcXFwiO1xcbn1cXG4uZmEtdGltZXMtY2lyY2xlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNTdcXFwiO1xcbn1cXG4uZmEtY2hlY2stY2lyY2xlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNThcXFwiO1xcbn1cXG4uZmEtcXVlc3Rpb24tY2lyY2xlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNTlcXFwiO1xcbn1cXG4uZmEtaW5mby1jaXJjbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA1QVxcXCI7XFxufVxcbi5mYS1jcm9zc2hhaXJzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNUJcXFwiO1xcbn1cXG4uZmEtdGltZXMtY2lyY2xlLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA1Q1xcXCI7XFxufVxcbi5mYS1jaGVjay1jaXJjbGUtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDVEXFxcIjtcXG59XFxuLmZhLWJhbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDVFXFxcIjtcXG59XFxuLmZhLWFycm93LWxlZnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA2MFxcXCI7XFxufVxcbi5mYS1hcnJvdy1yaWdodDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDYxXFxcIjtcXG59XFxuLmZhLWFycm93LXVwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNjJcXFwiO1xcbn1cXG4uZmEtYXJyb3ctZG93bjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDYzXFxcIjtcXG59XFxuLmZhLW1haWwtZm9yd2FyZDpiZWZvcmUsXFxuLmZhLXNoYXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNjRcXFwiO1xcbn1cXG4uZmEtZXhwYW5kOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNjVcXFwiO1xcbn1cXG4uZmEtY29tcHJlc3M6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA2NlxcXCI7XFxufVxcbi5mYS1wbHVzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNjdcXFwiO1xcbn1cXG4uZmEtbWludXM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA2OFxcXCI7XFxufVxcbi5mYS1hc3RlcmlzazpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDY5XFxcIjtcXG59XFxuLmZhLWV4Y2xhbWF0aW9uLWNpcmNsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDZBXFxcIjtcXG59XFxuLmZhLWdpZnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA2QlxcXCI7XFxufVxcbi5mYS1sZWFmOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNkNcXFwiO1xcbn1cXG4uZmEtZmlyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDZEXFxcIjtcXG59XFxuLmZhLWV5ZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDZFXFxcIjtcXG59XFxuLmZhLWV5ZS1zbGFzaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDcwXFxcIjtcXG59XFxuLmZhLXdhcm5pbmc6YmVmb3JlLFxcbi5mYS1leGNsYW1hdGlvbi10cmlhbmdsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDcxXFxcIjtcXG59XFxuLmZhLXBsYW5lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNzJcXFwiO1xcbn1cXG4uZmEtY2FsZW5kYXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA3M1xcXCI7XFxufVxcbi5mYS1yYW5kb206YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA3NFxcXCI7XFxufVxcbi5mYS1jb21tZW50OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNzVcXFwiO1xcbn1cXG4uZmEtbWFnbmV0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNzZcXFwiO1xcbn1cXG4uZmEtY2hldnJvbi11cDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDc3XFxcIjtcXG59XFxuLmZhLWNoZXZyb24tZG93bjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDc4XFxcIjtcXG59XFxuLmZhLXJldHdlZXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA3OVxcXCI7XFxufVxcbi5mYS1zaG9wcGluZy1jYXJ0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwN0FcXFwiO1xcbn1cXG4uZmEtZm9sZGVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwN0JcXFwiO1xcbn1cXG4uZmEtZm9sZGVyLW9wZW46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA3Q1xcXCI7XFxufVxcbi5mYS1hcnJvd3MtdjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDdEXFxcIjtcXG59XFxuLmZhLWFycm93cy1oOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwN0VcXFwiO1xcbn1cXG4uZmEtYmFyLWNoYXJ0LW86YmVmb3JlLFxcbi5mYS1iYXItY2hhcnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA4MFxcXCI7XFxufVxcbi5mYS10d2l0dGVyLXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDgxXFxcIjtcXG59XFxuLmZhLWZhY2Vib29rLXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDgyXFxcIjtcXG59XFxuLmZhLWNhbWVyYS1yZXRybzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDgzXFxcIjtcXG59XFxuLmZhLWtleTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDg0XFxcIjtcXG59XFxuLmZhLWdlYXJzOmJlZm9yZSxcXG4uZmEtY29nczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDg1XFxcIjtcXG59XFxuLmZhLWNvbW1lbnRzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwODZcXFwiO1xcbn1cXG4uZmEtdGh1bWJzLW8tdXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA4N1xcXCI7XFxufVxcbi5mYS10aHVtYnMtby1kb3duOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwODhcXFwiO1xcbn1cXG4uZmEtc3Rhci1oYWxmOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwODlcXFwiO1xcbn1cXG4uZmEtaGVhcnQtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDhBXFxcIjtcXG59XFxuLmZhLXNpZ24tb3V0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwOEJcXFwiO1xcbn1cXG4uZmEtbGlua2VkaW4tc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwOENcXFwiO1xcbn1cXG4uZmEtdGh1bWItdGFjazpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDhEXFxcIjtcXG59XFxuLmZhLWV4dGVybmFsLWxpbms6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA4RVxcXCI7XFxufVxcbi5mYS1zaWduLWluOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwOTBcXFwiO1xcbn1cXG4uZmEtdHJvcGh5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwOTFcXFwiO1xcbn1cXG4uZmEtZ2l0aHViLXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDkyXFxcIjtcXG59XFxuLmZhLXVwbG9hZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDkzXFxcIjtcXG59XFxuLmZhLWxlbW9uLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA5NFxcXCI7XFxufVxcbi5mYS1waG9uZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDk1XFxcIjtcXG59XFxuLmZhLXNxdWFyZS1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwOTZcXFwiO1xcbn1cXG4uZmEtYm9va21hcmstbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDk3XFxcIjtcXG59XFxuLmZhLXBob25lLXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDk4XFxcIjtcXG59XFxuLmZhLXR3aXR0ZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA5OVxcXCI7XFxufVxcbi5mYS1mYWNlYm9vay1mOmJlZm9yZSxcXG4uZmEtZmFjZWJvb2s6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA5QVxcXCI7XFxufVxcbi5mYS1naXRodWI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA5QlxcXCI7XFxufVxcbi5mYS11bmxvY2s6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA5Q1xcXCI7XFxufVxcbi5mYS1jcmVkaXQtY2FyZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDlEXFxcIjtcXG59XFxuLmZhLWZlZWQ6YmVmb3JlLFxcbi5mYS1yc3M6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA5RVxcXCI7XFxufVxcbi5mYS1oZGQtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEEwXFxcIjtcXG59XFxuLmZhLWJ1bGxob3JuOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQTFcXFwiO1xcbn1cXG4uZmEtYmVsbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEYzXFxcIjtcXG59XFxuLmZhLWNlcnRpZmljYXRlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQTNcXFwiO1xcbn1cXG4uZmEtaGFuZC1vLXJpZ2h0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQTRcXFwiO1xcbn1cXG4uZmEtaGFuZC1vLWxlZnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBBNVxcXCI7XFxufVxcbi5mYS1oYW5kLW8tdXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBBNlxcXCI7XFxufVxcbi5mYS1oYW5kLW8tZG93bjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEE3XFxcIjtcXG59XFxuLmZhLWFycm93LWNpcmNsZS1sZWZ0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQThcXFwiO1xcbn1cXG4uZmEtYXJyb3ctY2lyY2xlLXJpZ2h0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQTlcXFwiO1xcbn1cXG4uZmEtYXJyb3ctY2lyY2xlLXVwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQUFcXFwiO1xcbn1cXG4uZmEtYXJyb3ctY2lyY2xlLWRvd246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBBQlxcXCI7XFxufVxcbi5mYS1nbG9iZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEFDXFxcIjtcXG59XFxuLmZhLXdyZW5jaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEFEXFxcIjtcXG59XFxuLmZhLXRhc2tzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQUVcXFwiO1xcbn1cXG4uZmEtZmlsdGVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQjBcXFwiO1xcbn1cXG4uZmEtYnJpZWZjYXNlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQjFcXFwiO1xcbn1cXG4uZmEtYXJyb3dzLWFsdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEIyXFxcIjtcXG59XFxuLmZhLWdyb3VwOmJlZm9yZSxcXG4uZmEtdXNlcnM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDMFxcXCI7XFxufVxcbi5mYS1jaGFpbjpiZWZvcmUsXFxuLmZhLWxpbms6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDMVxcXCI7XFxufVxcbi5mYS1jbG91ZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEMyXFxcIjtcXG59XFxuLmZhLWZsYXNrOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQzNcXFwiO1xcbn1cXG4uZmEtY3V0OmJlZm9yZSxcXG4uZmEtc2Npc3NvcnM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDNFxcXCI7XFxufVxcbi5mYS1jb3B5OmJlZm9yZSxcXG4uZmEtZmlsZXMtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEM1XFxcIjtcXG59XFxuLmZhLXBhcGVyY2xpcDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEM2XFxcIjtcXG59XFxuLmZhLXNhdmU6YmVmb3JlLFxcbi5mYS1mbG9wcHktbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEM3XFxcIjtcXG59XFxuLmZhLXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEM4XFxcIjtcXG59XFxuLmZhLW5hdmljb246YmVmb3JlLFxcbi5mYS1yZW9yZGVyOmJlZm9yZSxcXG4uZmEtYmFyczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEM5XFxcIjtcXG59XFxuLmZhLWxpc3QtdWw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDQVxcXCI7XFxufVxcbi5mYS1saXN0LW9sOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQ0JcXFwiO1xcbn1cXG4uZmEtc3RyaWtldGhyb3VnaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMENDXFxcIjtcXG59XFxuLmZhLXVuZGVybGluZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMENEXFxcIjtcXG59XFxuLmZhLXRhYmxlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQ0VcXFwiO1xcbn1cXG4uZmEtbWFnaWM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBEMFxcXCI7XFxufVxcbi5mYS10cnVjazpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEQxXFxcIjtcXG59XFxuLmZhLXBpbnRlcmVzdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEQyXFxcIjtcXG59XFxuLmZhLXBpbnRlcmVzdC1zcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBEM1xcXCI7XFxufVxcbi5mYS1nb29nbGUtcGx1cy1zcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBENFxcXCI7XFxufVxcbi5mYS1nb29nbGUtcGx1czpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEQ1XFxcIjtcXG59XFxuLmZhLW1vbmV5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwRDZcXFwiO1xcbn1cXG4uZmEtY2FyZXQtZG93bjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEQ3XFxcIjtcXG59XFxuLmZhLWNhcmV0LXVwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwRDhcXFwiO1xcbn1cXG4uZmEtY2FyZXQtbGVmdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEQ5XFxcIjtcXG59XFxuLmZhLWNhcmV0LXJpZ2h0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwREFcXFwiO1xcbn1cXG4uZmEtY29sdW1uczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMERCXFxcIjtcXG59XFxuLmZhLXVuc29ydGVkOmJlZm9yZSxcXG4uZmEtc29ydDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMERDXFxcIjtcXG59XFxuLmZhLXNvcnQtZG93bjpiZWZvcmUsXFxuLmZhLXNvcnQtZGVzYzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEREXFxcIjtcXG59XFxuLmZhLXNvcnQtdXA6YmVmb3JlLFxcbi5mYS1zb3J0LWFzYzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMERFXFxcIjtcXG59XFxuLmZhLWVudmVsb3BlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwRTBcXFwiO1xcbn1cXG4uZmEtbGlua2VkaW46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBFMVxcXCI7XFxufVxcbi5mYS1yb3RhdGUtbGVmdDpiZWZvcmUsXFxuLmZhLXVuZG86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBFMlxcXCI7XFxufVxcbi5mYS1sZWdhbDpiZWZvcmUsXFxuLmZhLWdhdmVsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwRTNcXFwiO1xcbn1cXG4uZmEtZGFzaGJvYXJkOmJlZm9yZSxcXG4uZmEtdGFjaG9tZXRlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEU0XFxcIjtcXG59XFxuLmZhLWNvbW1lbnQtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEU1XFxcIjtcXG59XFxuLmZhLWNvbW1lbnRzLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBFNlxcXCI7XFxufVxcbi5mYS1mbGFzaDpiZWZvcmUsXFxuLmZhLWJvbHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBFN1xcXCI7XFxufVxcbi5mYS1zaXRlbWFwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwRThcXFwiO1xcbn1cXG4uZmEtdW1icmVsbGE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBFOVxcXCI7XFxufVxcbi5mYS1wYXN0ZTpiZWZvcmUsXFxuLmZhLWNsaXBib2FyZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEVBXFxcIjtcXG59XFxuLmZhLWxpZ2h0YnVsYi1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwRUJcXFwiO1xcbn1cXG4uZmEtZXhjaGFuZ2U6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBFQ1xcXCI7XFxufVxcbi5mYS1jbG91ZC1kb3dubG9hZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEVEXFxcIjtcXG59XFxuLmZhLWNsb3VkLXVwbG9hZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEVFXFxcIjtcXG59XFxuLmZhLXVzZXItbWQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBGMFxcXCI7XFxufVxcbi5mYS1zdGV0aG9zY29wZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEYxXFxcIjtcXG59XFxuLmZhLXN1aXRjYXNlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwRjJcXFwiO1xcbn1cXG4uZmEtYmVsbC1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQTJcXFwiO1xcbn1cXG4uZmEtY29mZmVlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwRjRcXFwiO1xcbn1cXG4uZmEtY3V0bGVyeTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEY1XFxcIjtcXG59XFxuLmZhLWZpbGUtdGV4dC1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwRjZcXFwiO1xcbn1cXG4uZmEtYnVpbGRpbmctbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEY3XFxcIjtcXG59XFxuLmZhLWhvc3BpdGFsLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBGOFxcXCI7XFxufVxcbi5mYS1hbWJ1bGFuY2U6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBGOVxcXCI7XFxufVxcbi5mYS1tZWRraXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBGQVxcXCI7XFxufVxcbi5mYS1maWdodGVyLWpldDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEZCXFxcIjtcXG59XFxuLmZhLWJlZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBGQ1xcXCI7XFxufVxcbi5mYS1oLXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEZEXFxcIjtcXG59XFxuLmZhLXBsdXMtc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwRkVcXFwiO1xcbn1cXG4uZmEtYW5nbGUtZG91YmxlLWxlZnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEwMFxcXCI7XFxufVxcbi5mYS1hbmdsZS1kb3VibGUtcmlnaHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEwMVxcXCI7XFxufVxcbi5mYS1hbmdsZS1kb3VibGUtdXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEwMlxcXCI7XFxufVxcbi5mYS1hbmdsZS1kb3VibGUtZG93bjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTAzXFxcIjtcXG59XFxuLmZhLWFuZ2xlLWxlZnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEwNFxcXCI7XFxufVxcbi5mYS1hbmdsZS1yaWdodDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTA1XFxcIjtcXG59XFxuLmZhLWFuZ2xlLXVwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMDZcXFwiO1xcbn1cXG4uZmEtYW5nbGUtZG93bjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTA3XFxcIjtcXG59XFxuLmZhLWRlc2t0b3A6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEwOFxcXCI7XFxufVxcbi5mYS1sYXB0b3A6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEwOVxcXCI7XFxufVxcbi5mYS10YWJsZXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEwQVxcXCI7XFxufVxcbi5mYS1tb2JpbGUtcGhvbmU6YmVmb3JlLFxcbi5mYS1tb2JpbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEwQlxcXCI7XFxufVxcbi5mYS1jaXJjbGUtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTBDXFxcIjtcXG59XFxuLmZhLXF1b3RlLWxlZnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEwRFxcXCI7XFxufVxcbi5mYS1xdW90ZS1yaWdodDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTBFXFxcIjtcXG59XFxuLmZhLXNwaW5uZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjExMFxcXCI7XFxufVxcbi5mYS1jaXJjbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjExMVxcXCI7XFxufVxcbi5mYS1tYWlsLXJlcGx5OmJlZm9yZSxcXG4uZmEtcmVwbHk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjExMlxcXCI7XFxufVxcbi5mYS1naXRodWItYWx0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMTNcXFwiO1xcbn1cXG4uZmEtZm9sZGVyLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjExNFxcXCI7XFxufVxcbi5mYS1mb2xkZXItb3Blbi1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMTVcXFwiO1xcbn1cXG4uZmEtc21pbGUtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTE4XFxcIjtcXG59XFxuLmZhLWZyb3duLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjExOVxcXCI7XFxufVxcbi5mYS1tZWgtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTFBXFxcIjtcXG59XFxuLmZhLWdhbWVwYWQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjExQlxcXCI7XFxufVxcbi5mYS1rZXlib2FyZC1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMUNcXFwiO1xcbn1cXG4uZmEtZmxhZy1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMURcXFwiO1xcbn1cXG4uZmEtZmxhZy1jaGVja2VyZWQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjExRVxcXCI7XFxufVxcbi5mYS10ZXJtaW5hbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTIwXFxcIjtcXG59XFxuLmZhLWNvZGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEyMVxcXCI7XFxufVxcbi5mYS1tYWlsLXJlcGx5LWFsbDpiZWZvcmUsXFxuLmZhLXJlcGx5LWFsbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTIyXFxcIjtcXG59XFxuLmZhLXN0YXItaGFsZi1lbXB0eTpiZWZvcmUsXFxuLmZhLXN0YXItaGFsZi1mdWxsOmJlZm9yZSxcXG4uZmEtc3Rhci1oYWxmLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEyM1xcXCI7XFxufVxcbi5mYS1sb2NhdGlvbi1hcnJvdzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTI0XFxcIjtcXG59XFxuLmZhLWNyb3A6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEyNVxcXCI7XFxufVxcbi5mYS1jb2RlLWZvcms6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEyNlxcXCI7XFxufVxcbi5mYS11bmxpbms6YmVmb3JlLFxcbi5mYS1jaGFpbi1icm9rZW46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEyN1xcXCI7XFxufVxcbi5mYS1xdWVzdGlvbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTI4XFxcIjtcXG59XFxuLmZhLWluZm86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEyOVxcXCI7XFxufVxcbi5mYS1leGNsYW1hdGlvbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTJBXFxcIjtcXG59XFxuLmZhLXN1cGVyc2NyaXB0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMkJcXFwiO1xcbn1cXG4uZmEtc3Vic2NyaXB0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMkNcXFwiO1xcbn1cXG4uZmEtZXJhc2VyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMkRcXFwiO1xcbn1cXG4uZmEtcHV6emxlLXBpZWNlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMkVcXFwiO1xcbn1cXG4uZmEtbWljcm9waG9uZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTMwXFxcIjtcXG59XFxuLmZhLW1pY3JvcGhvbmUtc2xhc2g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEzMVxcXCI7XFxufVxcbi5mYS1zaGllbGQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEzMlxcXCI7XFxufVxcbi5mYS1jYWxlbmRhci1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMzNcXFwiO1xcbn1cXG4uZmEtZmlyZS1leHRpbmd1aXNoZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEzNFxcXCI7XFxufVxcbi5mYS1yb2NrZXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEzNVxcXCI7XFxufVxcbi5mYS1tYXhjZG46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEzNlxcXCI7XFxufVxcbi5mYS1jaGV2cm9uLWNpcmNsZS1sZWZ0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMzdcXFwiO1xcbn1cXG4uZmEtY2hldnJvbi1jaXJjbGUtcmlnaHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEzOFxcXCI7XFxufVxcbi5mYS1jaGV2cm9uLWNpcmNsZS11cDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTM5XFxcIjtcXG59XFxuLmZhLWNoZXZyb24tY2lyY2xlLWRvd246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEzQVxcXCI7XFxufVxcbi5mYS1odG1sNTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTNCXFxcIjtcXG59XFxuLmZhLWNzczM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEzQ1xcXCI7XFxufVxcbi5mYS1hbmNob3I6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEzRFxcXCI7XFxufVxcbi5mYS11bmxvY2stYWx0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxM0VcXFwiO1xcbn1cXG4uZmEtYnVsbHNleWU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE0MFxcXCI7XFxufVxcbi5mYS1lbGxpcHNpcy1oOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxNDFcXFwiO1xcbn1cXG4uZmEtZWxsaXBzaXMtdjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTQyXFxcIjtcXG59XFxuLmZhLXJzcy1zcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE0M1xcXCI7XFxufVxcbi5mYS1wbGF5LWNpcmNsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTQ0XFxcIjtcXG59XFxuLmZhLXRpY2tldDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTQ1XFxcIjtcXG59XFxuLmZhLW1pbnVzLXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTQ2XFxcIjtcXG59XFxuLmZhLW1pbnVzLXNxdWFyZS1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxNDdcXFwiO1xcbn1cXG4uZmEtbGV2ZWwtdXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE0OFxcXCI7XFxufVxcbi5mYS1sZXZlbC1kb3duOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxNDlcXFwiO1xcbn1cXG4uZmEtY2hlY2stc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxNEFcXFwiO1xcbn1cXG4uZmEtcGVuY2lsLXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTRCXFxcIjtcXG59XFxuLmZhLWV4dGVybmFsLWxpbmstc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxNENcXFwiO1xcbn1cXG4uZmEtc2hhcmUtc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxNERcXFwiO1xcbn1cXG4uZmEtY29tcGFzczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTRFXFxcIjtcXG59XFxuLmZhLXRvZ2dsZS1kb3duOmJlZm9yZSxcXG4uZmEtY2FyZXQtc3F1YXJlLW8tZG93bjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTUwXFxcIjtcXG59XFxuLmZhLXRvZ2dsZS11cDpiZWZvcmUsXFxuLmZhLWNhcmV0LXNxdWFyZS1vLXVwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxNTFcXFwiO1xcbn1cXG4uZmEtdG9nZ2xlLXJpZ2h0OmJlZm9yZSxcXG4uZmEtY2FyZXQtc3F1YXJlLW8tcmlnaHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE1MlxcXCI7XFxufVxcbi5mYS1ldXJvOmJlZm9yZSxcXG4uZmEtZXVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxNTNcXFwiO1xcbn1cXG4uZmEtZ2JwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxNTRcXFwiO1xcbn1cXG4uZmEtZG9sbGFyOmJlZm9yZSxcXG4uZmEtdXNkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxNTVcXFwiO1xcbn1cXG4uZmEtcnVwZWU6YmVmb3JlLFxcbi5mYS1pbnI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE1NlxcXCI7XFxufVxcbi5mYS1jbnk6YmVmb3JlLFxcbi5mYS1ybWI6YmVmb3JlLFxcbi5mYS15ZW46YmVmb3JlLFxcbi5mYS1qcHk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE1N1xcXCI7XFxufVxcbi5mYS1ydWJsZTpiZWZvcmUsXFxuLmZhLXJvdWJsZTpiZWZvcmUsXFxuLmZhLXJ1YjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTU4XFxcIjtcXG59XFxuLmZhLXdvbjpiZWZvcmUsXFxuLmZhLWtydzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTU5XFxcIjtcXG59XFxuLmZhLWJpdGNvaW46YmVmb3JlLFxcbi5mYS1idGM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE1QVxcXCI7XFxufVxcbi5mYS1maWxlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxNUJcXFwiO1xcbn1cXG4uZmEtZmlsZS10ZXh0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxNUNcXFwiO1xcbn1cXG4uZmEtc29ydC1hbHBoYS1hc2M6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE1RFxcXCI7XFxufVxcbi5mYS1zb3J0LWFscGhhLWRlc2M6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE1RVxcXCI7XFxufVxcbi5mYS1zb3J0LWFtb3VudC1hc2M6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE2MFxcXCI7XFxufVxcbi5mYS1zb3J0LWFtb3VudC1kZXNjOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxNjFcXFwiO1xcbn1cXG4uZmEtc29ydC1udW1lcmljLWFzYzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTYyXFxcIjtcXG59XFxuLmZhLXNvcnQtbnVtZXJpYy1kZXNjOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxNjNcXFwiO1xcbn1cXG4uZmEtdGh1bWJzLXVwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxNjRcXFwiO1xcbn1cXG4uZmEtdGh1bWJzLWRvd246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE2NVxcXCI7XFxufVxcbi5mYS15b3V0dWJlLXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTY2XFxcIjtcXG59XFxuLmZhLXlvdXR1YmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE2N1xcXCI7XFxufVxcbi5mYS14aW5nOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxNjhcXFwiO1xcbn1cXG4uZmEteGluZy1zcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE2OVxcXCI7XFxufVxcbi5mYS15b3V0dWJlLXBsYXk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE2QVxcXCI7XFxufVxcbi5mYS1kcm9wYm94OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxNkJcXFwiO1xcbn1cXG4uZmEtc3RhY2stb3ZlcmZsb3c6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE2Q1xcXCI7XFxufVxcbi5mYS1pbnN0YWdyYW06YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE2RFxcXCI7XFxufVxcbi5mYS1mbGlja3I6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE2RVxcXCI7XFxufVxcbi5mYS1hZG46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE3MFxcXCI7XFxufVxcbi5mYS1iaXRidWNrZXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE3MVxcXCI7XFxufVxcbi5mYS1iaXRidWNrZXQtc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxNzJcXFwiO1xcbn1cXG4uZmEtdHVtYmxyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxNzNcXFwiO1xcbn1cXG4uZmEtdHVtYmxyLXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTc0XFxcIjtcXG59XFxuLmZhLWxvbmctYXJyb3ctZG93bjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTc1XFxcIjtcXG59XFxuLmZhLWxvbmctYXJyb3ctdXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE3NlxcXCI7XFxufVxcbi5mYS1sb25nLWFycm93LWxlZnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE3N1xcXCI7XFxufVxcbi5mYS1sb25nLWFycm93LXJpZ2h0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxNzhcXFwiO1xcbn1cXG4uZmEtYXBwbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE3OVxcXCI7XFxufVxcbi5mYS13aW5kb3dzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxN0FcXFwiO1xcbn1cXG4uZmEtYW5kcm9pZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTdCXFxcIjtcXG59XFxuLmZhLWxpbnV4OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxN0NcXFwiO1xcbn1cXG4uZmEtZHJpYmJibGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE3RFxcXCI7XFxufVxcbi5mYS1za3lwZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTdFXFxcIjtcXG59XFxuLmZhLWZvdXJzcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE4MFxcXCI7XFxufVxcbi5mYS10cmVsbG86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE4MVxcXCI7XFxufVxcbi5mYS1mZW1hbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE4MlxcXCI7XFxufVxcbi5mYS1tYWxlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxODNcXFwiO1xcbn1cXG4uZmEtZ2l0dGlwOmJlZm9yZSxcXG4uZmEtZ3JhdGlwYXk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE4NFxcXCI7XFxufVxcbi5mYS1zdW4tbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTg1XFxcIjtcXG59XFxuLmZhLW1vb24tbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTg2XFxcIjtcXG59XFxuLmZhLWFyY2hpdmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE4N1xcXCI7XFxufVxcbi5mYS1idWc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE4OFxcXCI7XFxufVxcbi5mYS12azpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTg5XFxcIjtcXG59XFxuLmZhLXdlaWJvOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxOEFcXFwiO1xcbn1cXG4uZmEtcmVucmVuOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxOEJcXFwiO1xcbn1cXG4uZmEtcGFnZWxpbmVzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxOENcXFwiO1xcbn1cXG4uZmEtc3RhY2stZXhjaGFuZ2U6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE4RFxcXCI7XFxufVxcbi5mYS1hcnJvdy1jaXJjbGUtby1yaWdodDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMThFXFxcIjtcXG59XFxuLmZhLWFycm93LWNpcmNsZS1vLWxlZnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE5MFxcXCI7XFxufVxcbi5mYS10b2dnbGUtbGVmdDpiZWZvcmUsXFxuLmZhLWNhcmV0LXNxdWFyZS1vLWxlZnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE5MVxcXCI7XFxufVxcbi5mYS1kb3QtY2lyY2xlLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE5MlxcXCI7XFxufVxcbi5mYS13aGVlbGNoYWlyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxOTNcXFwiO1xcbn1cXG4uZmEtdmltZW8tc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxOTRcXFwiO1xcbn1cXG4uZmEtdHVya2lzaC1saXJhOmJlZm9yZSxcXG4uZmEtdHJ5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxOTVcXFwiO1xcbn1cXG4uZmEtcGx1cy1zcXVhcmUtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTk2XFxcIjtcXG59XFxuLmZhLXNwYWNlLXNodXR0bGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE5N1xcXCI7XFxufVxcbi5mYS1zbGFjazpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTk4XFxcIjtcXG59XFxuLmZhLWVudmVsb3BlLXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTk5XFxcIjtcXG59XFxuLmZhLXdvcmRwcmVzczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTlBXFxcIjtcXG59XFxuLmZhLW9wZW5pZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTlCXFxcIjtcXG59XFxuLmZhLWluc3RpdHV0aW9uOmJlZm9yZSxcXG4uZmEtYmFuazpiZWZvcmUsXFxuLmZhLXVuaXZlcnNpdHk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE5Q1xcXCI7XFxufVxcbi5mYS1tb3J0YXItYm9hcmQ6YmVmb3JlLFxcbi5mYS1ncmFkdWF0aW9uLWNhcDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTlEXFxcIjtcXG59XFxuLmZhLXlhaG9vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxOUVcXFwiO1xcbn1cXG4uZmEtZ29vZ2xlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxQTBcXFwiO1xcbn1cXG4uZmEtcmVkZGl0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxQTFcXFwiO1xcbn1cXG4uZmEtcmVkZGl0LXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUEyXFxcIjtcXG59XFxuLmZhLXN0dW1ibGV1cG9uLWNpcmNsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUEzXFxcIjtcXG59XFxuLmZhLXN0dW1ibGV1cG9uOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxQTRcXFwiO1xcbn1cXG4uZmEtZGVsaWNpb3VzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxQTVcXFwiO1xcbn1cXG4uZmEtZGlnZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUE2XFxcIjtcXG59XFxuLmZhLXBpZWQtcGlwZXItcHA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFBN1xcXCI7XFxufVxcbi5mYS1waWVkLXBpcGVyLWFsdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUE4XFxcIjtcXG59XFxuLmZhLWRydXBhbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUE5XFxcIjtcXG59XFxuLmZhLWpvb21sYTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUFBXFxcIjtcXG59XFxuLmZhLWxhbmd1YWdlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxQUJcXFwiO1xcbn1cXG4uZmEtZmF4OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxQUNcXFwiO1xcbn1cXG4uZmEtYnVpbGRpbmc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFBRFxcXCI7XFxufVxcbi5mYS1jaGlsZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUFFXFxcIjtcXG59XFxuLmZhLXBhdzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUIwXFxcIjtcXG59XFxuLmZhLXNwb29uOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxQjFcXFwiO1xcbn1cXG4uZmEtY3ViZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUIyXFxcIjtcXG59XFxuLmZhLWN1YmVzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxQjNcXFwiO1xcbn1cXG4uZmEtYmVoYW5jZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUI0XFxcIjtcXG59XFxuLmZhLWJlaGFuY2Utc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxQjVcXFwiO1xcbn1cXG4uZmEtc3RlYW06YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFCNlxcXCI7XFxufVxcbi5mYS1zdGVhbS1zcXVhcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFCN1xcXCI7XFxufVxcbi5mYS1yZWN5Y2xlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxQjhcXFwiO1xcbn1cXG4uZmEtYXV0b21vYmlsZTpiZWZvcmUsXFxuLmZhLWNhcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUI5XFxcIjtcXG59XFxuLmZhLWNhYjpiZWZvcmUsXFxuLmZhLXRheGk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFCQVxcXCI7XFxufVxcbi5mYS10cmVlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxQkJcXFwiO1xcbn1cXG4uZmEtc3BvdGlmeTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUJDXFxcIjtcXG59XFxuLmZhLWRldmlhbnRhcnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFCRFxcXCI7XFxufVxcbi5mYS1zb3VuZGNsb3VkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxQkVcXFwiO1xcbn1cXG4uZmEtZGF0YWJhc2U6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFDMFxcXCI7XFxufVxcbi5mYS1maWxlLXBkZi1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxQzFcXFwiO1xcbn1cXG4uZmEtZmlsZS13b3JkLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFDMlxcXCI7XFxufVxcbi5mYS1maWxlLWV4Y2VsLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFDM1xcXCI7XFxufVxcbi5mYS1maWxlLXBvd2VycG9pbnQtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUM0XFxcIjtcXG59XFxuLmZhLWZpbGUtcGhvdG8tbzpiZWZvcmUsXFxuLmZhLWZpbGUtcGljdHVyZS1vOmJlZm9yZSxcXG4uZmEtZmlsZS1pbWFnZS1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxQzVcXFwiO1xcbn1cXG4uZmEtZmlsZS16aXAtbzpiZWZvcmUsXFxuLmZhLWZpbGUtYXJjaGl2ZS1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxQzZcXFwiO1xcbn1cXG4uZmEtZmlsZS1zb3VuZC1vOmJlZm9yZSxcXG4uZmEtZmlsZS1hdWRpby1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxQzdcXFwiO1xcbn1cXG4uZmEtZmlsZS1tb3ZpZS1vOmJlZm9yZSxcXG4uZmEtZmlsZS12aWRlby1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxQzhcXFwiO1xcbn1cXG4uZmEtZmlsZS1jb2RlLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFDOVxcXCI7XFxufVxcbi5mYS12aW5lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxQ0FcXFwiO1xcbn1cXG4uZmEtY29kZXBlbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUNCXFxcIjtcXG59XFxuLmZhLWpzZmlkZGxlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxQ0NcXFwiO1xcbn1cXG4uZmEtbGlmZS1ib3V5OmJlZm9yZSxcXG4uZmEtbGlmZS1idW95OmJlZm9yZSxcXG4uZmEtbGlmZS1zYXZlcjpiZWZvcmUsXFxuLmZhLXN1cHBvcnQ6YmVmb3JlLFxcbi5mYS1saWZlLXJpbmc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFDRFxcXCI7XFxufVxcbi5mYS1jaXJjbGUtby1ub3RjaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUNFXFxcIjtcXG59XFxuLmZhLXJhOmJlZm9yZSxcXG4uZmEtcmVzaXN0YW5jZTpiZWZvcmUsXFxuLmZhLXJlYmVsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxRDBcXFwiO1xcbn1cXG4uZmEtZ2U6YmVmb3JlLFxcbi5mYS1lbXBpcmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFEMVxcXCI7XFxufVxcbi5mYS1naXQtc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxRDJcXFwiO1xcbn1cXG4uZmEtZ2l0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxRDNcXFwiO1xcbn1cXG4uZmEteS1jb21iaW5hdG9yLXNxdWFyZTpiZWZvcmUsXFxuLmZhLXljLXNxdWFyZTpiZWZvcmUsXFxuLmZhLWhhY2tlci1uZXdzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxRDRcXFwiO1xcbn1cXG4uZmEtdGVuY2VudC13ZWlibzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUQ1XFxcIjtcXG59XFxuLmZhLXFxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxRDZcXFwiO1xcbn1cXG4uZmEtd2VjaGF0OmJlZm9yZSxcXG4uZmEtd2VpeGluOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxRDdcXFwiO1xcbn1cXG4uZmEtc2VuZDpiZWZvcmUsXFxuLmZhLXBhcGVyLXBsYW5lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxRDhcXFwiO1xcbn1cXG4uZmEtc2VuZC1vOmJlZm9yZSxcXG4uZmEtcGFwZXItcGxhbmUtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUQ5XFxcIjtcXG59XFxuLmZhLWhpc3Rvcnk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFEQVxcXCI7XFxufVxcbi5mYS1jaXJjbGUtdGhpbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMURCXFxcIjtcXG59XFxuLmZhLWhlYWRlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMURDXFxcIjtcXG59XFxuLmZhLXBhcmFncmFwaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUREXFxcIjtcXG59XFxuLmZhLXNsaWRlcnM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFERVxcXCI7XFxufVxcbi5mYS1zaGFyZS1hbHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFFMFxcXCI7XFxufVxcbi5mYS1zaGFyZS1hbHQtc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxRTFcXFwiO1xcbn1cXG4uZmEtYm9tYjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUUyXFxcIjtcXG59XFxuLmZhLXNvY2Nlci1iYWxsLW86YmVmb3JlLFxcbi5mYS1mdXRib2wtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUUzXFxcIjtcXG59XFxuLmZhLXR0eTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUU0XFxcIjtcXG59XFxuLmZhLWJpbm9jdWxhcnM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFFNVxcXCI7XFxufVxcbi5mYS1wbHVnOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxRTZcXFwiO1xcbn1cXG4uZmEtc2xpZGVzaGFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUU3XFxcIjtcXG59XFxuLmZhLXR3aXRjaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUU4XFxcIjtcXG59XFxuLmZhLXllbHA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFFOVxcXCI7XFxufVxcbi5mYS1uZXdzcGFwZXItbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUVBXFxcIjtcXG59XFxuLmZhLXdpZmk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFFQlxcXCI7XFxufVxcbi5mYS1jYWxjdWxhdG9yOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxRUNcXFwiO1xcbn1cXG4uZmEtcGF5cGFsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxRURcXFwiO1xcbn1cXG4uZmEtZ29vZ2xlLXdhbGxldDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUVFXFxcIjtcXG59XFxuLmZhLWNjLXZpc2E6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFGMFxcXCI7XFxufVxcbi5mYS1jYy1tYXN0ZXJjYXJkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxRjFcXFwiO1xcbn1cXG4uZmEtY2MtZGlzY292ZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFGMlxcXCI7XFxufVxcbi5mYS1jYy1hbWV4OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxRjNcXFwiO1xcbn1cXG4uZmEtY2MtcGF5cGFsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxRjRcXFwiO1xcbn1cXG4uZmEtY2Mtc3RyaXBlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxRjVcXFwiO1xcbn1cXG4uZmEtYmVsbC1zbGFzaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUY2XFxcIjtcXG59XFxuLmZhLWJlbGwtc2xhc2gtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUY3XFxcIjtcXG59XFxuLmZhLXRyYXNoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxRjhcXFwiO1xcbn1cXG4uZmEtY29weXJpZ2h0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxRjlcXFwiO1xcbn1cXG4uZmEtYXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFGQVxcXCI7XFxufVxcbi5mYS1leWVkcm9wcGVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxRkJcXFwiO1xcbn1cXG4uZmEtcGFpbnQtYnJ1c2g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjFGQ1xcXCI7XFxufVxcbi5mYS1iaXJ0aGRheS1jYWtlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxRkRcXFwiO1xcbn1cXG4uZmEtYXJlYS1jaGFydDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMUZFXFxcIjtcXG59XFxuLmZhLXBpZS1jaGFydDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjAwXFxcIjtcXG59XFxuLmZhLWxpbmUtY2hhcnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIwMVxcXCI7XFxufVxcbi5mYS1sYXN0Zm06YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIwMlxcXCI7XFxufVxcbi5mYS1sYXN0Zm0tc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyMDNcXFwiO1xcbn1cXG4uZmEtdG9nZ2xlLW9mZjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjA0XFxcIjtcXG59XFxuLmZhLXRvZ2dsZS1vbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjA1XFxcIjtcXG59XFxuLmZhLWJpY3ljbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIwNlxcXCI7XFxufVxcbi5mYS1idXM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIwN1xcXCI7XFxufVxcbi5mYS1pb3hob3N0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyMDhcXFwiO1xcbn1cXG4uZmEtYW5nZWxsaXN0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyMDlcXFwiO1xcbn1cXG4uZmEtY2M6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIwQVxcXCI7XFxufVxcbi5mYS1zaGVrZWw6YmVmb3JlLFxcbi5mYS1zaGVxZWw6YmVmb3JlLFxcbi5mYS1pbHM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIwQlxcXCI7XFxufVxcbi5mYS1tZWFucGF0aDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjBDXFxcIjtcXG59XFxuLmZhLWJ1eXNlbGxhZHM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIwRFxcXCI7XFxufVxcbi5mYS1jb25uZWN0ZGV2ZWxvcDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjBFXFxcIjtcXG59XFxuLmZhLWRhc2hjdWJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyMTBcXFwiO1xcbn1cXG4uZmEtZm9ydW1iZWU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIxMVxcXCI7XFxufVxcbi5mYS1sZWFucHViOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyMTJcXFwiO1xcbn1cXG4uZmEtc2VsbHN5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyMTNcXFwiO1xcbn1cXG4uZmEtc2hpcnRzaW5idWxrOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyMTRcXFwiO1xcbn1cXG4uZmEtc2ltcGx5YnVpbHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIxNVxcXCI7XFxufVxcbi5mYS1za3lhdGxhczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjE2XFxcIjtcXG59XFxuLmZhLWNhcnQtcGx1czpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjE3XFxcIjtcXG59XFxuLmZhLWNhcnQtYXJyb3ctZG93bjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjE4XFxcIjtcXG59XFxuLmZhLWRpYW1vbmQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIxOVxcXCI7XFxufVxcbi5mYS1zaGlwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyMUFcXFwiO1xcbn1cXG4uZmEtdXNlci1zZWNyZXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIxQlxcXCI7XFxufVxcbi5mYS1tb3RvcmN5Y2xlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyMUNcXFwiO1xcbn1cXG4uZmEtc3RyZWV0LXZpZXc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIxRFxcXCI7XFxufVxcbi5mYS1oZWFydGJlYXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIxRVxcXCI7XFxufVxcbi5mYS12ZW51czpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjIxXFxcIjtcXG59XFxuLmZhLW1hcnM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIyMlxcXCI7XFxufVxcbi5mYS1tZXJjdXJ5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyMjNcXFwiO1xcbn1cXG4uZmEtaW50ZXJzZXg6YmVmb3JlLFxcbi5mYS10cmFuc2dlbmRlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjI0XFxcIjtcXG59XFxuLmZhLXRyYW5zZ2VuZGVyLWFsdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjI1XFxcIjtcXG59XFxuLmZhLXZlbnVzLWRvdWJsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjI2XFxcIjtcXG59XFxuLmZhLW1hcnMtZG91YmxlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyMjdcXFwiO1xcbn1cXG4uZmEtdmVudXMtbWFyczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjI4XFxcIjtcXG59XFxuLmZhLW1hcnMtc3Ryb2tlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyMjlcXFwiO1xcbn1cXG4uZmEtbWFycy1zdHJva2UtdjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjJBXFxcIjtcXG59XFxuLmZhLW1hcnMtc3Ryb2tlLWg6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIyQlxcXCI7XFxufVxcbi5mYS1uZXV0ZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIyQ1xcXCI7XFxufVxcbi5mYS1nZW5kZXJsZXNzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyMkRcXFwiO1xcbn1cXG4uZmEtZmFjZWJvb2stb2ZmaWNpYWw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIzMFxcXCI7XFxufVxcbi5mYS1waW50ZXJlc3QtcDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjMxXFxcIjtcXG59XFxuLmZhLXdoYXRzYXBwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyMzJcXFwiO1xcbn1cXG4uZmEtc2VydmVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyMzNcXFwiO1xcbn1cXG4uZmEtdXNlci1wbHVzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyMzRcXFwiO1xcbn1cXG4uZmEtdXNlci10aW1lczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjM1XFxcIjtcXG59XFxuLmZhLWhvdGVsOmJlZm9yZSxcXG4uZmEtYmVkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyMzZcXFwiO1xcbn1cXG4uZmEtdmlhY29pbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjM3XFxcIjtcXG59XFxuLmZhLXRyYWluOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyMzhcXFwiO1xcbn1cXG4uZmEtc3Vid2F5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyMzlcXFwiO1xcbn1cXG4uZmEtbWVkaXVtOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyM0FcXFwiO1xcbn1cXG4uZmEteWM6YmVmb3JlLFxcbi5mYS15LWNvbWJpbmF0b3I6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIzQlxcXCI7XFxufVxcbi5mYS1vcHRpbi1tb25zdGVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyM0NcXFwiO1xcbn1cXG4uZmEtb3BlbmNhcnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIzRFxcXCI7XFxufVxcbi5mYS1leHBlZGl0ZWRzc2w6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjIzRVxcXCI7XFxufVxcbi5mYS1iYXR0ZXJ5LTQ6YmVmb3JlLFxcbi5mYS1iYXR0ZXJ5LWZ1bGw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI0MFxcXCI7XFxufVxcbi5mYS1iYXR0ZXJ5LTM6YmVmb3JlLFxcbi5mYS1iYXR0ZXJ5LXRocmVlLXF1YXJ0ZXJzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyNDFcXFwiO1xcbn1cXG4uZmEtYmF0dGVyeS0yOmJlZm9yZSxcXG4uZmEtYmF0dGVyeS1oYWxmOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyNDJcXFwiO1xcbn1cXG4uZmEtYmF0dGVyeS0xOmJlZm9yZSxcXG4uZmEtYmF0dGVyeS1xdWFydGVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyNDNcXFwiO1xcbn1cXG4uZmEtYmF0dGVyeS0wOmJlZm9yZSxcXG4uZmEtYmF0dGVyeS1lbXB0eTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjQ0XFxcIjtcXG59XFxuLmZhLW1vdXNlLXBvaW50ZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI0NVxcXCI7XFxufVxcbi5mYS1pLWN1cnNvcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjQ2XFxcIjtcXG59XFxuLmZhLW9iamVjdC1ncm91cDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjQ3XFxcIjtcXG59XFxuLmZhLW9iamVjdC11bmdyb3VwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyNDhcXFwiO1xcbn1cXG4uZmEtc3RpY2t5LW5vdGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI0OVxcXCI7XFxufVxcbi5mYS1zdGlja3ktbm90ZS1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyNEFcXFwiO1xcbn1cXG4uZmEtY2MtamNiOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyNEJcXFwiO1xcbn1cXG4uZmEtY2MtZGluZXJzLWNsdWI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI0Q1xcXCI7XFxufVxcbi5mYS1jbG9uZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjREXFxcIjtcXG59XFxuLmZhLWJhbGFuY2Utc2NhbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI0RVxcXCI7XFxufVxcbi5mYS1ob3VyZ2xhc3MtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjUwXFxcIjtcXG59XFxuLmZhLWhvdXJnbGFzcy0xOmJlZm9yZSxcXG4uZmEtaG91cmdsYXNzLXN0YXJ0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyNTFcXFwiO1xcbn1cXG4uZmEtaG91cmdsYXNzLTI6YmVmb3JlLFxcbi5mYS1ob3VyZ2xhc3MtaGFsZjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjUyXFxcIjtcXG59XFxuLmZhLWhvdXJnbGFzcy0zOmJlZm9yZSxcXG4uZmEtaG91cmdsYXNzLWVuZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjUzXFxcIjtcXG59XFxuLmZhLWhvdXJnbGFzczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjU0XFxcIjtcXG59XFxuLmZhLWhhbmQtZ3JhYi1vOmJlZm9yZSxcXG4uZmEtaGFuZC1yb2NrLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI1NVxcXCI7XFxufVxcbi5mYS1oYW5kLXN0b3AtbzpiZWZvcmUsXFxuLmZhLWhhbmQtcGFwZXItbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjU2XFxcIjtcXG59XFxuLmZhLWhhbmQtc2Npc3NvcnMtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjU3XFxcIjtcXG59XFxuLmZhLWhhbmQtbGl6YXJkLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI1OFxcXCI7XFxufVxcbi5mYS1oYW5kLXNwb2NrLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI1OVxcXCI7XFxufVxcbi5mYS1oYW5kLXBvaW50ZXItbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjVBXFxcIjtcXG59XFxuLmZhLWhhbmQtcGVhY2UtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjVCXFxcIjtcXG59XFxuLmZhLXRyYWRlbWFyazpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjVDXFxcIjtcXG59XFxuLmZhLXJlZ2lzdGVyZWQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI1RFxcXCI7XFxufVxcbi5mYS1jcmVhdGl2ZS1jb21tb25zOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyNUVcXFwiO1xcbn1cXG4uZmEtZ2c6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI2MFxcXCI7XFxufVxcbi5mYS1nZy1jaXJjbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI2MVxcXCI7XFxufVxcbi5mYS10cmlwYWR2aXNvcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjYyXFxcIjtcXG59XFxuLmZhLW9kbm9rbGFzc25pa2k6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI2M1xcXCI7XFxufVxcbi5mYS1vZG5va2xhc3NuaWtpLXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjY0XFxcIjtcXG59XFxuLmZhLWdldC1wb2NrZXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI2NVxcXCI7XFxufVxcbi5mYS13aWtpcGVkaWEtdzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjY2XFxcIjtcXG59XFxuLmZhLXNhZmFyaTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjY3XFxcIjtcXG59XFxuLmZhLWNocm9tZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjY4XFxcIjtcXG59XFxuLmZhLWZpcmVmb3g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI2OVxcXCI7XFxufVxcbi5mYS1vcGVyYTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjZBXFxcIjtcXG59XFxuLmZhLWludGVybmV0LWV4cGxvcmVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyNkJcXFwiO1xcbn1cXG4uZmEtdHY6YmVmb3JlLFxcbi5mYS10ZWxldmlzaW9uOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyNkNcXFwiO1xcbn1cXG4uZmEtY29udGFvOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyNkRcXFwiO1xcbn1cXG4uZmEtNTAwcHg6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI2RVxcXCI7XFxufVxcbi5mYS1hbWF6b246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI3MFxcXCI7XFxufVxcbi5mYS1jYWxlbmRhci1wbHVzLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI3MVxcXCI7XFxufVxcbi5mYS1jYWxlbmRhci1taW51cy1vOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyNzJcXFwiO1xcbn1cXG4uZmEtY2FsZW5kYXItdGltZXMtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjczXFxcIjtcXG59XFxuLmZhLWNhbGVuZGFyLWNoZWNrLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI3NFxcXCI7XFxufVxcbi5mYS1pbmR1c3RyeTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjc1XFxcIjtcXG59XFxuLmZhLW1hcC1waW46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI3NlxcXCI7XFxufVxcbi5mYS1tYXAtc2lnbnM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI3N1xcXCI7XFxufVxcbi5mYS1tYXAtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjc4XFxcIjtcXG59XFxuLmZhLW1hcDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjc5XFxcIjtcXG59XFxuLmZhLWNvbW1lbnRpbmc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI3QVxcXCI7XFxufVxcbi5mYS1jb21tZW50aW5nLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI3QlxcXCI7XFxufVxcbi5mYS1ob3V6ejpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjdDXFxcIjtcXG59XFxuLmZhLXZpbWVvOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyN0RcXFwiO1xcbn1cXG4uZmEtYmxhY2stdGllOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyN0VcXFwiO1xcbn1cXG4uZmEtZm9udGljb25zOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyODBcXFwiO1xcbn1cXG4uZmEtcmVkZGl0LWFsaWVuOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyODFcXFwiO1xcbn1cXG4uZmEtZWRnZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjgyXFxcIjtcXG59XFxuLmZhLWNyZWRpdC1jYXJkLWFsdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjgzXFxcIjtcXG59XFxuLmZhLWNvZGllcGllOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyODRcXFwiO1xcbn1cXG4uZmEtbW9keDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjg1XFxcIjtcXG59XFxuLmZhLWZvcnQtYXdlc29tZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjg2XFxcIjtcXG59XFxuLmZhLXVzYjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjg3XFxcIjtcXG59XFxuLmZhLXByb2R1Y3QtaHVudDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjg4XFxcIjtcXG59XFxuLmZhLW1peGNsb3VkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyODlcXFwiO1xcbn1cXG4uZmEtc2NyaWJkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyOEFcXFwiO1xcbn1cXG4uZmEtcGF1c2UtY2lyY2xlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyOEJcXFwiO1xcbn1cXG4uZmEtcGF1c2UtY2lyY2xlLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI4Q1xcXCI7XFxufVxcbi5mYS1zdG9wLWNpcmNsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjhEXFxcIjtcXG59XFxuLmZhLXN0b3AtY2lyY2xlLW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI4RVxcXCI7XFxufVxcbi5mYS1zaG9wcGluZy1iYWc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI5MFxcXCI7XFxufVxcbi5mYS1zaG9wcGluZy1iYXNrZXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI5MVxcXCI7XFxufVxcbi5mYS1oYXNodGFnOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyOTJcXFwiO1xcbn1cXG4uZmEtYmx1ZXRvb3RoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyOTNcXFwiO1xcbn1cXG4uZmEtYmx1ZXRvb3RoLWI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI5NFxcXCI7XFxufVxcbi5mYS1wZXJjZW50OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyOTVcXFwiO1xcbn1cXG4uZmEtZ2l0bGFiOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyOTZcXFwiO1xcbn1cXG4uZmEtd3BiZWdpbm5lcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjk3XFxcIjtcXG59XFxuLmZhLXdwZm9ybXM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI5OFxcXCI7XFxufVxcbi5mYS1lbnZpcmE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI5OVxcXCI7XFxufVxcbi5mYS11bml2ZXJzYWwtYWNjZXNzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyOUFcXFwiO1xcbn1cXG4uZmEtd2hlZWxjaGFpci1hbHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI5QlxcXCI7XFxufVxcbi5mYS1xdWVzdGlvbi1jaXJjbGUtbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMjlDXFxcIjtcXG59XFxuLmZhLWJsaW5kOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyOURcXFwiO1xcbn1cXG4uZmEtYXVkaW8tZGVzY3JpcHRpb246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjI5RVxcXCI7XFxufVxcbi5mYS12b2x1bWUtY29udHJvbC1waG9uZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMkEwXFxcIjtcXG59XFxuLmZhLWJyYWlsbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJBMVxcXCI7XFxufVxcbi5mYS1hc3Npc3RpdmUtbGlzdGVuaW5nLXN5c3RlbXM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJBMlxcXCI7XFxufVxcbi5mYS1hc2wtaW50ZXJwcmV0aW5nOmJlZm9yZSxcXG4uZmEtYW1lcmljYW4tc2lnbi1sYW5ndWFnZS1pbnRlcnByZXRpbmc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJBM1xcXCI7XFxufVxcbi5mYS1kZWFmbmVzczpiZWZvcmUsXFxuLmZhLWhhcmQtb2YtaGVhcmluZzpiZWZvcmUsXFxuLmZhLWRlYWY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJBNFxcXCI7XFxufVxcbi5mYS1nbGlkZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMkE1XFxcIjtcXG59XFxuLmZhLWdsaWRlLWc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJBNlxcXCI7XFxufVxcbi5mYS1zaWduaW5nOmJlZm9yZSxcXG4uZmEtc2lnbi1sYW5ndWFnZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMkE3XFxcIjtcXG59XFxuLmZhLWxvdy12aXNpb246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJBOFxcXCI7XFxufVxcbi5mYS12aWFkZW86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJBOVxcXCI7XFxufVxcbi5mYS12aWFkZW8tc3F1YXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyQUFcXFwiO1xcbn1cXG4uZmEtc25hcGNoYXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJBQlxcXCI7XFxufVxcbi5mYS1zbmFwY2hhdC1naG9zdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMkFDXFxcIjtcXG59XFxuLmZhLXNuYXBjaGF0LXNxdWFyZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMkFEXFxcIjtcXG59XFxuLmZhLXBpZWQtcGlwZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJBRVxcXCI7XFxufVxcbi5mYS1maXJzdC1vcmRlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMkIwXFxcIjtcXG59XFxuLmZhLXlvYXN0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyQjFcXFwiO1xcbn1cXG4uZmEtdGhlbWVpc2xlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYyQjJcXFwiO1xcbn1cXG4uZmEtZ29vZ2xlLXBsdXMtY2lyY2xlOmJlZm9yZSxcXG4uZmEtZ29vZ2xlLXBsdXMtb2ZmaWNpYWw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjJCM1xcXCI7XFxufVxcbi5mYS1mYTpiZWZvcmUsXFxuLmZhLWZvbnQtYXdlc29tZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMkI0XFxcIjtcXG59XFxuLnNyLW9ubHkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDFweDtcXG4gIGhlaWdodDogMXB4O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogLTFweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBjbGlwOiByZWN0KDAsIDAsIDAsIDApO1xcbiAgYm9yZGVyOiAwO1xcbn1cXG4uc3Itb25seS1mb2N1c2FibGU6YWN0aXZlLFxcbi5zci1vbmx5LWZvY3VzYWJsZTpmb2N1cyB7XFxuICBwb3NpdGlvbjogc3RhdGljO1xcbiAgd2lkdGg6IGF1dG87XFxuICBoZWlnaHQ6IGF1dG87XFxuICBtYXJnaW46IDA7XFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG4gIGNsaXA6IGF1dG87XFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuICAgIGNvbnN0IGFwcGxpY2F0aW9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG4gICAgcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcblxuICAgIGV4cG9ydHMuZm9yRWFjaChjc3NFeHBvcnQgPT4ge1xuICAgICAgICBpZiAoY3NzRXhwb3J0Lmxlbmd0aCA+IDEgJiYgY3NzRXhwb3J0WzFdKSB7XG4gICAgICAgICAgICAvLyBhcHBseWluZyB0aGUgc2Vjb25kIGl0ZW0gb2YgdGhlIGV4cG9ydCBhcyBpdCBjb250YWlucyB0aGUgY3NzIGNvbnRlbnRzXG4gICAgICAgICAgICBhcHBsaWNhdGlvbi5hZGRDc3MoY3NzRXhwb3J0WzFdKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIDtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9hc3NldHMvZm9udC1hd2Vzb21lLmNzcycgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Gb290ZXJtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNzE3NmRhNyZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Gb290ZXJtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vRm9vdGVybS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vRm9vdGVybS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zNzE3NmRhNyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjM3MTc2ZGE3XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL2hvbWUvd29obGlnL0Rvd25sb2Fkcy9OU1BsYXlncm91bmQgKDIpL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzM3MTc2ZGE3JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzM3MTc2ZGE3JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzM3MTc2ZGE3JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Gb290ZXJtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNzE3NmRhNyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCczNzE3NmRhNycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9Gb290ZXJtLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Gb290ZXJtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Zvb3Rlcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRm9vdGVybS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zNzE3NmRhNyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Zvb3Rlcm0udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MzcxNzZkYTcmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Zvb3Rlcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM3MTc2ZGE3JnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9IZWFkZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFhOWJiMTI4JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0hlYWRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0hlYWRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vSGVhZGVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTFhOWJiMTI4JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIxYTliYjEyOFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9ob21lL3dvaGxpZy9Eb3dubG9hZHMvTlNQbGF5Z3JvdW5kICgyKS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcxYTliYjEyOCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcxYTliYjEyOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcxYTliYjEyOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vSGVhZGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xYTliYjEyOCZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcxYTliYjEyOCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9IZWFkZXIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hlYWRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9IZWFkZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9IZWFkZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MWE5YmIxMjgmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSGVhZGVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTFhOWJiMTI4JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hlYWRlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWE5YmIxMjgmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0hvbWUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY3NDEwZjNhJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0hvbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Ib21lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9Ib21lLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTY3NDEwZjNhJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNjc0MTBmM2FcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS93b2hsaWcvRG93bmxvYWRzL05TUGxheWdyb3VuZCAoMikvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNjc0MTBmM2EnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNjc0MTBmM2EnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNjc0MTBmM2EnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0hvbWUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY3NDEwZjNhJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzY3NDEwZjNhJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL0hvbWUudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hvbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSG9tZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ib21lLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTY3NDEwZjNhJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSG9tZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02NzQxMGYzYSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSG9tZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Njc0MTBmM2Emc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0xlYXRoZXJCb2FyZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmUxN2NjOTgmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTGVhdGhlckJvYXJkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vTGVhdGhlckJvYXJkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL2hvbWUvd29obGlnL0Rvd25sb2Fkcy9OU1BsYXlncm91bmQgKDIpL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzJlMTdjYzk4JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzJlMTdjYzk4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzJlMTdjYzk4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9MZWF0aGVyQm9hcmQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJlMTdjYzk4JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzJlMTdjYzk4Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL0xlYXRoZXJCb2FyZC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTGVhdGhlckJvYXJkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xlYXRoZXJCb2FyZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTGVhdGhlckJvYXJkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yZTE3Y2M5OCZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vUXVlc3Rpb25zLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01NzU1YTgwMiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9RdWVzdGlvbnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9RdWVzdGlvbnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL1F1ZXN0aW9ucy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL2hvbWUvd29obGlnL0Rvd25sb2Fkcy9OU1BsYXlncm91bmQgKDIpL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzU3NTVhODAyJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzU3NTVhODAyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzU3NTVhODAyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9RdWVzdGlvbnMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU3NTVhODAyJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzU3NTVhODAyJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL1F1ZXN0aW9ucy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUXVlc3Rpb25zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1F1ZXN0aW9ucy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1F1ZXN0aW9ucy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9RdWVzdGlvbnMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUXVlc3Rpb25zLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01NzU1YTgwMiZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vVXNlclByb2ZpbGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTMzYWQyZTUzJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1VzZXJQcm9maWxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vVXNlclByb2ZpbGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL1VzZXJQcm9maWxlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTMzYWQyZTUzJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMzNhZDJlNTNcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS93b2hsaWcvRG93bmxvYWRzL05TUGxheWdyb3VuZCAoMikvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMzNhZDJlNTMnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMzNhZDJlNTMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMzNhZDJlNTMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1VzZXJQcm9maWxlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zM2FkMmU1MyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCczM2FkMmU1MycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9Vc2VyUHJvZmlsZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVXNlclByb2ZpbGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVXNlclByb2ZpbGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVXNlclByb2ZpbGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MzNhZDJlNTMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Vc2VyUHJvZmlsZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zM2FkMmU1MyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVXNlclByb2ZpbGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTMzYWQyZTUzJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9WaWV3cHJlZGljdGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjIzMWVkZTImc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vVmlld3ByZWRpY3Rpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9WaWV3cHJlZGljdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vVmlld3ByZWRpY3Rpb24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NjIzMWVkZTImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI2MjMxZWRlMlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9ob21lL3dvaGxpZy9Eb3dubG9hZHMvTlNQbGF5Z3JvdW5kICgyKS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2MjMxZWRlMicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2MjMxZWRlMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2MjMxZWRlMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vVmlld3ByZWRpY3Rpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTYyMzFlZGUyJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzYyMzFlZGUyJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL1ZpZXdwcmVkaWN0aW9uLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9WaWV3cHJlZGljdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9WaWV3cHJlZGljdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9WaWV3cHJlZGljdGlvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02MjMxZWRlMiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1ZpZXdwcmVkaWN0aW9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTYyMzFlZGUyJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9WaWV3cHJlZGljdGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjIzMWVkZTImc2NvcGVkPXRydWUmXCIiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBjaGFyc2V0IFxcXCJVVEYtOFxcXCI7XFxuXFxuLyohXFxuICogYW5pbWF0ZS5jc3MgLWh0dHA6Ly9kYW5lZGVuLm1lL2FuaW1hdGVcXG4gKiBWZXJzaW9uIC0gMy43LjBcXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgLSBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXFxuICpcXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTggRGFuaWVsIEVkZW5cXG4gKi9cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgYm91bmNlIHtcXG4gIGZyb20sXFxuICAyMCUsXFxuICA1MyUsXFxuICA4MCUsXFxuICB0byB7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB9XFxuXFxuICA0MCUsXFxuICA0MyUge1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjc1NSwgMC4wNSwgMC44NTUsIDAuMDYpO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC43NTUsIDAuMDUsIDAuODU1LCAwLjA2KTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0zMHB4LCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMzBweCwgMCk7XFxuICB9XFxuXFxuICA3MCUge1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjc1NSwgMC4wNSwgMC44NTUsIDAuMDYpO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC43NTUsIDAuMDUsIDAuODU1LCAwLjA2KTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xNXB4LCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTVweCwgMCk7XFxuICB9XFxuXFxuICA5MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTRweCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTRweCwgMCk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgYm91bmNlIHtcXG4gIGZyb20sXFxuICAyMCUsXFxuICA1MyUsXFxuICA4MCUsXFxuICB0byB7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB9XFxuXFxuICA0MCUsXFxuICA0MyUge1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjc1NSwgMC4wNSwgMC44NTUsIDAuMDYpO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC43NTUsIDAuMDUsIDAuODU1LCAwLjA2KTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0zMHB4LCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMzBweCwgMCk7XFxuICB9XFxuXFxuICA3MCUge1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjc1NSwgMC4wNSwgMC44NTUsIDAuMDYpO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC43NTUsIDAuMDUsIDAuODU1LCAwLjA2KTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xNXB4LCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTVweCwgMCk7XFxuICB9XFxuXFxuICA5MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTRweCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTRweCwgMCk7XFxuICB9XFxufVxcblxcbi5ib3VuY2Uge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYm91bmNlO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGJvdW5jZTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGJvdHRvbTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBib3R0b207XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBmbGFzaCB7XFxuICBmcm9tLFxcbiAgNTAlLFxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcblxcbiAgMjUlLFxcbiAgNzUlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBmbGFzaCB7XFxuICBmcm9tLFxcbiAgNTAlLFxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcblxcbiAgMjUlLFxcbiAgNzUlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XFxuXFxuLmZsYXNoIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZsYXNoO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGZsYXNoO1xcbn1cXG5cXG4vKiBvcmlnaW5hbGx5IGF1dGhvcmVkIGJ5IE5pY2sgUGV0dGl0IC0gaHR0cHM6Ly9naXRodWIuY29tL25pY2twZXR0aXQvZ2xpZGUgKi9cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgcHVsc2Uge1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XFxuICB9XFxuXFxuICA1MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgxLjA1LCAxLjA1LCAxLjA1KTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEuMDUsIDEuMDUsIDEuMDUpO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHB1bHNlIHtcXG4gIGZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xcbiAgfVxcblxcbiAgNTAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMS4wNSwgMS4wNSwgMS4wNSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLjA1LCAxLjA1LCAxLjA1KTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcXG4gIH1cXG59XFxuXFxuLnB1bHNlIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHB1bHNlO1xcbiAgYW5pbWF0aW9uLW5hbWU6IHB1bHNlO1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgcnViYmVyQmFuZCB7XFxuICBmcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcXG4gIH1cXG5cXG4gIDMwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEuMjUsIDAuNzUsIDEpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMS4yNSwgMC43NSwgMSk7XFxuICB9XFxuXFxuICA0MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgwLjc1LCAxLjI1LCAxKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuNzUsIDEuMjUsIDEpO1xcbiAgfVxcblxcbiAgNTAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMS4xNSwgMC44NSwgMSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLjE1LCAwLjg1LCAxKTtcXG4gIH1cXG5cXG4gIDY1JSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDAuOTUsIDEuMDUsIDEpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC45NSwgMS4wNSwgMSk7XFxuICB9XFxuXFxuICA3NSUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgxLjA1LCAwLjk1LCAxKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEuMDUsIDAuOTUsIDEpO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHJ1YmJlckJhbmQge1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XFxuICB9XFxuXFxuICAzMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgxLjI1LCAwLjc1LCAxKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEuMjUsIDAuNzUsIDEpO1xcbiAgfVxcblxcbiAgNDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMC43NSwgMS4yNSwgMSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjc1LCAxLjI1LCAxKTtcXG4gIH1cXG5cXG4gIDUwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEuMTUsIDAuODUsIDEpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMS4xNSwgMC44NSwgMSk7XFxuICB9XFxuXFxuICA2NSUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgwLjk1LCAxLjA1LCAxKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuOTUsIDEuMDUsIDEpO1xcbiAgfVxcblxcbiAgNzUlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMS4wNSwgMC45NSwgMSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLjA1LCAwLjk1LCAxKTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcXG4gIH1cXG59XFxuXFxuLnJ1YmJlckJhbmQge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogcnViYmVyQmFuZDtcXG4gIGFuaW1hdGlvbi1uYW1lOiBydWJiZXJCYW5kO1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2hha2Uge1xcbiAgZnJvbSxcXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgfVxcblxcbiAgMTAlLFxcbiAgMzAlLFxcbiAgNTAlLFxcbiAgNzAlLFxcbiAgOTAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMHB4LCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTBweCwgMCwgMCk7XFxuICB9XFxuXFxuICAyMCUsXFxuICA0MCUsXFxuICA2MCUsXFxuICA4MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTBweCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTBweCwgMCwgMCk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgc2hha2Uge1xcbiAgZnJvbSxcXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgfVxcblxcbiAgMTAlLFxcbiAgMzAlLFxcbiAgNTAlLFxcbiAgNzAlLFxcbiAgOTAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMHB4LCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTBweCwgMCwgMCk7XFxuICB9XFxuXFxuICAyMCUsXFxuICA0MCUsXFxuICA2MCUsXFxuICA4MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTBweCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTBweCwgMCwgMCk7XFxuICB9XFxufVxcblxcbi5zaGFrZSB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBzaGFrZTtcXG4gIGFuaW1hdGlvbi1uYW1lOiBzaGFrZTtcXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGhlYWRTaGFrZSB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICB9XFxuXFxuICA2LjUlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTZweCkgcm90YXRlWSgtOWRlZyk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNnB4KSByb3RhdGVZKC05ZGVnKTtcXG4gIH1cXG5cXG4gIDE4LjUlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNXB4KSByb3RhdGVZKDdkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNXB4KSByb3RhdGVZKDdkZWcpO1xcbiAgfVxcblxcbiAgMzEuNSUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtM3B4KSByb3RhdGVZKC01ZGVnKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zcHgpIHJvdGF0ZVkoLTVkZWcpO1xcbiAgfVxcblxcbiAgNDMuNSUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgycHgpIHJvdGF0ZVkoM2RlZyk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgycHgpIHJvdGF0ZVkoM2RlZyk7XFxuICB9XFxuXFxuICA1MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGhlYWRTaGFrZSB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICB9XFxuXFxuICA2LjUlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTZweCkgcm90YXRlWSgtOWRlZyk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNnB4KSByb3RhdGVZKC05ZGVnKTtcXG4gIH1cXG5cXG4gIDE4LjUlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNXB4KSByb3RhdGVZKDdkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNXB4KSByb3RhdGVZKDdkZWcpO1xcbiAgfVxcblxcbiAgMzEuNSUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtM3B4KSByb3RhdGVZKC01ZGVnKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zcHgpIHJvdGF0ZVkoLTVkZWcpO1xcbiAgfVxcblxcbiAgNDMuNSUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgycHgpIHJvdGF0ZVkoM2RlZyk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgycHgpIHJvdGF0ZVkoM2RlZyk7XFxuICB9XFxuXFxuICA1MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgfVxcbn1cXG5cXG4uaGVhZFNoYWtlIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGhlYWRTaGFrZTtcXG4gIGFuaW1hdGlvbi1uYW1lOiBoZWFkU2hha2U7XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBzd2luZyB7XFxuICAyMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgMTVkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDE1ZGVnKTtcXG4gIH1cXG5cXG4gIDQwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAtMTBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIC0xMGRlZyk7XFxuICB9XFxuXFxuICA2MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgNWRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgNWRlZyk7XFxuICB9XFxuXFxuICA4MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgLTVkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIC01ZGVnKTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDBkZWcpO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHN3aW5nIHtcXG4gIDIwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAxNWRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgMTVkZWcpO1xcbiAgfVxcblxcbiAgNDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIC0xMGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgLTEwZGVnKTtcXG4gIH1cXG5cXG4gIDYwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCA1ZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCA1ZGVnKTtcXG4gIH1cXG5cXG4gIDgwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAtNWRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgLTVkZWcpO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgMGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgMGRlZyk7XFxuICB9XFxufVxcblxcbi5zd2luZyB7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHRvcCBjZW50ZXI7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgY2VudGVyO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogc3dpbmc7XFxuICBhbmltYXRpb24tbmFtZTogc3dpbmc7XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyB0YWRhIHtcXG4gIGZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xcbiAgfVxcblxcbiAgMTAlLFxcbiAgMjAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMC45LCAwLjksIDAuOSkgcm90YXRlM2QoMCwgMCwgMSwgLTNkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC45LCAwLjksIDAuOSkgcm90YXRlM2QoMCwgMCwgMSwgLTNkZWcpO1xcbiAgfVxcblxcbiAgMzAlLFxcbiAgNTAlLFxcbiAgNzAlLFxcbiAgOTAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMS4xLCAxLjEsIDEuMSkgcm90YXRlM2QoMCwgMCwgMSwgM2RlZyk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLjEsIDEuMSwgMS4xKSByb3RhdGUzZCgwLCAwLCAxLCAzZGVnKTtcXG4gIH1cXG5cXG4gIDQwJSxcXG4gIDYwJSxcXG4gIDgwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEuMSwgMS4xLCAxLjEpIHJvdGF0ZTNkKDAsIDAsIDEsIC0zZGVnKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEuMSwgMS4xLCAxLjEpIHJvdGF0ZTNkKDAsIDAsIDEsIC0zZGVnKTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyB0YWRhIHtcXG4gIGZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xcbiAgfVxcblxcbiAgMTAlLFxcbiAgMjAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMC45LCAwLjksIDAuOSkgcm90YXRlM2QoMCwgMCwgMSwgLTNkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC45LCAwLjksIDAuOSkgcm90YXRlM2QoMCwgMCwgMSwgLTNkZWcpO1xcbiAgfVxcblxcbiAgMzAlLFxcbiAgNTAlLFxcbiAgNzAlLFxcbiAgOTAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMS4xLCAxLjEsIDEuMSkgcm90YXRlM2QoMCwgMCwgMSwgM2RlZyk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLjEsIDEuMSwgMS4xKSByb3RhdGUzZCgwLCAwLCAxLCAzZGVnKTtcXG4gIH1cXG5cXG4gIDQwJSxcXG4gIDYwJSxcXG4gIDgwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEuMSwgMS4xLCAxLjEpIHJvdGF0ZTNkKDAsIDAsIDEsIC0zZGVnKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEuMSwgMS4xLCAxLjEpIHJvdGF0ZTNkKDAsIDAsIDEsIC0zZGVnKTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcXG4gIH1cXG59XFxuXFxuLnRhZGEge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogdGFkYTtcXG4gIGFuaW1hdGlvbi1uYW1lOiB0YWRhO1xcbn1cXG5cXG4vKiBvcmlnaW5hbGx5IGF1dGhvcmVkIGJ5IE5pY2sgUGV0dGl0IC0gaHR0cHM6Ly9naXRodWIuY29tL25pY2twZXR0aXQvZ2xpZGUgKi9cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgd29iYmxlIHtcXG4gIGZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB9XFxuXFxuICAxNSUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTI1JSwgMCwgMCkgcm90YXRlM2QoMCwgMCwgMSwgLTVkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yNSUsIDAsIDApIHJvdGF0ZTNkKDAsIDAsIDEsIC01ZGVnKTtcXG4gIH1cXG5cXG4gIDMwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyMCUsIDAsIDApIHJvdGF0ZTNkKDAsIDAsIDEsIDNkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDIwJSwgMCwgMCkgcm90YXRlM2QoMCwgMCwgMSwgM2RlZyk7XFxuICB9XFxuXFxuICA0NSUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTE1JSwgMCwgMCkgcm90YXRlM2QoMCwgMCwgMSwgLTNkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xNSUsIDAsIDApIHJvdGF0ZTNkKDAsIDAsIDEsIC0zZGVnKTtcXG4gIH1cXG5cXG4gIDYwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMCUsIDAsIDApIHJvdGF0ZTNkKDAsIDAsIDEsIDJkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwJSwgMCwgMCkgcm90YXRlM2QoMCwgMCwgMSwgMmRlZyk7XFxuICB9XFxuXFxuICA3NSUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUlLCAwLCAwKSByb3RhdGUzZCgwLCAwLCAxLCAtMWRlZyk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUlLCAwLCAwKSByb3RhdGUzZCgwLCAwLCAxLCAtMWRlZyk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyB3b2JibGUge1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIH1cXG5cXG4gIDE1JSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMjUlLCAwLCAwKSByb3RhdGUzZCgwLCAwLCAxLCAtNWRlZyk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTI1JSwgMCwgMCkgcm90YXRlM2QoMCwgMCwgMSwgLTVkZWcpO1xcbiAgfVxcblxcbiAgMzAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDIwJSwgMCwgMCkgcm90YXRlM2QoMCwgMCwgMSwgM2RlZyk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMjAlLCAwLCAwKSByb3RhdGUzZCgwLCAwLCAxLCAzZGVnKTtcXG4gIH1cXG5cXG4gIDQ1JSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTUlLCAwLCAwKSByb3RhdGUzZCgwLCAwLCAxLCAtM2RlZyk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTE1JSwgMCwgMCkgcm90YXRlM2QoMCwgMCwgMSwgLTNkZWcpO1xcbiAgfVxcblxcbiAgNjAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwJSwgMCwgMCkgcm90YXRlM2QoMCwgMCwgMSwgMmRlZyk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAlLCAwLCAwKSByb3RhdGUzZCgwLCAwLCAxLCAyZGVnKTtcXG4gIH1cXG5cXG4gIDc1JSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNSUsIDAsIDApIHJvdGF0ZTNkKDAsIDAsIDEsIC0xZGVnKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNSUsIDAsIDApIHJvdGF0ZTNkKDAsIDAsIDEsIC0xZGVnKTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgfVxcbn1cXG5cXG4ud29iYmxlIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHdvYmJsZTtcXG4gIGFuaW1hdGlvbi1uYW1lOiB3b2JibGU7XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBqZWxsbyB7XFxuICBmcm9tLFxcbiAgMTEuMSUsXFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIH1cXG5cXG4gIDIyLjIlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXdYKC0xMi41ZGVnKSBza2V3WSgtMTIuNWRlZyk7XFxuICAgIHRyYW5zZm9ybTogc2tld1goLTEyLjVkZWcpIHNrZXdZKC0xMi41ZGVnKTtcXG4gIH1cXG5cXG4gIDMzLjMlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXdYKDYuMjVkZWcpIHNrZXdZKDYuMjVkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHNrZXdYKDYuMjVkZWcpIHNrZXdZKDYuMjVkZWcpO1xcbiAgfVxcblxcbiAgNDQuNCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2tld1goLTMuMTI1ZGVnKSBza2V3WSgtMy4xMjVkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHNrZXdYKC0zLjEyNWRlZykgc2tld1koLTMuMTI1ZGVnKTtcXG4gIH1cXG5cXG4gIDU1LjUlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXdYKDEuNTYyNWRlZykgc2tld1koMS41NjI1ZGVnKTtcXG4gICAgdHJhbnNmb3JtOiBza2V3WCgxLjU2MjVkZWcpIHNrZXdZKDEuNTYyNWRlZyk7XFxuICB9XFxuXFxuICA2Ni42JSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3WCgtMC43ODEyNWRlZykgc2tld1koLTAuNzgxMjVkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHNrZXdYKC0wLjc4MTI1ZGVnKSBza2V3WSgtMC43ODEyNWRlZyk7XFxuICB9XFxuXFxuICA3Ny43JSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3WCgwLjM5MDYyNWRlZykgc2tld1koMC4zOTA2MjVkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHNrZXdYKDAuMzkwNjI1ZGVnKSBza2V3WSgwLjM5MDYyNWRlZyk7XFxuICB9XFxuXFxuICA4OC44JSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3WCgtMC4xOTUzMTI1ZGVnKSBza2V3WSgtMC4xOTUzMTI1ZGVnKTtcXG4gICAgdHJhbnNmb3JtOiBza2V3WCgtMC4xOTUzMTI1ZGVnKSBza2V3WSgtMC4xOTUzMTI1ZGVnKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBqZWxsbyB7XFxuICBmcm9tLFxcbiAgMTEuMSUsXFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIH1cXG5cXG4gIDIyLjIlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXdYKC0xMi41ZGVnKSBza2V3WSgtMTIuNWRlZyk7XFxuICAgIHRyYW5zZm9ybTogc2tld1goLTEyLjVkZWcpIHNrZXdZKC0xMi41ZGVnKTtcXG4gIH1cXG5cXG4gIDMzLjMlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXdYKDYuMjVkZWcpIHNrZXdZKDYuMjVkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHNrZXdYKDYuMjVkZWcpIHNrZXdZKDYuMjVkZWcpO1xcbiAgfVxcblxcbiAgNDQuNCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2tld1goLTMuMTI1ZGVnKSBza2V3WSgtMy4xMjVkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHNrZXdYKC0zLjEyNWRlZykgc2tld1koLTMuMTI1ZGVnKTtcXG4gIH1cXG5cXG4gIDU1LjUlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXdYKDEuNTYyNWRlZykgc2tld1koMS41NjI1ZGVnKTtcXG4gICAgdHJhbnNmb3JtOiBza2V3WCgxLjU2MjVkZWcpIHNrZXdZKDEuNTYyNWRlZyk7XFxuICB9XFxuXFxuICA2Ni42JSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3WCgtMC43ODEyNWRlZykgc2tld1koLTAuNzgxMjVkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHNrZXdYKC0wLjc4MTI1ZGVnKSBza2V3WSgtMC43ODEyNWRlZyk7XFxuICB9XFxuXFxuICA3Ny43JSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3WCgwLjM5MDYyNWRlZykgc2tld1koMC4zOTA2MjVkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHNrZXdYKDAuMzkwNjI1ZGVnKSBza2V3WSgwLjM5MDYyNWRlZyk7XFxuICB9XFxuXFxuICA4OC44JSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3WCgtMC4xOTUzMTI1ZGVnKSBza2V3WSgtMC4xOTUzMTI1ZGVnKTtcXG4gICAgdHJhbnNmb3JtOiBza2V3WCgtMC4xOTUzMTI1ZGVnKSBza2V3WSgtMC4xOTUzMTI1ZGVnKTtcXG4gIH1cXG59XFxuXFxuLmplbGxvIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGplbGxvO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGplbGxvO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBoZWFydEJlYXQge1xcbiAgMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICB9XFxuXFxuICAxNCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4zKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xcbiAgfVxcblxcbiAgMjglIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgfVxcblxcbiAgNDIlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMyk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcXG4gIH1cXG5cXG4gIDcwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBoZWFydEJlYXQge1xcbiAgMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICB9XFxuXFxuICAxNCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4zKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xcbiAgfVxcblxcbiAgMjglIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgfVxcblxcbiAgNDIlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMyk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcXG4gIH1cXG5cXG4gIDcwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIH1cXG59XFxuXFxuLmhlYXJ0QmVhdCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBoZWFydEJlYXQ7XFxuICBhbmltYXRpb24tbmFtZTogaGVhcnRCZWF0O1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDEuM3M7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDEuM3M7XFxuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBib3VuY2VJbiB7XFxuICBmcm9tLFxcbiAgMjAlLFxcbiAgNDAlLFxcbiAgNjAlLFxcbiAgODAlLFxcbiAgdG8ge1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTtcXG4gIH1cXG5cXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMC4zLCAwLjMsIDAuMyk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjMsIDAuMywgMC4zKTtcXG4gIH1cXG5cXG4gIDIwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEuMSwgMS4xLCAxLjEpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMS4xLCAxLjEsIDEuMSk7XFxuICB9XFxuXFxuICA0MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgwLjksIDAuOSwgMC45KTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuOSwgMC45LCAwLjkpO1xcbiAgfVxcblxcbiAgNjAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMS4wMywgMS4wMywgMS4wMyk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLjAzLCAxLjAzLCAxLjAzKTtcXG4gIH1cXG5cXG4gIDgwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDAuOTcsIDAuOTcsIDAuOTcpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC45NywgMC45NywgMC45Nyk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgYm91bmNlSW4ge1xcbiAgZnJvbSxcXG4gIDIwJSxcXG4gIDQwJSxcXG4gIDYwJSxcXG4gIDgwJSxcXG4gIHRvIHtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7XFxuICB9XFxuXFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDAuMywgMC4zLCAwLjMpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC4zLCAwLjMsIDAuMyk7XFxuICB9XFxuXFxuICAyMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgxLjEsIDEuMSwgMS4xKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEuMSwgMS4xLCAxLjEpO1xcbiAgfVxcblxcbiAgNDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMC45LCAwLjksIDAuOSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjksIDAuOSwgMC45KTtcXG4gIH1cXG5cXG4gIDYwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEuMDMsIDEuMDMsIDEuMDMpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMS4wMywgMS4wMywgMS4wMyk7XFxuICB9XFxuXFxuICA4MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgwLjk3LCAwLjk3LCAwLjk3KTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuOTcsIDAuOTcsIDAuOTcpO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xcbiAgfVxcbn1cXG5cXG4uYm91bmNlSW4ge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuNzVzO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjc1cztcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGJvdW5jZUluO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGJvdW5jZUluO1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgYm91bmNlSW5Eb3duIHtcXG4gIGZyb20sXFxuICA2MCUsXFxuICA3NSUsXFxuICA5MCUsXFxuICB0byB7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpO1xcbiAgfVxcblxcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTMwMDBweCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTMwMDBweCwgMCk7XFxuICB9XFxuXFxuICA2MCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMjVweCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMjVweCwgMCk7XFxuICB9XFxuXFxuICA3NSUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwcHgsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMHB4LCAwKTtcXG4gIH1cXG5cXG4gIDkwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCA1cHgsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDVweCwgMCk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBib3VuY2VJbkRvd24ge1xcbiAgZnJvbSxcXG4gIDYwJSxcXG4gIDc1JSxcXG4gIDkwJSxcXG4gIHRvIHtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7XFxuICB9XFxuXFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMzAwMHB4LCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMzAwMHB4LCAwKTtcXG4gIH1cXG5cXG4gIDYwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAyNXB4LCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAyNXB4LCAwKTtcXG4gIH1cXG5cXG4gIDc1JSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTBweCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwcHgsIDApO1xcbiAgfVxcblxcbiAgOTAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDVweCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgNXB4LCAwKTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgfVxcbn1cXG5cXG4uYm91bmNlSW5Eb3duIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGJvdW5jZUluRG93bjtcXG4gIGFuaW1hdGlvbi1uYW1lOiBib3VuY2VJbkRvd247XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBib3VuY2VJbkxlZnQge1xcbiAgZnJvbSxcXG4gIDYwJSxcXG4gIDc1JSxcXG4gIDkwJSxcXG4gIHRvIHtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7XFxuICB9XFxuXFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMzAwMHB4LCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMzAwMHB4LCAwLCAwKTtcXG4gIH1cXG5cXG4gIDYwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyNXB4LCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyNXB4LCAwLCAwKTtcXG4gIH1cXG5cXG4gIDc1JSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTBweCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwcHgsIDAsIDApO1xcbiAgfVxcblxcbiAgOTAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDVweCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoNXB4LCAwLCAwKTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGJvdW5jZUluTGVmdCB7XFxuICBmcm9tLFxcbiAgNjAlLFxcbiAgNzUlLFxcbiAgOTAlLFxcbiAgdG8ge1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTtcXG4gIH1cXG5cXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0zMDAwcHgsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0zMDAwcHgsIDAsIDApO1xcbiAgfVxcblxcbiAgNjAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDI1cHgsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDI1cHgsIDAsIDApO1xcbiAgfVxcblxcbiAgNzUlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMHB4LCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTBweCwgMCwgMCk7XFxuICB9XFxuXFxuICA5MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoNXB4LCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg1cHgsIDAsIDApO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB9XFxufVxcblxcbi5ib3VuY2VJbkxlZnQge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYm91bmNlSW5MZWZ0O1xcbiAgYW5pbWF0aW9uLW5hbWU6IGJvdW5jZUluTGVmdDtcXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGJvdW5jZUluUmlnaHQge1xcbiAgZnJvbSxcXG4gIDYwJSxcXG4gIDc1JSxcXG4gIDkwJSxcXG4gIHRvIHtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7XFxuICB9XFxuXFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDMwMDBweCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMzAwMHB4LCAwLCAwKTtcXG4gIH1cXG5cXG4gIDYwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMjVweCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTI1cHgsIDAsIDApO1xcbiAgfVxcblxcbiAgNzUlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwcHgsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwcHgsIDAsIDApO1xcbiAgfVxcblxcbiAgOTAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01cHgsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01cHgsIDAsIDApO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgYm91bmNlSW5SaWdodCB7XFxuICBmcm9tLFxcbiAgNjAlLFxcbiAgNzUlLFxcbiAgOTAlLFxcbiAgdG8ge1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTtcXG4gIH1cXG5cXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMzAwMHB4LCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgzMDAwcHgsIDAsIDApO1xcbiAgfVxcblxcbiAgNjAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yNXB4LCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMjVweCwgMCwgMCk7XFxuICB9XFxuXFxuICA3NSUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTBweCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTBweCwgMCwgMCk7XFxuICB9XFxuXFxuICA5MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTVweCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTVweCwgMCwgMCk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIH1cXG59XFxuXFxuLmJvdW5jZUluUmlnaHQge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYm91bmNlSW5SaWdodDtcXG4gIGFuaW1hdGlvbi1uYW1lOiBib3VuY2VJblJpZ2h0O1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgYm91bmNlSW5VcCB7XFxuICBmcm9tLFxcbiAgNjAlLFxcbiAgNzUlLFxcbiAgOTAlLFxcbiAgdG8ge1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTtcXG4gIH1cXG5cXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMzAwMHB4LCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAzMDAwcHgsIDApO1xcbiAgfVxcblxcbiAgNjAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0yMHB4LCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMjBweCwgMCk7XFxuICB9XFxuXFxuICA3NSUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTBweCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTBweCwgMCk7XFxuICB9XFxuXFxuICA5MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTVweCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTVweCwgMCk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBib3VuY2VJblVwIHtcXG4gIGZyb20sXFxuICA2MCUsXFxuICA3NSUsXFxuICA5MCUsXFxuICB0byB7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpO1xcbiAgfVxcblxcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAzMDAwcHgsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDMwMDBweCwgMCk7XFxuICB9XFxuXFxuICA2MCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTIwcHgsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0yMHB4LCAwKTtcXG4gIH1cXG5cXG4gIDc1JSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMHB4LCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMHB4LCAwKTtcXG4gIH1cXG5cXG4gIDkwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtNXB4LCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtNXB4LCAwKTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgfVxcbn1cXG5cXG4uYm91bmNlSW5VcCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBib3VuY2VJblVwO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGJvdW5jZUluVXA7XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBib3VuY2VPdXQge1xcbiAgMjAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMC45LCAwLjksIDAuOSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjksIDAuOSwgMC45KTtcXG4gIH1cXG5cXG4gIDUwJSxcXG4gIDU1JSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEuMSwgMS4xLCAxLjEpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMS4xLCAxLjEsIDEuMSk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDAuMywgMC4zLCAwLjMpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC4zLCAwLjMsIDAuMyk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgYm91bmNlT3V0IHtcXG4gIDIwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDAuOSwgMC45LCAwLjkpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC45LCAwLjksIDAuOSk7XFxuICB9XFxuXFxuICA1MCUsXFxuICA1NSUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgxLjEsIDEuMSwgMS4xKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEuMSwgMS4xLCAxLjEpO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgwLjMsIDAuMywgMC4zKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuMywgMC4zLCAwLjMpO1xcbiAgfVxcbn1cXG5cXG4uYm91bmNlT3V0IHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjc1cztcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC43NXM7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBib3VuY2VPdXQ7XFxuICBhbmltYXRpb24tbmFtZTogYm91bmNlT3V0O1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgYm91bmNlT3V0RG93biB7XFxuICAyMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTBweCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTBweCwgMCk7XFxuICB9XFxuXFxuICA0MCUsXFxuICA0NSUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTIwcHgsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0yMHB4LCAwKTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDIwMDBweCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMjAwMHB4LCAwKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBib3VuY2VPdXREb3duIHtcXG4gIDIwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMHB4LCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMHB4LCAwKTtcXG4gIH1cXG5cXG4gIDQwJSxcXG4gIDQ1JSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMjBweCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTIwcHgsIDApO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMjAwMHB4LCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAyMDAwcHgsIDApO1xcbiAgfVxcbn1cXG5cXG4uYm91bmNlT3V0RG93biB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBib3VuY2VPdXREb3duO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGJvdW5jZU91dERvd247XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBib3VuY2VPdXRMZWZ0IHtcXG4gIDIwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyMHB4LCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyMHB4LCAwLCAwKTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yMDAwcHgsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yMDAwcHgsIDAsIDApO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGJvdW5jZU91dExlZnQge1xcbiAgMjAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDIwcHgsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDIwcHgsIDAsIDApO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTIwMDBweCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTIwMDBweCwgMCwgMCk7XFxuICB9XFxufVxcblxcbi5ib3VuY2VPdXRMZWZ0IHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGJvdW5jZU91dExlZnQ7XFxuICBhbmltYXRpb24tbmFtZTogYm91bmNlT3V0TGVmdDtcXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGJvdW5jZU91dFJpZ2h0IHtcXG4gIDIwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMjBweCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTIwcHgsIDAsIDApO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMjAwMHB4LCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyMDAwcHgsIDAsIDApO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGJvdW5jZU91dFJpZ2h0IHtcXG4gIDIwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMjBweCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTIwcHgsIDAsIDApO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMjAwMHB4LCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyMDAwcHgsIDAsIDApO1xcbiAgfVxcbn1cXG5cXG4uYm91bmNlT3V0UmlnaHQge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYm91bmNlT3V0UmlnaHQ7XFxuICBhbmltYXRpb24tbmFtZTogYm91bmNlT3V0UmlnaHQ7XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBib3VuY2VPdXRVcCB7XFxuICAyMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwcHgsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMHB4LCAwKTtcXG4gIH1cXG5cXG4gIDQwJSxcXG4gIDQ1JSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAyMHB4LCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAyMHB4LCAwKTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0yMDAwcHgsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0yMDAwcHgsIDApO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGJvdW5jZU91dFVwIHtcXG4gIDIwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTBweCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwcHgsIDApO1xcbiAgfVxcblxcbiAgNDAlLFxcbiAgNDUlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDIwcHgsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDIwcHgsIDApO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTIwMDBweCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTIwMDBweCwgMCk7XFxuICB9XFxufVxcblxcbi5ib3VuY2VPdXRVcCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBib3VuY2VPdXRVcDtcXG4gIGFuaW1hdGlvbi1uYW1lOiBib3VuY2VPdXRVcDtcXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbiB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlSW4ge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblxcbi5mYWRlSW4ge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZUluO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbjtcXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlSW5Eb3duIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIH1cXG59XFxuXFxuLmZhZGVJbkRvd24ge1xcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkRvd247XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW5Eb3duQmlnIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTIwMDBweCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTIwMDBweCwgMCk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlSW5Eb3duQmlnIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTIwMDBweCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTIwMDBweCwgMCk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIH1cXG59XFxuXFxuLmZhZGVJbkRvd25CaWcge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZUluRG93bkJpZztcXG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW5Eb3duQmlnO1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluTGVmdCB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlSW5MZWZ0IHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgfVxcbn1cXG5cXG4uZmFkZUluTGVmdCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlSW5MZWZ0O1xcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkxlZnQ7XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW5MZWZ0QmlnIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTIwMDBweCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTIwMDBweCwgMCwgMCk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlSW5MZWZ0QmlnIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTIwMDBweCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTIwMDBweCwgMCwgMCk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIH1cXG59XFxuXFxuLmZhZGVJbkxlZnRCaWcge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZUluTGVmdEJpZztcXG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW5MZWZ0QmlnO1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluUmlnaHQge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVJblJpZ2h0IHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIH1cXG59XFxuXFxuLmZhZGVJblJpZ2h0IHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVJblJpZ2h0O1xcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJblJpZ2h0O1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluUmlnaHRCaWcge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyMDAwcHgsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDIwMDBweCwgMCwgMCk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlSW5SaWdodEJpZyB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDIwMDBweCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMjAwMHB4LCAwLCAwKTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgfVxcbn1cXG5cXG4uZmFkZUluUmlnaHRCaWcge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZUluUmlnaHRCaWc7XFxuICBhbmltYXRpb24tbmFtZTogZmFkZUluUmlnaHRCaWc7XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW5VcCB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZUluVXAge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMDAlLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMDAlLCAwKTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgfVxcbn1cXG5cXG4uZmFkZUluVXAge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZUluVXA7XFxuICBhbmltYXRpb24tbmFtZTogZmFkZUluVXA7XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW5VcEJpZyB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDIwMDBweCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMjAwMHB4LCAwKTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVJblVwQmlnIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMjAwMHB4LCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAyMDAwcHgsIDApO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB9XFxufVxcblxcbi5mYWRlSW5VcEJpZyB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlSW5VcEJpZztcXG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW5VcEJpZztcXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVPdXQge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZU91dCB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XFxuXFxuLmZhZGVPdXQge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZU91dDtcXG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0O1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZU91dERvd24ge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMDAlLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMDAlLCAwKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlT3V0RG93biB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApO1xcbiAgfVxcbn1cXG5cXG4uZmFkZU91dERvd24ge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZU91dERvd247XFxuICBhbmltYXRpb24tbmFtZTogZmFkZU91dERvd247XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlT3V0RG93bkJpZyB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDIwMDBweCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMjAwMHB4LCAwKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlT3V0RG93bkJpZyB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDIwMDBweCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMjAwMHB4LCAwKTtcXG4gIH1cXG59XFxuXFxuLmZhZGVPdXREb3duQmlnIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXREb3duQmlnO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXREb3duQmlnO1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZU91dExlZnQge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVPdXRMZWZ0IHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcXG4gIH1cXG59XFxuXFxuLmZhZGVPdXRMZWZ0IHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXRMZWZ0O1xcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXRMZWZ0O1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZU91dExlZnRCaWcge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMjAwMHB4LCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMjAwMHB4LCAwLCAwKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlT3V0TGVmdEJpZyB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yMDAwcHgsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yMDAwcHgsIDAsIDApO1xcbiAgfVxcbn1cXG5cXG4uZmFkZU91dExlZnRCaWcge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZU91dExlZnRCaWc7XFxuICBhbmltYXRpb24tbmFtZTogZmFkZU91dExlZnRCaWc7XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlT3V0UmlnaHQge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlT3V0UmlnaHQge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTtcXG4gIH1cXG59XFxuXFxuLmZhZGVPdXRSaWdodCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0UmlnaHQ7XFxuICBhbmltYXRpb24tbmFtZTogZmFkZU91dFJpZ2h0O1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZU91dFJpZ2h0QmlnIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMjAwMHB4LCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyMDAwcHgsIDAsIDApO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVPdXRSaWdodEJpZyB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDIwMDBweCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMjAwMHB4LCAwLCAwKTtcXG4gIH1cXG59XFxuXFxuLmZhZGVPdXRSaWdodEJpZyB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0UmlnaHRCaWc7XFxuICBhbmltYXRpb24tbmFtZTogZmFkZU91dFJpZ2h0QmlnO1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZU91dFVwIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlT3V0VXAge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xcbiAgfVxcbn1cXG5cXG4uZmFkZU91dFVwIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXRVcDtcXG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0VXA7XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlT3V0VXBCaWcge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMjAwMHB4LCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMjAwMHB4LCAwKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlT3V0VXBCaWcge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMjAwMHB4LCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMjAwMHB4LCAwKTtcXG4gIH1cXG59XFxuXFxuLmZhZGVPdXRVcEJpZyB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0VXBCaWc7XFxuICBhbmltYXRpb24tbmFtZTogZmFkZU91dFVwQmlnO1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmxpcCB7XFxuICBmcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSBzY2FsZTNkKDEsIDEsIDEpIHRyYW5zbGF0ZTNkKDAsIDAsIDApXFxuICAgICAgcm90YXRlM2QoMCwgMSwgMCwgLTM2MGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHNjYWxlM2QoMSwgMSwgMSkgdHJhbnNsYXRlM2QoMCwgMCwgMCkgcm90YXRlM2QoMCwgMSwgMCwgLTM2MGRlZyk7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xcbiAgfVxcblxcbiAgNDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSBzY2FsZTNkKDEsIDEsIDEpIHRyYW5zbGF0ZTNkKDAsIDAsIDE1MHB4KVxcbiAgICAgIHJvdGF0ZTNkKDAsIDEsIDAsIC0xOTBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSBzY2FsZTNkKDEsIDEsIDEpIHRyYW5zbGF0ZTNkKDAsIDAsIDE1MHB4KVxcbiAgICAgIHJvdGF0ZTNkKDAsIDEsIDAsIC0xOTBkZWcpO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcXG4gIH1cXG5cXG4gIDUwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgc2NhbGUzZCgxLCAxLCAxKSB0cmFuc2xhdGUzZCgwLCAwLCAxNTBweClcXG4gICAgICByb3RhdGUzZCgwLCAxLCAwLCAtMTcwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgc2NhbGUzZCgxLCAxLCAxKSB0cmFuc2xhdGUzZCgwLCAwLCAxNTBweClcXG4gICAgICByb3RhdGUzZCgwLCAxLCAwLCAtMTcwZGVnKTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xcbiAgfVxcblxcbiAgODAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSBzY2FsZTNkKDAuOTUsIDAuOTUsIDAuOTUpIHRyYW5zbGF0ZTNkKDAsIDAsIDApXFxuICAgICAgcm90YXRlM2QoMCwgMSwgMCwgMGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHNjYWxlM2QoMC45NSwgMC45NSwgMC45NSkgdHJhbnNsYXRlM2QoMCwgMCwgMClcXG4gICAgICByb3RhdGUzZCgwLCAxLCAwLCAwZGVnKTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHNjYWxlM2QoMSwgMSwgMSkgdHJhbnNsYXRlM2QoMCwgMCwgMClcXG4gICAgICByb3RhdGUzZCgwLCAxLCAwLCAwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgc2NhbGUzZCgxLCAxLCAxKSB0cmFuc2xhdGUzZCgwLCAwLCAwKSByb3RhdGUzZCgwLCAxLCAwLCAwZGVnKTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZsaXAge1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgc2NhbGUzZCgxLCAxLCAxKSB0cmFuc2xhdGUzZCgwLCAwLCAwKVxcbiAgICAgIHJvdGF0ZTNkKDAsIDEsIDAsIC0zNjBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSBzY2FsZTNkKDEsIDEsIDEpIHRyYW5zbGF0ZTNkKDAsIDAsIDApIHJvdGF0ZTNkKDAsIDEsIDAsIC0zNjBkZWcpO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcXG4gIH1cXG5cXG4gIDQwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgc2NhbGUzZCgxLCAxLCAxKSB0cmFuc2xhdGUzZCgwLCAwLCAxNTBweClcXG4gICAgICByb3RhdGUzZCgwLCAxLCAwLCAtMTkwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgc2NhbGUzZCgxLCAxLCAxKSB0cmFuc2xhdGUzZCgwLCAwLCAxNTBweClcXG4gICAgICByb3RhdGUzZCgwLCAxLCAwLCAtMTkwZGVnKTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XFxuICB9XFxuXFxuICA1MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHNjYWxlM2QoMSwgMSwgMSkgdHJhbnNsYXRlM2QoMCwgMCwgMTUwcHgpXFxuICAgICAgcm90YXRlM2QoMCwgMSwgMCwgLTE3MGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHNjYWxlM2QoMSwgMSwgMSkgdHJhbnNsYXRlM2QoMCwgMCwgMTUwcHgpXFxuICAgICAgcm90YXRlM2QoMCwgMSwgMCwgLTE3MGRlZyk7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcXG4gIH1cXG5cXG4gIDgwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgc2NhbGUzZCgwLjk1LCAwLjk1LCAwLjk1KSB0cmFuc2xhdGUzZCgwLCAwLCAwKVxcbiAgICAgIHJvdGF0ZTNkKDAsIDEsIDAsIDBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSBzY2FsZTNkKDAuOTUsIDAuOTUsIDAuOTUpIHRyYW5zbGF0ZTNkKDAsIDAsIDApXFxuICAgICAgcm90YXRlM2QoMCwgMSwgMCwgMGRlZyk7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSBzY2FsZTNkKDEsIDEsIDEpIHRyYW5zbGF0ZTNkKDAsIDAsIDApXFxuICAgICAgcm90YXRlM2QoMCwgMSwgMCwgMGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHNjYWxlM2QoMSwgMSwgMSkgdHJhbnNsYXRlM2QoMCwgMCwgMCkgcm90YXRlM2QoMCwgMSwgMCwgMGRlZyk7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcXG4gIH1cXG59XFxuXFxuLmFuaW1hdGVkLmZsaXAge1xcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZsaXA7XFxuICBhbmltYXRpb24tbmFtZTogZmxpcDtcXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGZsaXBJblgge1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMSwgMCwgMCwgOTBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgxLCAwLCAwLCA5MGRlZyk7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG5cXG4gIDQwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMSwgMCwgMCwgLTIwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMSwgMCwgMCwgLTIwZGVnKTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xcbiAgfVxcblxcbiAgNjAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgxLCAwLCAwLCAxMGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKDEsIDAsIDAsIDEwZGVnKTtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG5cXG4gIDgwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMSwgMCwgMCwgLTVkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgxLCAwLCAwLCAtNWRlZyk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCk7XFxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZsaXBJblgge1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMSwgMCwgMCwgOTBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgxLCAwLCAwLCA5MGRlZyk7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG5cXG4gIDQwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMSwgMCwgMCwgLTIwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMSwgMCwgMCwgLTIwZGVnKTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xcbiAgfVxcblxcbiAgNjAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgxLCAwLCAwLCAxMGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKDEsIDAsIDAsIDEwZGVnKTtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG5cXG4gIDgwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMSwgMCwgMCwgLTVkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgxLCAwLCAwLCAtNWRlZyk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCk7XFxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpO1xcbiAgfVxcbn1cXG5cXG4uZmxpcEluWCB7XFxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZsaXBJblg7XFxuICBhbmltYXRpb24tbmFtZTogZmxpcEluWDtcXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGZsaXBJblkge1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMCwgMSwgMCwgOTBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgwLCAxLCAwLCA5MGRlZyk7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG5cXG4gIDQwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMCwgMSwgMCwgLTIwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMCwgMSwgMCwgLTIwZGVnKTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xcbiAgfVxcblxcbiAgNjAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgwLCAxLCAwLCAxMGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKDAsIDEsIDAsIDEwZGVnKTtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG5cXG4gIDgwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMCwgMSwgMCwgLTVkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgwLCAxLCAwLCAtNWRlZyk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCk7XFxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZsaXBJblkge1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMCwgMSwgMCwgOTBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgwLCAxLCAwLCA5MGRlZyk7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG5cXG4gIDQwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMCwgMSwgMCwgLTIwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMCwgMSwgMCwgLTIwZGVnKTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xcbiAgfVxcblxcbiAgNjAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgwLCAxLCAwLCAxMGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKDAsIDEsIDAsIDEwZGVnKTtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG5cXG4gIDgwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMCwgMSwgMCwgLTVkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgwLCAxLCAwLCAtNWRlZyk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCk7XFxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpO1xcbiAgfVxcbn1cXG5cXG4uZmxpcEluWSB7XFxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZsaXBJblk7XFxuICBhbmltYXRpb24tbmFtZTogZmxpcEluWTtcXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGZsaXBPdXRYIHtcXG4gIGZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpO1xcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KTtcXG4gIH1cXG5cXG4gIDMwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMSwgMCwgMCwgLTIwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMSwgMCwgMCwgLTIwZGVnKTtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgxLCAwLCAwLCA5MGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKDEsIDAsIDAsIDkwZGVnKTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBmbGlwT3V0WCB7XFxuICBmcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KTtcXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCk7XFxuICB9XFxuXFxuICAzMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKDEsIDAsIDAsIC0yMGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKDEsIDAsIDAsIC0yMGRlZyk7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMSwgMCwgMCwgOTBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgxLCAwLCAwLCA5MGRlZyk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxufVxcblxcbi5mbGlwT3V0WCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC43NXM7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuNzVzO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmxpcE91dFg7XFxuICBhbmltYXRpb24tbmFtZTogZmxpcE91dFg7XFxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGZsaXBPdXRZIHtcXG4gIGZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpO1xcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KTtcXG4gIH1cXG5cXG4gIDMwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMCwgMSwgMCwgLTE1ZGVnKTtcXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMCwgMSwgMCwgLTE1ZGVnKTtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgwLCAxLCAwLCA5MGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKDAsIDEsIDAsIDkwZGVnKTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBmbGlwT3V0WSB7XFxuICBmcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KTtcXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCk7XFxuICB9XFxuXFxuICAzMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKDAsIDEsIDAsIC0xNWRlZyk7XFxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKDAsIDEsIDAsIC0xNWRlZyk7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMCwgMSwgMCwgOTBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgwLCAxLCAwLCA5MGRlZyk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxufVxcblxcbi5mbGlwT3V0WSB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC43NXM7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuNzVzO1xcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiB2aXNpYmxlICFpbXBvcnRhbnQ7XFxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiB2aXNpYmxlICFpbXBvcnRhbnQ7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmbGlwT3V0WTtcXG4gIGFuaW1hdGlvbi1uYW1lOiBmbGlwT3V0WTtcXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGxpZ2h0U3BlZWRJbiB7XFxuICBmcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApIHNrZXdYKC0zMGRlZyk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCkgc2tld1goLTMwZGVnKTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG5cXG4gIDYwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3WCgyMGRlZyk7XFxuICAgIHRyYW5zZm9ybTogc2tld1goMjBkZWcpO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcblxcbiAgODAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXdYKC01ZGVnKTtcXG4gICAgdHJhbnNmb3JtOiBza2V3WCgtNWRlZyk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBsaWdodFNwZWVkSW4ge1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKSBza2V3WCgtMzBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApIHNrZXdYKC0zMGRlZyk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuXFxuICA2MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2tld1goMjBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHNrZXdYKDIwZGVnKTtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG5cXG4gIDgwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3WCgtNWRlZyk7XFxuICAgIHRyYW5zZm9ybTogc2tld1goLTVkZWcpO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB9XFxufVxcblxcbi5saWdodFNwZWVkSW4ge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogbGlnaHRTcGVlZEluO1xcbiAgYW5pbWF0aW9uLW5hbWU6IGxpZ2h0U3BlZWRJbjtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGxpZ2h0U3BlZWRPdXQge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKSBza2V3WCgzMGRlZyk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCkgc2tld1goMzBkZWcpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGxpZ2h0U3BlZWRPdXQge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKSBza2V3WCgzMGRlZyk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCkgc2tld1goMzBkZWcpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbn1cXG5cXG4ubGlnaHRTcGVlZE91dCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBsaWdodFNwZWVkT3V0O1xcbiAgYW5pbWF0aW9uLW5hbWU6IGxpZ2h0U3BlZWRPdXQ7XFxuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgcm90YXRlSW4ge1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAtMjAwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAtMjAwZGVnKTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHJvdGF0ZUluIHtcXG4gIGZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgLTIwMGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgLTIwMGRlZyk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuXFxuLnJvdGF0ZUluIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZUluO1xcbiAgYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZUluO1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgcm90YXRlSW5Eb3duTGVmdCB7XFxuICBmcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAtNDVkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIC00NWRlZyk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgcm90YXRlSW5Eb3duTGVmdCB7XFxuICBmcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAtNDVkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIC00NWRlZyk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblxcbi5yb3RhdGVJbkRvd25MZWZ0IHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZUluRG93bkxlZnQ7XFxuICBhbmltYXRpb24tbmFtZTogcm90YXRlSW5Eb3duTGVmdDtcXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIHJvdGF0ZUluRG93blJpZ2h0IHtcXG4gIGZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGJvdHRvbTtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgYm90dG9tO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgNDVkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDQ1ZGVnKTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBib3R0b207XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGJvdHRvbTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHJvdGF0ZUluRG93blJpZ2h0IHtcXG4gIGZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGJvdHRvbTtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgYm90dG9tO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgNDVkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDQ1ZGVnKTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBib3R0b207XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGJvdHRvbTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cXG4ucm90YXRlSW5Eb3duUmlnaHQge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogcm90YXRlSW5Eb3duUmlnaHQ7XFxuICBhbmltYXRpb24tbmFtZTogcm90YXRlSW5Eb3duUmlnaHQ7XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyByb3RhdGVJblVwTGVmdCB7XFxuICBmcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCA0NWRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgNDVkZWcpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHJvdGF0ZUluVXBMZWZ0IHtcXG4gIGZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDQ1ZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCA0NWRlZyk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblxcbi5yb3RhdGVJblVwTGVmdCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiByb3RhdGVJblVwTGVmdDtcXG4gIGFuaW1hdGlvbi1uYW1lOiByb3RhdGVJblVwTGVmdDtcXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIHJvdGF0ZUluVXBSaWdodCB7XFxuICBmcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBib3R0b207XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGJvdHRvbTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIC05MGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgLTkwZGVnKTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBib3R0b207XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGJvdHRvbTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHJvdGF0ZUluVXBSaWdodCB7XFxuICBmcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBib3R0b207XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGJvdHRvbTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIC05MGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgLTkwZGVnKTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBib3R0b207XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGJvdHRvbTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cXG4ucm90YXRlSW5VcFJpZ2h0IHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZUluVXBSaWdodDtcXG4gIGFuaW1hdGlvbi1uYW1lOiByb3RhdGVJblVwUmlnaHQ7XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyByb3RhdGVPdXQge1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAyMDBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDIwMGRlZyk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgcm90YXRlT3V0IHtcXG4gIGZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgMjAwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAyMDBkZWcpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbn1cXG5cXG4ucm90YXRlT3V0IHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZU91dDtcXG4gIGFuaW1hdGlvbi1uYW1lOiByb3RhdGVPdXQ7XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyByb3RhdGVPdXREb3duTGVmdCB7XFxuICBmcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgNDVkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDQ1ZGVnKTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyByb3RhdGVPdXREb3duTGVmdCB7XFxuICBmcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgNDVkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDQ1ZGVnKTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XFxuXFxuLnJvdGF0ZU91dERvd25MZWZ0IHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZU91dERvd25MZWZ0O1xcbiAgYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZU91dERvd25MZWZ0O1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgcm90YXRlT3V0RG93blJpZ2h0IHtcXG4gIGZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGJvdHRvbTtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgYm90dG9tO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGJvdHRvbTtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgYm90dG9tO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgLTQ1ZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAtNDVkZWcpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHJvdGF0ZU91dERvd25SaWdodCB7XFxuICBmcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBib3R0b207XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGJvdHRvbTtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBib3R0b207XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGJvdHRvbTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIC00NWRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgLTQ1ZGVnKTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XFxuXFxuLnJvdGF0ZU91dERvd25SaWdodCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiByb3RhdGVPdXREb3duUmlnaHQ7XFxuICBhbmltYXRpb24tbmFtZTogcm90YXRlT3V0RG93blJpZ2h0O1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgcm90YXRlT3V0VXBMZWZ0IHtcXG4gIGZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAtNDVkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIC00NWRlZyk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgcm90YXRlT3V0VXBMZWZ0IHtcXG4gIGZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAtNDVkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIC00NWRlZyk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxufVxcblxcbi5yb3RhdGVPdXRVcExlZnQge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogcm90YXRlT3V0VXBMZWZ0O1xcbiAgYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZU91dFVwTGVmdDtcXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIHJvdGF0ZU91dFVwUmlnaHQge1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgYm90dG9tO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBib3R0b207XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgYm90dG9tO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBib3R0b207XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCA5MGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgOTBkZWcpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHJvdGF0ZU91dFVwUmlnaHQge1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgYm90dG9tO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBib3R0b207XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgYm90dG9tO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBib3R0b207XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCA5MGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgOTBkZWcpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbn1cXG5cXG4ucm90YXRlT3V0VXBSaWdodCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiByb3RhdGVPdXRVcFJpZ2h0O1xcbiAgYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZU91dFVwUmlnaHQ7XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBoaW5nZSB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnQ7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXG4gIH1cXG5cXG4gIDIwJSxcXG4gIDYwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCA4MGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgODBkZWcpO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxuICB9XFxuXFxuICA0MCUsXFxuICA4MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgNjBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDYwZGVnKTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnQ7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgNzAwcHgsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDcwMHB4LCAwKTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBoaW5nZSB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnQ7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXG4gIH1cXG5cXG4gIDIwJSxcXG4gIDYwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCA4MGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgODBkZWcpO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxuICB9XFxuXFxuICA0MCUsXFxuICA4MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgNjBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDYwZGVnKTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnQ7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgNzAwcHgsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDcwMHB4LCAwKTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XFxuXFxuLmhpbmdlIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBoaW5nZTtcXG4gIGFuaW1hdGlvbi1uYW1lOiBoaW5nZTtcXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGphY2tJblRoZUJveCB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuMSkgcm90YXRlKDMwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjEpIHJvdGF0ZSgzMGRlZyk7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGJvdHRvbTtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGJvdHRvbTtcXG4gIH1cXG5cXG4gIDUwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTEwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTEwZGVnKTtcXG4gIH1cXG5cXG4gIDcwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoM2RlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDNkZWcpO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgamFja0luVGhlQm94IHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4xKSByb3RhdGUoMzBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMSkgcm90YXRlKDMwZGVnKTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgYm90dG9tO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgYm90dG9tO1xcbiAgfVxcblxcbiAgNTAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMTBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTBkZWcpO1xcbiAgfVxcblxcbiAgNzAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoM2RlZyk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIH1cXG59XFxuXFxuLmphY2tJblRoZUJveCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBqYWNrSW5UaGVCb3g7XFxuICBhbmltYXRpb24tbmFtZTogamFja0luVGhlQm94O1xcbn1cXG5cXG4vKiBvcmlnaW5hbGx5IGF1dGhvcmVkIGJ5IE5pY2sgUGV0dGl0IC0gaHR0cHM6Ly9naXRodWIuY29tL25pY2twZXR0aXQvZ2xpZGUgKi9cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgcm9sbEluIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApIHJvdGF0ZTNkKDAsIDAsIDEsIC0xMjBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKSByb3RhdGUzZCgwLCAwLCAxLCAtMTIwZGVnKTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHJvbGxJbiB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKSByb3RhdGUzZCgwLCAwLCAxLCAtMTIwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCkgcm90YXRlM2QoMCwgMCwgMSwgLTEyMGRlZyk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIH1cXG59XFxuXFxuLnJvbGxJbiB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiByb2xsSW47XFxuICBhbmltYXRpb24tbmFtZTogcm9sbEluO1xcbn1cXG5cXG4vKiBvcmlnaW5hbGx5IGF1dGhvcmVkIGJ5IE5pY2sgUGV0dGl0IC0gaHR0cHM6Ly9naXRodWIuY29tL25pY2twZXR0aXQvZ2xpZGUgKi9cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgcm9sbE91dCB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApIHJvdGF0ZTNkKDAsIDAsIDEsIDEyMGRlZyk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCkgcm90YXRlM2QoMCwgMCwgMSwgMTIwZGVnKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyByb2xsT3V0IHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCkgcm90YXRlM2QoMCwgMCwgMSwgMTIwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKSByb3RhdGUzZCgwLCAwLCAxLCAxMjBkZWcpO1xcbiAgfVxcbn1cXG5cXG4ucm9sbE91dCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiByb2xsT3V0O1xcbiAgYW5pbWF0aW9uLW5hbWU6IHJvbGxPdXQ7XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyB6b29tSW4ge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDAuMywgMC4zLCAwLjMpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC4zLCAwLjMsIDAuMyk7XFxuICB9XFxuXFxuICA1MCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHpvb21JbiB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMC4zLCAwLjMsIDAuMyk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjMsIDAuMywgMC4zKTtcXG4gIH1cXG5cXG4gIDUwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblxcbi56b29tSW4ge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogem9vbUluO1xcbiAgYW5pbWF0aW9uLW5hbWU6IHpvb21JbjtcXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIHpvb21JbkRvd24ge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDAuMSwgMC4xLCAwLjEpIHRyYW5zbGF0ZTNkKDAsIC0xMDAwcHgsIDApO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC4xLCAwLjEsIDAuMSkgdHJhbnNsYXRlM2QoMCwgLTEwMDBweCwgMCk7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSk7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpO1xcbiAgfVxcblxcbiAgNjAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMC40NzUsIDAuNDc1LCAwLjQ3NSkgdHJhbnNsYXRlM2QoMCwgNjBweCwgMCk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjQ3NSwgMC40NzUsIDAuNDc1KSB0cmFuc2xhdGUzZCgwLCA2MHB4LCAwKTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxKTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMSk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgem9vbUluRG93biB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMC4xLCAwLjEsIDAuMSkgdHJhbnNsYXRlM2QoMCwgLTEwMDBweCwgMCk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjEsIDAuMSwgMC4xKSB0cmFuc2xhdGUzZCgwLCAtMTAwMHB4LCAwKTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41NSwgMC4wNTUsIDAuNjc1LCAwLjE5KTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSk7XFxuICB9XFxuXFxuICA2MCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgwLjQ3NSwgMC40NzUsIDAuNDc1KSB0cmFuc2xhdGUzZCgwLCA2MHB4LCAwKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuNDc1LCAwLjQ3NSwgMC40NzUpIHRyYW5zbGF0ZTNkKDAsIDYwcHgsIDApO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEpO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxKTtcXG4gIH1cXG59XFxuXFxuLnpvb21JbkRvd24ge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogem9vbUluRG93bjtcXG4gIGFuaW1hdGlvbi1uYW1lOiB6b29tSW5Eb3duO1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgem9vbUluTGVmdCB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMC4xLCAwLjEsIDAuMSkgdHJhbnNsYXRlM2QoLTEwMDBweCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjEsIDAuMSwgMC4xKSB0cmFuc2xhdGUzZCgtMTAwMHB4LCAwLCAwKTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41NSwgMC4wNTUsIDAuNjc1LCAwLjE5KTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSk7XFxuICB9XFxuXFxuICA2MCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgwLjQ3NSwgMC40NzUsIDAuNDc1KSB0cmFuc2xhdGUzZCgxMHB4LCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuNDc1LCAwLjQ3NSwgMC40NzUpIHRyYW5zbGF0ZTNkKDEwcHgsIDAsIDApO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEpO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyB6b29tSW5MZWZ0IHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgwLjEsIDAuMSwgMC4xKSB0cmFuc2xhdGUzZCgtMTAwMHB4LCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuMSwgMC4xLCAwLjEpIHRyYW5zbGF0ZTNkKC0xMDAwcHgsIDAsIDApO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41NSwgMC4wNTUsIDAuNjc1LCAwLjE5KTtcXG4gIH1cXG5cXG4gIDYwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDAuNDc1LCAwLjQ3NSwgMC40NzUpIHRyYW5zbGF0ZTNkKDEwcHgsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC40NzUsIDAuNDc1LCAwLjQ3NSkgdHJhbnNsYXRlM2QoMTBweCwgMCwgMCk7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMSk7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEpO1xcbiAgfVxcbn1cXG5cXG4uem9vbUluTGVmdCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiB6b29tSW5MZWZ0O1xcbiAgYW5pbWF0aW9uLW5hbWU6IHpvb21JbkxlZnQ7XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyB6b29tSW5SaWdodCB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMC4xLCAwLjEsIDAuMSkgdHJhbnNsYXRlM2QoMTAwMHB4LCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuMSwgMC4xLCAwLjEpIHRyYW5zbGF0ZTNkKDEwMDBweCwgMCwgMCk7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSk7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpO1xcbiAgfVxcblxcbiAgNjAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMC40NzUsIDAuNDc1LCAwLjQ3NSkgdHJhbnNsYXRlM2QoLTEwcHgsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC40NzUsIDAuNDc1LCAwLjQ3NSkgdHJhbnNsYXRlM2QoLTEwcHgsIDAsIDApO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEpO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyB6b29tSW5SaWdodCB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMC4xLCAwLjEsIDAuMSkgdHJhbnNsYXRlM2QoMTAwMHB4LCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuMSwgMC4xLCAwLjEpIHRyYW5zbGF0ZTNkKDEwMDBweCwgMCwgMCk7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSk7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpO1xcbiAgfVxcblxcbiAgNjAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMC40NzUsIDAuNDc1LCAwLjQ3NSkgdHJhbnNsYXRlM2QoLTEwcHgsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC40NzUsIDAuNDc1LCAwLjQ3NSkgdHJhbnNsYXRlM2QoLTEwcHgsIDAsIDApO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEpO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxKTtcXG4gIH1cXG59XFxuXFxuLnpvb21JblJpZ2h0IHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHpvb21JblJpZ2h0O1xcbiAgYW5pbWF0aW9uLW5hbWU6IHpvb21JblJpZ2h0O1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgem9vbUluVXAge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDAuMSwgMC4xLCAwLjEpIHRyYW5zbGF0ZTNkKDAsIDEwMDBweCwgMCk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjEsIDAuMSwgMC4xKSB0cmFuc2xhdGUzZCgwLCAxMDAwcHgsIDApO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41NSwgMC4wNTUsIDAuNjc1LCAwLjE5KTtcXG4gIH1cXG5cXG4gIDYwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDAuNDc1LCAwLjQ3NSwgMC40NzUpIHRyYW5zbGF0ZTNkKDAsIC02MHB4LCAwKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuNDc1LCAwLjQ3NSwgMC40NzUpIHRyYW5zbGF0ZTNkKDAsIC02MHB4LCAwKTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxKTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMSk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgem9vbUluVXAge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDAuMSwgMC4xLCAwLjEpIHRyYW5zbGF0ZTNkKDAsIDEwMDBweCwgMCk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjEsIDAuMSwgMC4xKSB0cmFuc2xhdGUzZCgwLCAxMDAwcHgsIDApO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41NSwgMC4wNTUsIDAuNjc1LCAwLjE5KTtcXG4gIH1cXG5cXG4gIDYwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDAuNDc1LCAwLjQ3NSwgMC40NzUpIHRyYW5zbGF0ZTNkKDAsIC02MHB4LCAwKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuNDc1LCAwLjQ3NSwgMC40NzUpIHRyYW5zbGF0ZTNkKDAsIC02MHB4LCAwKTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxKTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMSk7XFxuICB9XFxufVxcblxcbi56b29tSW5VcCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiB6b29tSW5VcDtcXG4gIGFuaW1hdGlvbi1uYW1lOiB6b29tSW5VcDtcXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIHpvb21PdXQge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuXFxuICA1MCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgwLjMsIDAuMywgMC4zKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuMywgMC4zLCAwLjMpO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHpvb21PdXQge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuXFxuICA1MCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgwLjMsIDAuMywgMC4zKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuMywgMC4zLCAwLjMpO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbn1cXG5cXG4uem9vbU91dCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiB6b29tT3V0O1xcbiAgYW5pbWF0aW9uLW5hbWU6IHpvb21PdXQ7XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyB6b29tT3V0RG93biB7XFxuICA0MCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgwLjQ3NSwgMC40NzUsIDAuNDc1KSB0cmFuc2xhdGUzZCgwLCAtNjBweCwgMCk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjQ3NSwgMC40NzUsIDAuNDc1KSB0cmFuc2xhdGUzZCgwLCAtNjBweCwgMCk7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSk7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgwLjEsIDAuMSwgMC4xKSB0cmFuc2xhdGUzZCgwLCAyMDAwcHgsIDApO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC4xLCAwLjEsIDAuMSkgdHJhbnNsYXRlM2QoMCwgMjAwMHB4LCAwKTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgYm90dG9tO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgYm90dG9tO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEpO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyB6b29tT3V0RG93biB7XFxuICA0MCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgwLjQ3NSwgMC40NzUsIDAuNDc1KSB0cmFuc2xhdGUzZCgwLCAtNjBweCwgMCk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjQ3NSwgMC40NzUsIDAuNDc1KSB0cmFuc2xhdGUzZCgwLCAtNjBweCwgMCk7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSk7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgwLjEsIDAuMSwgMC4xKSB0cmFuc2xhdGUzZCgwLCAyMDAwcHgsIDApO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC4xLCAwLjEsIDAuMSkgdHJhbnNsYXRlM2QoMCwgMjAwMHB4LCAwKTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgYm90dG9tO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgYm90dG9tO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEpO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxKTtcXG4gIH1cXG59XFxuXFxuLnpvb21PdXREb3duIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHpvb21PdXREb3duO1xcbiAgYW5pbWF0aW9uLW5hbWU6IHpvb21PdXREb3duO1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgem9vbU91dExlZnQge1xcbiAgNDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMC40NzUsIDAuNDc1LCAwLjQ3NSkgdHJhbnNsYXRlM2QoNDJweCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjQ3NSwgMC40NzUsIDAuNDc1KSB0cmFuc2xhdGUzZCg0MnB4LCAwLCAwKTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuMSkgdHJhbnNsYXRlM2QoLTIwMDBweCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC4xKSB0cmFuc2xhdGUzZCgtMjAwMHB4LCAwLCAwKTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGNlbnRlcjtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBjZW50ZXI7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgem9vbU91dExlZnQge1xcbiAgNDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMC40NzUsIDAuNDc1LCAwLjQ3NSkgdHJhbnNsYXRlM2QoNDJweCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjQ3NSwgMC40NzUsIDAuNDc1KSB0cmFuc2xhdGUzZCg0MnB4LCAwLCAwKTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuMSkgdHJhbnNsYXRlM2QoLTIwMDBweCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC4xKSB0cmFuc2xhdGUzZCgtMjAwMHB4LCAwLCAwKTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGNlbnRlcjtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBjZW50ZXI7XFxuICB9XFxufVxcblxcbi56b29tT3V0TGVmdCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiB6b29tT3V0TGVmdDtcXG4gIGFuaW1hdGlvbi1uYW1lOiB6b29tT3V0TGVmdDtcXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIHpvb21PdXRSaWdodCB7XFxuICA0MCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgwLjQ3NSwgMC40NzUsIDAuNDc1KSB0cmFuc2xhdGUzZCgtNDJweCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjQ3NSwgMC40NzUsIDAuNDc1KSB0cmFuc2xhdGUzZCgtNDJweCwgMCwgMCk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjEpIHRyYW5zbGF0ZTNkKDIwMDBweCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC4xKSB0cmFuc2xhdGUzZCgyMDAwcHgsIDAsIDApO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGNlbnRlcjtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgY2VudGVyO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHpvb21PdXRSaWdodCB7XFxuICA0MCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgwLjQ3NSwgMC40NzUsIDAuNDc1KSB0cmFuc2xhdGUzZCgtNDJweCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjQ3NSwgMC40NzUsIDAuNDc1KSB0cmFuc2xhdGUzZCgtNDJweCwgMCwgMCk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjEpIHRyYW5zbGF0ZTNkKDIwMDBweCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC4xKSB0cmFuc2xhdGUzZCgyMDAwcHgsIDAsIDApO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGNlbnRlcjtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgY2VudGVyO1xcbiAgfVxcbn1cXG5cXG4uem9vbU91dFJpZ2h0IHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHpvb21PdXRSaWdodDtcXG4gIGFuaW1hdGlvbi1uYW1lOiB6b29tT3V0UmlnaHQ7XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyB6b29tT3V0VXAge1xcbiAgNDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMC40NzUsIDAuNDc1LCAwLjQ3NSkgdHJhbnNsYXRlM2QoMCwgNjBweCwgMCk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjQ3NSwgMC40NzUsIDAuNDc1KSB0cmFuc2xhdGUzZCgwLCA2MHB4LCAwKTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41NSwgMC4wNTUsIDAuNjc1LCAwLjE5KTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDAuMSwgMC4xLCAwLjEpIHRyYW5zbGF0ZTNkKDAsIC0yMDAwcHgsIDApO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC4xLCAwLjEsIDAuMSkgdHJhbnNsYXRlM2QoMCwgLTIwMDBweCwgMCk7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGJvdHRvbTtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGJvdHRvbTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxKTtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMSk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgem9vbU91dFVwIHtcXG4gIDQwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDAuNDc1LCAwLjQ3NSwgMC40NzUpIHRyYW5zbGF0ZTNkKDAsIDYwcHgsIDApO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC40NzUsIDAuNDc1LCAwLjQ3NSkgdHJhbnNsYXRlM2QoMCwgNjBweCwgMCk7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSk7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgwLjEsIDAuMSwgMC4xKSB0cmFuc2xhdGUzZCgwLCAtMjAwMHB4LCAwKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuMSwgMC4xLCAwLjEpIHRyYW5zbGF0ZTNkKDAsIC0yMDAwcHgsIDApO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBib3R0b207XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBib3R0b207XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMSk7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEpO1xcbiAgfVxcbn1cXG5cXG4uem9vbU91dFVwIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHpvb21PdXRVcDtcXG4gIGFuaW1hdGlvbi1uYW1lOiB6b29tT3V0VXA7XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBzbGlkZUluRG93biB7XFxuICBmcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZUluRG93biB7XFxuICBmcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIH1cXG59XFxuXFxuLnNsaWRlSW5Eb3duIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHNsaWRlSW5Eb3duO1xcbiAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlSW5Eb3duO1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGVJbkxlZnQge1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgc2xpZGVJbkxlZnQge1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB9XFxufVxcblxcbi5zbGlkZUluTGVmdCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBzbGlkZUluTGVmdDtcXG4gIGFuaW1hdGlvbi1uYW1lOiBzbGlkZUluTGVmdDtcXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIHNsaWRlSW5SaWdodCB7XFxuICBmcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgc2xpZGVJblJpZ2h0IHtcXG4gIGZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIH1cXG59XFxuXFxuLnNsaWRlSW5SaWdodCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBzbGlkZUluUmlnaHQ7XFxuICBhbmltYXRpb24tbmFtZTogc2xpZGVJblJpZ2h0O1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGVJblVwIHtcXG4gIGZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZUluVXAge1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMDAlLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMDAlLCAwKTtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgfVxcbn1cXG5cXG4uc2xpZGVJblVwIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHNsaWRlSW5VcDtcXG4gIGFuaW1hdGlvbi1uYW1lOiBzbGlkZUluVXA7XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBzbGlkZU91dERvd24ge1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgc2xpZGVPdXREb3duIHtcXG4gIGZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApO1xcbiAgfVxcbn1cXG5cXG4uc2xpZGVPdXREb3duIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHNsaWRlT3V0RG93bjtcXG4gIGFuaW1hdGlvbi1uYW1lOiBzbGlkZU91dERvd247XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBzbGlkZU91dExlZnQge1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZU91dExlZnQge1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcXG4gIH1cXG59XFxuXFxuLnNsaWRlT3V0TGVmdCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBzbGlkZU91dExlZnQ7XFxuICBhbmltYXRpb24tbmFtZTogc2xpZGVPdXRMZWZ0O1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGVPdXRSaWdodCB7XFxuICBmcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZU91dFJpZ2h0IHtcXG4gIGZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xcbiAgfVxcbn1cXG5cXG4uc2xpZGVPdXRSaWdodCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBzbGlkZU91dFJpZ2h0O1xcbiAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlT3V0UmlnaHQ7XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBzbGlkZU91dFVwIHtcXG4gIGZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgc2xpZGVPdXRVcCB7XFxuICBmcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xcbiAgfVxcbn1cXG5cXG4uc2xpZGVPdXRVcCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBzbGlkZU91dFVwO1xcbiAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlT3V0VXA7XFxufVxcblxcbi5hbmltYXRlZCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG59XFxuXFxuLmFuaW1hdGVkLmluZmluaXRlIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXG59XFxuXFxuLmFuaW1hdGVkLmRlbGF5LTFzIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxcztcXG4gIGFuaW1hdGlvbi1kZWxheTogMXM7XFxufVxcblxcbi5hbmltYXRlZC5kZWxheS0ycyB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMnM7XFxuICBhbmltYXRpb24tZGVsYXk6IDJzO1xcbn1cXG5cXG4uYW5pbWF0ZWQuZGVsYXktM3Mge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDNzO1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAzcztcXG59XFxuXFxuLmFuaW1hdGVkLmRlbGF5LTRzIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiA0cztcXG4gIGFuaW1hdGlvbi1kZWxheTogNHM7XFxufVxcblxcbi5hbmltYXRlZC5kZWxheS01cyB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogNXM7XFxuICBhbmltYXRpb24tZGVsYXk6IDVzO1xcbn1cXG5cXG4uYW5pbWF0ZWQuZmFzdCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogODAwbXM7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDgwMG1zO1xcbn1cXG5cXG4uYW5pbWF0ZWQuZmFzdGVyIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiA1MDBtcztcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNTAwbXM7XFxufVxcblxcbi5hbmltYXRlZC5zbG93IHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XFxufVxcblxcbi5hbmltYXRlZC5zbG93ZXIge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDNzO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcXG59XFxuXFxuQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uKSB7XFxuICAuYW5pbWF0ZWQge1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogdW5zZXQgIWltcG9ydGFudDtcXG4gICAgYW5pbWF0aW9uOiB1bnNldCAhaW1wb3J0YW50O1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcXG4gICAgdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xcbiAgfVxcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cbiAgICBjb25zdCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5cbiAgICBleHBvcnRzLmZvckVhY2goY3NzRXhwb3J0ID0+IHtcbiAgICAgICAgaWYgKGNzc0V4cG9ydC5sZW5ndGggPiAxICYmIGNzc0V4cG9ydFsxXSkge1xuICAgICAgICAgICAgLy8gYXBwbHlpbmcgdGhlIHNlY29uZCBpdGVtIG9mIHRoZSBleHBvcnQgYXMgaXQgY29udGFpbnMgdGhlIGNzcyBjb250ZW50c1xuICAgICAgICAgICAgYXBwbGljYXRpb24uYWRkQ3NzKGNzc0V4cG9ydFsxXSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICA7XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vY3NzL2FuaW1hdGUuY3NzJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMubWFwQ3NzID0gZnVuY3Rpb24gKGRhdGEsIGRlYnVnKSB7XG4gICAgdmFyIG1hcCA9IHt9O1xuICAgIHZhciBzZXRzID0gZGF0YS5zcGxpdCgnfScpO1xuICAgIGZvciAodmFyIF9pID0gMCwgc2V0c18xID0gc2V0czsgX2kgPCBzZXRzXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciBzZXQgPSBzZXRzXzFbX2ldO1xuICAgICAgICB2YXIgcGFpciA9IHNldC5zcGxpdCgvOmJlZm9yZVxccyp7Lyk7XG4gICAgICAgIHZhciBrZXlHcm91cHMgPSBwYWlyWzBdO1xuICAgICAgICB2YXIga2V5cyA9IGtleUdyb3Vwcy5zcGxpdCgnLCcpO1xuICAgICAgICBpZiAocGFpclsxXSkge1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gZXhwb3J0cy5jbGVhblZhbHVlKHBhaXJbMV0pO1xuICAgICAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICh2YXIgX2EgPSAwLCBrZXlzXzEgPSBrZXlzOyBfYSA8IGtleXNfMS5sZW5ndGg7IF9hKyspIHtcbiAgICAgICAgICAgICAgICB2YXIga2V5ID0ga2V5c18xW19hXTtcbiAgICAgICAgICAgICAgICBrZXkgPSBrZXkudHJpbSgpLnNsaWNlKDEpLnNwbGl0KCc6YmVmb3JlJylbMF07XG4gICAgICAgICAgICAgICAgbWFwW2tleV0gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHBhcnNlSW50KHZhbHVlLnN1YnN0cmluZygyKSwgMTYpKTtcbiAgICAgICAgICAgICAgICBpZiAoZGVidWcpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coa2V5ICsgXCI6IFwiICsgdmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWFwO1xufTtcbmV4cG9ydHMuY2xlYW5WYWx1ZSA9IGZ1bmN0aW9uICh2YWwpIHtcbiAgICB2YXIgbWF0Y2hlcyA9IHZhbC5tYXRjaCgvY29udGVudDpcXHMqXCJcXFxcZihbXlwiXSspXCIvaSk7XG4gICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIFwiXFxcXHVmXCIgKyBtYXRjaGVzWzFdO1xuICAgIH1cbiAgICByZXR1cm4gdm9pZCAwO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpYi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBmaWxlX3N5c3RlbV8xID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvZmlsZS1zeXN0ZW1cIik7XG52YXIgbGliID0gcmVxdWlyZShcIi4vbGliXCIpO1xudmFyIFROU0ZvbnRJY29uID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBUTlNGb250SWNvbigpIHtcbiAgICB9XG4gICAgVE5TRm9udEljb24ubG9hZENzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGNudCA9IDA7XG4gICAgICAgIHZhciBjdXJyZW50TmFtZTtcbiAgICAgICAgdmFyIGZvbnRJY29uQ29sbGVjdGlvbnMgPSBPYmplY3Qua2V5cyhUTlNGb250SWNvbi5wYXRocyk7XG4gICAgICAgIGlmIChUTlNGb250SWNvbi5kZWJ1Zykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDb2xsZWN0aW9ucyB0byBsb2FkOiBcIiArIGZvbnRJY29uQ29sbGVjdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpbml0Q29sbGVjdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGN1cnJlbnROYW1lID0gZm9udEljb25Db2xsZWN0aW9uc1tjbnRdO1xuICAgICAgICAgICAgVE5TRm9udEljb24uY3NzW2N1cnJlbnROYW1lXSA9IHt9O1xuICAgICAgICB9O1xuICAgICAgICB2YXIgbG9hZEZpbGUgPSBmdW5jdGlvbiAocGF0aCkge1xuICAgICAgICAgICAgaWYgKFROU0ZvbnRJY29uLmRlYnVnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0nKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxvYWRpbmcgY29sbGVjdGlvbiAnXCIgKyBjdXJyZW50TmFtZSArIFwiJyBmcm9tIGZpbGU6IFwiICsgcGF0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgY3NzRmlsZSA9IGZpbGVfc3lzdGVtXzEua25vd25Gb2xkZXJzLmN1cnJlbnRBcHAoKS5nZXRGaWxlKHBhdGgpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICBjc3NGaWxlLnJlYWRUZXh0KCkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWFwID0gbGliLm1hcENzcyhkYXRhLCBUTlNGb250SWNvbi5kZWJ1Zyk7XG4gICAgICAgICAgICAgICAgICAgIFROU0ZvbnRJY29uLmNzc1tjdXJyZW50TmFtZV0gPSBtYXA7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBsb2FkRmlsZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgICAgICAgICBpbml0Q29sbGVjdGlvbigpO1xuICAgICAgICAgICAgICAgIGlmIChjbnQgPCBmb250SWNvbkNvbGxlY3Rpb25zLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBsb2FkRmlsZShUTlNGb250SWNvbi5wYXRoc1tjdXJyZW50TmFtZV0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY250Kys7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbG9hZEZpbGVzKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gbG9hZEZpbGVzKCk7XG4gICAgfTtcbiAgICBUTlNGb250SWNvbi5jc3MgPSB7fTtcbiAgICBUTlNGb250SWNvbi5wYXRocyA9IHt9O1xuICAgIFROU0ZvbnRJY29uLmRlYnVnID0gZmFsc2U7XG4gICAgcmV0dXJuIFROU0ZvbnRJY29uO1xufSgpKTtcbmV4cG9ydHMuVE5TRm9udEljb24gPSBUTlNGb250SWNvbjtcbmZ1bmN0aW9uIGZvbnRpY29uKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZS5pbmRleE9mKCctJykgPiAtMSkge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IHZhbHVlLnNwbGl0KCctJylbMF07XG4gICAgICAgICAgICByZXR1cm4gVE5TRm9udEljb24uY3NzW3ByZWZpeF1bdmFsdWVdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0ZvbnRpY29uIGNsYXNzbmFtZSBkaWQgbm90IGNvbnRhaW4gYSBwcmVmaXguIGkuZS4sIFxcJ2ZhLWJsdWV0b290aFxcJycpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbn1cbmV4cG9ydHMuZm9udGljb24gPSBmb250aWNvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5hdGl2ZXNjcmlwdC1mb250aWNvbi5qcy5tYXAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuICAgIGNvbnN0IGFwcGxpY2F0aW9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG4gICAgcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcblxuICAgIGV4cG9ydHMuZm9yRWFjaChjc3NFeHBvcnQgPT4ge1xuICAgICAgICBpZiAoY3NzRXhwb3J0Lmxlbmd0aCA+IDEgJiYgY3NzRXhwb3J0WzFdKSB7XG4gICAgICAgICAgICAvLyBhcHBseWluZyB0aGUgc2Vjb25kIGl0ZW0gb2YgdGhlIGV4cG9ydCBhcyBpdCBjb250YWlucyB0aGUgY3NzIGNvbnRlbnRzXG4gICAgICAgICAgICBhcHBsaWNhdGlvbi5hZGRDc3MoY3NzRXhwb3J0WzFdKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIDtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9zY3NzL3ZhcmlhYmxlLnNjc3MnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC12dWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2J1bmRsZS1lbnRyeS1wb2ludHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9maWxlLXN5c3RlbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdGV4dC9mb3JtYXR0ZWQtc3RyaW5nXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdGV4dC9zcGFuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvYWN0aW9uLWJhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2FjdGl2aXR5LWluZGljYXRvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2JvcmRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2JvdHRvbS1uYXZpZ2F0aW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvYnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvY29udGVudC12aWV3XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvY29yZS92aWV3XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZGF0ZS1waWNrZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lL2FjdGl2aXR5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvaHRtbC12aWV3XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvaW1hZ2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYWJlbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvYWJzb2x1dGUtbGF5b3V0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9kb2NrLWxheW91dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvZmxleGJveC1sYXlvdXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL2dyaWQtbGF5b3V0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9sYXlvdXQtYmFzZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvc3RhY2stbGF5b3V0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy93cmFwLWxheW91dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xpc3QtcGlja2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvbGlzdC12aWV3XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BsYWNlaG9sZGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvcHJvZ3Jlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9wcm94eS12aWV3LWNvbnRhaW5lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3Njcm9sbC12aWV3XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc2VhcmNoLWJhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3NlZ21lbnRlZC1iYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zbGlkZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3dpdGNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvdGFiLW5hdmlnYXRpb24tYmFzZS90YWItY29udGVudC1pdGVtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvdGFiLW5hdmlnYXRpb24tYmFzZS90YWItc3RyaXBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS90YWItbmF2aWdhdGlvbi1iYXNlL3RhYi1zdHJpcC1pdGVtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvdGFiLXZpZXdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS90YWJzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvdGV4dC1maWVsZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RleHQtdmlld1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RpbWUtcGlja2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvd2ViLXZpZXdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91dGlscy90eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3htbFwiKTsiXSwic291cmNlUm9vdCI6IiJ9