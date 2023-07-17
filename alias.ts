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
    }
]

export default alias