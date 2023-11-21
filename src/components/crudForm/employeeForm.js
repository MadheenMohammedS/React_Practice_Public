import React from 'react';
import { Form, Button, Row, Col, Table }from 'react-bootstrap';
import './employeeForm.css';
import EmployeeList from './employeeList.js';

const empDetails = [
    {
        name: 'Shajan',
        age: 24,
        desCode: 'SSE'
    },
    {
  
        name: 'Sabana',
        age: 19,
        desCode: 'SE'
    },
    {
  
        name: 'Aditi',
        age: 26,
        desCode: 'TL'
    }
];

localStorage.setItem('empDetails', JSON.stringify(empDetails));
class EmployeeForm extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            empDetails: JSON.parse(localStorage.getItem('empDetails'))
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.addEmployee = this.addEmployee.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.updateLocalStorage = this.updateLocalStorage.bind(this);
        this.onEditSubmit = this.onEditSubmit.bind(this);
    }
    componentWillMount() {
        const empDetails = this.getEmpDetails();

        this.setState({ empDetails });
    }
    getEmpDetails() {
        return this.state.empDetails; 
    }
    updateLocalStorage(empDetails) {
        localStorage.setItem('empDetails', JSON.stringify(this.state.empDetails))
    }
    onDelete(name) {
        //console.log("Deleted employee: ");
        const empDetails = this.getEmpDetails();
        //console.log(empDetails);
        const filteredEmployee = empDetails.filter(filteredResult => {
            return filteredResult.name !== name;
        });
        this.setState({
            empDetails: filteredEmployee
        });
        //this.updateLocalStorage(filteredEmployee);
        localStorage.setItem('empDetails', JSON.stringify(filteredEmployee));
        //console.log("Deleted employee 1: " + JSON.stringify(empDetails));
        //console.log("Deleted employee 2: " + JSON.stringify(filteredEmployee));
         
    }
    addEmployee(name,age,desCode) {
        const empDetails = this.getEmpDetails();

        empDetails.push({
            name,
            age,
            desCode
        });

        this.setState({ empDetails });
        //localStorage.setItem('empDetails', JSON.stringify(empDetails));
        this.updateLocalStorage(empDetails);
        console.log("Employee db: " + empDetails);
        this.nameInput.value = "";
        this.ageInput.value = "";
        this.desCodeInput.value = "";
    }
    onSubmit(e) {
        e.preventDefault();
        const newName = this.nameInput.value;
        const newAge = this.ageInput.value;
        const newDesCode = this.desCodeInput.value;
        this.addEmployee( newName, newAge, newDesCode);
        this.updateLocalStorage(empDetails);
       
    }
   onEditSubmit(name,age,desCode, originalName) {

    let empDetails =  this.getEmpDetails();

    empDetails = empDetails.map( empDetail => {
        if(empDetail.name === originalName) {
            
            empDetail.name = name;
            empDetail.age = age;
            empDetail.desCode = desCode;
        }

        return empDetail;
        
    });
    this.setState({empDetails});
    this.updateLocalStorage(empDetails);
   }
    
 render() {

     return(
         <div className="form-wrapper container-fluid">
            <h1 className="mb-3">React CRUD APP</h1>
            <Row>
                <Col xxl="6" md="6" xl="6" lg="6">
                    <h3 className="mb-3">New Employee Form</h3>

                    <Form onSubmit={this.onSubmit}>
                    <Form.Group className="mb-3" >
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" ref={nameInput => this.nameInput= nameInput} />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Age</Form.Label>
                        <Form.Control type="text" placeholder="Enter Age" ref={ageInput => this.ageInput= ageInput} />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Designation Code</Form.Label>
                        <Form.Control type="text" placeholder="Enter Designation Code" ref={desCodeInput => this.desCodeInput = desCodeInput} />
                    </Form.Group>
                    <Button type="submit">Submit</Button>
                    </Form>
                </Col>
                <Col xxl="6" md="6" xl="6" lg="6">
                <div className="container-fluid">
                    <h3 className="mb-3">Employees Details</h3>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>

                                <th>Name</th>
                                <th>Age</th>
                                <th>EmpCode</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                this.state.empDetails.map(employeeDetails => {
                    return (
                        <EmployeeList 
                            {...employeeDetails}
                            onDelete={this.onDelete}
                            onEditSubmit={this.onEditSubmit}
                        />
                        
                    )
                })
            }
                        
                        
                        </tbody>
                    </Table>

                </div>
                
                </Col>
            </Row>

        


         </div>
     )
 }
}

export default EmployeeForm; 