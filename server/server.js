import express from "express";
const app = express();
import cors from "cors";
import router from "./routes/jwtAuth.js";
import dash from "./routes/dashboard.js"

app.use(express.json())
app.use(cors())

app.use("/auth", router);

app.use("/dashboard", dash);

app.listen(5000, () => {
  console.log(`Server is starting on port 5000`);
});