import { registerAs } from "@nestjs/config";

export default registerAs('redis', () => ({
  host: process.env.REDIS_HOST,
  port: Number(process.env.REDIS_PORT || 6379),
  prefix: process.env.REDIS_PREFIX,
  auth: process.env.REDIS_AUTH,
  ttl: Number(process.env.REDIS_TTL || 0),
}))