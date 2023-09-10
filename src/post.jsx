import { useEffect, useState } from "react"

export default function Posts(){

    const [posts, setPost] = useState([]);
    
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setPost(data))
    },[])
    return(
        <div>
            <h1>Posts:{posts.length}</h1>
        </div>
    )
}