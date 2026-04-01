import SectionHeading from "../../components/SectionHeading/SectionHeading.jsx";
import StepCard from "../../components/StepCard/StepCard.jsx";

const StepsSection = () => {
    return (
        <>
            <div className="w-full py-10 bg-[#F9FAFC] md:py-20 lg:py-[120px]">
                <div className="container">
                    <SectionHeading title={'Get Started in 3 Steps'} paragraph={'Start using premium digital tools in minutes, not hours.'}></SectionHeading>
                    <div className="w-full mt-5 grid grid-cols-1 gap-3 sm:gap-4 md:mt-10 md:gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 xl:gap-[30px]">
                        <StepCard></StepCard>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StepsSection;