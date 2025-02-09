function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import "./styles.css";
document.body.style.zoom = "110%"; // Adjusting default page zoom

// Hangle display of the data on the page
var UIManager = /*#__PURE__*/function () {
  function UIManager() {
    _classCallCheck(this, UIManager);
  }
  return _createClass(UIManager, null, [{
    key: "updateLocation",
    value: function updateLocation(location) {
      document.querySelector(".location").textContent = location;
    }
  }, {
    key: "updateCurrentTemp",
    value: function updateCurrentTemp(temp) {
      document.querySelector(".temperature").textContent = "".concat(Math.round(temp));
    }
  }, {
    key: "updateCondition",
    value: function updateCondition(condition) {
      document.querySelector(".condition").textContent = condition;
    }
  }, {
    key: "updateFeelsLike",
    value: function updateFeelsLike(feelsLike) {
      document.querySelector(".feels-like").textContent = "Feels like ".concat(Math.round(feelsLike), " \xB0C");
    }
  }, {
    key: "updateIcon",
    value: function updateIcon(icon) {
      document.querySelector(".weather-icon").src = icon;
    }
  }, {
    key: "updateAlert",
    value: function updateAlert(alert, severity) {
      var alertElement = document.querySelector(".alert");
      if (severity === "Extreme") {
        alertElement.style.color = "#FF4C4C";
      } else if (severity === "Severe") {
        alertElement.style.color = "#FF7F32";
      } else if (severity === "Moderate") {
        alertElement.style.color = "#FFB84D";
      } else if (severity === "Minor") {
        alertElement.style.color = "#4D89FF";
      } else if (severity === "Unknown") {
        alertElement.style.color = "#4D89FF";
      }
      alertElement.textContent = alert;
    }
  }, {
    key: "removeAlert",
    value: function removeAlert() {
      document.querySelector(".alert").textContent = "";
      document.querySelector(".alert").title = "";
    }
  }, {
    key: "updateAlertDescription",
    value: function updateAlertDescription(alertDescription) {
      document.querySelector(".alert").title = alertDescription;
    }
  }, {
    key: "updateHumidity",
    value: function updateHumidity(humidity) {
      document.querySelector(".humidity-percentage").textContent = "".concat(humidity, "%");
      var circle = document.querySelector(".fill-circle");
      var maxDashOffset = 251.2;
      var newOffset = maxDashOffset - humidity / 100 * maxDashOffset;
      circle.style.strokeDashoffset = newOffset;
    }
  }, {
    key: "updateWind",
    value: function updateWind(wind) {
      var windIndex = document.querySelector("#wind");
      var windContainer = document.querySelector("#wind-details");
      var roundedWind = Math.round(wind);

      // Update the title and the border color based on wind speed
      if (roundedWind < 1) {
        windContainer.title = "Calm";
        windIndex.style.borderBottom = "2px solid rgba(255, 255, 255, 0.8)";
      } else if (roundedWind >= 1 && roundedWind <= 5) {
        windContainer.title = "Light air";
        windIndex.style.borderBottom = "2px solid rgba(174, 241, 249, 0.8)";
      } else if (roundedWind > 5 && roundedWind <= 11) {
        windContainer.title = "Light breeze";
        windIndex.style.borderBottom = "2px solid rgba(150, 247, 220, 0.8)";
      } else if (roundedWind > 11 && roundedWind <= 19) {
        windContainer.title = "Gentle breeze";
        windIndex.style.borderBottom = "2px solid rgba(150, 247, 180, 0.8)";
      } else if (roundedWind > 19 && roundedWind <= 28) {
        windContainer.title = "Moderate breeze";
        windIndex.style.borderBottom = "2px solid rgba(111, 244, 111, 0.8)";
      } else if (roundedWind > 29 && roundedWind <= 38) {
        windContainer.title = "Fresh breeze";
        windIndex.style.borderBottom = "2px solid rgba(115, 237, 18, 0.8)";
      } else if (roundedWind > 38 && roundedWind <= 49) {
        windContainer.title = "Strong breeze";
        windIndex.style.borderBottom = "2px solid rgba(164, 237, 18, 0.8)";
      } else if (roundedWind > 49 && roundedWind <= 61) {
        windContainer.title = "Moderate Gale";
        windIndex.style.borderBottom = "2px solid rgba(218, 237, 18, 0.8)";
      } else if (roundedWind > 61 && roundedWind <= 74) {
        windContainer.title = "Gale";
        windIndex.style.borderBottom = "2px solid rgba(237, 194, 18, 0.8)";
      } else if (roundedWind > 74 && roundedWind <= 88) {
        windContainer.title = "Strong Gale";
      } else if (roundedWind > 88 && roundedWind <= 102) {
        windContainer.title = "Storm";
      } else if (roundedWind > 102 && roundedWind <= 117) {
        windContainer.title = "Violent Storm";
      } else if (roundedWind > 117) {
        windContainer.title = "Hurricane";
      }
      windIndex.textContent = "".concat(roundedWind, " km/h");
    }
  }, {
    key: "updateRain",
    value: function updateRain(rain) {
      var rainIndex = document.querySelector("#rain");
      var rainContainer = document.querySelector("#rain-details");
      if (rain <= 0.5) {
        rainContainer.title = "No rain";
        rainIndex.style.borderBottom = "2px solid #ffffff";
      } else if (rain > 0.5 && rain <= 2) {
        rainContainer.title = "Light rain";
        rainIndex.style.borderBottom = "2px solid #b3ddfa";
      } else if (rain > 2 && rain <= 6) {
        rainContainer.title = "Moderate rain";
        rainIndex.style.borderBottom = "2px solid #7cb5f7";
      } else if (rain > 6 && rain <= 10) {
        rainContainer.title = "Heavy rain";
        rainIndex.style.borderBottom = "2px solid #1e78d5";
      } else if (rain > 10 && rain <= 18) {
        rainContainer.title = "Very heavy rain";
        rainIndex.style.borderBottom = "2px solid #1a4b96";
      } else if (rain > 18 && rain <= 30) {
        rainContainer.title = "Shower";
        rainIndex.style.borderBottom = "2px solid #092a61";
      } else if (rain > 30) {
        rainContainer.title = "Cloudburst";
        rainIndex.style.borderBottom = "2px solid #00022b";
      }
      rainIndex.textContent = "".concat(rain, " mm");
    }
  }, {
    key: "updateUv",
    value: function updateUv(uv) {
      var uvIndex = document.querySelector("#uv");
      var uvContainer = document.querySelector("#uv-details");
      var roundedUv = Math.round(uv);
      if (roundedUv <= 2) {
        uvContainer.title = "Low";
        uvIndex.style.borderBottom = "2px solid rgb(62, 167, 45)";
      } else if (roundedUv > 2 && roundedUv <= 5) {
        uvContainer.title = "Moderate";
        uvIndex.style.borderBottom = "2px solid rgb(255, 243, 0)";
      } else if (roundedUv > 5 && roundedUv <= 7) {
        uvContainer.title = "High";
        uvIndex.style.borderBottom = "2px solid rgb(241, 139, 0)";
      } else if (roundedUv > 7 && roundedUv <= 10) {
        uvContainer.title = "Very High";
        uvIndex.style.borderBottom = "2px solid rgb(229, 50, 16)";
      } else if (roundedUv >= 11) {
        uvContainer.title = "Extreme";
        uvIndex.style.borderBottom = "2px solid rgb(181, 103, 164)";
      }
      uvIndex.textContent = "".concat(roundedUv);
    }
  }, {
    key: "updateChanceOfRain",
    value: function updateChanceOfRain(chanceOfRain) {
      document.querySelector("#rain-chance").textContent = "".concat(chanceOfRain, "%");
    }
  }, {
    key: "updateForecast",
    value: function updateForecast(forecast) {
      for (var i = 0; i < 7; i++) {
        var day = document.querySelector("#forecast-".concat(i + 1, " .day"));
        var condition = document.querySelector("#forecast-".concat(i + 1, " img"));
        var dayTemp = document.querySelector("#forecast-".concat(i + 1, " .day-temp"));
        if (day && condition && dayTemp) {
          var dayOfTheWeek = convertDate(forecast[i]["date"]);
          day.textContent = dayOfTheWeek;
          condition.src = forecast[i]["day"]["condition"]["icon"];
          dayTemp.textContent = "".concat(Math.round(forecast[i]["day"]["avgtemp_c"]), " \xB0C");
        }
      }
    }
  }, {
    key: "updateHourlyWeather",
    value: function updateHourlyWeather(hourlyData) {
      var index = 0;
      for (var i = 0; i <= 23; i += 3) {
        var hour = hourlyData.hour[i];
        if (hour) {
          document.querySelector("#hourly-".concat(index + 1, " div p")).textContent = "".concat(Math.round(hour.temp_c), " \xB0C");
          document.querySelector("#hourly-".concat(index + 1, " div img")).src = hour.condition.icon;
          index += 1;
        }
      }
      document.querySelector("#hourly-9 div p").textContent = "".concat(Math.round(hourlyData.hour[23].temp_c), " \xB0C");
      document.querySelector("#hourly-9 div img").src = hourlyData.hour[23].condition.icon;
    }
  }]);
}(); // Stores current weather data from API
var CurrentWeather = /*#__PURE__*/_createClass(function CurrentWeather(data) {
  _classCallCheck(this, CurrentWeather);
  this.location = "".concat(data.location.name, ", ").concat(data.location.country);
  this.currentTemp = data.current.temp_c;
  this.condition = data.current.condition.text;
  this.feelsLike = data.current.feelslike_c;
  this.icon = data.current.condition.icon;
  this.humidity = data.current.humidity;
  this.rain = data.current.precip_mm;
  this.wind = data.current.wind_kph;
  this.uv = data.current.uv;
}); // Stores forecast data from API
var Forecast = /*#__PURE__*/_createClass(function Forecast(data) {
  _classCallCheck(this, Forecast);
  this.forecast = data.forecast.forecastday;
  this.chanceOfRain = data.forecast.forecastday[0].day.daily_chance_of_rain;
  this.hourlyData = data.forecast.forecastday[0];
}); // Stores alert data from API
var Alert = /*#__PURE__*/_createClass(function Alert(data) {
  _classCallCheck(this, Alert);
  this.alertLength = data.alerts.alert.length;
  this.alert = "".concat(data.alerts.alert[this.alertLength - 1].severity, " Weather Alert: ").concat(data.alerts.alert[this.alertLength - 1].event);
  this.alertDescription = data.alerts.alert[this.alertLength - 1].desc;
  this.severity = data.alerts.alert[this.alertLength - 1].severity;
}); // Handles fetch activities
var APIHandler = /*#__PURE__*/function () {
  function APIHandler(apiKey, baseUrl) {
    _classCallCheck(this, APIHandler);
    this.apiKey = apiKey;
    this.baseUrl = baseUrl;
  }
  return _createClass(APIHandler, [{
    key: "fetchData",
    value: function () {
      var _fetchData = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(endpoint) {
        var response;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return fetch("".concat(this.baseUrl).concat(endpoint));
            case 3:
              response = _context.sent;
              if (response.ok) {
                _context.next = 6;
                break;
              }
              throw new Error("Failed to fetch: ".concat(response.status, " ").concat(response.statusText));
            case 6:
              _context.next = 8;
              return response.json();
            case 8:
              return _context.abrupt("return", _context.sent);
            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](0);
              console.error("Error fetching data: ", _context.t0);
              return _context.abrupt("return");
            case 15:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[0, 11]]);
      }));
      function fetchData(_x) {
        return _fetchData.apply(this, arguments);
      }
      return fetchData;
    }()
  }, {
    key: "fetchCurrentWeather",
    value: function fetchCurrentWeather(location) {
      return this.fetchData("/current.json?key=".concat(this.apiKey, "&q=").concat(encodeURIComponent(location)));
    }
  }, {
    key: "fetchForecast",
    value: function fetchForecast(location) {
      return this.fetchData("/forecast.json?key=".concat(this.apiKey, "&q=").concat(encodeURIComponent(location), "&days=7"));
    }
  }, {
    key: "fetchAlert",
    value: function fetchAlert(location) {
      return this.fetchData("/alerts.json?key=".concat(this.apiKey, "&q=").concat(encodeURIComponent(location)));
    }
  }]);
}(); // Handles events
var EventHandler = /*#__PURE__*/function () {
  function EventHandler(apiHandler) {
    _classCallCheck(this, EventHandler);
    this.apiHandler = apiHandler;
  }
  return _createClass(EventHandler, [{
    key: "handleFormSubmit",
    value: function handleFormSubmit(event) {
      event.preventDefault();
      var location = document.querySelector("input").value.trim();
      this.fetchAndDisplayWeather(location);
    }
  }, {
    key: "fetchAndDisplayWeather",
    value: function () {
      var _fetchAndDisplayWeather = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(location) {
        var currentWeatherData, forecastData, alertData, currentWeather, forecast, alerts;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              if (location) {
                _context2.next = 4;
                break;
              }
              alert("The field cannot be empty!");
              return _context2.abrupt("return");
            case 4:
              _context2.next = 6;
              return this.apiHandler.fetchCurrentWeather(location);
            case 6:
              currentWeatherData = _context2.sent;
              if (!(!currentWeatherData || !currentWeatherData.location)) {
                _context2.next = 10;
                break;
              }
              alert("City not found! Please enter a valid city.");
              return _context2.abrupt("return");
            case 10:
              localStorage.setItem("userLocation", location);
              _context2.next = 13;
              return this.apiHandler.fetchForecast(location);
            case 13:
              forecastData = _context2.sent;
              _context2.next = 16;
              return this.apiHandler.fetchAlert(location);
            case 16:
              alertData = _context2.sent;
              currentWeather = new CurrentWeather(currentWeatherData);
              forecast = new Forecast(forecastData);
              if (alertData.alerts.alert.length === 0) {
                UIManager.removeAlert();
              } else {
                alerts = new Alert(alertData);
                UIManager.updateAlert(alerts.alert, alerts.severity);
                UIManager.updateAlertDescription(alerts.alertDescription);
              }
              UIManager.updateLocation(currentWeather.location);
              UIManager.updateCurrentTemp(currentWeather.currentTemp);
              UIManager.updateCondition(currentWeather.condition);
              UIManager.updateFeelsLike(currentWeather.feelsLike);
              UIManager.updateIcon(currentWeather.icon);
              UIManager.updateHumidity(currentWeather.humidity);
              UIManager.updateUv(currentWeather.uv);
              UIManager.updateWind(currentWeather.wind);
              UIManager.updateRain(currentWeather.rain);
              UIManager.updateChanceOfRain(forecast.chanceOfRain);
              UIManager.updateForecast(forecast.forecast);
              UIManager.updateHourlyWeather(forecast.hourlyData);
              _context2.next = 39;
              break;
            case 34:
              _context2.prev = 34;
              _context2.t0 = _context2["catch"](0);
              alert("Failed to fetch weather data. Please try again.");
              console.log(_context2.t0);
              return _context2.abrupt("return");
            case 39:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this, [[0, 34]]);
      }));
      function fetchAndDisplayWeather(_x2) {
        return _fetchAndDisplayWeather.apply(this, arguments);
      }
      return fetchAndDisplayWeather;
    }()
  }]);
}(); // Initiating all the processes of the page load
// eslint-disable-next-line no-undef
var apiHandler = new APIHandler(process.env.API_KEY, process.env.API_URL);
var eventHandler = new EventHandler(apiHandler);
window.onload = function () {
  var savedCity = localStorage.getItem("userLocation") || "Lviv";
  var savedBg = localStorage.getItem("userBackground") || "countryside";
  eventHandler.fetchAndDisplayWeather(savedCity); // Set default location
  document.querySelector(".dropdown-button").textContent = localStorage.getItem("backgroundValue") || "Countryside";
  document.querySelector("form").addEventListener("submit", function (event) {
    return eventHandler.handleFormSubmit(event);
  });
  new ThemeManager(savedBg);
};

