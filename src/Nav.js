import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import './Nav.css';

const Nav = () => {

    const[show, setShow] = useState(false);
    const navigate = useNavigate();

    const transitionNavbar = () => {

        if(window.scrollY > 100) {
            setShow(true);
        } 
        else{
            setShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll",transitionNavbar);
        return () => {
            window.removeEventListener("scroll",transitionNavbar);
        };
    }, [transitionNavbar]);
    

  return (

    <div className={`nav ${show && "nav_black"}`}>

        <div className="nav_contents">
            <img 
                src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" 
                alt="Netflix Logo" 
                className="nav_logo" 
                onClick={()=>navigate('/')}
            />

            <img 
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
                alt="Netflix Avatar" 
                className="nav_avatar" 
                onClick={()=> navigate('/profile')}
            />
        </div>



    </div>

  )

}

export default Nav;