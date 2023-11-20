import axios from 'axios'
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import '../Style/Authentication.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    axios.post('https://ecommerce-backend-s1ya.onrender.com/api/login',logindata)
    .then((res)=> {
        if(res.data.msg === "User is successfully Login"){
        toast.success(res.data.msg);
        localStorage.setItem("token",res.data.token)
        localStorage.setItem("username",res.data.username)
        console.log(res.data);
        Nav("/")
    }
    else{
        toast.warn("Invalid Entery")
        toast.warn(res.data.msg);
    }
    })
    .catch((err)=>console.log(err))

    setLogindata({
        email:"",
        password:""
    })
}
return (
<div className="form-parent">
    <img style={{position:"absolute", width:"100%" , top:"5rem", height:"64%" }} src="https://www.popsci.com/uploads/2020/06/05/3NIEQB3SFVCMNHH6MHZ42FO6PA.jpg?auto=webp" />
    <div className="form-Container">
    <h1 className="form-head">Login Page</h1>
        <div className="childform-container">
            <form >
                <label className="form-label">Name</label>
                <input className="formInp" type="text" name="email" value={logindata.email} placeholder='Email' onChange={changeHandler} required/>
                <label className="form-label">Password</label>
                <input className="formInp" type='password' name='password' value={logindata.password} placeholder='Password' onChange={changeHandler} required/>
                <button className="form-btn" type='submit' onClick={Loginsubmit} >Login</button>
            </form>
            <div className='orOtpion'>
                <span>Or</span>
                <span onClick={()=>Nav("/singup")}>Sign-Up</span>
            </div>
        </div>
    </div>
    <ToastContainer />
</div>
)
}

export default Login