// Theme Selector logic
var ThemeManager = /*#__PURE__*/function () {
  function ThemeManager(currentBg) {
    _classCallCheck(this, ThemeManager);
    this.defaultBg = "countryside";
    this.appBackground = document.querySelector(".background");
    this.dropdown = document.querySelector(".dropdown-container");
    this.dropdownButton = document.querySelector(".dropdown-button");
    this.init();
    this.setBackground(currentBg);
  }
  return _createClass(ThemeManager, [{
    key: "imageExists",
    value: function () {
      var _imageExists = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(imageUrl) {
        var response;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return fetch(imageUrl, {
                method: "HEAD"
              });
            case 2:
              response = _context3.sent;
              return _context3.abrupt("return", response.ok);
            case 4:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));
      function imageExists(_x3) {
        return _imageExists.apply(this, arguments);
      }
      return imageExists;
    }()
  }, {
    key: "setBackground",
    value: function () {
      var _setBackground = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(value) {
        var imageUrl, imageExists;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              imageUrl = "img/".concat(value, ".jpg");
              _context4.next = 3;
              return this.imageExists(imageUrl);
            case 3:
              imageExists = _context4.sent;
              if (imageExists) {
                this.appBackground.style.backgroundImage = "url(\"img/".concat(value, ".jpg\")");
                localStorage.setItem("userBackground", value); // Saves background in local storage
              } else {
                this.appBackground.style.backgroundImage = "url(\"img/".concat(this.defaultBg, ".jpg\")");
                this.dropdownButton.textContent = "".concat(this.defaultBg[0].toUpperCase()).concat(this.defaultBg.slice(1));
                localStorage.setItem("userBackground", this.defaultBg); // Saves default background if the image doesn't exist
                localStorage.setItem("backgroundValue", "".concat(this.defaultBg[0].toUpperCase()).concat(this.defaultBg.slice(1)));
              }
            case 5:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function setBackground(_x4) {
        return _setBackground.apply(this, arguments);
      }
      return setBackground;
    }()
  }, {
    key: "openDropdown",
    value: function openDropdown(event) {
      event.stopPropagation();
      this.dropdown.classList.toggle("show");
    }
  }, {
    key: "closeDropdown",
    value: function closeDropdown(event) {
      if (!event.target.closest(".dropdown-container")) {
        this.dropdown.classList.remove("show");
      }
    }
  }, {
    key: "selectBackground",
    value: function selectBackground() {
      var _this = this;
      var dropdownElements = document.querySelectorAll(".dropdown-container div");
      dropdownElements.forEach(function (element) {
        element.addEventListener("click", function () {
          _this.dropdownButton.textContent = element.textContent;
          localStorage.setItem("backgroundValue", element.textContent); // Name of the background
          _this.dropdown.classList.remove("show");
          _this.setBackground(element.getAttribute("data-value"));
        });
      });
    }
  }, {
    key: "init",
    value: function init() {
      var _this2 = this;
      this.dropdownButton.addEventListener("click", function (event) {
        return _this2.openDropdown(event);
      });
      document.addEventListener("click", function (event) {
        return _this2.closeDropdown(event);
      });
      this.selectBackground();
    }
  }]);
}(); // Converts yyyy-mm-dd to the day of the week
function convertDate(dateStr) {
  var _dateStr$split$map = dateStr.split("-").map(function (num) {
      return parseInt(num);
    }),
    _dateStr$split$map2 = _slicedToArray(_dateStr$split$map, 3),
    year = _dateStr$split$map2[0],
    month = _dateStr$split$map2[1],
    day = _dateStr$split$map2[2];
  var date = new Date(year, month - 1, day);
  var dayOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return dayOfTheWeek[date.getDay()];
}