const mongoose = require('mongoose');
mongoose.set("debug", true);
mongoose.Promise = Promise;

//DB
const testSpoti = 'testSpoti';

//Mongoose Connection
mongoose.connect(`mongodb://localhost:27017/${testSpoti}`)
        .then(() => {
            console.log("Connection Open")
        })
        .catch(err => console.log(err))