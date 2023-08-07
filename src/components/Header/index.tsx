import { Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import styles from './Header.module.css'
import Image from "next/image";
import logoMob from '../../../assets/header/logo.svg'
import logoDesk from '../../../assets/header/logo-desk.svg'
import searchIcon from '../../../assets/header/search-icon.svg'
import minicart from '../../../assets/header/minicart.v2.svg'
import { useMediaQuery } from '@mantine/hooks';
import { SearchBar } from './components/SearchBar';
import myAccountIcon from '../../../assets/header/my-account-icon.svg'
import wishlistIcon from '../../../assets/header/wishlist.svg'
import minicartDeskIcon from '../../../assets/header/minicart-desk.svg'
import Link from 'next/link';
import { NavBar } from './components/NavBar';
import { useEffect, useState } from 'react';

export const Header = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const [isFixed, setIsFixed] = useState(false)
  const isMobile = useMediaQuery('(max-width: 1024px)');
  const logo = isMobile ? logoMob : logoDesk

  useEffect(() => {
    const handleScrollWindow = () => {
      const currentScrollY = window.scrollY;
      currentScrollY > 100 
      ? setIsFixed(true) 
      : setIsFixed(false)
    }

    window.addEventListener("scroll", handleScrollWindow);
    return () => window.removeEventListener("scroll", handleScrollWindow);
  },[])

  return (
    <header className={styles['header']}>
      <div className={styles['topBar']}>
        <span>Acompanhe as melhores promoções disponíveis aqui na Maeztra.</span>
      </div>

      <div className={`${styles['containerHeader']} ${isFixed ? styles['containerHeader--stuck'] : ''}`}>
        <div className={styles['contentHeader']}>
          <div className={styles['contentHeaderLeft']}>
            {isMobile && <Burger opened={opened} onClick={toggle} />}
            <Image alt="logo" src={logo} />
          </div>

          {!isMobile &&

            <SearchBar />

          }
          <div className={styles['contentHeaderRight']}>
            {isMobile ?
              <>
                <Image alt="Busca" src={searchIcon} />
                <Image alt="Carrinho" src={minicart} />
              </>
              :
              <>
                <Link href="#">
                  <Image alt='minha conta' src={myAccountIcon} />
                  <span>Minha Conta</span>
                </Link>
                <Link href="#">
                  <Image alt='favoritos' src={wishlistIcon} />
                  <span>Minha Conta</span>
                </Link>
                <Link href="#">
                  <Image alt='carrinho' src={minicartDeskIcon} />
                  <span>Meu Carrinho</span>
                </Link>
              </>
            }
          </div>
        </div>
      </div>

      {!isMobile && <NavBar />}
    </header>
  )
}