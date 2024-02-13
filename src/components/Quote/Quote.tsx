import clsx from 'clsx'
import styles from './Quote.module.scss'

/** The properties of the Quote component */
type QuoteProps = {
    children: React.ReactNode,
    hangingPunctuation?: boolean,
    hideQuotes?: boolean,
}

/**
 * A large full-page quote
 * @component
 */
export default function Quote(
    { children, hangingPunctuation, hideQuotes }: QuoteProps
) {
    return (
        <q className={clsx(
            styles.quote,
            {
                [styles.hanging]: hangingPunctuation,
                [styles.hiddenQuotes]: hideQuotes
            }
        )}>
            {children}
        </q>
    )
}