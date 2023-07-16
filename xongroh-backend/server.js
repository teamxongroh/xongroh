require('dotenv').config()
const express = require("express");
const app = express();
const path = require('path');
const {logger, logEvents} = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const connectDB = require('./config/dbConn');
const mongoose = require('mongoose')

console.log(process.env.NODE_ENV)
connectDB();
const PORT = process.env.PORT || 8000;


app.use(logger)
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

// Overall, this code snippet allows the web
// application to serve static files to the client
// without having to write individual routes for each file.
app.use('/', express.static(path.join(__dirname, 'public')));


// This code snippet allows the web application
// to serve the index.html file to the client when
// the client requests the root URL.
app.use('/', require('./routes/root'));
app.use('/auth', require('./routes/authRoutes'));
app.use('/users', require('./routes/userRoutes'));

app.use(require("./routes/auth"));

app.all('*', (req, res) => {
  res.status(404)
  if (req.accepts('html')) {
      res.sendFile(path.join(__dirname, 'views', '404.html'));
  } else if (req.accepts('json')) {
      res.json({ message: 'Not found' });
  } else {
      res.type('txt').send('Not found');
  }
})


app.use(errorHandler)

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB')
  app.listen(PORT, () => {console.log(`Server listening on port ${PORT}`)});
})

mongoose.connection.on('error', err => {
  console.log(`Error connecting to MongoDB: ${err}`)
  logEvents(`${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`, 'mongoErrLog.log')
})

mongoose.connection.on('disconnected', () => {
console.log('Disconnected from MongoDB');
});