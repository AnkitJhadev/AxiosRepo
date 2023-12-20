// GET REQUEST
function getTodos() {
//     axios({
//      method:'get',
//      url:'https://jsonplaceholder.typicode.com/todos',
//      params:{
//       _limit:5
//      }
//     })
//   }
  axios
      .get('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(res=> showOutput(res))
      .catch(err => console.log(err))

   }

  // POST REQUEST
  function addTodo() {
    axios
        .post('https://jsonplaceholder.typicode.com/todos?_limit=5',[
          {
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false
          },
          {
            "userId": 1,
            "id": 2,
            "title": "quis ut nam facilis et officia qui",
            "completed": false
          }
        ]

        )
        .then(res => showOutput(res))
        .catch(err => console.log(err));

  }
  
  // PUT/PATCH REQUEST
  function updateTodo() {
    axios
        .put('https://jsonplaceholder.typicode.com/todos/1',{
          "userId": 1,
          "id": 1,
          "title": "Updated Todos",
          "completed": true
        })
        .then(res => showOutput(res))
        .catch(err => console.log(err));
  }
  
  // DELETE REQUEST
  function removeTodo() {
    axios
    .delete('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => showOutput(res))
    .catch(err => console.log(err));
  }
  
  // SIMULTANEOUS DATA
  function getData() {
    axios
        .all([
             axios.get('https://jsonplaceholder.typicode.com/todos'),
             axios.get('https://jsonplaceholder.typicode.com/posts'),
            ])
            .then(axios.Spread((todos,posts) => showOutput(todos)))
            .catch(err => console.log(err));
  }
  
  // CUSTOM HEADERS
  function customHeaders() {
    console.log('Custom Headers');
  }
  
  // TRANSFORMING REQUESTS & RESPONSES
  function transformResponse() {
    console.log('Transform Response');
  }
  
  // ERROR HANDLING
  function errorHandling() {
    console.log('Error Handling');
  }
  
  // CANCEL TOKEN
  function cancelToken() {
    console.log('Cancel Token');
  }
  
  // INTERCEPTING REQUESTS & RESPONSES
    axios.interceptors.request.use{
      config =>{
        
      }
    }
  // AXIOS INSTANCES
  
  // Show output in browser
  function showOutput(res) {
    document.getElementById('res').innerHTML = `
    <div class="card card-body mb-4">
      <h5>Status: ${res.status}</h5>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Headers
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.headers, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Data
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.data, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Config
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.config, null, 2)}</pre>
      </div>
    </div>
  `;
  }
  
  // Event listeners
  document.getElementById('get').addEventListener('click', getTodos);
  document.getElementById('post').addEventListener('click', addTodo);
  document.getElementById('update').addEventListener('click', updateTodo);
  document.getElementById('delete').addEventListener('click', removeTodo);
  document.getElementById('sim').addEventListener('click', getData);
  document.getElementById('headers').addEventListener('click', customHeaders);
  document
    .getElementById('transform')
    .addEventListener('click', transformResponse);
  document.getElementById('error').addEventListener('click', errorHandling);
  document.getElementById('cancel').addEventListener('click', cancelToken);