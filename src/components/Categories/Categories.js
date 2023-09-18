import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import FeatureCard from '../FeatureCard/FeatureCard';

const Categories = () => {
    const [Categories, setCategories] = useState([])
    useEffect(() => {
        const fetchCategories = async () => {
            const response = await fetch('https://fakestoreapi.com/products/categories')
            const data = await response.json()
            console.log(data, 'data')
            setCategories(data)
        }
        fetchCategories()
    }, [])

    if (Categories.length === 0) return <div>Loading......</div>


    return (
        <div>
            <FeatureCard cards={Categories} />
        </div>
    )
}

export default Categories