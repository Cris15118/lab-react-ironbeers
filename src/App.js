
import './App.css';
import { Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Error from "./pages/Error"
import Home from './pages/Home';
import ListBeers from './pages/ListBeers';

function App() {
  return (
    <div className="App">

     
      <Routes>
       <Route path="/" element={<Home/>} />
       <Route path='/beers' element={<ListBeers/>}




<Route path='/error' element = { <Error/>}/>
<Route path='*' element = { <NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
