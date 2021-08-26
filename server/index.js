const path = require('path');
const express = require('express');
const router = require('./routes.js');
const app = express();
const port = 3003;

app.use(express.static(path.resolve(__dirname, '../client/dist')));
app.use('/', router);

app.listen(port, () => {
  console.log('listening at port', port);
});
