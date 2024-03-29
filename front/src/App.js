/* eslint-disable react/style-prop-object */
import logo from './logo.svg';
import './App.css';

//import los componentes
import CompShowBlogs from './blog/showBlogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CompCreateBlog from './blog/createBlogs';
import CompEditBlog from './blog/editBlog';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
    
       
        <button className='btn btn-primary'><i className="fa-brands fa-reacteurope fa-bounce fa-lg"></i></button>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <CompShowBlogs /> }/>
          <Route path='/create' element={ <CompCreateBlog /> }/>
          <Route path='/edit/:id' element={ <CompEditBlog /> }/>


        </Routes>
      </BrowserRouter>
     { /* <CompShowBlogs></CompShowBlogs>   */ }
    </div>
  );
}

export default App;
