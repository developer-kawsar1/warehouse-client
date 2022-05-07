import { signOut } from 'firebase/auth';
import React from 'react';
import './Footer.css'
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth'; 
const Footer = () => {   
    const user=useAuthState(auth) 
    
    const logutManage =()=>{
      
            signOut(auth); 
           
          
    }
    return (
       <footer>
           <div className="footer-container"> 
           <div className="footer-row">
              <p>Copyrights © 2018 Grab Grocers. All Right Reserved. Developed By MotoCMS</p> 
               {
                   user[0]?.uid? <p> {user[0].displayName}</p> :<p>nothing </p>
               } 
               <button onClick={logutManage}>check</button>
           </div>
           </div>

       </footer>
    );
};

export default Footer;