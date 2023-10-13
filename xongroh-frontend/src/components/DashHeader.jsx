import React, { useEffect } from 'react'
import Assets from '@/assets/Assets'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { useSendLogoutMutation } from '@/features/auth/authApiSlice'

function DashHeader() {
  // Get the current location from react-router-dom
  const location = useLocation()

  // Define a mapping of custom names for non-homepage routes
  const customRouteNames = {
    '/dash/notifications': 'Notifications',
    '/dash/messages': 'Messages',
    '/dash/search': 'Find',
    '/dash/communities': 'Communities',
    '/dash/mydrafts': 'My Drafts',
    '/dash/mydiscussions': 'My Discussions',
    '/dash/portfolio': 'Portfolio',
  }

  const navigate = useNavigate()
  const [sendLogout, { isLoading, isSuccess, isError, error }] = useSendLogoutMutation()

  useEffect(() => {
    if (isSuccess) navigate('/')
  }, [isSuccess, navigate])

  if (isLoading) return <p>Logging Out...</p>

  if (isError) return <p>Error: {error.data?.message}</p>

  // Function to render the appropriate content based on the route
  const renderContent = () => {
    // Check if the current route is the homepage ("/")
    if (location.pathname === '/dash') {
      return (
        <>
          <div className="flex items-center justify-between px-5 py-3 lg:px-12 lg:pt-4">
            <div className="flex items-center space-x-4">
              <div>
                <img className="h-10 w-10 lg:h-12 lg:w-12" src={Assets.xongroh} alt="xongroh" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">xongroh</h1>
              </div>
            </div>

            <div className="flex flex-row space-x-6">
              <Link to="notifications">
                <img className="h-8 w-8" src={Assets.bell} alt="notification" />
              </Link>
              <Link to="messages">
                <img className="h-8 w-8" src={Assets.chat} alt="chat" />
              </Link>
              <button className="icon-button pl-0 sm:pl-4" title="Logout" onClick={sendLogout}>
                <img src={Assets.logout} alt="Logout" />
              </button>
            </div>
          </div>
        </>
      )
    } else {
      if (customRouteNames[location.pathname]) {
        return (
          <>
            {' '}
            <div className="py-4 pl-4">
              <div className="flex text-xl font-bold items-center">
                <div className="pr-1">
                  <Link to="/dash">
                    <Button className="p-0" variant="link">
                      <img src={Assets.back} alt="" />
                    </Button>
                  </Link>
                </div>
                <div className="pl-2 text-2xl font-bold">{customRouteNames[location.pathname]}</div>
              </div>
            </div>
          </>
        )
      } else if (location.pathname.includes('/dash/profile') && location.pathname.includes('/createpost')) {
        return (
          <div className="py-4 pl-4">
            <div className="flex text-xl font-bold items-center">
              <div className="pr-1">
                <Link to="/dash">
                  <Button className="p-0" variant="link">
                    <img src={Assets.back} alt="" />
                  </Button>
                </Link>
              </div>
              <div className="pl-2 text-2xl font-bold">Create post</div>
            </div>
          </div>
        )
      } else if (location.pathname.startsWith('/dash/profile/')) {
        return (
          <div className="py-4 pl-4">
            <div className="flex text-xl font-bold items-center">
              <div className="pr-1">
                <Link to="/dash">
                  <Button className="p-0" variant="link">
                    <img src={Assets.back} alt="" />
                  </Button>
                </Link>
              </div>
              <div className="pl-2 text-2xl font-bold">Profile</div>
            </div>
          </div>
        )
      } else {
        return (
          <>
            <div className="py-4">
              <Link to="/dash">
                <Button className="text-md font-semibold text-secondary-foreground" variant="link">
                  <img src={Assets.back} alt="" className="h-5 pr-1" /> Back
                </Button>
              </Link>
            </div>
          </>
        )
      }
    }
  }

  return (
    <header>
      <div className="bg-[#FAFAFA]">
        <div className="lg:hidden">{renderContent()}</div>
        {/* For Large Screens */}
        <div className="hidden lg:block">
          <div className="flex items-center justify-between px-5 py-3 lg:pl-12 lg:pt-4">
            <div className="flex items-center space-x-4">
              <div>
                <img className="h-10 w-10 lg:h-12 lg:w-12" src={Assets.xongroh} alt="xongroh" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">xongroh</h1>
              </div>
            </div>

            <div className="flex flex-row space-x-6">
              <Link to="notifications" className="flex items-center space-x-2">
                <img className="h-8 w-8" src={Assets.bell} alt="notification" />
                <span className="font-medium">Notifications </span>
              </Link>
              <Link to="messages" className="flex items-center space-x-2">
                <img className="h-8 w-8" src={Assets.chat} alt="chat" />
                <span className="font-medium">Messages </span>
              </Link>
              <button className="icon-button" title="Logout" onClick={sendLogout}>
                <div className="pl-6 flex items-center space-x-1">
                  <img className='h-5 w-5' src={Assets.logout} alt="Logout" />
                  <p className="text-sm text-muted-foreground">Signout</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default DashHeader
