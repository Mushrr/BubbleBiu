import { PrismaClient } from "@prisma/client";

export default function createClient() {
    return new PrismaClient();
}