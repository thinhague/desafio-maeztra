import card01 from '../../../assets/card/card-01.png'
import styles from './Card.module.css'
import Image from 'next/image'
import type { ICard } from '../../types/card'

export const Card = (props: ICard) => {
  const { colors, image, price, subtitle, title } = props

  const formattedPrice = (price: number) => price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
  return (
    <div className={styles['containerCard']}>
      <Image style={{ width: '100%' }} alt={image.alt} src={image.src} />
      <div className={styles['containerColors']}>
        {colors?.map((color, index) => (
          <div key={index} className={styles['cardColors']} style={{ background: color }} />
        ))}
      </div>
      <p className={styles['cardPrice']}>{formattedPrice(price)}</p>
      <p className={styles['cardTitle']}>{title}</p>
      <p className={styles['cardSubTitle']}>{subtitle}</p>
      <div className={styles['containerCardButton']}>
        <button>
          Adicionar
        </button>
      </div>
    </div>
  )
}