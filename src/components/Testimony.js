import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../assets/css/_style.scss';
import {
    Container,
    Row,
    Col,
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators
  } from 'reactstrap';

class Testimony extends Component {
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
    const nextIndex = this.props.activeIndex === this.props.testimony.length - 1 ? 0 : this.props.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
    }

    previous() {
    if (this.animating) return;
    const nextIndex = this.props.activeIndex === 0 ? this.props.testimony.length - 1 : this.props.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
    }

    render() {
        const { activeIndex } = { activeIndex: this.props.activeIndex };

        const slides = this.props.testimony.map((item) => {
          return (
            <CarouselItem
              onExiting={this.onExiting}
              onExited={this.onExited}
              key={item.src}
            >
              <Container>
                <Row>
                  <Col xs="0" sm="0" md="2"></Col>
                  <Col xs="4" sm="4" md="2">
                    <img src={item.src} alt={item.altText} className="testimony-image"/>
                  </Col>
                  <Col xs="8" sm="8" md="6">
                    <p><span className="bold-text">{item.name}</span></p>
                    <p>{item.title}</p>
                    <p>{item.caption}</p>
                  </Col>
                </Row>
              </Container>
            </CarouselItem>
          );
        });

        return (
            <div className="section testimony" id="testimony">
                <h4 className="text-center bold-text">Testimony</h4>
                <br></br>
                <Carousel
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}
                >
                    <CarouselIndicators items={this.props.testimony} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
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
    testimony: state.landingPage.testimony,
    activeIndex: state.landingPage.activeIndex
  }
}

export default connect(mapStateToProps)(Testimony);


