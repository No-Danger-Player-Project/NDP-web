import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <h1>我的世界封禁系统</h1>
        <p>维护游戏环境，创建公平公正的游戏体验</p>
      </div>
      
      <div className="features">
        <div className="feature">
          <h2>实时封禁</h2>
          <p>对违规玩家进行即时封禁，保障服务器秩序</p>
        </div>
        <div className="feature">
          <h2>透明公开</h2>
          <p>所有封禁信息公开透明，接受玩家监督</p>
        </div>
        <div className="feature">
          <h2>申诉机制</h2>
          <p>提供完善的申诉渠道，保障玩家权益</p>
        </div>
      </div>
    </div>
  );
}

export default Home;