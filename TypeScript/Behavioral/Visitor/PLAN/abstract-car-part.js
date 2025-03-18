export default class AbstractCarPart {
    // The Abstract Car Part
    #name;
    #sku;
    #price;
    constructor(name, sku, price) {
        this.#name = name;
        this.#sku = sku;
        this.#price = price;
    }
    get name() {
        return this.#name;
    }
    set name(value) {
        this.#name = value;
    }
    get sku() {
        return this.#sku;
    }
    set sku(value) {
        this.#sku = value;
    }
    get price() {
        return this.#price;
    }
    set price(value) {
        this.#price = value;
    }
    accept(visitor) {
        visitor.visit(this);
    }
}
