import express from 'express';


const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(express.json());

// Simple endpoints
app.get('/', (req, res) => {
    res.json({ status: 'OK', time: new Date().toISOString() });
});

const server = app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});
