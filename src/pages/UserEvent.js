import React, { Component } from 'react'
import {Col, Row, Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import {Link} from 'react-router-dom'
import '../assets/css/_style2.scss'
import test from '../assets/images/bg-contactus.jpg'

export default class UserEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }




  render() {
    return (
      <div>
        <Row className="whitebg pt-3">
          <Col sm={6}>
          <Card className="mbot">
              <CardImg top width="100%" src={test} alt="Card image cap" />
              <CardBody>
                <CardTitle>Nama Event</CardTitle>
                <hr />
                <CardSubtitle>Oleh: Nama Org PT.blabla</CardSubtitle>
                <CardSubtitle>Location, Batam, blablabla</CardSubtitle>
                <CardSubtitle>Periode: 4 jam</CardSubtitle>
                <hr />
                <CardSubtitle>Due Date : 12345678</CardSubtitle>
                <Row>
                  <Col sm={6}>
                    <Button block color='primary'>
                      <Link to='/user/event/details'> More Details</Link>
                    </Button>
                  </Col>
                  <Col sm={6}>
                  <Button block color="primary" onClick={this.toggle}>Join Now!</Button>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col sm={6}>
          <Card className="mbot">
              <CardImg top width="100%" src={test} alt="Card image cap" />
              <CardBody>
                <CardTitle>Nama Event</CardTitle>
                <hr />
                <CardSubtitle>Oleh: Nama Org PT.blabla</CardSubtitle>
                <CardSubtitle>Location, Batam, blablabla</CardSubtitle>
                <CardSubtitle>Periode: 4 jam</CardSubtitle>
                <hr />
                <CardSubtitle>Due Date : 12345678</CardSubtitle>
                <Row>
                  <Col sm={6}>
                    <Button block color='primary'>More Details</Button>
                  </Col>
                  <Col sm={6}>
                    <Button block color='primary'>Join Now!</Button>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col sm={6}>
          <Card className="mbot">
              <CardImg top width="100%" src={test} alt="Card image cap" />
              <CardBody>
                <CardTitle>Nama Event</CardTitle>
                <hr />
                <CardSubtitle>Oleh: Nama Org PT.blabla</CardSubtitle>
                <CardSubtitle>Location, Batam, blablabla</CardSubtitle>
                <CardSubtitle>Periode: 4 jam</CardSubtitle>
                <hr />
                <CardSubtitle>Due Date : 12345678</CardSubtitle>
                <Row>
                  <Col sm={6}>
                    <Button block color='primary'>More Details</Button>
                  </Col>
                  <Col sm={6}>
                    <Button block color='primary'>Join Now!</Button>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col sm={6}>
            <Card className="mbot">
              <CardImg top width="100%" src={test} alt="Card image cap" />
              <CardBody>
                <CardTitle>Nama Event</CardTitle>
                <hr />
                <CardSubtitle>Oleh: Nama Org PT.blabla</CardSubtitle>
                <CardSubtitle>Location, Batam, blablabla</CardSubtitle>
                <CardSubtitle>Periode: 4 jam</CardSubtitle>
                <hr />
                <CardSubtitle>Due Date : 12345678</CardSubtitle>
                <Row>
                  <Col sm={6}>
                    <Button block color='primary'>More Details</Button>
                  </Col>
                  <Col sm={6}>
                    <Button block color='primary'>Join Now!</Button>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>

        
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Join Event</ModalHeader>
          <ModalBody>
            Permintaan untuk join event akan diteruskan kepada organisasi untuk mendapat persetujuan organisasi.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>OK</Button>{' '}
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}
