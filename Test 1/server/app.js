const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

let todoList = [];

app.get('/api/todos', (req, res) => {
  res.json(todoList);
});

app.post('/api/todos', (req, res) => {
  const { task } = req.body;

  if (!task) {
    return res.status(400).json({ error: 'Task is required' });
  }

  const newTodo = {
    id: uuidv4(),
    task,
    completed: false,
  };

  todoList.push(newTodo);
  res.status(201).json(newTodo);
});

app.put('/api/todos/:id', (req, res) => {
  const todoId = req.params.id;
  const { completed } = req.body;

  const todoIndex = todoList.findIndex((todo) => todo.id === todoId);

  if (todoIndex === -1) {
    return res.status(404).json({ error: 'To-Do not found' });
  }

  todoList[todoIndex].completed = completed;
  res.json(todoList[todoIndex]); 
});


app.delete('/api/todos/:id', (req, res) => {
  const todoId = req.params.id;
  todoList = todoList.filter((todo) => todo.id !== todoId);
  res.json({ message: 'To-Do deleted successfully' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
