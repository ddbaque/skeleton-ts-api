import express from "express";
import cors from "cors"
import morgan from "morgan" 

import apiRoutes from './routes/index.routes';
import {errorHandler} from './middlewares/globalErrorHandler';

const app = express();

app.use(express.json());
app.use(cors())
app.use(morgan("dev"))

//** Rest Api Routes */
app.use("/api", apiRoutes )
app.use(errorHandler)

export default app;
