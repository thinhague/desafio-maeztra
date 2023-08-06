import styles from './BannerMobile.module.css'
import bannerMob from '../../../assets/banner-mobile/banner-mob.png'
import callToActionText from '../../../assets/banner-mobile/callToActionText.png'
import headline from '../../../assets/banner-mobile/headline.png'
import subhead from '../../../assets/banner-mobile/subhead.png'
import Image from 'next/image'
import Link from 'next/link'

export const BannerMobile = () => {
  return (
    <Link href="#">
      <div className={styles['containerBannerMob']}>
        <Image className={styles['bannerMob']} alt='banner' src={bannerMob} />
        <Image alt='headline' src={headline} />
        <Image alt='subhead' src={subhead} />
        <Image alt='callToActionText' src={callToActionText} />
      </div>
    </Link>
  )
}