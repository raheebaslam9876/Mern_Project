import mongoose from "mongoose";
import validator from "validator"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
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
        select: false
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

userSchema.pre("save", async function () {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
})

userSchema.methods.createJWT = function () {
    return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_LIFETIME });
}
export default mongoose.model("User", userSchema)