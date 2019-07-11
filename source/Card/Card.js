import React, {Component} from 'react';
import CheckList from '../CheckList/CheckList';

class Card extends Component{
    constructor(props){
        super(props);
        this.state = {
            showDetail: false,
        };

        this.toggleDetail = this.toggleDetail.bind(this);
    }

    toggleDetail(){
        this.setState({showDetail: !this.state.showDetail});
    }

    render(){
        let cardDetail;
        let sideColor = {
            position: 'absolute',
            zIndex: -1,
            top: 0,
            bottom: 0,
            left: 0,
            width: 7,
            backgroundColor: this.props.color
        };
    
        
        if(this.state.showDetail){
            cardDetail = (
                <div className='card-details'>
                    <div dangerouslySetInnerHTML={{__html: this.props.description}}></div>
                    <CheckList cardId={this.props.id} tasks={this.props.tasks} />
                </div>
            );
        }

        return(
            <div className='card'>
                <div style={sideColor}></div>
                <div className={this.state.showDetail ? 'card-title card-title-is-open' : 'card-title'} 
                     onClick={this.toggleDetail}>{this.props.title}</div>
                {cardDetail}
            </div>
        );
    }
}

export default Card;

