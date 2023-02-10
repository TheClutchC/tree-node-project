import './App.css';
import LoginForm from './components/LoginForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/users/login" element={<LoginForm/>} />
        <Route path="/api" exact element={<HomePage/>} />
      </Routes>
    </Router>
  );
}

export default App;
