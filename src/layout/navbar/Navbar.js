import React, { Component } from 'react'
import { getProfileAdmin } from '../../actions/adminActions';
import { connect } from 'react-redux';

class Navbar extends Component {

    componentDidMount(){
        this.props.getProfileAdmin();
      }

  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-absolute fixed-top navbar-transparent">
            <div className="container-fluid">
                <div className="navbar-wrapper">
                    <div className="navbar-toggle">
                        <button type="button" className="navbar-toggler">
                            <span className="navbar-toggler-bar bar1"></span>
                            <span className="navbar-toggler-bar bar2"></span>
                            <span className="navbar-toggler-bar bar3"></span>
                        </button>
                    </div>
                    <a className="navbar-brand" style={{paddingLeft:"250px"}} href="/admin">Dashboard</a>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-bar navbar-kebab"></span>
                    <span className="navbar-toggler-bar navbar-kebab"></span>
                    <span className="navbar-toggler-bar navbar-kebab"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navigation">      
                    <ul className="navbar-nav">
                        <p className="navbar-title" style={{color:"black"}}>Hi, Admin</p>
                    </ul>
                </div>
            </div>
        </nav>
    )
  }
}

const mapStateToProps = state => {
    return {
      name: state.admin.name
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      getProfileAdmin: () => { dispatch(getProfileAdmin()) }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps) (Navbar);