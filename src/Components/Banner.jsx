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
        <div className="mt-5">
            {/* parallax */}
            <div className="bg-fixed bg-[url('../../public/images/banner-bg.png')] w-full bg-no-repeat bg-cover h-[80vh]">


                {/* Search and Filter  */}
                <form onSubmit={handleSubmit(onSubmit)} className="join p-10 flex flex-row card glass w-fit shadow-xl mx-auto relative top-2/3 outline-secondary outline-dotted ">

                    <input className="input input-bordered join-item" placeholder="Search by Keyword or Area" {...register("search")} />

                    <select className="select select-bordered join-item" {...register("subscription")} required>
                        <option>for Hourly</option>
                        <option>for Monthly</option>
                    </select>

                    <select className="select select-bordered join-item" {...register("parkingType")} required>
                        <option>Single Parking</option>
                        <option>Bulk Parking</option>
                    </select>

                    <select className="select select-bordered join-item" {...register("wheels")} required>
                        <option>Two or Three Wheeler</option>
                        <option>Four or More Wheeler</option>
                    </select>

                    <select className="select select-bordered join-item" {...register("provider")} required>
                        <option>All Provider</option>
                        <option>Member</option>
                        <option>Non-Member</option>
                    </select>

                    <button className="btn join-item"><FaSearch className="text-primary text-xl" /></button>
                </form>
            </div>
        </div>
    );
};

export default Banner;