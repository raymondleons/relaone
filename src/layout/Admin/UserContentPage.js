import React, { Component } from 'react'
import {connect} from 'react-redux'
import { getUser } from '../../actions/adminActions';
import {Button} from 'reactstrap'


class UserContentPage extends Component {

    componentDidMount(){
        this.props.getUser();
    }
   

  render() {
      
    const users = this.props.users

    // const 
      
      
      
    const displayUser = users.length ? (
        users.map(user => {
            return(
                <tr>
                  <th scope="row"></th>
                  <td key={user._id}>{user.fullname}</td>
                  <td key={user._id}>{user.username}</td>
                  <td key={user.id}>{user.email}</td>
                  <td key={user.id}>{user.address}</td>
                  <td key={user.id}><Button color="primary">Edit</Button></td>
              </tr>
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
                                <h1 className="main-title float-left">Users</h1>
                                <ol className="breadcrumb float-right">
                                    <li className="breadcrumb-item">Home</li>
                                    <li className="breadcrumb-item active">Users</li>
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
                                    <i className="fa fa-table"></i> List Users
                                </div>
                                <div className="card-body">	
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus quod non numquam ab unde voluptate illo dolor laboriosam iure voluptas nulla, quae distinctio nam quisquam aperiam rerum inventore exercitationem! Atque libero eos accusantium dolorum natus distinctio? Fuga amet tenetur suscipit repellendus, perspiciatis eaque adipisci dicta nostrum praesentium facere dolorum illum.</p>
											<table className="table table-responsive-xl table-bordered">
											  <thead>
												<tr>
												  <th scope="col" style={{textAlign:"center"}}>No</th>
												  <th scope="col" style={{textAlign:"center"}}>Name</th>
                                                  <th scope="col" style={{textAlign:"center"}}>Username</th>
                                                  <th scope="col" style={{textAlign:"center"}}>Email</th>
                                                  <th scope="col" style={{textAlign:"center"}}>Alamat</th>
                                                  <th scope="col" style={{textAlign:"center"}}>Option</th>
												</tr> 
											  </thead>
											  <tbody>
                                              {displayUser}
											  </tbody>
											</table>							
                                                
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
        users: state.user.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getUser: () => { dispatch(getUser())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContentPage);
