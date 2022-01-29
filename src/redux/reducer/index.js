import { actions } from "./actions";

const INITIAL_STATE = {
    productList: [ ]
}

const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case actions.getProducts:
            return {
                ...state, productList: action.payload
            }
        default:
            return state
    }
}

export default reducer;