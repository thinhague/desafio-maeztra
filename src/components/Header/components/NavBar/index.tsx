import styles from './NavBar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { data } from './navbarData'

export const NavBar = () => {
  return (
    <div className={styles['containerNavBar']}>
      <div className={styles['contentNavBar']}>
        {data?.map((navBarItem, index) => (
          <Link href="#" key={index}>
            {navBarItem?.icon && <Image alt='icon' src={navBarItem.icon} />}
            <span className={styles[`${navBarItem?.hightlight ? 'nav-hightlight' : ''}`]}>{navBarItem?.text}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}