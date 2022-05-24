import React from 'react';

const Article = React.forwardRef(({ ...rest }, ref) => <article {...rest} ref={ref} />);

export default Article;
