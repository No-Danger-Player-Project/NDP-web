import React, { useState, useEffect } from 'react';
import './BanList.css';

function BanList() {
  const [banList, setBanList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 这里将来会替换为真实的API调用
    const fetchBanList = async () => {
      try {
        // 模拟API请求
        setTimeout(() => {
          const mockData = [
            { id: 1, playerName: 'Player1', reason: '使用作弊模组', date: '2023-10-15', expireDate: '2024-10-15' },
            { id: 2, playerName: 'Player2', reason: '恶意破坏', date: '2023-10-10', expireDate: '2023-12-10' },
            { id: 3, playerName: 'Player3', reason: '辱骂其他玩家', date: '2023-10-05', expireDate: '2023-11-05' },
            { id: 4, playerName: 'Player4', reason: '盗窃物品', date: '2023-09-28', expireDate: '2023-10-28' },
            { id: 5, playerName: 'Player5', reason: '刷屏', date: '2023-09-20', expireDate: '2023-10-20' },
          ];
          setBanList(mockData);
          setLoading(false);
        }, 1000);
      } catch (err) {
        setError('获取封禁列表失败');
        setLoading(false);
      }
    };

    fetchBanList();
  }, []);

  if (loading) return <div className="loading">加载中...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="ban-list">
      <h1>封禁榜单</h1>
      <table>
        <thead>
          <tr>
            <th>玩家名称</th>
            <th>封禁原因</th>
            <th>封禁日期</th>
            <th>到期日期</th>
          </tr>
        </thead>
        <tbody>
          {banList.map(ban => (
            <tr key={ban.id}>
              <td>{ban.playerName}</td>
              <td>{ban.reason}</td>
              <td>{ban.date}</td>
              <td>{ban.expireDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BanList;