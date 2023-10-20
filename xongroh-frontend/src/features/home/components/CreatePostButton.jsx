import React from 'react'
import { Link, useParams } from 'react-router-dom'
import useAuth from '@/hooks/useAuth'
import { Button } from '@/components/ui/button'
import Assets from '@/assets/Assets'

const CreatePostButton = () => {
  const { userId } = useAuth()

  return (
    <Link to={`profile/${userId}/createpost`}>
     <Button
        variant="normal"
        className="fixed bottom-20 right-6 h-16 w-16 rounded-full border bg-background shadow-none z-20"
        title="Create Post"
      >
        <img src={Assets.add} alt="" />
      </Button>
    </Link>
  )
}

export default CreatePostButton
