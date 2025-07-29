import mongoose from "mongoose";

const connectDb = () => {
    try {
        mongoose.connect('mongodb://127.0.0.1:27017/form')
            .then(() => console.log('Connected!'));
    } catch (err) {

    }
}


export default connectDb