class Client {
    constructor(public name){
    }

    eat(meal): void {
        console.log(`${meal.description}, nom nom nom `);
    }
}

function handleOrder(order) {
    const recipe = getRecipe(order.pizza);
    const readyPizza = cook(recipe);

    order.client.eat(readyPizza);
}

function cook(ingredients) {
    return `${ingredients.join(',')} on cake. Voila!`;
}

function getRecipe(pizza) {
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
}

handleOrder(order);