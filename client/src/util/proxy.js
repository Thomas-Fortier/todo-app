export function getTodoProxy() {
  return process.env.NODE_ENV === 'development' ?
    'http://localhost:5000/api/v1/todos' : '/api/v1/todos';
}