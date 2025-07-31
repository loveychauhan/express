import { form, pinUser } from "../models/form.js"
import multer from "multer"
import bcrypt from 'bcrypt'
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export const register = (req, res) => {
    // console.log('render')
    res.render('registration.ejs')
}

export const login = (req, res) => {
    res.render('login.ejs')
}

export const home = (req, res) => {
    res.render('dashboard.ejs')
}

export const registeration = async (req, res) => {
    // console.log(req.body)
    const { name, gender, email, password, address, phone, qualification } = req.body
    const user = await form.findOne({ email })

    if (user) {
        console.log("found")
        return res.json({
            message: "Found"
        })
    }

    bcrypt.genSalt(10, function (err, salt) {
        console.log("salt : ", salt)
        bcrypt.hash(password, salt, function (err, hash) {
            console.log(hash)
            const userDoc = new form({
                name, email, gender, qualification, phone, address, password: hash
            })
            userDoc.save()
        })
    })



    res.redirect("/login")
}

export const loginData = async (req, res) => {
    const { email, password } = req.body
    const user = await form.findOne({ email })
    if (!user) {
        return res.json({
            message: "not registered"
        })
    }
    console.log(user)
    bcrypt.compare(password, user.password, function (err, result) {
        console.log(result)
    })

    res.json({
        message: "done"

    })
}


export const pinterestRegister = (req, res) => {

    res.render('pinterestRegister.ejs')
}

export const pinterestUser = async (req, res) => {
    const { name, email, password, age, gender } = req.body
    const user = await pinUser.findOne({ email })

    if (user) {
        res.json({
            message: 'already a user'
        })
    }

    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(password, salt, function (err, hash) {
            const pinData = new pinUser({
                name, email, gender, age, password: hash
            })
            pinData.save()
        })
    })

    res.redirect('/pinLogin')

}

export const pinLogin = (req, res) => {
    res.render('pinLogin.ejs')

}

export const isUser = async (req, res) => {
    const { email, password } = req.body
    const user = await pinUser.findOne({
        email
    })

    if (!user) {
        return res.json({
            message: 'No User Found'
        })
    }

    bcrypt.compare(password, user.password, function (err, result) {
        if (result) {
            return res.json({
                email: email,
                password: password
            })
        }
        res.json({
            message: 'wrong password'
        })
    })
}

export const uploadFile = (req, res) => {
    res.render('fileUpload.ejs')
}

export const getFile = (req, res) => {
    console.log('post request')
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, '__dirname/upload')
        },
        filename: (req, file, cb) => {
            // const salt = Date.now()
            console.log(req.file)
            console.log(file)
            cb(null, req.file.originalname)
        }
    })
    const upload = multer({ storage: storage })
    // console.log(storage)
}

