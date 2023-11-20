import React,{useState} from 'react'
import '../Style/Authentication.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import bg from '../../assets/authBg.jpeg'

const Singup  = () => {
    const[regdata,setRegdata] = useState({
        username:"",
        email:"",
        password:""
    })
    
    const Nav = useNavigate()
   
    const changeHandler = (e)=>{
        setRegdata({
            ...regdata , [e.target.name] : e.target.value
    })
    }

    const Regsubmit = ()=>{
            axios.post('https://ecommerce-backend-s1ya.onrender.com/api/register',regdata)
            .then((res)=> {
                if(res.data.msg === "User is successfully Registered"){
                toast.success(res.data.msg);
                }
                else{
                    toast.warn(res.data.msg)
                }
            })
            .catch((err)=>console.log(err))

        setRegdata({
            username:"",
            email:"",
            password:""
        })
        if(regdata.username )
        {
            Nav("/signin")
        }
    }
  return (
    <div className="form-parent">
        <img style={{position:"absolute", width:"100%" , top:"5rem", height:"64%" }} src={bg} />
        <div className="form-Container">
            <h1 className="form-head">Register Page</h1>
            <div className="childform-container">
                <form onSubmit={(e)=> e.preventDefault} className="">
                    <label className="form-label">UserName</label>
                    <input className="formInp" type='name' name='username' value={regdata.username} placeholder='Enter Your Name' onChange={changeHandler} required />
                    <label className="form-label">Email</label>
                    <input className="formInp" type="email" name="email" value={regdata.email} placeholder='Enter Your Email' onChange={changeHandler} required />
                    <label className="form-label">Password</label>
                    <input className="formInp" type='password' name='password' value={regdata.password} placeholder='Enter Your Password' onChange={changeHandler} required />
                    <button className="form-btn" type='submit' onClick={()=> Regsubmit()} >Submit</button>
                </form>
            </div>
        </div>
        <ToastContainer />
    </div>
  )
}

export default Singup 