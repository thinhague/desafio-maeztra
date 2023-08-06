import styles from './Tipbar.module.css'
import { Carousel } from '../Carousel'
import { data } from './data'

export const Tipbar = () => {
  return (
    <div className={styles['containerTipBar']}>
      <h2>Por que comprar na Maeztra?</h2>
      <Carousel images={data} />
    </div>
  )
}