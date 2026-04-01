import fetchProduct from '../../api/productApi.js';
import PremiumSection from '../PremiumSection/PremiumSection.jsx';
import StepsSection from '../StepsSection/StepsSection.jsx';

const MainSection = () => {
    const productPromies = fetchProduct();
    
    return (
        <>
            <PremiumSection productPromies={productPromies}></PremiumSection>
            <StepsSection></StepsSection>
        </>
    );
};

export default MainSection;