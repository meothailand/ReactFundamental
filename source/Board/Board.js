import React, {Component} from 'react';
import List from '../List/List';

class Board extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className='app'>
                <List id='todo' title='To Do' cards={this.props.cards.filter((card) => {card.status === 'todo'})} />
                <List id='in-progress' title='In Progress' cards={this.props.filter((card) => {card.status === 'progress'})} />
                <List id='done' title='Done' cards={this.props.cards.filter((card) => {card.status === 'done'})} />
            </div>
        );
    }
}

export default Board;