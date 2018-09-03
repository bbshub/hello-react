import React from 'react';

// const withClass = (props) => {
//     return (
//         <div className={props.className}>
//            {props.children}
//         </div>
//     );
// }

const withClass = (WrappedComponent, className) => {
    return (props) => {
        return (
            <div className={className}>
                <WrappedComponent {...props}  />
            </div>
        );
    }
}

export default withClass;