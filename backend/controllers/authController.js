import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { config } from "../../config.js";

export const register = async (req, res) => {
    const { username, email, password, publicKey } = req.body;

    const hashed = await bcrypt.hash(password, 10);

    const user = await User.create({
        username,
        email,
        password: hashed,
        publicKey,
    });

    res.json(user);
};

export const login = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ msg: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, config.JWT_SECRET, {
        expiresIn: "7d",
    });

    res.json({ token, user });
};