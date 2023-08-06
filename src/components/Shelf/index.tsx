import { Carousel } from "@mantine/carousel"
import { Card } from "../Card"
import styles from './Shelf.module.css'
import { data } from './data'
import { useMediaQuery } from '@mantine/hooks';
import { ArrowIcon } from "../ArrowIcon";

export const Shelf = () => {
  const isMobile = useMediaQuery('(max-width: 900px)');
  
  return (
    <div className={styles['containerShelf']}>
      <h2>As Mais Pedidas</h2>
      <Carousel
        slideSize="85%"
        loop={isMobile ? false : true}
        slideGap="sm"
        withControls={isMobile ? false : true}
        slidesToScroll={isMobile ? 1 : 5}
        align={'start'}
        previousControlIcon={<ArrowIcon position='left' fill='#000000' />}
        nextControlIcon={<ArrowIcon fill='#000000' />}
        controlsOffset="xs"
        breakpoints={[
          {minWidth: '700', slideSize: '55%'},
          {minWidth: '1024', slideSize: '25%'},
          {minWidth: '1425', slideSize: '20%'}
        ]}
        classNames={{
          root:'shelf-root'
        }}
      >
        {data?.map((card, index) => (
          <Carousel.Slide key={index}>
            <Card {...card} />
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  )
}