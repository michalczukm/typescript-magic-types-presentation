enum PizzaType {
    'hawaii', 
    'salami'
}

type Pizza = {
    pizzaType: PizzaType;
    shape: 'round'
};

type MarketProduct = {
    price: number;
    name: string;
};

type Cake = {
    flavour: 'sweet' | 'more sweet',
    calories: number
};




//==================== intersect
type MarketPizzaProduct = Pizza & MarketProduct;
const marketPizzaProduct = {} as MarketPizzaProduct;

type MarketPizzaProductDraft = MarketPizzaProduct & { isDraft: boolean };
type MarketPizzaProductNullableDraft = Partial<MarketPizzaProduct> & { isDraft: boolean };
const pizzaDraft: MarketPizzaProductNullableDraft = { isDraft: true };

type Readonly<T> = {
    readonly [P in keyof T]: T[P];
}

type Partial<T> = {
    [P in keyof T]?: T[P];
}


// ==================================== union
type PizzaOrCake = Pizza | Cake;

const pizzaOrCake: PizzaOrCake = {
    calories: 500,
    flavour: 'sweet',
    pizzaType: PizzaType.hawaii,
    shape: 'round'
};

// but no fields here:
// pizzaOrCake.


// how we dispatch the type?
// if its not class. Duck typing
if ('calories' in pizzaOrCake) {
    // so its Cake
    pizzaOrCake.flavour;
} else {
    // else it must be Pizza
    pizzaOrCake.pizzaType;
}

// wrap it in typeGuard
const isCake = (item: PizzaOrCake): item is Cake => 'calories' in item;

if (isCake(pizzaOrCake)) {
    pizzaOrCake.flavour
} else {
    pizzaOrCake.pizzaType
}


// what about generic isCake or whatever guard
const isCakeOrWhatever = <T extends object>(item: Cake | T): item is Cake => 'calories' in item;

if (isCakeOrWhatever(pizzaOrCake)) {
    pizzaOrCake.flavour
} else {
    pizzaOrCake.pizzaType
}

// other examples
type OrString<T> = {
    [P in keyof T]: T[P] | string;
}

type PizzaOrAnyValueIsString = OrString<Pizza>;
const orAnyValueIsString = {} as PizzaOrAnyValueIsString;


// undefined with union and intersect
type PizzaOrUndefined = Pizza | undefined;
type PizzaAndUndefined = Pizza & undefined;

const pizzaOrUndefined = {} as PizzaOrUndefined;
const pizzaAndUndefined = {} as PizzaAndUndefined;

// One more example in file 9!


// fake module
export default {};