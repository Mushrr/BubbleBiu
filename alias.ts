import { AliasOptions } from 'vite'
const alias: AliasOptions = [
    {
        find: '@',
        replacement: '/src',
    },
    {
        find: '@electronloc',
        replacement: '/electron',
    },
    {
        find: '@prismaloc',
        replacement: '/electron/prisma',
    },
    {
        find: '@components',
        replacement: '/src/components',
    }
]

export default alias