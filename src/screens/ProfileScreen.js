import React from 'react';
import Nav from '../Nav';
import './ProfileScreen.css';
import { useAuthValue } from '../AuthContext';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import PlansScreen from './PlansScreen';
//import CheckoutFormWithStripe from '../CheckoutFormWithStripe';


const ProfileScreen = () => {

    const {currentUser} = useAuthValue();

    const LogOut = () => {
        signOut(auth).then(()=> {
            console.log('logged out');
        }).catch((error)=>{
            console.log(error);
        });
    };

  return (

    <div className='profileScreen'>

        <Nav/>

        <div className="profileScreen_body">
            <h1>Edit Profile</h1>
            <div className="profileScreen_info">
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
                    alt="Netflix avatar" 
                />
                <div className="profileScreen_details">
                    <h2>{currentUser}</h2>
                    <div className="profileScreen_plans">
                        <h3>Plans</h3>

                        <PlansScreen plan="Premium" description="4K + HDR"/>

                        <PlansScreen plan="Basic" description="720p"/>

                        <PlansScreen plan="Standard" description="1080p"/>

                        <button 
                            className="profileScreen_signOut"
                            onClick={LogOut}
                            >
                            Sign Out                        
                        </button>

                        
                    </div>
                </div>
            </div>
        </div>
        
    </div>

  )

}

export default ProfileScreen;