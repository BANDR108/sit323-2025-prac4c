const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Exponentiation
app.get('/power', (req, res) => {
  const base = parseFloat(req.query.base);
  const exponent = parseFloat(req.query.exponent);

  if (isNaN(base) || isNaN(exponent)) {
    return res.status(400).json({ error: 'Invalid input. Base and exponent must be numbers.' });
  }

  const result = Math.pow(base, exponent);
  res.json({ operation: 'exponentiation', base, exponent, result });
});

// Square Root
app.get('/sqrt', (req, res) => {
  const number = parseFloat(req.query.number);

  if (isNaN(number) || number < 0) {
    return res.status(400).json({ error: 'Invalid input. Number must be a non-negative number.' });
  }

  const result = Math.sqrt(number);
  res.json({ operation: 'square_root', number, result });
});

// Modulo
app.get('/modulo', (req, res) => {
  const dividend = parseFloat(req.query.dividend);
  const divisor = parseFloat(req.query.divisor);

  if (isNaN(dividend) || isNaN(divisor)) {
    return res.status(400).json({ error: 'Invalid input. Dividend and divisor must be numbers.' });
  }

  if (divisor === 0) {
    return res.status(400).json({ error: 'Division by zero is not allowed.' });
  }

  const result = dividend % divisor;
  res.json({ operation: 'modulo', dividend, divisor, result });
});

// Root
app.get('/', (req, res) => {
  res.send('Welcome to the enhanced calculator microservice!');
});

app.listen(port, () => {
  console.log(`Calculator microservice is running on http://localhost:${port}`);
});