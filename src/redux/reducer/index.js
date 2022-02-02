import { actions } from "./actions";

const INITIAL_STATE = {
    productList: [ ],
    productDetail: {},
    isLoadign: false,
    categories: []
}

const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case actions.getProducts:
            return {
                ...state, productList: action.payload
            }
        case actions.setIsLoading:
          return  {
                ...state, isLoadign: action.payload
            }
        case actions.setProductDetail:
            return {
                ...state, productDetail: action.payload
            }
        case actions.setCategories:
            return {
                ...state, categories: action.payload
            }
        default:
            return state
    }
}

export default reducer;