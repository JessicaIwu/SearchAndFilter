import React from 'react'
import CustomTable from '../components/table'
import './styles.scss'

const Customer = () => {
    const tableData = [
        {
            name: "Jess",
            number: "09090",
            location: "Abia",
            gender: "Female",
            status: "Married"
        },
        {
            name: "Excellence",
            number: "09090",
            location: "Ibadan",
            gender: "Male",
            status: "Single"
        },
        {
            name: "Tracy",
            number: "09090",
            location: "Lagos",
            gender: "Female",
            status: "Married"
        },
        {
            name: "Richard",
            number: "09090",
            location: "USA",
            gender: "Male",
            status: "Single"
        },
    ]
    return (
        <>
            <div className="container">
                <h2>Employee Data</h2>
                <CustomTable tableData={tableData} />
            </div>
        </>
    );
}
 
export default Customer;