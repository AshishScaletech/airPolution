import React from 'react'

import pollution from '../../../assets/images/air-pollution.jpg';


const AirPollutionHead = () => {
    return (
        <>
            <img className="position-relative img-wrapper" src="https://images.unsplash.com/photo-1554511491-0f21bacd5ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80" alt="" />
            <div className="overlay">
                <h2>Air pollution </h2>
                <p>
                    check the air pollution in tha way
                </p>
            </div>
        </>
    )
}

export default AirPollutionHead