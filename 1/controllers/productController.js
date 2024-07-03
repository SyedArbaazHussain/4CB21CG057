const axios = require('axios');
const Product = require('../models/Product');

const getTopProducts = async (req, res) => {
    const { categoryname } = req.params;
    const { n = 10, page = 1, sortby, order = 'asc', minPrice, maxPrice } = req.query;
    const companies = ["ANZ", "FLP", "SUP", "MYN", "AZO"];
        let allProducts = [];
        for (const company of companies) {
            const response = await axios.get(`http://20.244.56.144/test/companies/${company}/categories/${categoryname}/products`, {
                params: { top: n, minPrice, maxPrice }
            });
            allProducts = allProducts.concat(response.data);
        }
        if (sortby) {
            allProducts.sort((a, b) => {
                if (order === 'asc') {
                    return a[sortby] - b[sortby];
                } else {
                    return b[sortby] - a[sortby];
                }
            });
        }
        const startIndex = (page - 1) * n;
        const paginatedProducts = allProducts.slice(startIndex, startIndex + n);
        res.json(paginatedProducts);
};
const getProductDetails = async (req, res) => {
    const { id } = req.params;
        const product = await Product.findOne({ productId: id });
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(product);
};
module.exports = {
    getTopProducts,
    getProductDetails
};
