require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const modulesRoutes = require('./routes/modules.js')
const userRoutes = require('./routes/user')
const reviewRoutes = require('./routes/review')
const timetableRoutes = require('./routes/timetable')

// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/modules', modulesRoutes)
app.use('/api/user', userRoutes)
app.use('/api/review', reviewRoutes)
app.use('/api/timetable', timetableRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('connected to database')
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log('listening for requests on port', process.env.PORT)
    })
  })
  .catch((err) => {
    console.log(err)
  }) 