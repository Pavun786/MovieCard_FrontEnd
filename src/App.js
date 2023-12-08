import logo from './logo.svg';
import './App.css';

import {Routes,Route,Link, Navigate,useParams, useNavigate} from "react-router-dom"
import Welcome from './demo';
import MovieList from './movielist';
import NotFound from './notfound';
import AddMovie from './Addmovie';
import { useState} from "react";
import { Color } from './color';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { light } from '@mui/material/styles/createPalette';
import Paper from '@mui/material/Paper';
import { minHeight } from '@mui/system';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import useEnhancedEffect from '@mui/material/utils/useEnhancedEffect';
import MovieDetails from './MovieDetails';
import { BasicForm } from './BasicForm';
import EditMovie from './EditMovie';
import { Login } from './Login';
import { Register } from './Register';

import Home from './Home';
import ProtectedRoute from './ProtectedRoute';




// const Initial =[{
//   image:"https://i.pinimg.com/originals/a5/06/38/a5063877093f03027bd085a141a0215b.jpg",
//   title: "Fast & Furious-5",
//   about:"Fast Five (also known as Fast & Furious 5 or Fast & Furious 5: Rio Heist) is a 2011 American action film directed by Justin Lin and written by Chris Morgan. It is the sequel to Fast & Furious (2009) and the fifth installment in the Fast & Furious franchise.",
//   trailer: "https://youtu.be/OqjeOYeG5_A",
//   rating: "8.5/10"
// },
// {
//   image:"http://onlookersmedia.in/wp-content/uploads/2018/10/Ratchasan-Movie-Poster-Stills2.jpg",
//   title: "Ratchasan",
//   about:"Tamil movie Ratsasan was based on a notorious killer that was released in 2018 and Cuttputlli being the remake of the same movie makes it a true story. Ratsasan which was directed by Ramkumar",
//   trailer: "https://youtu.be/GsrN7rNch9Y",
//   rating: "9/10"
// },
// {
//   image:"https://www.nowrunning.com/content/movie/2021/dairy-25761/Stills/diary_2021715.jpg",
//   title: "Dairy",
//   about:"Diary is a 2022 Indian Tamil-language supernatural mystery thriller film written and directed by debutant Innasi Pandiyan and produced by S. Kathiresan under the banner of Five Star Creations LLP.",
//    trailer: "https://youtu.be/GV6Kg6GVmig",
//   rating: "8/10"
// },
// {
//   image:"https://m.media-amazon.com/images/M/MV5BMjYzZjllNWYtMzczMi00NGEyLTgzNmUtNGQyYTk4MzBlZGU4XkEyXkFqcGdeQXVyMjczODk3NjA@._V1_.jpg",
//   title: "Kuttram 23",
//   about:"Kuttram 23 is a 2017 Tamil crime adventure film. Know this movie. directed by The film stars Arun Vijay Mahima Nambiar in lead roles. The film is jointly produced by Arun Vijay and Indir Kumar. Vishal Chandrasekhar has composed music for the film. The film released on March 3, 2017.",
//   trailer: "https://youtu.be/XV4btHdEMxg",
//   rating: "8.5/10"
// }]

function App() {
  const [data, setData] = useState();
  
  const navigate=useNavigate()
  
 const[mode,setMode]=useState('light')
//  const[logout,setLogout]= useState(true)
//  const [token,setToken] = useState("")

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  
  // const [movie,setMovie] = useState([])

 const token = localStorage.getItem("token")

const LoggingOut=()=>{
  
  localStorage.clear()
  navigate("/")
 
}


    return (
      <ThemeProvider theme={darkTheme}>
        <Paper elevation={4} style={{minHeight:"100vh"}}>
      <div>
         <AppBar position="static">
        <Toolbar>
          <Button onClick={()=>navigate("/welcome")}color="inherit">Home</Button>
          <Button onClick={()=>navigate("/movies")}color="inherit">Movielist</Button>
          <Button onClick={()=>navigate("/addmovie")}color="inherit">AddMovie</Button>
          <Button onClick={()=>navigate("/color")}color="inherit">Color game</Button>
          <Button 
          //here if we use style,then its became as in line css.its very difficult to overwrite it.
          //so,we use sx..it mount on class.so,its editable one..& sx can use only at material UI
           sx={{marginLeft:"auto"}}
           startIcon={mode ==="dark" ? <Brightness7Icon /> : <Brightness4Icon /> }
          onClick={()=>setMode( mode === "light" ? "dark":"light")}color="inherit">
            
            {mode=== "light" ? "dark":"light"}mode</Button>

           {
             token ?  <Button onClick={()=>LoggingOut()}color="inherit">
             Logout
            </Button> : "Login"
           } 
           
        </Toolbar>
      </AppBar> 
       
       {/* <MovieList/> */}

         
       <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/home" element={
        <ProtectedRoute>
        <Home/>
        </ProtectedRoute>}/>
        <Route path='/movies' element={
        <ProtectedRoute>
        <MovieList/>
        </ProtectedRoute>} />
        <Route path='/welcome' element={
        <ProtectedRoute>
        <Welcome/>
        </ProtectedRoute> } />
        <Route path='*' element={<NotFound/>} />
        <Route path='/flims' element={<Navigate replace to ="/movies"/>}/>
        <Route path='/addmovie' element={<ProtectedRoute>
          <AddMovie addMovieData={data} setMovieData={setData}/>
          </ProtectedRoute>}/>
        <Route path='/movies/:id' element={
        <ProtectedRoute>
        <MovieDetails movie={data} setMovie={setData}/>
        </ProtectedRoute>
        } />
        <Route path='/movie/edit/:id' element={
        <ProtectedRoute>
        <EditMovie/>
        </ProtectedRoute>
        } />
        <Route path='/basicform' element={
        <ProtectedRoute>
        <BasicForm/>
        </ProtectedRoute>
        }/>
        <Route path='/color' element={
        <ProtectedRoute>
        <Color/>
        </ProtectedRoute>
        }/> 
       
      </Routes>
</div>
       </Paper>
       </ThemeProvider>
  )
        }
    
export default App;

