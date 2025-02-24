import styles from './style.module.css'
import trash from '../../assets/Trash.svg'
import like from '../../assets/Like.svg'


export default function Comment() {

    return(
    <>
        <div className={styles.comment}>
          <img src="https://portifolio-omega-henna.vercel.app/images/fotoperfil.png" alt="" className={styles.comment__img} />
          <div>
              <div className={styles.comment__block}>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div>
                        <p className={styles.comment_author}>Bruno Coitinho</p>
                        <p className={styles.comment_timestamp}>Cerca de 2h</p>
                    </div>
                    <img src={trash} className={styles.icons} alt="Descartar comentário" />
                </div>
                <p className={styles.comment_text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur officia dolor itaque voluptatem assumenda facilis mollitia repudiandae maiores eum, perferendis molestias magnam pariatur minus vitae voluptates numquam? Maiores, sequi ipsum?</p>
              </div>
              <span style={{color:'#036fdb'}}><img src={like} className={styles.icons} alt="Curtir comentário" />Like * 7</span>
          </div>
        </div>
        
    </>
    )
}