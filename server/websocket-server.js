const WebSocket = require('ws');
const http = require('http');
const express = require('express');
const path = require('path');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// 存储所有连接的 WebSocket 客户端
const clients = new Set();

// 监听 WebSocket 连接事件
wss.on('connection', (ws) => {
  clients.add(ws);

  // 监听消息事件
  ws.on('message', (message) => {
    try {
      const parsedMessage = JSON.parse(message);
      // 将接收到的消息广播给所有客户端
      for (const client of clients) {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify(parsedMessage));
        }
      }
    } catch (error) {
      console.error('Error parsing JSON message:', error);
    }
  });

  // 监听关闭事件
  ws.on('close', () => {
    clients.delete(ws);
  });
});

// 配置静态文件目录
app.use(express.static(path.join(__dirname, 'public')));

// 启动 HTTP 服务器
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
