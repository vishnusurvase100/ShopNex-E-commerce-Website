import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { Shop } from '../pages/Shop'
import { ProductDetails } from '../components/common/ProductDetails'
import { CartPage } from '../pages/CartPage'
import { WatchlistPage } from '../pages/WatchlistPage'

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/shop' element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/watchlist" element={<WatchlistPage />}
/>
        </Routes>
    )
}
