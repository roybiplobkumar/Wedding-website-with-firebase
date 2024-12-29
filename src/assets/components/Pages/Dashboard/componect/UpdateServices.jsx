import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateServices = () => {
  const [servicesData, setServicesData] = useState([]);

  useEffect(() => {
    fetch('https://wedding-server-side.vercel.app/services')
      .then((response) => response.json())
      .then((data) => setServicesData(data))
      .catch((error) => {
        console.error('Error fetching data:', error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Failed to load services. Please try again later!',
        });
      });
  }, []);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://wedding-server-side.vercel.app/services/${_id}`, {
          method: 'DELETE',
        })
          .then((response) => {
            if (response.ok) {
              const remainingServices = servicesData.filter(service => service._id !== _id);
              setServicesData(remainingServices);
              Swal.fire(
                "Deleted!",
                "The service has been deleted.",
                "success"
              );
            } else {
              throw new Error('Failed to delete');
            }
          })
          .catch((error) => {
            console.error("Error deleting:", error);
            Swal.fire(
              "Error!",
              "Failed to delete the service. Please try again.",
              "error"
            );
          });
      }
    });
  };

  return (
    <div className="py-12 px-4 bg-gradient-to-r from-gray-50 to-blue-50">
      <h1 className="text-4xl text-center mb-12 font-bold text-red-500">
        <span className="border-b-4 rounded-lg border-blue-600 px-2"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine">
          Wedding Services
        </span>
      </h1>

      <div className="service-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service) => (
          <div key={service._id} className="service-item" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1500">
            <div className="card shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-2xl overflow-hidden h-full">
              <figure>
                <img src={service.img_url} alt="Service" className="w-full h-56 object-cover" />
              </figure>
              <div className="card-body p-6 flex flex-col justify-between h-[350px]">
                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-blue-700">{service.title}</h2>
                  <p className="text-gray-600 mb-4">
                    {service.description.slice(0, 200)}{service.description.length > 200 && "..."}
                  </p>
                </div>
                <div>
                  <p className="text-xl font-bold text-green-600 mb-4">Price: ${service.price}</p>
                  <div className="flex gap-1 justify-between">
                    <Link to={`/dashboard/update-services-form/${service._id}`} className="w-full">
                      <button className="w-full py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-lg hover:from-indigo-600 hover:to-blue-500 transition-all duration-300 transform hover:scale-105">
                        Update
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(service._id)}
                      className="w-full py-2 bg-gradient-to-r from-red-500 to-pink-500 text-white font-medium rounded-lg hover:from-pink-500 hover:to-red-500 transition-all duration-300 transform hover:scale-105"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpdateServices;