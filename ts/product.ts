import * as ProductCategories from "./productCategory";

interface Product {
    name: string;
    price: number;
    category?: ProductCategories.ProductCategory;
}

class CocaCola implements Product {
    name= "Coca-Cola";
    price = 2.30;
    category = new ProductCategories.SodaCategory();
}

class Initial implements Product {
    name = "Please select a product";
    price = 0;
}

class Lays implements Product {
    name = "Lay's";
    price = 2.00;
    category = new ProductCategories.ChipsCategory();
}

export { Product, Initial, CocaCola, Lays }