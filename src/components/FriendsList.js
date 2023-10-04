import React, {useState, useEffect} from "react";
import axios from "axios";
import axiosWithAuth from "./utilities/axiosWithAuth";

const FriendsList = () => {
    const [friends, setFriends] = useState([]);

    const token = localStorage.getItem('token');
    useEffect(() => {
        axiosWithAuth().get('/friends')
        .then(resp => {
            setFriends(resp.data);
        })
        .catch(err => {
            console.error(err)
        })
    }, []);
    return (
        <div>
            <h2>Friends List</h2>
            <ul>
                {
                    friends.map(friend => {
                        return <li>{friend.name} - {friend.age} - {friend.email}</li>
                    })
                }
            </ul>
        </div>
    )
};

export default FriendsList;