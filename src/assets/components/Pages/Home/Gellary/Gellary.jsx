import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Animation happens only once
    });
  }, []);

  useEffect(() => {
    const fetchGalleryImages = async () => {
      try {
        const response = await fetch('https://wedding-server-side.vercel.app/gallery');
        if (!response.ok) {
          throw new Error('Failed to fetch gallery data');
        }
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error('Error fetching gallery data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGalleryImages();
  }, []);

  if (loading) {
    return <p className="text-center my-6">Loading gallery...</p>;
  }

  return (
    <div className="my-10">
      <h1
        className="text-3xl text-center my-6 text-red-500"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <span className="border-b-2 rounded-lg border-blue-600">GALLERY</span>
      </h1>
      <p className="text-center my-4">Our recent photography</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 rounded-md shadow-md border-s-base-200 px-2 md:px-0">
        {images.map((item, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <img src={item.imageUrl} alt={`Gallery Image ${index + 1}`} className="w-full h-64 object-cover rounded-md" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
