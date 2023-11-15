import React,{useState} from 'react'
import '../Style/Authentication.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

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
            axios.post('https://ecommerce-backend-rzz2.onrender.com/api/register',regdata)
            .then((res)=> {
                alert(res.data.msg);
                localStorage.setItem("token",res.data.token)
                localStorage.setItem("name",res.data.arr[0].username)
            })
            .catch((err)=>console.log(err))

        setRegdata({
            username:"",
            email:"",
            password:""
        })
        Nav('/')
    }
  return (
    <div className="form-parent">
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
    </div>
  )
}

export default Singup 