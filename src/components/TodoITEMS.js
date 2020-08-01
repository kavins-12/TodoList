import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoITEMS extends Component{
    getStyle= ()=>{
      return {
        backgroundColor: '#f4f4f4',
        padding: '10px',
        border : '1px #ccc dotted',
        textDecoration :this.props.todo.completed? 'line-through' : 'none'
      }
    }
  
  render(){
    const {id , title} = this.props.todo;
        return(
            <div style={this.getStyle()}>
            <p>
              <input type="checkbox" onChange={this.props.markComplete.bind(this,id)}/> {' '}
              { title }
              <button onClick={this.props.deleteItem.bind(this,id)} style={deleteStyle}>X</button>
              </p>
            </div>
        );
    }
}

TodoITEMS.propTypes={
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired
  }

const deleteStyle={
  background: 'red',
  color: '#fff',
  borderRadius: '50%',
  padding: '5px 10px',
  border: 'none',
  float: 'right',
  cursor: 'pointer'
  
}

export default TodoITEMS;