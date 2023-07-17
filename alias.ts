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
    },
    {
        find: '@utils',
        replacement: '/utils'
    },
    {
        find: '@layouts',
        replacement: '/src/layouts'
    }
]

export default alias