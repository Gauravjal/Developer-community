import { confifdfrmPayment } from "@stripe/react-stripe-js";

import axios from "axios";

export const addCredits = (token) => async (dispatch) => {
  const response = await axios.post(
    "http://localhost:5000/payment/create-charges",
    token
  );

  const confirmPayment = await confirmPayment(response.data.id, {
    paymentMethodType: "Card",
  });

  // dispatch({ type: FETCH_USER, user: response.data });
};


export const createSubscription=(id,plan)=>async (dispatch)=>{
  const response=await axios.post(
    "http://localhost:5000/payment/subscription",
    {id,plan}
  );
}