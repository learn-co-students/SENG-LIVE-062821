// Access / Assign Props Using Array Destructuring
function NavLink({ title, content="Add New Content Here!" }) {
    // console.log(title);
    
    return (
        <>
            <h2>{title}</h2>
            <p>{content}</p>
        </>
    );
}

export default NavLink;