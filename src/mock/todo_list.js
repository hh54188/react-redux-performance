let count = 10e3; // 10k
const todos = [];

while (count--) {
  todos.push({
    id: count,
    completed: false
  });
}

export default todos;
