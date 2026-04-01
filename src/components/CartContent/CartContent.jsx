import CartCard from "../CartCard/CartCard.jsx";
import { toast, Bounce } from "react-toastify";

const CartContent = ({ cart, setCart }) => {
    const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);

    const handleCheckout = () => {
        toast.success('Payment successfull!', {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            theme: "light",
            transition: Bounce,
        });

        setCart([]);
    };

    const handleDeleted = (item) => {
        const filterProduct = cart.filter((product) => product.id !== item.id);

        setCart(filterProduct);

        toast.success('Delete product from cart!', {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            theme: "light",
            transition: Bounce,
        });
    };

    return (
        <>
            <div className={`w-full ${cart.length === 0 ? 'min-h-[485px]' : 'min-h-auto'} mt-5 bg-white border border-[#F2F2F2] rounded-2xl p-4 flex justify-center flex-col gap-4 md:p-6 md:gap-6 lg:p-10`}>
                {cart.length === 0 && <p className="font-family text-sm font-normal text-[#627382] md:text-base text-center">Your cart is empty! please add.</p>}
                {cart.length !== 0 && 
                    <>
                        <div className="w-full">
                            <h3 className="font-family text-xl font-bold text-[#101727] md:text-[22px] lg:text-2xl">Your Cart</h3>
                        </div>
                        <div className="w-full flex justify-center flex-col gap-4">
                            {cart.map((product) => (
                                <CartCard key={product?.id} product={product} handleDeleted={handleDeleted}></CartCard>
                            ))}
                        </div>
                        <div className="w-full flex items-center justify-between">
                            <p className="font-family text-sm font-normal text-[#627382] md:text-base">Total:</p>
                            <h3 className="font-family text-xl font-bold text-[#101727] md:text-[22px] lg:text-2xl">${totalPrice.toFixed(2)}</h3>
                        </div>
                        <button onClick={handleCheckout} className="w-full py-3 px-4 font-family text-sm font-bold text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:shadow-[0_0_6px_rgba(79,57,246,0.4),0_0_12px_rgba(149,20,250,0.4)] md:py-3 md:px-8 md:text-base">Proceed to Checkout</button>
                    </>
                }
            </div>
        </>
    );
};

export default CartContent;