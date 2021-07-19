function ToyCard(props) {
    return (
        
        // Must return JSX as one Parent Level Element
        <div>

            {/* Render each value that we need via 
            the "toy" Object passed as a prop
            from "app.js" */}
            <h1>Toy Name: {props.toy.name}</h1>
            <img src={props.toy.image}/>
            <p>Likes: {props.toy.likes}</p>
        </div>
    );
}

// Export ToyCard Component to make usable elsewhere in our React app
export default ToyCard;