import { MdLocationPin } from 'react-icons/md';
import { FcCellPhone } from 'react-icons/fc';
import { AiOutlineMail } from 'react-icons/ai';

const ContactUs = () => {
    return (
        <div className='my-14  md:px-6'>
           
            <div className="flex flex-col gap-8 md:flex-row bg-gradient-to-r from-white to-gray-50 shadow-lg rounded-lg p-6">

                <div className='w-full md:w-1/2'>
                    <figure>
                        <img 
                            src='https://wordpress.zozothemes.com/wedknot/wp-content/uploads/sites/9/elementor/thumbs/pexels-juan-vargas-6186859-q97ajmn44wbegc5o4od8m1k66s1k0ykoyt0qf6nosg.jpg' 
                            alt="Contact Us" 
                            className="w-full h-auto rounded-lg object-cover shadow-md" 
                            data-aos="fade-right" 
                        />
                    </figure>
                </div>

                <div className='w-full md:w-1/2 card-body my-auto p-6' data-aos="fade-left">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-6">Contact Information</h2>
                    <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                        Reach out to us for any inquiries or assistance. We are here to help and ensure your experience with us is seamless and enjoyable.
                    </p>

                    <div className='flex flex-col gap-6 mt-8'>
                        <div className='flex items-center gap-4'>
                            <FcCellPhone className='text-4xl' />
                            <div className='text-gray-700'>
                                <h4 className="text-xl font-semibold">Phone Line:</h4>
                                <p className="text-lg">(+55) 654 - 545 - 5418</p>
                                <p className="text-lg">(+55) 654 - 545 - 1235</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-4'>
                            <MdLocationPin className='text-4xl text-red-500' />
                            <div className='text-gray-700'>
                                <h4 className="text-xl font-semibold">Our Address:</h4>
                                <p className="text-lg">4821 Ridge Top, Anchorage St, Alaska 99508, USA.</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-4'>
                            <AiOutlineMail className='text-4xl text-red-500' />
                            <div className='text-gray-700'>
                                <h4 className="text-xl font-semibold">Email Address:</h4>
                                <p className="text-lg">example@example.com</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ContactUs;
