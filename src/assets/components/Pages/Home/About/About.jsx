import { useContext } from "react";
import { AuthContext } from "../../../../../Providers/AuthProviders";

const About = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="py-12 px-6 bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200">
             <h1 className="text-3xl text-center my-6 text-red-500 data-aos "><span className="border-b-2 rounded-lg border-blue-600" data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">LOVE STROY</span></h1>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                <div 
                    className="md:w-1/2 rounded-lg overflow-hidden shadow-lg" 
                    data-aos="zoom-in" 
                    data-aos-duration="1500"
                >
                    <img
                        src="lovestroy.jpg"
                        alt="About Us"
                        className="w-full h-[35rem] object-cover"
                    />
                </div>
                <div 
                    className="md:w-1/2 text-gray-700 space-y-6 text-lg leading-relaxed" 
                    data-aos="fade-up" 
                    data-aos-duration="1500"
                >
                    <p className="font-medium">
                        Welcome to our journey of love and togetherness! We are {user ? user?.displayName : 'Jonkary'} and Lipe, partners in life and adventure. Our story began in the vibrant city of New York, and since then, every moment has been a celebration of connection, laughter, and shared dreams.
                    </p>
                    <p className="font-medium">
                        Through life’s ups and downs, we have learned that love is not just about reaching a destination, but about cherishing every step of the journey. From exciting travels to quiet evenings, our bond has grown stronger, and we are thrilled to share this beautiful chapter with you.
                    </p>
                    <p className="font-medium">
                        We are deeply grateful to our family and friends for your unwavering love and support. As we step into this new phase, your presence and blessings mean the world to us. Together, let’s create memories that will last a lifetime!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
