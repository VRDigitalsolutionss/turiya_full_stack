const express = require("express");
const jwt = require("jsonwebtoken");
const RegisteredUser = require("../model/Register");

// Email verification route
const verifyEmail = (req, res) => {
    const { token } = req.body;

    if (!token) {
        return res.status(400).json({ msg: "Token is required for verification" });
    }

    // Verify the token
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(400).json({ msg: "Invalid or expired token" });
        }

        // Find the user by email (decoded from the token)
        RegisteredUser.findOne({ email: decoded.email })
            .then((user) => {
                if (!user) {
                    return res.status(404).json({ msg: "User not found" });
                }

                if (user.isVerified) {
                    return res.status(400).json({ msg: "Email already verified" });
                }

                // Mark the user as verified
                user.isVerified = true;
                user
                    .save()
                    .then(() => {
                        res.status(200).json({ msg: "Email verified successfully" });
                    })
                    .catch((error) => {
                        res.status(500).json({ msg: "Internal server error", error });
                    });
            })
            .catch((error) => {
                res.status(500).json({ msg: "Internal server error", error });
            });
    })
}

module.exports = verifyEmail;