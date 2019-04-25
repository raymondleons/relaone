import React, { Component } from 'react';
import Sidebar from "../../../layout/sidebar/EventSidebar";
import { BrowserRouter as Router, Route, withRouter} from "react-router-dom";
import Navbar from '../../../layout/navbar/Navbar'
import Footer from '../../../layout/FooterAdmin'
import { connect } from 'react-redux';
import { getEvent } from '../../../actions/adminActions' ;

class EventDetail extends Component {

  componentDidMount(){
    this.props.getEvent();
  }

  render() {
    const articles = this.props.articles ? (
        <div className="article-detail">
          <h1 className="bold-text">{this.props.articles.title}</h1>
          <p className="text-muted">Created by {this.props.articles.createdBy.name}</p>
          <div>
              <img className="article-detail-image" src={this.props.articles.photo} alt="be volunteer"></img>
          </div>
          <div>
              <p className="article-paragraph">{this.props.articles.description}</p>
          </div>
        </div>
    ) : (
      <div>Loading article...</div>
    )
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
                <h5 className="card-title">List Articles</h5>
                {articles}
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
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.article_id;
  return {
    articles: state.article.articles.find(article => article._id === id)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getEvent: () => { dispatch(getEvent()) }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventDetail));
