import React, { useState, useEffect } from 'react'
import Assets from '@/assets/Assets'
import { Link, useLocation, useNavigate } from 'react-router-dom'
// import CommunityProfileList from '@/features/community/components/explore/CommunityProfileList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { useSendLogoutMutation } from '@/features/auth/authApiSlice'

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

const RightBar = () => {
  const navigate = useNavigate()
  const [sendLogout, { isLoading, isSuccess, isError, error }] = useSendLogoutMutation()
  useEffect(() => {
    if (isSuccess) navigate('/')
  }, [isSuccess, navigate])

  if (isLoading) return <p>Logging Out...</p>
  if (isError) return <p>Error: {error.data?.message}</p>

  return (
    <nav className="w-2/7 sticky top-0 ml-3 flex  h-screen flex-col bg-[#FCFCFC] p-1 pt-6 shadow-lg overflow-y-scroll ">
      <div className="px-6">
        <h2 className="pt-8 text-lg font-bold">Similar Minds</h2>
        <div className="pt-8 lg:columns-1">{/* <CommunityProfileList communityCards={communityPopulars} /> */}</div>
      </div>
    </nav>
  )
}

export default RightBar
