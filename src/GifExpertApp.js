import { useState } from "react";
import { AddCategory } from "./Components/AddCategory";
import { GifGrid } from "./Components/GifGrid";

export const GifExpertApp = () => {

    const [categorias, setCategoria] = useState(['Rock']);

    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategoria = { setCategoria }/>
            <hr />

            <ol>
                { categorias.map( (item, id) => 
                    <GifGrid 
                        key={ item}  
                        category={ item } 
                    />
                ) }
            </ol>
        </div>
    );
}