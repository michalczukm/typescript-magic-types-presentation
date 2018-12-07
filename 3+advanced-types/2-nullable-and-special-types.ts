//======= optional
{
    type MarketProduct = {
        price?: number; //<-- number | undefined
        name: string;
    };

    function getPrice (product: MarketProduct): number {
        return product.price || 0;
    }
}


//======= nullable
{
    type MarketProduct = {
        price: number | null;
        name: string;
    };

    function getPrice (product: MarketProduct): number {
        return product.price || 0;
    }
}


//======= never / void
{
    type MarketProduct = {
        price: number | null;
        name: string;
    };


    function doStuff (product: MarketProduct): void {
        // do stuff
    }

    function getPrice (product: MarketProduct): number | never {
        if (product.price) {
            return product.price;
        } else {
            throw new Error('Ups');
        }
    }

    function neverResult (product: MarketProduct): never {
        while(true){
            // do infinite stuff
        }
    }
}


//======= unknown
// Its like any - but you cannot do anything with it 
// ... just pass or dispatch type
{
    type MarketProduct = {
        price?: number; //<-- number | undefined
        name: string;
    };

    const isMarketProductGuard = (value: unknown): value is MarketProduct => {
        return !!(value as MarketProduct).name && typeof (value as MarketProduct).name === 'string';
    } 

    const foo: unknown = { name: 'Sweet Mike' };

    // won't compile - because its unknown
    // foo.name;
    // foo + 1;

    // :( don't try this at home
    (foo as any).name;

    function handleUnknown(value: unknown): void {
        if (typeof value === 'string') {
            value + ' its string';
        } 
        if (typeof value === 'object' && !!value) {
            Object.keys(value);
        }
        if (isMarketProductGuard(value)) {
            value.name;
            value.price;
        }
    }

    // IMO - its good when you want to postpone moment of type dispatch
    // or you want to mark field as - there is sth there but DON'T TOUCH IT
}

// fake module
export default {};