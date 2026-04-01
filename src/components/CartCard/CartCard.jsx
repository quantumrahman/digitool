const CartCard = () => {
    return (
        <>
            <div className="w-full flex items-center justify-between p-4 bg-[#F9FAFC] rounded-2xl md:p-[20px]">
                <div className="w-auto flex items-center justify-center gap-4">
                    <div className="w-[60px] h-[60px] bg-white border border-[#F2F2F2] rounded-full flex items-center justify-center">
                        <img src="" alt="" />
                    </div>
                    <div className="w-auto space-y-2">
                        <h4 className="font-family text-base font-semibold text-[#101727] md:text-lg lg:text-xl">AI Writing Pro</h4>
                        <p className="font-family text-sm font-medium text-[#627382] md:text-base">$20</p>
                    </div>
                </div>
                <button className="font-family text-sm font-bold text-[#FF3980] cursor-pointer transition-all duration-300 delay-300 hover:underline md:text-base">Remove</button>
            </div>
        </>
    );
};

export default CartCard;