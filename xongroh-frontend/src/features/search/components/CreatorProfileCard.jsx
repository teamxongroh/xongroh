import React from 'react'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Link } from 'react-router-dom'
import { useGetUsersQuery } from '@/features/users/usersApiSlice'
import useAuth from '@/hooks/useAuth'
import { useGetUserByIdQuery } from '@/features/users/usersApiSlice'

const CreatorProfileCardItem = ({ name, username, profilePicture, userId, currentUserId }) => {
  const {
    data,
    isLoading: userLoading,
    isSuccess: userSuccess,
    isError: userError,
  } = useGetUserByIdQuery(currentUserId)

  if (userId === currentUserId) {
    return null
  }

  return (
    <Card className="mt-5 break-inside-avoid sm:m-0 sm:mb-4 lg:mb-6">
      <div className="flex items-center justify-between p-3">
        <div>
          <Link to={`/dash/profile/${userId}`}>
            <CardHeader className="p-0 pl-2">
              <div className="flex items-center">
                <img className="h-12 w-12 rounded-full" src={profilePicture} alt="profile" />
                <div className="pl-3">
                  <CardTitle>{name}</CardTitle>
                  <CardDescription>@{username}</CardDescription>
                </div>
              </div>
            </CardHeader>
          </Link>
        </div>
      </div>
    </Card>
  )
}

const CreatorProfileCard = () => {
  const { userId: currentUserId } = useAuth()

  const {
    data: users,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetUsersQuery('usersList', {
    pollingInterval: 5 * 60 * 1000,
    refetchOnFocus: false,
    refetchOnMountOrArgChange: true,
  })

  let content = null

  if (isLoading) {
    content = <p>Loading...</p>
  }

  if (isError) {
    content = <p className="errmsg">{error?.data?.message}</p>
  }

  if (isSuccess) {
    content = users?.ids?.length ? (
      users.ids.map((userId) => (
        <div key={userId}>
          <CreatorProfileCardItem
            name={users.entities[userId].name}
            username={users.entities[userId].username}
            profilePicture={users.entities[userId].profilePicture}
            userId={userId}
            currentUserId={currentUserId}
          />
        </div>
      ))
    ) : (
      <p>No users found.</p>
    )
  }

  return <div>{content}</div>
}

export default CreatorProfileCard
