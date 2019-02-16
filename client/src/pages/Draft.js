import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
// import logo from './logo.svg';
import Nav from "../components/navbar/index";
import Chat from "../components/Chat/Chat";
import Footer from "../components/Footer/Footer";
import API from "../utils/API";
import "bulma/css/bulma.css";
import './styles.css';
import DraftTableBody from '../components/DraftTableBody/index';
import DraftedTeam from '../components/DraftedTeam/index';
import UnDraftedPlayers from "../components/UnDraftedPlayers/index";
import DraftedPlayers from "../components/DraftedPlayers/index";

class Draft extends Component {

  constructor(props) {
    super(props)
    this.state = {
      players: [],
      playerPosition: '',
      draftedPlayers: []
    };
  }

  getPlayer = (player) => {

    let playerId = player.id


    let userId = localStorage.getItem('user')


    API.draftPlayer({ playerId, userId })
      .then(res => {
        let draftedPlayers = this.state.draftedPlayers;
        draftedPlayers.push(res.data)
        let players = this.state.players;
        players = players.filter(function (player) {
          return player.id !== playerId
        })
        this.setState({ players: players, draftedPlayers: draftedPlayers })
      })



    // .catch(err => console.log(err));



  }

  getPlayers = (event) => {
    event.preventDefault();
    API.getPlayers({})
      .then(res => {
        let draftedPlayers = this.state.draftedPlayers;
        let players = this.state.players;

        for (let i = 0; i < res.data.length; i++) {

          if (res.data[i].TeamId) {
            draftedPlayers.push(res.data[i])
          }
          else {
            players.push(res.data[i])
          }
        }
        this.setState({ players: players, draftedPlayers: draftedPlayers })
        // this.setState({drafterdPlayers: draftedPlayers})
      })

      // .then(res => this.loadBooks())
      .catch(err => console.log(err));

  };

  componentDidMount() {
    window.addEventListener('load', this.getPlayers);
  }
  //Thank you Ben! 
  filterPlayers = (player) => {
    return (player.player_position === this.state.playerPosition || this.state.playerPosition === '')
  }

  filterDraftedPlayers = (player) => {
    console.log(player.TeamId)
    let userId = localStorage.getItem('user')
    return(player.TeamId === userId )
    
  }

  onChange = (event) => {

    this.setState(
      {
        playerPosition: event.target.value
      }
    )
  }
  // state = {

  //   players: []

  // };
  logoutUser = (event) => {
    console.log("connected and working")
    localStorage.clear()
    window.location.reload();
  }
  // getPlayers = (event) => {
  //   event.preventDefault();
  //     API.getPlayers({})
  //       .then(res => this.setState({players: res.data}, ()=>{
  //         console.log(this.state.players);
  //       }))

  //       // .then(res => this.loadBooks())
  //       .catch(err => console.log(err));

  // }


  // handleClick = event => {

  //   let playerId = event.target.value
  //   console.log(playerId)

  //   let userId = localStorage.getItem('user')

  //   console.log(userId)
  //   API.draftPlayer({ playerId, userId })
  //     .then(res => this.setState({ draftedPlayers: res.data }, () => {
  //       console.log(res)

  //       console.log(this.state.draftedPlayers);
  //     }))

  //     // .then(res => this.loadBooks())
  //     .catch(err => console.log(err));




    // let drafted = this.state.players.filter(player => playerId !== player.id)


    //  this.setState({ draftedPlayers: drafted });

    //  console.log(drafted)



  // }


  render() {

    if (!localStorage.getItem('user')) {
      return (
        <Redirect to='/' />
      );
    }
    return (
      <div >
        <body>
          <Nav
            logout={this.logoutUser}
          />
          <Chat/>
          <div className="container">
            <DraftTableBody
              filter={this.filterPlayers}
              change={this.onChange}
            >
              {this.state.players.filter(this.filterPlayers).map(player => (
                <UnDraftedPlayers id={player.id} key={player.id} player_name={player.player_name} rank={player.rank} position_rank={player.position_rank} nfl_team={player.nfl_team} draft_avg={player.draft_avg} bye_week={player.bye_week} click={() => this.getPlayer(player)} />
              ))}
            </DraftTableBody>




            <DraftedTeam>
            {this.state.draftedPlayers.filter(player => player.TeamId == localStorage.getItem('user')).map(player => (
                <DraftedPlayers id={player.id} key={player.id} player_name={player.player_name} rank={player.rank} position_rank={player.position_rank} nfl_team={player.nfl_team} draft_avg={player.draft_avg} bye_week={player.bye_week} />
              ))}
            </DraftedTeam>
          </div>
        </body>
        <Footer />
      </div>
    );
  }
}

export default Draft;