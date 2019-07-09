import React, {Component} from 'react';

class CheckList extends Component{
    constructor(props){
        super(props);
    }

    render(){
        let tasks = this.props.tasks.map((task) => 
            <li className='checklist-task'>
                <input type='checkbox' defaultChecked={task.done} />
                {task.name}
                <a href='#' className='checklist_task-remove' />
            </li> 
        );

        return(
            <div className='checklist'>
                {tasks}
            </div>
        )
    }
}

export default CheckList;