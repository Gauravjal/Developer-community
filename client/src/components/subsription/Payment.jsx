import React, { useState, useEffect } from "react";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import "./Payment.css";
import axios from "axios";

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
  const [isPaymentLoading, setPaymentLoading] = useState(false);
  const [clientSecret, setClientSecret] = useState();
  const stripe = useStripe();
  const elements = useElements();

  const fetchClientSecret = async () => {
    axios
      .post(`http://localhost:5000/payment/create-charges`)
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
          alert("Success!");
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
      alert(paymentResult.error.message);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Success!");
      }
    }
  };

  return (
    <div
      style={{
        padding: "300px",
      }}
    >
      <div
        style={{
          maxWidth: "500px",
          margin: "0 auto",
        }}
      >
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
