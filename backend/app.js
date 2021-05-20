const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const { PORT } = process.env;

app.use(express.json());
app.use(cors());

app.use('/api/v1', require('./routes/payment'));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;
