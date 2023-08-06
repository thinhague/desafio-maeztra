import styles from './Brands.module.css'
import { Carousel } from '../Carousel'
import type { ImageProps } from '../../types/image'
import brands01 from '../../../assets/brands/brands-icon-01.svg'
import brands02 from '../../../assets/brands/brands-icon-02.svg'
import brands03 from '../../../assets/brands/brands-icon-03.svg'
import brands04 from '../../../assets/brands/brands-icon-04.svg'
import brands05 from '../../../assets/brands/brands-icon-05.svg'

const data:ImageProps[] = [
  {src:brands01, alt: 'brands', width: 308, height: 64},
  {src:brands02, alt: 'brands', width: 308, height: 64},
  {src:brands03, alt: 'brands', width: 308, height: 64},
  {src:brands04, alt: 'brands', width: 308, height: 64},
  {src:brands05, alt: 'brands', width: 308, height: 64},
]

export const Brands = () => {
  return (
    <div className={styles['containerBrands']}>
      <h2>Marcas Parceiras</h2>
      <Carousel images={data} />
    </div>
  )
}