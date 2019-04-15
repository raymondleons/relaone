import React, { Component } from 'react'
import TopNavbar from '../Admin/TopNavbar'
import ContentPage from '../../pages/admin/OrganizationDashboard'
import LeftSidebar from '../Admin/LeftSidebarOrganization'

export default class OrganizationPage extends Component {
  render() {
    return (
      <div>
      <TopNavbar></TopNavbar>
      <ContentPage></ContentPage>
      <LeftSidebar></LeftSidebar>
      </div>
    )
  }
}
