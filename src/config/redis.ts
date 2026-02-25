import Redis from "ioredis";

const redisUrl = process.env.REDIS_URL;

if (!redisUrl) {
    console.warn("REDIS_URL not set, using default localhost:6379");
}

export default new Redis(redisUrl || "redis://localhost:6379");
