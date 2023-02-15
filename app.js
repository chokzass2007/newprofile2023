import express from 'express';
import chalk from 'chalk';
import debug from 'debug';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
const app = express();
const port = 3002;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,"/pubilc/")));

app.get('/', (req, res) => {
  res.send('Hello borntoDexxxdx');
})

app.listen(port, () => {
  console.log('Lestening on port %d',port)
})