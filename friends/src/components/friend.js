import React from 'react';

export default function Friend(props){
    const { friend } = props;
    return(
        <div className="friend-card">
            <h3>Name: {friend.name}</h3>
            <h4>Age: {friend.age}</h4>
            <h4>Email: {friend.email}</h4>
        </div>
    )
}