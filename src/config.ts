import "dotenv/config";

const PORT = process.env.PORT || 5000;

const BASE_URL = process.env.BASE_URL || "http://localhost:";

export { PORT, BASE_URL };
