import { useState } from 'react';
import { Menu, ShoppingCart, X } from 'lucide-react';
import { navLinks } from '../../utilities/constants/staticData.js';
import Logo from '../../assets/images/logo.png';

const HeaderSection = () => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    };

    return (
        <>
            <header>
                <div className="w-full bg-white border-b border-[#F2F2F2] py-4">
                    <div className="container">
                        <div className="flex items-center justify-between">
                            <div className="w-auto">
                                <img src={Logo} alt="logo" className='w-[140px] sm:w-[160px] lg:w-[180px]' />
                            </div>
                            <nav className="w-auto hidden lg:block">
                                <ul className='flex items-center justify-center gap-8'>
                                    {navLinks.map(link => <li key={link.id} className="font-family text-base font-semibold text-[#101727]"><a href="#" className="transition-all duration-200 delay-200 hover:underline">{link.label}</a></li>)}
                                </ul>
                            </nav>
                            <div className="w-auto hidden items-center justify-center gap-4 lg:flex">
                                <ShoppingCart size={20} color='#101727'></ShoppingCart>
                                <a href="#" className="w-fit font-family text-base font-semibold text-[#101727] transition-all duration-200 delay-200 hover:underline">Login</a>
                                <button className="px-4 py-3 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full font-family text-base font-semibold text-white cursor-pointer transition-all duration-300 ease-in-out hover:shadow-[0_0_6px_rgba(79,57,246,0.4),0_0_12px_rgba(149,20,250,0.4)]">Get Started</button>
                            </div>
                            <div className="w-auto lg:hidden">
                                <button onClick={handleToggle} className="cursor-pointer">
                                    <Menu size={30} color='#101727'></Menu>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`w-full max-w-[350px] min-h-screen fixed top-0 right-0 bg-white/90 backdrop-blur-sm z-20 transform transition-transform duration-300 p-4 ${toggle ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="w-full flex items-center justify-between">
                        <button onClick={handleToggle} className="cursor-pointer">
                            <X size={30} color='#101727'></X>
                        </button>
                        <ShoppingCart size={25} color='#101727'></ShoppingCart>
                    </div>
                    <nav className="w-full mt-10 pl-2">
                        <ul className='flex justify-center flex-col gap-5'>
                            {navLinks.map(link => <li key={link.id} className="font-family text-base font-semibold text-[#101727]"><a href="#" className="transition-all duration-200 delay-200 hover:underline">{link.label}</a></li>)}
                        </ul>
                    </nav>
                    <div className="flex justify-center flex-col gap-7 pl-2 mt-10">
                        <a href="#" className="w-fit font-family text-base font-semibold text-[#101727] transition-all duration-200 delay-200 hover:underline">Login</a>
                        <button className="w-full py-3 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full font-family text-base font-semibold text-white cursor-pointer transition-all duration-300 ease-in-out hover:shadow-[0_0_6px_rgba(79,57,246,0.4),0_0_12px_rgba(149,20,250,0.4)]">Get Started</button>
                    </div>
                </div>
            </header>
        </>
    );
};

export default HeaderSection;