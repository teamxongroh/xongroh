import React, { Component } from 'react'
import CreatorProfileCard from '@/features/search/components/CreatorProfileCard'
import CreationPostCard from '@/features/posts/components/creation/CreationPostCard'
import { Card, CardHeader, CardDescription, CardTitle } from '@/components/ui/card'

class FilterTabs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeTab: 'creator', // Default active tab
    }
  }

  handleTabClick = (tab) => {
    this.setState({ activeTab: tab })
  }

  render() {
    const { activeTab } = this.state

    return (
      <div>
        <div className="mx-5 flex overflow-x-scroll whitespace-nowrap lg:mx-8 lg:overflow-hidden">
          {this.renderTab('creator', 'Creators')}
          {this.renderTab('creation', 'Creations')}
          {/* {this.renderTab('course', 'Courses')}
          {this.renderTab('event', 'Events')} */}
        </div>

        <div className="text-muted-foreground mx-4 my-8 text-lg font-normal lg:mx-6">
          {/* Display content based on the activeTab */}
          {activeTab === 'creator' && this.renderCreatorContent()}
          {activeTab === 'creation' && this.renderCreationContent()}
          {/* {activeTab === 'course' && this.renderCourseContent()}
          {activeTab === 'event' && this.renderEventContent()} */}
          {/* Add more content divs and corresponding MongoDB queries */}
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

  renderCreatorContent() {
    return (
      <div className="pb-2 sm:columns-2 sm:gap-4 lg:gap-6">
        <CreatorProfileCard />
      </div>
    )
  }

  renderCreationContent() {
    return (
      <div className="pb-2 sm:columns-2 sm:gap-4 lg:gap-6">
        {' '}
        <CreationPostCard />
      </div>
    )
  }

  // renderCourseContent() {
  //   return (
  //     <div className="pb-16">
  //       <Card>
  //         <CardHeader>
  //           <CardTitle>Courses</CardTitle>
  //           <CardDescription>coming soon...</CardDescription>
  //         </CardHeader>
  //       </Card>
  //     </div>
  //   )
  // }

  // renderEventContent() {
  //   return (
  //     <div>
  //       <Card className="justify-center">
  //         <CardHeader>
  //           <CardTitle>Events</CardTitle>
  //           <CardDescription>coming soon...</CardDescription>
  //         </CardHeader>
  //       </Card>
  //     </div>
  //   )
  // }
}

export default FilterTabs
