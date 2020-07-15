import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51H5IVgBEP4zCtsz0LsANs3hsR1FxL8QhoDFQrAddZKtWWGhVbPyJjWEh45ybE91uMILqDYpLKdoHxdIPfry61ih700zjEPbhx8'

    const onToken = token => {
        console.log(token)
        alert('Payment Sucessful')
    }

    return (
        <StripeCheckout 
            lable='Pay Now'
            name='SomeSite'
            billingAddress
            shippingAddress
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panellabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton