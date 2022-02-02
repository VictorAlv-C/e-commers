import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { filterCategoriesThunk, setProductsDetailThunk } from '../redux/reducer/actions';

const ProductDetail = () => {
    const productDetail =  useSelector(state => state.productDetail);
    const productsRels = useSelector(state => state.productList)
    const {id} = useParams();
    const dispatch = useDispatch();

    useEffect(() => { 
        dispatch(setProductsDetailThunk(id))
    }, [ id ])

    useEffect(() => { 
        if(productDetail.category)
        {
            dispatch(filterCategoriesThunk(productDetail.category.id))
        }
        
    }, [ productDetail.category ])

    return (
        <>
            <h1>Detalles de producto {id}</h1>
                <br />
            <p>{productDetail.name}</p>
            <img src={productDetail.images?.[0].url} alt="" />
            <div>
                <h3>Products relacionados:</h3>

                <ul>
                    {
                        productsRels.map(product => (
                            <li >
                                <Link key={product.id} to={`/shop/${product.id}`} >
                                     {product.name}
                                </Link>
                                
                            </li>
                        ))
                    }
                </ul>
                
            </div>
        </>
    );
};

export default ProductDetail;