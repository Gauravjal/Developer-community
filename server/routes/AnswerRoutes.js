import express from "express";
import { postAnswer } from "../controllers/Answer.js";
import { deleteAnswer } from "../controllers/Answer.js";
const app = express();
const router = express.Router();
router.patch("/answer/:id", postAnswer);
router.patch("/answer/delete/:id", deleteAnswer);
export default router;
