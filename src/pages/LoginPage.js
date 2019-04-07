import React from 'react';
import { Form, FormGroup, Label, Input, FormText, TabContent, TabPane, Nav, NavItem, NavLink, Button, Row, Col } from 'reactstrap';
import {Link , withRouter} from 'react-router-dom'
import classnames from 'classnames';
import '../assets/css/_style2.scss';
import Img from '../assets/images/image1.png'
import Logo from '../assets/images/blue-logo.png'
import { signIn } from "../actions/memberActions";
import axios from 'axios'
import { connect } from "react-redux";


class LoginPage extends React.Component {

  componentDidMount(){
    document.title= "Login - RelaOne"
}
constructor(props) {
  super(props)

  this.state = {
     username: '',
     password: ''
  }
}

onChange = e => this.setState({ [e.target.name]: e.target.value });

onSubmit = e => {
  e.preventDefault();
  this.props.signIn(this.state.username, this.state.password)
  this.setState({
    username: "",
    password: ""
  });
}

componentDidUpdate() {
  console.log(this.props.role)
  this.props.role === 'member' && this.props.history.push('/dashboard')
  this.props.role == 'organization' && this.props.history.push('/organization')
}

  render() {
    return (
      <div className="container2">
        <div className=" my-4 logo" >
        <Link to="/"><img className="" src={Logo} alt=""/></Link>
        </div>
        <Row className="whitebg">
          <Col md={6} className="nopadding">
            <img className="width" src={Img} alt=""/>
          </Col>
          <Col md={6} className="right">
              <h2>Login</h2>
                <Row className="box">
                  <Form className="" onSubmit={this.onSubmit}>
                    <FormGroup>
                      <Label >Username</Label>
                      <Input 
                        onChange={this.onChange}
                        value={this.state.username}
                        className="input-border"
                        type="text" 
                        name="username" 
                        id="username" 
                        placeholder="Type here .." />
                    </FormGroup>
                    <FormGroup>
                      <Label >Password</Label>
                      <Input 
                        onChange={this.onChange}
                        value={this.state.password}
                        className="input-border" 
                        type="password" 
                        name="password" 
                        id="password" 
                        placeholder="Type here .." />
                    </FormGroup>
                    <FormText ><Link to='/forgot-password'>Forgot password?</Link>
                    </FormText>
                    <Button color="primary button-right mt-3 ">Login</Button>
                    <FormText className=" clear text-center mtop">
                      Don't have an account? <Link to='/register'>Register here.</Link>
                    </FormText>
                  </Form>
                </Row>
                </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    role: state.auth.role
  }
}

const mapDispatchToProps = dispatch => {
  return{
    signIn: (username, password) => {
      axios
        .post("https://relaonebinar.herokuapp.com/api/member/login", {
          'username':username,
          'password':password
        })
        .then(res => {
          console.log(res);
          dispatch(signIn(username, password, res.data.message));
          console.log(this.props)

        })
        .catch(err => {
          console.log(err.response);
        });
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
