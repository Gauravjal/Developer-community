import mongoose from "mongoose";
import User from "../models/User.js";
// const { STRIPE_PUBLISHABLE_KEY, STRIPE_SECRET_KEY } = process.env;
const STRIPE_PUBLISHABLE_KEY =
  "pk_test_51NKyfJSFQxjCVFiCcTXe7tetEOPExyUCUqUsCdk1jQBC9bNqD8MkJq0VODeXxm0dtw4mrLvuqHc8VBMJlKqzjsUK00tZBFeDAo";
const STRIPE_SECRET_KEY ="sk_test_51NKyfJSFQxjCVFiC3qjw6lGfcmDzGRuYb5VU8dS77LyjpmRacrofyOOX2764GIZdhY4VAr2URPSub9QIoNci51Ay00BMt6lRDr";
import Stripe from "stripe";
const stripe = new Stripe(STRIPE_SECRET_KEY);

export const createCustomer = async (req, res) => {
  try {
    const customer = await stripe.customers.create({
      name: req.body.name,
      email: req.body.email,
    });

    res.status(200).send(customer);
  } catch (error) {
    res.status(400).send({ success: false, msg: error.message });
  }
};

export const addNewCard = async (req, res) => {
  try {
    const {
      customer_id,
      card_Name,
      card_ExpYear,
      card_ExpMonth,
      card_Number,
      card_CVC,
    } = req.body;

    const card_token = await stripe.tokens.create({
      card: {
        name: card_Name,
        number: card_Number,
        exp_year: card_ExpYear,
        exp_month: card_ExpMonth,
        cvc: card_CVC,
      },
    });

    const card = await stripe.customers.createSource(customer_id, {
      source: `${card_token.id}`,
    });

    res.status(200).send({ card: card.id });
  } catch (error) {
    res.status(400).send({ success: false, msg: error.message });
  }
};

export const createCharges = async (req, res) => {
  const { plan } = req.body;
  console.log("items",plan);
  console.log("items",req.body);
  let amt;
  if(plan==="Gold")
  amt=100000;
  else
  amt=50000;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amt,
    currency: "inr",
    description: "payment",
    payment_method_types: ["card"],
  });
  console.log("seccret", paymentIntent.client_secret);
  res.status(200).json({
    clientSecret: paymentIntent.client_secret,
  });
};

export const createSubscription = async (req, res) => {
  const { id, plan } = req.body;
  // console.log(id);
  // console.log(plan);
  const _id = id;
  console.log(_id);
  try {
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(404).json({ message: "No user with this id" });
    }
    const user = await mongoose.model("User").findById(_id);
    console.log(user);
    user.subscription = plan;
    user.save();
    return res.status(200).json(user);
  } catch {
    return res.status(404).json("Something went wrong");
  }
};
