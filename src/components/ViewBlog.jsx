import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewBlog = () => {
    const[data, dataChange] = useState([])

    const fetchData=()=>{
        axios.post("http://127.0.0.1:8000/blog/viewblog/").then(
            (response)=>{
                dataChange(response.data)
            }
        )
    }
    useEffect(()=>{fetchData()},[])

  return (
    <div>

<div className="container">
                <br></br><br></br>
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        {data.map(
                                (value, i)=>{
                                        return <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                        <div class="card">
                                        <h5 class="card-header">{value.userId}</h5>
                                        <div class="card-body">
                                        <p class="card-text">{value.title}</p>
                                        <p class="card-text">{value.message}</p>
                                        
                                        </div>
                                        </div>
        
                                </div>
                                }
                        )}
                       
                       
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default ViewBlog