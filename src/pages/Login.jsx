import React, { useState, useContext } from 'react';
import { Link, Navigate } from 'react-router-dom'
import { useNavigate } from "react-router-dom"; 
import { CartContext } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
const Login = () => {


    const { email, setEmail, password, setPassword, handleSubmit, errors } = useAuth()
    const { isAuthenticated, setIsAuth, localStorage } = useContext(CartContext)
    const navigate = useNavigate()



    return (
        <>
            <button className="navButton" onClick={() => {
                setIsAuth(false);
                navigate('/');
                localStorage.removeItem('isAuth');
            }}>
                <i className="fa-solid fa-right-from-bracket"></i>
            </button>
            <form
                onSubmit={handleSubmit}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    maxWidth: '400px',
                    margin: 'auto',
                }}
            >
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label htmlFor="formBasicEmail" style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>
                        Email address
                    </label>
                    <input
                        id="formBasicEmail"
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{
                            padding: '0.5rem',
                            border: `1px solid ${errors.email ? 'red' : '#ced4da'}`,
                            borderRadius: '0.25rem',
                        }}
                    />
                    {errors.email && (
                        <div style={{ color: 'red', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                            {errors.email}
                        </div>
                    )}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label htmlFor="formBasicPassword" style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>
                        Password
                    </label>
                    <input
                        id="formBasicPassword"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{
                            padding: '0.5rem',
                            border: `1px solid ${errors.password ? 'red' : '#ced4da'}`,
                            borderRadius: '0.25rem',
                        }}
                    />
                    {errors.password && (
                        <div style={{ color: 'red', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                            {errors.password}
                        </div>
                    )}
                </div>

                <button
                    type="submit"
                    style={{
                        backgroundColor: '#007bff',
                        color: 'white',
                        padding: '0.75rem',
                        border: 'none',
                        borderRadius: '0.25rem',
                        cursor: 'pointer',
                        fontSize: '1rem',
                    }}
                >
                    Submit
                </button>
            </form>
        </>
    );
};

export default Login;
