
import './App.css';
import { Tasks } from './component/Tasks';
import { Navbar } from './component/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Tasks />} />
            <Route path="/about" element={<Tasks />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
export default App;