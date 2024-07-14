import { MdLocationPin } from 'react-icons/md';
import { FcCellPhone } from 'react-icons/fc';
import { AiOutlineMail } from 'react-icons/ai';

const ContactUs = () => {
    return (
        <div className='my-14'>
            <h1 className="text-3xl text-center my-10 text-red-500"><span className="border-b-2 rounded-lg border-blue-600 uppercase">Contact Us</span></h1>
            <div className="flex flex-col gap-5 md:flex-row bg-base-100 shadow-xl p-4">

                <div className='w-full md:w-1/2'>
                    <figure><img src='https://wordpress.zozothemes.com/wedknot/wp-content/uploads/sites/9/elementor/thumbs/pexels-juan-vargas-6186859-q97ajmn44wbegc5o4od8m1k66s1k0ykoyt0qf6nosg.jpg' alt="Movie" className="w-full h-auto rounded-lg" /></figure>
                </div>

                <div className='w-full md:w-1/2 card-body my-auto p-4'>
                    <h2 className="text-2xl md:text-4xl font-semibold mb-4">CONTACT INFORMATION</h2>
                    <p className="text-gray-600 text-xl">All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first on the Internet</p>

                    <div className='flex  gap-3 flex-col mt-6'>
                        <div className='flex  items-center mb-4'>
                            <FcCellPhone className='text-2xl mr-2 text-red-500' />
                            <div className='text-2xl'>
                                <h4 className="font-semibold">Phone Line:</h4>
                                <p>(+55) 654 - 545 - 5418</p>
                                <p>(+55) 654 - 545 - 1235</p>
                            </div>
                        </div>

                        <div className='flex items-center mb-4'>
                            <MdLocationPin className='text-2xl mr-2 text-red-500' />
                            <div className='text-2xl'>
                                <h4 className="font-semibold">Our Address:</h4>
                                <p>4821 Ridge Top, Anchorage St, Alaska 99508, USA.</p>
                            </div>
                        </div>

                        <div className='flex items-center'>
                            <AiOutlineMail className='text-2xl mr-2 text-red-500' />
                            <div className='text-2xl'>
                                <h4 className="font-semibold">Email Address:</h4>
                                <p>example@example.com</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ContactUs;

