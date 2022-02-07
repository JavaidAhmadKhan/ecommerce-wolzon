import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishablekey =
    "pk_test_51ISfquBvipK4aDLSpvWVjXn6cA1MJ53PePrUwa54qNlNeo9vlOwfl05RmE52CbNQ67g98KiFqxvt05jAgl8AguKe00kRSAZFJh";
  return (
    <div>
      <StripeCheckout
        label="Pay Now"
        
        name="Wolzon"
        billingAddress
        shippingAddress
      />
    </div>
  );
};

export default StripeCheckoutButton;
