import express from 'express'
import appRoute from './routes/appRoute.js'
import 'dotenv/config'

const port = process.env.port
console.log(port)

const app = express()

app.use(appRoute)

app.listen(port || 8080, () => {
    console.log('running...')
})

