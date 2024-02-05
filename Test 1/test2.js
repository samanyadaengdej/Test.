const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let tasks = [2,3,4];

// แสดงรายการทั้งหมด
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// เพิ่ม Task
app.post('/tasks', (req, res) => {
  const { task } = req.body;
  if (task) {
    tasks.push(task);
    res.status(201).json({ message: 'Task added successfully' });
  } else {
    res.status(400).json({ error: 'Task is required' });
  }
});

// ลบ Task
app.delete('/tasks/:id', (req, res) => {
  const { id } = req.params;
  if (id && tasks[id]) {
    tasks.splice(id, 1);
    res.json({ message: 'Task deleted successfully' });
  } else {
    res.status(404).json({ error: 'Task not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
