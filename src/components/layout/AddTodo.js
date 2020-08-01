
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {
    state={
        title:''
    }

    onChange =(e) =>{
        this.setState({title:e.target.value});
    }

    submitReq=(e)=>{
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title:''});
    }

    render() {
        return (
            <form onSubmit={this.submitReq} style={{ display: 'flex'}}>
                <input type='text' placeholder=" Add your works here!" name='title' style={{ flex:'10',padding:'5px'}} value={this.state.title} onChange={this.onChange}/>
                <input type='submit' value='submit' className='btn' style={{flex : '1'}} />
            </form>
        )
    }
}

AddTodo.propTypes={
    addTodo: PropTypes.func.isRequired
}

export default AddTodo
