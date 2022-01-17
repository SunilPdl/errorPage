import React from 'react';
import './PageNotFoundStyle.css';
import errorpage4 from '../../image/errorpage4.png'

const PageNotFound = ({type,msg}) => {
    return (
        <>
            <div className="main-container">
                <div className='container'>
                    <h2 className='error-type' > {type} </h2>
                
                    <div>
                        <img className='bg-img' src={errorpage4} alt="404 page not found error." />
                    </div>
                    <h5 className='message'> {msg} </h5>
                    <button className="home-back-btn">Go Back Home</button>
                </div>
            </div>
        </>
    )
}

export default PageNotFound;