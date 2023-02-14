const express = require('express');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();

app.use(express.static('public'));
app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.send(`Nog eens Hallo Wereld`);
})

app.get('/version', (req, res) => {
  res.render('index', { title: process.env.npm_package_version});
})

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
})