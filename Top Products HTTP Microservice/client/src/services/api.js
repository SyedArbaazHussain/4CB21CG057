import axios from 'axios';
const API_URL = 'http://localhost:5000/api/products';
export const getTopProducts = async (category, n, page, sortby, order, minPrice, maxPrice) => {
    try {
        const response = await axios.get(`${API_URL}/categories/${category}/products`, {
            params: { n, page, sortby, order, minPrice, maxPrice }
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
};
export const getProductDetails = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};
