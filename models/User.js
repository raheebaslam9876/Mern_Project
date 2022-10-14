import mongoose from "mongoose";
import validator from "validator"
const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "Please Enter your Name"],
        minlength: 3,
        maxlength: 20,
        trim: true
    },
    email: {
        type: String,
        required: [true, "Enter your Email"],
        validate: {
            validator: validator.isEmail,
            message: "please provide valid email."
        },
        unique: true,

    },
    password: {
        type: String,
        required: [true, "Enter your Password"],
        minlength: 6,

    },
    lastName: {
        type: String,
        required: [true, "Please Enter Last Name"],
        maxlength: 20,
        trim: true,
        default: 'lastName'
    },
    location: {
        type: String,
        maxlength: 20,
        trim: true,
        default: 'location'
    }
})

export default mongoose.model("User", userSchema)