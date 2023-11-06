import React from 'react';
import ChillComponent from './ChildComponent';

class MyComponent extends React.Component {
    state = {
        listTask: [
            {id: 1, task: 'Di chợ'},
            {id: 2, task: 'Học bài'},
            {id: 3, task: 'ReactJs'}
        ]
    }
    handleClick = () => {
        console.log('this is:');
    };

    render(){
        return(
            <>
                <h2> Hi, I am Hoang</h2>
                <button onClick={this.handleClick}>Click me</button>

                <ChillComponent 
                    name={'child component one'}
                    age={20}
                    listTask={this.state.listTask}
                />
            </>
        )
    }
}

export default MyComponent;