import CartCard from "../CartCard/CartCard.jsx";

const CartContent = () => {
    return (
        <>
            <div className="w-full min-h-[485px] mt-5 bg-white border border-[#F2F2F2] rounded-2xl p-4 flex justify-center flex-col gap-4 md:p-6 md:gap-6 lg:p-10">
                <div className="w-full">
                    <h3 className="font-family text-xl font-bold text-[#101727] md:text-[22px] lg:text-2xl">Your Cart</h3>
                </div>
                <div className="w-full flex justify-center flex-col gap-4">
                    <CartCard></CartCard>
                    <CartCard></CartCard>
                    <CartCard></CartCard>
                </div>
                <div className="w-full flex items-center justify-between">
                    <p className="font-family text-sm font-normal text-[#627382] md:text-base">Total:</p>
                    <h3 className="font-family text-xl font-bold text-[#101727] md:text-[22px] lg:text-2xl">$24</h3>
                </div>
                <button className="w-full py-3 px-4 font-family text-sm font-bold text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:shadow-[0_0_6px_rgba(79,57,246,0.4),0_0_12px_rgba(149,20,250,0.4)] md:py-3 md:px-8 md:text-base">Proceed to Checkout</button>
            </div>
        </>
    );
};

export default CartContent;