import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
// import axios from 'axios';
import { axiosWithAuth} from '../utils/axiosWithAuth';

let initialValue = {
    name: "",
    age: "",
    email: ""
};

export default function AddFriend(){
    const [newFriend, setNewFriend] = useState(initialValue);

    const handleChange = e => {
        setNewFriend({
            ...newFriend,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = e => {
        e.preventDefault();
        // will have to submit thru axios post??
        axiosWithAuth()
            .post('http://localhost:5000/api/friends', newFriend)
            .then(res => {
                //old school redirect
                window.location.href = "/friends-list"
            })
            .catch(err => {
                console.log(err);
            })
    }

    return(
        <div>
            <h1>Add New Friend</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input 
                    name="name"
                    value={newFriend.name}
                    onChange={handleChange}
                    type="text"
                    required={true}
                    />
                </label><br />
                <label>
                    Age:
                    <input 
                    name="age"
                    value={newFriend.age}
                    onChange={handleChange}
                    type="number"
                    required={true}
                    />
                </label><br />
                <label>
                    Email:
                    <input 
                    name="email"
                    value={newFriend.email}
                    onChange={handleChange}
                    type="email"
                    required={true}
                    />
                </label><br />
                <button type="submit">Add Friend</button>
            </form>
        </div>
    )
}