import {useState} from "react"
import { useNavigate,useParams, } from "react-router-dom";
import { useEffect } from "react";
import { Movie } from "./Moviecard";
import { Button } from "@mui/material";
import {API} from "./Global.js";


function MovieDetails(){
   
  //Initialy we see in url parameter like as /movies/1 or 2 or 3..this parameter was passed to url by from Movie or Moviecard componenet..
  //this useParams used to get id value from url..for used to get the particular movie details by use in Mock API.
    const {id} = useParams();
    console.log(id)
    //const movie = movieList[id]
    const[movie,setMovie]=useState([])
    useEffect(()=>{
       fetch(`${API}/movies/${id}`,{
        method:"GET",
       })
      .then((data)=>data.json())
      .then((mv)=>setMovie(mv))
      },[])
   
   
    console.log(movie)
  
    let navigate=useNavigate()
  
    return(
      <div>
        <iframe
         width="100%" 
         height="850" 
         src={movie.trailer}
         title="Fast & Furious 5 Trailer" 
         frameborder="0" 
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
          
         </iframe>
         <div className='movie-detail-container'>
         <div className="cardbody">
         
        
         <h3>Movie details page of {movie.name}</h3>
        <p > ⭐{movie.rating}</p>
        </div>
        <p >{movie.summary}</p>
     
        <Button startIcon={<keyboardBackspaceIcon />}
        onClick={()=>navigate(-1)} variant="contained">Back</Button>  
         
      </div>
     
      {/* conditional Rendering for toggle discription  */}
        
        </div>
      
    )
  }
export default MovieDetails;  