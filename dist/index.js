"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var base_class_1 = require("@writetome51/base-class");
var error_if_not_integer_1 = require("error-if-not-integer");
var get_rounded_up_down_1 = require("@writetome51/get-rounded-up-down");
var has_value_no_value_1 = require("@writetome51/has-value-no-value");
var in_range_1 = require("@writetome51/in-range");
var not_1 = require("@writetome51/not");
/********************
 Gives information about a dataset too big to be loaded all at once that
 is stored in memory one load at-a-time, with the intention of paginating the load.
 *******************/
var PaginationLoadInfo = /** @class */ (function (_super) {
    __extends(PaginationLoadInfo, _super);
    function PaginationLoadInfo(__pageInfo) {
        var _this = _super.call(this) || this;
        _this.__pageInfo = __pageInfo;
        return _this;
    }
    PaginationLoadInfo.prototype.setItemsPerLoad = function (value) {
        this.__errorIfValueIsNotOneOrGreater(value, 'items per load');
        this.__checkValueOf_itemsPerLoad(value);
    };
    PaginationLoadInfo.prototype.getItemsPerLoad = function () {
        this._errorIfPropertyHasNoValue('__itemsPerLoad', 'itemsPerLoad');
        this.__checkValueOf_itemsPerLoad();
        return this.__itemsPerLoad;
    };
    PaginationLoadInfo.prototype.setCurrentLoadNumber = function (value) {
        if (value !== undefined) {
            if (not_1.not(in_range_1.inRange([1, this.getTotalLoads()], value))) {
                throw new Error("You cannot set currentLoadNumber to a value outside the range \n\t\t\t\tof totalLoads");
            }
        }
        this.__currentLoadNumber = value;
    };
    PaginationLoadInfo.prototype.getCurrentLoadNumber = function () {
        return this.__currentLoadNumber;
    };
    PaginationLoadInfo.prototype.currentLoadIsLast = function () {
        return (this.getCurrentLoadNumber() === this.getTotalLoads());
    };
    PaginationLoadInfo.prototype.getTotalLoads = function () {
        return get_rounded_up_down_1.getRoundedUp(this.__pageInfo.getTotalPages() / this.getPagesPerLoad());
    };
    PaginationLoadInfo.prototype.getPagesPerLoad = function () {
        // Should not have to be rounded.  They will divide evenly.
        return (this.getItemsPerLoad() / this.__pageInfo.getItemsPerPage());
    };
    PaginationLoadInfo.prototype.__errorIfValueIsNotOneOrGreater = function (value, property) {
        error_if_not_integer_1.errorIfNotInteger(value);
        if (value < 1)
            throw new Error("The \"" + property + "\" must be at least 1.");
    };
    PaginationLoadInfo.prototype.__checkValueOf_itemsPerLoad = function (newValue) {
        if (newValue === void 0) { newValue = undefined; }
        var oldValue = this.__itemsPerLoad;
        if (has_value_no_value_1.hasValue(newValue))
            this.__itemsPerLoad = newValue;
        this.__ensure_itemsPerLoad_isCompatibleWith_itemsPerPage();
        // Whenever itemsPerLoad changes, there can no longer be a currentLoadNumber.  This would
        // cause logic errors.  It must be unset so the user is forced to reset it.
        if (oldValue !== this.__itemsPerLoad)
            this.__currentLoadNumber = undefined;
    };
    // If itemsPerLoad / itemsPerPage does not divide evenly, itemsPerLoad is decremented until
    // they do.  So, sometimes after assigning a value to either itemsPerPage or itemsPerLoad,
    // itemsPerLoad will change slightly.
    PaginationLoadInfo.prototype.__ensure_itemsPerLoad_isCompatibleWith_itemsPerPage = function () {
        var itemsPerPage = this.__pageInfo.getItemsPerPage();
        if (has_value_no_value_1.hasValue(itemsPerPage)) {
            if (this.__itemsPerLoad < itemsPerPage) {
                throw new Error("The items per load cannot be less than items per page");
            }
            while ((this.__itemsPerLoad % itemsPerPage) !== 0)
                --this.__itemsPerLoad;
        }
    };
    return PaginationLoadInfo;
}(base_class_1.BaseClass));
exports.PaginationLoadInfo = PaginationLoadInfo;
