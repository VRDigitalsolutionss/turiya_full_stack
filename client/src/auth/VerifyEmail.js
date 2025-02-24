import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { BASE_URL } from '../config';
import axios from 'axios';

const VerifyEmail = () => {
    const [message, setMessage] = useState("Please wait, while we verify your email.")
    const [verified, setVerified] = useState(false)
    const { token } = useParams();

    useEffect(() => {
        const verifyEmail = async () => {
            try {
                const response = await axios.post(`${BASE_URL}/verify-email`, {
                    token: token
                });
                setMessage("E-Mail erfolgreich verifiziert");
                setVerified(true);
            } catch (err) {
                setMessage(err.response?.data || "Invalid or expired token");
                if(err.response.data==="Email is already verified"){
                    setVerified(true);
                }
                // alert(err.response?.data.error)
            }
        };
        if (token) {
            verifyEmail();
        }
    }, [token]);
    return (
        <>
            <div className='text-center my-5' style={{height: '70vh'}}>
                <h5>{message}</h5>
                {!verified && <NavLink className='back-to-home-button' to='/login'>Enlogin</NavLink>}
            </div>
        </>
    )
}

export default VerifyEmail
