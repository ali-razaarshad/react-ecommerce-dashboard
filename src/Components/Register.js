import React from 'react';
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";


function Register() {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = data => {
        console.log(data)
    };

    return (
        <div className="card bg-light">
            {/* eslint-disable-next-line react/style-prop-object */}
            <article className="card-body mx-auto" style={{maxWidth: 400}}>
                <h4 className="card-title mt-3 text-center">Create Account</h4>
                <p className="text-center">Get started with your free account</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="fa fa-user p-1"> </i>
                            </div>
                        </div>
                        <input {...register("name", {required: true})}
                               className="form-control"
                               placeholder="Full name"
                               type="text"/>
                    </div>
                    <div className="d-flex mb-2">
                        {errors.name && <span className="text-danger">Name field is required</span>}
                    </div>
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> <i className="fa fa-envelope p-1"> </i> </span>
                        </div>
                        <input {...register("email", {required: true})}
                               className="form-control"
                               placeholder="Email address"
                               type="email"/>
                    </div>
                    <div className="d-flex mb-2">
                        {errors.email && <span className="text-danger">Email field is required</span>}
                    </div>
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> <i className="fa fa-lock p-1"> </i> </span>
                        </div>
                        <input {...register("password", {required: true})}
                               className="form-control"
                               placeholder="Password"
                               type="password"/>
                    </div>
                    <div className="d-flex mb-2">
                        {errors.password && <span className="text-danger">Password field is required</span>}
                    </div>
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> <i className="fa fa-lock p-1"> </i> </span>
                        </div>
                        <input {...register("password_confirmation", {required: true})}
                               className="form-control"
                               placeholder="Confirm password"
                               type="password"/>
                    </div>
                    <div className="d-flex mb-2">
                        {errors.password_confirmation &&
                        <span className="text-danger">Confirm password field is required</span>}
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary btn-block"> Create Account
                        </button>
                    </div>
                    <p className="text-center">Have an account? <Link to="login">Log In</Link></p>
                </form>
            </article>
        </div>
    );
}

export default Register;