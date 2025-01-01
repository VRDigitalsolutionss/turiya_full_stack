import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { BASE_URL } from '../config';
import axios from 'axios';

const ResetPassword = () => {
    const { token } = useParams();
    const [formData, setFormData] = useState({
        password: "",
        confirmPassword: ""
    });

    const navigate = useNavigate()

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setErrors({ password: "Passwords do not match" });
            return;
        }
        try {
            const response = await axios.post(`${BASE_URL}/reset-password`, {
                token: token,
                newPassword: formData.password
            });

            if(response){
                alert("Password reset successfully");
                navigate('/login')
            }

        } catch (err) {
            alert(err.response?.data)
            console.log(err)
        }
    }
    return (
        <>
            <div className='my-5' style={{ height: '70vh' }}>
                <section className="global_wrapper forgot-login">
                    <div className="container">
                        <div className="forgot-login-box">
                            <form className="form_border p-4 border d-flex flex-column gap-3" method="POST" onSubmit={handleSubmit}>
                                <h3 className="my-3">Kennwort vergessen?</h3>
                                <p>
                                    Bitte gib deine E-Mail-Adresse ein, um Dein Kennwort
                                    zurückzusetzen. Eventuell musst Du dein Spamordner prüfen oder
                                    die Adresse info@turiyayoga.de als Absender zulassen.
                                </p>
                                <div className="forgot-email">
                                    <label>Neues Kennwort erstellen *:</label>
                                    <input
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                        placeholder="Neues Kennwort"
                                    />
                                </div>
                                <div className="forgot-email">
                                    <label>Confirm Password</label>
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        required
                                        placeholder="Confirm Password"
                                    />

                                </div>
                                    {errors.password && <span className="error text-danger">{errors.password}</span>}
                                <div className="send">
                                    <button className="global_btn" type="submit" name="forget">
                                        Kennwort aktualisieren
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default ResetPassword
