import styles from './LinkButton.module.scss'
import { MouseEvent } from 'react'
import Link from 'next/link'
import clsx from 'clsx'

/** Properties of the `LinkButton` component */
type LinkButtonProps = {
    label: string,
    href: string,
    className?: string,
    onClick?: ((event: MouseEvent<HTMLElement>) => void)
}

/**
 * A Next.js `Link` wrapper that resembles a button
 * @component
 * @param {LinkButtonProps} props A list of properties for the button
 */
export default function LinkButton(
    { label, href, onClick, className }: LinkButtonProps
) {
    return (
        <Link
            role='button'
            href={href}
            onClick={onClick}
            className={clsx(styles.link, className  )}
        >
            {label}
        </Link>
    )
}
