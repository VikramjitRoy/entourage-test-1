import React, { useState } from 'react';
import { Typography, useMediaQuery, Button } from '@mui/material';
import { useTheme } from '@mui/system';
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerShopButton,
  BannerTitle,
} from '../../styles/banner';


export default function Banner() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleFormSubmit = (formData) => {
    // Add logic to handle form submission
    // You can send the form data to your server or perform any other actions
    console.log('Form submitted:', formData);
  };

  return (
    <BannerContainer>
      <BannerImage src="/images/products/pool_table.jpeg" />
      <BannerContent>
        <Typography variant="h6">Private Theater</Typography>
        <BannerTitle variant="h2">Premium Theater</BannerTitle>

        <BannerDescription variant="subtitle">
          Step into an opulent cinematic realm where every frame is a masterpiece, and experience movies in a symphony of luxury and style adorned with exquisite decorations
        </BannerDescription>

        <BannerShopButton color="primary" onClick={handleOpenModal}>
          Book Now
        </BannerShopButton>

        {/* Modal for collecting data */}
      </BannerContent>
    </BannerContainer>
  );
}
