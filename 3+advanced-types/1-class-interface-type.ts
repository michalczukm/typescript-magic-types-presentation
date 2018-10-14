// enum vs string literal
enum PizzaType {
    'hawaii', 
    'salami'
}

class Pizza {
    pizzaType!: PizzaType;
    shape!: 'round';
}

interface Cake {
    flavour: 'sweet' | 'more sweet';
    calories: number;
}

type MarketProduct = {
    price: number;
    name: string;
};


// =================
// class
const instance = new Pizza();
const asserted = {} as Pizza;

instance instanceof Pizza; // --> true
asserted instanceof Pizza; // --> false

// think about your API responses


// =================
// those definitions will merge to one Cake
interface Cake {
    client: string;
}

interface Cake {
    producer: string;
}

const cake = {} as Cake;


// =================
// type
// documentation said that you cannot extend nor inherit from type
// ... which is clearly not true.
interface ExtendedMarketProduct extends MarketProduct {
    newField: number;
}

const extended = {} as ExtendedMarketProduct;

class ImplementedMarketProduct implements MarketProduct {
    price!: number;
    name!: string;
}

const implemented = new ImplementedMarketProduct();


// rest of the presentation is based on types

// fake module
export default {};