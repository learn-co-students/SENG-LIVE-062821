// Create Component Function
function Header(props) {
    
    // props = JS Object
    
    // PULL VALUE VIA KEY REFERENCE 
    // let props = { firstName: "Louis", lastName: "Medina" }
    // x.firstName => "Louis"
    // x.lastName => "Medina"

    // PULL VALUE VIA DESTRUCTURING
    // let props = { firstName: "Louis", lastName: "Medina" }
    // const { firstName, lastName } = props
    // firstName => "Louis"
    // lastName => "Medina"

    // Return One Parent Level JSX Element
    return (
        <header>
            <h1>{props.firstName} {props.lastName}</h1>
        </header>        
    );
}

// Export One Function (Header) To Be Used Elsewhere
export default Header;