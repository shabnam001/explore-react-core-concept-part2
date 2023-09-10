import { useEffect, useState } from "react"

export default function Users(){

    const [users, setUser] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setUser(data))
    }, [])
    return(
        <div>
            <h1>User:{users.length}</h1>
        </div>
    )
}