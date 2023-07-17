import { it, expect, describe } from 'vitest';
import add from '../electron/utils'

describe('preload', () => {
    it('add', () => {
        expect(add(1, 2)).toMatchInlineSnapshot('3')
    })
})