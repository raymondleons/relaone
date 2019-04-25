import React, { Component } from "react";
import Sidebar from "../../../layout/sidebar/UserSidebar";
import { Button, Form, FormGroup, Label, Table, Input} from 'reactstrap';
import { BrowserRouter as Router, Route, withRouter} from "react-router-dom";
import Navbar from '../../../layout/navbar/UserNavbar'
import Footer from '../../../layout/FooterAdmin'
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import history from '../../../history'
import {
  getUserProfile, 
  editUserProfile, 
  getUserSkillset } from '../../../actions/adminActions'
import Moment from 'moment'  



class EditProfile extends Component {

  componentWillMount(){
        this.props.getUserProfile();
        this.props.getUserSkillset();
      } 

    ComponentDidMount = (
        document.title = "Update Profile - Users"
    )
 
    constructor(props) {
        super(props);
        
        let userProfile = {}
        if (this.props.userProfile) {
          userProfile = this.props.userProfile
        }

        let initSkillSet = this.props.skillSet
        let skills = []
         if (initSkillSet.length === 0) {
             skills = []
         } else {initSkillSet.map(skill => 
             skills = [...skills, skill._id]
         )} 
        
  
        this.state = {
          fullname : userProfile.fullname,
          username : props.username,
          email : props.email,
          idCard : props.idCard,
          // birthDate : props.birthDate,
          address : props.address,
          phoneNumber : props.phoneNumber,
          bio : props.bio,
          _id : props._id,
          emergencyContact : {
            name : props.emergencyContact.name,
            address: props.emergencyContact.address,
            phoneNumber: props.emergencyContact.phoneNumber,
            relationship: props.emergencyContact.relationship
          },
          name:props.emergencyContact.name,
          addr:props.emergencyContact.address,
          phone: props.emergencyContact.phoneNumber,
          relationship:props.emergencyContact.relationship,
          skillSet : skills,
          confirmed : props.confirmed
        }
      }
    
      
    
      onChange = (e) => {
        console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
      }

      handleCheck = (e) => {
        const id = (e.target.value)
        const skillsets = this.props.skillsets
        
        const skills = skillsets.filter(skill => skill._id === id)
        
        skills[0].status = !(skills[0].status)
        
        if (skills[0].status === true) {
            this.setState({
                skillSet: [...this.state.skillSet, skills[0]._id]
            })
        } else {
            this.setState({
                skillSet: this.state.skillSet.filter(x => x !== skills[0]._id)
            })
        }
    }
    
      onSubmit = (e) => {
        e.preventDefault();

        this.props.editUserProfile(
            this.state.fullname, 
            this.state.username, 
            this.state.email,   
            this.state.idCard,
            this.state.birthDate,    
            this.state.address,
            this.state.phoneNumber, 
            this.state.bio,
            this.state.name,
            this.state.relationship,
            this.state.addr,
            this.state.phone,
            this.state.skillSet
            )
    }
    

