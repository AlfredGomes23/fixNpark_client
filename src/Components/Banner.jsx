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
            </div>
        </div>
    );
};

export default Banner;