import logo from '../../assets/images/footer-logo.png';
import { footerLinks } from '../../utilities/constants/staticData.js';
import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";

const FooterSection = () => {
    return (
        <>
            <div className="w-full pt-20 pb-[30px] bg-[#101727] sm:pt-24 md:pt-28 lg:pt-[120px]">
                <div className="container">
                    <div className="w-full grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6">
                        <div className="w-full space-y-4 col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-1 2xl:col-span-2">
                            <div className="w-full">
                                <img src={logo} alt='logo ' />
                            </div>
                            <p className='font-family text-sm font-normal text-[#FFFFFF]/70'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                        </div>
                        {footerLinks.map((link) => (
                            <div key={link.id} className='w-full sm:w-[320px] lg:w-[120px]'>
                                <h4 className='font-family text-lg font-medium text-[#FFFFFF] sm:text-[20px] md:text-xl lg:text-[20px]'>{link.title}</h4>
                                <ul className='w-full flex justify-center flex-col gap-4 mt-4'>
                                    {link.links.map((acnhor, idx) => (
                                        <li key={idx} className='font-family text-sm font-normal text-white/70 sm:text-base'><a href="#">{acnhor.name}</a></li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                        <div className='w-full col-span-1'>
                            <h4 className='font-family text-lg font-medium text-[#FFFFFF] sm:text-[20px] md:text-xl lg:text-[20px]'>Social Links</h4>
                            <div className='w-full mt-4 space-x-2'>
                                <a href='#' className='inline-block p-3 bg-white rounded-full'>
                                    <FaInstagram size={20} color='#101727'></FaInstagram>
                                </a>
                                <a href='#' className='inline-block p-3 bg-white rounded-full'>
                                    <FaFacebookF size={20} color='#101727'></FaFacebookF>
                                </a>
                                <a href='#' className='inline-block p-3 bg-white rounded-full'>
                                    <FaXTwitter  size={20} color='#101727'></FaXTwitter>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='w-full border-t border-white/20 mt-[26px] pt-[30px] flex items-center justify-between flex-col gap-4 md:flex-row md:mt-[40px] lg:mt-[80px]'>
                        <div className='w-auto'>
                            <p className='font-family text-sm font-normal text-[#FFFFFF]/20'>© 2026 Digitools. All rights reserved.</p>
                        </div>
                        <div className='w-auto space-x-4'>
                            <a href="#" className='font-family text-sm font-normal text-[#FFFFFF]/20'>Privacy Policy</a>
                            <a href="#" className='font-family text-sm font-normal text-[#FFFFFF]/20'>Terms of Service</a>
                            <a href="#" className='font-family text-sm font-normal text-[#FFFFFF]/20'>Cookies</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FooterSection;