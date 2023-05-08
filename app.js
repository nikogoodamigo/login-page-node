const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const app = express();

app.use(cors());

const secret = crypto.randomBytes(64).toString('hex');

app.get('/api/createToken', (req, res)=>{

  const currentTime = new Date();
  const expiresIn = 60 * 60;
  const expiresAt = new Date(currentTime.getTime() + expiresIn * 1000);

  this.secret = secret;
  const token = jwt.sign({id: 123, secret}, secret, {expiresIn});
  res.send({
    token, 
    created_at: currentTime.toLocaleString(), 
    expires_at: expiresAt.toLocaleString()
  });
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
