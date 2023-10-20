import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Assets from '@/assets/Assets'
import useAuth from '@/hooks/useAuth'

const DashFooter = () => {
  const { userId } = useAuth()

  const location = useLocation()
  const [activeNav, setActiveNav] = useState('')

  const handleNavClick = (nav) => {
    setActiveNav(nav)
  }

  React.useEffect(() => {
    setActiveNav(location.pathname)
  }, [location])

  const shouldShowFooter = ['/dash/search', '/dash/communities', `/dash/profile/${userId}`, '/dash'].includes(
    location.pathname,
  )

  // const shouldShowFooter = ['/dash/search', '/dash/communities', '/dash/profile', '/dash'].some(path => location.pathname.startsWith(path));

  return (
    shouldShowFooter && (
      <footer>
        <nav className="fixed bottom-0 left-0 flex w-full flex-row justify-between bg-[#f7f7f7] px-10 py-3 sm:justify-around">
          <Link to="/dash" onClick={() => handleNavClick('/dash')}>
            <img className="h-8 w-8" src={activeNav === '/dash' ? Assets.homeActive : Assets.home} alt="Home" />
          </Link>
          <Link to="/dash/search" onClick={() => handleNavClick('/dash/search')}>
            <img
              className="h-8 w-8"
              src={activeNav === '/dash/search' ? Assets.searchActive : Assets.search}
              alt="Search"
            />
          </Link>
          <Link to="/dash/communities" onClick={() => handleNavClick('/dash/communities')}>
            <img
              className="h-8 w-8"
              src={activeNav === '/dash/communities' ? Assets.worldActive : Assets.world}
              alt="Communities"
            />
          </Link>
          <Link to={`/dash/profile/${userId}`} onClick={() => handleNavClick(`/dash/profile/${userId}`)}>
            <img
              className="h-8 w-8"
              src={activeNav === `/dash/profile/${userId}` ? Assets.profileActive : Assets.profile}
              alt="Profile"
            />
          </Link>
        </nav>
      </footer>
    )
  )
}

export default DashFooter
