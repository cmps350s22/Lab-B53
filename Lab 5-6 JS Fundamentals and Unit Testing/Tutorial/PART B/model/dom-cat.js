import {Cat} from "./cat.js";

class DomCat extends Cat{
    constructor(name, color, owner) {
        super(name, color);
        this.owner = owner
    }
}

const dcat = new DomCat('BB', 'Red', 'Sara')
console.log(dcat)