const express = require('express');
const app = express();

// ✅ Manually set CORS headers
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.json());

const routes = require('./src/routes');
app.use('/api', routes);

app.listen(5002, () => {
    console.log('🚗 Server running on http://localhost:5002');
  });
  
