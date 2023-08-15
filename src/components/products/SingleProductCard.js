import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { CardActionArea } from '@mui/material';
import { Colors } from '../../styles/theme'

export default function SingleProductCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/images/products/theater_reszied.jpg"
          alt="green iguana"
        />
        <CardContent style={{backgroundColor: "red"}}>
        <Button variant="contained" >
        KNOW MORE
</Button>
          
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
