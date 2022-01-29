import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductList = () => {
    const navigate = useNavigate();
    const logOut = () => {
    localStorage.setItem("token", "");
    navigate("/login");

  };
    return (
        <div>
            <h1>Principal Productos</h1>
            <button onClick={logOut}>Log out</button>
        </div>
    );
};

export default ProductList;