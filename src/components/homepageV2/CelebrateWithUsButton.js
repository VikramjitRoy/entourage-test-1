import React, { useState, useEffect } from 'react';
import Fab from '@material-ui/core/Fab';
import { Link } from 'react-router-dom';


const CelebrateWithUsButton = () => {
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


  return (
    <div style={{ position: 'fixed', bottom: 64, left: '0%',right: '0%', textAlign: 'center', zIndex: 999, display: isVisible ? 'block' : 'none' }}>
      <Fab
            color="primary"
            aria-label="celebrate"
            variant="extended"
            component={Link} to="/book"
            >
                Celebrate with Us
            </Fab>
    </div>
  );
};

export default CelebrateWithUsButton;
