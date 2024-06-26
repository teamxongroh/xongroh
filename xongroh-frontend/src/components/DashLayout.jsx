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
      {isLargeScreen ? (
        <>
          <div className="flex flex-col h-screen">
            <DashHeader />
            <div className="flex flex-1 overflow-hidden">
              <LeftBar />
              <main className="w-1/2 overflow-y-auto">
                <Outlet />
              </main>
              <RightBar />
            </div>
          </div>
        </>
      ) : (
        <>
          <DashHeader />
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
