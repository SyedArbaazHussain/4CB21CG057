import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';

const ProductCard = ({ product }) => {
    return (
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
    );
};

export default ProductCard;
