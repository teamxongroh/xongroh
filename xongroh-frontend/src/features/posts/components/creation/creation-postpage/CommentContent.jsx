import Comment from './Comment'
import CommentForm from './CommentForm'
import { useState, useEffect } from 'react'
import { selectCurrentToken } from '@/features/auth/authSlice'
import { useSelector } from 'react-redux'

const CommentContent = ({ postId, currentUserId, comments }) => {
  //start----------hotfix----------------
  // hotfix-1
  const apiUrl = import.meta.env.VITE_API
  const authToken = useSelector(selectCurrentToken)

  async function commentTrig(apiUrl, authToken, text, parentId, postId) {
    try {
      const requestBody = { text, parentId }
      const response = await fetch(`${apiUrl}post/comments/${postId}`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          Authorization: `Bearer ${authToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      })

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      return response.json()
    } catch (error) {
      throw error
    }
  }

  // -----------------------------//
  // hotfix-2
  async function deleteCommentTrig(commentId) {
    try {
      const response = await fetch(`${apiUrl}post/comments/${commentId}`, {
        method: 'DELETE',
        credentials: 'include',
        headers: {
          Authorization: `Bearer ${authToken}`,
          'Content-Type': 'application/json',
        },
      })

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      return response.json()
    } catch (error) {
      throw error
    }
  }

  // hotfix-3
  async function updateCommentTrig(text, commentId) {
    try {
      const requestBody = { text }
      const response = await fetch(`${apiUrl}post/comments/${commentId}`, {
        method: 'PUT',
        credentials: 'include',
        headers: {
          Authorization: `Bearer ${authToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      })

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      return response.json()
    } catch (error) {
      throw error
    }
  }

  //end----------hotfix----------------
  const [backendComments, setBackendComments] = useState([])
  const [activeComment, setActiveComment] = useState(null)

  const rootComments = backendComments
    .filter((backendComment) => backendComment.parentId === null)
    .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))

  const getReplies = (commentId) =>
    backendComments
      .filter((backendComment) => backendComment.parentId === commentId)
      .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))

  const addComment = (text, parentId, postId) => {
    commentTrig(apiUrl, authToken, text, parentId, postId).then((comment) => {
      setBackendComments([comment.comment, ...backendComments])
      setActiveComment(null)
    })
  }

  const updateComment = (text, commentId) => {
    updateCommentTrig(text, commentId).then(() => {
      const updatedBackendComments = backendComments.map((backendComment) => {
        if (backendComment._id === commentId) {
          return { ...backendComment, text: text }
        }
        return backendComment
      })
      setBackendComments(updatedBackendComments)
      setActiveComment(null)
    })
  }

  const deleteComment = (commentId) => {
    if (window.confirm('Are you sure you want to remove comment?')) {
      deleteCommentTrig(commentId).then(() => {
        const updatedBackendComments = backendComments.filter((backendComment) => backendComment._id !== commentId)
        setBackendComments(updatedBackendComments)
      })
    }
  }

  useEffect(() => {
    setBackendComments(comments)
  }, [])

  return (
    <div>
      <CommentForm submitLabel="Comment" postId={postId} handleSubmit={addComment} />
      <div>
        {rootComments.map((rootComment) => (
          <Comment
            key={rootComment._id}
            comment={rootComment}
            replies={getReplies(rootComment._id)}
            activeComment={activeComment}
            setActiveComment={setActiveComment}
            addComment={addComment}
            deleteComment={deleteComment}
            updateComment={updateComment}
            currentUserId={currentUserId}
            postId={postId}
          />
        ))}
      </div>
    </div>

    // <div>
    //   <CommentList postId={postId} comments={sortedComments} />
    // </div>
  )
}

export default CommentContent
