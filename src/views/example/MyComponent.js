import React from 'react';
import ChillComponent from './ChildComponent';
import AddTask from './AddTask';

class MyComponent extends React.Component {
    state = {
        listTask: [
            { id: 1, task: 'Di chợ', price: 500 },
            { id: 2, task: 'Học bài', price: 400 },
            { id: 3, task: 'ReactJs', price: 1000 }
        ]
    }
    addNewTask = (task) => {
        // console.log('this is task:', task);
        this.setState({
            listTask: [...this.state.listTask, task]
        })
    };

    render() {
        return (
            <>
                <AddTask addNewTask={this.addNewTask} />

                <ChillComponent
                    listTask={this.state.listTask}
                />
            </>
        )
    }
}

export default MyComponent;