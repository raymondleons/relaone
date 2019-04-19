import React from 'react';
import { Form, FormGroup, Label, Input, FormText, Button, Row, Col } from 'reactstrap';
import {Link} from 'react-router-dom'
import '../../assets/css/_style2.scss';
import Img from '../../assets/images/image1.png'
import Logo from '../../assets/images/blue-logo.png'
import { signup } from "../../actions/memberActions";
import { connect } from "react-redux";


class UserRegister extends React.Component {

  componentDidMount(){
    document.title= "RelaOne | Register for User"
}

  constructor(props) {
    super(props)
    this.state = {  
      email: '',
      fullname: '',
      username: '',
      password: ''
    };
  }
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    this.props.signup(
      this.state.fullname,
      this.state.username,
      this.state.email,
      this.state.password
    );
    this.setState({
      email: '',
      fullname: '',
      username: '',
      password: ''
    });
  };

  render() {
    return (
      <div className="container2">
        <div className=" my-4 logo" >
        <Link to="/"><img className="" src={Logo} alt=""/></Link>
        </div>
        <Row className="whitebg mbot">
          <Col md={6} className="nopadding">
            <img className="width" src={Img} alt=""/>
          </Col>
          <Col md={6} className="right">
          <Row className="box">
                  <Form className="" onSubmit={this.onSubmit}>
                  <FormGroup>
                      <Label >Full Name</Label>
                      <Input 
                        onChange={this.onChange}
                        value={this.state.fullname}
                        className="input-border" 
                        type="text" 
                        name="fullname" 
                        id="fullname" 
                        placeholder="Your Fullname" />
                    </FormGroup>
                    <FormGroup>
                      <Label >Username</Label>
                      <Input 
                        onChange={this.onChange}
                        value={this.state.username}
                        className="input-border"
                        type="text" 
                        name="username" 
                        id="username" 
                        placeholder="Your Username" />
                    </FormGroup>
                    <FormGroup>
                      <Label >Email</Label>
                      <Input 
                        onChange={this.onChange}
                        value={this.state.email}
                        className="input-border" 
                        type="email" 
                        name="email" 
                        id="email" 
                        placeholder="Your Email" />
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
                        placeholder="Your Password" />
                    </FormGroup>
                    <FormText >
                      Creating an account means you’re okay with our <Link to='/terms' target='_blank' rel="noopener">Terms and Conditons</Link>
                    </FormText>
                    <Button color="primary button-right mt-3 ">Sign Up!</Button>
                    <FormText className=" clear text-center mtop">
                      Already have an account? <Link to='/Login'>Login here</Link>
                      , Or <Link to='/organization/register'>Register as Organization.</Link>
                    </FormText>
                  </Form>
                </Row>
          </Col>
        </Row>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    signup: (fullname, username, email, password) => {
      dispatch(signup(fullname, username, email, password))
    }  
  }
}

export default connect(
  null,
  mapDispatchToProps
)(UserRegister);
