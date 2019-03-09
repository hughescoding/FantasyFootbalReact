import React, { Component } from 'react';
import "./lockerContainer.css"
// import API from "../../utils/API";
// import DraftButton from "../DraftButton"



class LockerContainer extends Component {


    constructor(props) {
        super(props)
        this.state = {}
        // console.log(props)
    }
    // state = {
    //     players: []    
    //   };

    //   getPlayers = (event) => {
    //     event.preventDefault();
    //       API.getPlayers({})
    //         .then(res => this.setState({players: res.data}, ()=>{

    //           console.log(this.state.players);
    //         }))


    //         .catch(err => console.log(err));

    //   };

    //   componentDidMount() {
    //     window.addEventListener('load', this.getPlayers);
    //  }   

    render() {
        return (

            <div className="table">
                <h1 className="locker-table-title">Your Team</h1>
                <table>
                    <thead className="drafted popsm">



                        <tr>
                            <th scope="col">Rank</th>
                            <th scope="col">Position Rank</th>
                            <th scope="col">Player Name</th>
                            <th scope="col">Team Name</th>
                            <th scope="col">Draft Avg</th>
                            <th scope="col">Bye Week</th>
                            {/* <th scope="col">Draft/Drafted</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.children}
                    </tbody>
                </table>
            </div>


        )
    }


}



export default LockerContainer;