import styles from './style.module.css'
import Comment from '../Comment/Comment'


export default function Post() {

    return(
    <>
        <div className={styles.post}>
          <div style={{display:'flex', justifyContent: 'space-between', paddingRight: '1rem'}}>
              <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}}>
                  <img src="https://portifolio-omega-henna.vercel.app/images/fotoperfil.png" alt="Foto de Perfil" className={styles.post__img} />
                  <div style={{height: '100%', display:'flex', flexDirection:'column', paddingTop: '1rem', paddingLeft: '1rem'}}>
                      <p className={styles.post__name}>Bruno Coitinho</p>
                      <p className={styles.post__position}>Dev Front-end</p>
                  </div>
              </div>
              <p className={styles.post__timestamp}>Publicado a 1h</p>
          </div>
          <p className={styles.post__text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi quaerat doloribus dicta molestias, alias placeat molestiae harum recusandae sequi deleniti totam, dolor repudiandae aliquid facilis ipsum iusto, voluptatum sunt ducimus? Lorem ipsum dolor sit amet consectetur adipisicing elit. In quis dolores ab aliquam, exercitationem quia et deserunt? Ad non accusamus, quis, beatae, et ullam aut placeat voluptates sapiente tempore vitae.</p>
          <p className={styles.post__feedback}>Deixe seu feedcack</p>
          <input type="text" className={styles.feedback__input} />
          <button className={styles.feedback__button}>Comentar</button>
          
          <Comment/>
        </div>
    </>
    )
}