import React from "react";

/* Class component */
// class ChillComponent extends React.Component {

//     render(){
//         let { name, age, listTask } = this.props
//         return(
//             <>
//                 <h2>Child component</h2>
//                 <p>{name} - {age}</p>

//                 {
//                     listTask.map((item, index) => {
//                         return(
//                             <div className="list-task" key={item.id}>
//                                 {item.task}
//                             </div>
//                         )
//                     })
//                 }

//             </>
//         )
//     }
// }


/* Function component */
const ChillComponent = (props) => {
    let { name, age, listTask } = props
    return (
        <>
            <h2>Child component</h2>
            <p>{name} - {age}</p>
            {
                listTask.map((item, index) => {
                    return (
                        <div className="list-task" key={item.id}>
                            {item.task}
                        </div>
                    )
                })
            }
        </>
    )
}

export default ChillComponent