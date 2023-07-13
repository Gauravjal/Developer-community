import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const storage = multer.diskStorage({
  destination: "./uploads",
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});
const fileFilter = (req, file, cb) => {
  if (
    file.mimetype.startsWith("image/") ||
    file.mimetype.startsWith("video/")
  ) {
    cb(null, true);
  } else {
    cb(
      new Error("Invalid file format. Only images and videos are allowed."),
      false
    );
  }
};
const upload = multer({ storage, fileFilter });
import dotenv from "dotenv";
dotenv.config();
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
console.log(__dirname + "/uploads");
import userRoutes from "./routes/Users.js";
import questionRoutes from "./routes/Question.js";
import answerRoutes from "./routes/AnswerRoutes.js";
import chatBot from "./routes/chatBot.js";
import paymentRoutes from "./routes/payment.js";
import communityRoutes from "./routes/Community.js";

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
app.use("/community", communityRoutes);
//app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/uploads", express.static(__dirname + "/uploads"));
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
