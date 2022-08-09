import React from 'react'
import TodoList from './TodoList';
import Form from './Form';


export default class App extends React.Component {
 
  constructor() {
    super();
    this.state = {
      todos: [
        {
          name: 'Organize Garage',
          id: 1528817077286, // could look different, you could use a timestamp to generate it
          completed: false
        },
        {
          name: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        },
        {
          name: 'Read books',
          id: 1528817456358,
          completed: false
        }
      ]
    }
  }

  handleClear = () => {
    this.setState({
      ...this.state.todos.filter(todo => {
        return (todo.completed === false)
      })
    })
  }

  handleAdd = (red) => {

    const newTodo = {
      name: red,
      id: Date.now(),
      completed: false
    };

    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTodo]
    })
  }
  

  handleToggle = (clickedId) => {

    this.setState({
      ...this.state,
      todos: this.todos.map(todo => {
        if (todo.id === clickedId){
          return {
            ...todo,
            completed: !todo.completed
          }
        }else{
          return todo
        }
      })
  })
  }

  render() {
    const { todos } = this.state;
    return (
      <div>
       <h1>Todolist</h1> 
       <TodoList handleToggle={this.handleToggle} todos={todos}/>
       <Form handleAdd={this.handleAdd}/>
       <button onClick={this.handleClear}>Clear</button>
      </div>
    )
  }
}
