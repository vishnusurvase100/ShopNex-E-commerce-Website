import React from 'react'
import { Banner } from '../components/normal/Banner'
import { ShopByCategories } from '../components/normal/ShopByCategory'
import { Benefits } from '../components/normal/Benifits'
import { BestSellingProducts } from '../components/normal/BestSellingProduct'

export const HomePage = () => {
    return (
        <div>
            <Banner />
            <div className="relative z-20 mx-auto -mt-14 max-w-7xl px-6">
                <Benefits />
            </div>
            <ShopByCategories />
            <BestSellingProducts />
        </div>
    )
}
