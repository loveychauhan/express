import express from 'express'
import { home } from '../controller/admin.js'

const appRoute = express.Router()

appRoute.get('/', home)

export default appRoute