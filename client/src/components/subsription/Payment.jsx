import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { createSubscription } from "../../actions/payment";
import { setGlobalAlert } from "../../actions/alert";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import "./Payment.css";
import axios from "axios";
import Alert from "../Alert/Alert";
const App = () => {
  // Include stripe published key here
  const stripe = loadStripe(
    "pk_test_51NKyfJSFQxjCVFiCcTXe7tetEOPExyUCUqUsCdk1jQBC9bNqD8MkJq0VODeXxm0dtw4mrLvuqHc8VBMJlKqzjsUK00tZBFeDAo"
  );
  return (
    <Elements stripe={stripe}>
      <CheckoutForm />
    </Elements>
  );
};

function CheckoutForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let { plan } = useParams();
  var User = useSelector((state) => state.currentUser);
  const [isPaymentLoading, setPaymentLoading] = useState(false);
  const [clientSecret, setClientSecret] = useState();
  const stripe = useStripe();
  const elements = useElements();

  const fetchClientSecret = async () => {
    axios
      .post(
        `https://stackoverflow-clone-mfrc.onrender.com/payment/create-charges`,
        { plan: plan }
      )
      .then((res) => {
        console.log("hihi", res.data.clientSecret);
        console.log(`fetched ${res.data.clientSecret}`);
        setClientSecret(res.data.clientSecret);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    fetchClientSecret();
  }, []);

  const payMoney = async (e) => {
    console.log("pay money called");

    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    console.log("secsec", clientSecret);
    setPaymentLoading(true);
    if (clientSecret) {
      const paymentResult = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: "Asel Peiris",
          },
        },
      });
      setPaymentLoading(false);
      if (paymentResult.error) {
        alert(paymentResult.error.message);
      } else {
        if (paymentResult.paymentIntent.status === "succeeded") {
          dispatch(createSubscription({ id: User?._id, plan: plan }));
          navigate("/AskQuestion");
          dispatch(
            setGlobalAlert(
              "Payment Successful. Congrates you are now our premium member."
            )
          );
          setTimeout(() => {
            dispatch(setGlobalAlert(""));
          }, 5000);
        }
      }
    }
    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: "Asel Peiris",
        },
      },
    });
    setPaymentLoading(false);
    if (paymentResult.error) {
      dispatch(createSubscription({ id: User?._id, plan: plan }));
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Success!");
      }
    }
  };

  return (
    <div
      style={{
        display: "flex",
        marginTop: "6vh",
        height: "90vh",
        // margin:'auto',
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "grey",
      }}
    >
      <div
        style={{
          marginTop: "40vh",
          width: "300px",
          margin: "0 auto",
          backgroundColor: "white",
          padding: "10px",
          borderRadius: "10px",
          boxShadow: "2px 2px 2px 2px #888888",
        }}
      >
        <h1 style={{ textAlign: "center" }}>Payment</h1>
        <h2>{plan} Plan</h2>
        <form
          style={{
            display: "block",
            width: "100%",
          }}
          onSubmit={payMoney}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <CardElement
              className="card"
              options={{
                style: {
                  base: {
                    backgroundColor: "white",
                  },
                },
              }}
            />
            <button className="pay-button" disabled={isPaymentLoading}>
              {isPaymentLoading ? "Loading..." : "Pay"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
