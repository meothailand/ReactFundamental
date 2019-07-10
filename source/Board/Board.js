import React, {Component} from 'react';
import List from '../List/List.js';

class Board extends Component{
    constructor(props){
        super(props);
    }

    render(){
        let todos = this.props.cards.filter((card) => card.status === 'todo');
        let progresses = this.props.cards.filter((card) => card.status === 'progress');
        let dones = this.props.cards.filter((card) => card.status === 'done');
        return(
            <div className='app'>
                <List id='todo' title='To Do' cards={todos} />
                <List id='in-progress' title='In Progress' cards={progresses} />
                <List id='done' title='Done' cards={dones} />
            </div>
        );
    }
}

export default Board;