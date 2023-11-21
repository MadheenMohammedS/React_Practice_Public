import React from 'react';
import { Button, Form }  from 'react-bootstrap'


class EmployeeList extends React.Component{
   constructor(props) {
       super(props);
       
       this.state = {
           isEdit: false
       }
       
       this.onDelete = this.onDelete.bind(this);
       this.onEdit = this.onEdit.bind(this);
       this.onEditSubmit = this.onEditSubmit.bind(this);
   }

   onDelete(name) {
    this.props.onDelete(this.props.name);
   }

   onEdit() {
       this.setState({ isEdit: true});
   }

   onEditSubmit(e) {
       e.preventDefault();
       this.props.onEditSubmit(this.nameInput.value,this.ageInput.value,this.desCodeInput.value, this.props.name);
       this.setState({ isEdit: false});
   }

    render() {
        const {name,age, desCode} = this.props;
        return (
            <>
                {
                    this.state.isEdit ? 
                    (
                        <tr>
                            <td colSpan="5" >
                            <Form onSubmit={this.onEditSubmit} className="row">
                           
                                <Form.Group className="mb-3 col" >
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter name" ref={nameInput => this.nameInput= nameInput} defaultValue={name} />
                                </Form.Group>
                                <Form.Group className="mb-3 col" >
                                    <Form.Label>Age</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Age" ref={ageInput => this.ageInput= ageInput} defaultValue={age} />
                                </Form.Group>
                                <Form.Group className="mb-3 col" >
                                    <Form.Label>Designation Code</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Designation Code" ref={desCodeInput => this.desCodeInput = desCodeInput} defaultValue={desCode} />
                                </Form.Group>
                                <div className="col-xl-12 text-center mb-3"><Button type="submit" >Update</Button></div>
                                
                                </Form>
                            </td>
                        </tr>
                      
                    ) 
                    : 
                    (
                        <tr key={name}>
                            <td>{name}</td>
                            <td>{age}</td>
                            <td>{desCode}</td>
                            <td align="center"><Button type="button" onClick={this.onEdit}>Edit</Button></td>
                            <td align="center"><Button type="button" variant="danger" onClick={this.onDelete}>Delete</Button></td>
                        </tr>
                    )
                }
            </>
            
            
        )
    }
}

export default EmployeeList; 