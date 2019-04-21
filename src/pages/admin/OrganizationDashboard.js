import React, { Component } from 'react'
import {connect} from 'react-redux'
import { getSkillset } from '../../actions/organizationActions';

class OrganizationDashboard extends Component {
  
    componentDidMount(){
        this.props.getSkillset();
    }
   

  render() {
      
      const skillsets = this.props.skillsets
      
      
      
      const displayUser = skillsets.length ? (
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
                                <h1 className="main-title float-left">Organization</h1>
                                <ol className="breadcrumb float-right">
                                    <li className="breadcrumb-item">Home</li>
                                    <li className="breadcrumb-item active">Organization</li>
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
                                    <i className="fa fa-table"></i> List Organization
                                </div>
                                {displayUser}			
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

export default connect(mapStateToProps, mapDispatchToProps)(OrganizationDashboard);
