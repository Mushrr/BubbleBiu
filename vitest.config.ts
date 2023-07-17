import { defineConfig, defaultInclude } from 'vitest/config'
import alias from './alias'

export default defineConfig({
    test: {
        include: [
            ...defaultInclude,
            // 其他需要测试的项目
        ]
    },
    resolve: {
        alias
    }
})