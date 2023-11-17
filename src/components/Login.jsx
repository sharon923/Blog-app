import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate()

    const[inputData, changeInputData]=useState({
        "email":"",
        "password":""
    })

    const inputHandler=(event)=>{
               changeInputData({...inputData,[event.target.name]:event.target.value})
    }

    const readValue=()=>{
        console.log(inputData)
        if (inputData.email=="admin@gmail.com" && inputData.password=="12345") {
            navigate('/add')
        } else {
            alert("invalid credentials")
        }
    }
  return (
    <div>

<div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Email-ID</label>
                            <input type="text" className="form-control" name='email' value={inputData.email} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Password</label>
                            <input type="password" name="password" id="" className="form-control "  value={inputData.password} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button onClick={readValue} className="btn btn-success">LOGIN</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login