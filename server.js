const express = require('express')
// const connectDB = require("./config/db");
// connectDB();

const app = express()

app.use(express.json({ extended: false })); 

const PORT = 5000 || process.env.PORT


// ROUTES
// app.use('/api/auth', require('./routes/auth'))
// app.use('/api/users', require('./routes/users'))

app.listen(PORT, ()=> console.log('This is listening on PORT: ' + PORT))