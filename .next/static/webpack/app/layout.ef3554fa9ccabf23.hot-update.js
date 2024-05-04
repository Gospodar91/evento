"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/lib/utils.ts":
/*!**************************!*\
  !*** ./src/lib/utils.ts ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   capitalize: function() { return /* binding */ capitalize; },\n/* harmony export */   cn: function() { return /* binding */ cn; },\n/* harmony export */   getAllEvents: function() { return /* binding */ getAllEvents; },\n/* harmony export */   getEvents: function() { return /* binding */ getEvents; },\n/* harmony export */   sleep: function() { return /* binding */ sleep; }\n/* harmony export */ });\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clsx */ \"(app-pages-browser)/./node_modules/clsx/dist/clsx.mjs\");\n/* harmony import */ var tailwind_merge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tailwind-merge */ \"(app-pages-browser)/./node_modules/tailwind-merge/dist/bundle-mjs.mjs\");\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./db */ \"(app-pages-browser)/./src/lib/db.ts\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n\n\n\n\nfunction cn() {\n    for(var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++){\n        inputs[_key] = arguments[_key];\n    }\n    return (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_3__.twMerge)((0,clsx__WEBPACK_IMPORTED_MODULE_0__.clsx)(inputs));\n}\nasync function sleep() {\n    return new Promise((resolve)=>setTimeout(resolve, 5000));\n}\nfunction capitalize(string) {\n    return string.charAt(0).toUpperCase() + string.slice(1);\n}\nasync function getEvents(city) {\n    let page = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;\n    const events = _db__WEBPACK_IMPORTED_MODULE_1__[\"default\"].eventoEvent.findMany({\n        where: {\n            city: city === \"all\" ? undefined : capitalize(city)\n        },\n        orderBy: {\n            date: \"asc\"\n        },\n        take: 6,\n        skip: (page - 1) * 6\n    });\n    let totalCount;\n    if (city === \"all\") {\n        totalCount = await _db__WEBPACK_IMPORTED_MODULE_1__[\"default\"].eventoEvent.count();\n    } else {\n        totalCount = await _db__WEBPACK_IMPORTED_MODULE_1__[\"default\"].eventoEvent.count({\n            where: {\n                city: capitalize(city)\n            }\n        });\n    }\n    return {\n        events,\n        totalCount\n    };\n}\nasync function getAllEvents(slug) {\n    const event = await _db__WEBPACK_IMPORTED_MODULE_1__[\"default\"].eventoEvent.findUnique({\n        where: {\n            slug\n        }\n    });\n    if (!event) {\n        return (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.notFound)();\n    }\n    return event;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9saWIvdXRpbHMudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ0M7QUFDZjtBQUNpQjtBQUVwQyxTQUFTSTtJQUFHO1FBQUdDLE9BQUgsdUJBQXVCOztJQUN4QyxPQUFPSix1REFBT0EsQ0FBQ0QsMENBQUlBLENBQUNLO0FBQ3RCO0FBRU8sZUFBZUM7SUFDcEIsT0FBTyxJQUFJQyxRQUFRLENBQUNDLFVBQVlDLFdBQVdELFNBQVM7QUFDdEQ7QUFFTyxTQUFTRSxXQUFXQyxNQUFjO0lBQ3ZDLE9BQU9BLE9BQU9DLE1BQU0sQ0FBQyxHQUFHQyxXQUFXLEtBQUtGLE9BQU9HLEtBQUssQ0FBQztBQUN2RDtBQUVPLGVBQWVDLFVBQVVDLElBQVk7UUFBRUMsT0FBQUEsaUVBQU87SUFDbkQsTUFBTUMsU0FBU2hCLDJDQUFNQSxDQUFDaUIsV0FBVyxDQUFDQyxRQUFRLENBQUM7UUFDekNDLE9BQU87WUFDTEwsTUFBTUEsU0FBUyxRQUFRTSxZQUFZWixXQUFXTTtRQUNoRDtRQUNBTyxTQUFTO1lBQ1BDLE1BQU07UUFDUjtRQUNBQyxNQUFNO1FBQ05DLE1BQU0sQ0FBQ1QsT0FBTyxLQUFLO0lBQ3JCO0lBRUEsSUFBSVU7SUFDSixJQUFJWCxTQUFTLE9BQU87UUFDbEJXLGFBQWEsTUFBTXpCLDJDQUFNQSxDQUFDaUIsV0FBVyxDQUFDUyxLQUFLO0lBQzdDLE9BQU87UUFDTEQsYUFBYSxNQUFNekIsMkNBQU1BLENBQUNpQixXQUFXLENBQUNTLEtBQUssQ0FBQztZQUMxQ1AsT0FBTztnQkFDTEwsTUFBTU4sV0FBV007WUFDbkI7UUFDRjtJQUNGO0lBQ0EsT0FBTztRQUFFRTtRQUFRUztJQUFXO0FBQzlCO0FBRU8sZUFBZUUsYUFBYUMsSUFBWTtJQUM3QyxNQUFNQyxRQUFRLE1BQU03QiwyQ0FBTUEsQ0FBQ2lCLFdBQVcsQ0FBQ2EsVUFBVSxDQUFDO1FBQ2hEWCxPQUFPO1lBQ0xTO1FBQ0Y7SUFDRjtJQUNBLElBQUksQ0FBQ0MsT0FBTztRQUNWLE9BQU81Qix5REFBUUE7SUFDakI7SUFDQSxPQUFPNEI7QUFDVCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvbGliL3V0aWxzLnRzPzdjMWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2xzeCwgQ2xhc3NWYWx1ZSB9IGZyb20gXCJjbHN4XCI7XG5pbXBvcnQgeyB0d01lcmdlIH0gZnJvbSBcInRhaWx3aW5kLW1lcmdlXCI7XG5pbXBvcnQgcHJpc21hIGZyb20gXCIuL2RiXCI7XG5pbXBvcnQgeyBub3RGb3VuZCB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNuKC4uLmlucHV0czogQ2xhc3NWYWx1ZVtdKSB7XG4gIHJldHVybiB0d01lcmdlKGNsc3goaW5wdXRzKSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzbGVlcCgpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDUwMDApKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhcGl0YWxpemUoc3RyaW5nOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEV2ZW50cyhjaXR5OiBzdHJpbmcsIHBhZ2UgPSAxKSB7XG4gIGNvbnN0IGV2ZW50cyA9IHByaXNtYS5ldmVudG9FdmVudC5maW5kTWFueSh7XG4gICAgd2hlcmU6IHtcbiAgICAgIGNpdHk6IGNpdHkgPT09IFwiYWxsXCIgPyB1bmRlZmluZWQgOiBjYXBpdGFsaXplKGNpdHkpLFxuICAgIH0sXG4gICAgb3JkZXJCeToge1xuICAgICAgZGF0ZTogXCJhc2NcIixcbiAgICB9LFxuICAgIHRha2U6IDYsXG4gICAgc2tpcDogKHBhZ2UgLSAxKSAqIDYsXG4gIH0pO1xuXG4gIGxldCB0b3RhbENvdW50O1xuICBpZiAoY2l0eSA9PT0gXCJhbGxcIikge1xuICAgIHRvdGFsQ291bnQgPSBhd2FpdCBwcmlzbWEuZXZlbnRvRXZlbnQuY291bnQoKTtcbiAgfSBlbHNlIHtcbiAgICB0b3RhbENvdW50ID0gYXdhaXQgcHJpc21hLmV2ZW50b0V2ZW50LmNvdW50KHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIGNpdHk6IGNhcGl0YWxpemUoY2l0eSksXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG4gIHJldHVybiB7IGV2ZW50cywgdG90YWxDb3VudCB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsRXZlbnRzKHNsdWc6IHN0cmluZykge1xuICBjb25zdCBldmVudCA9IGF3YWl0IHByaXNtYS5ldmVudG9FdmVudC5maW5kVW5pcXVlKHtcbiAgICB3aGVyZToge1xuICAgICAgc2x1ZyxcbiAgICB9LFxuICB9KTtcbiAgaWYgKCFldmVudCkge1xuICAgIHJldHVybiBub3RGb3VuZCgpO1xuICB9XG4gIHJldHVybiBldmVudDtcbn1cbiJdLCJuYW1lcyI6WyJjbHN4IiwidHdNZXJnZSIsInByaXNtYSIsIm5vdEZvdW5kIiwiY24iLCJpbnB1dHMiLCJzbGVlcCIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsImNhcGl0YWxpemUiLCJzdHJpbmciLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiZ2V0RXZlbnRzIiwiY2l0eSIsInBhZ2UiLCJldmVudHMiLCJldmVudG9FdmVudCIsImZpbmRNYW55Iiwid2hlcmUiLCJ1bmRlZmluZWQiLCJvcmRlckJ5IiwiZGF0ZSIsInRha2UiLCJza2lwIiwidG90YWxDb3VudCIsImNvdW50IiwiZ2V0QWxsRXZlbnRzIiwic2x1ZyIsImV2ZW50IiwiZmluZFVuaXF1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/lib/utils.ts\n"));

/***/ })

});