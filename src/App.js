import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import First from './Components/First';
import Statebasics from './Components/Statebasics';
import Tablex from './Components/Tablex';
import Navbar from './Components/Navbar';
import Apiget from './Components/Apiget';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
           <Route path='/' element= {<Statebasics/>}/>
           <Route path='/first' element= {<First/>}/>
           <Route path='/tablex' element= {<Tablex/>}/>
           <Route path='/axios' element= {<Apiget/>}/>
      </Routes>
        </div>
  );
}

export default App;
