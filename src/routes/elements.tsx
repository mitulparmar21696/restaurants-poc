/* eslint-disable react/display-name */
import React, { Suspense, lazy, ElementType } from 'react';

// ----------------------------------------------------------------------

const Loadable = (Component: ElementType) => (props: React.ComponentProps<'div'>) => {
  return (
    <Suspense fallback={'Loading'}>
      <Component {...props} />
    </Suspense>
  );
};

// Dashboard Pages
export const Dashboard = Loadable(lazy(() => import('pages/Dashboard/Dashboard')));
