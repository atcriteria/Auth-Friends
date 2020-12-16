import React, { useState, useEffect } from 'react';
import axios from 'axios';
// Used Dummy-Data before setting up the axios request to verify the page rendered properly
// import { friends } from '../localData/data';
import Friend from './friend';
import {axiosWithAuth} from '../utils/axiosWithAuth';

export default function FriendsList(){
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        const fetchData = () => {
            axiosWithAuth()
                .get('http://localhost:5000/api/friends')
                .then(res => {
                    setFriends(res.data)
                    // console.log(res);
                })
                .catch(err => {
                    console.log(`There was an error: ${err}`)
                });
        }
        fetchData();
    }, []);

    return(
        <div>
            <h1>~Friends List~</h1>
            {friends.map(friend => {
                return <Friend friend={friend} key={friend.id}/>
            })}
        </div>
    )
}