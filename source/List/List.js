import React, {Component} from 'react';
import Card from '../Card/Card';

class List extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const cards = this.props.cards.map((card) => {
            return <Card id={card.id}
                title={card.title}
                description={card.description}
                tasks={card.tasks} />
        });

        return(
            <div className='list'>
                <h1>{this.props.title}</h1>
                {cards}
            </div>
        );
    }
}

export default List;