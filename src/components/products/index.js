import { Box, Button, Container, Grid } from "@mui/material";
import { products } from "../../data";
import SingleProduct from "./SingleProduct";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import SingleProductDesktop from "./SingleProductDesktop";
import { Colors } from "../../styles/theme";
import SingleProductCard from "./SingleProductCard";
import { makeStyles } from '@mui/styles';

export default function Products() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const renderProducts = products.map((product) => (
    <Grid item key={product.id} xs={2} sm={4} md={4} display="flex" flexDirection={'column'} alignItems="center">
      {matches ? (
        <SingleProduct product={product} matches={matches} />
      ) : (
        // <SingleProductDesktop product={product} matches={matches} />
        <SingleProductCard
        imageSrc={product.image}
        title={product.name}
        content={product.price}
      />
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
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <SingleProductCard
              imageSrc={product.image}
              title={product.name}
              content={`Price: ${product.price}`}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
