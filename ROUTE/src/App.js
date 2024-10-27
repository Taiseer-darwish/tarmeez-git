import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<h1>Root Route</h1>} />
        <Route path="/hello" element={<h1>Hello Page</h1>} />
        <Route path="/post" element={<h1>Post Page</h1>} />
        <Route path="/home" element={<h1>Home Page</h1>} />
      </Routes>
    </div>
  );
}



export default App;  

