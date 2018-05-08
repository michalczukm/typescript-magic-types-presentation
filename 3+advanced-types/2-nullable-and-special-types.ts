//======= undefindable
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












export default {};