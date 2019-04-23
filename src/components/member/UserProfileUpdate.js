import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import '../../assets/css/_style.scss'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getUserProfile, editUserProfile, getUserSkillset } from '../../actions/memberActions';
import Moment from 'moment'


class FormUpdateProfile extends Component {

  componentWillMount(){
        this.props.getUserProfile();
        this.props.getUserSkillset();
      } 

    ComponentDidMount = (
        document.title = "Update Profile - Users"
    )
 
    constructor(props) {
        super(props);
        
        // let skillsets = []

        // if (this.props.skillsets) {
        //     skillsets = this.props.skillsets
        // }
        let userProfile = {}
        if (this.props.userProfile) {
          userProfile = this.props.userProfile
        }

        console.log(userProfile)

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
          // emergencyContact : props.emergencyContact,
          skillSet : skills,
          confirmed : props.confirmed
        }
      }
    
      
    
      // componentWillReceiveProps(props){
      //   this.setState({
      //       fullname : props.fullname,
      //       username : props.username,
      //       email : props.email,
      //       idCard : props.idCard,
      //       birthDate : props.birthDate,
      //       address : props.address,
      //       phoneNumber : props.phoneNumber,
      //       bio : props.bio,
      //       _id : props._id,
      //       emergencyContact : props.emergencyContact,
      //       skillSet : props.skillSet,
      //       confirmed : props.confirmed

      // })
      // }
      // onChangeNum = (e) => {
      //   let num = e.target.value;
      //   let str = num.toString();
      //   this.setState({
      //     [e.target.name]: str
      //   })
      // }
    
      onChange = (e) => {
        console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
      }

    //   handleCheck = (e) => {
    //     const id = (e.target.value)
    //     const skillsets = this.props.skillsets
        
    //     const skills = skillsets.filter(skill => skill._id === id)
        
    //     skills[0].status = !(skills[0].status)
        
    //     if (skills[0].status === true) {
    //         this.setState({
    //             skillSet: [...this.state.skillSet, skills[0]._id]
    //         })
    //     } else {
    //         this.setState({
    //             skillSet: this.state.skillSet.filter(x => x !== skills[0]._id)
    //         })
    //     }
    // }
    
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
            this.state._id,
            this.state.confirmed,
            this.state.emergencyContact,
            this.state.skillSet
            )
    }
    

  render() {
    console.log(this.state)
    let initbirthDate = this.state.birthDate
    Moment.locale('en');
    let DOB = Moment(initbirthDate).format('YYYY-MM-DD')
  
    const skillsets = this.props.skillsets  
      // for (let i=0; i<skillsets.length; i++){ 
      //   for (let j=0; j<this.state.skillSet.length; j++){
      //     if (skillsets[i]._id === this.state.skillSet[j]){
      //       skillsets[i].status=true
      //     }
      //   }
      // }

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
                <Label for="exampleSkillSet">Skill Set</Label><br></br>
                {displaySkillset}
            </FormGroup>
           
            <Button color="primary">Save</Button>
        </Form>
      </div>
    )
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
         birthDate, _id, emergencyContact, confirmed, skillSet
         ) => { dispatch(editUserProfile(fullname, username, email, phoneNumber, idCard, address, bio,
          birthDate, _id, emergencyContact, confirmed, skillSet
          ))}
         
    }
  }

  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FormUpdateProfile));


  
