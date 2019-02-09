import React, { Component } from 'react';
import "./DraftTableBody.css"
import API from "../../utils/API";
import DraftButton from "../DraftButton"

let players= [];

class DraftTableBody extends Component {



    state = {
        players: []    
      };

      getPlayers = (event) => {
        event.preventDefault();
          API.getPlayers({})
            .then(res => this.setState({players: res.data}, ()=>{

              console.log(this.state.players);
            }))
          
            // .then(res => this.loadBooks())
            .catch(err => console.log(err));
      
      };

      componentDidMount() {
        window.addEventListener('load', this.getPlayers);
     }   

   render () { 
       console.log(this.state)  
    return (<div className="table">
        
        <div className="input-field col s12">
            <select id="filter">
                <option value="" disabled selected>Filter Player's by Position</option>
                <option value="qb">Quarter Backs</option>
                <option value="rb">Running Backs</option>
                <option value="wr">Wide Recievers</option>
                <option value="te">Tight Ends</option>
                <option value="ds">Defense</option>
                <option value="k">Kickers</option>
                <option value="null">Available Players</option>
            </select>

            </div>
        <thead>
                <tr>
                    <th scope="col">Rank</th>
                    <th scope="col">Position Rank</th>
                    <th scope="col">Player Name</th>
                    <th scope="col">Team Name</th>
                    <th scope="col">Draft Avg</th>
                    <th scope="col">Bye Week</th>
                    <th scope="col">Draft/Drafted</th>
                </tr>
            </thead>
            
              { this.state.players.map (player=> 
        ( 
            
            
            <tbody id="a-players">
                 <tr>
                    <td scope="col">{player.rank}</td>
                    <td scope="col">{player.position_rank} </td>
                    <td scope="col">{player.player_name}</td>
                    <td scope="col">{player.nfl_team}</td>
                    <td scope="col">{player.draft_avg}</td>
                    <td scope="col">{player.bye_week}</td>
                    <td scope="col"><DraftButton/></td>
                </tr>
            </tbody>
            
        
        )
    )
}
    </div>)
 
}
}


export default DraftTableBody;