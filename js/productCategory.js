var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports"], function (require, exports) {
    "use strict";
    var ProductCategory = (function () {
        function ProductCategory() {
            this.imgPath = "img/";
        }
        return ProductCategory;
    }());
    exports.ProductCategory = ProductCategory;
    var SodaCategory = (function (_super) {
        __extends(SodaCategory, _super);
        function SodaCategory() {
            _super.apply(this, arguments);
            this.name = "Soda";
        }
        SodaCategory.prototype.getImageUrl = function () {
            return this.imgPath + "SodaCan.png";
        };
        return SodaCategory;
    }(ProductCategory));
    exports.SodaCategory = SodaCategory;
    var ChipsCategory = (function (_super) {
        __extends(ChipsCategory, _super);
        function ChipsCategory() {
            _super.apply(this, arguments);
            this.name = "Potato chips";
        }
        ChipsCategory.prototype.getImageUrl = function () {
            return this.imgPath + "Chips.png";
        };
        return ChipsCategory;
    }(ProductCategory));
    exports.ChipsCategory = ChipsCategory;
});
//# sourceMappingURL=productCategory.js.map