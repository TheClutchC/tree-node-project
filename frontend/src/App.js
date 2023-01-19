import './App.css';
import LoginForm from './components/LoginForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" exact component={HomePage} /> */}
        <Route path="/login" component={LoginForm} />
      </Routes>
    </Router>
  );
}

export default App;
