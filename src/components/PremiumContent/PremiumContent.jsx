import { use } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard.jsx';

const PremiumContent = ({ productPromies }) => {
    const products = use(productPromies);

    console.log(products);

    return (
        <>
            <div className='w-full mt-5 grid grid-cols-1 gap-3 sm:gap-4 md:mt-10 md:gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 xl:gap-[30px]'>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
            </div>
        </>
    );
};

export default PremiumContent;