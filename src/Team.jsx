import { useState } from "react"

export default function Team(){
    const [team, setTeam] = useState(11)

    const handleAdd =() => {
        const newTeam = team + 1;
        setTeam(newTeam);
    }
    const handleRemove = () => {
        setTeam(team - 1);
    }

    const teanStyle = {
        border:'2px solid purple',
        margin: '15px',
        padding: '15px',
        borderRadius: '20px'
    }
    return(
        <div style={teanStyle}>
            <h3>Players: {team}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}