import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useDialogModal from "../../hooks/useDialogModal";
import ProductDetail from "../productdetail";

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 400,
    margin: 'auto',
    marginTop: theme.spacing(2),
    backgroundColor: '#f9f9f9', // Light background color for a premium look
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.8)', // Soft shadow
    backgroundColor: '#c49089',
    transition: 'transform 0.2s ease',
    position: 'relative',
    borderRadius: theme.spacing(1), // Rounded corners
    '&:hover': {
      transform: 'scale(1.03)',
    },
  },
  media: {
    height: 200,
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer',
    borderRadius: `${theme.spacing(1)}px ${theme.spacing(1)}px 0 0`,
  },
  button: {
    position: 'absolute',
    bottom: '-40px',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: '#c49089', // Set button background color
    color: '#f9f9f9', // Light text color
    fontWeight: 'bold', // Set font weight
    transition: 'bottom 0.3s ease',
    borderRadius: theme.spacing(1),
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
      opacity: 0.7,
    },
  },
  hovered: {
    backgroundColor: theme.palette.primary.dark,
    bottom: theme.spacing(2),
  },
  content: {
    color: '#343131', // Set content color
    textAlign: 'center', // Align content to center
  },
}));

const SingleProductCard = ({ product}) => {
  const classes = useStyles();
  const [isHovered, setIsHovered] = useState(false);
  const [ProductDetailDialog, showProductDetailDialog, closeProductDialog] =
    useDialogModal(ProductDetail);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleImageClick = () => {
    setIsHovered(true);
  };

  const handleCardClick = () => {
    setIsHovered(true);
  };

  return (
    <div>
    <Card
      className={classes.card}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      touchstart={handleMouseEnter}
      touchEnd={handleMouseLeave}
      onClick={handleCardClick}
    >
      <CardMedia
        className={classes.media}
        image={product.image}
        title={product.title}
        onClick={handleImageClick}
      >
        <Button
          className={`${classes.button} ${isHovered ? classes.hovered : ''}`}
          onClick={() => showProductDetailDialog()}
        >
          KNOW MORE
        </Button>
      </CardMedia>
      <CardContent className={classes.content}>
        <Typography variant="h6" component="h2">
          {product.name}
        </Typography>
        <Typography variant="body2">
          <Typography display={'inline'} component={'span'} sx={{ textDecoration: "line-through" }}> Price: ₹{product.originalPrice} </Typography>
          <Typography display={'inline'} component={'span'} sx={{ fontWeight: "bold" }}> Price: ₹{product.price} </Typography>
        </Typography>
      </CardContent>
    </Card>
    <ProductDetailDialog product={product} />
    </div>
  );
};

export default SingleProductCard;
