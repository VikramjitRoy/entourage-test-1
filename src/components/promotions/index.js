import { Slide, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useRef, useState } from "react";
import { MessageText, PromotionsContainer } from "../../styles/promotions";

const messages = [
  "Celebrate birthdays, romantic dates, anniversary",
  "Enjoy Dolby vision & atmos in comfy recliner seats",
  "Food & Beverages available !!",
];
export default function Promotions() {
  const containerRef = useRef();
  const [show, setShow] = useState(true);
    const [messageIndex, setMessageIndex] = useState(0);
    useEffect(() => {
      let isMounted = true; 
            setTimeout(() => {
              if(isMounted)
                setShow(false);
            }, 3000);
    const intervalId = setInterval(() => {
      
      // get next message
      setMessageIndex((i) => (i + 1) % messages.length);

      if(isMounted) {
      // slide the message in
        setShow(true);
      }

      setTimeout(() => {
        if(isMounted)
          setShow(false);
      }, 3000);
    }, 4000);

    return () => {
      clearInterval(intervalId);
      isMounted = false;
    };
  }, []);

  return (
    <PromotionsContainer ref={containerRef} overflow="hidden">
      <Slide
        direction={show ? "left" : "right"}
        in={show}
        container={containerRef.current}
        timeout={{
          enter: 500,
          exit: 100,
        }}
      >
        <Box display="flex" justifyContent="center" alignItems="center">
          <MessageText>
            {messages[messageIndex]}
          </MessageText>
        </Box>
      </Slide>
    </PromotionsContainer>
  );
}
