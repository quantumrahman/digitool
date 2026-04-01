import fetchProduct from '../../api/productApi.js';
import PremiumSection from '../PremiumSection/PremiumSection.jsx';
import PricingSection from '../PricingSection/PricingSection.jsx';
import StepsSection from '../StepsSection/StepsSection.jsx';
import LetterSection from '../LetterSection/LetterSection.jsx';

const MainSection = () => {
    const productPromies = fetchProduct();
    
    return (
        <>
            <PremiumSection productPromies={productPromies}></PremiumSection>
            <StepsSection></StepsSection>
            <PricingSection></PricingSection>
            <LetterSection></LetterSection>
        </>
    );
};

export default MainSection;