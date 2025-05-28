import React, { useEffect, useState } from 'react';
import { FaCalendarAlt, FaPhoneAlt, FaTimes } from 'react-icons/fa';

const FloatingButtons = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isPopupOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isPopupOpen]);

    const styles = {
    overlay: {
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      overflowY: 'auto',
    },
    modal: {
      position: 'relative', // must be relative so closeButton positions correctly
      backgroundColor: 'white',
      borderRadius: '12px',
      width: '95%',
      maxWidth: '1000px',
      margin: '32px',
      boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
      overflow: 'hidden',
      maxHeight: '90vh',
    },
    closeButton: {
      position: 'absolute',
      top: '12px',
      right: '12px',
      background: 'transparent',
      border: 'none',
      fontSize: '24px',
      color: '#333',
      cursor: 'pointer',
      zIndex: 100,
    },
    iframeWrapper: {
      marginTop:'16px',
      paddingTop: '32px', // space for close button
    },
    iframe: {
      width: '100%',
      height: '600px',
      border: 'none',
    },
  };

const floatingContainerStyle = {
    position: 'fixed',
    left: '50%',
    right: '0px',
    top: '50%',
    // transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    zIndex: 1000,
};

  const buttonStyle = {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #9BBB59',
    color: '#9BBB59',
    backgroundColor: '#fff',
    borderRadius: '8px 0 0 8px',
    overflow: 'hidden',
    width: '56px',
    transition: 'width 0.3s ease',
    fontWeight: 600,
    cursor: 'pointer',
    textDecoration: 'none',
  };

  const iconStyle = {
    padding: '16px',
    flexShrink: 0,
  };

  const labelStyle = {
    padding: '0 16px',
    opacity: 0,
    whiteSpace: 'nowrap',
    transition: 'opacity 0.3s ease',
  };


  return (
    <>
      {/* Floating Buttons */}
      <div style={floatingContainerStyle}>
        {/* Phone Button */}
        {/* <div style={{ width: 'fit-content', marginLeft: 'auto' }}>
          <a
            href="tel:+49(0)69-20134987"
            style={{ ...buttonStyle }}
            onMouseEnter={(e) => {
              e.currentTarget.style.width = '224px';
              const label = e.currentTarget.querySelector('span');
              if (label) label.style.opacity = 1;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.width = '56px';
              const label = e.currentTarget.querySelector('span');
              if (label) label.style.opacity = 0;
            }}
          >
            <div style={iconStyle}>
              <FaPhoneAlt size={18} />
            </div>
            <span style={labelStyle}>+49(0)69-20134987</span>
          </a>
        </div> */}

        {/* Appointment Button */}
        <div style={{ width: 'fit-content', marginLeft: 'auto' }}>
          <button
            onClick={() => setIsPopupOpen(true)}
            style={{ ...buttonStyle }}
            onMouseEnter={(e) => {
              e.currentTarget.style.width = '224px';
              const label = e.currentTarget.querySelector('span');
              if (label) label.style.opacity = 1;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.width = '56px';
              const label = e.currentTarget.querySelector('span');
              if (label) label.style.opacity = 0;
            }}
          >
            <div style={iconStyle}>
              <FaCalendarAlt size={18} />
            </div>
            <span style={labelStyle}>Book Appointment</span>
          </button>
        </div>
      </div>

     {/* Popup Modal */}
      {isPopupOpen && (
        <div style={styles.overlay}>
          <div style={styles.modal}>
            <button onClick={() => setIsPopupOpen(false)} style={styles.closeButton}>
              ×
            </button>
            <div style={styles.iframeWrapper}>
              <iframe
                src="https://calendly.com/turiyayoga-info/30min" // <-- replace with your link
                frameBorder="0"
                allowFullScreen
                style={styles.iframe}
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingButtons;
