import express from "express";
import cors from "cors";
import morgan from "morgan";
import "express-async-errors";

import apiRoutes from "./routes/index.routes";
import { errorHandler } from "./middlewares/globalErrorHandler";
import { corsOptions } from "./config";

const app = express();

//** ======== Global Middlewares ========= */
app.use(express.json());
app.use(cors(corsOptions));
app.use(morgan("dev"));

//** ========= Rest Api Routes ========== */
app.use("/api", apiRoutes);

//** ========= Error Middleware Handler ======== */
app.use(errorHandler);

export default app;
