import fetchProduct from '../../../api/productApi.js';
import PremiumSection from '../PremiumSection/PremiumSection.jsx';

const MainSection = () => {
    const productPromiess = fetchProduct();

    return (
        <>
            <PremiumSection productPromiess={productPromiess}></PremiumSection>
        </>
    );
};

export default MainSection;