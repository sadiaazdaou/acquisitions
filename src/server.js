import app from './index'

const PORT = process.env.PORT ?? 3000;

const server = app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});