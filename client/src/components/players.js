import React from 'react'

function Players(props){
    console.log(props, `props`);
    return(
    <div className="players">
        {props.players.map(player => (
            <div key={props.id} alt={props.name} className="player-card">
                <h3 data-testid="player-name">{player.name}</h3>
                <p>Country: {player.country}</p>
                <p>Searches: {player.searches}</p>
            </div>
        ))}
    </div>
    )
}

export default Players