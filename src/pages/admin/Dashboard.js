import React, { Component } from 'react'
import { BrowserRouter as Router, Route, withRouter} from "react-router-dom";
import history from '../../history'
import {
    getUser
} from '../../actions/adminActions'
import { connect } from "react-redux";
import { getRole } from "../../actions/mainActions"


class Dashboard extends Component {
    
    componentDidMount(){
        let role = localStorage.getItem('role')
        if ( role === 'organization' ) {
          history.push('/organization/event')
        } else if (role === 'member') {
          history.push('/users/dashboard')
        } else if (role === 'admin') {
          history.push('/admin')
        }
    
        window.scrollTo(0, 0);
        document.title= "Dashboard Admin - RelaOne"
    }


  render() {
    return (
      <div>
        <Router>
            <body className="">
            
            </body>
        </Router>
      </div>
    )
  }
}

const mapStateToProps = state => {
    return {
      role: state.auth.role
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      getUser: () => dispatch(getUser()),
      getRole: () => {
        dispatch(getRole())
      }
  
    };
  };
  
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard));