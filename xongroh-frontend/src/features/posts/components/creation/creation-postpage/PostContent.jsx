import DOMPurify from 'dompurify'

const PostContent = ({ postData }) => {
  const clean = DOMPurify.sanitize(postData.content, { USE_PROFILES: { html: true } })
  return (
    <div className="px-6 lg:px-8 pt-4 lg:pt-6">
      <h1 className="text-foreground pt-6 text-sm font-semibold leading-normal lg:text-base">{postData.title}</h1>
      <div
        className="pb-8 pt-4 text-sm leading-normal text-foreground lg:text-sm"
        style={{
          cursor: 'pointer',
          overflow: 'hidden',
          whiteSpace: 'wrap',
          wordWrap: 'break-word',
        }}
        dangerouslySetInnerHTML={{ __html: clean }}
      ></div>
    </div>
  )
}
export default PostContent
