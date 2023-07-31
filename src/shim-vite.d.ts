import type { AttributifyAttributes } from '@unocss/preset-attributify'
import { RendererMessage, MainMessage } from '@electronloc/apis/types'
import { RendererAPI } from '@electronloc/apis/RenderAPI'
declare module 'react' {
    interface HTMLAttributes<T> extends AttributifyAttributes { }
}

declare global {
    interface Window {
        ipc: {
            send: <
                T extends keyof MainMessage,
                Params extends Parameters<MainMessage[T]>
            >(messageName: T, ...args: Params) => ReturnType<MainMessage[T]>
        }
    }
}