import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const app = express();

import userRoutes from "./routes/Users.js";
import questionRoutes from "./routes/Question.js";
import answerRoutes from "./routes/AnswerRoutes.js";
import chatBot from "./routes/chatBot.js";
import paymentRoutes from "./routes/payment.js";
app.use(express.json({ limit: "50mb", extended: true }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());
app.get("/", (req, res) => {
  res.send("This is stackoverflow clone");
});
app.use("/users", userRoutes);
app.use("/questions", questionRoutes);
app.use("/answers", answerRoutes);
app.use("/chat", chatBot);
app.use("/payment", paymentRoutes);
const PORT = process.env.PORT || 5000;
// app.listen(PORT);
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server has started to port 5000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
