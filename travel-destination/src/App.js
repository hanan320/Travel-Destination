import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home.js'
import TourDetails from './components/tourDetails/TourDetails';


function App() {


  return (
    <div className="App">


      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/city/:id" element={<TourDetails />}></Route>
      </Routes>

    </div>
  );
}


export default App;