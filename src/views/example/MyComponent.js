import React from 'react';
import ChillComponent from './ChildComponent';

class MyComponent extends React.Component {
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
                />
            </>
        )
    }
}

export default MyComponent;