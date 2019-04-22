import React, { Component } from 'react'
import {Button} from 'reactstrap'
import { connect } from 'react-redux'
import { getSkillset } from '../../actions/organizationActions';
import '../../assets/css/_style2.scss'

import {axios} from 'axios'

class SkillSetPage extends Component {

    componentDidMount(){
        this.props.getSkillset();
    }

    // Delete
    delTodo = (id) => {
        this.setState({skillsets: [...this.state.todos.filter(skillset => skillset._id !== id)]})
        axios.delete(`https://relaonebinar.herokuapp.com/api/admin/skillset/${id}`, {
          headers: { 'Authorization': localStorage.getItem('token') },
        })
        
      }
    

  render() {
      
      const skillsets = this.props.skillsets
      
      
      
      const displaySkillSet = skillsets.length ? (
        skillsets.map(skillset => {
              return(
                <div></div>
              )
          })
      ) : (
          <tr>Loading ..</tr>
      );

    return (
      <div className="content-page">
        {/* Start Content */}
            <div className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="breadcrumb-holder">
                                <h1 className="main-title float-left">Skill Set</h1>
                                <ol className="breadcrumb float-right">
                                    <li className="breadcrumb-item">Home</li>
                                    <li className="breadcrumb-item active">Skill Set</li>
                                </ol>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                    </div>
                    {/* end row */}
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <div className="card sm-12">
                                <div className="card-header">
                                    <i className="fa fa-table"></i> List Skill Set
                                </div>
                                {displaySkillSet}			
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
    return {
        skillsets: state.skillset.skillsets
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getSkillset: () => { dispatch(getSkillset())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SkillSetPage);