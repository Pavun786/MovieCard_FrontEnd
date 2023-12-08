
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { useState } from "react";
import "font-awesome/css/font-awesome.css"
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';




function Movie({movie,id,deleteButton,editButton}) {
 //the above movie & id,deleteMovie are received from MovieList componenet
 
 //This useState() used for toggle switch...
  let [state,setState]=useState("true")
  const navigate=useNavigate()

  return (
     <Card className="box">
    
      <img className="banner" src={movie.poster}/>
      <CardContent> 
       <div className="cardbody">
       
       <h5 className="title">{movie.name} <IconButton  onClick={()=>setState(!state)} aria-label="toggle">
      { state ? <ExpandLessIcon color="primary"/>:<ExpandMoreIcon color="primary"/>}
</IconButton>

<IconButton color="primary" 
//this navigate is used to navigate to MovieDetails page
onClick={()=>navigate(`/movies/${id}`)}>
    
      <InfoIcon/>
</IconButton>


   </h5> 
      
      <p className="rating"> ⭐{movie.rating}</p>
       
    </div>
   
    {/* conditional Rendering for toggle discription  */}
      
      {state ? <p className="discription">{movie.summary}</p>:null } 
      
       {/* <a href={movie.trailer} target="_blank" className="btn">play ▶</a> */}
    
    </CardContent>
      <CardActions>
      {/* render props pattern -i.e:we send a jsx as props[from MovieList componenet to this componenet],and it renderd in child componenet*/}
      <Btn/> {editButton} {deleteButton}
      </CardActions>
  </Card>
  )
}

function Btn() {
   
  let [like, setLike] = useState(0);
  let [disLike, setDisLike] = useState(0);
  
//   const likeStyle = {
//   color:"green"
//  };
//   const disLikeStyle = {
//   color:"red"
// };
 const incrementLike=() => setLike(like + 1)
 const incrementDisLike=() => setDisLike(disLike + 1)

 return (
  <div>
    <IconButton onClick={incrementLike} color="primary" aria-label="like">
    <Badge badgeContent={like} color="primary">
      👍
    </Badge>
   </IconButton>
   
    
   <IconButton onClick={incrementDisLike} color="error" aria-label="dislike">
   <Badge badgeContent={disLike} color="error">
     👎
   </Badge>
    
   </IconButton>
   
    
  </div>
);
}


export {Movie,Btn};
