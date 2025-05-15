// express_demo.js
const express = require('express');
const app = express();

const port = process.env.PORT || 8081;

app.get('/', (req, res) => {
  const host = req.hostname;
  res.send(`Hello World! 应用实例，访问地址为 http://${host}:${port}`);
});

app.listen(port, '0.0.0.0', () => {
  console.log(`应用实例，访问地址为 http://localhost:${port}`);
});
