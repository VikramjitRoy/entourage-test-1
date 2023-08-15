
import { Typography } from "@mui/material";
import { ProductMetaWrapper } from "../../styles/product";
import { Colors } from "../../styles/theme";
export default function ProductMeta({ product, matches }) {
    return (
      <ProductMetaWrapper>
        <Typography color={Colors.secondary} variant={matches ? "h6" : "h5"} lineHeight={2}>
          {product.name}
        </Typography>
        <Typography  color={Colors.secondary} variant={matches ? "caption" : "body1"}>
          ₹{product.price}
        </Typography>
      </ProductMetaWrapper>
    );
}