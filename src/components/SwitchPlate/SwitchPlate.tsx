import { InputHTMLAttributes, forwardRef } from 'react'
import Switch from '../Switch'
import styles from './SwitchPlate.module.scss'
import clsx from 'clsx'

// Type aliases for code readability
type Switch = HTMLInputElement
type SwitchProps = InputHTMLAttributes<Switch> & { label: string }

/**
 * A Switch with a custom label on a plate
 * @component
 * @param {SwitchProps} props A list of properties that will be applied to the underlying Switch component
 * @param {Ref} ref A react Ref object that can be passed to the underlying Switch element
 */
const SwitchPlate = forwardRef<Switch, SwitchProps>((
    { checked, ...props }, ref
) => {

    return <>
        {/* A plate */}
        <label className={clsx(
            styles.plate,
            { [styles.checked]: checked }
        )}>

            {/* A label for the Switch */}
            <span className={clsx(
                styles.label,
                { [styles.checked]: checked }
            )}>
                Public only
            </span>

            {/* The Switch itself */}
            <Switch
                checked={checked}
                ref={ref}
                {...props}
            />

        </label>
    </>
})

export default SwitchPlate