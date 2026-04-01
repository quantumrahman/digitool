const StatsSection = () => {
    return (
        <>
            <div className="w-full py-10 bg-linear-to-r from-[#4F39F6] to-[#9514FA] sm:py-12 md:py-14 lg:py-[60px]">
                <div className="container">
                    <div className="w-full grid gap-8 grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
                        <div className="w-full space-y-3 flex items-center justify-center flex-col">
                            <h3 className="font-family text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl xl:text-[60px]">50K+</h3>
                            <p className="font-family text-base font-medium text-white/70 sm:text-lg md:text-xl lg:text-[24px]">Active Users</p>
                        </div>
                        <div className="w-full space-y-3 flex items-center justify-center flex-col">
                            <h3 className="font-family text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl xl:text-[60px]">200+</h3>
                            <p className="font-family text-base font-medium text-white/70 sm:text-lg md:text-xl lg:text-[24px]">Premium Tools</p>
                        </div>
                        <div className="w-full space-y-3 flex items-center justify-center flex-col">
                            <h3 className="font-family text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl xl:text-[60px]">4.9</h3>
                            <p className="font-family text-base font-medium text-white/70 sm:text-lg md:text-xl lg:text-[24px]">Our Rating</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StatsSection;