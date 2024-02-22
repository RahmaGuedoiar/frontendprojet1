import React from 'react'
import v1 from '../../assets/v1.mp4'
import '../../styles/vedio.css'
import { Link } from "react-router-dom";

const Vedio = () => {
    return (
        <div className="video-container">
            <video autoPlay loop muted>
                <source src={v1} type="video/mp4" />


            </video>
           
                <Link to="/product" className='linkvedio'>
                    <button className="video-button"> Products   </button>
                </Link>
           
        </div>
    )
}

export default Vedio