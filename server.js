/*document.addEventListener('DOMContentLoaded', function() {
    const messageElement = document.getElementById('message');
    messageElement.innerHTML = 'Hello, World!';
  });
  */
  const express = require('express');
  const app = express();
  
  // 虛構的賣場冷氣溫度數據
  const currentTemperature = 24; // 假設當前溫度是 24 度
  
  // 虛構的顧客數量數據
  const currentCustomerCount = 50; // 假設當前顧客數量是 50 人
  
  // 定義 API 端點
  app.get('/store-info', (req, res) => {
    const isTemperatureSuitable = currentTemperature >= 20 && currentTemperature <= 25;
  
    res.json({
      temperature: currentTemperature,
      isTemperatureSuitable: isTemperatureSuitable,
      customerCount: currentCustomerCount
    });
  });
  
  // 監聽伺服器端口
  const port = 3000;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  