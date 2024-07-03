import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductListPage from './pages/ProductListPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import { CssBaseline } from '@mui/material';

const App = () => {
    return (
        <Router>
            <CssBaseline />
            <Routes>
                <Route path="/" element={<ProductListPage />} />
                <Route path="/product/:id" element={<ProductDetailsPage />} />
            </Routes>
        </Router>
    );
};

export default App;
