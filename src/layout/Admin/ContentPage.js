import React, { Component } from 'react'

export default class ContentPage extends Component {
  render() {
    return (
      <div className="content-page">
        {/* Start Content */}
            <div className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="breadcrumb-holder">
                                <h1 className="main-title float-left">Dashboard</h1>
                                <ol className="breadcrumb float-right">
                                    <li className="breadcrumb-item">Home</li>
                                    <li className="breadcrumb-item active">Dashboard</li>
                                </ol>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                    </div>
                    {/* end row */}

                    <div className="row">
                        <div className="col-xs-12 col-md col-lg-6 col-xl-3">
                            <div className="card-box noradius noborder bg-default">
                                <i className="fa fa-user float-right text-white"></i>
                                <h6 className="text-white text-unpercase m-b-20">USERS</h6>
                                <h1 className="m-b-20 text-white counter">2</h1>
                                <span className="text-white">15 New Users</span>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md col-lg-6 col-xl-3">
                            <div className="card-box noradius noborder bg-warning">
                                <i className="fa fa-user float-right text-white"></i>
                                <h6 className="text-white text-unpercase m-b-20">ORGANIZATION</h6>
                                <h1 className="m-b-20 text-white counter">50</h1>
                                <span className="text-white">15 New Org.</span>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md col-lg-6 col-xl-3">
                            <div className="card-box noradius noborder bg-info">
                                <i className="fa fa-file-text-o float-right text-white"></i>
                                <h6 className="text-white text-unpercase m-b-20">EVENT</h6>
                                <h1 className="m-b-20 text-white counter">20</h1>
                                <span className="text-white">15 New Event</span>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md col-lg-6 col-xl-3">
                            <div className="card-box noradius noborder bg-danger">
                                <i className="fa fa-file-text-o float-right text-white"></i>
                                <h6 className="text-white text-unpercase m-b-20">ARTICLE</h6>
                                <h1 className="m-b-20 text-white counter">1,234</h1>
                                <span className="text-white">15 New Article</span>
                            </div>
                        </div>
                    </div>
                    {/* Tabel users */}
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <div className="card mb-12">
                                <div className="card-header">
                                    <i className="fa fa-table"></i> List Users
                                </div>
                                <div className="card-body">								
											
											<table className="table table-responsive-xl table-bordered">
											  <thead>
												<tr>
												  <th scope="col">#</th>
												  <th scope="col">Username</th>
                                                  <th scope="col">Password</th>
                                                  <th scope="col">Level</th>
												</tr> 
											  </thead>
											  <tbody>
												<tr>
												  <th scope="row">1</th>
												  <td>basrullah</td>
												  <td>*****</td>
                                                  <td>Member</td>
												</tr>
												<tr>
												  <th scope="row">1</th>
												  <td>raymondleons</td>
												  <td>*****</td>
                                                  <td>Member</td>
												</tr>
												<tr>
												  <th scope="row">1</th>
												  <td>mariabinar</td>
												  <td>*****</td>
                                                  <td>Admin</td>
												</tr>
												<tr>
												  <th scope="row">1</th>
												  <td>raymondleonz</td>
												  <td>*****</td>
                                                  <td>Admin</td>
												</tr>
											  </tbody>
											</table>
											
										</div>					
                            </div>
                            {/* Organization List */}
                            
                        </div>
                    </div>
                </div>
            </div>
      </div>
    )
  }
}
