const express = require('express');
const Jimp = require('jimp');

const app = express();
const port = process.env.PORT || 5000;

app.get('/resize', (req, res) => {
  if (!req.query.url) {
    return res.send('missing url parameter');
  }

  Jimp.read(req.query.url, function(err, img) {
    img.resize(500, Jimp.AUTO).quality(80).getBuffer(Jimp.MIME_JPEG, function(err, buffer){
         res.set("Content-Type", Jimp.MIME_JPEG);
         res.send(buffer);
     });
  });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})