import React from 'react';
import { Carousel } from '@mantine/carousel';
import { Banner } from '../Banner';
import { ArrowIcon } from '../ArrowIcon';
import Autoplay from 'embla-carousel-autoplay';
import { useMediaQuery } from '@mantine/hooks';

export const CarouselHome = () => {
  const autoplay = React.useRef(Autoplay({ delay: 3000, }));
  const isMobile = useMediaQuery('(max-width: 1024px)');
  return (
    <Carousel 
      mx="auto" 
      withIndicators
      previousControlIcon={<ArrowIcon position='left' fill='#353535' />}
      nextControlIcon={<ArrowIcon fill='#353535' />}
      plugins={[autoplay.current]}
      styles={{
        indicators:{
          gap: 16
        },
        indicator:{
          width: isMobile ? 8 : 16,
          height: isMobile ? 8 : 16,
          borderRadius: '50%',
          backgroundColor: 'transparent',
          border: '1px solid #FAA500',
          '&[data-active]':{
            backgroundColor:'#FAA500'
          }
        },
        controls:{
          padding: isMobile ? '0 0.75rem' : '0 161px',
        },
        control: {
          '&[data-inactive]': {
            opacity: isMobile ? 0 : 1,
            cursor: 'default',
          },
        },
      }}
    >
      <Carousel.Slide><Banner /></Carousel.Slide>
      <Carousel.Slide><Banner /></Carousel.Slide>
      <Carousel.Slide><Banner /></Carousel.Slide>
      <Carousel.Slide><Banner /></Carousel.Slide>
    </Carousel>
  )
}