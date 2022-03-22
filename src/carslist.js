import React from 'react'
import Table from 'react-bootstrap/Table';
import './carslist.css'

function Carslist({value}) {

    // console.log(value)
  return (
  <>
    <div>
        <h1>All Available Cars</h1>
    </div>
    <div className="table">
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>Car Brand</th>
      <th>Car Model</th>
      <th>Quantities Recieved</th>
    </tr>
  </thead>
  <tbody>
    {Object.keys(value).map((key, index) =>
        ( <tr>    
      <td>{value[key].carBrand}</td>
      <td>{value[key].carModel}</td>
      <td>{value[key].quantity}</td>
    </tr>))}
  </tbody>
</Table>
    </div>
    </>
  )
}

export default Carslist