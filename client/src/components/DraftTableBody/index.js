import React, { Component } from 'react';
import "./DraftTableBody.css"
import API from "../../utils/API";
import DraftButton from "../DraftButton";
import UnDraftedPlayers from '../UnDraftedPlayers/index'


// let player= [];

class DraftTableBody extends Component {


constructor (props) {
    super(props)
    this.state = {}
    console.log(props)
    }
      
//     getPlayer(player) {
//         console.log(player.id);
//       }

//       getPlayers = (event) => {
//         event.preventDefault();
//           API.getPlayers({})
//             .then(res => this.setState({players: res.data}, ()=>{
//                 console.log(res)

//               console.log(this.state.players);
//             }))
          
//             // .then(res => this.loadBooks())
//             .catch(err => console.log(err));
      
//       };

//       componentDidMount() {
//         window.addEventListener('load', this.getPlayers);
//      }   

//      //Thank you Ben! 
    //  filterPlayers = (player) => {
    //     return (player.player_position === this.state.playerPosition || this.state.playerPosition === '')
    //  }
    
    //  onChange = (event) => {

    //        this.setState(
    //            {
    //                playerPosition: event.target.value
    //            }
    //        )
    //  }
     

   render () { 
       console.log(this.state)  
    return (
    // <div className="container">
    <div className="table draftTable popsm">
        
        <div className="input-field col s12">
            <select onChange={this.props.change} filter={this.props.filter} className="dropdown">
                <option value="" disabled selected>Filter Players by Position</option>
                <option value="QB">Quarter Backs</option>
                <option value="RB">Running Backs</option>
                <option value="WR">Wide Receivers</option>
                <option value="TE">Tight Ends</option>
                <option value="DS">Defense</option>
                <option value="K">Kickers</option>
                <option value="" >Available Players</option>
            </select>

            </div>
            <table>
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
                <tbody>
                    {this.props.children}
                </tbody>
            </table>
            
            
              {/* { this.state.players.filter(this.filterPlayers).map (player=>  */}
         
            
            
            {/* <tbody id="a-players">
                 <tr>
                    <td scope="col">{player.rank}</td>
                    <td scope="col">{player.position_rank} </td>
                    <td scope="col">{player.player_name}</td>
                    <td scope="col">{player.nfl_team}</td>
                    <td scope="col">{player.draft_avg}</td>
                    <td scope="col">{player.bye_week}</td>
                    <td scope="col"> */}
                    {/* <DraftButton onClick={() => {this.getPlayer(player)}}
                    /></td>  */}
                {/* </tr> */}
            {/* </tbody> */}
            
        
        {/* ) */}
    {/* ) */}

    </div>
    // </div>
    )
 
}
}


export default DraftTableBody;