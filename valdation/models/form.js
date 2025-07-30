import mongoose from "mongoose"

const formSchema = new mongoose.Schema({
    name: String,
    password: String,
    gender: String,
    email: String,
    phone: String,
    address: String,
    qualification: String

})
const PinSchema = new mongoose.Schema({
    name: String,
    password: String,
    gender: String,
    email: String,
    age: String
})

export const form = mongoose.model('form', formSchema)
export const pinUser = mongoose.model('pinUser', PinSchema)

