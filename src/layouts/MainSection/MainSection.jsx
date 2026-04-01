import PremiumSection from '../PremiumSection/PremiumSection.jsx';
import fetchProduct from '../../api/productApi.js';

const MainSection = () => {
    const productPromies = fetchProduct();
    
    return (
        <>
            <PremiumSection productPromies={productPromies}></PremiumSection>
        </>
    );
};

export default MainSection;