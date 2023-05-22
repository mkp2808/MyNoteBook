const mongoose = require('mongoose')
const mongoURI = "mongodb://localhost:27017"

const connectToMongo = () =>{
    mongoose.connect(mongoURI,()=>{
        console.log("\n\nConnected to Mongo Successfully.");
    })
}
    
module.exports = connectToMongo;