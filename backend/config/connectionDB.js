const mongoose = require("mongoose")

const connectDb = async()=>{
    await mongoose.connect(process.env.CONNECTION_URL)
    .then(()=>console.log('connected'))
}

module.exports = connectDb