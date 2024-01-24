'use client'

import SwitchPlate from '@/components/SwitchPlate'
import { useState } from 'react'

export default function Home() {

    // Create a state for the Switch
    const [checked, setChecked] = useState(false)

    return <>
        <SwitchPlate
            checked={checked}
            onChange={() => { setChecked(!checked) }}
            label='Public only'
        />
    </>
}
