import styles from './Footer.module.css'
import { AccordionFooter } from "../AccordionFooter";
import { Newsletter } from "../Newsletter";
import Image from "next/image";
import facebbok from '../../../assets/footer/facebook.svg'
import linkedin from '../../../assets/footer/linkedin.svg'
import instagram from '../../../assets/footer/instagram.svg'
import youtube from '../../../assets/footer/youtube.svg'
import visa from '../../../assets/footer/visa.svg'
import mastercard from '../../../assets/footer/mastercard.svg'
import vtex from '../../../assets/footer/powered-by-vtex.svg'
import maeztra from '../../../assets/footer/powered-by-maeztra.svg'

export const Footer = () => {
  return (
    <footer>
      <Newsletter />
      <AccordionFooter />
      <div className={styles['containerFooter']}>
        <div className={styles['contentFooter']}>
          <div className={styles['containerSocialNetworks']}>
            <Image alt="facebook" src={facebbok} />
            <Image alt="linkedin" src={linkedin} />
            <Image alt="instagram" src={instagram} />
            <Image alt="youtube" src={youtube} />
          </div>
          <div className={styles['containerPayment']}>
            <Image alt="visa" src={visa} />
            <Image alt="mastercard" src={mastercard} />
            <Image alt="visa" src={visa} />
            <Image alt="mastercard" src={mastercard} />
          </div>
          <div className={styles['containerCredits']}>
            <div className={styles['containerVtex']}>
              <span>Powered by</span>
              <Image alt="vtex" src={vtex} />
            </div>
            <div className={styles['containerMaeztra']}>
              <span>Developed by</span>
              <Image alt="maeztra" src={maeztra} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}