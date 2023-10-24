import React from 'react'

const PostTimeStamp = ({ timestamp }) => {
  function formatTimestamp(timestamp) {
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

  return (
    <div className="items px-6 pb-10 lg:px-8">
      <p className="text-muted-foreground text text-xs italic ">Created at {formatTimestamp(timestamp)}</p>
    </div>
  )
}

export default PostTimeStamp
