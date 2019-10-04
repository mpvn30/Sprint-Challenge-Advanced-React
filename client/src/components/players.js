import React from 'react'

function Player(props){
    console.log(props);
    return(
    <div key={props.id} className="player-card">
        <h2>{props.user.name}</h2>
    </div>
    )
}