import React, { Component } from "react";
import Sidebar from "../../../layout/sidebar/UserSidebar";
import { BrowserRouter as Router, Route, withRouter} from "react-router-dom";
import Navbar from '../../../layout/navbar/UserNavbar'
import Footer from '../../../layout/FooterAdmin'
import { connect } from "react-redux";

import {
  getUser, addUser } from '../../../actions/adminActions'

class User extends Component {

  constructor(props) {
      super(props);
      this.state = {
          fullname : "",
          username : "",
          password : "",
          email : "",
      }
  }

  componentWillMount(){
    this.props.getUser();
  }

  componentWillReceiveProps(props){
    this.setState({
      users : props.users
    })


}  
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addUser(this.state.fullname, this.state.username, this.state.email, this.state.password);
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
                                        <h5 class="card-title">Create New User</h5>
                                    </div>
                                    <div className="card-body">
                                    <form onSubmit={this.onSubmit}>
                                        <div className="row">
                                            <div className="col-md-8 pr-1">
                                                <div className="form-group">
                                                    <label for="exampleFullname">Fullname</label>
                                                    <input required onChange={this.onChange} value={this.state.fullname} className="form-control" type="text" name="fullname" id="exampleFullname" placeholder=""/>
                                                </div>
                                            </div>
                                            <div className="col-md-4 px-1">
                                                <div className="form-group">
                                                    <label for="exampleUsername">Username</label>
                                                    <input required onChange={this.onChange} value={this.state.username} className="form-control" type="text" name="username" id="exampleUsername" placeholder=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                        </div>
                                        <div className="row">
                                          <div className="col-md-6 pr-1">
                                                  <div className="form-group">
                                                      <label for="exampleEmail">Email</label>
                                                      <input required onChange={this.onChange} value={this.state.email} className="form-control" type="text" name="email" id="exampleEmail" placeholder=""/>
                                                  </div>
                                              </div>
                                              <div className="col-md-6 pr-1">
                                                  <div className="form-group">
                                                      <label for="examplePassword">Password</label>
                                                      <input required onChange={this.onChange} value={this.state.password} className="form-control" type="password" name="password" id="exampleEmail" placeholder=""/>
                                                  </div>
                                              </div>
                                        </div>
                                        <div className="row">
                                            <div className="update ml-auto mr-auto">
                                            <button type="submit" className="btn btn-primary btn-round">Create</button>
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
      users: state.user.users
  }
}

const mapDispatchToProps = dispatch => {
  return {
      getUser: () => { dispatch(getUser())},
      addUser: () => (fullname, username, password, email) => { dispatch(addUser(fullname, username, password, email))}
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(User));
