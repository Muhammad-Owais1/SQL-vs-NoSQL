import express from "express";
import cors from "cors";
import helmet from "helmet";
import mongoose from "mongoose";
import routes from "./src/routes/index.js";
import "dotenv/config";

const app = express();

const PORT = 3555;

app.use(cors());
app.use(helmet());
app.use(express.json());

mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@mongotest.cptqd.mongodb.net/?retryWrites=true&w=majority&appName=MongoTest`
);

mongoose.connection.on("connected", () => {
  console.log("db connected");
});

app.get("/", (req, res) => {
  try {
    res.send("Working");
  } catch (err) {
    console.log(err);
  }
});

app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
