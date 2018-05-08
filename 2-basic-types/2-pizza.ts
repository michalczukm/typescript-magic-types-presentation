// types
class Order {
    client!: Client;
    pizza!: Pizza
}

class Client {
    constructor(public name: string){
    }

    eat(meal: Meal): void {
        console.log(`${meal.description}, nom nom nom `);
    }
}

class Pizza {
    type!: string;
}

class Meal {
    description!: string;
}

// impl
function handleOrder(order: Order) {
    const recipe = getRecipe(order.pizza);
    const readyPizza = cook(recipe);

    order.client.eat(readyPizza);
}

function cook(ingredients: string[]): Meal {
    return {  
        description: `${ingredients.join(',')} on cake. Voila!` 
    };
}

function getRecipe(pizza: Pizza): string[] {
    switch (pizza.type) {
        case 'hawaii':
            return ['pineapple', 'cheese'];
        default:
            throw new Error('No such pizza!');
    }
}

const client = new Client('Andrew');

const order = { 
    client,
    pizza: { type: 'hawaii' }
} as Order;


handleOrder(order);

// =============== type checks
console.log('check: client is Client', client instanceof Client);
console.log('check: order is Order:', order instanceof Order);

// =============== type assertion > casting
const orderWorks = {
} as Order;

const orderAlsoWorks = <Order>{
};

// won't compile
// const orderNotWorks: Order = {
// };