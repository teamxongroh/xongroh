require('dotenv').config()
const cors = require('cors');
const express = require("express");
const app = express();
const path = require('path');
const {logger, logEvents} = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');
const connectDB = require('./config/dbConn');

const mongoose = require('mongoose')

app.use(cors());
console.log(process.env.NODE_ENV)
connectDB();
const PORT = process.env.PORT || 8000;

app.use(logger)

const bodyParser = require("body-parser"); 


app.use(express.json());
app.use(bodyParser.json());

app.use(require("./routes/auth"));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, './clientx/build')));

  app.get('*', (req, res) =>
    res.sendFile(
      path.resolve(__dirname, './', 'clientx', 'build', 'index.html')
    )
  );
} else {
  app.get('/', (req, res) => res.send('Please set to production'));
}


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
  