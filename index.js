const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = 3000;

app.get('/api/topics', async (req, res) => {
  const { search, sort } = req.query;

  if (!search || typeof search !== 'string' || search.trim() === '') {
    return res.status(400).json({ error: 'Invalid or missing search query' });
  }

  try {
    const filePath = path.join(__dirname, 'data', 'topics.json');
    const fileData = await fs.readFile(filePath, 'utf8');
    let topics = JSON.parse(fileData);

    let filtered = topics.filter(topic =>
      topic.name.toLowerCase().includes(search.toLowerCase())
    );

    if (sort === 'name') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    return res.status(200).json(filtered);
  } catch (err) {
    console.error('Error reading or parsing topics.json:', err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});
 