import React, { useState, useEffect } from 'react'
import Assets from '@/assets/Assets'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import CreatorProfileCard from '@/features/search/components/CreatorProfileCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { useSendLogoutMutation } from '@/features/auth/authApiSlice'



const RightBar = () => {
  const navigate = useNavigate()
  const [sendLogout, { isLoading, isSuccess, isError, error }] = useSendLogoutMutation()
  useEffect(() => {
    if (isSuccess) navigate('/')
  }, [isSuccess, navigate])

  if (isLoading) return <p>Logging Out...</p>
  if (isError) return <p>Error: {error.data?.message}</p>

  return (
    <nav className="full-w sticky top-0 ml-3 flex  h-screen flex-col bg-[#FCFCFC] p-1 pt-6 shadow-lg overflow-y-scroll ">
      <div className="px-6">
        <h2 className="pt-6 text-lg font-bold">Similar Minds</h2>
        <div className="pt-2 lg:columns-1"><CreatorProfileCard /></div>
      </div>
    </nav>
  )
}

export default RightBar
