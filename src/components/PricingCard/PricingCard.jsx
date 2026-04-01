import { Check } from "lucide-react";
import CardBadge from "../CardBadge/CardBadge.jsx";

const PricingCard = ({ title, tagline, price, duration, isPopular, buttonText, features }) => {
    
    return (
        <>
            <div className={`w-full relative p-4 ${isPopular ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA]' : 'bg-[#F9FAFC]'} border border-[#F2F2F2] rounded-2xl flex items-center flex-col gap-4 md:p-5 md:gap-6 lg:p-6`}>
                {isPopular && 
                    <div className="w-full absolute -top-4 left-0 flex items-center justify-center">
                        <CardBadge variant="Most Popular">Most Popular</CardBadge>
                    </div>
                }
                <div className="w-full">
                    <h4 className={`font-family text-lg font-bold ${isPopular ? 'text-white' : 'text-[#101727]'} md:text-xl lg:text-2xl`}>{title}</h4>
                    <p className={`font-family text-sm font-normal ${isPopular ? 'text-white/80' : 'text-[#101727]'} mt-2 md:text-base`}>{tagline}</p>
                </div>
                <div className="w-full">
                    <p className={`font-family text-2xl font-bold ${isPopular ? 'text-white' : 'text-[#101727]'} md:text-3xl lg:text-4xl xl:text-[40px]`}>${price}<span className={`font-family text-base font-normal ${isPopular ? 'text-white' : 'text-[#101727]'} md:text-lg xl:text-[20px] capitalize`}>/{duration}</span></p>
                </div>
                <div className="w-full min-h-[185px]">
                    <ul className="flex justify-center flex-col gap-2">
                        {features.map((feat, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                                <Check size={20} color={`${isPopular ? '#ffffff' : '#30B868'}`}></Check>
                                <span className={`font-family text-sm font-medium ${isPopular ? 'text-white' : 'text-[#627382]'} md:text-base`}>{feat}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <button className={`w-full py-3 px-3 ${isPopular ? 'bg-white text-[#4F39F6]' : 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'} rounded-full font-family text-sm font-bold cursor-pointer transition-all duration-300 ease-in-out hover:shadow-[0_0_6px_rgba(79,57,246,0.4),0_0_12px_rgba(149,20,250,0.4)] md:py-3 md:px-4 md:text-base lg:py-4 lg:px-3`}>{buttonText}</button>
            </div>
        </>
    );
};

export default PricingCard;