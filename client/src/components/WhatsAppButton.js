import React, { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

function WhatsAppButton({ phoneNumber, defaultMessage = "Hello!" }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the user is on a mobile device
    const mobileCheck = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    setIsMobile(mobileCheck);
  }, []);

  // Format phone number by removing all non-digit characters
  const formattedPhone = phoneNumber.replace(/\D/g, '');
  
  // Create WhatsApp URL with default message
  const whatsappUrl = isMobile 
    ? `whatsapp://send?phone=${formattedPhone}&text=${encodeURIComponent(defaultMessage)}`
    : `https://web.whatsapp.com/send?phone=${formattedPhone}&text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div style={{
      position: 'fixed',
      bottom: '30px',
      right: '16px',
      zIndex: 50
    }}>
      {/* WhatsApp Button */}
      <a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#ffffff',
          color: '#9BBB59',
          fontWeight: 'bold',
          fontSize: '14px',
          padding: '8px 16px',
          borderRadius: '50px',
          transition: 'all 0.3s ease',
          textDecoration: 'none',
          boxShadow: '0px 1px 20px 0px rgba(0, 0, 0, 0.1)',
          cursor: 'pointer'
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = '#9BBB59';
          e.currentTarget.style.color = '#ffffff';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = '#ffffff';
          e.currentTarget.style.color = '#9BBB59';
        }}
      >
        <FaWhatsapp style={{
          fontSize: '24px',
          marginRight: '8px',
          transition: 'all 0.3s ease'
        }} />
        Chat
      </a>
    </div>
  );
}

export default WhatsAppButton;