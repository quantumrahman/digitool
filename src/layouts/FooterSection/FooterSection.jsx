import logo from '../../assets/images/footer-logo.png';
import { footerLinks } from '../../utilities/constants/staticData.js';

const FooterSection = () => {
    return (
        <>
            <div className="w-full pt-20 pb-[30px] bg-[#101727] sm:pt-24 md:pt-28 lg:pt-[120px]">
                <div className="container">
                    <div className="w-full">
                        <div className="w-full space-y-4">
                            <div className="w-[180px]">
                                <img src={logo} alt='logo ' />
                            </div>
                            <p className='font-family text-sm font-normal text-[#FFFFFF]/70'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                        </div>
                        {footerLinks.map((link) => (
                            <div key={link.id} className='w-full'>
                                <h4 className='font-family text-lg font-medium text-[#FFFFFF] sm:text-[20px] md:text-xl lg:text-[20px]'>{link.title}</h4>
                                <ul className='w-full flex justify-center flex-col gap-4 mt-4'>
                                    {link.links.map((acnhor, idx) => (
                                        <li key={idx} className='font-family text-sm font-normal text-white/70 sm:text-base'><a href="#">{acnhor.name}</a></li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                        <div className='w-full'>
                            <h4 className='font-family text-lg font-medium text-[#FFFFFF] sm:text-[20px] md:text-xl lg:text-[20px]'>Social Links</h4>
                            <div className='w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center'>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FooterSection;