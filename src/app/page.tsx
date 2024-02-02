'use client'

import styles from './page.module.scss'
import { useState } from 'react'
import LinkButton from '@/components/LinkButton'
import SwitchPlate from '@/components/SwitchPlate'
import Header from '@/components/Header'

export default function Home() {

    // Create a state for the Switch
    const [checked, setChecked] = useState(false)

    return <>
        <section className={styles.container}>
            <Header />
            <LinkButton
                label='Sign In'
                href='/'
            ></LinkButton>
            <SwitchPlate
                checked={checked}
                onChange={() => { setChecked(!checked) }}
                label='Public only'
            />
        </section>
    </>
}
