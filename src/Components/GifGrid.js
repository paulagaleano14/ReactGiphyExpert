import React from 'react'
import { useFetchGifs } from '../hooks.js/useFetchGifs';
import { GifGridItem } from '../Components/GifGridItem';

export const GifGrid = ({ category }) => {

    const {data:images, loading} = useFetchGifs( category );

    return (
        <>
        <h3> { category } </h3>
        {loading && <p className="card animate__animated animate__flash" >Cargando...</p>}
        <div className="card-grid">
            { 
                images.map(img => (
                    <GifGridItem
                        key={ img.id }  
                        { ...img } 
                    />
                ) )
            }
        </div>
        </>
    )
}
