import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Loader from '../Loader/Loader'; 
import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';
const Registration = () => {   
// const email="kawsarcoc229@gmail.com"
// const password="kawsar@1"
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification: true});

    const subRegForm=async (e)=>{  
        const email= e.target.email.value
         const name=e.target.name.value 
        const password=e.target.password.value 
  console.log(email,password);
        e.preventDefault() 
        await   createUserWithEmailAndPassword(email,password) 
     
    } 
    if(loading){
        return <Loader />
    } 
    if(error){
        toast(error.message)
    }
    return (
        <div className='login-page'>
            <h2>Registration page  </h2> 

            <form action="" onSubmit={subRegForm}>
                <input type="text" placeholder='name' name='name'/>
                <input type="email" placeholder='email' name='email'/>
                <input type="password" placeholder='password' name='password'/>   
                {/* <p className="error">  {error?.message}</p>  */}
                <ToastContainer />
                <p>already user ? <Link to="/login">Login Here  </Link> </p>
                <input type="submit" value="Registration"  className='btn login-btn'/> 

            </form>
         
        </div>
    );
};

export default Registration;