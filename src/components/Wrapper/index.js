import React, {Component} from 'react';
import TodoList from './../TodoList'
import './style.css'

class Wrapper extends Component{
	constructor(props){
        super(props);
        
        var initialState;
        var localState = localStorage.getItem('localItems');
        if(localState !== null){
          initialState = JSON.parse(localState);
        }else{
          initialState = [
          {
            id:1,
            text:"Clean up house"
          },
          {
            id:2,
            text:"Buy some milk"
          }
          ]
         
      }
        
        this.state = {
        value:"",
        items:initialState 
        }
        
    }
    
    componentDidUpdate(){
      localStorage.setItem('localItems', JSON.stringify(this.state.items))
    }
    deleteItemKey = (id) =>{
        var filteredItems = this.state.items.filter(function(item){
            return(item.id !== id)
        })
        this.setState({
            items: filteredItems
        })
    }
    
    onChangeHandler = (e) =>{
        this.setState({
            value:e.currentTarget.value
        })
    }
    onAdd = (e) =>{
       e.preventDefault()
       if(this.state.value.trim()){
           var newTask = {
           id : +new Date(),
           isDone:false,
           text: this.state.value
       }
       this.setState((prevState) => {
          return {
              items : prevState.items.concat(newTask)
          };
       });
       this.setState({
           value : ""
       })    
       }
           
    }
    changeTextTodo = (text, newText) =>{
       var destination =  this.state.items.find(todo => todo.text === text)
       destination.text = newText ;
       this.setState({})
    }
    togglecheck = (id) =>{
        var goal = this.state.items.find(todo => todo.id === id)
        
        goal.isDone = !goal.isDone ;
        this.setState({})
        
    }
    render(){
       return(
           <div className="wrapper">
              <div className="header" ><h1>Todo App</h1></div>
               <form onSubmit={this.onAdd}>
                  <input value={this.state.value} onChange={this.onChangeHandler} placeholder="Enter task" />  
               <button type="submit">ADD</button>
               </form>
               
                <TodoList check={this.togglecheck} delete={this.deleteItemKey} entries={this.state.items}
             changeTodo={this.changeTextTodo} />
           </div>
          ); 
    }

}

export default Wrapper;



   
       
   
    
    