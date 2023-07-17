import { Router } from "express";
const router = Router();
import APIStatus from "../models/apiStatus.js";
import asyncHandler from "express-async-handler"

//controller
const checkApiStatus = asyncHandler(async (req, res) => {
    const _id = "64b4bf9b861cfc352f25c786";
    
    // Get the API status from MongoDB
    const status = await APIStatus.findOne({ _id }).lean();

    // If no status found
    if (!status) {
        return res.status(400).json({ message: 'No status found' });
    }

    res.json(status);
});


const addApiStatus = asyncHandler(async (req, res) => {
    const status = new APIStatus({
        "register": true,
        "registerMail": false,
        "authenticate": true,
        "login": true,
        "userDetails": true,
        "generateOTP": true,
        "verifyOTP": true,
        "createResetSession": true,
        "updateUser": true,
        "resetPassword": true
      });

      // Return save result as a response
      const result = await status.save();
      return res.status(201).send({ msg: "Status added" });
})


export const updateApiStatus = asyncHandler(async (req, res) => {
    try {
        const token2 = "64b4bf9b861cfc352f25c786"

        const body = req.body;

        // Update the data
        await APIStatus.updateOne({ _id: token2 }, body);

        return res.status(201).send({ msg: "Status Updated...!" });
    }catch (error) {
        return res.status(401).send({ error });
    }
    });


// routes
router.route('/apiStatus').get(checkApiStatus)
router.route('/apiStatus').post(addApiStatus)
router.route('/apiStatus').put(updateApiStatus)

export default router;
