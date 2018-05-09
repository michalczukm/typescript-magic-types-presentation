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

// ------------------------------
// So, lets take a look at crappy API response you might get
type ApiPoorContract = {
    type: 'cake' | 'pizza',

    // MarketProduct
    price: number,
    name: string,

    //Partial<Pizza>
    pizzaType?: PizzaType,
    delimiter?: number,
    
    //Pizza<Cake>
    flavour?: 'sweet' | 'more sweet',
    calories?: number
}

// you see all those ifs. And the pain if new type arrives
function poorCaloryCalculator(item: ApiPoorContract): number | never {
    switch (item.type) {
        case 'cake':
            return item.calories!;
        case 'pizza':
            return item.delimiter! * 100;
        default:
            throw new Error('Ups');
    }
}


// but we can use discriminated (aka algebraic) union types
type ApiCake = Cake & { type: 'cake' };
type ApiPizza = Pizza & { type: 'pizza' };

type ApiBetterContract = ApiCake | ApiPizza;

const response = {} as ApiBetterContract;


function betterCaloryCalculator(item: ApiBetterContract): number {
    switch (item.type) {
        case 'cake':
            return item.calories;
        case 'pizza':
            return item.delimiter * 100;
    }
}

const isCake = (item: ApiBetterContract): item is ApiCake => item.type === 'cake';
const isPizza = (item: ApiBetterContract): item is ApiPizza => item.type === 'pizza';


// fake module
export default {};