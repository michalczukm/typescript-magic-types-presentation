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

function paginatePizza(paginationResponse: Pagination<Pizza>) {
    paginationResponse.maxPage;
    paginationResponse.values[0];
}


// but you might get error instead of data
type ResponseError = {
    errorMessage: string;
    status: number;
};

type RealPizzaResponse = Pizza | ResponseError;
type RealPaginationResponse<T extends ResponseCode & Object> = Pagination<T> | ResponseError;

// type guard
const isResponseError = (response: RealPaginationResponse<Pizza>): response is ResponseError => {
    return (<keyof ResponseError>'errorMessage') in response;
}

function realPaginatePizza(paginationResponse: RealPaginationResponse<Pizza>) {
    if(isResponseError(paginationResponse)) {
        paginationResponse.errorMessage;
    } else {
        paginationResponse.maxPage;
        paginationResponse.values;
    }
}

// fake module
export default {};