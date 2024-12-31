import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../config';
import axios from 'axios';

const VerifyEmail = () => {
    const [message, setMessage] = useState("")
    const { token } = useParams();

    useEffect(() => {
        const verifyEmail = async () => {
            try {
                const response = await axios.post(`${BASE_URL}/verify-email`);
                setMessage(response.data);
            } catch (err) {
                setMessage(err.response?.data || "Invalid or expired token");
                alert("Error in verifying your")
            }
        };
        if (token) {
            verifyEmail();
        }
    }, [token]);
    return (
        <>
            <div className='text-center'>
                <p></p>
            </div>
        </>
    )
}

export default VerifyEmail
