import React, { Component } from 'react';
class Mapcomponent extends Component {
    state = { 
        Emp:[
            {
                id:101,
                name:"lkl",
                dept:"u",
                sal:78
            },
            {
                id:101,
                name:"klk",
                dept:"l",
                sal:87
            },
            {
                id:101,
                name:"uh",
                dept:"i",
                sal:98
            }
        ]
     } 
    render() { 
        return (
            <table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Department</th>
      <th scope="col">Salary</th>
    </tr>
  </thead>
  <tbody>
    {this.state.Emp.map(eachEmp =>
        <tr>
        <th scope="row">{eachEmp.id}</th>
        <td>{eachEmp.name}</td>
        <td>{eachEmp.dept}</td>
        <td>{eachEmp.sal}</td>
      </tr>
    )}
    
  </tbody>
</table>
        );
    }
}
 
export default Mapcomponent;