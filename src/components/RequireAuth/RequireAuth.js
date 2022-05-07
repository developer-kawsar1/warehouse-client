

import auth from "../../firebase.init" 
import {useAuthState} from 'react-firebase-hooks/auth'
import { Navigate, useLocation } from "react-router-dom";
const RequireAuth=({children})=>{
const user=useAuthState(auth)
   const location=useLocation()

console.log(!user[0]); 

       
   if(!user[0]){  

    return <Navigate to="/login" state={{ from: location }} replace />;
   
    
}else{
    return children
}
} 
export default RequireAuth