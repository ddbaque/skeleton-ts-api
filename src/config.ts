import "dotenv/config";
import { CorsOptions } from "cors";

const PORT = process.env.PORT || 5000;

const BASE_URL = process.env.BASE_URL || "http://localhost:";

const CLIENT_URL = process.env.CLIENT_URL || "";

const corsOptions: CorsOptions = {
  origin: [CLIENT_URL],
  methods: ["GET", "PUT", "POST", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
  maxAge: 3600,
};

export { PORT, BASE_URL, corsOptions, CLIENT_URL };
