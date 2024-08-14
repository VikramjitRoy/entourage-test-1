import { useState } from "react";
import {
  Product,
  ProductImage,
} from "../../styles/product";
import useDialogModal from "../../hooks/useDialogModal";
import ProductDetail from "../productdetail";
import ProductMeta from "./ProductMeta";

export default function SingleProductDesktop({ product, matches }) {
  const [ProductDetailDialog, showProductDetailDialog, closeProductDialog] =
    useDialogModal(ProductDetail);

  const [showOptions, setShowOptions] = useState(false);

  const handleMouseEnter = () => {
    setShowOptions(true);
  };
  const handleMouseLeave = () => {
    setShowOptions(false);
  };
  
return (
    <>
      <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <ProductImage src={product.image} />
     
        {(showOptions || matches) 
        // && (
          // <ProductAddToCart  show={showOptions} variant="contained" onClick={() => showProductDetailDialog()}>
          //   KNOW MORE
          // </ProductAddToCart>
        // )
        }
        
      </Product>
      <ProductMeta product={product} />
      <ProductDetailDialog product={product} />
    </>
  );
}
