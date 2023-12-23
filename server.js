import express from 'express';
import cors from 'cors';
import { connectDB } from './connection/db.js';
import userRoutes from './routes/user.routes.js'
connectDB()
import post from './routes/post.router.js'

const app = express()
const port = 3019


//middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//routes
app.use('/api', userRoutes);
app.use('/api', post);

//
app.use('/uploads', express.static('uploads'))

//conecction server
app.listen(port, () => {
  console.log(`listening to server on port ${port}`)
})
