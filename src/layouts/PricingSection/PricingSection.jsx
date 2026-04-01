import PricingCard from "../../components/PricingCard/PricingCard.jsx";
import SectionHeading from "../../components/SectionHeading/SectionHeading.jsx";
import { pricingPlans } from "../../utilities/constants/staticData.js";

const PricingSection = () => {

    return (
        <>
            <div className="w-full py-10 md:py-20 lg:py-[120px]">
                <div className="container">
                    <SectionHeading title={'Simple, Transparent Pricing'} paragraph={'Choose the plan that fits your needs. Upgrade or downgrade anytime.'}></SectionHeading>
                    <div className="w-full mt-5 grid grid-cols-1 gap-3 sm:gap-4 md:mt-10 md:gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 xl:gap-[30px]">
                        {pricingPlans.map((plan) => (
                            <PricingCard key={plan.id} title={plan.name} duration={plan.duration} buttonText={plan.buttonText} tagline={plan.tagline} isPopular={plan.isPopular} price={plan.price} features={plan.features}></PricingCard>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default PricingSection;