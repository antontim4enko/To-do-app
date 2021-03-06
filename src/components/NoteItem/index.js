import React, {Component} from 'react';
import './style.css'

 class NoteItem extends Component {
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
    onSave = (e, id)=>{
        e.preventDefault()
        if(this._textInput.value.trim()){
          this.props.update(id, this._textInput.value);
          this.setState({
              isEditing : false
          })
        }
        
    }

    componentDidUpdate() {
      console.log()
      if(this._textInput){
        this._textInput.focus()
      }
    }
    render(){    
         return(
           <li className={this.state.isEditing ? "todo-item-editing" : "todo-item"}>
             {this.state.isEditing ?
                    <form>
                        <input type="text" defaultValue={this.props.text} ref={(input) => { this._textInput = input;}} />
                        <button type="submit" onClick={(e) => this.onSave(e, this.props.id)}>Save</button>
                    </form> : 
                    <div>
                        <label className={this.props.finished ? "label-finished" : ""} >
                          {this.props.text }
                        </label>
                    </div>  
                    
              }
              {
                !this.state.isEditing && 
                    <div>
                      <button className="controll-btn" onClick={this.onEditClick} ><i className="fa fa-pencil-alt"></i></button> 
                      <button className="controll-btn" onClick={() => this.delete(this.props.id)} ><i className="fas fa-trash-alt"></i></button>
                    </div>
              }
                     
           </li>                       
         );
     }
 }

export default NoteItem;