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

const client = {
    name: 'Andrew',
    eat: (meal) => console.log(`${meal}, nom nom nom `)
};

const order = { 
    client,
    pizza: { type: 'hawaii' }
}

handleOrder(order);