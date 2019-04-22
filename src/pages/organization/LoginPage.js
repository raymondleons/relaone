import React from 'react';
import { Form, FormGroup, Label, Input, FormText, Button, Row, Col } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom'
import '../../assets/css/_style2.scss';
import Img from '../../assets/images/organization-img.jpg'
import Logo from '../../assets/images/blue-logo.png'
import { signIn } from "../../actions/organizationActions";
import axios from 'axios'
import { connect } from "react-redux";
import { getRole } from "../../actions/mainActions";


class LoginPage extends React.Component {

  componentDidMount(){
    document.title= "Login Organization - RelaOne"
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

  render() {
    this.props.role === "organization" && this.props.history.push("/organization/dashboard")
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
                  <Form onSubmit={this.onSubmit}>
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
                      Don't have an account? <Link to='/organization/register'>Register here.</Link>
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
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: (username, password) => {
      dispatch(signIn(username, password));
    },
    getRole: () => {
      dispatch(getRole())
    }
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoginPage)
);