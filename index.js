//require("dotenv").config();
require('./database');
const express = require('express');
const app = express();
const body = require('body-parser');
const cors = require('cors');
const errorHandler = require('./handlers/error');
const authRoutes = require('./routes/auth');
const audioRoutes = require('./routes/audiobooks');
const usersRoutes = require('./routes/user');


//Use 
app.use(cors());
app.use(express.json());
app.use(body.json());
app.use(body.urlencoded({extended: true}))

app.use("/api/auth", authRoutes);
app.use("/api/audiobooks", audioRoutes);
app.use("/api/users", usersRoutes); 


//Routes
app.use((req, res, next) =>{
    let err = new Error("Not Found");
    err.status = 404;
    next(err);
})

app.use(errorHandler);


app.listen(3000, ()=> {
    console.log('App running at 3000');
});
