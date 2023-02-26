
import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import morgan from 'morgan'
import authRoute from './routes/authRoute.js'

//configure env
dotenv.config()

//database config
connectDB();

//rest objet
const app = express()

//middleware
app.use(express.json())
app.use(morgan('dev'))

//routes
app.use("/api/v1/auth",authRoute)



//rest api
app.get('/',(req,res)=>{
    res.send({
        message: 'Welcome to our app'
    })

  })

  //PORT
  const PORT = process.env.PORT || 8080


  //run listen
  app.listen(PORT,()=>{
    console.log(`Server Running on ${PORT}`);
  })