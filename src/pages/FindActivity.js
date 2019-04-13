import React, { Component } from 'react'
import NavigationBar from '../layout/NavigationBar'
import Footer from '../layout/Footer'

export default class FindActivity extends Component {
  render() {
    return (
      <div>
        <NavigationBar/>
        <div style={{marginTop: '300px'}}>
            WE HAVE 94360 VOLUNTEER 
            THEY ARE READY TO HELP YOU
        </div>
        <Footer/>
      </div>
    )
  }
}
