import AddMovie from './Addmovie';
import {Movie,Btn} from "./Moviecard"
import { useState } from "react";
import App from './App';
import { useEffect } from 'react';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';
import {API} from "./Global.js";


//Here props values get from App.js

//Container(data)& Presentaional(view) || smart & presentaional componenet.
//because..here, MovieList----> is smart or container component,ie: its deals:data,
//movie---->is presentaional component,ie: its deals:view,
function MovieList() {
  
const[movieList,setMovieList]=useState([])
  
const getMovies =()=>{
   fetch(`${API}/movies`)
     .then((data)=>data.json())
     .then((mvs)=>setMovieList(mvs))
}

useEffect(()=>getMovies() ,[])
    
     const deleteMovie =(id)=>{
      fetch(`${API}/movies/${id}`,{
         method:"DELETE",
      }).then((data)=> getMovies())
      //here while delete the data,we got a status:200 ok.but,the data was not removed from UI.
      //when we refresh this page,then that data was removed.But,this is single page app.so,we dont do the refresh.
      //so,we refresh the data only..ie:by call getmovies  [.then((data)=> getMovies())]
     }
    const navigate =useNavigate();
      return (
        
         
         <div className="App">
         
            {/* {movieList.map((ele) => (
           
             <Movie
               image={ele.image}
               title={ele.title}
               about={ele.about}
               trailer={ele.trailer}
               rating={ele.rating}
             />
        ))} */}
         { movieList.map((mv)=>(
         <div key={mv._id}>
         <Movie movie={mv} id={mv._id}
         //render props
          deleteButton={
            <IconButton
            onClick={()=> deleteMovie(mv._id)}
            aria-label="delete"
            color="error"
          >
          <DeleteIcon/>
          </IconButton>
         }

         editButton={
            <IconButton
            onClick={()=> navigate(`/movie/edit/${mv._id}`)}
            aria-label="edit"
            color="primary"
          >
          <EditIcon/>
          </IconButton>
         }
          
         />
         </div>
      ))}
       </div>
    )
 }

 export default MovieList;
      
  