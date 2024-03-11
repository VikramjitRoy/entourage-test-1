import { Box, Button, Container, Grid } from "@mui/material";
import { products } from "../../data";
import SingleProduct from "./SingleProduct";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import SingleProductDesktop from "./SingleProductDesktop";
import SingleProductCard from "./SingleProductCard";
import { makeStyles } from '@mui/styles';
import {useState, useEffect, useRef} from 'react';

export default function Products() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const gridContainerRef = useRef(null);
  const [isGridInView, setIsGridInView] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  const checkGridInView = () => {
    if (gridContainerRef.current) {
      const rect = gridContainerRef.current.getBoundingClientRect();
      setIsGridInView(rect.top < window.innerHeight && rect.bottom >= 0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', checkGridInView);
    checkGridInView();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkGridInView);
    };
  }, []);

  const renderProducts = products.map((product) => (
    <Grid item key={product.id} xs={2} sm={4} md={4} display="flex" flexDirection={'column'} alignItems="center">
      {matches ? (
        <SingleProduct product={product} matches={matches} />
      ) : (
        <SingleProductDesktop product={product} matches={matches} />
      )}
    </Grid>
  ));

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding: theme.spacing(5),
    },
  }));
  const classes = useStyles();
  const translation = isGridInView ? scrollY * 0.5 : 0;
  return (
    <div className={classes.root} ref={gridContainerRef}>
      {/* <Grid container spacing={3} style={{ transform: `translateX(${translation}px)` }}> */}
      <Grid container spacing={3}>

        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <SingleProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
