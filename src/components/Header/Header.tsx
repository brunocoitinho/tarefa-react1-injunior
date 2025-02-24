import styles from './style.module.css'
import logo from '../../assets/in_feed_logo.svg'


export default function Header() {

    return(
    <>
        <header className={styles.header}>
            <img className={styles.header__img} src={logo}/>
        </header>
    </>
    )
}