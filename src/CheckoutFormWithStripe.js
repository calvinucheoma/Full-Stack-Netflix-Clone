import React from 'react';
import { loadStripe } from '@stripe/stripe-js';

let stripePromise; 

const getStripe = () => {
    if(!stripePromise){
        stripePromise = loadStripe("pk_test_51KsbY9KJhPRp5qHJ7178mhOaCkBs2ynfFJzv6c7pmSP1GE15QgavA8mB4xxdlNxJJ5pXblBxS8RfNkD2yW4GJhzT00GjMHBtDw");
    }
    return stripePromise;
};

const CheckoutFormWithStripe = () => {
    const item = {
            price: "price_1KspyqKJhPRp5qHJWZbsVCNg",
            quantity:1
        };

    const checkoutOptions = {
        lineItems : [item],
        mode : "susbcription",
        successUrl : `${window.location.origin}/success`,
        cancelUrl : `${window.location.origin}/cancel`
    };

    const redirectToCheckout = async () => {
        console.log("redirectToCheckout");

        const stripe = await getStripe();
        const {error} = await stripe.redirectToCheckout(checkoutOptions);
        console.log("stripe checkout error", error)
    }

  return (

    <div>
        <button onClick={redirectToCheckout}>
            Subscribe With Stripe
        </button>
    </div>

  )

}

export default CheckoutFormWithStripe;
