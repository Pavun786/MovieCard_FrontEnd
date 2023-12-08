import { useState,useEffect } from "react";
import {useFormik} from "formik";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import App from "./App";
import { Navigate, useNavigate,useParams } from "react-router-dom";

import * as yup from "yup";
import {API} from "./Global.js";



const movieValidationSchema = yup.object({
 poster:yup.string().required().min(4),
 name:yup.string().required(),
 summary:yup.string().required().min(20),
 trailer:yup.string().required().min(4),
 rating:yup.string().required().min(0).max(10)

});

function EditMovie(){
     
    
     
  const {id} = useParams();
  
  //const movie = movieList[id]
  const[movie,setMovie]=useState(null)
  useEffect(()=>{
     fetch(`${API}/movies/${id}`,{
      method:"GET",
     })
    .then((data)=>data.json())
    .then((mv)=>setMovie(mv))
    },[])
 return(
    <div>
        {/* here table came befor than data..its not correctway.so,we set a conditional rendering */}
       { movie ? <EditMovieForm movie={movie}/>:"Loading..."}
    </div>
 )
 
  
}
  function EditMovieForm({movie}){ 

    console.log("movie",movie)
  const {handleSubmit,values,handleChange,handleBlur,touched,errors} = useFormik({
    initialValues:{
        poster:movie.poster,
        name:movie.name,  
        summary:movie.summary,
        trailer:movie.trailer,
        rating:movie.rating
    },

    validationSchema:movieValidationSchema,
    
    onSubmit:(updateMovie)=>{
      console.log("Form values: ",updateMovie)
      console.log(movie)
      editMovie(updateMovie);
     }
  
  })
 


    const navigate =useNavigate()
 
//  This is function,its trigger by onclick event   
    
    const editMovie = (updateMovie) => { 
  //steps:
  //1.metheod -PUT & id
  //2.body - data & JSON...ie:we sent a data in through the body as the form os JSON type..
  //Because,all languages know the JSON
  //3.headers -JSON
  
    fetch(`${API}/movies/${movie._id}`,{
      method:"PUT",
      body:JSON.stringify(updateMovie),
      headers:{"content-type": "application/json"},

     }).then(()=> navigate("/movies"))

    }
    
    return(
      <form className="smallBox" onSubmit={handleSubmit}>
          
      <TextField  
      label="poster"
      value={values.poster}
       name="poster"
       onChange={handleChange}
       onBlur={handleBlur} />
        {touched.poster && errors.poster ? errors.poster : null}
          
      <TextField 
       label="name"
       value={values.name}
       name="name"
       onChange={handleChange}
       onBlur={handleBlur} />
        {touched.name && errors.name ? errors.name : null}
         
      <TextField
       label="summary" 
       value={values.summary}
       name="summary"
       onChange={handleChange}
       onBlur={handleBlur} />
        {touched.summary && errors.summary ? errors.summary : null}
      
      <TextField 
      label="Trailer" 
      value={values.trailer}
       name="trailer"
       onChange={handleChange}
       onBlur={handleBlur} />
        {touched.trailer && errors.trailer ? errors.trailer : null}
      
      <TextField 
      label="Rating" 
      value={values.rating}
       name="rating"
       onChange={handleChange}
       onBlur={handleBlur} />  
        {touched.rating && errors.rating ? errors.rating : null} 
         
         
        
          <Button variant="contained" type="submit" color="success">Save</Button>
        </form>
  
    )
  }
  export default EditMovie ;