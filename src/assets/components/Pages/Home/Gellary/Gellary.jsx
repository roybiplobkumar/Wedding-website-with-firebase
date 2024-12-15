import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Gallery = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Animation happens only once
    });
  }, []);

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
        {[
          { imgUrl: "https://wordpress.zozothemes.com/wedknot/wp-content/uploads/sites/9/2023/07/gallery-5.jpg", aosType: "fade-up" },
          { imgUrl: "https://wordpress.zozothemes.com/wedknot/wp-content/uploads/sites/9/2023/07/gallery-8-1.jpg", aosType: "zoom-in" },
          { imgUrl: "https://wordpress.zozothemes.com/wedknot/wp-content/uploads/sites/9/2023/07/gallery-7.jpg", aosType: "flip-left" },
          { imgUrl: "https://wordpress.zozothemes.com/wedknot/wp-content/uploads/sites/9/2023/07/gallery-3.jpg", aosType: "fade-right" },
          { imgUrl: "https://wordpress.zozothemes.com/wedknot/wp-content/uploads/sites/9/2023/07/gallery-1.jpg", aosType: "zoom-out" },
          { imgUrl: "https://wordpress.zozothemes.com/wedknot/wp-content/uploads/sites/9/2023/07/gallery-7.jpg", aosType: "flip-right" },
          { imgUrl: "https://wordpress.zozothemes.com/wedknot/wp-content/uploads/sites/9/2023/07/gallery-10.jpg", aosType: "fade-left" },
          { imgUrl: "https://wordpress.zozothemes.com/wedknot/wp-content/uploads/sites/9/2023/07/gallery-6.jpg", aosType: "zoom-in-up" },
        ].map((item, index) => (
          <div
            key={index}
            data-aos={item.aosType}
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <img src={item.imgUrl} alt={`Gallery Image ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
