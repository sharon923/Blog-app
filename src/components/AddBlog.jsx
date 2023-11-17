import axios from 'axios'
import React, { useState } from 'react'

const AddBlog = () => {

    const[inputData, changeInputData] = useState({
        "userId": "",
        "title": "",
        "message": ""
        
    })

    const inputHandler=(event)=>{
        changeInputData({...inputData,[event.target.name]:event.target.value})
    }

    const readValue=()=>{
        console.log(inputData)
        axios.post("http://127.0.0.1:8000/blog/addblog/", inputData).then(
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
                            <label htmlFor="" className="form-label">User ID:</label>
                            <input type="text" className="form-control" name='userId' value={inputData.userId} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Title:</label>
                            <input type="text" className="form-control" name ='title' value={inputData.title} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Message:</label>
                            <input type="text" className="form-control" name = 'message' value={inputData.message} onChange={inputHandler} />
                        </div>
                        
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button onClick={readValue} className="btn btn-success">SUBMIT</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddBlog