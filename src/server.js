import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import authenticationRoutes from "./routes/authenticationRoutes.js";
import shortenRoute from "./routes/shortenRoute.js";
import getUrlRoute from "./routes/getUrlRoute.js";
import redirectUrlRoute from "./routes/redirectUrlRoute.js";
import deleteUrlRoute from "./routes/deleteUrlRoute.js";
import getUserDataRoute from "./routes/getUserDataRoute.js";
import rankingRoute from "./routes/rankingRoute.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use(authenticationRoutes);
app.use(shortenRoute);
app.use(getUrlRoute);
app.use(redirectUrlRoute);
app.use(deleteUrlRoute);
app.use(getUserDataRoute);
app.use(rankingRoute);

app.get("/status", (req, res) => {
  res.sendStatus(200);
});

app.listen(PORT, () => console.log("Listening on port " + PORT));
