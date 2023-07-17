import { defineConfig, defaultInclude } from 'vitest/config'

export default defineConfig({
    test: {
        include: [
            ...defaultInclude,
            // 其他需要测试的项目
        ]
    }
})