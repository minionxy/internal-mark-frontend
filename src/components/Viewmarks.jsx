import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navmark from './Navmark'

const Viewmarks = () => {
    const [views,changeViews]=useState(
        []
    )
    const [isLoading,changeLoading]=useState(true)
    const fetchData=()=>{
        axios.get("http://localhost:4000/viewall").then(
            (response)=>{
                changeLoading(false)
                changeViews(response.data)
            }
        ).catch()
    }

    useEffect(()=>{fetchData()}, [])

    return (
        <div>
            <Navmark/>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <div className="row">
                                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <div className="table-responsive">
                                        <table className="table table-striped table-hover">
                                            <thead className="table-dark">
                                                <tr>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Admission NO:</th>
                                                    <th scope="col">Email</th>
                                                    <th scope="col">Subject</th>
                                                    <th scope="col">Attendence Marks</th>
                                                    <th scope="col">Assignment Marks</th>
                                                    <th scope="col">Exam Marks</th>
                                                    <th scope="col">Total Internal Marks</th>
                                                </tr>
                                            </thead>
                                            {isLoading ? (
                                                <div class="d-flex justify-content-center align-items-center vh-100">
                                                    <div class="spinner-border text-primary" style={{ width: "4rem", height: "4rem", role: "status" }}>
                                                        <span class="visually-hidden">Loading...</span>
                                                    </div>
                                                    <p class="mt-3 fs-5 text-dark fw-semibold">Please Wait...</p>
                                                </div>
                                            ) : (
                                                <tbody>

                                                    {views.map(
                                                        (value, index) => {
                                                            return (
                                                                <tr>
                                                                    <td>{value.name}</td>
                                                                    <td>{value.admnno}</td>
                                                                    <td>{value.email}</td>
                                                                    <td>{value.subject}</td>
                                                                    <td>{Number(value.attendence).toFixed(2)}</td>
                                                                    <td>{Number(value.assignmentmarks).toFixed(2)}</td>
                                                                    <td>{Number(value.exammarks).toFixed(2)}</td>
                                                                    <td>{Number(value.totalinternal).toFixed(2)}</td>
                                                                </tr>
                                                            )
                                                        }
                                                    )}

                                                </tbody>
                                            )}

                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Viewmarks