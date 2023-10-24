import FeedbackForm from './FeedbackForm'
import { Button } from '@/components/ui/button'
import Assets from '@/assets/Assets'
import { useGetUserByIdQuery } from '@/features/users/usersApiSlice'
import { useState, useEffect } from 'react'
import { useLikeFeedbackMutation } from '@/features/posts/postsApiSlice'
import PostCardTime from '@/features/posts/components/creation/creation-postpage/PostCardTime'

const Feedback = ({
  feedback,
  replies,
  setActiveFeedback,
  activeFeedback,
  updateFeedback,
  deleteFeedback,
  addFeedback,
  parentId = null,
  currentUserId,
  postId,
}) => {
  const isEditing = activeFeedback && activeFeedback.id === feedback._id && activeFeedback.type === 'editing'
  const isReplying = activeFeedback && activeFeedback.id === feedback._id && activeFeedback.type === 'replying'
  const fiveMinutes = 300000
  const timePassed = new Date() - new Date(feedback.timestamp) > fiveMinutes
  const canDelete = currentUserId === feedback.author && replies.length === 0 && !timePassed
  const canReply = Boolean(currentUserId)
  const canEdit = currentUserId === feedback.author && !timePassed
  const replyId = parentId !== null ? parentId : feedback._id

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp)
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    }
    return date.toLocaleDateString('en-US', options)
  }

  const [likeFeedback, { data, isLoading, isSuccess, isError, error }] = useLikeFeedbackMutation()

  const [isLiked, setIsLiked] = useState(false)
  const [numberOfLikes, setNumberOfLikes] = useState(0)

  const { data: userData, isLoading: userLoading, isSuccess: userSuccess } = useGetUserByIdQuery(feedback.author)

  const createdAt = formatTimestamp(feedback.timestamp)

  const handleLikeClick = async () => {
    try {
      if (isLiked) {
        await likeFeedback({ feedbackId: feedback._id })
        setIsLiked(false)
        setNumberOfLikes((prevNumberOfLikes) => prevNumberOfLikes - 1)
      } else {
        await likeFeedback({ feedbackId: feedback._id })
        setIsLiked(true)
        setNumberOfLikes((prevNumberOfLikes) => prevNumberOfLikes + 1)
      }
    } catch (error) {
      console.error('Error liking/unliking feedback:', error)
    }
  }

  useEffect(() => {
    if (feedback.likes && feedback.likes.hasOwnProperty(currentUserId)) {
      setIsLiked(true)
    } else {
      setIsLiked(false)
    }
    const likeCount = Object.keys(feedback.likes).length
    setNumberOfLikes(likeCount)
  }, [feedback])

  return (
    <div key={feedback._id} className="pl-3 pt-8 text-sm">
      <div className="flex items-center gap-2">
        <div>
          <img className="h-6 w-6 rounded-full" src={userData?.profilePicture || ''} alt="profile" />
        </div>
        <div className=" text-primary text-lg font-bold ">{userData?.username}</div>
      </div>
      <div className="text-secondary-foreground mr-2 text-base font-semibold ">
        {!isEditing && <div className="pt-2 text-sm font-medium mx-1">{feedback.text}</div>}
        {isEditing && (
          <FeedbackForm
            submitLabel="Update"
            hasCancelButton
            initialText={feedback.text}
            handleSubmit={(text) => updateFeedback(text, feedback._id)}
            handleCancel={() => {
              setActiveFeedback(null)
            }}
          />
        )}
        <div className="comment-actions">
          {canReply && (
            <div className="flex px-1">
              <Button variant="link" onClick={handleLikeClick} className="text-secondary-foreground pl-0">
                <PostCardTime timestamp={feedback.timestamp} />
              </Button>
              <Button
                variant="link"
                className="pl-0"
                onClick={() => setActiveFeedback({ id: feedback._id, type: 'replying' })}
              >
                Reply
              </Button>
              <Button variant="link" onClick={handleLikeClick} className="text-secondary-foreground pl-0">
                <img src={Assets.heart} alt="hearts" className="pr-1" />
                {numberOfLikes}
              </Button>
            </div>
          )}
          {canEdit && (
            <Button
              variant="link"
              className="pl-0"
              onClick={() => setActiveFeedback({ id: feedback._id, type: 'editing' })}
            >
              Edit
            </Button>
          )}
          {canDelete && (
            <Button variant="link" className="pl-0" onClick={() => deleteFeedback(feedback._id)}>
              Delete
            </Button>
          )}
        </div>
        {isReplying && <FeedbackForm submitLabel="Reply" handleSubmit={(text) => addFeedback(text, replyId, postId)} />}
        {replies.length > 0 && (
          <div className="replies">
            {replies.map((reply) => (
              <Feedback
                feedback={reply}
                key={reply._id}
                setActiveFeedback={setActiveFeedback}
                activeFeedback={activeFeedback}
                updateFeedback={updateFeedback}
                deleteFeedback={deleteFeedback}
                addFeedback={addFeedback}
                parentId={feedback._id}
                replies={[]}
                currentUserId={currentUserId}
                postId={postId}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Feedback
