import { useForm } from "react-hook-form"
import { AuthContext } from "../Providers/AuthProvider";
import { useContext, useState } from "react";
import Swal from 'sweetalert2'
import { BiLoaderCircle } from "react-icons/bi";

const SigninSignup = () => {
    const { user, createUser, signinUser } = useContext(AuthContext);
    const [err, setErr] = useState("");
    const [doing, setDoing] = useState(false);


    // signin
    const { register: signin, handleSubmit: handleSigninSubmit, watch: watchIn, formState: { errors: inErr } } = useForm();

    const onSignin = async data => {
        setDoing(true);
        console.log(data);

        try {
            await signinUser(data.email, data.password);
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Signin Successful",
                showConfirmButton: false,
                timer: 2000
            });
        } catch (err) {
            console.log(err);
            Swal.fire({
                position: "center",
                icon: "error",
                title: err,
                showConfirmButton: false,
                timer: 3000
            });
        }
        setDoing(false);
    };


    // signup
    const { register: signup, handleSubmit: handleSignupSubmit, watch: watchUp, formState: { errors: upErr } } = useForm();

    const onSignup = async data => {
        setDoing(true);
        console.log(data);

        try {
            await createUser(data.email, data.password);
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Account Registered",
                showConfirmButton: false,
                timer: 2000
            });
        } catch (err) {
            console.log(err);
            Swal.fire({
                position: "center",
                icon: "error",
                title: err,
                showConfirmButton: false,
                timer: 3000
            });
        }
        setDoing(false);
    };

    return (
        <div className="flex flex-col lg:flex-row bg-gradient-to-r from-accent to-primary">
            {/* signin */}
            <div className="hero min-h-screen mb-10" data-aos="slide-left">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <p className="font-bold">Have an account?</p>
                        <h1 className="text-5xl font-bold">Signin here</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm bg-base-300 pb-5">
                        <form className="card-body" onSubmit={handleSigninSubmit(onSignin)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Email</span>
                                </label>
                                <input type="email"
                                    name="email"
                                    placeholder="email" className="input input-bordered" required {...signin("email")} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required {...signin("password")} />
                            </div>
                            <div className="form-control">
                                {
                                    doing ?
                                        <BiLoaderCircle className="text-center text-accent mx-auto text-5xl" /> :
                                        <button className="btn btn-accent w-fit mx-auto">Signin</button>}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* signup */}
            <div className="hero min-h-screen mb-10" data-aos="slide-right">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left text-neutral-content">
                        <p className="font-bold">New here?</p>
                        <h1 className="text-5xl font-bold">signup now</h1>
                    </div>
                    <div className="card flex-shrink-0  w-fit bg-base-300">
                        <form className="card-body" onSubmit={handleSignupSubmit(onSignup)}>
                            {/* name url */}
                            <div className="flex flex-col lg:flex-row gap-3">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Your Name</span>
                                    </label>
                                    <input type="text"
                                        name="name"
                                        placeholder="Your Name" className="input input-bordered" required {...signup("name")} />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Photo URL</span>
                                    </label>
                                    <input type="text"
                                        name="url"
                                        placeholder="Photo URL" className="input input-bordered" required {...signup("url")} />
                                </div>
                            </div>
                            {/* email password */}
                            <div className="flex flex-col lg:flex-row gap-3">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Email</span>
                                    </label>
                                    <input type="email"
                                        name="email"
                                        placeholder="email" className="input input-bordered" required {...signup("email")} />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Password</span>
                                    </label>
                                    <input type="password"
                                        name="password" placeholder="password" className="input input-bordered" required {...signup("password")} />
                                </div>
                            </div>
                            <label className="label mx-auto">
                                <input type="checkbox" name="checkbox" id="" required {...signup("termsConditions")} />
                                <p className="label-text-alt link link-hover ml-2 text-secondary">Accept our terms and conditions</p>
                            </label>

                            <div className="form-control mt-6">
                                {doing ? <BiLoaderCircle className="text-center text-primary mx-auto text-5xl" /> : <button className="btn btn-primary w-fit mx-auto">Signup</button>}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SigninSignup;