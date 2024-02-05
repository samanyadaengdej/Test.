const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

let todos = [];

// รับ To-Do List ทั้งหมด
app.get('/todos', (req, res) => {
  res.json(todos);
});

// เพิ่ม To-Do
app.post('/todos', (req, res) => {
  const { task } = req.body;
  const newTodo = { id: todos.length + 1, task };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// ลบ To-Do
app.delete('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  todos = todos.filter(todo => todo.id !== id);
  res.status(204).send();
});

// แก้ไข To-Do
app.put('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { task } = req.body;

  todos = todos.map(todo => (todo.id === id ? { ...todo, task } : todo));

  res.json(todos.find(todo => todo.id === id));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
app.get('/', (req, res) => {
    res.send('Hello World!');
  });
  