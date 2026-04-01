import fetchProduct from '../../api/productApi.js';
import HomeSection from '../HomeSection/HomeSection.jsx';
import StatsSection from '../StatsSection/StatsSection.jsx';
import PremiumSection from '../PremiumSection/PremiumSection.jsx';
import StepsSection from '../StepsSection/StepsSection.jsx';
import PricingSection from '../PricingSection/PricingSection.jsx';
import LetterSection from '../LetterSection/LetterSection.jsx';
import FooterSection from '../FooterSection/FooterSection.jsx';

const MainSection = () => {
    const productPromies = fetchProduct();
    
    return (
        <>
            <HomeSection></HomeSection>
            <StatsSection></StatsSection>
            <PremiumSection productPromies={productPromies}></PremiumSection>
            <StepsSection></StepsSection>
            <PricingSection></PricingSection>
            <LetterSection></LetterSection>
            <FooterSection></FooterSection>
        </>
    );
};

export default MainSection;