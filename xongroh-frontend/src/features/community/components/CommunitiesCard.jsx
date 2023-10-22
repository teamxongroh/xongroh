import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Assets from '@/assets/Assets'
import PopularCommunityFeed from '@/features/community/components/explore/PopularCommunityFeed'
import MyCommunitiesFeed from '@/features/community/components/my-communities/MyCommunitiesFeed'
import { Link } from 'react-router-dom'

const CommunitiesCard = () => {
  const [activeTab, setActiveTab] = useState('My Communities')

  const handleTabClick = (tab) => {
    setActiveTab(tab)
  }

  return (
    <div className="header my-4 overflow-hidden">
      <div className="flex items-center space-x-2 p-5 pb-4 pt-6">
        <Input type="text" placeholder="Search..." />
        <Link to="/commsearchresult">
          {' '}
          <Button variant="outline" size="icon">
            <img className="h-4 w-4" src={Assets.searchActive} alt="Search" />
          </Button>
        </Link>
      </div>
      <div className=" mx-6 flex justify-start gap-6 pt-8 font-semibold">
        <div>
          <Button
            size="normal"
            variant={activeTab === 'Explore' ? 'normal' : 'normal'}
            className={`${activeTab === 'Explore' ? ' text-primary lg:px-6' : ' text-secondary-foreground lg:px-6'}`}
            onClick={() => handleTabClick('Explore')}
          >
            Explore
          </Button>
        </div>
        <div>
          <Button
            size="normal"
            variant={activeTab === 'My Communities' ? 'normal' : 'normal'}
            className={`${
              activeTab === 'My Communities' ? 'text-primary lg:px-6' : 'text-secondary-foreground lg:px-6'
            }`}
            onClick={() => handleTabClick('My Communities')}
          >
            My Communities
          </Button>
        </div>
      </div>

      {/* Conditional rendering based on activeTab */}
      {activeTab === 'Explore' && (
        <div>
          <PopularCommunityFeed />
        </div>
      )}

      {activeTab === 'My Communities' && (
        <div>
          <MyCommunitiesFeed />
        </div>
      )}
    </div>
  )
}

export default CommunitiesCard
