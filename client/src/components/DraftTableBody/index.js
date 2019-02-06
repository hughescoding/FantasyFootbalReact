import React from "react";
import "./DraftTableBody.css"



export function DraftTableBody() {
    return (
        <div className = "draft-wrapper">

            <table className="table">
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

export default DraftTableBody;