import React, { useEffect, useState } from 'react'
import Loading from './Loading'
import Tours from './Tours';

const API = 'https://course-api.com/react-tours-project';
const App = () => {

    const [loading, setLoading] = useState(true);
    const [tours, setTours] = useState([]);

    const fetchTour = async () =>{
        setLoading(true);
        try{
            let res = await fetch(API);
            let result = res.status === 200 && await res.json();
            setLoading(false);
            setTours(result);
        }catch(err){
            setLoading(true);
            console.log(err);
        }
    }

    useEffect(() =>{
        fetchTour();
    }, []);

    const handleRemove = (id) => {
        const newTours = tours.filter((tour) =>{
            return tour.id !== id;
        })
        setTours(newTours);
    }
    const handleRestore = () =>{
        fetchTour();
    }

    if(loading){
        return <main>
                    <Loading />
                </main>
    }

    return (
        <main>
            <Tours tours={tours} handleRemove={handleRemove}/>
            
                {tours.length === 0 && <div className='title'><button className='btn' onClick={handleRestore}>Restore</button></div>}
            
        </main>
    )
}

export default App
