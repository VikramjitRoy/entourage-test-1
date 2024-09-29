import React, { useState, useEffect } from 'react';
import Fab from '@material-ui/core/Fab';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Typography } from '@mui/material';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      // setIsVisible(scrollTop === 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    // Replace the link with your actual WhatsApp link
    window.location.href = 'https://wa.me/917483419406';
  };

  return (
    <div style={{ position: 'fixed', bottom: 16, left: 16 }}>
      <Fab color="primary" aria-label="whatsapp" onClick={handleClick}>
        <WhatsAppIcon />
      </Fab>
      <Typography  variant="body1" sx={{color: 'white'}}>Chat With Us</Typography>
    </div>
  );
};

export default WhatsAppButton;
