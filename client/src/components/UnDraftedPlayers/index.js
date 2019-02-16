import React from 'react';
import "./UnDraftedPlayers.css"

export default function UnDraftedPlayers(props) {
    return ( 
            <tr>
                <td scope="col">{props.rank}</td>
                <td scope="col">{props.position_rank} </td>
                <td scope="col">{props.player_name}</td>
                <td scope="col">{props.nfl_team}</td>
                <td scope="col">{props.draft_avg}</td>
                <td scope="col">{props.bye_week}</td>
                <td scope="col"><button className="button" onClick={props.click} value={props.id}>Draft</button></td>
            </tr>
    )
}