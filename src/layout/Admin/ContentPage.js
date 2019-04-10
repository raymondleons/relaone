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
                                <i className="fa fa-file-text-o float-right text-white"></i>
                                <h6 className="text-white text-unpercase m-b-20">Users</h6>
                                <h1 className="m-b-20 text-white counter">2</h1>
                                <span className="text-white">15 New Orders</span>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md col-lg-6 col-xl-3">
                            <div className="card-box noradius noborder bg-warning">
                                <i className="fa fa-file-text-o float-right text-white"></i>
                                <h6 className="text-white text-unpercase m-b-20">Organization</h6>
                                <h1 className="m-b-20 text-white counter">50</h1>
                                <span className="text-white">15 New Org.</span>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md col-lg-6 col-xl-3">
                            <div className="card-box noradius noborder bg-default">
                                <i className="fa fa-file-text-o float-right text-white"></i>
                                <h6 className="text-white text-unpercase m-b-20">Event</h6>
                                <h1 className="m-b-20 text-white counter">20</h1>
                                <span className="text-white">15 New Event</span>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md col-lg-6 col-xl-3">
                            <div className="card-box noradius noborder bg-default">
                                <i className="fa fa-file-text-o float-right text-white"></i>
                                <h6 className="text-white text-unpercase m-b-20">Article</h6>
                                <h1 className="m-b-20 text-white counter">1,234</h1>
                                <span className="text-white">15 New Article</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    )
  }
}
