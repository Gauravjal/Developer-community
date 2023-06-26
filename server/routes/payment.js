import express from "express";
const router = express.Router();

import {createCustomer} from '../controllers/payment.js';
import {addNewCard} from '../controllers/payment.js';
import {createCharges} from '../controllers/payment.js';
import {createSubscription} from "../controllers/payment.js"
router.post('/create-customer', createCustomer);
router.post('/add-card', addNewCard);
router.post('/create-charges',createCharges);
router.post('/subscription',createSubscription);

export default router;