import React from 'react';
import './PlansScreen.css';
import CheckoutFormWithFlutter from '../CheckoutFormWithFlutter';
//import CheckoutFormWithStripe from '../CheckoutFormWithStripe';

const PlansScreen = ({plan,description}) => {

  return (

    <div className='plansScreen'>
        
        <div className="planScreen_plan">

            <div className="planScreen_info">
                <h5>{plan}</h5>
                <h6>{description}</h6>        
            </div>

            <CheckoutFormWithFlutter/>

        </div>
    </div>

  )

}

export default PlansScreen;