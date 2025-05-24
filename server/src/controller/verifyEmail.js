const express = require("express");
const jwt = require("jsonwebtoken");
const RegisteredUser = require("../model/Register");

// Email verification route
const verifyEmailController = async (req, res) => {
    const { token } = req.body;

    if (!token) {
        return res.status(400).send("Token is required for verification" );
    }

    try {
        const decoded = jwt.verify(token, process.env.secretKey);
        if(!decoded){
            return res.status(400).send("Invalid or expired token");
        }
        const user = await RegisteredUser.findOne({ email: decoded.email });

        if (!user) return res.status(404).send("User not found");
        if (user.isVerified) return res.status(400).send("Email is already verified");

        user.isVerified = true;
        await user.save();

        res.status(200).send("Email verified successfully!");
    } catch (err) {
        console.log(err)
        res.status(400).send("Invalid or expired token");
    }
}
    module.exports = verifyEmailController;