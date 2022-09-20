import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box } from "@mui/material";
import Home from "./pages/Home";
import ExerciseDetail from './pages/ExerciseDetail';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Box width="400px" sx={{ width: { x1: '1488px' } }} m="auto">
      <Router>
        < Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/exercise/:id" element={<ExerciseDetail />} />
        </Routes>
        <Footer />
      </Router>
    </Box>
  );
}

export default App;
