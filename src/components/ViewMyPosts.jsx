import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'

const ViewMyPosts = () => {
    const [data, setData] = useState([])
    const [userId,setuserId]=useState({"userId":sessionStorage.getItem("userId")})
    const fetchData = () => {
        axios.post("http://localhost:3030/viewmypost",userId,{
            headers:{"token":sessionStorage.getItem("token"),"Content-Type":"application/json"}
        }).then(
            (response)=>{
                console.log(response.data)
                setData(response.data)
            }
        ).catch(
            (error)=>{
                console.log(error)
            }
        )
    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            {data.map(
                                (value, index) => {
                                    return <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <div class="card mb-3">
                                            <div class="row g-0">
                                                <div class="col-md-8">
                                                <div class="card-body">
                                                        <h5 class="card-title">{value.Message}</h5>
                                                        <p class="card-text"><small class="text-body-secondary">Posted on {value.postedDate}</small></p>
                                                    </div>
                                                </div>
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

export default ViewMyPosts