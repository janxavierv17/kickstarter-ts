import * as express from "express";
import { PORT } from "./utils/config";
import projects from "./routes/projects";
import { errorHandler } from "./middleware/error.afterAllHandler";
const app = express();
app.use(express.json());

app.use("/api/projects", projects);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started at ${PORT}`));
