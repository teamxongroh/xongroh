import { Router } from "express";
const router = Router();
import * as userController from '../controllers/userController.js';

// experiments
import { registerMail } from '../controllers/mailer.js'
import Auth, { localVariables } from '../middleware/auth.js';

/** POST Methods */
router.route('/register').post(userController.register); // register user
router.route('/registerMail').post(registerMail); // send the email
router.route('/authenticate').post(userController.verifyUser, (req, res) => res.end()); // authenticate user
router.route('/login').post(userController.verifyUser,userController.login); // login in app

/** GET Methods */
router.route('/user/:username').get(userController.getUser) // user with username
router.route('/generateOTP').get(userController.verifyUser, localVariables, userController.generateOTP) // generate random OTP
router.route('/verifyOTP').get(userController.verifyUser, userController.verifyOTP) // verify generated OTP
router.route('/createResetSession').get(userController.createResetSession) // reset all the variables


/** PUT Methods */
router.route('/updateuser').put(Auth, userController.updateUser); // is use to update the user profile
router.route('/resetPassword').put(userController.verifyUser, userController.resetPassword); // use to reset password

module.exports = router;