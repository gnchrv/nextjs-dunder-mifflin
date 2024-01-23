import { InputHTMLAttributes, forwardRef } from 'react'
import styles from './Switch.module.scss'
import clsx from 'clsx'

// Define two type aliases for code readability
type Checkbox = HTMLInputElement
type CheckboxProps = InputHTMLAttributes<Checkbox>

/**
 * A custom switch / toggle component that is built upon a native HTML checkbox 
 * @component
 * @param {CheckboxProps} props A list of checkbox properties that will be applied to the checkbox input that the component is built upon
 * @param {Ref} ref A react Ref object that can be passed to the switch and that will be forwarded to the underlying HTML checkbox input
 */
const Switch = forwardRef<Checkbox, CheckboxProps>((props, ref) => (

    <label className={styles.label}>

        {/* Hidden checkbox with the atteched ref */}
        <input
            className={styles.checkbox}
            type="checkbox"
            ref={ref}
            {...props} />

        {/* The switch container */}
        <div className={clsx(
            styles.container,
            { [styles.checked]: props.checked }
        )} >

            {/* The knob */}
            <div className={clsx(
                styles.knob,
                { [styles.checked]: props.checked }
            )}></div>

        </div>
    </label>
))

export default Switch