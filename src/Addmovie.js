import { useState } from "react";
import {useFormik} from "formik";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import App from "./App";
import { Navigate, useNavigate } from "react-router-dom";
import * as yup from "yup";
import {API} from "./Global.js";


// {addMovieData,setMovieData} get from App.js---------------->

// function AddMovie({addMovieData,setMovieData}){
  
//     const [image, setImage] = useState("");
//     const [title, setTitle] = useState("");
//     const [about, setAbout] = useState("");
//     const [trailer, setTrailer] = useState("");
//     const [rating, setRating] = useState("");

//     const navigate =useNavigate()
 
// //  This is function,its trigger by onclick event   
    
//     const addMovie = () => { 
//       const newMovie = {
//         image: image,
//         title: title,
//         about: about,
//         trailer: trailer,
//         rating: rating
//       };

// //  combaining default movie datan & new data 
      
//     //  setMovieData([...addMovieData, newMovie]);
//     //   console.log(newMovie);

//   //steps:
//   //1.metheod -POST
//   //2.body - data & JSON...ie:we sent a data in through the body as the form os JSON type..
//   //Because,all languages know the JSON
//   //3.headers -JSON
  
//     fetch(`https://63beea7df5cfc0949b64c464.mockapi.io/movies`,{
//       method:"POST",
//       body:JSON.stringify(newMovie),
//       headers:{"content-type": "application/json"},

//      }).then(()=> navigate("/movies"))

//     }
    
//     return(
//       <div className="smallBox">
          
//       <TextField  label="Image" variant="outlined" onChange={(event) => setImage(event.target.value)} />
          
//       <TextField label="Title" variant="outlined" onChange={(event) => setTitle(event.target.value)} />
         
//       <TextField label="About" variant="outlined" onChange={(event) => setAbout(event.target.value)} />
//       <TextField label="Trailer" variant="outlined" onChange={(event) => setTrailer(event.target.value)} />
//       <TextField label="Rating" variant="outlined"  onChange={(event) => setRating(event.target.value)} />   
         
         
        
//           <Button variant="contained" onClick={addMovie}>Add Movie</Button>
//         </div>
  
//     )
//   }
//   export default AddMovie ;

const movieValidationSchema = yup.object({
 poster:yup.string().required().min(4),
 name:yup.string().required(),
 summary:yup.string().required().min(20),
 trailer:yup.string().required().min(4),
 rating:yup.string().required().min(0).max(10)

});

function AddMovie({addMovieData,setMovieData}){
  
    // const [image, setImage] = useState("");
    // const [title, setTitle] = useState("");
    // const [about, setAbout] = useState("");
    // const [trailer, setTrailer] = useState("");
    // const [rating, setRating] = useState("");
     const {handleSubmit,values,handleChange,handleBlur,touched,errors} = useFormik({
    initialValues:{
        poster:"",
        name:"",
        summary: "",
        trailer:"",
        rating: ""
    },

    validationSchema:movieValidationSchema,
    
    onSubmit:(newMovie)=>{
      console.log("Form values: ",values)
      addMovie(newMovie);
     }
  
  })
 


    const navigate =useNavigate()
 
//  This is function,its trigger by onclick event   
    
    const addMovie = (newMovie) => { 
      // const newMovie = {
      //   image: image,
      //   title: title,
      //   about: about,
      //   trailer: trailer,
      //   rating: rating
      // };

//  combaining default movie datan & new data 
      
    //  setMovieData([...addMovieData, newMovie]);
    //   console.log(newMovie);

  //steps:
  //1.metheod -POST
  //2.body - data & JSON...ie:we sent a data in through the body as the form os JSON type..
  //Because,all languages know the JSON
  //3.headers -JSON
  
    fetch(`${API}/movies`,{
      method:"POST",
      body:JSON.stringify(newMovie),
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
       onBlur={handleBlur} 
       //here error & helpertext attribute are Meterial UI feature word..
       //Inside of {...} is error message handle by formik
       error={touched.poster && errors.poster}
       helperText={touched.poster && errors.poster ? errors.poster : null}/>
       
          
      <TextField 
       label="name"
       value={values.name}
       name="name"
       onChange={handleChange}
       onBlur={handleBlur}
       error={touched.name && errors.name} 
       helperText={touched.name && errors.name ? errors.name : null}
/>
               
      <TextField
       label="Summary" 
       value={values.summary}
       name="summary"
       onChange={handleChange}
       onBlur={handleBlur} 
       error={touched.summary && errors.summary}
       helperText={touched.summary && errors.summary ? errors.summary : null}/>
            
      <TextField 
      label="Trailer" 
      value={values.trailer}
       name="trailer"
       onChange={handleChange}
       onBlur={handleBlur}
       error={touched.trailer && errors.trailer }
       helperText={touched.trailer && errors.trailer ? errors.trailer : null}
 />
              
      <TextField 
      label="Rating" 
      value={values.rating}
       name="rating"
       onChange={handleChange}
       onBlur={handleBlur} 
       error={touched.rating && errors.rating }
       helperText={touched.rating && errors.rating ? errors.rating : null} />  
        
         
         
        
          <Button variant="contained" type="submit">Add Movie</Button>
        </form>
  
    )
  }
  export default AddMovie ;