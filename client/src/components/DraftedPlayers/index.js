import React from 'react';
import "./draftedPlayers.css"

export default function DraftedPlayers(props) {
    return ( 
            <tr>
                <td scope="col">{props.rank}</td>
                <td scope="col">{props.player_name}</td>
                <td scope="col">{props.nfl_team}</td>
                <td scope="col">{props.draft_avg}</td>
                <td scope="col">{props.bye_week}</td>
            </tr>
    )
}