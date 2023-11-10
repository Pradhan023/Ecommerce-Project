import axios from 'axios'
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

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

const Loginsubmit = ()=>{
    axios.post('https://authentication-api-obav.onrender.com/api/login',logindata)
    .then((res)=> {
        alert(res.data.msg);
        localStorage.setItem("token",res.data.token)
    })
    .catch((err)=>console.log(err))

    setLogindata({
        email:"",
        password:""
    })
    Nav("/")
}
return (
<div className="">
    <div className="">
    <h1 className="">Login Page</h1>
    <div className="">
        <form  className="">
            <label className="">Name</label>
            <input className="" type="text" name="email" value={logindata.email} placeholder='Email' onChange={changeHandler} required/>
            <label className="">Password</label>
            <input className="" type='password' name='password' value={logindata.password} placeholder='Password' onChange={changeHandler} required/>
            <button className="" type='submit' onClick={()=> Loginsubmit()} >Submit</button>
        </form>
    </div>
    </div>
</div>
)
}

export default Login