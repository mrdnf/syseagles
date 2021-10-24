const express = require('express');
const app = express();

app.get('/', (req, res) => { res.send('Hello World!'); });

const PORT = process.env || 5000;
app.listen(port, () => {
  console.log(`App Running & listening on port ${PORT}!`);
});
