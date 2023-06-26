import express from "express";
import {chatBot } from "../controllers/chat.js";
const app = express();
const router = express.Router();
router.post("/", chatBot);
export default router;
