import React from 'react'

export default class Todo extends React.Component {
 
  handleClick = () => {
    this.props.handleToggle();
  }

  render() {
    return (
      <li> {onclick = this.handleClick} {this.props.todo.name} { this.props.todo.completed?<span>- completed</span> : <span></span>}</li>
    )
  }
}
