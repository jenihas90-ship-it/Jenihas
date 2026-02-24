const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// In-memory mock database for airplanes
let fleet = [
  { id: 1, name: 'Boeing 787 Dreamliner', registration: 'ET-AOT', type: 'Passenger', status: 'Active' },
  { id: 2, name: 'Airbus A350-900', registration: 'ET-AVB', type: 'Passenger', status: 'Active' },
  { id: 3, name: 'Boeing 737 MAX 8', registration: 'ET-AWF', type: 'Passenger', status: 'Needs Maintenance' },
  { id: 4, name: 'Boeing 777-200LR', registration: 'ET-ANN', type: 'Passenger', status: 'Active' },
  { id: 5, name: 'Bombardier Dash 8 Q400', registration: 'ET-AQC', type: 'Regional', status: 'Needs Maintenance' }
];

// GET all fleet
app.get('/api/fleet', (req, res) => {
  res.json(fleet);
});

// POST add new airplane
app.post('/api/fleet', (req, res) => {
  const { name, registration, type, status } = req.body;
  
  if (!name || !registration || !type || !status) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const newPlane = {
    id: fleet.length > 0 ? Math.max(...fleet.map(p => p.id)) + 1 : 1,
    name,
    registration,
    type,
    status
  };

  fleet.push(newPlane);
  res.status(201).json(newPlane);
});

// PUT update status
app.put('/api/fleet/:id/status', (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const planeIndex = fleet.findIndex(p => p.id === parseInt(id));

  if (planeIndex === -1) {
    return res.status(404).json({ error: 'Airplane not found' });
  }

  if (status !== 'Active' && status !== 'Needs Maintenance') {
    return res.status(400).json({ error: 'Invalid status' });
  }

  fleet[planeIndex].status = status;
  res.json(fleet[planeIndex]);
});

// DELETE remove airplane
app.delete('/api/fleet/:id', (req, res) => {
  const { id } = req.params;
  const initialLength = fleet.length;
  fleet = fleet.filter(p => p.id !== parseInt(id));

  if (fleet.length === initialLength) {
    return res.status(404).json({ error: 'Airplane not found' });
  }

  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
