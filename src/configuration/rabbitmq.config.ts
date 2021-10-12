import { registerAs } from "@nestjs/config";

export default registerAs('rabbitmq', () => ({
	host: process.env.RABBIT_HOST,
	port: Number(process.env.RABBIT_PORT || 15672),
	user: process.env.RABBIT_USER,
	password: process.env.RABBIT_PASSWORD,
	vhost: process.env.RABBIT_VHOST
}));