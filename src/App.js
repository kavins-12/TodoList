import React,{Component} from 'react';
import Todos from './components/Todos';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import About from './components/pages/About';
import Header from './components/layout/Header';
import AddTodo from './components/layout/AddTodo';
import Axios from 'axios';


class App extends Component {

  state ={
    todos:[]
  }

  componentDidMount(){
    Axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5").then(res => this.setState({todos:res.data}))
  }

markComplete = (id)=>{
  this.setState({
    todos : this.state.todos.map(todos=>{
      if(todos.id===id){
      todos.completed=!todos.completed
      }
      return todos;
    })
  }
  );
}

deleteItem = (id)=>{
  
  Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res => this.setState({
    todos :[...this.state.todos.filter(todos => todos.id !== id)]
  }))
  
}

addTodo=(title)=>{
  Axios.post(`https://jsonplaceholder.typicode.com/todos`,{
    title: title,
    completed: false
  }).then(res => this.setState({todos:[...this.state.todos,res.data]}))

}

render(){
      
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header/>
            <Route exact path="/" render={props=>(
            <React.Fragment>
                <AddTodo addTodo={this.addTodo}/>
                <Todos todos={this.state.todos} markComplete={this.markComplete} deleteItem={this.deleteItem}/>
            </React.Fragment>
            )}/>

            <Route path="/about" component={About}/>
            
          </div>
        </div>
      </Router>
    );
    }
}

export default App;
