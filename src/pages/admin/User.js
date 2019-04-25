import React, { Component } from "react";
import Sidebar from "../../layout/sidebar/ListAdminSidebar";
import { BrowserRouter as Router, Route, withRouter} from "react-router-dom";
import Navbar from '../../layout/navbar/Navbar'
import Footer from '../../layout/FooterAdmin'
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { Table, Button } from 'reactstrap';

import {
  getUserAdmin,
  delUserAdmin } from '../../actions/adminActions'

class User extends Component {

  componentDidMount(){
    this.props.getUserAdmin();
  }

  delete = (id) => {
    this.props.delUserAdmin(id)
  }



  render() {
    const admins = this.props.admins

    const displayAdmin = admins.length ? (
      admins.map(({_id, name, username, email}, i) => {
        return(
          <tr>
            <td>{i +1}</td>
            <td key={_id}>{name}</td>
            <td key={_id}>{username}</td>
            <td key={_id}>{email}</td>
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
                <h5 className="card-title">List Admin</h5>
                <div class="card-body">
                <div class="table-responsive">
                <table class="table">
                    <thead class=" text-primary">
                      <th>
                        No
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

                      <th className="right">
                        Action
                      </th>
                    </thead>
                    <tbody>
                    {displayAdmin}
                    </tbody>
                    </table>
                    <div className="event-action">
                          <Button color="primary"><Link to="/admin/list-admin/create" className="create-event-button">Create Admin</Link></Button>
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
    admins: state.admin.admins
  }
}

const mapDispatchToProps = dispatch => {
  return {
      getUserAdmin: () => { dispatch(getUserAdmin())},
      delUserAdmin: (id) => { dispatch(delUserAdmin(id))}
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(User));
