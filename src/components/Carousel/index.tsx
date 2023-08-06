import Image from 'next/image';
import { Carousel as CarouselMantine } from '@mantine/carousel';
import type { ImageProps } from '../../types/image'
import { useMediaQuery } from '@mantine/hooks';

interface ICarousel {
  images: ImageProps[]
}

export const Carousel = ({ images }: ICarousel) => {
  const isMobile = useMediaQuery('(max-width: 1600px)');
  return (
    <CarouselMantine
      slideSize="50%"
      slideGap="md"
      withControls={false}
      slidesToScroll={isMobile ? 1 : 5}
      align="start"
      breakpoints={[
        {minWidth: '700', slideSize: '33.333333%'},
        {minWidth: '1024', slideSize: '25%'},
        {minWidth: '1350', slideSize: '20%'}
      ]}
      classNames={{
        root:'tipbar-root'
      }}
    >
      {images?.map((slider, index) => (
        <CarouselMantine.Slide key={index}>
          <Image alt={`${slider.alt}-${index}`} src={slider.src} width={slider.width} height={slider.height} />
        </CarouselMantine.Slide>
      ))}
    </CarouselMantine>
  )
}