import React, { useState } from 'react'
import CommunityProfileCard from '@/features/community/components/explore/CommunityProfileCard'
import Assets from '@/assets/Assets'
import { Card, CardHeader, CardDescription, CardTitle } from '@/components/ui/card'

const communityPopulars = [
  { name: 'Art Community', members: '100', dp: Assets.art },
  {
    name: 'Cinematography Community',
    members: '999',
    dp: Assets.cinematography,
  },
  { name: 'Music Community', members: '12.6K', dp: Assets.music },
  { name: 'Photography Community', members: '2.6K', dp: Assets.photography },
]

const FilterTabs = () => {
  const [activeTab, setActiveTab] = useState('popular')

  const handleTabClick = (tab) => {
    setActiveTab(tab)
  }

  function renderTab(tabName, tabText) {
    const isActive = activeTab === tabName

    return (
      <div
        className={`px-3 pb-5 ${
          isActive
            ? 'text-primary font-semibold underline decoration-inherit decoration-solid underline-offset-8'
            : 'font-semibold'
        }`}
        onClick={() => handleTabClick(tabName)}
      >
        {tabText}
      </div>
    )
  }

  function renderPopularContent() {
    return (
      <div className="sm:columns-2 sm:gap-4  lg:gap-6">
        <CommunityProfileCard />
      </div>
    )
  }

  function renderNewContent() {
    return (
      <div>
        <Card>
          <CardHeader>
            <CardTitle>New</CardTitle>
            <CardDescription>coming soon...</CardDescription>
          </CardHeader>
        </Card>
      </div>
    )
  }

  function renderAllContent() {
    return (
      <div>
        <Card>
          <CardHeader>
            <CardTitle>All</CardTitle>
            <CardDescription>coming soon...</CardDescription>
          </CardHeader>
        </Card>
      </div>
    )
  }

  return (
    <div>
      <div className="mx-5 flex overflow-x-scroll whitespace-nowrap  pt-6 sm:mx-8 lg:overflow-hidden lg:pt-8">
        {renderTab('popular', 'Popular')}
        {renderTab('new', 'New')}
        {renderTab('all', 'All')}
      </div>

      <div className=" text-muted-foreground mx-4 mt-5 text-lg font-normal lg:mx-6 ">
        {/* Display content based on the activeTab */}
        {activeTab === 'popular' && renderPopularContent()}
        {activeTab === 'new' && renderNewContent()}
        {activeTab === 'all' && renderAllContent()}
        {/* Add more content divs and corresponding MongoDB queries */}
      </div>
    </div>
  )
}

export default FilterTabs
