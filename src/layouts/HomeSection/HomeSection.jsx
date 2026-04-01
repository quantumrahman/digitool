import play from '../../assets/icons/play.png';
import banner from '../../assets/images/banner.png';

const HomeSection = () => {
    return (
        <>
            <div className="w-full py-12 sm:py-14 md:py-16 lg:py-[60px]">
                <div className="container">
                    <div className='w-full flex items-center justify-center gap-[60px] flex-wrap'>
                        <div className="w-auto space-y-4">
                            <div className='inline-flex py-2 px-4 bg-[#E1E7FF] rounded-full flex items-center justify-center gap-[5px]'>
                                <div className='w-4 h-4 bg-linear-to-r from-[#4F39F6]/50 to-[#9514FA]/50 rounded-full flex items-center justify-center '>
                                    <div className='w-[10px] h-[10px] bg-linear-to-r from-[#4F39F6]/60 to-[#9514FA]/60 rounded-full flex items-center justify-center'>
                                        <div className='w-[4px] h-[4px] bg-linear-to-r from-[#4F39F6]/50 to-[#9514FA]/50 rounded-full flex items-center justify-center'></div>
                                    </div>
                                </div>
                                <span className='font-family text-sm font-medium  bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-transparent bg-clip-text sm:text-base'>New: AI-Powered Tools Available</span>
                            </div>
                            <div className="w-auto space-y-4">
                                <h1 className="font-family text-4xl font-extrabold text-[#101727] leading-normal sm:text-5xl md:text-6xl lg:text-[65px] lg:leading-[84px]">Supercharge Your <br />Digital Workflow</h1>
                                <p className="font-family text-sm font-normal text-[#627382] sm:text-base md:text-lg lg:text-[18px]">Access premium AI tools, design assets, templates, and productivity <br />
                                software—all in one place. Start   faster today. <br />
                                Explore Products</p>
                            </div>
                            <div className="w-auto flex items-center gap-4 mt-4 md:mt-8">
                                <button className="w-[150px] rounded-full py-2.5 px-3 font-family text-sm font-bold cursor-pointer bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white transition-all duration-300 ease-in-out hover:shadow-[0_0_6px_rgba(79,57,246,0.4),0_0_12px_rgba(149,20,250,0.4)] md:py-3 md:px-[14px] md:text-base md:w-[180px] lg:py-4 lg:px-[14px]">Explore Products</button>
                                <button className="w-[150px] rounded-full py-2.5 px-3 font-family text-sm font-bold cursor-pointer bg-transparent border border-[#4F39F6] text-[#4F39F6] flex items-center justify-center gap-[10px] md:py-3 md:px-[14px] md:text-base md:w-[180px] lg:py-4 lg:px-[14px]"><img src={play} alt="play icon" /> Watch Demo</button>
                            </div>
                        </div>
                        <div className='w-[500px]'>
                            <img src={banner} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeSection;