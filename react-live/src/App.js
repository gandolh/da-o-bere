import './App.css';
import './Media.css';
import Home from './Home';
import Daobere from './Daobere';
import Leaderboard from './Leaderboard';
import { Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
     <Routes>
        <Route path="/" element={<Home/>}>Acasa</Route>
        <Route path= "/daobere" element={<Daobere/>}>Da o bere</Route>
        <Route path="/leaderboard" element={<Leaderboard/>}>Clasament</Route>
     </Routes>
    </div>
  );
}

export default App;
