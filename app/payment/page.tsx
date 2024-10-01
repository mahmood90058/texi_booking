"use client"
import React, { useContext } from 'react'
// import { SelectedCarAmountContext } from '../context/SelectedCartAmountContext'
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckOutForm from '@/components/payment/CheckOutForm';

function PaymentPage() {
    // const {carAmount,setCarAmount}= useContext(SelectedCarAmountContext);

    const stripePromise= loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHER_KEY as any)

    const options:any={
        mode:'payment',
        amount:547,
        currency:'usd',

    }


  return (
    <div>
        <Elements stripe={stripePromise} options={options}>
            <CheckOutForm/>

        </Elements>

    </div>
  )
}

export default PaymentPage