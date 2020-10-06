import React from 'react';

import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class VisitForm extends React.Component {
    documentData;
    constructor(props) {
        super(props);

        var entrydate = new Date();
        var dd = String(entrydate.getDate()).padStart(2, '0');
        var mm = String(entrydate.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = entrydate.getFullYear();

        entrydate = dd + '/' + mm + '/' + yyyy;
        this.state = {
            name: '',
            email: '',
            personvisit: '',
            typevisit: '',
            entrydate: entrydate,
            entrytime: '',
            exittime: '',

        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    // on form submit...
    handleFormSubmit = (e) => {
        e.preventDefault()
        localStorage.setItem('document', JSON.stringify(this.state));
    }

    // React Life Cycle
    componentDidMount() {
        this.documentData = JSON.parse(localStorage.getItem('document'));
        console.log("document", this.documentData);

        if (localStorage.getItem('document')) {
            this.setState({
                name: this.documentData.name,
                email: this.documentData.email,
                personvisit: this.documentData.personvisit,
                typevisit: this.documentData.typevisit,
                entrydate: this.documentData.entrydate,
                entrytime: this.documentData.entrytime,
                exittime: this.documentData.exittime

            })
        } else {
            this.setState({
                name: '',
                email: '',
                personvisit: '',
                typevisit: '',
                entrydate: '',
                entrytime: '',
                exittime: ''
            })
        }
    }

    render() {
        console.log("entrydate date", this.state.entrydate);
        return (
            <Form onSubmit={this.handleFormSubmit}>
                <FormGroup row>
                    <Label for="exampleEmail" sm={2}>Name</Label>
                    <Col sm={4}>
                        <Input type="name" name="name" id="name" value={this.state.name} onChange={this.handleChange} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="emailId" sm={2}>Email</Label>
                    <Col sm={4}>
                        <Input type="text" name="email" id="emailid" value={this.state.email} onChange={this.handleChange} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="typeVisit" sm={2}>Type of Visit</Label>
                    <Col sm={4}>
                        <Input type="select" name="typevisit" id="typeVisit" value={this.state.typevisit} onChange={this.handleChange} >
                            <option>Select</option>
                            <option>Meeting</option>
                            <option>Delivery</option>
                            <option>Personal</option>
                        </Input>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="personvisit" sm={2}>Perosn to visit</Label>
                    <Col sm={4}>
                        <Input type="text" name="personvisit" id="personVisit" value={this.state.personvisit} onChange={this.handleChange} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="entryDate" sm={2}>Date of Entry</Label>
                    <Col sm={4}>
                        <Input type="text" name="entrydate" id="dateentry" value={this.state.entrydate} onChange={this.handleChange} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="entryTime" sm={2}>Time of Entry</Label>
                    <Col sm={4}>
                        <Input type="text" name="entrytime" id="dateentry" value={this.state.entrytime} onChange={this.handleChange} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="exitTime" sm={2}>Time of Exit</Label>
                    <Col sm={4}>
                        <Input type="text" name="exittime" id="dateentry" value={this.state.exittime} onChange={this.handleChange} />
                    </Col>
                </FormGroup>
                <FormGroup check row>
                    <Col sm={{ size: 10, offset: 2 }}>
                        <Button>Submit</Button>
                    </Col>
                </FormGroup>
            </Form>

        );
    }
}
