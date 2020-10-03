import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "sk_test_51H5IVgBEP4zCtsz07lOBkHSGhxM3WOdpaCAmByhSRUaW2239DVFj81AWPVphxeUBh4XOFLspjHOO9JKUQRmER5mw0018gWYaU9";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Sucessful");
  };

  return (
    <StripeCheckout
      lable="Pay Now"
      name="SomeSite"
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panellabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
