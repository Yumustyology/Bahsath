import './App.css';
import Home from './pages/home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SearchPage from './pages/searchPage';
function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <Router>
        <Routes>
          <Route path='/search' element={
            <SearchPage />
          } 
          />
          <Route path='/' element={
          <>
            <Home/> 
          </>
          }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
