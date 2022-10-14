import User from "../models/User.js"
import { StatusCodes } from "http-status-codes";
const register = async (req, res, next) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        throw new Error("Please provide values")
    }
    const user = await User.create(req.body);
    res.status(StatusCodes.CREATED).json({ user })

}

const login = (req, res) => {
    res.send('login user')
}
const update = (req, res) => {
    res.send('update user')
}
export {
    register,
    login,
    update
}