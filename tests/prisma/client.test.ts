import createClient from '@prismaloc/client';
import { describe, expect, it } from 'vitest';

describe('prisma client', () => {
    it('should create a new client', () => {
        const client = createClient();
        expect(client).toBeDefined();
        client.$disconnect();
    })

    it('should have access to the client database', async () => {
        const client = createClient();
        client.$connect();
        const result = await client.user.findMany();
        expect(result).toBeDefined();
        client.$disconnect();
    })
})
