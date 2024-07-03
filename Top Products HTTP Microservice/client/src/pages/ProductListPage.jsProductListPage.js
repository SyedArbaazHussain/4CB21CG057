import React, { useState, useEffect } from 'react';
import { getTopProducts } from '../services/api';
import ProductCard from '../components/ProductCard';
import { Container, Grid, Pagination, Typography, TextField, Button } from '@mui/material';

const ProductListPage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [category, setCategory] = useState('Laptop');
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [sortby, setSortby] = useState('price');
    const [order, setOrder] = useState('asc');
    const [minPrice, setMinPrice] = useState(1);
    const [maxPrice, setMaxPrice] = useState(10000);

    useEffect(() => {
        const fetchProducts = async () => {
            const data = await getTopProducts(category, 10, page, sortby, order, minPrice, maxPrice);
            setProducts(data);
            setLoading(false);
            setTotalPages(Math.ceil(data.length / 10));
        };
        fetchProducts();
    }, [category, page, sortby, order, minPrice, maxPrice]);

    if (loading) return <Typography>Loading...</Typography>;

    return (
        <Container>
            <Typography variant="h4" component="h1" gutterBottom>
                Top Products in {category}
            </Typography>
            <Grid container spacing={2}>
                {products.map(product => (
                    <Grid item key={product.productId} xs={12} sm={6} md={4}>
                        <ProductCard product={product} />
                    </Grid>
                ))}
            </Grid>
            <Pagination
                count={totalPages}
                page={page}
                onChange={(e, value) => setPage(value)}
                style={{ marginTop: '20px' }}
            />
        </Container>
    );
};

export default ProductListPage;
