import express from 'express'
import appRouter from './route/adminRoute.js'
import connectDb from './config/db.js';


const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

//db connect
connectDb();

app.use(appRouter)

app.listen(8000, () => {
    console.log('server running at 8000')
})