import styles from './page.module.scss'
import Header from '@/components/Header'
import Quote from '@/components/Quote'
import Divider from '@/components/Divider'

export default function Home() {

    return <>
        <section className={styles.container}>
            <Header />
            <Quote
                hangingPunctuation={true}
                hideQuotes={true}
            >
                <i>„</i>You miss 100% of the shots you don’t <span style={{ whiteSpace: 'nowrap' }}>take—</span>Wayne Gretzky<i><span style={{ whiteSpace: 'nowrap' }}>“—</span>Michael Scott</i>
            </Quote>
            <Divider style='secondary' />
        </section>
    </>
}
