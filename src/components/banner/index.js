import { Button, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerShopButton,
  BannerTitle,
} from "../../styles/banner";

export default function Banner() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const onClickHandler =  () => {
    window.open('https://wa.me/917483419406', '_blank');
  }

  return (
    <BannerContainer >
      <BannerImage src="/images/products/pool_table.jpeg" />
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
    </BannerContainer>
  );
}
