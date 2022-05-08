

import auth from "../../firebase.init" 
import {useAuthState} from 'react-firebase-hooks/auth'
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../Loader/Loader";
const RequireAuth=({children})=>{
const [user,loading]=useAuthState(auth)
   const location=useLocation()
//    if(loading){
//     return<Loader />
// }
   
// console.log(!user[0]); 
   if(loading){
       return <Loader />
   }
   if(!user){  

    return <Navigate to="/login" state={{ from: location }} replace />;
   
    
}else{
    return children
}
} 
export default RequireAuth