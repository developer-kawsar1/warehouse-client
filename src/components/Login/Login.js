import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init'; 
import Loader from '../Loader/Loader';
import './Login.css'

const Login = () => {  
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth); 
    const [
        signInWithEmailAndPassword,
        emailuser,
        emailloading,
        emailerror,
      ] = useSignInWithEmailAndPassword(auth); 
    const navigate=useNavigate() 
    const location=useLocation()
    const from=location.state?.from?.pathname || '/'
    if (loading || emailloading) {
        return <p><Loader /> </p>;
      } 
    if(user ||  emailuser ){
        // alert("user")
        navigate(from,{replace:true})
    }
    const googleSignIn=()=>{
           signInWithGoogle()
    } 


    const handelSubmit=(e) => {
        e.preventDefault()
        // alert("clicked") 

        const email=e.target.loginemail.value 
        const password=e.target.loginpass.value
        signInWithEmailAndPassword(email,password)
    }
   
    return (
        <div className='login-page'>
            <h2>Login page </h2> 

            <form action="" onSubmit={handelSubmit}>
                <input type="text" placeholder='email' name='loginemail'/>
                <input type="password" placeholder='password' name='loginpass'/>  
                <p>New user ? <Link to="/registration">registration here </Link> </p>
                <input type="submit" value="log in"  className='btn login-btn'/> 

            </form>
            <button className='btn google-btn' onClick={googleSignIn}><i className="fa fa-google"></i> <span>google sign in</span> </button>
        </div>
    );
};

export default Login;