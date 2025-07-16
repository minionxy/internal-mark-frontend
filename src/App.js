import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Internalmark from './components/Internalmark';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Internalmark/> }/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
