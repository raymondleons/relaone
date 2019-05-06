import React, { Component } from 'react'
import { BrowserRouter as Router, Route, withRouter} from "react-router-dom";
import history from '../../history'
import {
    getUser
} from '../../actions/adminActions'
import { connect } from "react-redux";
import { getRole } from "../../actions/mainActions"
import Dashboard from "./Dashboard";

// CSS
import '../../assets/css/admin/bootstrap.min.css'
import '../../assets/css/admin/paper-dashboard.css'
import '../../assets/css/admin/demo/demo.css'

// Layout
import Sidebar from '../../layout/sidebar/Sidebar'
import Navbar from '../../layout/navbar/Navbar'
import Footer from '../../layout/FooterAdmin'

// Component
import DashboardPage from '../../components/admin/Dashboard'
import Content from '../../components/admin/Content'

class AdminPage extends Component {
    
    componentDidMount(){
      let role = localStorage.getItem('role')
      if (role !== 'admin') {
        history.push('/login-admin')
      }
      window.scrollTo(0, 0);
      document.title = "Event";
    }


  render() {
    return (
        <Router>
          <body className="">
        <div id="wrapper">
          <div className="admin-grid">
            <Sidebar />
              <div className="main-panel">
                <Dashboard/>
                <div className="content">
                  <DashboardPage/> 
                  <div className="row">
                  <Content/>
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
  
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AdminPage));