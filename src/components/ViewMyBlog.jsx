import axios from 'axios'
import React, { useState } from 'react'
import HeaderBlog from './HeaderBlog'

const ViewMyBlog = () => {

    const[inputData, changeInputData]= useState({
        "userId" : ""
      
    })

    const[result, changeResult] = useState([])

    const inputHandler=(event)=>{
         changeInputData({...inputData,[event.target.name]:event.target.value})
    }

    const readValue=()=>{
        console.log(inputData)
        axios.post("http://127.0.0.1:8000/blog/viewmyblog/",inputData).then(
            (response)=>{
                changeResult(response.data)
            }
        )
    }
  return (
    <div>
        <HeaderBlog/>


<div class="container">
        <div class="row">
            <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div class="row g-3">
                    <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label for="" class="form-label">User ID:</label>
                        <input type="text" class="form-control" name='userId' value={inputData.userId} onChange={inputHandler}></input>
                    </div>
                    <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button onClick={readValue} class="btn btn-warning">Search</button>
                    </div>
                </div>
            </div>
        </div>
        <br></br>


        {result.map(
            (value, i)=>{
                return <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<div class="card">
<h5 class="card-header">{value.userId}</h5>
<div class="card-body">
<p class="card-text">{value.title}</p>
<p class="card-text">{value.message}</p>

</div>
</div>

</div>
                        
                    </div>
                </div>
            </div>
            }
        )}
    </div>
    </div>
  )
}

export default ViewMyBlog