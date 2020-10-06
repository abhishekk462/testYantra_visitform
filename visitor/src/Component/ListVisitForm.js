
import React from 'react';
import { ListGroup, ListGroupItem, Label, Col } from 'reactstrap';


export default class ListVisitForm extends React.Component {
  documentData;
  constructor() {
    super();

    this.state = {
      data: {}
    };
  }
  componentDidMount() {
    let data = JSON.parse(localStorage.getItem('document'));
    this.setState({ data });
  }
  render() {
    return (

      <ListGroup row>
        <Label for="exampleEmail" sm={2}>Name</Label>
        <Col sm={2}>
          <ListGroupItem color="success">{this.state.data.name}</ListGroupItem>
        </Col>



        <Label for="entryDate" sm={2}>Email</Label>
        <Col sm={2}>
          <ListGroupItem sm={2} color="success">{this.state.data.email}</ListGroupItem>
        </Col>
        <Label for="entryDate" sm={2}>Person Visit</Label>
        <Col sm={2}>
          <ListGroupItem sm={2} color="success">{this.state.data.personvisit}</ListGroupItem>
        </Col>

        <Label for="entryDate" sm={2}>Date of Entry</Label>
        <Col sm={2}>
          <ListGroupItem sm={2} color="success">{this.state.data.entrydate}</ListGroupItem>
        </Col>
        <Label for="entryDate" sm={2}>Entry Time</Label>
        <Col sm={2}>
          <ListGroupItem sm={2} color="success">{this.state.data.entrytime}</ListGroupItem>
        </Col>
        <Label for="entryDate" sm={2}>Exit Time</Label>
        <Col sm={2}>
          <ListGroupItem sm={2} color="success">{this.state.data.exittime}</ListGroupItem>
        </Col>
      </ListGroup>

    )





  }


}
