import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../config";

const VerifyEmail = () => {
  const [message, setMessage] = useState(""); // To store success or error message
  const [loading, setLoading] = useState(true); // To handle loading state
  const navigate = useNavigate(); // To navigate after verification

  // Function to handle email verification
  const verifyEmail = async (token) => {
    try {
      const response = await fetch(`${BASE_URL}/verify-email?token=${token}`);
      const data = await response.json();

      if (response.ok) {
        setMessage(data.msg); // Success message
        setLoading(false);
        setTimeout(() => {
          navigate("/login"); // Redirect to login page after 3 seconds
        }, 3000);
      } else {
        setMessage(data.msg); // Error message
        setLoading(false);
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
      setLoading(false);
    }
  };

  // Extract the token from the URL and call the verify function
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

    if (token) {
      verifyEmail(token);
    } else {
      setMessage("Invalid or missing token.");
      setLoading(false);
    }
  }, [navigate]);

  return (
    <div className="verify-email-container">
      <div className="verify-email-box">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <h2>Email Verification</h2>
            <p>{message}</p>
            {!loading && message === "Email verified successfully" && (
              <p>You will be redirected to the login page shortly.</p>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default VerifyEmail;
