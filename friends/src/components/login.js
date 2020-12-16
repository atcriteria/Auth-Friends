import React, { useState } from 'react';
import axios from 'axios';

let defaultAccount = {
    username: "",
    password: ""
}

export default function Login(props){
    const [account, setAccount] = useState(defaultAccount);

    const handleSubmit = e => {
        e.preventDefault();
        // will have to do axios post request to server to authenticate credentials
        axios
            .post("http://localhost:5000/api/login", account)
            .then((res) => {
                localStorage.setItem("token", res.data.payload);
                props.history.push('/friends-list')
            })
            .catch(err => {
                console.log(`There was an error: ${err}`);
            });
        setAccount(defaultAccount);
    };
    const handleChange = e => {
        setAccount({
            ...account,
            [e.target.name]: e.target.value
        });
    };

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Username:</span>
                    <input 
                    name="username"
                    type="text"
                    value={account.username}
                    onChange={handleChange}
                    required={true}
                    />
                </label><br />
                <label>
                    <span>Password:</span>
                    <input 
                    name="password"
                    type="password"
                    value={account.password}
                    onChange={handleChange}
                    required={true}
                    />
                </label><br />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}