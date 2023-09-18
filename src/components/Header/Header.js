import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

    const navigations = [
        {
            name:'Home',
            path:'/'
        },
        {
            name:'Products',
            path:'/products'
        },
        {
            name:'About',
            path:'/about'
        },
        {
            name:'Contact',
            path:'/contact'
        }
    ]


    const brandLinkStyle = {
        textDecoration: 'none', 
    };
    return (
        <div>
            <header className="text-gray-600 body-font shadow-lg " style={{ padding: '10px 0' }}>
                <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
                    <Link to={'/'} className="flex title-font cursor-pointer font-medium items-center text-gray-900 mb-2 md:mb-0" style={brandLinkStyle}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-8 h-8 text-white p-1 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span className="ml-2 text-lg" >Brandistic</span>
                    </Link>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center"  >
                        {
                            navigations.map((navigation) => {
                                return (
                                    <Link to={navigation.path} className="mr-5 hover:text-gray-900" style={brandLinkStyle}>{navigation.name}</Link>
                                )
                            })
                        }
                    </nav>
                    <Link to={'/cart'} className="inline-flex items-center text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-800 rounded text-sm mt-2 md:mt-0" style={{textDecoration:'none'}}>Go to cart
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-3 h-3 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </Link>
                </div>
            </header>
        </div>
    )
}

export default Header
