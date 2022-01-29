import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProductsThunk } from '../redux/reducer/actions';
import { useDispatch } from 'react-redux';


const ProductList = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logOut = () => {
        localStorage.setItem("token", "");
        navigate("/login");
    };

    useEffect(() => { 
        dispatch(getProductsThunk())
    }, [ ])

    return (
        <div>
            <h1>Principal Productos</h1>
            <button onClick={logOut}>Log out</button>
        </div>
    );
};

export default ProductList;