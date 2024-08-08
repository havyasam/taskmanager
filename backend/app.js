
const express = require('express')
const app =  express();
const port = 3000
const connectDb = require('./db/connect')
const router =require('./routes/route')
const cors = require('cors');

app.use(cors());

require('dotenv').config()

app.use(express.json())
app.use('/api/v1/router/',router)


const start = async()=>{
    try {
        await connectDb(process.env.MONGO_URI)
        app.listen(port,
            console.log(`listening at port ${port}`)
        )
 
    } catch (error) {
        console.log("db is not connected")
        
    }

}
start()

