import LinkButton from '../LinkButton'
import styles from './Header.module.scss'

/**
 * The header component that is used throught the entire website
 * @component
 */
export default function Header() {
    return (
        <header className={styles.header}>
            <section className={styles.main}>
                <h3 className={styles.companyName}>Dunder Mifflin</h3>
                <p className={styles.tagline}>Limitless Paper in a Paperless World</p>
            </section>
            <LinkButton
                className={styles.button}
                label='Sign In'
                href='/signin'
            />
        </header>
    )
}