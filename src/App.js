import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Internalmark from './components/Internalmark';
import Viewmarks from './components/Viewmarks';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Internalmark/> }/>
      <Route path='/viewall' element={ <Viewmarks/> }/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
