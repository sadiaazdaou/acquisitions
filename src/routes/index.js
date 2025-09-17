import express from 'express';

const app = express();

// Simple endpoints
app.get('/', (req, res) => {
  res.status(200).send('Salam from Acquisitions')
});

export default app;
