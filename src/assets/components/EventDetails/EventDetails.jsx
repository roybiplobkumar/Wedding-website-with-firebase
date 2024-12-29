import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";

const EventDetails = () => {
  const { id } = useParams();
  const { loading: authLoading } = useContext(AuthContext);

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://wedding-server-side.vercel.app/services/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        console.error(err);
        setError("Failed to load event details");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (authLoading || loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  const { img_url, title, description } = data || {};

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img src={img_url} alt={title} className="max-w-sm rounded-lg shadow-2xl" />
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
