import React, { useEffect, useState } from 'react'
import convertToBase64 from '@/utils/convert'
import { useParams } from 'react-router-dom'
import { useUpdateUserMutation, useGetUserByIdQuery } from '@/features/users/usersApiSlice'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'

const EditProfileForm = () => {
  const { id } = useParams()
  const {
    data: userDataQuery,
    isLoading: userLoading,
    isSuccess: userSuccess,
    isError: userError,
  } = useGetUserByIdQuery(id)

  const [updateUser, { isLoading, isSuccess, isError, error }] = useUpdateUserMutation()

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    firstName: '',
    lastName: '',
    profilePicture: '',
    cover: '',
    user_type: '', // Initialize with a default value
  })

  useEffect(() => {
    if (!userLoading && userDataQuery) {
      setFormData({
        username: userDataQuery.username || '',
        email: userDataQuery.email || '',
        firstName: userDataQuery.firstName || '',
        lastName: userDataQuery.lastName || '',
        profilePicture: userDataQuery.profilePicture || '',
        cover: userDataQuery.cover || '',
        user_type: userDataQuery.user_type || '',
      })
    }
  }, [userLoading, userDataQuery])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleProfilePictureUpload = async (e) => {
    const base64 = await convertToBase64(e.target.files[0])
    setFormData({
      ...formData,
      profilePicture: base64,
    })
  }

  const handleCoverUpload = async (e) => {
    const base64Cover = await convertToBase64(e.target.files[0])
    setFormData({
      ...formData,
      cover: base64Cover,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    updateUser({
      ...formData,
      id,
    })
  }

  return (
    <div className="mx-auto mb-16 mt-8 max-w-xl p-4 2xl:max-w-3xl">
      <h2 className=" mb-10 hidden text-2xl font-bold lg:block">Edit Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="mb-4 ">
          <Label htmlFor="profilePicture" className="text-base">
            Profile Picture:
            <img
              src={formData.profilePicture || userDataQuery?.profilePicture}
              alt="profilePicture"
              className="mb-5 mt-3 h-36 w-36 rounded-full border"
            />
          </Label>
          <Input
            type="file"
            id="profilePicture"
            name="profilePicture"
            onChange={handleProfilePictureUpload}
            className="mt-1 w-full rounded border p-2"
            accept="image/*"
          />
        </div>
        {/* <div className="mb-4">
          <Label htmlFor="user_type">Account type</Label>
          <select
            id="user_type"
            name="user_type"
            value={formData.user_type}
            onChange={handleInputChange}
            className="mt-1 p-2 border rounded w-full"
          >
            <option value="creator">Creator</option>
            <option value="patron">Patron</option>
            <option value="admin">Admin</option>
          </select>
        </div> */}
        <div className="mb-4">
          <Label htmlFor="username" className="text-base">
            Username:
          </Label>
          <Input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            className="mt-1 w-full rounded border p-2"
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="email" className="text-base">
            Email:
          </Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="mt-1 w-full rounded border p-2"
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="firstName" className="text-base">
            First Name:
          </Label>
          <Input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className="mt-1 w-full rounded border p-2"
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="lastName" className="text-base">
            Last Name:
          </Label>
          <Input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className="mt-1 w-full rounded border p-2"
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="cover" className="text-base">
            Cover Image:
            <img src={formData.cover || userDataQuery?.cover} alt="cover" className="mb-5 mt-3 border" />
          </Label>
          <Input
            type="file"
            id="cover"
            name="cover"
            onChange={handleCoverUpload}
            className="mb-4 mt-1 w-full rounded border p-2"
            accept="image/*"
          />
        </div>
        {isSuccess && <p>Update successful!</p>}
        {isError && <p>Error: {error.message}</p>}
        <Button type="submit" className=" w-full text-base md:w-1/2">
          {isLoading ? 'Updating...' : 'Update'}
        </Button>
      </form>
    </div>
  )
}

export default EditProfileForm
