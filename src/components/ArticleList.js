import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Card, CardImg, CardBody, CardTitle, CardText} from 'reactstrap';
import Dotdotdot from 'react-dotdotdot';
import { getArticle } from '../actions/memberActions' ;
import { Link as Links } from 'react-router-dom';

class ArticleList extends Component {

  componentDidMount(){
    this.props.getArticle();
  }

  render() {
      const articles = this.props.articles
      const displayArticle = articles.length ? (
        articles.map(article => {
              return (
                <Card className="article-card" key={article._id}>
                    <Row>
                        <Col md="4">
                            <CardImg className="article-image" src={article.photo} alt={article._id}></CardImg>
                        </Col>
                        <Col md="8">
                            <CardBody>
                                <CardTitle><h4><Links to={'/article/detail' + article._id}>{article.title}</Links></h4></CardTitle>
                                <CardText><Dotdotdot clamp={3}>{article.description}</Dotdotdot></CardText>
                                <CardText className="text-muted">Created by {article.createdBy.name}</CardText>
                            </CardBody>
                        </Col>
                    </Row>
                </Card>
              )
          })
      ) : (
          <div>wait a moment...</div>
      );

    return (
      <div className="article-list">
        <div className="content-title">
            <h3 className="bold-text">Article</h3>
        </div>
        <div>
            {displayArticle}
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
    getArticle: () => { dispatch(getArticle()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);


