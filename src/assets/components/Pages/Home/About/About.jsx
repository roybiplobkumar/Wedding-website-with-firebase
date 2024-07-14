import { useContext } from "react";
import { AuthContext } from "../../../../../Providers/AuthProviders";


const About = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="py-12 px-4 bg-gray-100">
            <h1 className="text-3xl text-center my-10 text-red-500 "><span className="border-b-2 rounded-lg border-blue-600" data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">About Us</span></h1>
            <div className="flex flex-col md:flex-row justify-center items-center">
                <div className="md:w-1/2 md:mr-8 h-full" data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                    <img
                        src="https://wordpress.zozothemes.com/wedknot/wp-content/uploads/sites/9/elementor/thumbs/wedding-left-img-q93p7tg3nh706hbwqo8jzruza41m30twzna57sozm0.jpg"
                        alt="About Us"
                        className="w-full md:h-[120vh] lg:w-full rounded-lg shadow-md mb-5 font-medium md:mb-0"
                    />
                </div>
                <div className="md:w-1/2 text-gray-800 text-2xl md:text-3xl" data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                    <p className=" font-normal mb-4">
                        Welcome to our love story! We are {user ? user?.displayName : 'Jonkary'} and  Lipe and we are thrilled to share our journey with you. Our love story began 2022 years ago when we met at NewYork. From that moment, our lives have been filled with laughter, adventures, and unforgettable moments.
                    </p>
                    <p className=" font-normal mb-4">
                        Over the years, we have learned that love is not just about the destination, but the beautiful journey we take together. Our love has grown stronger with every passing day, and we can not wait to celebrate our special day with all of you. We believe that love is a precious gift, and we are grateful to have found it in each other.
                    </p>
                    <p className=" font-normal">
                        As we stand here today, ready to embark on this new chapter of our lives, we want to thank our family and friends for their love and support. Your presence means the world to us, and we can not wait to create new memories together. Thank you for being a part of our love story!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;

