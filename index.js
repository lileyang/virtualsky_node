const express = require('express');
const app = express();
const PORT = process.env.PORT || 3060;

// 一个简单的 GET 路由
app.get('/', (req, res) => {
  res.send('Hello from Node.js on Render!');
});

// 启动服务器
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});