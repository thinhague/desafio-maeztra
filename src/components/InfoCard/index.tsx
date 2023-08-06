import Image from "next/image"
import styles from './InfoCard.module.css'
import infocardMob from '../../../assets/infocard/InfoCard-mob.png'
import infocardDesk from '../../../assets/infocard/infoCard-desk.png'
import { useMediaQuery } from '@mantine/hooks';

export const InfoCard = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const imageInfoCard = isMobile ? infocardMob : infocardDesk;

  return (
    <div className={styles['containerInfoCard']}>
      <div className={styles['contentLeftInfoCard']}>
        <h2>Lorem ipsum</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum mauris posuere fusce proin mattis. Hendrerit cras ut nunc enim dictum. Mattis proin ut quis donec sed eget nulla. Vel mi ut mauris integer. Nibh sagittis in lobortis sed cursus condimentum velit pharetra. Amet luctus ut vulputate scelerisque .
        </p>
      </div>
      <Image alt="Infocard" src={imageInfoCard} />
    </div>

  )
}