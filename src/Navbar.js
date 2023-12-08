// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Brightness4Icon from '@mui/icons-material/Brightness4';
// import Brightness7Icon from '@mui/icons-material/Brightness7';
// import {useNavigate} from "react-router-dom"
// import Button from '@mui/material/Button';
// import { useState } from 'react';
// import { ThemeProvider, createTheme } from '@mui/material/styles';

// function Navbar(){
//   const navigate=useNavigate()
  
//   const[mode,setMode]=useState('light')

//   const darkTheme = createTheme({
//     palette: {
//       mode: mode,
//     },
//   });
//     return(
//         <>
//          <ThemeProvider theme={darkTheme}>
//           <AppBar position="static">
//         <Toolbar>
//           <Button onClick={()=>navigate("welcome")}color="inherit">Home</Button>
//           <Button onClick={()=>navigate("movies")}color="inherit">Movielist</Button>
//           <Button onClick={()=>navigate("addmovie")}color="inherit">AddMovie</Button>
//           <Button onClick={()=>navigate("color")}color="inherit">Color game</Button>
//           <Button 
//           //here if we use style,then its became as in line css.its very difficult to overwrite it.
//           //so,we use sx..it mount on class.so,its editable one..& sx can use only at material UI
//            sx={{marginLeft:"auto"}}
//            startIcon={mode ==="dark" ? <Brightness7Icon /> : <Brightness4Icon /> }
//           onClick={()=>setMode( mode === "light" ? "dark":"light")}color="inherit">
            
//             {mode=== "light" ? "dark":"light"}mode</Button>
//         </Toolbar>
//       </AppBar>   

      
//       </ThemeProvider>     
//         </>
//     )
// }
// export default Navbar;