const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
router.get('/categories/:categoryname/products', async (req, res) => {
        const { categoryname } = req.params;
        const { n, page, sortby, order, minPrice, maxPrice } = req.query;
        let query = {
            category: categoryname,
            price: { $gte: minPrice || 0, $lte: maxPrice || Infinity }
        };
        let sortOptions = {};
        if (sortby && order) {
            sortOptions[sortby] = order === 'asc' ? 1 : -1;
        }
        const limit = parseInt(n) || 10;
        const skip = (parseInt(page) - 1) * limit || 0;

        const products = await Product.find(query)
                                     .sort(sortOptions)
                                     .skip(skip)
                                     .limit(limit);

        res.json(products);

});
router.get('/:productId', async (req, res) => {
        const { productId } = req.params;
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(product);
});
module.exports = router;
