import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddBlog from './components/AddBlog';
import ViewBlog from './components/ViewBlog';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = 'add' element={<AddBlog/>}/>
      <Route path = 'view' element={<ViewBlog/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
