import React, { Component } from 'react';
import './Home.css'
import addIcon from '../../assets/images/add-24px.svg'
import editIcon from '../../assets/images/create-black-18dp.svg';
import deleteIcon from '../../assets/images/delete-black-18dp.svg';
import EmployeeService from '../../service/EmployeeService';
import { Link  } from 'react-router-dom'


class Home extends Component {

    constructor(props){
        super(props);

        this.state = {
            employeeList : [],
        }
    }
    updateEmployee = (employeeId) => {
        console.log("update id : "+ employeeId);
        this.props.history.push('payroll-form',employeeId={employeeId})
    };
    deleteEmployee = (employeeId) => {
        let empId = parseInt(employeeId)
        EmployeeService.deleteEmployee(empId);
        window.location.reload();
    }
  

    fetchData() {
        EmployeeService.getAllEmployees().then((response) => {
            console.log(response.data.data);

            this.setState({ 
                employeeList  : response.data.dataObject
            });
                
        });
    }

    componentDidMount(){
        this.fetchData();
    }
    
    deleteData(id){
        EmployeeService.deleteEmployeeById(id)
        console.log(id)
    }

    
    render() {
        return (
            
            <div className="main-content">
                <div className="header-content">
                    <div className="emp-detail-text">
                        {/* Employee Details<div className="emp-count">{this.state.employeeList.length}</div> */}
                    </div>
                    <a href='/payroll-form' className='add-button'>
                    <img src={addIcon} alt="" /> Add User</a>
                </div>

                <div className="table-main">
                    <table id="table-display" className="table">
                        
                        <tr>
                            <th>Profile</th>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Department</th>
                            <th>Salary</th>
                            <th>Start Date</th>
                            <th>Notes</th>
                            <th>Actions</th>
                        </tr>
                        
                        {
                            this.state.employeeList.map( (employee) => {
                                console.log("Employee details" + JSON.stringify(employee));
                                console.log("Employee profile :"+ employee.profilePic);
                                // let profilePic = employee.profilePic
                                return(
                                <tr key={employee.id}>
                                    <td><img src={employee.profilePic} alt="ProfilePic" /></td>
                                    <td>{employee.name}</td>
                                    <td>{employee.gender}</td>
                                    <td>
                                        {employee.departments.map(dept =>
                                            <div className="dept-label" id="dept"> {dept} </div>
                                        )}
                                    </td>
                                    
                                    <td>{employee.salary}</td>
									<td>{employee.startDate}</td>
                                    <td>{employee.note}</td>


                                    <td>
                                        <img id={employee.id} 
                                        onClick={() => this.updateEmployee(employee.id)} src={editIcon} alt="edit"/>                                       
                                        <img id={employee.id} onClick={() => this.deleteEmployee(employee.id)} src={deleteIcon} alt="delete"/>
                                    </td>
                                    
                                </tr>
                                )  
                            })
                        }
                        
                    </table>
                                    
                </div>
            </div>
        );
    }
}

export default Home;