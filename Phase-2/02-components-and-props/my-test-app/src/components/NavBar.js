import NavLink from './NavLink';

function NavBar({ isLoggedIn }) {
    
    // TERNARY OPERATOR
    // CONDITION ? IF TRUE : IF FALSE
    // isLoggedIn ? "Logged In" : "Logged Out"

    return (
        <nav>
            
            {/* Ternary 1 - Better for Complex Multi-Line Rendering */}
            {/* { isLoggedIn ? 
                <p>Logged In</p>
                // more JSX...
                // ...
            : 
                <p>Logged Out</p> 
                // more JSX...
                // ...
            } */}
            
            {/* Ternary 2 - Better for Simple Inline Rendering */}
            <p>{isLoggedIn ? "Logged In" : "Logged Out" }</p>

            <hr />
            <NavLink title="First Link" content="some content" />
            <NavLink title="Second Link" />
        </nav>
    );

    // Use isLoggedIn prop to conditionally render entire JSX snippet that we want
    // if (isLoggedIn) {
    //     return (
    //         <nav>
    //             <p>Logged In</p>
    //             <hr />
    //             <NavLink 
    //                 title="First Link" 
    //                 content="some content"
    //                 someProp={someProp}
    //             />
    //             <NavLink title="Second Link" />
    //         </nav>
    //     );
    // } else {
    //     return (
    //         <nav>
    //             <p>Logged Out</p>
    //             <hr />
    //             <NavLink 
    //                 title="First Link" 
    //                 content="some content"
    //                 extra="extra prop"
    //             />
    //             <NavLink title="Second Link" />
    //         </nav>
    //     );
    // }
}

export default NavBar;