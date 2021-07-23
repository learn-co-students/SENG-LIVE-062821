function NavBar({ color, title, icon, description }) {
  return (
    <div className={`ui inverted ${color} menu`}>
      <a className="item">
        <h2 className="ui header">
          <i className={`${icon} icon`} />
          <div className="content">{title}</div>
          <div className="sub header">{description}</div>
        </h2>
      </a>
    </div>
  );
};

export default NavBar;
