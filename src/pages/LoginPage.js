import React, { Component } from 'react'
import { Button } from 'reactstrap';
import Logo from '../assets/images/blue-logo.png';
import Img from '../assets/images/image1.png'
import { Link as Links} from 'react-router-dom';

export default class LoginPage extends Component {

    componentDidMount(){
        document.title= "Login - RelaOne"
    }

  render() {
    return (
      <div>
        <div className=" my-4 logo">
        <Links to="/"><img src={Logo} alt=""/></Links>
        </div>
          <div className="containers">
              <div className="row">
                <div className="col-sm-8.5">
                    <img className="images" src={Img} alt=""/>
                </div>
                <div className="col-sm-3.5">
                    <h3>Login</h3>
                    <p className="title">Email</p>
                    <input type="texts" id="email" name="email"></input>
                    <p className="title">Kata Sandi</p>
                    <input type="texts" id="password" name="password"></input>
                    <div className="mt-3 ml-2">
                      <a href="#">Lupa kata kunci?</a>
                      <Button style={{float:"right"}} color="primary">Login</Button>{' '}
                    </div>
                    <div>
                      <p className="text">Belum punya akun? Silahkan daftar <Links to="/register">disini</Links></p>
                    </div>
                </div>
              </div>
          </div>
      </div>
    )
  }
}

