import { registerAs } from "@nestjs/config";

export default registerAs('http', () => ({
  timeout: Number(process.env.HTTP_TIMEOUT || 5000),
  maxRedirects: Number(process.env.HTTP_MAX_REDIRECTS || 5),
}));