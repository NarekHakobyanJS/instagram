import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import UsersPage from './pages/UsersPage/UsersPage';

import './App.css';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home /> }/>
        <Route path='/users' element={<UsersPage /> }/>
      </Routes>
    </div>
  );
}

export default App;
