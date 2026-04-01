const fetchProduct = async () => {
    try {
        const response = await fetch('../data/product.json');
        return await response.json();
    } catch (error) {
        console.log(error);
    }
};

export default fetchProduct;