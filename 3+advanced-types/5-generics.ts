// our API grows.

enum PizzaType {
    'hawaii', 
    'salami'
}

type ResponseCode = {
    code: number
};

type Pizza = {
    pizzaType: PizzaType;
    shape: 'round'
} & ResponseCode;

type MarketProduct = {
    price: number;
    name: string;
} & ResponseCode;


type MarketPizzaProduct = Pizza & MarketProduct;
type MarketPizzaProductDraft = MarketPizzaProduct & { isDraft: boolean };
type MarketPizzaProductNullableDraft = Partial<MarketPizzaProduct> & { isDraft: boolean };

//==============
// pagination response - the simplest example
type Pagination<T extends ResponseCode & Object> = {
    values: T[],
    page: number,
    maxPage: number
};

type PaginatedPizzaResponse = Pagination<Pizza>;


// but you might get error instead of data
type ResponseError = {
    errorMessage: string;
    status: number;
};

type RealPizzaResponse = Pizza | ResponseError;
type RealPaginationResponse<T extends ResponseCode & Object> = Pagination<T> | ResponseError;


// fake module
export default {};