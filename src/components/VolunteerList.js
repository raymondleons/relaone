import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Input, Spinner, Row, Col, Card, CardImg, CardBody, CardTitle, CardText} from 'reactstrap';
import Dotdotdot from 'react-dotdotdot';
import { getVolunteer, searchVolunteer } from '../actions/organizationActions' ;
import { Link as Links } from 'react-router-dom';

class VolunteerList extends Component {

  componentDidMount(){
    this.props.getVolunteer();
  }

  componentWillReceiveProps() {
    this.setState({
      volunteers : this.props.volunteers
    })
  }

  onChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.searchVolunteer(this.state.search)
    this.setState({
      search: ''
    })
  }

  render() {
      console.log(this.props.volunteers)
      let volunteers = []
      if (this.props.volunteers) {
        volunteers = this.props.volunteers
      }
      const displayVolunteer = volunteers.length ? (
        volunteers.map(volunteer => {
              return (
                <Col md="4">
                <Card className="volunteer-card" key={volunteer._id}>
                            <CardImg className="volunteer-picture" src={volunteer.photo} alt={volunteer.fullname}></CardImg>
                            <CardBody>
                                <CardTitle className="volunteer-detail"><Links to={'/organization/volunteer/detail/' + volunteer._id}>{volunteer.fullname}</Links></CardTitle>
                                <div className="volunteer-detail"><Dotdotdot clamp={1}>{volunteer.address}</Dotdotdot></div>
                            </CardBody>
                </Card>
                </Col>
              )
          })
      ) : (
        <div>
          <Spinner type="grow" color="primary" />
          <Spinner type="grow" color="primary" />
          <Spinner type="grow" color="primary" />   
      </div>
      );

    return (
      <div className="article-list">
        <div className="content-title">
            <h3 className="bold-text">Volunteer</h3>
        </div>
        <Form onSubmit={this.onSubmit}>
            <FormGroup>
              <Row>
                <Col md="10">
                  <Input onChange={this.onChange} className="form-control" type="text" name="search" id="exampleSearch" placeholder="search"/>
                </Col>
                <Col md="2">
                  <Button color="primary">Search</Button> 
                </Col>
              </Row>
            </FormGroup>
        </Form>
        <div>
            {volunteers.length} volunteer(s)
            <Row>
                {displayVolunteer}
            </Row>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
    return {
        volunteers: state.volunteer.volunteers
    }
}

const mapDispatchToProps = dispatch => {
  return {
    getVolunteer: () => { dispatch(getVolunteer()) },
    searchVolunteer: (keyword) => [ dispatch(searchVolunteer(keyword))]
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VolunteerList);


