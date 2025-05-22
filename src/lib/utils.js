import jwt from "jsonwebtoken";

const secretKey = process.env.SESSION_SECRET

const generateToken = async (userId) => {
    return jwt.sign({ userId }, secretKey, { expiresIn: "1d" })
}

export default generateToken