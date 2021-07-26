function NavBar(props) {
  return (
    <div className={`ui inverted ${props.color} menu`}>
      <button className="item">
        <h2 className="ui header">
          <i className={`${props.icon} icon`} />
          <div className="content">{props.title}</div>
          <div className="sub header">{props.description}</div>
        </h2>
      </button>

      {/* Call changeColor() via onClick using props */}

      {/* WRONG WAY - Passing in RETURN of a function */}
      {/* <button onClick={props.changeColor("purple")}>Change Color</button> */}
      
      {/* RIGHT WAY - Passing in an ENTIRE function (callback) */}
      <button onClick={() => props.changeColor("purple")}>
        Change Color
      </button>
    </div>
  );
};

export default NavBar;