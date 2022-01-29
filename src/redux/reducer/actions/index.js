import {get} from 'axios';
import { getConfig } from '../../../utils';

export const actions = () => ({
    getProducts: "GET_PRODUCTS"
});

const getProducts = product => ({
    type: "GET_PRODUCTS",
    payload: product
})

export const getProductsThunk = () => {
    return dispatch => {
        get(`https://ecommerce-exercise-backend.herokuapp.com/products/`, getConfig())
        .then(({data}) => dispatch(getProducts(data)));
    }
}