const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Dummy data
let services = [
  { id: 1, name: 'Service 1', description: 'Description for Service 1' },
  { id: 2, name: 'Service 2', description: 'Description for Service 2' }
];

// Routes
app.get('/services', (req, res) => {
  res.json(services);
});

app.get('/services/:id', (req, res) => {
  const service = services.find(s => s.id === parseInt(req.params.id));
  if (!service) {
    res.status(404).send('Service not found');
    return;
  }
  res.json(service);
});

app.post('/services', (req, res) => {
  const { name, description } = req.body;
  if (!name || !description) {
    res.status(400).send('Name and description are required');
    return;
  }
  const id = services.length + 1;
  const newService = { id, name, description };
  services.push(newService);
  res.status(201).json(newService);
});

app.put('/services/:id', (req, res) => {
  const service = services.find(s => s.id === parseInt(req.params.id));
  if (!service) {
    res.status(404).send('Service not found');
    return;
  }
  const { name, description } = req.body;
  if (!name || !description) {
    res.status(400).send('Name and description are required');
    return;
  }
  service.name = name;
  service.description = description;
  res.json(service);
});

app.delete('/services/:id', (req, res) => {
  const index = services.findIndex(s => s.id === parseInt(req.params.id));
  if (index === -1) {
    res.status(404).send('Service not found');
    return;
  }
  services.splice(index, 1);
  res.sendStatus(204);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
