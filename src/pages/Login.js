import React from 'react';
import {post} from 'axios';
import { useState } from 'react';
import {useForm} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const { register, handleSubmit } = useForm();
    const [ loginError, setLoginError ] = useState("");
    const navigate = useNavigate();

    const submit = data => {
            post('https://ecommerce-exercise-backend.herokuapp.com/login/', data)
            .then(res => {
                localStorage.setItem("token", res.data.access);
                navigate("/shop");
            })
            .catch((error) => setLoginError(error.response.data.detail));
    }

    return (
        <div>
            <h1>Login</h1>
            <form action="" onSubmit={handleSubmit(submit)}>
                <div className="input-container">
                    <label htmlFor="email">Email</label>
                    <input 
                        {...register("email")}
                        type="email" 
                        required
                    />
                </div>
                <div className="input-container">
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        {...register("password")}
                        required
                    />
                </div>
                {loginError}
                <button>Log In</button>
            </form>
        </div>
    );
};

export default Login;