import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Event from '../assets/images/event/banjir.jpg'
import Rekomendasi from '../assets/images/recomendation.svg'
import Post from '../assets/images/event/post.jpg'


export default class Dashboard extends Component {

    ComponentDidMount = (
        document.title = "Dashboard - RelaOne"
    )

  render() {
    return (
        <div className="form-update-profile">
        <div>
            <h3 className="title"><b>Dashboard</b></h3>
        </div>
        <hr></hr>
        <div>
            <h5>List Event</h5>
        </div>
        <div className="col-md-12">
            <div className="form-event">
              <img src={Event} style={style.event} alt=""/>
              <h5 style={style.title}>Banjir Bandang Terjang Aceh Tenggara</h5>
              <p style={style.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quae sequi exercitationem, ea facilis eveniet! </p>
              <img src={Rekomendasi} style={style.foto} alt=""/>
              <p style={style.desc}>Rekomendasi</p>
              <Button color="primary" style={{float:"right", marginTop:"-30px"}}>Join Now</Button>
            </div>
        </div>
        <div>
            <h5>List Article</h5>
        </div>
        <div className="col-md-4">
          <div className="form-event">
            <img src={Post} style={style.post} alt=""/>
            <h5 style={{fontSize:"15px", paddingTop:"10px", textAlign:"center"}}>Cara Menghindari Gempa Dengan Aman</h5>
            <p style={{fontSize:"12px", paddingTop:"7px"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, architecto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aliquam molestiae enim optio rerum? Incidunt animi dolores totam provident numquam.</p>
            <Button color="primary" style={{marginLeft:"10px"}}>Read more</Button>
          </div>
        </div>
        <div className="col-md-4" style={{float:"right", marginTop:"-577px", marginRight:"230px"}}>
          <div className="form-event">
            <img src={Post} style={style.post} alt=""/>
            <h5 style={{fontSize:"15px", paddingTop:"10px", textAlign:"center"}}>Cara Menghindari Gempa Dengan Aman</h5>
            <p style={{fontSize:"12px", paddingTop:"7px"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, architecto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aliquam molestiae enim optio rerum? Incidunt animi dolores totam provident numquam.</p>
            <Button color="primary" style={{marginLeft:"10px"}}>Read more</Button>
          </div>
        </div>
        <div className="col-md-4" style={{float:"right", marginTop:"-577px", marginRight:"14px"}}>
          <div className="form-event">
            <img src={Post} style={style.post} alt=""/>
            <h5 style={{fontSize:"15px", paddingTop:"10px", textAlign:"center"}}>Cara Menghindari Gempa Dengan Aman</h5>
            <p style={{fontSize:"12px", paddingTop:"7px"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, architecto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aliquam molestiae enim optio rerum? Incidunt animi dolores totam provident numquam.</p>
            <Button color="primary" style={{marginLeft:"10px"}}>Read more</Button>
          </div>
        </div>
      </div>
    )
  }
}

const style = {
  event: {
    width: "200px"
  },
  title: {
    float: "right"
  },
  text: {
    float:"right",
    marginTop:"-80px",
    paddingLeft: "216px"
  },
  foto: {
    float:"right",
    marginRight:"-233px",
    width:"17px"
  },
  desc: {
    float:"right",
    fontSize: "10px",
    color: "gray",
    marginTop:"-1px",
    marginRight:"-300px",
  },
  post: {
    marginLeft:"-9px",
    width:"150px",
    boxShadow:"1px 1px 10px 1px #888888"
  }
}

