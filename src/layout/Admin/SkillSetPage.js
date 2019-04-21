import React, { Component } from 'react'
import {Button} from 'reactstrap'
import {Link} from 'react-router-dom'
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
      
      
      
      const displayEvent = skillsets.length ? (
        skillsets.map(skillset => {
              return(
                  <tr>
                    <th scope="row"></th>
                    <td key={skillset._id}>{skillset.name}</td>
                    <td key={skillset._id}><Button onClick={this.delTodo.bind(this, skillset._id)} color="danger">Delete</Button></td>
                </tr>
              )
          })
      ) : (
          <tr>Loading for skill set ..</tr>
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
                                <div className="card-body">	
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus quod non numquam ab unde voluptate illo dolor laboriosam iure voluptas nulla, quae distinctio nam quisquam aperiam rerum inventore exercitationem! Atque libero eos accusantium dolorum natus distinctio? Fuga amet tenetur suscipit repellendus, perspiciatis eaque adipisci dicta nostrum praesentium facere dolorum illum.</p>
											<table className="table table-responsive-xl table-bordered">
											  <thead>
												<tr>
												  <th scope="col" style={{textAlign:"center"}}>No</th>
												  <th scope="col" style={{textAlign:"center"}}>Name</th>
                                                  <th scope="col" style={{textAlign:"center"}}>Option</th>
												</tr> 
											  </thead>
											  <tbody>
                                              {displayEvent}
											  </tbody>
											</table>							
											<p style={{float:"right", fontWeight:"100px"}}><Link to="/admin/skill-set/add"><Button color="primary" >Add New</Button></Link></p>
										</div>					
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