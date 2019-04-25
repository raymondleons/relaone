import React, { Component } from 'react';
import Sidebar from "../../../layout/sidebar/OrganizationSidebar";
import { BrowserRouter as Router, Route, withRouter} from "react-router-dom";
import Navbar from '../../../layout/navbar/Navbar'
import Footer from '../../../layout/FooterAdmin'
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import '../../../assets/css/_style.scss';
import { addOrganization } from '../../../actions/adminActions';

class CreateOrganizationNew extends Component {

    constructor(props) {
        super(props);
        this.state = {
            organizationName: "",
                username: "",
                email: "",
                phoneNumber: "",
                password: ""

        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

        onSubmit = (e) => {
        e.preventDefault();
        this.props.addOrganization(this.state.organizationName, this.state.username, this.state.email, this.state.phoneNumber, this.state.password);
        // this.setState({
        //     title : "",
        //     description : "",
        //     deadline : "",
        //     location : "",
        //     quotaMax : "",
        //     skillset : []
        // });
    }

  render() {

    const skillsets = this.props.skillsets
    const displaySkillset = skillsets.length ? (
      skillsets.map(skillset => {
        return (
            <div key={skillset.name}><label><input onChange={this.handleCheck} type="checkbox" name="skillSet" key={skillset._id} value={skillset._id}/> {skillset.name}</label><br></br></div>
        )
      })
    ) : (
        <div>Loading skill-set list</div>
    );

    return (
        <Router>
            {this.props.role !== "admin"}
        
        <body className="">
        <div id="wrapper">
          <div className="admin-grid">
          <Sidebar />
          <div className="main-panel">
          <div className="content">
          <Navbar/> 
          <div className="row">
        <div className="col-md-12">
        <div className="card">
                <div className="card-header">
                <h5 className="card-title">Create Organization</h5>
        <Form onSubmit={this.onSubmit}>
            <FormGroup>
                <Label for="exampleTitle">Organization Name</Label>
                <Input required onChange={this.onChange} value={this.state.organizationName} className="form-control" type="text" name="organizationName" id="exampleTitle" placeholder="" />
            </FormGroup>
            <FormGroup>
                <Label for="exampleTitle">Username</Label>
                <Input required onChange={this.onChange} value={this.state.username} className="form-control" type="text" name="username" id="exampleTitle" placeholder="" />
            </FormGroup>
            <FormGroup>
                <Label for="exampleTitle">Email</Label>
                <Input required onChange={this.onChange} value={this.state.email} className="form-control" type="text" name="email" id="exampleTitle" placeholder="" />
            </FormGroup>
            <FormGroup>
                <Label for="exampleTitle">Phone Number</Label>
                <Input required onChange={this.onChange} value={this.state.phoneNumber} className="form-control" type="text" name="phoneNumber" id="exampleTitle" placeholder="" />
            </FormGroup>
            <FormGroup>
                <Label for="exampleTitle">Password</Label>
                <Input required onChange={this.onChange} value={this.state.password} className="form-control" type="password" name="password" id="exampleTitle" placeholder="" />
            </FormGroup>
            {/* <FormGroup>
                <Label for="exampleFile">Photo</Label>
                <Input type="file" name="file" id="exampleFile" />
                <FormText color="muted">
                    Please upload photo or poster related to your event.
                </FormText>
            </FormGroup> */}
            <Button color="primary">Submit</Button>
        </Form>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </body>
      </Router>
    )
  }
}

const mapStateToProps = state => {
    return {
        skillsets: state.skillset.skillsets
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addOrganization: (organizationName, username, email, phoneNumber, password) => { dispatch(addOrganization(organizationName, username, email, phoneNumber, password))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateOrganizationNew);

