import getProduct from "./productFactory";
import * as Coins from "./coin";
import * as Products from "./product";
import { Product, Initial as Init } from "./product";

export enum VendingMachineSize{
    small = 6,
    medium = 9,
    large = 12
}

// this isn't exported because it's never used outside the vendingMachine module
class Cell {
    constructor (public product: Product){

    }
    stock = ko.observable(3);
    sold = ko.observable(false);
}

export class VendingMachine {
    private paid = ko.observable(0);
    cells = ko.observableArray([]);
    selectedCell = ko.observable(new Cell(new Init()));
    
    canPay = ko.pureComputed(() => this.paid() -
        this.selectedCell().product.price >= 0);

    acceptedCoins: Array<Coins.Coin> = [new Coins.Dime(), new Coins.Quarter(), new Coins.Half(), new Coins.Dollar()];

    set size(givenSize: VendingMachineSize){
        this.cells([]);
        for (let index = 0; index < givenSize; index++){
            let product = getProduct();
            this.cells.push(new Cell(product));
        }
    }

    // In an arrow function, this refers to object of the class immediately one level up in scope
    // Here, this will refer to the VendingMachine object.
    acceptCoin = (coin: Coins.Coin) : void => {
        let oldTotal = this.paid();
        this.paid(oldTotal + coin.value);
    }

    select = (cell: Cell): void => {
        cell.sold(false);
        this.selectedCell(cell);
    }

    pay = (): void => {
        if (this.selectedCell().stock() < 1){
            alert("Sorry, we're out of them!");
            return;
        }
        let currentPaid = this.paid();
        this.paid(Math.round((
            (currentPaid - this.selectedCell().product.price) * 100))/100);
        let currentStock = this.selectedCell().stock();
        this.selectedCell().stock(currentStock -1);
        this.selectedCell().sold(true);
    }
}