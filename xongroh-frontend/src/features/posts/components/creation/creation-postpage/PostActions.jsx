import { Button } from '@/components/ui/button'

const PostActions = ({ postData, isLiked, isSaved, onLikeClick, onSaveClick, onShareClick, numberOfLikes }) => {
  return (
    <div className="flex gap-3 overflow-x-scroll px-4 py-4 lg:gap-5 lg:overflow-hidden lg:px-6">
      <div>
        <Button
          variant="normal"
          size="normal"
          onClick={onLikeClick}
          className={isLiked ? 'text-secondary-foreground' : ''}
        >
          {isLiked ? 'Supports' : 'Support'}
          <span className="pl-1 text-xs">({numberOfLikes})</span>
        </Button>
      </div>

      <div>
        <Button
          variant="normal"
          size="normal"
          onClick={onSaveClick}
          className={isSaved ? 'text-secondary-foreground' : ''}
        >
          {isSaved ? 'Saved' : 'Save'}
          <span className="pl-1 text-xs"></span>
        </Button>
      </div>
      <div>
        <Button variant="normal" size="normal" onClick={onShareClick}>
          Share
        </Button>
      </div>
    </div>
  )
}

export default PostActions
