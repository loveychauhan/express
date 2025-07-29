import form from "../models/form.js"

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

    const userDoc = new form({
        name, email, gender, qualification, phone, address, password
    })
    userDoc.save()
    res.json({
        message: "saved "
    })
}