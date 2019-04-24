import React, { Component } from 'react'
import { BrowserRouter as Router, Route, withRouter} from "react-router-dom";
import { connect } from "react-redux";

import {
  getArticle,
  delArticle } from '../../actions/adminActions'

class Content extends Component {
  componentDidMount(){
    this.props.getArticle();
  }

  delete = (id) => {
    this.props.delArticle(id)
  }

  render() {
    const articles = this.props.articles

    const displayArticle = articles.length ? (
      articles.map(({_id, title, createdBy, createdAt, address}, i) => {
        return(
          <tr>
            <td>{i +1}</td>
            <td key={_id} >{title}</td>
            <td key={_id}>{createdBy.name}</td>
        </tr>
      )
  })
) : (
  <tr>Loading ..</tr>
);
    return (
        <div className="col-md-12">
            <div className="card">
                <div className="card-header">
                <h5 className="card-title">List Article</h5>
                <div class="card-body">
                <div class="table-responsive">
                  <table class="table">
                    <thead class=" text-primary">
                      <th>
                        No
                      </th>
                      <th>
                        Title
                      </th>
                      <th>
                        Author
                      </th>
                    </thead>
                    <tbody>
                    {displayArticle}
                    </tbody>
                  </table>
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
      articles: state.article.articles
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getArticle: () => { dispatch(getArticle())},
      delArticle: (id) => { dispatch(delArticle(id))}
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Content));