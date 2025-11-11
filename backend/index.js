require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const bookRoutes = require('./routes/books')

// express app
const app = express()

// middleware
app.use(express.json())
app.use(cors())


app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// ✅ Test with root route
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Server is running on Vercel!' });
});

// routes
app.use('/api/books', bookRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {

        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log('connected to db & listening on port 4000')
        })
    })
    .catch((error) => {
        console.log(error)
    })


module.exports = app;
