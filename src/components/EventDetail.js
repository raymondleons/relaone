import React, { Component } from 'react'
import { Card, Row, Col, CardImg, CardBody, CardTitle, CardText } from 'reactstrap'
import Event from './Event'
import { connect } from 'react-redux'
import { getArticle } from '../actions/memberActions' ;
import Dotdotdot from 'react-dotdotdot';
import { Link as Links } from 'react-router-dom';

class EventDetail extends Component {
  
  componentDidMount(){
    this.props.getArticle();
  }

  render() {
    const articles = this.props.articles
      const displayArticle = articles.length ? (
        articles.map(article => {
          
    return (
    <div>
      <div>
        <Card className="article-card" key={article._id}>
                    <Row>
                        <Col md="4">
                            <CardImg className="article-image" src={article.photo} alt={article._id}></CardImg>
                        </Col>
                        <Col md="8">
                            <CardBody>
                                <CardTitle><h4><Links to={'/article/detail/' + article._id}>{article.title}</Links></h4></CardTitle>
                                <CardText><Dotdotdot clamp={3}>{article.description}</Dotdotdot></CardText>
                                <CardText className="text-muted">Created by {article.createdBy.name}</CardText>
                            </CardBody>
                        </Col>
                    </Row>
                </Card>
          
      </div>
      </div>
    )

  })
  ) : (
      <div>wait a moment...</div>
  );
  
    return (
      <div className="content">
      <Event></Event>
         <h5 className="bold-text">Article</h5>
         {/* <hr></hr> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(EventDetail);