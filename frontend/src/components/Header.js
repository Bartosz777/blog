import React from 'react'
import { Navigation } from './Navigation'


export const Header = () => {
    return (
        <div className='head'>
            <header>
                <h1>BLOG</h1>
            </header>
            <Navigation />
        </div>
    );
}