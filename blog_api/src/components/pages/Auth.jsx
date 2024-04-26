import React, { useState } from 'react'
import {useCookies} from 'react-cookie';


export const Auth = () => {
    const [isLogin, setIsLogin] = useState(true)
    const [error,setError] = useState(null);
    const [name, setName] = useState();
    const [lastname, setLastName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [cookies, setCookie] = useCookies(null);
    const url = "https://mugblock-backend.onrender.com";
    

    const viewLogin =(state)=>{
        setError(null);
        setIsLogin(state);
    }
    const handleSubmit = async(e,endpoint) =>{
        e.preventDefault();
        if(!isLogin && password !== confirmPassword){
            setError('Make sure passwords match');
            return
        }


        const response = await fetch(`${url}/api/v1/${endpoint}`,{
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({name,lastname,email,password})    
        },3000)
        if(response.status === 200){
            const {data} =await response.json()
            if(data.detail){
                setError(data.detail);
            }else{
                setCookie('Email',data.email)
                setCookie('AuthToken', data.token)
                window.location.reload();
            }
        }else{
            console.log('Send failed')
        }
        
    }
    
  return (
    <div className='auth-container'>
        <div className="auth-container-box">
            <form className='auth-form' method='POST'>
                <h2>{isLogin? 'Please Login': 'Please Sign up'}</h2>
                {!isLogin && <input required className='auth-name' type="text" onChange={(e)=>setName(e.target.value)} placeholder=' Name'/>}
                {!isLogin && <input required className='auth-lastname' type="text" onChange={(e)=>setLastName(e.target.value)} placeholder=' Lastname'/>}
                <input required className='auth-email' type="email" onChange={(e)=>setEmail(e.target.value)} placeholder=' Email'/>
                <input required className='auth-password' type="password" onChange={(e)=>setPassword(e.target.value)} placeholder=' Password'/>
                { !isLogin && <input required className='auth-confirm' type="password" onChange={(e)=>setConfirmPassword(e.target.value)} placeholder=' Confirm Password'/>}
                <input className='auth-submit' type='Submit' onClick={(e)=> handleSubmit(e, isLogin ? 'login' : 'signup')}/>
                {error && <p>{error}</p>}
            </form>
            <div className='auth-options'>
                <button  onClick={()=>viewLogin(false)} style={{backgroundColor: !isLogin ? 'rgb(188,188,188)': 'rgb(255,255,255)'}}>Sign Up</button>
                <button onClick={()=>viewLogin(true)} style={{backgroundColor: isLogin ? 'rgb(188,188,188)': 'rgb(255,255,255)'}}>Login</button>
            </div>
           
        </div>
        
    </div>
  )
}
