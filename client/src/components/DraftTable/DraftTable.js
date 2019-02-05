import React from "react";
import "./DraftTable.css"



export function DraftTable() {
    return (
        <div className = "draft-wrapper">
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

            <table className="table">
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
            <tbody id="a-players">
            <tr>
                    <td scope="col">Blah</td>
                    <td scope="col">No Idea </td>
                    <td scope="col">Tom Brady</td>
                    <td scope="col">Patriots</td>
                    <td scope="col">Draft Avg</td>
                    <td scope="col">This week</td>
                    <td scope="col">Draft/Drafted</td>
                </tr>
            </tbody>
            </table> 
        </div>
    );
}

export default DraftTable;