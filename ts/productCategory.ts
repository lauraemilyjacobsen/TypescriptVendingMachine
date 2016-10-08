abstract class ProductCategory {
    protected imgPath = "img/";

    name: string;
    abstract getImageUrl(): string;
}

class SodaCategory extends ProductCategory {
    name="Soda";
    getImageUrl() {
        return this.imgPath + "SodaCan.png";
    }
}

class ChipsCategory extends ProductCategory {
    name = "Potato chips";
    getImageUrl(){
        return this.imgPath + "Chips.png";
    }
}

export { ProductCategory, SodaCategory, ChipsCategory }