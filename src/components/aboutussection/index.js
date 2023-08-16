import React from 'react';
import { styled } from '@mui/system';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const Section = styled('section')({
  paddingTop: '2rem',
  paddingBottom: '2rem',
  backgroundColor: '#f9f9f9',
});

const AboutUsSection = ({ title, content }) => {
  return (
    <Section>
      <Container>
        <Typography variant="h4" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1">
          {content}
        </Typography>
      </Container>
    </Section>
  );
};

export default AboutUsSection;
