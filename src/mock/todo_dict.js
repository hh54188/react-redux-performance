let count = 10e3; // 10k
const todos = {};
const ids = [];

while (count--) {
  todos[count] = {
    completed: false
  };
  ids.push(count);
}

export { todos, ids };
