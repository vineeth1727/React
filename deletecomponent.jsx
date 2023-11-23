import React, { Component } from 'react';
import { Details, getDetails } from '../delete';
class DeleteComponent extends Component {
    state = {
        Details:getDetails()
     }
     Deletelist=deleterow =>{
        const filterrow=this.state.Details.filter(eachrow => eachrow.title != deleterow.title)
        this.setState({Details:filterrow})
     }

    render() {
        return (
            <table className="table">
  <thead>
    <tr>
      <th >Id</th>
      <th scope="col">Title</th>
      <th scope="col">Price</th>
      <th scope="col">Description</th>
      <th scope="col">Category</th>
      <th scope="col" >Image</th>
      <th scope="col">Action</th>
      
      
    </tr>
  </thead>
  <tbody>
    {this.state.Details.map(details=>
        <tr>
      <td className='badge bg-secondary'>{details.id}</td>
      <td>{details.title}</td>
      <td className='badge bg-info'>{details.price}</td>
      <td>{details.description}</td>
      <td>{details.category}</td>
      <td ><img src={details.image}width={100}height={100}/></td>
      <td><button className='btn btn-danger'onClick={()=>this.Deletelist(details)}>Delete</button></td>
      </tr>
    )}
    </tbody>
    </table>
        );
    }
}
 
export default DeleteComponent;