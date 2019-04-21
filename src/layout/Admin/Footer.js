import React, { Component } from 'react'
import '../../assets/css/admin/style.css'

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <span className="text-right">
        Copyright <a target="_blank" href="#">Your Website</a>
        </span>
        <span className="float-right">
		Powered by <a target="_blank" href="https://www.pikeadmin.com"><b>Pike Admin</b></a>
		</span>
      </footer>
    )
  }
}
