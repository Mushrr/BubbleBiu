import type { AttributifyAttributes } from '@unocss/preset-attributify'
import type { TestType } from '@electronloc/apis/apiTypes'

declare module 'react' {
    interface HTMLAttributes<T> extends AttributifyAttributes { }
}

declare global {
    interface Window extends TestType {

    }
}