import React from 'react';


export const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <footer>
            <p>Copywright &#169; by Bartosz Dalach {date}</p>
        </footer>
    );
}