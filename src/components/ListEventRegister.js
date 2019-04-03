import React, { Component } from 'react'
import { Col, Input, Row, Button, Table } from 'reactstrap'
import Search from '../assets/images/search.png'

export default class ListEventRegister extends Component {
  render() {
    return (
      <div className="list-event">
        <div className="content-title content-header">
            <div>
              <h3>Pendaftar Event</h3>
            </div>
            <div className="event-count">
                <h4>7</h4>
                <p>EVENT FOUND</p>
            </div>
        </div>
        <div className="input-search">
          <Row>
              <Col md="5">
                <Input placeholder="Cari event disini.."/>
              </Col>
              <Col md="2">
              </Col>
              <Col md="5">
                <Button color="primary">Download Semua</Button>
              </Col>
          </Row>
                <br></br>    
          <Row>
              <Table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nama</th>
                  <th>Tanggal</th>
                  <th>Category</th>
                  <th>Total Register</th>
                </tr>
              </thead>
              <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Bencana Lombok</td>
            <td>10 Juni 2019</td>
            <td>Bencana Alam</td>
            <td >10 Orang</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Bencana Lombok</td>
            <td>10 Juni 2019</td>
            <td>Bencana Alam</td>
            <td >10 Orang</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Bencana Lombok</td>
            <td>10 Juni 2019</td>
            <td>Bencana Alam</td>
            <td >10 Orang</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Bencana Lombok</td>
            <td>10 Juni 2019</td>
            <td>Bencana Alam</td>
            <td >10 Orang</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Bencana Lombok</td>
            <td>10 Juni 2019</td>
            <td>Bencana Alam</td>
            <td >10 Orang</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Bencana Lombok</td>
            <td>10 Juni 2019</td>
            <td>Bencana Alam</td>
            <td >10 Orang</td>
          </tr>
          <tr>
            <th scope="row">7</th>
            <td>Bencana Lombok</td>
            <td>10 Juni 2019</td>
            <td>Bencana Alam</td>
            <td >10 Orang</td>
          </tr>
          </tbody>
              </Table>
          </Row>
        </div>
      </div>
    )
  }
}
