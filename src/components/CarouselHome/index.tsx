import React from 'react';
import { Carousel } from '@mantine/carousel';
import { BannerMobile } from '../BannerMobile';
import { ArrowIcon } from '../ArrowIcon';
import Autoplay from 'embla-carousel-autoplay';

export const CarouselHome = () => {
  const autoplay = React.useRef(Autoplay({ delay: 3000, }));
  
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
          width: 8,
          height: 8,
          borderRadius: '50%',
          backgroundColor: 'transparent',
          border: '1px solid #FAA500',
          '&[data-active]':{
            backgroundColor:'#FAA500'
          }
        },
        control: {
          '&[data-inactive]': {
            opacity: 0,
            cursor: 'default',
          },
        },
      }}
    >
      <Carousel.Slide><BannerMobile /></Carousel.Slide>
      <Carousel.Slide><BannerMobile /></Carousel.Slide>
      <Carousel.Slide><BannerMobile /></Carousel.Slide>
      <Carousel.Slide><BannerMobile /></Carousel.Slide>
    </Carousel>
  )
}