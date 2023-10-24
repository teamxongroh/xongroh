import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'

const FeedbackForm = ({
  handleSubmit,
  submitLabel,
  hasCancelButton = false,
  handleCancel,
  initialText = '',
  postId,
}) => {
  const [text, setText] = useState(initialText)
  const isTextareaDisabled = text.length === 0
  const onSubmit = (event) => {
    event.preventDefault()
    handleSubmit(text, null, postId)
    setText('')
  }

  return (
    <form onSubmit={onSubmit} className="pt-4">
      <Textarea
        className=" h-24 rounded-xl"
        placeholder="Share your thoughts..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button
        variant="normal"
        size="normal"
        className="text-secondary-foreground mx-1 my-4"
        disabled={isTextareaDisabled}
      >
        {submitLabel}
      </Button>
      {hasCancelButton && (
        <Button variant="normal" size="normal" className="mx-3" onClick={handleCancel}>
          Cancel
        </Button>
      )}
    </form>
  )
}

export default FeedbackForm
