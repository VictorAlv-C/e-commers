import {get} from 'axios';
import { getConfig } from '../../../utils';

export const actions = {
    getProducts: "GET_PRODUCTS",
    setProductDetail: "SET_PRODUCT_DETAIL",
    setIsLoading: "SET_IS_LOADING",
    setCategories: "SET_CATEGORIES"
};

export const getProducts = product => ({
    type: actions.getProducts,
    payload: product
})

export const setIsLoading = res => ({
    type: actions.setIsLoading,
    payload: res
})

export const setProductDetail = productDetail => ({
    type: actions.setProductDetail,
    payload: productDetail
})

export const setCategories = categories => ({
    type: actions.setCategories,
    payload: categories
})

export const getProductsThunk = () => {

    return dispatch => {
         dispatch(setIsLoading(true))
          get(`https://ecommerce-exercise-backend.herokuapp.com/products/`, getConfig())
        .then(({data}) => dispatch(getProducts(data)))
        .catch(error => console.log(error.response))
        .finally(() => dispatch(setIsLoading(false)));
    }
}

export const setProductsDetailThunk = (id) => {

    return dispatch => {
         dispatch(setIsLoading(true))
          get(`https://ecommerce-exercise-backend.herokuapp.com/products/${id}/`, getConfig())
        .then(({data}) => dispatch(setProductDetail(data)))
        .catch(error => console.log(error.response))
        .finally(() => dispatch(setIsLoading(false)));
    }
}

export const setCategoriesThunk = () => {

    return dispatch => {
         dispatch(setIsLoading(true))
          get(`https://ecommerce-exercise-backend.herokuapp.com/categories/`, getConfig())
        .then(({data}) => dispatch(setCategories(data)))
        .catch(error => console.log(error.response))
        .finally(() => dispatch(setIsLoading(false)));
    }
}

export const filterCategoriesThunk = (id) => {

    return dispatch => {
         dispatch(setIsLoading(true))
          get(`https://ecommerce-exercise-backend.herokuapp.com/products/?category=${id}`, getConfig())
        .then(({data}) => dispatch(getProducts(data)))
        .catch(error => console.log(error.response))
        .finally(() => dispatch(setIsLoading(false)));
    }
}