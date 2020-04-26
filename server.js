// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require('express');
const app = express();
app.set('view engine','pug');
app.set('views', './views')
// https://expressjs.com/en/starter/basic-routing.html
var todos= [
  {id: 0, todo: 'nấu cơm'},
  {id: 1, todo: 'giặt đồ '},
  {id: 2, todo: 'học bài'},
  {id: 3, todo: 'làm bài tập'},
  {id: 4, todo: 'nấu canh'},
];

app.get('/', (req, res) => {
  res.render('index',{
    name: 'Suong'
  });
});

app.get('/todos', (req, res) => {
  res.render('todos/index', {
    todos: todos 
  });
});
app.get('/todos/search', (req,res)=>{
  var q = req.query.q;
  var  matchedTodos= todos.filter((todo)=>{
    return todo.todo.indexOf(q) !== -1;
  });
  res.render('todos/index',{
    todos: matchedTodos
  });
});
// listen for requests :)
app.listen(process.env.PORT, () => {
  console.log("Server listening on port " + process.env.PORT);
});
