import React from 'react';
import '../../App.css';
import { Button } from '../Widgets/Button';
import { Link } from 'react-router-dom';
import Carditems from '../Widgets/Carditems'
import Cards from '../Widgets/Cards';
import './Body.css'
function Body() {
    return (
        <>
            <div className='Body-container'>
                <a classname='hello' target="_blank" href="https://github.com/Scotsquared?tab=repositories">
                    Projects
                </a>
            </div>
            <Cards />
        </>

    )
}

export default Body
