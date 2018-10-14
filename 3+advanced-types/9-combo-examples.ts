// Imagine the case where you have component which can create new or edit some entity by form. 
// Or just display it. Or lets go further - also create or edit drafts of it.
// No matter in which framework - Angular, React or other Vue. You see those flags, ifs and other nasty stuff.
// Or you can do it, still type safe, with object literals.
{
    type MarketProduct = {
        price: number;
        name: string;
    };

    type ComponentStateType = 'create' | 'edit'
    
    type ComponentStateHandler = {
        [Key in ComponentStateType]: {
            save: (product: MarketProduct) => Promise<void>,
            messages: {
                onSuccess: string,
                onFailure: string
            }
        }
    };
    
    class SomeComponent {
        private stateHandler: ComponentStateHandler = {
            'create': {
                save: (product: MarketProduct) => {
                    // call create services ect
                    return Promise.resolve();
                },
                messages: {
                    onSuccess: 'Product created, yeah!',
                    onFailure: 'Ups, something went wrong'
                }
            },
            'edit': {
                save: (product: MarketProduct) => {
                    // call some other services ect
                    return Promise.resolve();
                },
                messages: {
                    onSuccess: 'Your product updated successfully',
                    onFailure: 'Ups, we could not save your changes'
                }
            }
        }
    
        private state: ComponentStateType = 'create';
    
        async save(): Promise<void> {
            const product = {} as MarketProduct;
            await this.stateHandler[this.state].save(product);
        }
    }    
}

// fake module
export default {};