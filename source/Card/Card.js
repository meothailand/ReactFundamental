import React, {Component} from 'react';
import CheckList from '../CheckList/CheckList';

class Card extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className='card'>
                <div className='card-title'>{this.props.title}</div>
                <div className='card-details'>
                    {this.props.description}
                    <CheckList cardId={this.props.id} tasks={this.props.tasks} />
                </div>
            </div>
        );
    }
}

export default Card;

