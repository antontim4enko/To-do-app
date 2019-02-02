import React, { Component } from 'react';
import NoteItem from '../NoteItem';
import axios from 'axios';

class NotesList extends Component {
updateNote = async (id, text) => {
    await axios.put('https://reactnotesapi.herokuapp.com/api/updateNote', {
        id: id,
        text: text
    });
    this.props.getData()
}

    render() {
        return (
            <div>
                {this.props.notes.map( note => <NoteItem key={note.id} update={this.updateNote} text={note.text} id={note._id} delete={this.props.delete} />)}
            </div>
        );
    }
}

export default NotesList;
