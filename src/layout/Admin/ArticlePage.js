import React, { Component } from 'react'
import TopNavbar from '../Admin/TopNavbar'
import ContentPage from '../../pages/admin/ArticleDashboard'
import LeftSidebar from '../Admin/LeftSidebarArticle'

export default class ArticlePage extends Component {
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
