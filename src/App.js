
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

import Blog from './components/Blog/Blog';
import Header from './components/Shared/Header/Header';
import Footer from './components/Shared/Footer/Footer';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
    <Header/>
      <div className="container">
        
      <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path='/blog' element={<Blog />}></Route>  
              <Route path='*' element={<NotFound/>}></Route>  
        </Routes>  

        </div>   
      
        <Footer />
    </div>
  );
}

export default App;
