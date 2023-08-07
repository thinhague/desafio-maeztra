import styles from './Menu.module.css'
import Link from 'next/link'

export const Menu = () => {
  return (
    <div className={styles['containerMenu']}>
      <div className={styles['contentMenu']}>
        <div>
          <h3>Informações</h3>
          <Link href="#">Quem Somos</Link>
          <Link href="#">Prazo de Envio</Link>
          <Link href="#">Trocas e Devoluções</Link>
        </div>

        <div>
          <h3>Minha Conta</h3>
          <Link href="#">Minha Conta</Link>
          <Link href="#">Meus Pedidos</Link>
          <Link href="#">Cadastre-se</Link>
        </div>

        <div>
          <h3>Onde nos Encontrar</h3>
          <Link href="#">Lojas</Link>
          <Link href="#">Endereço</Link>
        </div>
      </div>
    </div>
  )
}