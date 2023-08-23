import React from "react";

// hello with regular function
// function FunctionalGretings() {
//     return <h1>"Hello from React"</h1>
// }

// hello with arrow function
const FunctionalGretingsProps = (props) => {
    console.log(props);
    return <h1>Hello {props.greeting} i am {props.name}</h1>
}

export default FunctionalGretingsProps;
