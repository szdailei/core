import React from 'react';
import classes from './Section.module.css';

/**
@examples
const gridTemplateAreas = `
'header'
'main'
'footer'
`;
<Section style={{gridTemplateColumns:"1fr", gridTemplateRows:"auto 1fr auto", gridTemplateAreas:{gridTemplateAreas}}}>
    <Header>{headerData}</Header>
    <Main>{mainData}</Main>
    <Footer>{footerData}</Footer>
</Section>
*/
// eslint-disable-next-line react/prop-types
const Section = React.forwardRef(({ className, ...rest }, ref) => (
  <section className={`${classes.section} ${className}`} {...rest} ref={ref} />
));

export default Section;
