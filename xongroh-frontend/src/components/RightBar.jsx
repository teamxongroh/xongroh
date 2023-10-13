import React from 'react'
import CreatorProfileCard from '@/features/search/components/CreatorProfileCard'

const RightBar = () => {
  

  return (
    <nav className="full-w sticky top-20 ml-3 flex  h-screen flex-col bg-[#FCFCFC] p-1 pt-6 shadow-lg overflow-y-scroll ">
      <div className="px-6">
        <h2 className="pt-6 text-lg font-bold">Similar Minds</h2>
        <div className="pt-2 lg:columns-1">
          <CreatorProfileCard />
        </div>
      </div>
    </nav>
  )
}

export default RightBar
