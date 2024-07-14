
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";
import { useContext } from "react";

const EventDetails = () => {
  const datas = useLoaderData();
  const { id } = useParams();
  
  const {loading}=useContext(AuthContext)
  
   if(loading){
    return <p>laoding...</p>
   }
  const allData = datas?.map(data => data);
  const findData=allData.find(d=>d.id==id)
  const {img_url,title,  description}=findData || {}

  
  
  return (
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row">
      <img src={img_url} className="max-w-sm rounded-lg shadow-2xl" />
      <div>
        <h1 className="text-5xl font-bold">{title}</h1>
        <p className="py-6">{description}</p>
        <button className="btn btn-info">Booking</button>
      </div>
    </div>
  </div>
  );
};

export default EventDetails;

