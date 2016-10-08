define(["require", "exports", "./productCategory"], function (require, exports, ProductCategories) {
    "use strict";
    var CocaCola = (function () {
        function CocaCola() {
            this.name = "Coca-Cola";
            this.price = 2.30;
            this.category = new ProductCategories.SodaCategory();
        }
        return CocaCola;
    }());
    exports.CocaCola = CocaCola;
    var Initial = (function () {
        function Initial() {
            this.name = "Please select a product";
            this.price = 0;
        }
        return Initial;
    }());
    exports.Initial = Initial;
    var Lays = (function () {
        function Lays() {
            this.name = "Lay's";
            this.price = 2.00;
            this.category = new ProductCategories.ChipsCategory();
        }
        return Lays;
    }());
    exports.Lays = Lays;
});
//# sourceMappingURL=product.js.map