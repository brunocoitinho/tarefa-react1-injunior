import styles from './style.module.css'



export default function Profile() {

    return(
      <>
        <div className={styles.profile}>
          <img src="https://portifolio-omega-henna.vercel.app/images/fotoperfil.png" alt="" className={styles.profile__img} />
          <p className={styles.profile__name}>Bruno Coitinho</p>
          <p className={styles.profile__position}>Dev Front-end</p>
        </div>
      </>
    )
  }