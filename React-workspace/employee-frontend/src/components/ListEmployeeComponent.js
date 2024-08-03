import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService.js';
import { Link } from 'react-router-dom';

export default class ListEmployeeComponent extends Component {

    constructor(props){

        super(props);

        this.state={
            employees:[]
        }
    }

    componentDidMount(){
        EmployeeService.getEmployees().then((res)=>{
            this.setState({employees:res.data})
        })
    }

    deleteEmployee=(employeeId)=>{
        EmployeeService.deleteEmployee(employeeId).then((res)=>{
                EmployeeService.getEmployees().then((res)=>{
                    this.setState({employees:res.data})
                })
        }).catch(error=>{
            console.log(error);
        }
        )
    }

  render() {
    return (
      <div>
            <h1 className='text-center mt-3'>Employee List</h1>
            <div className='row mt-5'>

            <Link to='/add_employee' className="btn btn-outline-primary ">Add Employee</Link>
                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email </th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.employees.map(employee=>
                                <tr key={employee.id}>
                                    <td>{employee.id}</td>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.email}</td>
                                    <td>
                                        <Link to={`/update_employee/${employee.id }`} className='btn btn-info'>Update</Link>
                                        <button className='btn btn-danger' style={{marginLeft:"15px"}} onClick={()=>this.deleteEmployee(employee.id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                         }
                    </tbody>
                </table>

            </div>
      </div>
    )
  }
}
