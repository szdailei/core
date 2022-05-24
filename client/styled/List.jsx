import React from 'react';
import classes from './List.module.css';

// eslint-disable-next-line react/prop-types
const List = React.forwardRef(({ className, ordered = false, depth = 1, children, style, ...rest }, ref) => {
  let classOfList;

  switch (depth) {
    case 2:
      classOfList = classes.listDepth2And3;
      break;
    case 1:
    case 4:
    default:
      break;
  }

  if (ordered) {
    return (
      <ol className={`${classOfList} ${className}`} {...rest} ref={ref}>
        {children}
      </ol>
    );
  }

  return (
    <ul className={classOfList} {...rest} ref={ref}>
      {children}
    </ul>
  );
});

export default List;
