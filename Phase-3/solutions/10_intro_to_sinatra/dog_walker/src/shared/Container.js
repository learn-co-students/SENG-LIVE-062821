import React from 'react';

function Container(props) {
  const { classes } = props;
  return (
    <div className={`${classes} w-4/5 mx-auto`}>{props.children}</div>
  );
}

export default Container;
