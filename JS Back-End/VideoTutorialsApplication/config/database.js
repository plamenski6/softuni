const mongoose = require('mongoose');
const dbString = require('./config').dbUrl + "TUTORIALS";
const rdyString = `${'*'.repeat(10)}Database is ready${'*'.repeat(10)}`;

module.exports = () => {
    return mongoose.connect(dbString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    },
        console.log(rdyString)
    );
};