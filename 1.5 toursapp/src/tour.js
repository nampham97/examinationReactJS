import React, { useState } from 'react'

const Tour = ({tour, handleRemove}) => {
 
    const [readMore, setReadMore] = useState(false);

    return (
        <div>
            <img src={tour.image} alt={tour.id} />
            <footer>
                <div className='tour-info'>
                <h3>
                    {tour.name}
                </h3>
                <h4 className='tour-price'>{tour.price}</h4>
                </div>
                <p>
                    {readMore ? tour.info : `${tour.info.substring(0, 200)}...`}
                    <button onClick={() => setReadMore(!readMore)}>
                        {readMore ? 'Show less' : 'Read more'}
                    </button>
                </p>
                <button className='delete-btn' onClick={() => handleRemove(tour.id)}>Not interest</button>
            </footer>
        </div>
    )
}

export default Tour
