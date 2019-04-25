import React, { Component } from "react";
import Sidebar from "../../../layout/sidebar/UserSidebar";
import { BrowserRouter as Router, Route, withRouter} from "react-router-dom";
import Navbar from '../../../layout/navbar/AccountNavbar'
import Footer from '../../../layout/FooterAdmin'
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { Table, Button } from 'reactstrap';

import {
  getUser,
  delUser } from '../../../actions/adminActions'

class User extends Component {

  componentDidMount(){
    this.props.getUser();
  }

  delete = (id) => {
    this.props.delUser(id)
  }



  render() {
    const users = this.props.users

    const displayUser = users.length ? (
      users.map(({_id, fullname, username, email, address}, i) => {
        return(
          <tr>
            <td>{i +1}</td>
            <td key={_id}>{fullname}</td>
            <td key={_id}>{username}</td>
            <td key={_id}>{email}</td>
            <td key={_id}>{address}</td>
            <td key={_id}>
                        <Button color="link" className="event-action">
                        <Link to={'/admin/users/edit/' + _id}><i class="fa fa-pencil-square-o" aria-hidden="true"></i></Link>

                        </Button>
                        <Button color="link" className="event-action" onClick={() => this.delete(_id)}> 
                        <i class="fa fa-trash" aria-hidden="true"></i>

                        </Button>
                    </td>
        </tr>
      )
  })
) : (
  <tr>Loading ..</tr>
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
                <h5 className="card-title">List Users</h5>
                <div class="card-body">
                <div class="table-responsive">
                <table class="table">
                    <thead class=" text-primary">
                    <th>
                        No.
                      </th>
                      <th>
                        Name
                      </th>
                      <th>
                        Username
                      </th>
                      <th>
                        Email
                      </th>
                      <th>
                        Alamat
                      </th>

                      <th className="right">
                        Action
                      </th>
                    </thead>
                    <tbody>
                    {displayUser}
                    </tbody>
                    </table>
                    <div className="event-action">
                          <Button color="primary"><Link to="/admin/users/create" className="create-event-button">Create User</Link></Button>
                      </div>
                </div>
              </div>
                </div>
            </div>
    </div>
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
      delUser: (id) => { dispatch(delUser(id))}
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(User));
