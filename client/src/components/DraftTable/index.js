import React from "react";
import "./DraftTable.css"



export function DraftTable() {
    return (
        <div className = "draft-wrapper popsm">
           <div className="input-field col s12 popsm">
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

            <table className="table popsm">
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
            </table> 
        </div>
    );
}

export default DraftTable;