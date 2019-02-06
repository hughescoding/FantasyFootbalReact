import React, { Component } from 'react';
import "./DraftTableBody.css"
import API from "../../utils/API";

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
    return (<div>
              { this.state.players.map (player=> 
        ( 

            <table className="table">
            <tbody id="a-players">
                 <tr>
                    <td scope="col">{player.rank}</td>
                    <td scope="col">{player.position_rank} </td>
                    <td scope="col">{player.player_name}</td>
                    <td scope="col">{player.nfl_team}</td>
                    <td scope="col">{player.draft_avg}</td>
                    <td scope="col">{player.bye_week}</td>
                    <td scope="col">Draft/Drafted</td>
                </tr>
            </tbody>
            </table> 
        
        )
    )
}
    </div>)
 
}
}


export default DraftTableBody;