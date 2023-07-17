import { useEffect } from 'react'
import Button from '@/components/Button'

export default function Nav() {

    useEffect(() => {
        console.log(window.biubiubiu)
    })

    return <nav className="bg-red-200 h-20px drag">
        <Button source="icon" icon="i-carbon-maximize" size="small" onClick={() => { window.biubiubiu }}>Click Me</Button>
    </nav>
}