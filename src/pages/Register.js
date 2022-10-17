import { React, useState, useEffect } from 'react'
import photo from "../assets/images/undraw_learning_sketching_nd4f.svg"
import FormRow from "../components/FormRow"
import { useAppContext } from "../context/appContext"
const initialState = {
    name: '',
    email: '',
    password: '',
    isMember: true
}

const Register = () => {
    const [values, setValues] = useState(initialState);
    const [isLoading, showAlert, displayAlert, registerUser] = useAppContext()
    const toggleMember = () => {
        setValues({ ...values, isMember: !values.isMember })
        console.log(values.isMember)
    }
    const handleChange = (e) => {
        console.log(e.target.value);
    }
    const submitHandle = (e) => {
        e.preventDefault();
        const { name, email, password, isMember } = values;
        if (!email || !password || (!isMember && !name)) {
            displayAlert();
            return
        }
        const currentUser = { name, email, password };
        if (isMember) {
            console.log("Already a member");
        }
        else {
            registerUser(currentUser);
        }
        console.log(values)
    }

    return (
        <>
            <section className="vh-100">
                <div className="container-fluid h-custom">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-9 col-lg-6 col-xl-5">
                            <img src={photo} className="img-fluid" alt="Sample pic" />
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <form onSubmit={submitHandle}>
                                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                    <p className="lead fw-normal mb-0 me-3">{values.isMember ? "Login" : "Register"}</p>

                                </div>
                                {!values.isMember ?
                                    <FormRow type="text" name="Name" value={values.name} placeholder="Enter Name" handleChange={handleChange} />
                                    : ""}

                                <FormRow type="email" name="Email" value={values.email} placeholder="Enter Email" handleChange={handleChange} />
                                <FormRow type="password" name="Password" value={values.password} handleChange={handleChange} />

                                <div className="form-outline mb-3">
                                    <input type="password" handleChange={handleChange} id="form3Example4" className="form-control form-control-lg"
                                        placeholder="Enter password" />
                                    <label className="form-label" htmlFor="form3Example4">Password</label>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">

                                    <div className="form-check mb-0">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                        <label className="form-check-label" htmlFor="form2Example3">
                                            Remember me
                                        </label>
                                    </div>
                                    <a href="#!" className="text-body">Forgot password?</a>
                                </div>

                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button type="button" className="btn btn-primary btn-lg" disabled={isLoading} >Login</button>
                                    <p>
                                        {values.isMember ? "Don't have account?" : "Have account?"}
                                        <button type="button" onClick={toggleMember} className="member-btn">
                                            {!values.isMember ? "Login" : "Register"}
                                        </button>
                                    </p>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
                <div
                    className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
                    <div className="text-white mb-3 mb-md-0">
                        Copyright © 2020. All rights reserved.
                    </div>



                </div>
            </section>
        </>
    )
}

export default Register;