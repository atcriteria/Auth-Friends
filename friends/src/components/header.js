import Axios from 'axios';
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { axiosWithAuth } from '../utils/axiosWithAuth';

export default function Header(){

    const logout = () => {
        // made a utility to inject headers into axios calls made with axiosWithAuth function and it can
        // replace the normal axios keyword. Don't have to import axios in either since calling this function
        // references the imported axios library in the utils folder
        axiosWithAuth()
            .post("http://localhost:5000/api/logout"
            // The following is what I would type but instead im calling the utility function I created
            // which will automatically inject the following code into all axios calls it makes. Super handy!
            // , {
            //     userToken: localStorage.getItem("token"),
            //     headers: {
            //         Authorization: localStorage.getItem("token")
            //     }
            // }
            )
            .then(res => {
                localStorage.removeItem("token");
            })
            .catch(err => {
                console.log(err);
            })
    }

    return(
        <div>
            <nav>
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/friends-list">Friends List</Link>
                <Link className="link" to="/add-friend">Add Friend</Link>
                {/* I don't have to add logout functionality, the server doesnt have it */}
                {/* <Link onClick={logout}>Logout</Link> */}
            </nav>
        </div>
    )
}