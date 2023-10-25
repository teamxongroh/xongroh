import React, { useState } from 'react'
import { useAddNewPostMutation } from '@/features/posts/postsApiSlice'
import convertToBase64 from '@/utils/convert'
import useAuth from '@/hooks/useAuth'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'

const CreatePost = () => {
  const { userId } = useAuth()
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    cover: null,
    author: userId,
  })

  const [createPost, { isLoading, isSuccess, isError, error }] = useAddNewPostMutation()

  const handleInputChange = async (e) => {
    const { name, value, files } = e.target

    if (name === 'cover') {
      const base64 = await convertToBase64(files[0])
      setFormData({
        ...formData,
        [name]: base64,
      })
    } else {
      setFormData({
        ...formData,
        [name]: value,
      })
    }
  }

  const handleContentChange = (value) => {
    setFormData({
      ...formData,
      content: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const postData = {
        title: formData.title,
        content: formData.content,
        author: formData.author,
        cover: formData.cover,
      }

      await createPost(postData).unwrap()

      setFormData({
        title: '',
        content: '',
        cover: null,
        author: userId,
      })
    } catch (error) {
      console.error('Error creating post:', error)
    }
  }

  return (
    <div className="mx-auto mb-16 mt-8 max-w-xl 2xl:max-w-3xl p-4">
      <h2 className="hidden lg:block mb-10 text-2xl font-bold">Add New Creations</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="mb-4">
          <Label htmlFor="title" className=" text-base ">
            Title:
          </Label>
          <Input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="mt-1 w-full rounded border p-2"
            required
          />
        </div>
        <div className="mb-4">
          <Label className="text-base">Content:</Label>
          <ReactQuill theme="snow" className="mt-1 " value={formData.content} onChange={handleContentChange} />
          {/* <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleInputChange}
            className="mt-1 p-2 border rounded w-full"
            required
          /> */}
        </div>
        <div>
          <Label htmlFor="cover" className="text-base">
            Media:
          </Label>
          <p className="text-muted-foreground pb-3 text-xs">Currently supports image only.</p>
          <Input
            type="file"
            id="cover"
            name="cover"
            onChange={handleInputChange}
            className=" w-full rounded border p-2 mb-4"
            accept="image/*"
          />
        </div>
        {isSuccess && <p>Creation added successfully!</p>}
        {isError && <p>Error: {error.message}</p>}
        <Button type="submit" className=" w-full md:w-1/2 text-base ">
          {isLoading ? 'Creating...' : 'Create'}
        </Button>
      </form>
    </div>
  )
}

export default CreatePost
