const express    = require('express');
const mongoose   = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

//routers
const families = require('./routes/api/families')

// body parser middleware
app.use(bodyParser.json())

// mongo connect
mongoose
    .connect(process.env._mongoURI, { useNewUrlParser: true })
    .then(()=>console.log('mongo db is connected...'))
    .catch((err)=>console.log(err))

// use routes
// @route /api/users
app.use('/api/families',families)



// PORT
const port = process.env.PORT || 5000

//Listening...
app.listen(port, ()=>console.log(`server started on port ${port}`))


