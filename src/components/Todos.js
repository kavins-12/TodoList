import React,{Component} from 'react';
import TodoITEMS from './TodoITEMS';
import PropTypes from 'prop-types';

class Todos extends Component{
  render(){
    
    return this.props.todos.map((todo)=>(
      <TodoITEMS key={todo.id} todo={ todo } markComplete={this.props.markComplete} deleteItem={this.props.deleteItem}/>
    ));
  }
}


Todos.propTypes={
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired
}

export default Todos;
