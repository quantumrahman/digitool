import CartCard from "../CartCard/CartCard.jsx";

const CartContent = () => {
    return (
        <>
            <div className="w-full mt-5 bg-white border border-[#F2F2F2] rounded-2xl p-4 flex justify-center flex-col gap-4 md:p-6 lg:p-10">
                <div className="w-full">
                    <h3 className="font-family text-xl font-bold text-[#101727] md:text-[22px] lg:text-2xl">Your Cart</h3>
                </div>
                <div className="w-full flex justify-center flex-col gap-4">
                    <CartCard></CartCard>
                </div>
            </div>
        </>
    );
};

export default CartContent;