import React, { useEffect, useState } from 'react'
import './Tempapp.css';

const Tempapp = () => {
    const [city, setCity] = useState(null)
    const [search, setSearch] = useState('delhi')

    useEffect(() => {
        const fetchApi = async () => {
            const API_KEY = '3265874a2c77ae4a04bb96236a642d2f';
            let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_KEY}&units=metric`);
            let res = await data.json();
            // console.log(res.main.temp)

            setCity(res.main)

        }
        fetchApi()
    }, [search])

    return (
        <>
        
            <div className='box'>
                <div className='InputData'>
                    <input
                        type='search'
                        className='inputFeild'
                        placeholder='City / Country '
                        style={{fontFamily:'monospace',textAlign:'center',appearance:'none'}}
                        onChange={(e) => {
                            const val = e.target.value;
                            setSearch(val)
                        }}
                    />
                </div>

                {
                    !city ? (<p style={{color:'red',textAlign:'center',fontWeight:'bold',letterSpacing:'1px',margin:'10vh'}}>No Similar Data Found</p>) :


                        <div className='info'>
                            <i class="fa-solid fa-street-view"><span className='location'>{search}</span></i>

                            <p className='temp'>
                                {city.temp} &#x2103;
                            </p>
                            <h3 className='tempmin_max'>
                                Min : {city.temp_min}&#x2103; | Max :
                                {city.temp_max}&#x2103;</h3>
                        </div>
                }
            </div>
        </>
    )
}

export default Tempapp;