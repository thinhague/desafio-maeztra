import styles from './Newsletter.module.css'

export const Newsletter = () => {
  return (
    <div className={styles['containerNewsletter']}>
      <div className={styles['contentNewsletter']}>
        <h2 className={styles['titleNewsletter']}>Recebe Nossa Newsletter</h2>
        <form className={styles['formNewsletter']}>
          <input type="text" placeholder='Digite seu e-mail' />
          <button type='submit'>Enviar</button>
        </form>
      </div>
    </div>
  )
}