var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Coin = (function () {
    function Coin() {
    }
    return Coin;
}());
var Quarter = (function (_super) {
    __extends(Quarter, _super);
    function Quarter() {
        _super.apply(this, arguments);
        this.value = .25;
    }
    Object.defineProperty(Quarter.prototype, "Value", {
        // make the value property read-only
        get: function () {
            return this.value;
        },
        enumerable: true,
        configurable: true
    });
    Quarter.prototype.getImageUrl = function () {
        return "img/Quarter.png";
    };
    return Quarter;
}(Coin));
var Dime = (function (_super) {
    __extends(Dime, _super);
    function Dime() {
        _super.apply(this, arguments);
        this.value = .10;
    }
    Dime.prototype.getValue = function () {
        return this.value;
    };
    Dime.prototype.getImageUrl = function () {
        return "img/dime.jpg";
    };
    return Dime;
}(Coin));
