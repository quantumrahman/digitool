import product from '../public/product.json';

const fetchProduct = async () => {
    try {
        const response = await fetch(product);
        return await response.json();
    } catch (error) {
        console.log(error);
    }
};

export default fetchProduct;