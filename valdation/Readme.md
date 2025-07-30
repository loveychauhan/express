using mongoDm and Mongoose to store data

```
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

const form = mongoose.model('form', formSchema)

export default form
```
