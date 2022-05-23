const express = require('express')
const dotenv = require('dotenv')
const connectDB = require("./config/db");

dotenv.config({ path: "./config/config.env" });
connectDB();

const app = express()

app.use(express.json({ extended: false })); 

const PORT = process.env.PORT || 5000;


// ROUTES
// app.use('/api/auth', require('./routes/auth'))
// app.use('/api/users', require('./routes/users'))

app.listen(PORT, ()=> console.log('This is listening on PORT: ' + PORT))