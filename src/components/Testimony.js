import React, { Component } from 'react'
import '../assets/css/_style.scss';
import person1 from '../assets/images/person1.jpg';
import person2 from '../assets/images/person2.jpeg';
import person3 from '../assets/images/person3.jpg';
import {
    Container,
    Row,
    Col,
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
  } from 'reactstrap';

const items = [
{
  src: person1,
  name : 'Heri S',
  title : 'Volunteer',
  altText: 'person 1',
  caption: '"As an activist in one of the disaster communities, I feel greatly helped by the RelaOne application. We can easily select and recruit prospective volunteers according to their qualifications."'
},
{
  src: person2,
  name : 'Maria Binar C',
  title : 'Volunteer',
  altText: 'person 2',
  caption: '"As an activist in one of the disaster communities, I feel greatly helped by the RelaOne application. We can easily select and recruit prospective volunteers according to their qualifications."'
},
{
  src: person3,
  name : 'Raymond',
  title : 'Volunteer',
  altText: 'person 3',
  caption: '"As an activist in one of the disaster communities, I feel greatly helped by the RelaOne application. We can easily select and recruit prospective volunteers according to their qualifications."'
}
];

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
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
    }

    previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
    }

    render() {
        const { activeIndex } = this.state;

        const slides = items.map((item) => {
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
                    <p><b>{item.name}</b></p>
                    <p>{item.title}</p>
                    <br></br>
                    <p>{item.caption}</p>
                    <br></br>
                  </Col>
                </Row>
              </Container>
            </CarouselItem>
          );
        });

        return (
            <div className="section testimony">
                <h4 className="text-center">Testimony</h4>
                <br></br>
                <Carousel
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}
                >
                    <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                    {slides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                </Carousel>
            </div>
            
        );
    }
}

export default Testimony;