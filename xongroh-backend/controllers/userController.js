import UserModel from '../models/User.js'
import bcrypt from 'bcrypt'
import otpGenerator from './otp-gen.js'
import asyncHandler from 'express-async-handler'
import mongoose from 'mongoose'

/** middleware for verify user */

export const verifyUser = asyncHandler(async (req, res, next) => {
  const { userId } = req.method === 'GET' ? req.query : req.body

  try {
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).send({ error: 'Invalid userId format' })
    }
    let exist = await UserModel.findById(userId)
    if (!exist) {
      return res.status(404).send({ error: "Can't find User!" })
    }
    next()
  } catch (error) {
    console.error('Error verifying user:', error)
    return res.status(500).send({ error: 'Internal server error' })
  }
})

// @desc Create new user
// @route POST /users
// @access Private
export const register = async (req, res) => {
  const { username, password, email } = req.body

  // Confirm data
  if (!username || !password || !email) {
    return res.status(400).json({ message: 'All fields are required' })
  }

  // Check for duplicate username
  const duplicateUsername = await UserModel.findOne({ username })
    .collation({ locale: 'en', strength: 2 })
    .lean()
    .exec()

  if (duplicateUsername) {
    return res.status(409).json({ message: 'Duplicate username' })
  }

  // Check for duplicate mail
  const duplicateMail = await UserModel.findOne({ username })
    .collation({ locale: 'en', strength: 2 })
    .lean()
    .exec()

  if (duplicateMail) {
    return res.status(409).json({ message: 'Duplicate mail' })
  }

  // Hash password
  const hashedPwd = await bcrypt.hash(password, 10) // salt rounds

  const userObject = { username, password: hashedPwd, email }

  // Create and store new user
  const user = await UserModel.create(userObject)

  if (user) {
    //created
    res.status(201).json({ message: `New user ${username} created` })
  } else {
    res.status(400).json({ message: 'Invalid user data received' })
  }
}

// @desc Get all users
// @route GET /usersAllUsers
// @access Private
export const getAllUsers = asyncHandler(async (req, res) => {
  // Get all users from MongoDB
  const users = await UserModel.find().select('-password').lean()

  // If no users
  if (!users?.length) {
    return res.status(400).json({ message: 'No users found' })
  }

  res.json(users)
})

/** GET: http://localhost:8080/v1/user/example123 */
export const getUser = asyncHandler(async (req, res) => {
  const { username } = req.params

  if (!username) {
    return res.status(501).send({ error: 'Invalid Username' })
  }

  try {
    const user = await UserModel.findOne({ username })
    if (!user) {
      return res.status(501).send({ error: "Couldn't Find the User" })
    }

    /** Remove password from user */
    // Mongoose returns unnecessary data with the object, so convert it into JSON
    const { password, ...rest } = Object.assign({}, user.toJSON())

    return res.status(201).send(rest)
  } catch (error) {
    return res.status(404).send({ error: 'Cannot Find User Data' })
  }
})


// @desc Update a user
// @route PATCH /users
// @access Private
export const updateUser = async (req, res) => {
  const { username, email, firstName, lastName, profilePicture, id } = req.body

  // Confirm data
  if (!username || !email || !firstName || !lastName || !profilePicture || !id) {
    return res
      .status(400)
      .json({ message: 'All fields except password are required' })
  }

  // Does the user exist to update?
  const user = await UserModel.findById(id).exec()

  if (!user) {
    return res.status(400).json({ message: 'User not found' })
  }

  // Check for duplicate
  const duplicate = await UserModel.findOne({ username })
    .collation({ locale: 'en', strength: 2 })
    .lean()
    .exec()

  // Allow updates to the original user
  if (duplicate && duplicate?._id.toString() !== id) {
    return res.status(409).json({ message: 'Duplicate username' })
  }

  user.username = username

  // if (password) {
  //   // Hash password
  //   user.password = await bcrypt.hash(password, 10) // salt rounds
  // }

  const updatedUser = await user.save()

  res.json({ message: `${updatedUser.username} updated` })
}

/** GET: http://localhost:8080/api/generateOTP */
export const generateOTP = asyncHandler(async (req, res) => {
  req.app.locals.OTP = await otpGenerator(6)

  res.status(201).send({ code: req.app.locals.OTP })
})

/** GET: http://localhost:8080/api/verifyOTP */
export const verifyOTP = asyncHandler(async (req, res) => {
  const { code } = req.query

  if (parseInt(req.app.locals.OTP) === parseInt(code)) {
    req.app.locals.OTP = null // Reset the OTP value
    req.app.locals.resetSession = true // Start session for reset password
    return res.status(201).send({ msg: 'Verified Successfully!' })
  }

  return res.status(400).send({ error: 'Invalid OTP' })
})

// successfully redirect user when OTP is valid
/** GET: http://localhost:8080/api/createResetSession */
export const createResetSession = asyncHandler(async (req, res) => {
  if (req.app.locals.resetSession) {
    req.app.locals.resetSession = false // check check check check!!!!!!
    return res.status(201).send({ flag: req.app.locals.resetSession })
  }

  return res.status(440).send({ error: 'Session expired!' })
})

// update the password when we have valid session
/** PUT: http://localhost:8080/api/resetPassword */
export const resetPassword = asyncHandler(async (req, res) => {
  try {
    if (!req.app.locals.resetSession) {
      return res.status(440).send({ error: 'Session expired!' })
    }

    const { username, password } = req.body

    try {
      const user = await UserModel.findOne({ username })
      if (!user) {
        return res.status(404).send({ error: 'Username not Found' })
      }

      const hashedPassword = await bcrypt.hash(password, 10)

      await UserModel.updateOne(
        { username: user.username },
        { password: hashedPassword }
      )

      req.app.locals.resetSession = false // Reset session

      return res.status(201).send({ msg: 'Record Updated...!' })
    } catch (error) {
      return res.status(500).send({ error: 'Enable to hash password' })
    }
  } catch (error) {
    return res.status(401).send({ error })
  }
})
