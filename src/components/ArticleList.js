import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Spinner, Row, Col, Card, CardImg, CardBody, CardTitle, CardText, Form, Input, FormGroup, Button } from 'reactstrap';
import Dotdotdot from 'react-dotdotdot';
import { getArticle, searchArticle } from '../actions/memberActions' ;
import { Link as Links } from 'react-router-dom';

class ArticleList extends Component {

    componentWillMount(){
    this.props.getArticle();
  }

  constructor(props) {
    super(props);

    this.state = {
      articles : [],
      search : ""
    }
  }

  componentWillReceiveProps() {
    this.setState({
      articles : this.props.articles
    })
  }

  onChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.searchArticle(this.state.search)
  }
  

  render() {
      const articles = this.props.articles; 

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
                                <CardTitle><h4><Links to={'/user/article/detail/' + article._id}>{article.title}</Links></h4></CardTitle>
                                <div><Dotdotdot clamp={3}>{article.description}</Dotdotdot></div>
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
        <Form onSubmit={this.onSubmit}>
            <FormGroup>
              <Row>
                <Col md="10">
                  <Input onChange={this.onChange} className="form-control" type="text" name="search" id="exampleSearch" placeholder="search"/>
                </Col>
                <Col md="2">
                  <Button color="primary">Search</Button> 
                </Col>
              </Row>
            </FormGroup>
        </Form>
        <div>
            {articles.length} article(s)
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
    getArticle: () => { dispatch(getArticle()) },
    searchArticle: (keyword) => { dispatch(searchArticle(keyword))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);


