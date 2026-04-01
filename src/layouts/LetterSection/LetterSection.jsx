const LetterSection = () => {
    return (
        <>
            <div className="w-full py-10 bg-linear-to-r from-[#4F39F6] to-[#9514FA] md:py-20 lg:py-[120px]">
                <div className="container">
                    <div className="w-full flex items-center justify-center flex-col gap-4">
                        <h3 className="font-family text-2xl font-extrabold text-white text-center sm:text-3xl md:text-4xl lg:text-[40px]">Ready to Transform Your Workflow?</h3>
                        <p className="font-family text-sm font-normal text-white/80 text-center sm:text-base">Join thousands of professionals who are already using Digitools to work smarter. <br /> Start your free trial today.</p>
                    </div>
                    <div className="w-full mt-5 flex items-center justify-center flex-col md:mt-[30px] lg:mt-[40px]">
                        <div className="w-full flex items-center justify-center gap-4">
                            <button className="w-[150px] rounded-full py-2.5 px-3 font-family text-sm font-bold cursor-pointer bg-white text-[#4F39F6] md:py-3 md:px-[14px] md:text-base md:w-[180px] lg:py-4 lg:px-[14px]">Explore Products</button>
                            <button className="w-[150px] rounded-full py-2.5 px-3 font-family text-sm font-bold cursor-pointer bg-transparent border border-white text-white md:py-3 md:px-[14px] md:text-base md:w-[180px] lg:py-4 lg:px-[14px]">  View Pricing</button>
                        </div>
                        <p className="font-family text-sm font-normal text-white/80 text-center mt-4 sm:text-base">14-day free trial • No credit card required • Cancel anytime</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LetterSection;