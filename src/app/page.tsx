import styles from './page.module.scss'

export default function Home() {
    return <>
        <h1 className={styles.title}>Bricolage Grotesque</h1>
        <p className={styles.text}>Dear World</p>
        <p className={styles.description}>This is me</p>
        <div className={styles.primary}></div>
        <div className={styles.secondary}></div>
        <div className={styles.tertiary}></div>
    </>
}
