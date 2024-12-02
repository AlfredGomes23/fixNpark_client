import Banner from "../Components/Banner";
import BestDeals from "../Components/BestDeals";
import Reviews from "../Components/Reviews";
import SectionHeader from "../Components/SectionHeader";


const Home = () => {
    return (
        <div>
            <Banner></Banner>

            <SectionHeader title={'What Our Customers Say'} subTitle={'Real stories from happy customers who trust us for their needs.'} color={"accent"}></SectionHeader>
            <Reviews></Reviews>

            <SectionHeader title={'Exclusive Deals Just for You'} subTitle={'Discover unbeatable DISCOUNT and SAVE on your favorite services today.'} color={"primary"}></SectionHeader>
            <BestDeals></BestDeals>
        </div>
    );
};

export default Home;