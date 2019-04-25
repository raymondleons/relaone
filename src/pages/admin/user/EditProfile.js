import React, { Component } from "react";
import Sidebar from "../../../layout/sidebar/UserSidebar";
import { BrowserRouter as Router, Route, withRouter} from "react-router-dom";
import Navbar from '../../../layout/navbar/UserNavbar'
import Footer from '../../../layout/FooterAdmin'
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { Table, Button } from 'reactstrap';
import history from '../../../history'
import {
  getProfile, editProfileUser } from '../../../actions/adminActions'



class User extends Component {

  componentDidMount(){
    let role = localStorage.getItem('role')
    if (role !== 'admin') {
      history.push('/login-admin')
    }
    window.scrollTo(0, 0);
    document.title = "Update Profile User";
  }

  constructor(props) {
      super(props);

      this.state = {
          fullname : "",
          username : "",
          email    : "",
          idCard   : "",
          phoneNumber : "",
          address   : "",
          bio       : ""
      }
  }

  componentWillMount(){
    this.props.getProfile();
  }

  componentWillReceiveProps(props){
    this.setState({
      fullname : props.fullname,
      username : props.username,
      email : props.email,
      idCard : props.idCard,
      phoneNumber : props.phoneNumber,
      address : props.address,
      bio : props.bio
    })


}  
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.editProfileUser(this.state.fullname, this.state.username, this.state.email, this.state.idCard, this.state.phoneNumber, this.state.address, this.state.bio);
     }

  render() {
    console.log(this.state)
    console.log(this.props)

    let users = {}
    if (this.props.users) {
      users = this.props.users
    }

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
                                    <form onSubmit={this.onSubmit}>
                                        <div className="row">
                                            <div class="col-md-5 pr-1">
                                                <div class="form-group">
                                                    <label for="exampleFullName">Fullname</label>
                                                    <input defaultValue={this.state.fullname} onChange={this.onChange} className="form-control" type="text" name="fullname" id="exampleFullName"/>
                                                </div>
                                            </div>
                                            <div class="col-md-3 px-1">
                                                <div class="form-group">
                                                    <label for="exampleUsername">Username</label>
                                                    <input defaultValue={this.state.username} onChange={this.onChange} className="form-control" type="text" name="username" id="exampleName"/>
                                                </div>
                                            </div>
                                            <div className="col-md-4 pl-1">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Email address</label>
                                                    <input defaultValue={this.state.email} onChange={this.onChange} className="form-control" type="text" name="email" id="exampleEmail"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 pr-1">
                                                <div class="form-group">
                                                    <label>Id Identification Number</label>
                                                    <input defaultValue={this.state.idCard} onChange={this.onChange} className="form-control" type="text" name="idCard" id="exampleName"/>
                                                </div>
                                            </div>
                                            <div class="col-md-6 pl-1">
                                                <div class="form-group">
                                                    <label>Phone Number</label>
                                                    <input defaultValue={this.state.phoneNumber} onChange={this.onChange} className="form-control" type="text" name="phoneNumber" id="exampleName"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12">
                                            <div class="form-group">
                                                <label>Address</label>
                                                <input defaultValue={this.state.address} onChange={this.onChange} className="form-control" type="text" name="address" id="exampleName"/>
                                            </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="update ml-auto mr-auto">
                                            <button type="submit" class="btn btn-primary btn-round">Update Profile</button>
                                            </div>
                                        </div>

                                    </form>
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

const mapStateToProps = state => {
  return {
    fullname : state.admin.fullname,
    username : state.admin.username,
    email : state.admin.email,
    idCard : state.admin.idCard,
    phoneNumber : state.admin.phoneNumber,
    address : state.admin.address,
    bio : state.admin.bio
  }
}

const mapDispatchToProps = dispatch => {
  return {
      getProfile: () => { dispatch(getProfile())},
      editProfileUser: (fullname, username, email, idCard, phoneNumber, address, bio) => {dispatch(editProfileUser(fullname, username, email, idCard, phoneNumber, address, bio))}
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(User));
