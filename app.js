const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const bodyParser = require('body-parser');


const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const secret = crypto.randomBytes(64).toString('hex');

app.post('/api/createToken', (req, res) => {
  const {username, password} = req.body;

  if (username === 'username' && password === 'passwd') {
    const currentTime = new Date();
    const expiresIn = 60 * 60;
    const expiresAt = new Date(currentTime.getTime() + expiresIn * 1000);
    const responseMessage ='';
    const responseCode = 0;

    this.secret = secret;
    const token = jwt.sign({id: 123, secret}, secret, {expiresIn});

    res.send({

      token,
      created_at: currentTime.toLocaleString(),
      expires_at: expiresAt.toLocaleString()
    });
  } else {
    res.send({responseCode: 401, responseMessage: 'Invalid credentials'});
  }
});

  

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
