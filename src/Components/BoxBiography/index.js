import React from 'react'
// import './styles.scss'
const BoxBiography = ({title, Biography}) => {
    return (
        <div className="container-biography">
            <div className="text-container">
                {title}
            </div>
            <div className="text-container">
                {Biography}
            </div>
        </div>
    )
}
export default BoxBiography;
