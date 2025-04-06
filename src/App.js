import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import BanList from './components/BanList';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/banlist" element={<BanList />} />
            <Route path="/about" element={<div className="about"><h1>关于我们</h1><p>这是一个Minecraft服务器封禁系统，旨在维护游戏环境的公平公正。</p></div>} />
          </Routes>
        </main>
        <footer>
          <div className="container">
            <p>&copy; 2025 Minecraft封禁系统 - 保留所有权利</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;