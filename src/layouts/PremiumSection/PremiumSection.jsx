import { Suspense, useState } from "react";
import fetchProduct from '../../../api/productApi.js';
import Loading from "../../components/Loading/Loading.jsx";
import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx';
import PremiumContent from "../../components/PremiumContent/PremiumContent.jsx";

const PremiumSection = () => {
    const productPromies = fetchProduct();

    const [tab, setTab] = useState('products');

    const handleTab = (selectTab) => {
        setTab(selectTab);
    };

    return (
        <>
            <div className="w-full py-10 md:py-20 lg:py-[120px]">
                <div className="container">
                    <SectionHeading title={'Premium Digital Tools'} paragraph={'Choose from our curated collection of premium digital products designed to boost your productivity and creativity.'}></SectionHeading>
                    <div className="w-full flex items-center justify-center mt-5">
                        <div className="max-w-[250px] p-1 bg-white border border-[#F6F6F6] rounded-full flex items-center justify-center">
                            <button onClick={() => handleTab('products')} className={`w-[100px] rounded-full py-2.5 px-3 font-family text-sm font-bold cursor-pointer md:py-3 md:px-[14px] md:text-base md:w-[110px] lg:py-4 lg:px-[14px] lg:w-[120px] ${tab === 'products' ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white shadow-[0_0_6px_rgba(79,57,246,0.4),0_0_12px_rgba(149,20,250,0.4)]' : 'text-[#101720]'}`}>Products</button>
                            <button onClick={() => handleTab('carts')} className={`w-[100px] rounded-full py-2.5 px-3 font-family text-sm font-bold cursor-pointer md:py-3 md:px-[14px] md:text-base md:w-[110px] lg:py-4 lg:px-[14px] lg:w-[120px] ${tab === 'carts' ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white shadow-[0_0_6px_rgba(79,57,246,0.4),0_0_12px_rgba(149,20,250,0.4)]' : 'text-[#101720]'}`}>Cart(0)</button>
                        </div>
                    </div>
                    <Suspense fallback={<Loading></Loading>}>
                        <PremiumContent productPromies={productPromies}></PremiumContent>
                    </Suspense>
                </div>
            </div>
        </>
    );
};

export default PremiumSection;