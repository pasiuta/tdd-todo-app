const mongoose = require("mongoose")
require('dotenv').config()

async function connect() {
    try {
        await mongoose.connect(process.env.DB_URL,
            {useNewUrlParser: true}
        )
    } catch (err) {
        console.error(err)
        console.error("Error connecting to mongodb ")
    }

}

module.exports = {connect}