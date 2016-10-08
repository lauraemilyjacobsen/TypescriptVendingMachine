define(["require", "exports", "./product"], function (require, exports, products) {
    "use strict";
    function GetProduct() {
        var random = Math.floor(Math.random() * 2);
        switch (random) {
            case 0: return new products.CocaCola();
            case 1: return new products.Lays();
        }
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = GetProduct;
});
//# sourceMappingURL=productFactory.js.map