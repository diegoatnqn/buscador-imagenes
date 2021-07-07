import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = 3000;
app.use(express.static('dist/buscador-imagenes'));
app.get('/asd', (req, res) => {
  res.send(process.env.TEST);
});

app.listen(PORT, () => {
  console.log(`Express with Typescript! http://localhost:${PORT}`);
});
