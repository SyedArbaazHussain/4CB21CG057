import React, { useState, useEffect } from 'react';
import { getProductDetails } from '../services/api';
import { useParams } from 'react-router-dom';
import { Container, Typography, Card, CardContent, CardMedia } from '@mui/material';

const ProductDetailsPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            const data = await getProductDetails(id);
            setProduct(data);
            setLoading(false);
        };
        fetchProduct();
    }, [id]);

    if (loading) return <Typography>Loading...</Typography>;

    return (
        <Container>
            <Card>
                <CardMedia
                    component="img"
                    height="140"
                    image={`https://via.placeholder.com/150?text=${product.productName}`}
                    alt={product.productName}
                />
                <CardContent>
                    <Typography variant="h5" component="div">
                        {product.productName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {product.company} - ${product.price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Rating: {product.rating}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Discount: {product.discount}%
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Availability: {product.availability ? 'Yes' : 'No'}
                    </Typography>
                </CardContent>
            </Card>
        </Container>
    );
};

export default ProductDetailsPage;
