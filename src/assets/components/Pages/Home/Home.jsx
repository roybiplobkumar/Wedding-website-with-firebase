import About from "./About/About";
import Gellary from "./Gellary/Gellary";
import Services from "./Services/Services";
import Slider from "./Slider/Slider";


const Home = () => {
    return (
        <div>
           <Slider></Slider>
           <Services></Services>
           <Gellary></Gellary>
           <About></About>
            
        </div>
    );
};

export default Home;