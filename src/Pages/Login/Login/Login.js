import React from 'react';
import UseAuth from '../../../hooks/UseAuth';

const Login = () => {
    const {signInUsingGoogle} = UseAuth()
    return (
        <div>
            <h2>Please Login</h2>
            <button onClick={signInUsingGoogle} className="btn btn-warning">SignIn With Google</button>
        </div>
    );
};

export default Login;