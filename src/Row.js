import React, {useState, useEffect} from 'react';
import './Row.css';
import axios from './axios'; //instance was given axios as an alias name because it was exported as default so the name could be changed here


const base_url = "https://image.tmdb.org/t/p/original/"; // base url for images

const Row = ({title,fetchUrl,isLargeRow}) => {

    const [movies, setMovies] = useState([]);
  

    useEffect(()=>{
        const fetchData = async () => {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    },[fetchUrl]);


  return (

    <div className='row'>

        <h2>{title}</h2>
        <div className="row_posters">
           
            {movies.map((movie)=>{
                return (
                    ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) &&
                    (
                    <img 
                        key={movie.id}
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                        alt={movie.name}
                        className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                        
                    />
                   )
               )
            })};
        </div>

      

    </div>

  )

}

export default Row;