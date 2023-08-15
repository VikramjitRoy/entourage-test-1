import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './slider.css'
import {
    BannerContainer,
    BannerContent,
    BannerDescription,
    BannerImage,
    BannerShopButton,
    BannerTitle,
  } from "../../styles/banner";
  import { Button, Typography, useMediaQuery } from "@mui/material";

const images = [
    'https://via.placeholder.com/1200x400?text=Image%201',
    'https://via.placeholder.com/1200x400?text=Image%202',
    'https://via.placeholder.com/1200x400?text=Image%203',
    'https://via.placeholder.com/1200x400?text=Image%204',
    'https://via.placeholder.com/1200x400?text=Image%205',
];
const onClickHandler =  () => {
    window.open('https://wa.me/917483419406', '_blank');
  }

const Slider = () => {
    return (
        <Carousel
            showThumbs={false}
            autoPlay={true}
            interval={2000}
            infiniteLoop={true}
            transitionTime={500}
            emulateTouch={true}
        >
            {images.map((image, index) => (
                <div key={index}>
                    <img src={image} alt={`Image ${index}`} />
                    <div className="text-overlay">
                        <BannerContent>
                            <Typography variant="h6">Private Theater</Typography>
                            <BannerTitle variant="h2">
                                Premium Theater
                            </BannerTitle>

                            <BannerDescription variant="subtitle">
                                Step into an opulent cinematic realm where every frame is a masterpiece, and experience movies in a symphony of luxury and style adorned with exquisite decorations
                            </BannerDescription>

                            <BannerShopButton color="primary" onClick={onClickHandler}>Book Now</BannerShopButton>
                        </BannerContent>

                    </div>
                </div>
            ))}
        </Carousel>
    );
};

export default Slider;
