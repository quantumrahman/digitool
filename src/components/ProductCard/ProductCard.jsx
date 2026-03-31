import { Check } from "lucide-react";

const ProductCard = () => {
    return (
        <>
            <div className="w-full relative p-4 bg-white border border-[#F2F2F2] rounded-2xl flex justify-center flex-col gap-4 md:p-5 lg:p-6">
                <div className="w-[60px] h-[60px] flex items-center justify-center rounded-full border border-[#F2F2F2]">
                    {/* img icon */}
                </div>
                <h3 className="font-family text-lg font-bold text-[#101727] md:text-xl lg:text-2xl">AI Writing Pro</h3>
                <p className="font-family text-sm font-normal text-[#627382] md:text-base">Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.</p>
                <p className="font-family text-lg font-bold text-[#101727] md:text-xl lg:text-2xl">$20<span className="font-family text-sm font-normal text-[#627382] md:text-base">/Monthly</span></p>
                <div className="w-auto">
                    <ul className="flex justify-center flex-col gap-2">
                        <li className="flex items-center gap-2">
                            <Check size={20} color="#30B868"></Check>
                            <span className="font-family text-sm font-medium text-[#627382] md:text-base">Unlimited AI generations</span>
                        </li>
                    </ul>
                </div>
                <button className="w-full py-3 px-3 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full font-family text-sm font-bold text-white cursor-pointer transition-all duration-300 ease-in-out hover:shadow-[0_0_6px_rgba(79,57,246,0.4),0_0_12px_rgba(149,20,250,0.4)] md:py-3 md:px-4 md:text-base lg:py-4 lg:px-3">Buy Now</button>
            </div>
        </>
    );
};

export default ProductCard;