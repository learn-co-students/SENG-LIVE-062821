import { useState } from 'react';

function Button({ name, visibilityHandler }) {
    
    // Create ONE state that will keep track of whether
    // a Button has been toggled, "isToggled"
    const [isToggled, setToggle] = useState(false);
    
    function toggleVisibility () {
        setToggle(!isToggled);
        if (visibilityHandler) { visibilityHandler() };
    }

    return (
        // <>...</> is shorthand for <React.Fragment></React.Fragment>
        <>
            {name === "cart" ? (
                <button onClick={toggleVisibility}>
                    { isToggled ? "Added to Cart" : "Add to Cart" }
                </button>
            ) : (
                <button onClick={toggleVisibility}>
                    { isToggled ? '❤️' : '♡' }
                </button>
            )}
        </>
    )    
    
    // Rendering conditional logic outside of return statement

    // if (props.name === "cart") {
    //     return (
    //         <button onClick={() => setToggle(!isToggled)}>
    //             { isToggled ? "Added to Cart" : "Add to Cart" }
    //         </button>
    //     );
    // } else {
    //     return (
    //         <button onClick={() => setToggle(!isToggled)}>
    //             { isToggled ? "Liked" : "Like" }
    //         </button>
    //     );
    // }
};

export default Button;