import React from 'react';
import NoData from './noData';
import './styles.scss';
const CustomTable = ({tableData}) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Number</th>
                        <th>Location</th>
                        <th>Gender</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData ? tableData.map((tableItem, index)=>(
                        <tr id={index}>
                            <td>{tableItem.name}</td>
                            <td>{tableItem.number}</td>
                            <td>{tableItem.location}</td>
                            <td>{tableItem.gender}</td>
                            <td>{tableItem.status}</td>
                        </tr>
                    ))
                    : 
                    <NoData/>
                    }
                </tbody>
            </table>
        </div>
     );
}
 
export default CustomTable;