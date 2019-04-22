import React, { Component } from 'react'
import TopNavbar from '../layout/Admin/TopNavbar'
import ContentPage from '../layout/Admin/SkillSetNew'
import LeftSidebar from '../layout/Admin/LeftSidebarSkillSet'

export default class AddNewSkillSet extends Component {
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
