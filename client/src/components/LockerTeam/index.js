import React from 'react';
import "./lockerTeam.css"

export default function LockerTeam(props) {
    return ( 
            <tr>
                <td scope="col">{props.rank}</td>
                <td scope="col">{props.player_name}</td>
                <td scope="col">{props.nfl_team}</td>
                <td scope="col">{props.draft_avg}</td>
                <td scope="col">{props.position_rank}</td>
                <td scope="col">{props.bye_week}</td>
            </tr>
    )
}