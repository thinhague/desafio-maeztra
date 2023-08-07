import styles from './SearchBar.module.css'

export const SearchBar = () => {
  return (
      <div className={styles['containerSearchBar']}>
        <input type="text" placeholder='O Que Você Busca?' />
        <button>Buscar</button>
      </div>
  )
}