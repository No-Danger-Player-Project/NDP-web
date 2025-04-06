import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">MC封禁系统</h1>
        <nav className="nav">
          <ul>
            <li><Link to="/">首页</Link></li>
            <li><Link to="/banlist">封禁榜单</Link></li>
            <li><Link to="/about">关于我们</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;