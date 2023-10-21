import React from 'react'
import DOMPurify from 'dompurify'
import { useGetPostsQuery, useGetPostsByUserIdQuery } from '@/features/posts/postsApiSlice'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import PostCardTime from '@/features/posts/components/creation/creation-postpage/PostCardTime'
import { useGetUserByIdQuery } from '@/features/users/usersApiSlice'
import { Link, useNavigate, useParams } from 'react-router-dom'
import ClipLoader from 'react-spinners/ClipLoader'

const CreationPostCard = ({ type }) => {
  const { id } = useParams()

  const {
    data,
    isLoading,
    isSuccess: userSuccess,
    isError,
    error,
  } = type === 'profile' && id
    ? useGetPostsByUserIdQuery(id)
    : useGetPostsQuery('Posts', {
        pollingInterval: 5 * 60 * 1000,
        refetchOnFocus: false,
        refetchOnMountOrArgChange: true,
      })

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>No posts {error.message}</div>
  }

  if (type === 'profile' && userSuccess && !isLoading && !isError) {
    return (
      <div>
        {data?.map((post) => (
          <PostCard key={post._id} postId={post._id} post={post} />
        ))}
      </div>
    )
  } else {
    ;<p>No posts</p>
  }

  if (type === undefined && userSuccess) {
    return (
      <div>
        {data.ids.map((postId) => (
          <PostCard key={postId} postId={postId} post={data.entities[postId]} />
        ))}
      </div>
    )
  }

  // Default fallback
  return null
}

const PostCard = ({ postId, post }) => {
  const navigate = useNavigate()
  const handlePostClick = () => {
    navigate(`/dash/creationpostpage/${postId}`)
  }

  const { data: userData, isLoading: userLoading, isSuccess: userSuccess } = useGetUserByIdQuery(post?.author)

  if (userLoading) {
    return (
      <div>
        <ClipLoader color="#00000" />
      </div>
    )
  }

  if (userSuccess) {
    const author = userData
    const likeCount = Object.keys(post.likes).length
    const saveCount = Object.keys(post.saves).length
    const interactions = likeCount + saveCount
    const dirty = post.content.length > 150 ? `${post.content.slice(0, 180)}...` : post.content
    const clean = DOMPurify.sanitize(dirty, { USE_PROFILES: { html: true } })

    return (
      <Card className="mt-5 break-inside-avoid sm:m-0 sm:mb-4 lg:mb-6">
        <CardHeader className="p-4">
          <div className="flex items-center justify-between">
            <Button variant="normal" size="normal">
              <Link to={`/dash/profile/${author._id}`}>
                <div className="flex items-center">
                  <div>
                    <img className="h-9 w-9 rounded-full" src={author.profilePicture || ''} alt="profile" />
                  </div>
                  <div className="pl-4">{author.username}</div>
                </div>
              </Link>
            </Button>

            <div className="pr-2">
              <PostCardTime timestamp={post.timestamp} />
            </div>
          </div>
        </CardHeader>
        <CardContent className="px-4 pb-2">
          <h1 className="line-clamp-2 text-sm font-semibold leading-normal">{post.title}</h1>
          <div
            className="text-foreground pt-2  text-sm	leading-normal"
            onClick={handlePostClick}
            style={{
              cursor: 'pointer',
              overflow: 'hidden',
              whiteSpace: 'wrap',
              wordWrap: 'break-word',
            }}
            dangerouslySetInnerHTML={{ __html: clean }}
          ></div>
        </CardContent>

        <CardFooter className="p-4">
          <div className="flex items-center">
            <div>
              <Button variant="normal" size="normal">
                {interactions}
              </Button>
            </div>
            <div className="pl-3">
              <Button
                variant="normal"
                size="normal"
                className="text-secondary-foreground
                "
              >
                Share
              </Button>
            </div>
            <div className="pl-3">
              <Button
                variant="normal"
                size="normal"
                className="text-secondary-foreground
                "
              >
                Save
              </Button>
            </div>
          </div>
        </CardFooter>
      </Card>
    )
  }

  // Default fallback
  return null
}

export default CreationPostCard
