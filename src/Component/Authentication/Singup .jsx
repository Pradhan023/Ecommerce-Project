import React,{useState} from 'react'
import '../Style/singup.css'
import axios from 'axios'

const Singup  = () => {
    const[regdata,setRegdata] = useState({
        firstname:"",
        lastname:"",
        email:"",
        password:""
    })
    
    // const Nav = useNavigate()
   
    const changeHandler = (e)=>{
        setRegdata({
            ...regdata , [e.target.name] : e.target.value
    })
    }

    const Regsubmit = ()=>{
            axios.post('https://authentication-api-obav.onrender.com/api/register',regdata)
            .then((res)=> {
                alert(res.data.msg);
                localStorage.setItem("token",res.data.token)
            })
            .catch((err)=>console.log(err))

        setRegdata({
            firstname:"",
            lastname:"",
            email:"",
            password:""
        })
        // Nav('/')
    }
  return (
    <div className="form-parent">
        <div className="signup-Container">
            <h1 className="signup-head">Register Page</h1>
            <div className="form-container">
                <form onSubmit={(e)=> e.preventDefault} className="">
                  <label className="">First Name</label>
                    <input className="formInp" type='name' name='firstname' value={regdata.firstname} placeholder='Enter Your First Name' onChange={changeHandler} required />
                    <label className="">Last Name</label>
                    <input className="formInp" type='name' name='lastname' value={regdata.lastname} placeholder='Enter Your Last Name' onChange={changeHandler} required />
                    <label className="">Email</label>
                    <input className="formInp" type="email" name="email" value={regdata.email} placeholder='Enter Your Email' onChange={changeHandler} required />
                    <label className="">Password</label>
                    <input className="formInp" type='password' name='password' value={regdata.password} placeholder='Enter Your Password' onChange={changeHandler} required />
                    <button className="" type='submit' onClick={()=> Regsubmit()} >Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Singup 