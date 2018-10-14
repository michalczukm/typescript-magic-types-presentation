enum PizzaType {
    'hawaii', 
    'salami'
}

type Pizza = {
    pizzaType: PizzaType;
    delimiter: number
};

type MarketProduct = {
    price: number;
    name: string;
};

type Cake = {
    flavour: 'sweet' | 'more sweet',
    calories: number
};












type ProductType = 'cake' | 'pizza';

type Foo<T> = 
    T extends 'pizza' ? Pizza : 
    T extends 'cake' ? Cake : 
    { extra: number };
    



















function handlePizza<T>(argument: Foo<'pizza'>) {
    argument.delimiter;
}

function handleCake(argument: Foo<'cake'>) {
    argument.flavour;
}

function handleExtra(argument: Foo<{}>) {
    argument.extra;
}