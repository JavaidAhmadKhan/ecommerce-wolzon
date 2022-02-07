import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishablekey =
    "pk_test_51ISfquBvipK4aDLSpvWVjXn6cA1MJ53PePrUwa54qNlNeo9vlOwfl05RmE52CbNQ67g98KiFqxvt05jAgl8AguKe00kRSAZFJh";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      image="/src/assets/crown.svg"
      name="Wolzon"
      billingAddress
      shippingAddress
      description={`Your total is ₹${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishablekey}
    />
  );
};

export default StripeCheckoutButton;
