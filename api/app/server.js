'use strict';
const express = require('express');
const tr = require('tor-request');

const serverPort = 8080;
const serverHost = '0.0.0.0';
const torHost = 'tor-node';
const torPort = 9050;

tr.setTorAddress(torHost, torPort);

const app = express();
app.get('/:source/:target/:query', (req, res) => {
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx` +
  `&sl=${req.params.source}&tl=${req.params.target}&dt=t&dt=t&q=${encodeURIComponent(req.params.query)}`;
  tr.request(url, (err, response, body) => {
    if (!err && response.statusCode === 200) {
      const json = JSON.parse(body);
      let str = '';
      json[0].forEach((string) => str += string[0]);
      if (str.length > 0) {
        res.send({successText: str});
      } else {
        res.status(500).send(body);
      }
    } else {
      res.status(500).send(err);
    }
  });
});

app.listen(serverPort, serverHost);
console.log(`running on http://${serverHost}:${serverPort}`);