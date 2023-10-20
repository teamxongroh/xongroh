import React, { Component } from 'react'
import CreationPostCard from '@/features/posts/components/creation/CreationPostCard'

import { Card, CardHeader, CardDescription, CardTitle } from '@/components/ui/card'

class FilterTabs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeTab: 'new',
    }
  }

  handleTabClick = (tab) => {
    this.setState({ activeTab: tab })
  }

  render() {
    const { activeTab } = this.state

    return (
      <div>
        <div className="mx-5 flex overflow-x-scroll whitespace-nowrap  lg:mx-8 lg:overflow-hidden">
          {this.renderTab('new', 'New')}
          {this.renderTab('popular', 'Popular')}
          {this.renderTab('saved', 'Saved')}
        </div>

        <div className="text-muted-foreground mx-4 my-6 text-lg font-normal lg:mx-6">
          {activeTab === 'new' && this.renderNewContent()}
          {activeTab === 'popular' && this.renderPopularContent()}
          {activeTab === 'saved' && this.renderSavedContent()}
        </div>
      </div>
    )
  }

  renderTab(tabName, tabText) {
    const { activeTab } = this.state
    const isActive = activeTab === tabName

    return (
      <div
        className={` p-2 px-3 ${
          isActive
            ? 'text-primary font-semibold underline decoration-inherit decoration-solid underline-offset-8'
            : 'font-semibold'
        }`}
        onClick={() => this.handleTabClick(tabName)}
      >
        {tabText}
      </div>
    )
  }

  renderNewContent() {
    return (
      <div className="pb-2 sm:columns-2 sm:gap-4 lg:gap-6">
        <CreationPostCard />
      </div>
    )
  }

  renderPopularContent() {
    return (
      <div>
        <CreationPostCard />
      </div>
    )
  }

  renderSavedContent() {
    return (
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Saved</CardTitle>
            <CardDescription>No saved posts found.</CardDescription>
          </CardHeader>
        </Card>
      </div>
    )
  }
}

export default FilterTabs
