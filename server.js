
import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js'
import morgan from 'morgan'
import authRoute from './routes/authRoute.js'
import balanceRoute from './routes/balanceRoute.js'
import orderRoute from './routes/orderRoute.js'
import offerRoute from './routes/offerRoute.js'
import cors from 'cors'


//configure env
dotenv.config()

//database config
connectDB();

//rest objet
const app = express()

app.use(cors());

//middleware
app.use(express.json())
app.use(morgan('dev'))

//routes
app.use("/auth",authRoute)
app.use("/balance",balanceRoute)
app.use("/order",orderRoute)
app.use("/offer",offerRoute)



//rest api
app.get('/',(req,res)=>{
    res.send({
        message: 'Welcome to our app'
    })

  })

  //PORT
  const PORT = process.env.PORT || 8080


  //run listen
  app.listen(PORT,'192.168.248.1')