<<<<<<< HEAD
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaSearch } from "react-icons/fa";


const Banner = () => {
    const [search, setSearch] = useState({})
    const { register, handleSubmit } = useForm();


    const onSubmit = data => {
        console.log(data);
        setSearch(data);
    }

    return (
        <div>
            {/* parallax */}
            <div className="bg-fixed bg-[url('../../public/images/banner-bg.png')] w-full bg-no-repeat bg-cover h-[90vh]">


                {/* quick search */}
                <form onSubmit={handleSubmit(onSubmit)} className="join p-10 flex flex-row card glass w-fit shadow-xl mx-auto relative top-1/4 right-1/4">

                    <input className="input input-bordered join-item" placeholder="Search by Keyword or Area" {...register("search")} />

                    <select className="select select-bordered join-item" {...register("timePeriod")} required>
                        <option>for Hours</option>
                        <option>for Months</option>
                    </select>

                    <button className="btn join-item"><FaSearch className="text-secondary" /></button>
                </form>
=======
import { useForm } from "react-hook-form";


const Banner = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(watch("example"));
    return (
        <div>
            {/* perallax */}
            <div className="bg-fixed bg-[url('../../public/images/banner-bg.png')] w-full bg-no-repeat h-[100vh]">
                {/* quick search */}
                <div className="card glass bg-transparent w-96 shadow-xl mx-auto relative top-1/2">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <input defaultValue="test" {...register("example")} />
                        <input {...register("exampleRequired", { required: true })} />
                        {errors.exampleRequired && <span>This field is required</span>}
                        <input type="submit" className="btn "/>
                    </form>
                </div>
>>>>>>> 0a74985e4ec7bf0766643fcfc7a9dae61456b549
            </div>
        </div>
    );
};

export default Banner;