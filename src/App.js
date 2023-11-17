import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddBlog from './components/AddBlog';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = '' element={<AddBlog/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
