const SectionHeading = ({ title, paragraph }) => {
    return (
        <>
            <div className="w-full flex items-center justify-center flex-col text-center gap-4">
                <h1 className="font-family text-[32px] font-extrabold text-[#101727] md:text-[40px] lg:text-[48px]">{title}</h1>
                <p className="w-full max-w-[550px] font-family text-sm font-normal text-[#627382] md:text-[15px] lg:text-base">{paragraph}</p>
            </div>
        </>
    );
};

export default SectionHeading;