import clsx from 'clsx'
import styles from './Divider.module.scss'

/** Divider properties */
type DividerProps = {
    style?: 'primary' | 'secondary'
    className?: string
}

/**
 * A horizontal divider
 * @component
 */
export default function Divider({ className, style }: DividerProps) {
    return (
        <div
            role="separator"
            className={clsx(
                styles.divider,
                className,
                {
                    [styles.primary]: style === 'primary',
                    [styles.secondary]: style === 'secondary'
                }
            )}
        ></div>
    )
}