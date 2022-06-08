import React, {Suspense} from 'react';
import {Route} from 'react-router-dom';

function PublicRoutes({component: Component, strict, ...rest}) {

  return (
    <Route {...rest} render={props => {
      return (
        <Suspense fallback={<></>}>
        <Component {...props} />
        </Suspense>
      )
    }}/>
  );
}

export default PublicRoutes;
