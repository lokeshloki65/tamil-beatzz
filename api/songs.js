
import axios from 'axios';

export default async function handler(req, res) {
  const query = req.query.query;
  if (!query) return res.status(400).json({ error: 'Missing query' });

  try {
    const response = await axios.get(`https://saavn.dev/api/search/songs?query=${query}`);
    res.status(200).json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch songs' });
  }
}
