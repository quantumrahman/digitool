const CardBadge = ({ children, variant = 'New'}) => {
    const defaultStyle = "w-fit font-family text-xs font-medium md:text-sm";

    const style = {
        "Best Seller": "text-[#BB4D00] bg-[#FEF3C6] rounded-full px-2 py-1 md:px-2.5 md:py-[5px] lg:px-3 lg:py-[6px]",
        "New": "text-[#0A883E] bg-[#DBFCE7] rounded-full px-2 py-1 md:px-2.5 md:py-[5px] lg:px-3 lg:py-[6px]",
        "Popular": "text-[#4F39F6] bg-[#E1E7FF] rounded-full px-2 py-1 md:px-2.5 md:py-[5px] lg:px-3 lg:py-[6px]"
    };

    return (
        <>
            <span className={`${defaultStyle} ${style[variant]}`}>
                {children}    
            </span>
        </>
    );
};

export default CardBadge;