import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import '../../assets/css/_style.scss'
import { connect } from 'react-redux';
import { getUserProfile, editUserProfile } from '../../actions/memberActions';
import Moment from 'moment'


class FormUpdateProfile extends Component {

    ComponentDidMount = (
        document.title = "Update Profile - Users"
    )
 
    constructor(props) {
        super(props);
        this.state = {
          fullname : props.fullname,
          username : props.username,
          email : props.email,
          idCard : props.idCard,
          birthDate : props.birthDate,
          address : props.address,
          phoneNumber : props.phoneNumber,
          bio : props.bio,
          _id : props._id,
          emergencyContact : props.emergencyContact,
          skillSet : props.skillSet,
          confirmed : props.confirmed
        }
      }
    
      componentWillMount(){
        this.props.getUserProfile();
      }
    
      componentWillReceiveProps(props){
        this.setState({
            fullname : props.fullname,
            username : props.username,
            email : props.email,
            idCard : props.idCard,
            birthDate : props.birthDate,
            address : props.address,
            phoneNumber : props.phoneNumber,
            bio : props.bio,
            _id : props._id,
            emergencyContact : props.emergencyContact,
            skillSet : props.skillSet,
            confirmed : props.confirmed

      })
      }
    
      onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
      }
    
      onSubmit = (e) => {
        e.preventDefault();
        this.props.editUserProfile(
            this.state.fullame, 
            this.state.username, 
            this.state.email,   
            this.state.idCard,
            this.state.birthDate,    
            this.state.address,
            this.state.phoneNumber, 
            this.state.bio,
            this.state._id,
            this.state.confirmed,
            this.state.emergencyContact,
            this.state.skillSet
            )
    }
    

  render() {
  
    let initbirthDate = this.state.birthDate
    Moment.locale('en');
    let DOB = Moment(initbirthDate).format('YYYY-MM-DD')

    return (
      <div className="form-update-profile">
        <div>
            <h3 className="title"><b>Update Profile</b></h3>
        </div>
        <hr></hr>
        <Form onSubmit={this.onSubmit}>
        
            <FormGroup>
                <Label for="exampleName">Full Name</Label>
                <Input 
                defaultValue={this.state.fullname} 
                onChange={this.onChange}
                className="form-control" 
                type="text" 
                name="name" 
                id="exampleName" 
                 />
            </FormGroup>
            <FormGroup>
                <Label for="exampleUsername">ID Card</Label>
                <Input 
                defaultValue={this.state.idCard} 
                onChange={this.onChange}
                type="text"
                name="idcard" 
                id="exampleName" 
              />
            </FormGroup>
            <FormGroup>
                <Label for="exampleUsername">Username</Label>
                <Input 
                defaultValue={this.state.username} 
                onChange={this.onChange}
                type="text"
                name="name" 
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
                id="examplePhone" 
               />
            </FormGroup>
            <FormGroup>
                <Label for="examplePhone">Bio</Label>
                <Input 
                defaultValue={this.state.bio} 
                onChange={this.onChange}
                type="text" 
                name="phone" 
                id="examplePhone" 
           />
            </FormGroup>
            <FormGroup>
                <Label for="exampleAddress">Address</Label>
                <Input 
                defaultValue={this.state.address} 
                onChange={this.onChange}
                type="text" 
                name="addresse" 
                id="exampleAddress" 
           />
            </FormGroup>
            {/* <FormGroup>
                <Label for="exampleFile">Sertificate</Label>
                <Input 
                type="file" 
                name="file" 
                id="exampleFile" />
                <FormText color="muted">
                    Please upload your sertificate scan.
                </FormText>
            </FormGroup>
            <FormGroup>
                <Label for="exampleFile">Photo</Label>
                <Input type="file" name="file" id="exampleFile" />
                <FormText color="muted">
                    Please upload your organization photo or logo.
                </FormText>
            </FormGroup> */}
            <Button color="primary">Save</Button>
        </Form>
      </div>
    )
  }
}


const mapStateToProps = state =>{
 
    return {
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
      
      getUserProfile: () => { dispatch(getUserProfile()) },
      
      editUserProfile: (
        fullname,
        username,
         email, 
         phoneNumber, 
         idCard, 
         address, 
         bio, 
         birthDate, _id, emergencyContact, confirmed, skillSet
         ) => { dispatch(editUserProfile(fullname, username, email, phoneNumber, idCard, address, bio,
          birthDate, _id, emergencyContact, confirmed, skillSet
          ))}
         
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(FormUpdateProfile);


  
