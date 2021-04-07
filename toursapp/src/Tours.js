import React from 'react'
import Tour from './tour'

const Tours = ({tours, handleRemove}) => {


    const tour = tours.map( (item) => {
        return <article className='single-tour' key={item.id}>
            <Tour tour={item} handleRemove={handleRemove} />
        </article>
    })


    return (
        <section>
            <div className='title'>
                <h2>Tour</h2>
                <div className='underline'></div>
            </div>
            <div>
                {tour}
            </div>
        </section>
    )
}

export default Tours