  render() {
    console.log(this.state)
    let initbirthDate = this.state.birthDate
    Moment.locale('en');
    let DOB = Moment(initbirthDate).format('YYYY-MM-DD')
  

    const skillsets = this.props.skillsets  
      for (let i=0; i<skillsets.length; i++){ 
        for (let j=0; j<this.state.skillSet.length; j++){
          if (skillsets[i]._id === this.state.skillSet[j]){
            skillsets[i].status=true
          }
        }
      }

      const displaySkillset = skillsets.length ? (
        skillsets.map(skillset => {
          return (
              <div key={skillset._id}><label><input onChange={this.handleCheck} defaultChecked={skillset.status} type="checkbox" name="skillSet" key={skillset._id} value={skillset._id}/> {skillset.name}</label><br></br></div>
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
                            {/* USER */}
                        <div className="col-md-12">
                                <div className="card card-user">
                                    <div className="card-header">
                                        <h5 class="card-title">Edit Profile</h5>
                                    </div>
                                    <div className="card-body">
                                    <Form onSubmit={this.onSubmit}>
        
            <FormGroup>
                <Label for="exampleName">Full Name</Label>
                <Input 
                defaultValue={this.state.fullname} 
                onChange={this.onChange}
                className="form-control" 
                type="text" 
                name="fullname" 
                id="exampleName" 
                 />
            </FormGroup>
            <FormGroup>
                <Label for="exampleUsername">ID Card</Label>
                <Input 
                defaultValue={this.state.idCard} 
                onChange={this.onChange}
                type="text"
                name="idCard" 
                id="exampleName" 
              />
            </FormGroup>
            <FormGroup>
                <Label for="exampleUsername">Username</Label>
                <Input 
                defaultValue={this.state.username} 
                onChange={this.onChange}
                type="text"
                name="username" 
                id="exampleName" 
              />
            </FormGroup>
            <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input 
                defaultValue={this.state.email} 
                onChange={this.onChange}
                type="email" 
                name="email" 
                id="exampleEmail" 
                 />
            </FormGroup> 
            <FormGroup>
                <Label for="examplePhone">Birth Date</Label>
                <Input 
                defaultValue={DOB} 
                onChange={this.onChange}
                type="date"
                name="birthDate" 
                id="exampleBirthDate" 
          />
            </FormGroup>
            <FormGroup>
                <Label for="examplePhone">Phone Number</Label>
                <Input 
                defaultValue={this.state.phoneNumber} 
                onChange={this.onChange}
                type="text" 
                name="phoneNumber"
                id="examplePhone" 
               />
            </FormGroup>
            <FormGroup>
                <Label for="examplePhone">Bio</Label>
                <Input 
                defaultValue={this.state.bio} 
                onChange={this.onChange}
                type="text" 
                name="bio" 
                id="examplePhone" 
           />
            </FormGroup>
            <FormGroup>
                <Label for="exampleAddress">Address</Label>
                <Input 
                defaultValue={this.state.address} 
                onChange={this.onChange}
                type="text" 
                name="address" 
                id="exampleAddress" 
           />
            </FormGroup>
            <FormGroup>
                <Label for="exampleAddress">Name :</Label>
                <Input 
                defaultValue={this.state.emergencyContact.name} 
                onChange={this.onChange}
                type="text" 
                name="name" 
                id="exampleAddress" 
           />
           <Label for="exampleAddress">Relationship</Label>
                <Input 
                defaultValue={this.state.emergencyContact.relationship} 
                onChange={this.onChange}
                type="text" 
                name="relationship" 
                id="exampleAddress" 
           />
           <Label for="exampleAddress">Address</Label>
                <Input 
                defaultValue={this.state.emergencyContact.address} 
                onChange={this.onChange}
                type="text" 
                name="addr" 
                id="exampleAddress" 
           />
           <Label for="exampleAddress">Phone</Label>
                <Input 
                defaultValue={this.state.emergencyContact.phoneNumber} 
                onChange={this.onChange}
                type="text" 
                name="phone" 
                id="exampleAddress" 
           />
            </FormGroup>
            <FormGroup>
                <Label for="exampleSkillSet">Skill Set</Label><br></br>
                {displaySkillset}
            </FormGroup>
           
            <Button color="primary">Save</Button>
        </Form>
                                </div>
                                </div>
                        </div>

                  {/* END */}
                  </div>
                </div>
                <footer className="footer footer-black footer-white">
                  <Footer/>
                </footer>
              </div>
          </div>
        </div>
        </body>
        
      </Router>
    );
  }
}

const mapStateToProps = state =>{
 
  return {
      skillsets: state.skillset.skillsets,
      userProfile : state.userProfile,
      fullname : state.userProfile.fullname,
      username : state.userProfile.username,
      email : state.userProfile.email,
      phoneNumber : state.userProfile.phoneNumber,
      idCard : state.userProfile.idCard,
      address : state.userProfile.address,
      bio : state.userProfile.bio,
      birthDate : state.userProfile.birthDate,
      _id : state.userProfile._id,
      emergencyContact : state.userProfile.emergencyContact,
      confirmed : state.userProfile.confirmed,
      skillSet : state.userProfile.skillSet
  }
}


const mapDispatchToProps = dispatch => {
  
  return {
    getUserSkillset: () => { dispatch(getUserSkillset()) },
    getUserProfile: () => { dispatch(getUserProfile()) }, 
    editUserProfile: (
      fullname,
      username,
       email, 
       phoneNumber, 
       idCard, 
       address, 
       bio, 
       birthDate, _id, name, relationship, addr, phone, confirmed, skillSet
       ) => { dispatch(editUserProfile(fullname, username, email, phoneNumber, idCard, address, bio,
        birthDate, _id, name, relationship, addr, phone, confirmed, skillSet
        ))}
       
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditProfile));
