import axios from 'axios'
import React, { useState } from 'react'
import Navmark from './Navmark'

const Internalmark = () => {
    const [input, changeInput] = useState({
        name: "", admnno: "", subject: "", present: "", totalpresent: "", getexam1: "", getexam2: "", getassmark1: "", getassmark2: "", email: ""
    })

    const [result, Result] = useState({
        name: "",
        email: "",
        admnno: "",
        subject: "",
        totalinternal: "",
        attendance: "",
        exammarks: "",
        assignmentmarks: ""
    })

    const inputHandler = (e) => {
        changeInput({ ...input, [e.target.name]: e.target.value })
    }

    const readValues = () => {
        axios.post("http://localhost:4000/calculate", input).then(
            (response) => {
                console.log(response.data)
                Result(response.data)
            }
        ).catch((error) => {
            console.log("Error", error)
        })
    }

    return (
        <div className="container">
            <Navmark/>
            <h2 className="text-center mt-3">Internal Mark Calculator</h2>
            <div className="row g-3 ">
                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" name="name" value={input.name} onChange={inputHandler} />
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" value={input.email} onChange={inputHandler} />
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label className="form-label">Admission No</label>
                    <input type="text" className="form-control" name="admnno" value={input.admnno} onChange={inputHandler} />
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label className="form-label">Subject</label>
                    <input type="text" className="form-control" name="subject" value={input.subject} onChange={inputHandler} />
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label className="form-label">Days Present</label>
                    <input type="number" className="form-control" name="present" value={input.present} onChange={inputHandler} />
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label className="form-label">Total Working Days</label>
                    <input type="number" className="form-control" name="totalpresent" value={input.totalpresent} onChange={inputHandler} />
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label className="form-label">Exam Mark 1</label>
                    <input type="number" className="form-control" name="getexam1" value={input.getexam1} onChange={inputHandler} />
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label className="form-label">Exam Mark 2</label>
                    <input type="number" className="form-control" name="getexam2" value={input.getexam2} onChange={inputHandler} />
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label className="form-label">Assignment Mark 1</label>
                    <input type="number" className="form-control" name="getassmark1" value={input.getassmark1} onChange={inputHandler} />
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label className="form-label">Assignment Mark 2</label>
                    <input type="number" className="form-control" name="getassmark2" value={input.getassmark2} onChange={inputHandler} />
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <button className="btn btn-success w-100" onClick={readValues}>Submit</button>
                </div>
            </div>

            {result.totalinternal && (
                <div className="row mt-5">
                    <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <div className="card">
                            <div className="card-header bg-primary text-white">
                                Internal Marks Report
                            </div>
                            <div className="card-body">
                                <p><strong>Name:</strong> {result.name}</p>
                                <p><strong>Email:</strong> {result.email}</p>
                                <p><strong>Admission No:</strong> {result.admnno}</p>
                                <p><strong>Subject:</strong> {result.subject}</p>
                                <p><strong>Attendance:</strong> {result.attendance?.toFixed(2)}</p>
                                <p><strong>Exam Marks:</strong> {result.exammarks}</p>
                                <p><strong>Assignment Marks:</strong> {result.assignmentmarks}</p>
                                <p><strong>Total Internal Marks:</strong> {result.totalinternal?.toFixed(2)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Internalmark
