import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/navbar';
import { About } from './pages/about';
import { Contacts } from './pages/contacts';
import { Main } from './pages/main';
import { Price } from './pages/price';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/about' element={<About />} />
          <Route path='/price' element={<Price />} />
          <Route path='/contacts' element={<Contacts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
