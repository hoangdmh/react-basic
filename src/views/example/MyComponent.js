import React from 'react';
import ChillComponent from './ChildComponent';

class MyComponent extends React.Component {
    state = {
        listTask: [
            { id: 1, task: 'Di chợ', price: 500 },
            { id: 2, task: 'Học bài', price: 400 },
            { id: 3, task: 'ReactJs', price: 1000 }
        ]
    }
    handleClick = () => {
        console.log('this is:');
    };

    render() {
        return (
            <>
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