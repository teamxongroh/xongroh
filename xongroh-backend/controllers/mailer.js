const nodemailer = require('nodemailer')
const Mailgen = require('mailgen')
require('dotenv').config()

// https://ethereal.email/create
let nodeConfig = {
  host: 'smtp.ethereal.email',
  port: 587,
  secure: false, // true for 465, false for other ports
  //service: "gmail",
  auth: {
    user: process.env.EMAIL, // generated ethereal user
    pass: process.env.EMAIL_PASSWORD, // generated ethereal password
  },
}

let transporter = nodemailer.createTransport(nodeConfig)

let MailGenerator = new Mailgen({
  theme: 'default',
  product: {
    name: 'Mailgen',
    link: 'https://mailgen.js/',
  },
})

/** POST: http://localhost:8080/api/registerMail 
 * @param: {
  "username" : "example123",
  "userEmail" : "admin123",
  "text" : "",
  "subject" : "",
}
*/
exports.registerMail = async (req, res) => {
  const { username, userEmail, text, subject } = req.body

  // body of the email
  var email = {
    body: {
      name: username,
      intro: text || 'Welcome to Xongroh',
      outro: 'Need help with your account? Send us a mail at this addresss.',
    },
  }

  var emailBody = MailGenerator.generate(email)

  let message = {
    from: process.env.EMAIL,
    to: userEmail,
    subject: subject || 'Signup Successful',
    html: emailBody,
  }

  // send mail
  transporter
    .sendMail(message)
    .then(() => {
      return res
        .status(200)
        .send({ msg: 'You should receive an email from us.' })
    })
    .catch((error) => res.status(500).send({ error }))
}
