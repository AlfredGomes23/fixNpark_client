// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../Styles/swiper.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

import axios from "axios";
import { useEffect, useState } from 'react';
import Rating from './Rating';
import { FaUser } from 'react-icons/fa';


const Reviews = () => {

    const [reviews, setReviews] = useState([]);
    // axios.get('').then(()=> console.log(data));
    useEffect(() => {
        fetch("reviews.json").then(d => d.json()).then(d => setReviews(d))
    }, [])

    console.log(reviews);
    return (
        <Swiper
            slidesPerView={2}
            spaceBetween={30}
            loop={true}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
        >
            {
                reviews.map(review => 
                    <SwiperSlide key={review._id}>
                        <div className="card bg-slate-500 text-neutral-content w-96 h-52">
                            <div className="card-body items-center text-center">
                                <h2 className="card-title indicator">
                                    <span className='flex flex-row gap-1'>
                                        <FaUser className=' border rounded-full my-auto'/>{review.username}</span>
                                    <span className='indicator-item'><Rating rating={review.rating}></Rating></span>
                                </h2>
                                <p>"{review.review}"</p>
                            </div>
                        </div>
                    </SwiperSlide>
                )
            }
        </Swiper>
    );
};

export default Reviews;