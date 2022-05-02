import React from 'react';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import { useAuthValue } from './AuthContext';


export default function CheckoutFormWithFlutter() {

  const {currentUser} = useAuthValue();


  const config = {
    public_key: 'FLWPUBK_TEST-646d29f51f1609f34683a3fcd3aca30d-X',
    tx_ref: Date.now(),
    amount: 13000,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: `${currentUser}`,
      phonenumber: '07064586146',
      name: 'Chukwuma Ucheoma',
    },
    customizations: {
      title: 'Monthly Subscription',
      description: 'Payment for Netflix',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <>
      <button
        style={{padding:'10px 20px',fontSize:'1rem',color:'#fff',backgroundColor:'#e50914',border:'none',fontWeight:'600',cursor:'pointer'}}
        onClick={() => {
          handleFlutterPayment({
            callback: (response) => {
               console.log(response);
                closePaymentModal() // this will close the modal programmatically
            },
            onClose: () => {},
          });
        }}
      >
        Subscribe
      </button>
    </>
  );
}