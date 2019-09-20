import React from 'react'

const BoxBiography = ({title, Biography}) => {
    return (
        <div className="biography">
            <p className="biography-text">
                {title}
            </p>
            <p className="biography-text"> 
                {Biography}
            </p>
        </div>
    )
}
export default BoxBiography