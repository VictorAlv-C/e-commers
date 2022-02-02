import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { filterCategoriesThunk, getProductsThunk, setCategoriesThunk } from '../redux/reducer/actions';
import { useDispatch, useSelector } from 'react-redux';


const ProductList = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const productList = useSelector(state => state.productList);
    const categories = useSelector(state => state.categories);

    const logOut = () => {
        localStorage.setItem("token", "");
        navigate("/login");
    };

    useEffect(() => { 
        dispatch(getProductsThunk());
        dispatch(setCategoriesThunk())
    }, [ ])


    const filterCategory = id => dispatch(filterCategoriesThunk(id));

    return (
        <>
             <button onClick={logOut}>Log out</button>
            <h1>Principal Productos</h1>
            <div className="categories">
                {
                    categories.map(category => (
                        <button key={category.id} onClick={() => filterCategory(category.id)}>
                            {category.name}
                        </button>
                    ))
                }
            </div>
            <ul>
                {
                    productList.map(product => (
                        <li key={product.id}>
                           <Link to={`/shop/${product.id}`}> {product.name} </Link> 
                        </li>
                    ) )
                        
                }
            </ul>
        </>
    );
};

export default ProductList;