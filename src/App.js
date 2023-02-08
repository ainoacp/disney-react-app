import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import './App.css';
import './components/shared/Header/Header';
import './components/shared/Footer/Footer';
import './pages/Home/Home';
import './pages/Characters/Characters'
import Header from './components/shared/Header/Header';
import Footer from './components/shared/Footer/Footer';
import Characters from './pages/Characters/Characters';
import Home from './pages/Home/Home';
import Character from "./pages/Character/Character";

function App() {
  return (
    <Router>
    <div className='App-header'>
      <Header></Header>
    </div>
    <div className='App-main'>
      <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='/characters' element={<Characters></Characters>} />
          <Route path='/characters/:id' element={<Character></Character>} />
      </Routes>
    </div>
    <div className="App-footer">
      <Footer></Footer>
    </div>
    </Router>
  );
}

export default App;
