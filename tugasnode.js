const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Halo ini web pertama saya');
});

app.get('/get-data', (req, res) => {
  const data = [
    { id: 1, name: 'hanif' },
    { id: 2, name: 'mumu' },
  ];
  res.json(data);
});

app.get('/buat-file', (req, res) => {
  fs.writeFile('perkenalan.txt', 'Halo, nama saya Ahmad Hanif nuraidzin', (err) => {
    if (err) {
      res.status(500).send('Gagal membuat file.');
    } else {
      res.send('File berhasil dibuat.');
    }
  });
});


app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
