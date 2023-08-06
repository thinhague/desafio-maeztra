import { Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import styles from './Header.module.css'
import Image from "next/image";
import logo from '../../../assets/header/logo.svg'
import searchIcon from '../../../assets/header/search-icon.svg'
import minicart from '../../../assets/header/minicart.v2.svg'

export const Header = () => {
  const [opened, { toggle }] = useDisclosure(false);
  return (
    <header>
      <div className={styles['topBar']}>
        <span>Acompanhe as melhores promoções disponíveis aqui na Maeztra.</span>
      </div>
      <div className={styles['contentHeader']}>
        <div className={styles['contentHeaderLeft']}>
          <Burger opened={opened} onClick={toggle} />
          <Image alt="logo" src={logo} />
        </div>

        <div className={styles['contentHeaderRight']}>         
          <Image alt="Busca" src={searchIcon} />
          <Image alt="Carrinho" src={minicart} />
        </div>

      </div>
     
    </header>
  )
}