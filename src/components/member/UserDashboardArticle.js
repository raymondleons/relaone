import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Spinner, Row, Col, Card, CardImg, CardBody, CardTitle, CardText} from 'reactstrap';
import Dotdotdot from 'react-dotdotdot';
import { getArticle} from '../../actions/memberActions' ;
import { Link as Links } from 'react-router-dom';

class ArticleList extends Component {

    componentDidMount(){
    this.props.getArticle();
  }

  componentWillReceiveProps() {
    this.setState({
      articles : this.props.articles
    })
  }



  render() {
    let initArticles = []
    let articles = []
    if (this.props.articles){
      initArticles = this.props.articles
      articles = initArticles.slice(0,3)
    }     
      const displayArticle = 
      articles.length ? (
        articles.map(article => {
              return (
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
              )
          })
      ) : (
          <div>
            <Spinner type="grow" color="primary" />
            <Spinner type="grow" color="primary" />
            <Spinner type="grow" color="primary" />   
          </div>
      );

    return (
      <div className="article-list">
        <div className="content-title">
            <h3 className="bold-text">Article</h3>
        </div>
        <div>
            {displayArticle}
        </div>
        <Links to='/user/article'>Show All Articles</Links>
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
    getArticle: () => { dispatch(getArticle())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);


