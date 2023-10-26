const express = require('express');
const app = express();
const port = 8069;

app.get('/nama', (req, res) => {
  res.send('Nama saya Ahmad Hanif Nuraidzin');
});

app.get('/asal', (req, res) => {
  res.send('saya asal dari Banten');
});

app.get('/kontak', (req, res) => {
  res.send('ig : @a_m_15.22');
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});