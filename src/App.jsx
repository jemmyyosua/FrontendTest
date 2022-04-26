import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Books from './pages/booksCategory';
import Book from './pages/book';
import Home from './pages/home';
 
function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/books/:id/:name" element={<Books/>} />
            <Route path="/book/:id/:title" element={<Book/>} />
          </Routes>
        </Router>
    </div>

  );
}

export default App;
