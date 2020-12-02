import React from "react";
/*
const withClass = props => (
    <div className={props.classes}>
        {props.children}
    </div>
);
*/
// other way of creating the HOC:

const withClass = (WrappedCopmonent, className) => {
    // function which returns a functional component
    // props!
    return props => (
        <div className={className}>
            <WrappedCopmonent {...props} />
        </div>
    );
}

export default withClass;
