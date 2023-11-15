import axios from 'axios'
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import '../Style/Authentication.css'

const Login = () => {
  const Nav = useNavigate()
  const[logindata,setLogindata] = useState({
    email:"",
    password:""
})


const changeHandler = (e)=>{
    setLogindata({
        ...logindata , [e.target.name] : e.target.value
})
}

const token = localStorage.getItem("token")

const Loginsubmit = ()=>{
    axios.post('https://ecommerce-backend-rzz2.onrender.com/api/login',logindata)
    .then((res)=> {
        alert(res.data.msg);
        localStorage.setItem("token",res.data.token)
        console.log(res.data);
    })
    .catch((err)=>console.log(err))

    setLogindata({
        email:"",
        password:""
    })

    if(token){
        Nav("/")
    }
    else{
        Nav("/singup")
    }
}
return (
<div className="form-parent">
    <div className="form-Container">
    <h1 className="form-head">Login Page</h1>
        <div className="childform-container">
            <form >
                <label className="form-label">Name</label>
                <input className="formInp" type="text" name="email" value={logindata.email} placeholder='Email' onChange={changeHandler} required/>
                <label className="form-label">Password</label>
                <input className="formInp" type='password' name='password' value={logindata.password} placeholder='Password' onChange={changeHandler} required/>
                <button className="form-btn" type='submit' onClick={()=> Loginsubmit()} >Login</button>
            </form>
            <div className='orOtpion'>
                <span>Or</span>
                <span onClick={()=>Nav("/singup")}>Sign-Up</span>
            </div>
        </div>
    </div>
</div>
)
}

export default Login