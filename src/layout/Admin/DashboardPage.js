import React, { Component } from 'react'
import TopNavbar from '../Admin/TopNavbar'
import ContentPage from '../Admin/ContentPage'
import LeftSidebar from '../Admin/LeftSidebar'
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
