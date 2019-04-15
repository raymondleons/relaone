import React, { Component } from 'react'
import TopNavbar from '../Admin/TopNavbar'
import ContentPage from '../Admin/UserContentPage'
import LeftSidebar from '../Admin/LeftSidebarUser'
import Footer from './Footer'
import '../../assets/css/admin/style.css'

export default class DashboardPage extends Component {

  componentDidMount() {
    document.title= "AdminPanel - Relaone"
  }
  render() {
    return (
      <div id="adminbody">
        <TopNavbar></TopNavbar>
        <ContentPage></ContentPage>
        <LeftSidebar></LeftSidebar>
      </div>
    )
  }
}
