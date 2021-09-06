
export const getGifs = async( category ) => {
        
    const url = `http://api.giphy.com/v1/gifs/search?q=${ encodeURI(category)}&api_key=viHbE0cZKPgBNHdaj8eYiR7v2deOucZi&limit=10`;
    const respo = await fetch(url);
    const {data} = await respo.json();
    
    const gifs = data.map( img => {
        return ({
            img: img.images,
            title: img.title,
            url : img.images?.downsized_medium.url,
            id : img.id

        })
    })
    return(gifs);
}