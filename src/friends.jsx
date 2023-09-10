import { useEffect, useState } from 'react'
import './friends.css'
import Friend from './friend';
export default function Friends(){
    const [friends, setfriends] = useState([]);

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setfriends(data))
    },[])
    return(
        <div className='box'>
            <h1>Friends:{friends.length}</h1>
            {
                friends.map(friend => <Friend friend={friend}></Friend>)
            }
        </div>
    )
}