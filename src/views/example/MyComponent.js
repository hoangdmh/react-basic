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
        // let currentTask = this.state.listTask;
        // currentTask.push(task)
        this.setState({
            listTask: [...this.state.listTask, task]
            // listTask: currentTask
        })
    };

    handleDeleteTask = (id) => {
        console.log('this is idTask:', id);
        let currentTask = this.state.listTask;
        currentTask = currentTask.filter((item) => {
            return item.id !== id
        })

        this.setState({
            listTask: currentTask
        })
    }

    render() {
        return (
            <>
                <AddTask
                    addNewTask={this.addNewTask}
                />

                <ChillComponent
                    listTask={this.state.listTask}
                    handleDeleteTask={this.handleDeleteTask}
                />
            </>
        )
    }
}

export default MyComponent;