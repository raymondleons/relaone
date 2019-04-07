import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getArticle } from '../actions/memberActions' ;

class ArticleDetail extends Component {

  componentDidMount(){
    this.props.getArticle();
  }

  render() {
    console.log(this.props.articles)
    const articles = this.props.articles ? (
        <div className="article-detail">
          <h1 className="bold-text">{this.props.articles.title}</h1>
          <p className="text-muted">Created by {this.props.articles.createdBy.name}</p>
          <div>
              <img className="article-detail-image" src={this.props.articles.photo} alt="be volunteer"></img>
          </div>
          <div>
              <p>{this.props.articles.description}</p>
          </div>
        </div>
    ) : (
      <div>Loading article...</div>
    )

    return (
      <div>
        {articles}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state)
  console.log(ownProps)
  // let id = ownProps.match.params.article_id;
  return {
    articles: state.article.articles.find(article => article._id === '5caa01316358ec0017823990')
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getArticle: () => { dispatch(getArticle()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleDetail);


