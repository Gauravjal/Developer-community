import express from "express";
import { postQuestion } from "../controllers/Question.js";
import { deleteQuestion } from "../controllers/Question.js";
import { voteQuestion } from "../controllers/Question.js";
import { fetchAllQuestions } from "../controllers/Question.js";

const router = express.Router();
router.post("/question", postQuestion);
router.get("/fetchAllQuestions", fetchAllQuestions);
router.delete("/question/:id", deleteQuestion);
router.patch("/question/vote/:id", voteQuestion);
export default router;
