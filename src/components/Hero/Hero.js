import React from 'react';
import './Hero.css'; // Import your CSS file for animations

const Hero = () => {
    return (
        <div>
            <section className="text-gray-600 body-font mt-20">
                <div className="hero-content text-center">
                    <p className="text-4xl font-bold  text-black">Welcome to Brandistic</p>
                    <h1 className="mt-4 text-lg mb-5 text-primary">Discover the best products in one place.</h1>
                </div>
                <div className="hero-image-container">
                    <img
                        src="https://cdn.shopify.com/shopifycloud/brochure/assets/content-marketing/blog/blog_header/redesign/cta-blog-large-f0e4d37eea5a4f8d42ca600498c3296bf5122036385e4ec7cce7ee18316a9d3f.jpg" // Placeholder image URL
                        alt="Hero Image"
                        className="hero-image"
                    />
                </div>
            </section>
        </div>
    );
};

export default Hero;

