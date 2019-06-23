import React from 'react';
import Header from './header';
import {Container} from 'semantic-ui-react';

export default props => {
    return (
      <div>
      <Container>
      <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
          <Header> </Header>
              {props.children}
       <h4 style={{marginBottom:'10px'}}> <center>Designed By: SoberGeeks </center></h4> 
        </Container>
      </div>
   );
};
