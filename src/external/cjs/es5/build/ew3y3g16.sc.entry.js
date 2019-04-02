"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nb_component_core_js_1 = require("../nb-component.core.js");
var ListItem = function () { function t() { this.border = 1, this.color = "#f5f5f5", this.height = 88, this.sideSpace = 30; } return t.prototype.px2rem = function (t) { return 0 == t ? "auto" : t / 75; }, t.prototype.isShort = function (t) { return this.short === t || "both" === this.short; }, t.prototype.render = function () { return nb_component_core_js_1.h("div", { class: "item", style: { paddingLeft: !1 === this.isShort("left") ? this.px2rem(this.sideSpace) + "rem" : "0", paddingRight: !1 === this.isShort("right") ? this.px2rem(this.sideSpace) + "rem" : "0", height: this.px2rem(this.height) + "rem", borderBottom: (this.border > 0 ? this.border + "px" : "0") + " solid " + this.color, marginLeft: this.isShort("left") ? this.px2rem(this.sideSpace) + "rem" : "0", marginRight: this.isShort("right") ? this.px2rem(this.sideSpace) + "rem" : "0" } }, nb_component_core_js_1.h("slot", null)); }, Object.defineProperty(t, "is", { get: function () { return "nb-list-item"; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t, "encapsulation", { get: function () { return "shadow"; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t, "properties", { get: function () { return { border: { type: Number, attr: "border" }, color: { type: String, attr: "color" }, height: { type: Number, attr: "height" }, short: { type: String, attr: "short" }, sideSpace: { type: Number, attr: "side-space" } }; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t, "style", { get: function () { return ".item.sc-nb-list-item{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.item.left.sc-nb-list-item{padding-left:0}.item.right.sc-nb-list-item{padding-right:0}.item.both.sc-nb-list-item{margin:0 $sideSpace;padding:0}"; }, enumerable: !0, configurable: !0 }), t; }();
exports.NbListItem = ListItem;
