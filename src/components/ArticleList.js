import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, CardDeck, Card, CardImg, CardBody, CardTitle, CardText} from 'reactstrap';
import Dotdotdot from 'react-dotdotdot';

class ArticleList extends Component {
    
  render() {
      const articles = this.props.article
      const displayArticle = articles.length ? (
        articles.map(article => {
            console.log('hello')
              return (
                <Card className="article-card" key={article.id}>
                    <Row>
                        <Col md="4">
                            <CardImg className="article-image" src={article.image} alt={article.id}></CardImg>
                        </Col>
                        <Col md="8">
                            <CardBody>
                                <CardTitle><h4>{article.title}}</h4></CardTitle>
                                <CardText><Dotdotdot clamp={3}>{article.body}</Dotdotdot></CardText>
                                <CardText className="text-muted">Created by {article.author}</CardText>
                            </CardBody>
                        </Col>
                    </Row>
                </Card>
              )
          })
      ) : (
          <div>No article to show</div>
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
        article: state.article.article
    }
}

export default connect(mapStateToProps)(ArticleList);


