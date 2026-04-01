const fetchProduct = async () => {
    try {
        const response = await fetch('/src/data/product.json');
        return await response.json();
    } catch (error) {
        console.log(error);
    }
};

export default fetchProduct;