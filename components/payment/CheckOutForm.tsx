import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js'
import React from 'react'

function CheckOutForm() {
  const stripe:any=useStripe();
  const elements= useElements();


  const handleSubmit=async(e:any)=>{
    e.preventDefault();
    if(elements==null){
      return;
    }
    const {error:submitError}= await elements.submit();
    if(submitError){
      return ;
    }
// create the payment intent

const res= await fetch('/api/create-intent',{
  method:"POST",
  body:JSON.stringify({
    amount:58,
  }),
});

const secretKey= await res.json();

console.log(secretKey)
const {error}= await stripe.confirmPayment(
  {
    clientSecret:secretKey,
    elements,
    confirmParams:{
      return_url:"http://localhost:3000/",
    },
  }
);


  }


  return (
    <div className='flex flex-col justify-center items-center w-full mt-10 pt-10'>

    <form onSubmit={handleSubmit}>
      <PaymentElement/>
      <button className='w-full bg-yellow-400 text-black p-2 rounded-lg mt-3' type='submit' disabled={!stripe|| !elements}>
        Pay
      </button>
    </form>
    </div>
  
  )
}

export default CheckOutForm