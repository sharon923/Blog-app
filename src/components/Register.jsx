import axios from 'axios'
import React, { useState } from 'react'

const Register = () => {

    const[inputData, changeInputData] = useState({
        "name": "",
        "profile": "",
        "email": "",
        "password":""
        
    })

    const inputHandler=(event)=>{
        changeInputData({...inputData,[event.target.name]:event.target.value})
    }

    const readValue=()=>{
        console.log(inputData)
        axios.post("http://127.0.0.1:8000/blog/adduser/", inputData).then(
            (response)=>{
                 alert(response.data.status)
            }
        )
    }
  return (
    <div>

<div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Name:</label>
                            <input type="text" className="form-control" name='name' value={inputData.name} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Profile:</label>
                            <input type="text" className="form-control" name ='profile' value={inputData.profile} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Email Id:</label>
                            <input type="text" className="form-control" name = 'email' value={inputData.email} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Password:</label>
                            <input type="password" name="password" id="" className="form-control" value={inputData.password} onChange={inputHandler} />
                        </div>
                        
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button onClick={readValue} className="btn btn-success">REGISTER</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register