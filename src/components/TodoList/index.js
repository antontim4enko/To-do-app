import React, {Component} from 'react';
import TodoItem from './../TodoItem'

class TodoList extends Component {
    deleteId = (id) =>{
        this.props.delete(id)
    }
    boxToggle =(id) =>{
        this.props.check(id)
    }
    changeText = (text, newText) =>{
        this.props.changeTodo(text, newText)
    }
    render(){
        var TodoEntries = this.props.entries       
        return(
            <ul>{
        TodoEntries.map(item =>{
            return  <TodoItem checkToggle={this.boxToggle} delete={this.deleteId} key={item.id} id={item.id} finished={item.isDone} text={item.text} changeText={this.changeText} />
        })  }   
            </ul>
        );
    }
    
}

export default TodoList;