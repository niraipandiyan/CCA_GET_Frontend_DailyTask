import { Link, Outlet } from "react-router-dom";
import './Styles.css';
import { Box, createTheme, ThemeProvider } from "@mui/material";


export default function Homepage() {
  const theme = createTheme({
    palette:{
      mode: "light"
    }
  })
  return (
    <ThemeProvider theme={theme}>
    <Box  sx={{
    display:"grid",
    gridAutoFlow:"column",
    justifyContent:"space-evenly",}
    }>
        <Link to="/table" className="button-link">Table</Link>
        <Link to="/nestedmenu" className="button-link">Nestedmenu</Link>
        <Link to="/recharts" className="button-link">Recharts</Link>
    </Box>
    <Box margin="auto" marginTop={5} sx={{width:"900px",height:"200px"}}>
      <Outlet/>
    </Box >
    </ThemeProvider>
  );
}
