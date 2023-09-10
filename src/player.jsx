import { useState } from "react"

export default function Player(){
    const setStyle ={
        border: '2px solid red',
        margin: '10px',
        padding:'15px',
        borderRadius: '10px'
    }
    
    const [players, setPlayers] = useState(0)

    const handleAddPlayer = () =>{
        const newplayers = players + 1;
        setPlayers(newplayers);
    }
    const handleRemovePlayer = () =>{
        const newplayers = players - 1;
        setPlayers(newplayers);
    }
    return(
        <div style={setStyle}>
            <h1>Players:{players}</h1>
            <button onClick={handleAddPlayer}>Add players</button>
            <button onClick={handleRemovePlayer}>Remove Players</button>
        </div>
    )
}