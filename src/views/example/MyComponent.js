import React from 'react';

class MyFunction extends React.Component {
    handleClick = () => {
        console.log('this is:');
    };

    render(){
        return(
            <>
                <h2> Hi, I am Hoang</h2>
                <button onClick={this.handleClick}>Click me</button>
            </>
        )
    }
}

export default MyFunction;