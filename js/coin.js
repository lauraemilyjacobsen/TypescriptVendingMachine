var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports"], function (require, exports) {
    "use strict";
    var Coin = (function () {
        function Coin(value) {
            this.value = value;
            this.value = value;
        }
        return Coin;
    }());
    exports.Coin = Coin;
    var Quarter = (function (_super) {
        __extends(Quarter, _super);
        function Quarter() {
            _super.call(this, .25);
        }
        Quarter.prototype.getImageUrl = function () {
            return "img/Quarter.png";
        };
        return Quarter;
    }(Coin));
    exports.Quarter = Quarter;
    var Dime = (function (_super) {
        __extends(Dime, _super);
        function Dime() {
            _super.call(this, .10);
        }
        Dime.prototype.getImageUrl = function () {
            return "img/dime.jpg";
        };
        return Dime;
    }(Coin));
    exports.Dime = Dime;
    var Half = (function (_super) {
        __extends(Half, _super);
        function Half() {
            _super.call(this, .5);
        }
        Half.prototype.getImageUrl = function () {
            return "img/Half.jpg";
        };
        return Half;
    }(Coin));
    exports.Half = Half;
    var Dollar = (function (_super) {
        __extends(Dollar, _super);
        function Dollar() {
            _super.call(this, 1);
        }
        Dollar.prototype.getImageUrl = function () {
            return "img/Dollar.png";
        };
        return Dollar;
    }(Coin));
    exports.Dollar = Dollar;
});
//# sourceMappingURL=coin.js.map