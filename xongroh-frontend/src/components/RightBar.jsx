import React from 'react'
import CreatorProfileCard from '@/features/search/components/CreatorProfileCard'

const RightBar = () => {
  return (
    <aside className=" flex w-1/4 flex-col bg-[#FCFCFC] p-1 pt-6 shadow-lg overflow-y-auto ">
      <div className="px-6">
        <h2 className="pt-6 text-lg px-2 pb-6 font-bold">Similar Minds</h2>
        <div className="pt-2 lg:columns-1">
          <CreatorProfileCard />
        </div>
      </div>
    </aside>
  )
}

export default RightBar
