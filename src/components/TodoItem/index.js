import React, {Component} from 'react';
import './style.css'

 class TodoItem extends Component {
    state = {
        isDone:false,
        isEditing: false
    }
    delete(id){
        this.props.delete(id);
    }
    onEditClick = () =>{
      this.setState({
          isEditing :!this.state.isEditing 
      })
    }  
    onSave = (e, text)=>{
        e.preventDefault()
        this.props.changeText(text, this.refs.textInput.value)
        text = this.refs.textInput.value;
        this.setState({
            isEditing : false
        })
    }
    checkboxChange = (id) =>{
        this.props.checkToggle(id)
    }
    render(){    
         return(
           <li className="todo-item">
             {this.state.isEditing ?
                    <form>
                        <input type="text" defaultValue={this.props.text} ref="textInput" />
                        <button type="submit" onClick={(e)=>this.onSave(e, this.props.text)}>Save</button>
                    </form> : <div><label><input onChange={() =>this.checkboxChange(this.props.id)} type="checkbox" checked={this.props.finished} /> {this.props.text }</label></div>}
                    <div>
                        <button className="controll-btns" onClick={this.onEditClick} >{this.state.isEditing ? "Cancel" : <i class="fa fa-pencil-alt"></i>}</button> 
                        {this.state.isEditing ? " " :  <button className="controll-btns" onClick={() => this.delete(this.props.id)} ><i class="fas fa-trash-alt"></i></button>}
                     </div>  
           </li>                       
         );
     }
 }

export default TodoItem;