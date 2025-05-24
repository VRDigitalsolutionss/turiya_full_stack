import React, { useEffect, useState } from "react";
import axios from 'axios';
import Swal from "sweetalert2";
import { BASE_URL } from "../config";

const ContactPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    message: "",
    captcha_input: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [captchaCode, setCaptchaCode] = useState("");

  useEffect(() => {
    const initialTimer = setTimeout(() => {
      setIsOpen(true);
    }, 10000);

    const interval = setInterval(() => {
      setIsOpen(true);
    }, 10000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  const startAutoCloseTimer = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 60000);
  };

  const generateCaptcha = () => Math.floor(10000 + Math.random() * 90000).toString();

  useEffect(() => {
    if (isOpen) {
      setCaptchaCode(generateCaptcha());
      startAutoCloseTimer();
    }
  }, [isOpen]);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.first_name.trim()) newErrors.first_name = "First name is required";
    if (!formData.last_name.trim()) newErrors.last_name = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    if (!formData.captcha_input.trim()) newErrors.captcha_input = "Verification code is required";
    else if (formData.captcha_input !== captchaCode) newErrors.captcha_input = "Incorrect verification code";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;
    setLoading(true);

    const payload = {
      name: formData.first_name + " " + formData.last_name,
      number: formData.phone,
      email: formData.email,
      message: formData.message,
    };

    axios.post(BASE_URL + '/add_query/', payload)
      .then((response) => {
        setLoading(false);
        Swal.fire({
          title: "Danke!",
          text: "Erfolgreich übermittelt!",
          icon: "success",
        });

        if (response.status === 201) {
          setFormData({
            first_name: "",
            last_name: "",
            email: "",
            phone: "",
            message: "",
            captcha_input: "",
          });
          setCaptchaCode(generateCaptcha());
          setIsOpen(false);
        }
      })
      .catch((error) => {
        setLoading(false);
        console.log("Error submitting form:", error);
      });
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      backdropFilter: 'blur(5px)',
      display: isOpen ? 'flex' : 'none',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
      padding: '1rem',
      transition: 'all 0.3s ease',
    }}>
      <div style={{
        position: 'relative',
        background: 'white',
        padding: '2rem',
        borderRadius: '12px',
        width: '100%',
        maxWidth: '500px',
        maxHeight: '90vh',
        overflowY: 'auto',
        boxSizing: 'border-box',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
      }}>
        <button 
          onClick={handleClose}
          style={{
            position: 'absolute',
            top: '15px',
            right: '15px',
            background: 'none',
            border: 'none',
            fontSize: '1.5rem',
            cursor: 'pointer',
            color: '#666',
            transition: 'color 0.2s',
            ':hover': {
              color: '#333',
            }
          }}
        >
          &times;
        </button>

        <div style={{ marginBottom: '1rem' }}>
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: '600',
            color: '#2c3e50',
            marginBottom: '0.5rem',
            textAlign: 'center',
          }}>
            Wir Helfen Immer
          </h3>
          <div style={{
            height: '3px',
            background: 'linear-gradient(to right, #3498db, #2ecc71)',
            width: '50px',
            margin: '0 auto',
            borderRadius: '3px',
          }}></div>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1rem',
            marginBottom: '1rem',
            '@media (max-width: 600px)': {
              gridTemplateColumns: '1fr',
            }
          }}>
            <div>
              <label style={{
                display: 'block',
                marginBottom: '0.3rem',
                fontWeight: '500',
                color: '#555',
              }}>Vorname</label>
              <input
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '0.3rem',
                  borderRadius: '6px',
                  border: `1px solid ${errors.first_name ? '#e74c3c' : '#ddd'}`,
                  fontSize: '0.9rem',
                  transition: 'all 0.2s',
                  ':focus': {
                    outline: 'none',
                    borderColor: '#3498db',
                    boxShadow: '0 0 0 2px rgba(52, 152, 219, 0.2)',
                  }
                }}
              />
              {errors.first_name && <p style={{
                color: '#e74c3c',
                fontSize: '0.8rem',
                marginTop: '0.2rem',
              }}>{errors.first_name}</p>}
            </div>

            <div>
              <label style={{
                display: 'block',
                marginBottom: '0.3rem',
                fontWeight: '500',
                color: '#555',
              }}>Nachname</label>
              <input
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '0.3rem',
                  borderRadius: '6px',
                  border: `1px solid ${errors.last_name ? '#e74c3c' : '#ddd'}`,
                  fontSize: '0.9rem',
                  transition: 'all 0.2s',
                  ':focus': {
                    outline: 'none',
                    borderColor: '#3498db',
                    boxShadow: '0 0 0 2px rgba(52, 152, 219, 0.2)',
                  }
                }}
              />
              {errors.last_name && <p style={{
                color: '#e74c3c',
                fontSize: '0.8rem',
                marginTop: '0.2rem',
              }}>{errors.last_name}</p>}
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1rem',
            marginBottom: '1rem',
            '@media (max-width: 600px)': {
              gridTemplateColumns: '1fr',
            }
          }}>
            <div>
              <label style={{
                display: 'block',
                marginBottom: '0.3rem',
                fontWeight: '500',
                color: '#555',
              }}>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '0.3rem',
                  borderRadius: '6px',
                  border: `1px solid ${errors.email ? '#e74c3c' : '#ddd'}`,
                  fontSize: '0.9rem',
                  transition: 'all 0.2s',
                  ':focus': {
                    outline: 'none',
                    borderColor: '#3498db',
                    boxShadow: '0 0 0 2px rgba(52, 152, 219, 0.2)',
                  }
                }}
              />
              {errors.email && <p style={{
                color: '#e74c3c',
                fontSize: '0.8rem',
                marginTop: '0.2rem',
              }}>{errors.email}</p>}
            </div>

            <div>
              <label style={{
                display: 'block',
                marginBottom: '0.3rem',
                fontWeight: '500',
                color: '#555',
              }}>Telefon</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '0.3rem',
                  borderRadius: '6px',
                  border: `1px solid ${errors.phone ? '#e74c3c' : '#ddd'}`,
                  fontSize: '0.9rem',
                  transition: 'all 0.2s',
                  ':focus': {
                    outline: 'none',
                    borderColor: '#3498db',
                    boxShadow: '0 0 0 2px rgba(52, 152, 219, 0.2)',
                  }
                }}
              />
              {errors.phone && <p style={{
                color: '#e74c3c',
                fontSize: '0.8rem',
                marginTop: '0.2rem',
              }}>{errors.phone}</p>}
            </div>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label style={{
              display: 'block',
              marginBottom: '0.3rem',
              fontWeight: '500',
              color: '#555',
            }}>Your Message</label>
            <textarea
              rows={2}
              name="message"
              value={formData.message}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '0.3rem',
                borderRadius: '6px',
                border: `1px solid ${errors.message ? '#e74c3c' : '#ddd'}`,
                fontSize: '0.9rem',
                transition: 'all 0.2s',
                resize: 'vertical',
                ':focus': {
                  outline: 'none',
                  borderColor: '#3498db',
                  boxShadow: '0 0 0 2px rgba(52, 152, 219, 0.2)',
                }
              }}
            />
            {errors.message && <p style={{
              color: '#e74c3c',
              fontSize: '0.8rem',
              marginTop: '0.2rem',
            }}>{errors.message}</p>}
          </div>

          <div style={{ 
            background: '#f8f9fa',
            padding: '1rem',
            borderRadius: '6px',
          }}>
            <label style={{
              display: 'block',
              marginBottom: '0.3rem',
              fontWeight: '500',
              color: '#555',
            }}>Verification Code</label>
            <div style={{
              fontSize: '1.2rem',
              fontWeight: 'bold',
              letterSpacing: '3px',
              color: '#2c3e50',
              textAlign: 'center',
              marginBottom: '0.2rem',
            }}>
              {captchaCode}
            </div>
            <input
              type="text"
              name="captcha_input"
              value={formData.captcha_input}
              onChange={handleChange}
              placeholder="Enter the code above"
              style={{
                width: '100%',
                padding: '0.5rem',
                borderRadius: '6px',
                border: `1px solid ${errors.captcha_input ? '#e74c3c' : '#ddd'}`,
                fontSize: '0.9rem',
                transition: 'all 0.2s',
                ':focus': {
                  outline: 'none',
                  borderColor: '#3498db',
                  boxShadow: '0 0 0 2px rgba(52, 152, 219, 0.2)',
                }
              }}
            />
            {errors.captcha_input && <p style={{
              color: '#e74c3c',
              fontSize: '0.8rem',
              marginTop: '0.2rem',
            }}>{errors.captcha_input}</p>}
            {!formData.captcha_input && <p style={{
              color: '#7f8c8d',
              fontSize: '0.8rem',
              marginTop: '0.2rem',
              textAlign: 'center',
            }}>Please enter the displayed numeric code</p>}
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              padding: '0.6rem',
              background: 'linear-gradient(to right, #3498db, #2ecc71)',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              fontSize: '1rem',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.2s',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              ':hover': {
                opacity: 0.9,
                transform: 'translateY(-1px)',
              },
              ':disabled': {
                opacity: 0.7,
                cursor: 'not-allowed',
              }
            }}
          >
            {loading ? (
              <>
                <div style={{
                  width: '1rem',
                  height: '1rem',
                  border: '2px solid rgba(255,255,255,0.3)',
                  borderTopColor: 'white',
                  borderRadius: '50%',
                  animation: 'spin 1s linear infinite',
                }}></div>
                Sending...
              </>
            ) : (
              'Send Message'
            )}
          </button>
        </form>
      </div>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default ContactPopup;