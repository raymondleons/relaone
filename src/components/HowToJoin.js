import React, { Component } from 'react'
import '../assets/css/_style.scss';
import step1 from '../assets/images/step1.png';
import step2 from '../assets/images/step2.png';
import step3 from '../assets/images/step3.png';
import step4 from '../assets/images/step4.png';
import step5 from '../assets/images/step5.png';
import {
    Container,
    Row,
    Col,
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators
  } from 'reactstrap';

const items = [
{
  src : step1,
  title : 'Register',
  altText: 'step 1',
  caption: 'Join RelaOne to be part of volunteer activities. Sign Up!'
},
{
  src: step2,
  title : 'Complete your profile',
  altText: 'step 2',
  caption: 'Complete your profile to find activity that suit you best.'
},
{
  src: step3,
  title : 'Find activity',
  altText: 'step 3',
  caption: 'RelaOne will recommend activity that suit your profile. Want more? You can find other activities!'
},
{
  src: step4,
  title : 'Join',
  altText: 'step 4',
  caption: 'Just click "Join" and fill some requirements, and you have got chance to contribute'
},
{
  src: step5,
  title : 'Wait and ready to go!',
  altText: 'step 5',
  caption: 'While waiting confirmation from organization. you can find information related to volunteering!'
}
];

class HowToJoin extends Component {
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
                    <img src={item.src} alt={item.altText} className="how-to-join-image" />
                  </Col>
                  <Col xs="8" sm="8" md="6">
                    <p><b>{item.title}</b></p>
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
            <div className="section how-to-join" id="how-to-join">
                <h4 className="text-center"><b>How to Join</b></h4>
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

export default HowToJoin;

