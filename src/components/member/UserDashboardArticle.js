import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../assets/css/_style.scss';
import {
    Container,
    Row,
    Col,
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators
  } from 'reactstrap';
import { getArticle } from '../../actions/memberActions' ;

class UserDashboardArticle extends Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
      }
    
    onExiting() {
    this.animating = true;
    }

    onExited() {
    this.animating = false;
    }

    next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === this.props.howToJoin.length - 1 ? 0 : this.props.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
    }

    previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? this.props.howToJoin.length - 1 : this.props.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
    }

    render() {
    const { activeIndex } = this.state;
    const articles = this.props.articles
        const slides = articles.length ? (
          articles.map((article => {
          return (
            <CarouselItem
              onExiting={this.onExiting}
              onExited={this.onExited}
              key={article._id}
            >
              <Container>
                <Row>
                  <Col xs="0" sm="0" md="2"></Col>
                  <Col xs="4" sm="4" md="2">
                    <img src={article.photo} alt={article._id} className="how-to-join-image" />
                  </Col>
                  <Col xs="8" sm="8" md="6">
                    <p><span className="bold-text">{article.title}</span></p>
                    <br></br>
                    <p>{article.description}</p>
                    <br></br>
                  </Col>
                </Row>
              </Container>
            </CarouselItem>
          )
        }))
        ): (
          <div>wait a moment...</div>
      );
      

        return (
            <div className="section how-to-join" id="how-to-join">
                <h4 className="text-center bold-text">How to Join</h4>
                <br></br>
                <Carousel
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}
                >
                    <CarouselIndicators items={articles} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                    {slides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                </Carousel>
            </div>
            
        );
    }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    articles: state.article.articles,
    activeIndex: state.landingPage.activeIndex
  }
}


const mapDispatchToProps = dispatch => {
  return {
    getArticle: () => { dispatch(getArticle()) }
  }
  }

export default connect(mapStateToProps,  mapDispatchToProps)(UserDashboardArticle);

