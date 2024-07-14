import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Services = () => {
    const [servicesData, setServicesData] = useState([]);

    useEffect(() => {

        fetch('services.json')
            .then((response) => response.json())
            .then((data) => setServicesData(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h1 className="text-3xl text-center my-10 text-red-500 "><span className="border-b-2 rounded-lg border-blue-600" data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">Wedding Services</span></h1>

            <div className="service-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-3 ">
                {servicesData.map((service) => (
                    <div key={service.id} className="service-item">
                        <div className="card card-compact bg-base-100 shadow-xl" data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                            <figure><img src={service.img_url} alt="Service" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{service.title}</h2>
                                <p>{service.description.slice(0, 200)}{service.description.length > 200 && "..."}</p>
                                <p>{service.price}</p>
                                <div className="card-actions ">
                                    <Link to={`/eventdetails/${service.id}`} className="w-full" >
                                        <button className="btn btn-info w-full block">Details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;

