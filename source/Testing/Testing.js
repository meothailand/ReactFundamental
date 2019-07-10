import React, {Component} from 'react';

class Testing extends Component{

    render(){
        return(
            <div>
                <h1>This can be displayed!</h1>
                <h2>With props: {this.props.name}</h2>
            </div>
        );
    }
}

export default Testing;