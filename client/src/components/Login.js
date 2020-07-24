import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';



export const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
    const history = useHistory();
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });

    const onSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth()
            .post('/api/login', credentials)
            .then(res => {
                console.log("from Login",res);
                localStorage.setItem('token', res.data.payload);
                history.push('/bubble-page');

            })
            .catch(err => console.log(err.response));
        setCredentials({
            username: '',
            password: ''
        });
    };

    const onChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div>
           <h1>Welcome to the Bubble App!</h1>
            <form onSubmit={onSubmit}>
                <input
                    type='text'
                    name='username'
                    placeholder='enter username'
                    value={credentials.username}
                    onChange={onChange}
                />
                <input
                    type='password'
                    name='password'
                    placeholder='enter password'
                    value={credentials.password}
                    onChange={onChange}
                />
                <button type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
};
