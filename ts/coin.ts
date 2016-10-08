
export abstract class Coin {
    constructor(public value: number) {
        this.value = value;
    }
    abstract getImageUrl(): string
}

export class Quarter extends Coin {
    constructor() {
        super(.25);
    }

    getImageUrl(): string {
        return "img/Quarter.png";
    }
}

export class Dime extends Coin {
    constructor() {
        super(.10);
    }

    getImageUrl(): string {
        return "img/dime.jpg";
    }
}

export class Half extends Coin {
    constructor() {
        super(.5);
    }
    getImageUrl() {
        return "img/Half.jpg";
    }
}

export class Dollar extends Coin {
    constructor() {
        super(1);
    }
    getImageUrl() {
        return "img/Dollar.png";
    }
}