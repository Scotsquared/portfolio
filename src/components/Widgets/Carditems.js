import React from 'react'
import { Link } from 'react-router-dom'

function Carditems(props) {
    return (
        <div>
            <div className='card-item'>
                <Link className='card-item-link' to={props.path}>
                    <figure className='card-item-pic-wrap' data-category={props.label}>
                        <img
                            src={props.src}
                            alt="Scot Image"
                            className='cards-item-img' />
                    </figure>
                    <div className='cards-item-info'>
                        <h5 className='cards-item-text'>{props.text}</h5>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Carditems
