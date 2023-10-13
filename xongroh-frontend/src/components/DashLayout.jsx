import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import DashHeader from '@/components/DashHeader'
import DashFooter from '@/components/DashFooter'
import LeftBar from '@/components/LeftBar'
import RightBar from '@/components/RightBar'

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(window.matchMedia(query).matches)

  useEffect(() => {
    const mediaQuery = window.matchMedia(query)
    const handler = (event) => setMatches(event.matches)

    mediaQuery.addEventListener('change', handler)

    return () => mediaQuery.removeEventListener('change', handler)
  }, [query])

  return matches
}

const DashLayout = () => {
  const isLargeScreen = useMediaQuery('(min-width: 1024px)')

  return (
    <>
      <DashHeader />
      {isLargeScreen ? (
        <div className="flex">
          <div className="w-1/4">
            <LeftBar />
          </div>
          <div className="w-1/2 mt-20">
            <Outlet />
          </div>
          <div className="w-1/4">
            <RightBar />
          </div>
        </div>
      ) : (
        <>
          <main className="mb-16">
            <Outlet />
          </main>
          <DashFooter />
        </>
      )}
    </>
  )
}

export default DashLayout
