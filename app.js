const express = require('express');
const app = express();

// route to retrieve a list of items
app.get('/api/items', (req, res) => {
  // retrieve items from your database or other data source
  const items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' }
  ];

  res.json(items);
});

// start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});