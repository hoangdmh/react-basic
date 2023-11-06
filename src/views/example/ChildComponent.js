import React from "react";

class ChillComponent extends React.Component {

    render(){
        return(
            <>
                <h2>Child component</h2>
                <p>{this.props.name}</p>
            </>
        )
    }
}

export default ChillComponent